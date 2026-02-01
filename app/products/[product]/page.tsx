import { Button } from "@/components/ui/button"
import { ProductCarousel } from "@/components/ui/productCarousel"
import { Check } from "lucide-react"
import Image from "next/image"

const propp = ["Superior puncture resistance compared to latex",
    "Latex-free protection for sensitive users",
    "Textured fingertips for enhanced grip and precision",
    "Available in sizes XS to XL",
    "Powder-free to reduce contamination risk",
    "Ambidextrous design for convenience",
    "Complies with ASTM D6319 standards",
    "Suitable for medical examinations and procedures",
]

const specs = [
    { name: "Material", value: "Synthetic nitrile rubber" },
    { name: "Thickness", value: "3.5-4.5 mil" },
    { name: "Length", value: "240mm (9.5 inches)" },
    { name: "Color Options", value: "Blue, Black, Purple" },
    { name: "Certifications", value: "FDA 510(k), CE Mark, ISO 13485" },
    { name: "Shelf Life", value: "5 years from manufacture date" },
    { name: "Packaging", value: "100 gloves per box, 10 boxes per case" },
]

const certificates = [
    {
        name: "FDA Certification",
        image: "/fda.png",
    },
    {
        name: "CE Mark",
        image: "/CE.svg",
    },
    {
        name: "ISO 13485",
        image: "/iso.jpg",
    },
    {
        name: "ASTM Certification",
        image: "/astm.jpg",
    },
    {
        name: "FDA Certification",
        image: "/fda.png",
    },
    {
        name: "CE Mark",
        image: "/CE.svg",
    },
    {
        name: "ISO 13485",
        image: "/iso.jpg",
    },
    {
        name: "ASTM Certification",
        image: "/astm.jpg",
    },
]

const page = () => {
    return (
        <>
            <div className="container mx-auto p-4 gap-5">
                <div className="flex flex-col lg:flex-row items-center just-center gap-5 w-full">
                    {/* Product Image */}
                    <div className="w-full">
                        <ProductCarousel />
                    </div>
                    {/* Product Props */}
                    <div className="flex flex-col items-start justify-between gap-4 w-full">
                        {/* Categ */}
                        <span className="font-medium text-sm bg-dark-primary text-white rounded-md px-3 py-1"> Gloves </span>
                        {/* Product Name */}
                        <h1 className="product-title text-2xl md:text-3xl leading-snug text-start line-clamp-2">
                            Nitrile Gloves - Professional Grade
                        </h1>
                        {/* Product Description */}
                        <p className="card-body text-base md:text-lg">
                            Our professional-grade nitrile gloves provide superior protection and comfort for healthcare professionals. Made from high-quality synthetic rubber, these gloves offer excellent puncture resistance and chemical protection while remaining latex-free to prevent allergic reactions.
                        </p>
                        {/* Key Features */}
                        <div className="flex flex-col gap-3">
                            <h2 className="card-title text-lg md:text-xl text-gray-800">
                                Key Features
                            </h2>
                            <ul className="flex flex-col gap-2">
                                {propp.slice(0).map((item, i) => (
                                    <li key={i}
                                        className="flex items-start gap-2 text-gray-700
                                                    text-[clamp(1rem,2vw,1.2rem)]">
                                        <Check className="w-4 h-4 mt-0.5 text-teal-700 shrink-0" />
                                        <span className="leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button className="w-full py-5 bg-dark-primary hover:bg-myprimary cursor-pointer">Get Quote</Button>
                    </div>
                </div>

                <hr className="my-10" />
                {/* Table of Specifications */}
                {/* Technical Specifications */}
                <div className="rounded-xl border bg-white p-6 lg:p-10">
                    <h2 className="font-semibold mb-8 
                   text-[clamp(1.2rem,2vw,2rem)]">
                        Technical Specifications
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                        {specs.map((spec, index) => (
                            <div
                                key={index}
                                className="py-6 border-b"
                            >
                                <p className="font-medium text-gray-900
                              text-[clamp(1rem,1.5vw,1.4rem)]">
                                    {spec.name}
                                </p>
                                <p className="mt-2 text-gray-600
                              text-[clamp(0.95rem,1.3vw,1.2rem)]">
                                    {spec.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Certificates Section */}
                    <div className="mt-14 flex flex-col items-center">
                        <h3 className="font-semibold mb-6
                       text-[clamp(1.1rem,1.8vw,1.6rem)]">
                            Product Certifications
                        </h3>

                        <div className="grid grid-cols-4 lg:grid-cols-8 gap-8 place-items-center">
                            {certificates.map((cert, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center"
                                >
                                    <Image
                                        src={cert.image}
                                        alt={cert.name}
                                        width={100}
                                        height={100}
                                        className="object-contain
                           lg:w-[110px] lg:h-[110px]
                           transition-transform duration-200
                           hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default page