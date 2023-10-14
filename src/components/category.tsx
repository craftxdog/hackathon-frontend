import { cn } from "@/lib/utils";
import React from "react";
import { NavigationMenuLink } from "./ui/navigation-menu";

export const Category = () => {
  return (
    <>
      <ListItem title="Tecnología" href="/conferencias">
        <p>Solo una descripción corta acerca de las conferencias Tecnologicas.</p>
      </ListItem>
      <ListItem title="Negocíos" href="/conferencias">
        <p>Solo una descripción corta acerca de las conferencias Negocíos.</p>
      </ListItem>
      <ListItem title="Educación" href="/conferencias">
        <p>Solo una descripción corta acerca de las conferencias Educación.</p>
      </ListItem>
      <ListItem title="Otros" href="/conferencias">
        <p>Otros (Todos las conferencias).</p>
      </ListItem>
    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});