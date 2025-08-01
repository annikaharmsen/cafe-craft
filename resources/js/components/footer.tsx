import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from '@inertiajs/react';

library.add(fab);

export default function Footer() {
    return (
        <footer className="mt-12 border-t bg-card">
            <hr className="h-[2px] w-full bg-secondary" />
            <div className="container mx-auto px-8 py-12">
                {/* Main Footer Content */}
                <div className="flex flex-col justify-evenly gap-8 md:flex-row md:px-12 lg:px-24">
                    {/* Company Socials */}
                    <div className="m-auto space-y-4 lg:mx-0">
                        <div className="flex w-full min-w-max justify-between gap-x-4 justify-self-center lg:max-w-100">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <FontAwesomeIcon icon="fa-brands fa-facebook-f" className="fa-2xl" />
                                <span className="sr-only">Facebook</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <FontAwesomeIcon icon="fa-brands fa-x-twitter" className="fa-2xl" />
                                <span className="sr-only">Twitter</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <FontAwesomeIcon icon="fa-brands fa-instagram" className="fa-2xl" /> <span className="sr-only">Instagram</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" className="fa-2xl" /> <span className="sr-only">LinkedIn</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <FontAwesomeIcon icon="fa-brands fa-github" className="fa-2xl" /> <span className="sr-only">GitHub</span>
                            </Button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Home
                            </Link>
                            <Link href="/menu" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                Menu
                            </Link>
                        </nav>
                    </div>

                    {/* Contact Us */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">How to Reach Us</h3>
                        <nav className="flex flex-col space-y-2">
                            <a href="/help" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                (123) 456-7890
                            </a>
                            <a href="/faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                email@example.com
                            </a>
                            <a href="/documentation" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                                123 Main Street, City
                            </a>
                        </nav>
                    </div>
                </div>

                <Separator className="my-8" />

                {/* Bottom Footer */}
                <div className="flex flex-col items-center justify-between space-y-4">
                    <div className="text-sm text-muted-foreground">© 2024 Café Craft. All rights reserved.</div>
                </div>
            </div>
        </footer>
    );
}
