import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { Category } from './category';
import '../styles.css';

export const NavigationMenuPrincipal = () => {
  return (
    <>
      <nav className='NavbarPrincipal'>

        <NavigationMenu.Root className="NavigationMenuRoot">

          <NavigationMenu.List className="NavigationMenuList gap-5">

            <NavigationMenu.Item>
              <div className='NavbarLogoLeft'>
                kasjkdjnasdk
              </div>
            </NavigationMenu.Item>

          </NavigationMenu.List>

          <div className="ViewportPosition">
            <NavigationMenu.Viewport className="NavigationMenuViewport" />
          </div>

        </NavigationMenu.Root>

        <NavigationMenu.Root className="NavigationMenuRoot">

          <NavigationMenu.List className="NavigationMenuList">

            <NavigationMenu.Item>
              <NavigationMenu.Link className="NavigationMenuLink" href="/">
                Inicio
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link className="NavigationMenuLink" href="/eventos">
                Eventos
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="NavigationMenuTrigger">
                Conferencias <CaretDownIcon className="CaretDown" aria-hidden />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="NavigationMenuContent">

                <ul className="List one">
                  <Category />
                </ul>

              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link className="NavigationMenuLink" href="/nosotros">
                Nosotros
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link className="NavigationMenuLink" href="/comprar">
                Comprar
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Indicator className="NavigationMenuIndicator">
              <div className="Arrow" />
            </NavigationMenu.Indicator>

          </NavigationMenu.List>

          <div className="ViewportPosition">
            <NavigationMenu.Viewport className="NavigationMenuViewport" />
          </div>

        </NavigationMenu.Root>

        <NavigationMenu.Root className="NavigationMenuRoot">

          <NavigationMenu.List className="NavigationMenuList">

            <NavigationMenu.Item>
              <NavigationMenu.Link className="NavigationMenuLink" href="/">
                Iniciar Sesión
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link className="NavigationMenuLink" href="/eventos">
                Crear Cuenta
              </NavigationMenu.Link>
            </NavigationMenu.Item>

          </NavigationMenu.List>

          <div className="ViewportPosition">
            <NavigationMenu.Viewport className="NavigationMenuViewport" />
          </div>

        </NavigationMenu.Root>


      </nav>

    </>
  );
}