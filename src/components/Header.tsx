import { cn } from '@/lib/utils'
import {
  Briefcase,
  FileQuestion,
  Home,
  LogIn,
  Menu,
  Users,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({
  linkPath,
  linkName,
  children,
  handleCloseNav,
}: {
  linkPath: string
  linkName: string
  children: JSX.Element
  handleCloseNav: () => void
}) => {
  return (
    <li>
      <Link
        to={linkPath}
        onClick={handleCloseNav}
        className='text-primary flex items-center font-medium text-lg md:px-5 md:duration-200
        md:hover:bg-gray-200 md:py-3 md:rounded-lg'
      >
        {children}
        {linkName}
      </Link>
    </li>
  )
}

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleOpenNav = () => setIsNavOpen(true)

  const handleCloseNav = () => setIsNavOpen(false)

  return (
    <header className='fixed top-0 w-full left-0 bg-white z-50 border-b-[1px]'>
      <nav className='flex items-center h-20 container justify-between'>
        <Link to='/'>
          <img
            className='w-32 md:w-48'
            src='/img/ReMeNicLogo.png'
            alt='REMENIC'
          />
        </Link>
        <div
          className={cn(
            'max-md:fixed max-md:rounded-bl-lg max-md:duration-300 max-md:bg-white max-md:pt-20 max-md:pl-8 max-md:top-0 max-md:border-b-[1px] max-md:h-[50%] max-md:w-[70%] max-md:border-l-[1px]',
            isNavOpen ? 'max-md:right-0' : 'max-md:-right-[100%]',
          )}
        >
          <ul className='flex flex-col gap-y-6 md:flex-row md:items-center'>
            <NavLink
              linkPath='/'
              linkName='Inicio'
              handleCloseNav={handleCloseNav}
            >
              <Home className='mr-2 w-5 h-5 md:hidden' />
            </NavLink>
            <NavLink
              linkPath='/'
              linkName='Servicios'
              handleCloseNav={handleCloseNav}
            >
              <Briefcase className='mr-2 w-5 h-5 md:hidden' />
            </NavLink>
            <NavLink
              linkPath='/'
              linkName='Nosotros'
              handleCloseNav={handleCloseNav}
            >
              <Users className='mr-2 w-5 h-5 md:hidden' />
            </NavLink>
            <NavLink
              linkPath='/'
              linkName='FAQs'
              handleCloseNav={handleCloseNav}
            >
              <FileQuestion className='mr-2 w-5 h-5 md:hidden' />
            </NavLink>
          </ul>
          <div
            className='absolute right-8 top-6 cursor-pointer md:hidden'
            onClick={handleCloseNav}
          >
            <X className='w-8 h-8 text-primary' />
          </div>
        </div>
        <div className='flex items-center gap-x-4'>
          <Link
            to='/auth/iniciar-sesion'
            className='bg-gray-200 text-primary rounded-lg py-2 px-2 md:flex md:items-center md:px-5 md:py-3
            md:font-medium md:text-lg md:duration-200 md:hover:bg-mountain-meadow md:hover:text-white'
          >
            <LogIn className='w-5 h-5 md:mr-2' />
            <span className='hidden md:block'>Iniciar Sesión</span>
          </Link>
          <div className='cursor-pointer md:hidden' onClick={handleOpenNav}>
            <Menu className='w-8 h-8 text-primary' />
          </div>
        </div>
      </nav>
    </header>
  )
}
