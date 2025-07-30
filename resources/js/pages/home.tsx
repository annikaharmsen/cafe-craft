import { Card } from '@/components/ui/card';
import WebLayout from '@/layouts/web-layout';

export default function Home() {
    return (
        <WebLayout>
            <Card>
                <h1 className="text-center text-4xl">
                    Welcome to
                    <br />
                    Café Craft
                </h1>
            </Card>
        </WebLayout>
    );
}
