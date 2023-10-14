import { buttonVariants } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <h1>HOME AQUI - VISTA PRINCIPAL DE LA PAGINA!</h1>
      <Link
        className={buttonVariants({ variant: 'link' })}
        to='/iniciar-sesion'
      >
        Iniciar Sesión
      </Link>
    </>
  )
}
