import Header from '@/components/header'
import { Outlet } from 'react-router-dom'

export const Root = () => {
  return (
    <>
      {/* Componente que aparecera en cada pagina o ruta que se acceda. */}
      
      <Header />
      

      <main>
        {/* La etiqueta o componente Outlet,
                    es un componente especial de react-router-dom,
                    ayuda a que cada pagina creada herede la estructura y
                    componentes que se encuentre en este archivo. */}
        <Outlet />
      </main>

      {/* Componente que aparecera en cada pagina o ruta que se acceda. */}
      <footer>FOOTER AQUI!</footer>
    </>
  )
}
