import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu';

export default function Navigation() {
    const [opacity, setOpacity] = useState(0.6);

    const handleScroll = () => {
        const current = window.pageYOffset + 360;
        const threshold = 600;
        // Calculate opacity as a decimal between 0 and 1
        const calculatedOpacity = Math.min(current / threshold, 0.99);
        setOpacity(calculatedOpacity);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <NavigationMenu
            className="py-auto sticky top-0 z-50 mx-auto flex h-20 max-w-screen min-w-max justify-between gap-12 px-12 shadow-md transition-all transition-none duration-300"
            style={{
                backgroundColor: `oklch(from var(--background) l c h / ${opacity})`,
            }}
        >
            <Link href={route('home')}>
                <span className="text-xl text-primary">Café Craft</span>
            </Link>
            <NavigationMenuList className="gap-4">
                <NavigationMenuItem>
                    <NavigationMenuLink asChild data-active={route().current('home')}>
                        <Link href={route('home')}>Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild data-active={route().current('menu')}>
                        <Link href={route('menu')}>Menu</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
