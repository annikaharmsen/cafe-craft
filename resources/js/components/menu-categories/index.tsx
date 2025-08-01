import { Show as MenuCategory } from '@/components/menu-categories/show';

export function Index({ categories }) {
    return <>{categories && categories.map((category) => <MenuCategory category={category} />)}</>;
}
