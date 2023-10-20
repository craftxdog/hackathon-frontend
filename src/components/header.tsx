import { LogIn, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='fixed top-0 w-full left-0 bg-white z-50 border-b-[1px]'>
      <nav className='flex items-center h-20 container justify-between'>
        <Link to='/'>
          <img className='w-32' src='/img/ReMeNicLogo.png' alt='REMENIC' />
        </Link>
        <div className='max-md:fixed max-md:bg-white max-md:right-0 max-md:top-0 max-md:h-full max-md:w-[70%]'>
          <ul></ul>
          <div>
            <X />
          </div>
        </div>
        <div className='flex items-center gap-x-4'>
          <Link
            to='/auth/inciar-sesion'
            className='bg-gray-200 text-primary rounded-lg py-2 px-2'
          >
            <LogIn className='w-5 h-5' />
            <span className='hidden'>Iniciar Sesión</span>
          </Link>
          <Menu className='w-8 h-8 text-primary' />
        </div>
      </nav>
    </header>
  )
}
