import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';

const ProfileButton = () => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src='/img/Profile.png'/>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className='cursor-pointer'> Perfil </DropdownMenuItem>
                    <DropdownMenuItem className='cursor-pointer'> Billing </DropdownMenuItem>
                    <DropdownMenuItem className='cursor-pointer'> Subscription </DropdownMenuItem>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem className='cursor-pointer'> Cerrar Cuenta </DropdownMenuItem> 
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
}

export default ProfileButton;