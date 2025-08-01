import Footer from '@/components/footer';
import Navigation from '@/components/navigation';

export default function WebLayout({
    children,
    navMinOpacity = 0.8,
    navMaxOpacity = 0.99,
    navOpacityThreshold,
}: {
    children: React.ReactNode;
    navMinOpacity?: number;
    navMaxOpacity?: number;
    navOpacityThreshold?: number;
}) {
    return (
        <div className="min-h-screen">
            <div className="mx-auto max-w-301">
                <Navigation minOpacity={navMinOpacity} maxOpacity={navMaxOpacity} threshold={navOpacityThreshold} />
                <div className="mx-auto flex h-full max-w-300 flex-col">{children}</div>
                <Footer />
            </div>
        </div>
    );
}
