import React from "react"
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { cn } from "@/lib/utils"

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenu.Link asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-100 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenu.Link>
        </li>
    )
})

const ServicesCategories = () => {
    return (
        <>
            <ListItem href="/" title="Servicio 1">
                Información relacionada al primer servicio.
            </ListItem>
            <ListItem href="/" title="Servicio 2">
                Información relacionada al segundo servicio.
            </ListItem>
            <ListItem href="/" title="Servicio 3">
                Información relacionada al tercer servicio.
            </ListItem>
        </>
    );
}

export default ServicesCategories;