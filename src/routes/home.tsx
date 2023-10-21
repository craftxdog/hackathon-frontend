import { buttonVariants } from '@/components/ui/button'
import { ArrowRight, CalendarDays, Clock, MapPin, Pill } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const Home = () => {
  return (
    <>
      <section
        className='pt-[4rem] pb-[2.5rem] bg-cover
        bg-no-repeat bg-center relative lg:pt-[6rem] lg:pb-[4.5rem]'
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/src/assets/hero1.jpg)',
        }}
      >
        <div className='container'>
          <div className='grid lg:grid-cols-2'>
            <div>
              <header className='mb-12'>
                <h1 className='text-white mb-4 text-4xl font-bold lg:text-5xl xl:text-6xl'>
                  ¡Servicio médico desde la comodidad de tu{' '}
                  <span className='text-mountain-meadow'>HOGAR!</span>
                </h1>
                <p className='text-white text-lg'>
                  Nuestra aplicación de gestión de salud en línea te permite
                  disfrutar de la atención médica de alta calidad sin tener que
                  desplazarte a un hospital. Es el poder de cuidar de ti mismo,
                  al alcance de un clic.
                </p>
              </header>
              <div>
                <Link
                  to='/'
                  className={buttonVariants({
                    variant: 'default',
                    className: '!bg-mountain-meadow !text-lg py-7',
                  })}
                >
                  <ArrowRight className='mr-2 w-5 h-5' />
                  Empieza Ahora
                </Link>
              </div>
            </div>
            <div />
          </div>
        </div>
      </section>
      <section className='pt-[4rem] pb-[2.5rem] lg:pt-[6rem] lg:pb-[4.5rem]'>
        <div className='container'>
          <header className='mb-12 xl:mb-20'>
            <h2 className='text-primary font-bold text-3xl mb-4 lg:text-4xl'>
              Nuestros Servicios
            </h2>
            <p className='text-lg text-black/70 xl:w-[800px]'>
              En REMENIC, te ofrecemos una experiencia de atención médica
              integral en línea. Accede a tu historial médico, agenda citas y
              recibe recordatorios, todo desde la comodidad de tu dispositivo.
            </p>
          </header>
          <div>
            <Swiper
              grabCursor={true}
              spaceBetween={30}
              centeredSlides={true}
              speed={2000}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  autoplay: { delay: 5000 },
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3,
                  autoplay: { delay: 5000 },
                  centeredSlides: false,
                },
              }}
              autoplay={{ delay: 8000, disableOnInteraction: false }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <Card className='!rounded-tl-[0] !rounded-br-[0] rounded-3xl border-t-mountain-meadow border-t-4'>
                  <CardHeader className='mt-2'>
                    <div className='bg-mountain-meadow flex w-12 h-12 items-center justify-center rounded-full'>
                      <CalendarDays className='text-white w-6 h-6' />
                    </div>
                  </CardHeader>
                  <CardContent className='pt-4'>
                    <h3 className='font-bold mb-4 text-primary text-xl'>
                      Visualización de citas programadas
                    </h3>
                    <p className='text-lg text-black/70'>
                      Nuestro servicio de Visualización de Citas Programadas no
                      solo te muestra tus citas, sino que también te conecta de
                      manera directa con los profesionales de la salud. Accede a
                      la información de contacto de tu médico, recibe
                      recordatorios de tu cita y comunícate con ellos en caso de
                      preguntas o necesidades especiales. Facilitamos la
                      comunicación sin fronteras, brindándote una experiencia
                      médica sin complicaciones.
                    </p>
                  </CardContent>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className='!rounded-tl-[0] !rounded-br-[0] rounded-3xl border-t-mountain-meadow border-t-4'>
                  <CardHeader className='mt-2'>
                    <div className='bg-mountain-meadow flex w-12 h-12 items-center justify-center rounded-full'>
                      <Clock className='text-white w-6 h-6' />
                    </div>
                  </CardHeader>
                  <CardContent className='pt-4'>
                    <h3 className='font-bold mb-4 text-primary text-xl'>
                      Seguimiento de historias clínicas
                    </h3>
                    <p className='text-lg text-black/70'>
                      Hemos hecho que el seguimiento de tu historia clínica sea
                      más accesible que nunca. Con un solo vistazo a la
                      aplicación, tendrás acceso instantáneo a tu historia
                      médica completa. Desde diagnósticos previos hasta
                      tratamientos actuales, puedes seguir el progreso de tu
                      salud de manera eficiente, todo en un solo lugar.
                    </p>
                  </CardContent>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className='!rounded-tl-[0] !rounded-br-[0] rounded-3xl border-t-mountain-meadow border-t-4'>
                  <CardHeader className='mt-2'>
                    <div className='bg-mountain-meadow flex w-12 h-12 items-center justify-center rounded-full'>
                      <Pill className='text-white w-6 h-6' />
                    </div>
                  </CardHeader>
                  <CardContent className='pt-4'>
                    <h3 className='font-bold mb-4 text-primary text-xl'>
                      Gestión de medicamentos
                    </h3>
                    <p className='text-lg text-black/70'>
                      Entendemos lo importante que es llevar un control adecuado
                      de tus medicamentos. Nuestra herramienta de Gestión de
                      Medicamentos te permite organizar tus recetas de una
                      manera sencilla y sin estrés. Con recordatorios
                      personalizados, estarás al tanto de cuándo y cómo tomar
                      tus medicamentos, asegurando que nunca te olvides de una
                      dosis importante.
                    </p>
                  </CardContent>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className='!rounded-tl-[0] !rounded-br-[0] rounded-3xl border-t-mountain-meadow border-t-4'>
                  <CardHeader className='mt-2'>
                    <div className='bg-mountain-meadow flex w-12 h-12 items-center justify-center rounded-full'>
                      <MapPin className='text-white w-6 h-6' />
                    </div>
                  </CardHeader>
                  <CardContent className='pt-4'>
                    <h3 className='font-bold mb-4 text-primary text-xl'>
                      Mapa de unidades de salud
                    </h3>
                    <p className='text-lg text-black/70'>
                      Te ofrecemos una solución de atención médica integral que
                      comienza con nuestro servicio de 'Mapa de Unidades de
                      Salud'. Nuestra aplicación te permite encontrar fácilmente
                      unidades de salud cercanas a tu ubicación. Ya sea que
                      necesites atención médica urgente o una consulta de
                      rutina, nuestro mapa te proporciona información detallada
                      sobre hospitales, clínicas y consultorios médicos en tu
                      área.
                    </p>
                  </CardContent>
                </Card>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}
