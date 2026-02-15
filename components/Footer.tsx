import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="w-full py-16 md:py-20 bg-linear-to-t from-dark-primary to-myprimary mt-0">
            <div className="container mx-auto flex flex-col md:flex-row md:items-start justify-between text-center md:text-start gap-8 px-4 sm:px-5">
                <Link href="/" className="self-center">
                    <Image src="/ARQA Footer Logo.svg" className="w-52 self-center" width={0} height={0} alt="ARQA Footer Logo" />
                </Link>
                <div className="text-white flex flex-col gap-3">
                    <h3 className="card-title text-white text-lg">Quick Links</h3>
                    <Link className="hover:underline active:underline underline-offset-4" href="/">Home</Link>
                    <Link className="hover:underline active:underline underline-offset-4" href="/products">Products</Link>
                    <Link className="hover:underline active:underline underline-offset-4" href="/about">About Us</Link>
                    <Link className="hover:underline active:underline underline-offset-4" href="/knowledge">Knowledge Hub</Link>
                    <Link className="hover:underline active:underline underline-offset-4" href="/contact">Contact</Link>
                </div>
                <div className="text-white flex flex-col gap-3">
                    <h3 className="card-title text-white text-lg">Products</h3>

                    <Link
                        className="hover:underline active:underline underline-offset-4"
                        href="/products?category=Gloves&page=1"
                    >Medical Gloves</Link>
                    <Link
                        className="hover:underline active:underline underline-offset-4"
                        href="/products?category=Masks&page=1"
                    >Face Masks</Link>
                    <Link
                        className="hover:underline active:underline underline-offset-4"
                        href="/products?category=Depressors&page=1"
                    >Tongue Depressors</Link>
                    <Link
                        className="hover:underline active:underline underline-offset-4"
                        href="/products?category=Thermometers&page=1"
                    >Thermometers</Link>
                    <Link
                        className="hover:underline active:underline underline-offset-4"
                        href="/products?category=Tapes&page=1"
                    >Casting Tapes</Link>

                </div>
                <div className="text-white flex flex-col gap-3 items-center md:items-start">
                    <h3 className="card-title text-white text-lg">Contact Us</h3>

                    <Link
                        className="flex flex-row gap-2 items-center hover:underline active:underline underline-offset-4"
                        href="mailto:contact@arqamedical.com"
                    >
                        <Mail className="w-5" />
                        contact@arqamedical.com
                    </Link>

                    <Link
                        className="flex flex-row gap-2 items-center hover:underline active:underline underline-offset-4"
                        href="tel:+201000047939"
                    >
                        <Phone className="w-5" />
                        +20 1000 047 939
                    </Link>

                    <Link
                        className="flex flex-row gap-2 items-center hover:underline active:underline underline-offset-4"
                        href="https://www.google.com/maps/place/30%C2%B011'11.6%22N+31%C2%B028'59.6%22E/@30.186541,31.483225,987m/data=!3m1!1e3!4m4!3m3!8m2!3d30.1865406!4d31.4832249!hl=en-US"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MapPin className="w-5" />
                        Sharqia - 10th of Ramadan City, Cairo, Egypt
                    </Link>

                </div>
            </div>
            <div className="container mx-auto flex flex-col pt-8 text-center gap-4 text-creamy px-4 sm:px-5">
                <hr className="border-creamy" />
                <p className="text-sm md:text-base">&copy; 2025 <span className="font-semibold">ARQA Medical Import &amp; Export</span>. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer