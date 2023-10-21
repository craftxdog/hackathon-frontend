import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from './configuration.firebase'
import addPatient from '@/utils/services/users/userService'
import { FirebaseUser } from '@/utils/interfaces/firebase/user.firebase'
import { convertFirebaseUserToUserAndPatient } from '@/utils/interfaces/user'

export const IniciarSesion = () => {
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider)

      const {user, patient} = convertFirebaseUserToUserAndPatient(res);
      console.log(user)

      let result= await addPatient(user, patient)
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
