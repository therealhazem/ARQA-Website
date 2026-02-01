import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="w-full py-16 md:py-20 bg-dark-primary mt-0">
            <div className="container mx-auto flex flex-col md:flex-row md:items-start justify-between text-center md:text-start gap-8 px-4 sm:px-5">
                <Image src="/ARQA Footer Logo.svg" className="w-52 self-center" width={0} height={0} alt="ARQA Footer Logo" />
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
                    <Link className="hover:underline active:underline underline-offset-4" href="/gloves">Medical Gloves</Link>
                    <Link className="hover:underline active:underline underline-offset-4" href="/masks">Face Masks</Link>
                    <Link className="hover:underline active:underline underline-offset-4" href="/thermometers">Thermometers</Link>
                    <Link className="hover:underline active:underline underline-offset-4" href="/tapes">Casting Tapes</Link>
                    <Link className="hover:underline active:underline underline-offset-4" href="/depressors">Tongue Depressors</Link>
                </div>
                <div className="text-white flex flex-col gap-3 items-center md:items-start">
                    <h3 className="card-title text-white text-lg">Contact Us</h3>
                    <Link className="flex flex-row gap-2" href="/"> <Mail className="w-5" /> info@arqamedical.com</Link>
                    <Link className="flex flex-row gap-2" href="/"> <Phone className="w-5" /> +20 123 456 7890</Link>
                    <Link className="flex flex-row gap-2" href="/"> <MapPin className="w-5" /> Cairo, Egypt</Link>
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