import Navigation from '@/components/navigation';

export default function WebLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen">
            <Navigation />
            <div className="mx-auto flex h-full max-w-300 flex-col">{children}</div>
        </div>
    );
}
