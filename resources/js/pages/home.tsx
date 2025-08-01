import { Index as Posts } from '@/components/posts';
import { Card } from '@/components/ui/card';
import WebLayout from '@/layouts/web-layout';
import { Head } from '@inertiajs/react';

export default function Home({ posts }) {
    return (
        <>
            <Head title="Home" />
            <WebLayout navMinOpacity={0.6}>
                <div className="relative -mt-20 flex h-screen w-full flex-col items-center justify-center bg-[url(https://cdn.pixabay.com/photo/2022/09/14/18/32/cafe-7454951_1280.jpg)] bg-cover bg-top bg-no-repeat lg:bg-size-[full_auto]">
                    <Card className="h-max w-max p-8 text-center opacity-80 lg:px-24 lg:py-16">
                        <h1 className="w-full text-center text-4xl font-bold">
                            Welcome to
                            <br />
                            Café Craft
                        </h1>
                        <p className="text-primary">Your new go-to roastery</p>
                    </Card>
                </div>
                <hr className="sticky top-20 z-50 h-[2px] w-full bg-secondary" />
                <Posts posts={posts} />
            </WebLayout>
        </>
    );
}
