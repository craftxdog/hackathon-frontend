import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from './configuration.firebase'
import addPatient, { searchUserByNameAndLastName } from '@/utils/services/users/userService'
import { convertFirebaseUserToUserAndPatient } from '@/utils/interfaces/user'

export const IniciarSesion = () => {
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider)

      const { user, patient } = convertFirebaseUserToUserAndPatient(res);
      console.log(user)

      let result = await addPatient(user, patient)

      let resultSearch = await searchUserByNameAndLastName(user.name, null)

      console.log(resultSearch)
      console.log(result)
    } catch (err: any) {
      console.error(err)
      alert(err.message)
    }
  }

  return (
    <>
      <h1>INICIAR SESION - VISTA PARA EL INICIO DE SESION!</h1>
      <button onClick={signInWithGoogle}>Sign In</button>
    </>
  )
}
