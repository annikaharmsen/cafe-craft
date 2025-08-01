import { cn } from '@/lib/utils'; // Import the cn utility
import type React from 'react';

interface HeroSectionProps {
    children: React.ReactNode;
    imageUrl?: string;
    altText?: string;
    imagePlacement?: 'left' | 'right' | 'top' | 'bottom';
    imagePlacementSm?: 'top' | 'bottom';
    className?: string;
}

export default function HeroSection({
    children,
    imageUrl,
    altText = 'Hero Image',
    imagePlacement = 'right',
    imagePlacementSm = 'bottom',
    className,
}: HeroSectionProps) {
    const hasImage = !!imageUrl;

    const imageElement = hasImage && (
        <img
            src={imageUrl}
            width={550}
            height={550}
            alt={altText}
            className="mx-auto w-full max-w-[calc(100vw-2rem)] overflow-hidden rounded-xl object-cover"
        />
    );

    // Determine container flex direction and item widths
    let containerClasses = 'flex gap-8 lg:gap-16 items-center flex-col text-center';
    let imageItemClasses = 'flex items-center justify-center w-full';
    let contentItemClasses = 'flex flex-col justify-center space-y-4 w-full';

    // Determine order classes for image and content
    let imageOrder = '';
    let contentOrder = '';

    if (imagePlacementSm === 'top') {
        imageOrder = 'order-first';
        contentOrder = 'order-last';
    } else {
        // bottom
        imageOrder = 'order-last';
        contentOrder = 'order-first';
    }

    // Override for larger screens with left/right `imagePlacement`
    if (imagePlacement === 'left' || imagePlacement === 'right') {
        containerClasses = cn(containerClasses, 'lg:flex-row lg:text-left');
        imageItemClasses = cn(imageItemClasses, 'lg:w-1/2');
        contentItemClasses = cn(contentItemClasses, 'lg:w-1/2');
    } else {
        imageItemClasses = cn(imageItemClasses, 'max-w-100');
    }

    if (imagePlacement === 'left' || imagePlacement === 'top') {
        imageOrder = cn(imageOrder, 'lg:order-first');
        contentOrder = cn(contentOrder, 'lg:order-last');
    } else {
        imageOrder = cn(imageOrder, 'lg:order-last');
        contentOrder = cn(contentOrder, 'lg:order-first');
    }

    // If no image, center content and remove flex-row/col specific classes
    if (!hasImage) {
        containerClasses = 'flex flex-col items-center justify-center space-y-4 text-center';
        imageItemClasses = ''; // Clear image specific classes
        contentItemClasses = ''; // Clear content specific classes
        imageOrder = '';
        contentOrder = '';
    }

    return (
        <section className={cn('w-full py-12 md:py-24 lg:py-32', className)}>
            <div className="container mx-auto px-8 md:px-24">
                {hasImage ? (
                    <div className={cn(containerClasses)}>
                        <div className={cn(imageItemClasses, imageOrder)}>{imageElement}</div>
                        <div className={cn(contentItemClasses, contentOrder)}>{children}</div>
                    </div>
                ) : (
                    <div className={cn(containerClasses)}>{children}</div>
                )}
            </div>
        </section>
    );
}
