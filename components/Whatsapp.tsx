import Image from 'next/image'
import Link from 'next/link'

const Whatsapp = () => {
    return (
        <Link
            href="https://wa.me/201000047939"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-3xl m-[-5px] w-12 h-12 shadow-lg transition-all"
        >
            <Image
                src="/Media/whatsapp.png" // your image path
                alt="WhatsApp"
                width={200} // roughly equivalent to w-7
                height={200} // roughly equivalent to h-7
            />
        </Link>
    )
}

export default Whatsapp