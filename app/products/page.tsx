/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import ProductCard from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { getProducts } from "@/sanity/lib/getProducts"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"


const categories = [
    "Gloves",
    "Tapes",
    "Masks",
    "Thermometers",
    "Depressors",
];

const Page = () => {


    const [Products, setProducts] = useState<any[]>([])

    useEffect(() => {
        getProducts().then(setProducts)
    }, [])

    const [active, setActive] = useState("Gloves");

    return (
        <>

            {/* Hero section */}
            <div className="relative w-full h-[50vw] md:h-[20vw] overflow-hidden">
                <Image
                    src="/Media/im3.jpg"
                    className="absolute inset-0 h-full w-full object-cover"
                    width={10000}
                    height={10000}
                    alt="hero cover"
                />
                <div className="absolute inset-0 bg-dark-primary mix-blend-multiply"></div>
                <div className="absolute z-10 flex flex-col items-center justify-center p-5 md:p-14 h-full w-full gap-3">
                    <h1 className="section-title text-white">Our Products</h1>
                    <p className="header-subtitle text-white/90">Comprehensive range of medical supplies trusted by healthcare professionals worldwide</p>
                </div>
            </div>


            <div className="container mx-auto section-padding pt-0 flex flex-col items-center justify-between gap-4">
                {/* Search Part */}
                <div className="w-full items-center justify-between">
                    <ButtonGroup className="w-full">
                        <Input className="py-6" type="search" placeholder="Search a product..." />
                        <Button className=" py-6 cursor-pointer bg-dark-primary hover:bg-myprimary"><SearchIcon /> Search</Button>
                    </ButtonGroup>
                </div>
                <div className="flex flex-col md:flex-row items-start justify-between w-full gap-4">
                    {/* Categories */}
                    <div className="md:w-1/5 w-full">
                        {/* sticky container */}
                        <div className="sticky top-24 flex flex-col gap-2 rounded-xl border p-4 bg-white py-6">
                            <h3 className="mb-2 card-title text-gray-700">
                                Product Categories
                            </h3>

                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActive(cat)}
                                    className={`text-left px-4 py-2 rounded-md transition
                                            ${active === cat
                                            ? "bg-myprimary text-white"
                                            : "text-gray-700 hover:bg-primary/10"}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-stretch">
                            {Products.map((product) => (
                                <ProductCard
                                    key={product._id}
                                    id={product._id}
                                    srcc={product.images?.[0].url || ''}
                                    namee={product.name}
                                    propp={product.features}
                                    typee={product.category} />))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page