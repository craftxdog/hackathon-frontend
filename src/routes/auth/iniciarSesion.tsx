/* eslint-disable @typescript-eslint/no-explicit-any */
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from './configuration.firebase'
import { Forms } from '@/components/elements/Forms'
import addPatient, { searchUserByNameAndLastName } from '@/utils/services/users/userService'
import { convertFirebaseUserToUserAndPatient } from '@/utils/interfaces/user'


export const IniciarSesion = () => {
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider)

      const { user, patient } = convertFirebaseUserToUserAndPatient(res);
      console.log(user)

      const result = await addPatient(user, patient)

      const resultSearch = await searchUserByNameAndLastName(user.name, null)

      console.log(resultSearch)
      console.log(result)
    } catch (err: any) {
      console.error(err)
      alert(err.message)
    }
  }
  return (
    <>
      <div className="flex w-full h-screen">
        <div className='w-full flex items-center justify-center lg:w-1/2'>
          <Forms></Forms>
        </div>

        <div className='hidden lg:flex items-center justify-center h-full w-1/2 bg-gray-200'>
          <div className='w-60 h-60 bg-gradient-to-tr from-teal-500 to-violet-500 rounded-full'/>
          <div className='w-full h-1/2 bg-white/10 backdrop-blur-lg'/>
        </div>
      </div>
    </>
  )
}
