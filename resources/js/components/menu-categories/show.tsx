import HeroSection from '@/components/hero-section';
import { Index as MenuItems } from '@/components/menu-items/index';

export function Show({ category }) {
    const odd = category.index % 2 == 1;

    return (
        <HeroSection
            imageUrl={category.image?.url}
            imagePlacement={odd ? 'bottom' : 'bottom'}
            className={odd ? 'bg-card text-card-foreground' : 'bg-background text-foreground'}
        >
            <h2 className="text-center text-3xl font-bold text-primary">{category.title}</h2>
            <MenuItems items={category.items} />
        </HeroSection>
    );
}
