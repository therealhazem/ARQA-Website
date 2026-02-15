/* eslint-disable @typescript-eslint/no-explicit-any */
import NotFound from "@/components/NotFound"
import { Button } from "@/components/ui/button"
import { ProductCarousel } from "@/components/ui/productCarousel"
import { getSpecificProduct } from "@/sanity/lib/getProducts"
import { Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const dynamic = "force-dynamic";

type PageProps = {
    params: Promise<{ product: string }>
}
export default async function Page({ params }: PageProps) {
    const { product } = await params
    const theProduct = await getSpecificProduct(`
    *[_type == "Products" && _id == "${product}"][0]{
    name,
    category,
    description,
    features,
    images[]{ 
        _key,
        "url": asset->url 
    },
    material,
    thickness,
    length,
    colorOptions,
    certifications,
    shelfLife,
    packaging,
    certificates[] {
        _key,
        "url": asset->url
    }
    }
    `)

    if (!theProduct) return <NotFound />

    return (
        <>
            <div className="container mx-auto p-4 gap-5">
                <div className="flex flex-col lg:flex-row items-center just-center gap-5 w-full">
                    {/* Product Image */}
                    <div className="w-full">
                        <ProductCarousel images={theProduct.images} />
                    </div>
                    {/* Product Props */}
                    <div className="flex flex-col items-start justify-between gap-4 w-full">
                        {/* Categ */}
                        <span className="font-medium text-sm bg-dark-primary text-white rounded-md px-3 py-1"> {theProduct.category} </span>
                        {/* Product Name */}
                        <h1 className="product-title text-2xl md:text-3xl leading-snug text-start line-clamp-2">
                            {theProduct.name}
                        </h1>
                        {/* Product Description */}
                        <p className="card-body text-base md:text-lg">
                            {theProduct.description}
                        </p>
                        {/* Key Features */}
                        <div className="flex flex-col gap-3">
                            <h2 className="card-title text-lg md:text-xl text-gray-800">
                                Key Features
                            </h2>
                            <ul className="flex flex-col gap-2">
                                {(theProduct.features ?? []).slice(0).map((item: string, i: any) => (
                                    <li key={i}
                                        className="flex items-start gap-2 text-gray-700
                                                    text-[clamp(1rem,2vw,1.2rem)]">
                                        <Check className="w-4 h-4 mt-0.5 text-teal-700 shrink-0" />
                                        <span className="leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Link href="/contact" className="w-full">
                            <Button className="w-full py-5 bg-dark-primary hover:bg-myprimary cursor-pointer">Get Quote</Button>
                        </Link>
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
                        {[
                            { name: "Material", value: theProduct.material },
                            { name: "Thickness", value: theProduct.thickness },
                            { name: "Length", value: theProduct.length },
                            { name: "Color Options", value: theProduct.colorOptions },
                            { name: "Certifications", value: theProduct.certifications },
                            { name: "Shelf Life", value: theProduct.shelfLife },
                            { name: "Packaging", value: theProduct.packaging },
                        ].map((spec, index) => (
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
                        <div className="flex flex-wrap justify-center gap-8 max-w-[520px] mx-auto">
                            {(theProduct.certificates ?? []).map((cert: any, index: number) => (
                                <div key={index}
                                    className="flex items-center justify-center w-[110px]">
                                    <Image
                                        src={cert.url}
                                        alt={cert.name || "Certificate"}
                                        width={100}
                                        height={100}
                                        className="object-contain transition-transform duration-200 hover:scale-105" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
