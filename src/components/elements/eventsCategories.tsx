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

const EventsCategories = () => {
    return (
        <>
            <ListItem title="Evento 1" href="/">
                Todo lo relacionado con la Información de este evento en particular.
            </ListItem>
            <ListItem title="Evento 2" href="/">
                Todo lo relacionado con la Información de este evento en particular.
            </ListItem>
            <ListItem title="Evento 3" href="/">
                Todo lo relacionado con la Información de este evento en particular.
            </ListItem>
            <ListItem title="Evento 4" href="/">
                Todo lo relacionado con la Información de este evento en particular.
            </ListItem>
            <ListItem title="Evento 5" href="/">
                Todo lo relacionado con la Información de este evento en particular.
            </ListItem>
            <ListItem title="Evento 6" href="/">
                Todo lo relacionado con la Información de este evento en particular.
            </ListItem>
        </>
    );
}

export default EventsCategories;