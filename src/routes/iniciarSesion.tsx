import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./auth/configuration.firebase";
import addPatient from "@/utils/services/users/userService";


export const IniciarSesion = () => {
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      
  
      console.log(user.uid)
      await addPatient(user, "0f467c66-5476-4e75-a76a-a1268e3c8704")
      }
    catch (err:any) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <>
      <h1>INICIAR SESION - VISTA PARA EL INICIO DE SESION!</h1>
      <button onClick={signInWithGoogle}>Sign In</button>
    </>
  )
}
