/* eslint-disable @typescript-eslint/no-explicit-any */
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from './configuration.firebase'
import addPatient from '@/utils/services/users/userService'
import { Forms } from '@/components/elements/Forms'



export const IniciarSesion = () => {
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider)
      const user = res.user

      console.log(user.uid)
      await addPatient(user, '0f467c66-5476-4e75-a76a-a1268e3c8704')
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
