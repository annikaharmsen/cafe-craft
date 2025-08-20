import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from './ui/navigation-menu';

export default function Navigation({ minOpacity = 1, maxOpacity = 1, threshold = 300 }) {
    const [opacity, setOpacity] = useState(minOpacity);

    const handleScroll = () => {
        const current = window.pageYOffset;
        const offset = minOpacity * (threshold - current);
        // Calculate opacity as a decimal between 0 and 1
        const calculatedOpacity = Math.min((current + offset) / threshold, maxOpacity);
        setOpacity(calculatedOpacity);
    };

    useEffect(() => {
        if (minOpacity !== maxOpacity) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    });

    const menuLinkClasses = 'rounded-4xl';

    return (
        <NavigationMenu
            className="py-auto sticky -top-0 z-50 mx-auto flex h-20 w-full max-w-screen justify-between gap-4 px-8 lg:gap-12 lg:px-12"
            style={{
                backgroundColor: `oklch(from var(--background) l c h / ${opacity})`,
                boxShadow: `0 2px 2px -2px var(--shadow-color)`,
                transition: 'none',
            }}
        >
            <Link href={route('home')} className="flex items-center gap-4">
                <img src="/logo.svg" />
                <span className="hidden text-2xl font-bold text-primary sm:inline">Café Craft</span>
            </Link>
            <NavigationMenuList className="gap-4">
                <NavigationMenuItem>
                    <NavigationMenuLink asChild data-active={route().current('home')} className={menuLinkClasses}>
                        <Link href={route('home')}>Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild data-active={route().current('menu')} className={menuLinkClasses}>
                        <Link href={route('menu')}>Menu</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
