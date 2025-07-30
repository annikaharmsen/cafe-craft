import { Link } from '@inertiajs/react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu';

export default function Navigation() {
    return (
        <NavigationMenu className="sticky top-0 z-50 mx-auto flex max-w-screen min-w-max justify-between gap-12 px-12 pt-4">
            <Link href={route('home')}>
                <span className="text-xl text-primary">Café Craft</span>
            </Link>
            <NavigationMenuList className="gap-4">
                <NavigationMenuItem>
                    <NavigationMenuLink data-active={route().current('home')}>
                        <Link href={route('home')}>Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink data-active={route().current('menu')}>
                        <Link href={route('menu')}>Menu</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
