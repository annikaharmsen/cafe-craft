import { Index as MenuCategories } from '@/components/menu-categories/index';
import { Card } from '@/components/ui/card';
import WebLayout from '@/layouts/web-layout';
import { Head } from '@inertiajs/react';

export default function Menu({ categories }) {
    return (
        <>
            <Head title="Menu" />
            <WebLayout navOpacityThreshold={50}>
                <div className="z-40 -mt-20 flex h-[55vh] max-h-screen w-full flex-col items-center justify-center bg-[url(https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_1280.jpg)] bg-cover bg-top bg-no-repeat lg:bg-size-[full_auto]">
                    <Card className="mt-20 p-8 text-center opacity-80 lg:px-24 lg:py-16">
                        <h1 className="w-full text-center text-4xl font-bold text-primary">Our Menu</h1>
                        <p className="">Coffee, pastries, and more!</p>
                    </Card>
                </div>
                <hr className="sticky top-20 z-50 h-[2px] w-full bg-secondary" />
                <MenuCategories categories={categories} />
            </WebLayout>
        </>
    );
}
