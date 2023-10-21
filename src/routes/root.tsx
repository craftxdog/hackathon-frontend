import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Outlet } from 'react-router-dom'

export const Root = () => {
  return (
    <>
      <Header />

      <main className='mt-20'>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
