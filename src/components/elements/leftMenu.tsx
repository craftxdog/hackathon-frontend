import { CaretDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import EventsCategories from "./eventsCategories";
import ServicesCategories from "./servicesCategories";

const LeftMenu = () => {
    return (
        <>
            <NavigationMenu.Root className="relative z-[1] flex justify-center">
                <NavigationMenu.List className="center shadow-blackA4 m-0 flex list-none rounded-[6px] p-1 gap-5">
                    <NavigationMenu.Item>
                        <NavigationMenu.Link
                            className="text-teal-700 hover:bg-teal-100 focus:shadow-teal-600 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                            href="/"
                        >
                            Inicio
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="text-teal-700 hover:bg-teal-100 focus:shadow-teal-600 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                            Servicios{' '}
                            <CaretDownIcon
                                className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                                aria-hidden
                            />
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
                            <ul className="one m-0 grid list-none gap-x-[10px] p-[15px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                                <li className="row-span-3 grid">
                                    <NavigationMenu.Link asChild>
                                        <a
                                            className="focus:shadow-violet7 from-purple9 to-indigo9 flex
                                            h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                                            href="/"
                                        >
                                            <svg aria-hidden xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 25 25" fill="white" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart-pulse">
                                                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                                <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                                            </svg>
                                            <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                                                Nuevos Servicios
                                            </div>
                                            <p className="text-mauve4 text-[14px] leading-[1.3]">
                                                Unstyled, accessible components for React.
                                            </p>
                                        </a>
                                    </NavigationMenu.Link>
                                </li>
                                <ServicesCategories />
                            </ul>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenu.Trigger className="text-teal-700 hover:bg-teal-100 focus:shadow-teal-600 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                            Eventos{' '}
                            <CaretDownIcon
                                className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                                aria-hidden
                            />
                        </NavigationMenu.Trigger>
                        <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                                <EventsCategories />
                            </ul>
                        </NavigationMenu.Content>
                    </NavigationMenu.Item>

                    <NavigationMenu.Item>
                        <NavigationMenu.Link
                            className="text-teal-700 hover:bg-teal-100 focus:shadow-teal-600 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                            href="/"
                        >
                            Nosotros
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>


                    <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
                        <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-teal-600" />
                    </NavigationMenu.Indicator>
                </NavigationMenu.List>

                <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
                    <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
                </div>
            </NavigationMenu.Root>
        </>
    )
}

export default LeftMenu;