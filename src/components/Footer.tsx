export const Footer = () => {
  return (
    <footer className='pt-[4rem] pb-[2.5rem] lg:pt-[6rem] lg:pb-[4.5rem]'>
      <div className='container'>
        <div className='flex items-center gap-y-6 flex-col'>
          <img
            className='w-[13rem] md:w-[24rem]'
            src='/img/ReMeNicLogo.png'
            alt='REMENIC'
          />
          <div>
            <p className='text-sm text-gray-500 text-center'>
              © 2023 REMENIC. Todos los derechos reservados.
              <br />
              Desarrollado por el equipo CodeComit.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
