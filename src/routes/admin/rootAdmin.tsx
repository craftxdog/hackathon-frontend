import { Outlet } from 'react-router-dom';

export const RootAdmin = () => {
  return (
    <>
      {/* La navegacion del panel debe ser diferente a la que se ve en la pagina principal,
      debe tener otros tipos enlaces relacionados a las acciones que podra realizar
      el usuario en relacion a su role. */}
      <div className='flex'>
        
      </div>

      <main>
        <Outlet />
      </main>
    </>
  )
}
