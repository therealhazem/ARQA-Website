"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"
import { useState } from "react"
import clsx from "clsx";


import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Knowledge Hub", href: "/knowledge" },
    { name: "Contact Us", href: "/contact" }
]

const Navbar = () => {
    const Pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="w-full h-[66px] border-b-2 border-myprimary p-2
        fixed top-0 z-50 backdrop-blur-3xl bg-white/85 shadow-lg/10">
            <div className="container mx-auto flex flex-row items-center justify-between">

                {/* Normal Desktop mode > md */}
                <Link href="/">
                    <Image src="/ARQA Logo.svg" className="w-36 " width={0} height={0} alt="ARQA LOGO" />
                </Link>

                <div className="hidden md:flex flex-row items-center justify-center gap-4">
                    {links.map(link => (
                        <Link className={clsx(
                            Pathname === link.href ?
                                "text-dark-primary font-semibold" :
                                "text-gray-500 font-semibold",
                            "hover:bg-myprimary hover:text-white rounded-lg p-2 transition-all duration-300")}
                            key={link.name} href={link.href} >{link.name}</Link>
                    ))}
                </div>

                <Button className="hidden md:flex bg-myprimary font-bold hover:bg-dark-primary">
                    <Link href="/contact" >Get Quote</Link>

                </Button>


                {/* Mobile Mode Menu */}

                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                    <SheetTrigger asChild>
                        <Button className="bg-gray-200/60 text-black hover:bg-gray-300/60 md:hidden">
                            <Menu />
                        </Button>
                    </SheetTrigger>

                    <SheetContent className="max-w-1/2 md:hidden" aria-describedby={undefined}>
                        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                        <div className="mt-10 flex flex-col text-lg mx-4">
                            {links.map(link => (
                                <Link
                                    className={clsx(
                                        Pathname === link.href ?
                                            "text-dark-primary font-semibold" :
                                            "text-gray-500 font-semibold",
                                        "hover:bg-myprimary hover:text-white border-dark-primary my-3 p-4 transition-all duration-300 rounded-lg block")}
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <Button className="text-lg p-6 bg-myprimary mt-4 font-semibold hover:bg-dark-primary" asChild>
                                <Link href="/" onClick={() => setMobileMenuOpen(false)}>Get Quote</Link>
                            </Button>
                        </div>
                    </SheetContent>

                </Sheet>


            </div>
        </nav>
    )
}

export default Navbar