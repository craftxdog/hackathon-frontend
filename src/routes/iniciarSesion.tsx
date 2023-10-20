import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./auth/configuration.firebase";


export const IniciarSesion = () => {
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      
  
      console.log(user)
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
