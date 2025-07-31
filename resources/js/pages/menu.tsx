import WebLayout from '@/layouts/web-layout';
import { Head } from '@inertiajs/react';

export default function Menu() {
    return (
        <>
            <Head title="Menu" />
            <WebLayout>
                <h1 className="text-4xl">Menu</h1>

                <p>Welcome to the menu page</p>
            </WebLayout>
        </>
    );
}
