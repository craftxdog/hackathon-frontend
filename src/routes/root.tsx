import Header from '@/components/header'
import { Outlet } from 'react-router-dom'

export const Root = () => {
  return (
    <>
      {/* Componente que aparecera en cada pagina o ruta que se acceda. */}
      
      <Header />
      

      <main>
        <Outlet />
      </main>

      {/* Componente que aparecera en cada pagina o ruta que se acceda. */}
      <footer>FOOTER AQUI!</footer>
    </>
  )
}
