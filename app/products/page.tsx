"use client"
import ProductCard from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { useState } from "react"


const products = [
    {
        name: "Black Nitrile Examination Gloves", src: "/Products/Black.png", type: "Gloves",
        prop: ["Superior puncture resistance", "Latex-free protection", "Textured grip for precision"]
    },
    {
        name: "Surgical Face Masks", src: "/Products/mask.png", type: "Masks",
        prop: ["99% bacterial filtration", "Comfortable elastic ear loops", "Adjustable nose bridge"]
    },
    {
        name: "Digital Thermometer", src: "/Products/thermo.png", type: "Thermometers",
        prop: ["Non-contact measurement", "Fast 1-second reading", "Memory recall function"]
    },
    {
        name: "Blue Nitrile Examination Gloves", src: "/Products/blue.png", type: "Gloves",
        prop: ["Superior puncture resistance", "Latex-free protection", "Textured grip for precision"]
    },
    {
        name: "Latex Examination Gloves", src: "/Products/latex.png", type: "Gloves",
        prop: ["Superior puncture resistance", "Latex-free protection", "Textured grip for precision"]
    },
    {
        name: "Syntex Examination Gloves", src: "/Products/Syntex.png", type: "Gloves",
        prop: ["Superior puncture resistance", "Latex-free protection", "Textured grip for precision"]
    },
    {
        name: "Vinyl Examination Gloves", src: "/Products/Vinyl.png", type: "Gloves",
        prop: ["Superior puncture resistance", "Latex-free protection", "Textured grip for precision"]
    },
    {
        name: "Black Nitrile Examination Gloves", src: "/Products/Black.png", type: "Gloves",
        prop: ["Superior puncture resistance", "Latex-free protection", "Textured grip for precision"]
    },
    {
        name: "Surgical Face Masks", src: "/Products/mask.png", type: "Masks",
        prop: ["99% bacterial filtration", "Comfortable elastic ear loops", "Adjustable nose bridge"]
    },
    {
        name: "Digital Thermometer", src: "/Products/thermo.png", type: "Thermometers",
        prop: ["Non-contact measurement", "Fast 1-second reading", "Memory recall function"]
    },
    {
        name: "Blue Nitrile Examination Gloves", src: "/Products/blue.png", type: "Gloves",
        prop: ["Superior puncture resistance", "Latex-free protection", "Textured grip for precision"]
    },
    {
        name: "Latex Examination Gloves", src: "/Products/latex.png", type: "Gloves",
        prop: ["Superior puncture resistance", "Latex-free protection", "Textured grip for precision"]
    },
    {
        name: "Syntex Examination Gloves", src: "/Products/Syntex.png", type: "Gloves",
        prop: ["Superior puncture resistance", "Latex-free protection", "Textured grip for precision"]
    },
    {
        name: "Vinyl Examination Gloves", src: "/Products/Vinyl.png", type: "Gloves",
        prop: ["Superior puncture resistance", "Latex-free protection", "Textured grip for precision"]
    },

]


const categories = [
    "Gloves",
    "Tapes",
    "Masks",
    "Thermometers",
    "Depressors",
];

const page = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [active, setActive] = useState("Gloves");
    return (
        <>
            {/* Header of Products Page */}
            <div className="w-full text-white font-poppins bg-linear-to-t from-dark-primary to-myprimary
                    flex items-center justify-center p-4 mb-8">
                <div className="container mx-auto w-[85%] py-7 flex flex-col items-center justify-center text-center">
                    <h1 className="font-semibold pb-2 text-3xl/snug xl:text-5xl/snug">Our Products</h1>
                    <h2 className="text-white/90 xl:text-xl">Comprehensive range of medical supplies trusted by healthcare professionals worldwide</h2>
                </div>
            </div>


            <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4">
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
                            <h3 className="mb-2 font-semibold text-gray-700 md:text-lg">
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
                            {products.map((_, index) => (
                                <ProductCard key={index} srcc={_.src} namee={_.name} propp={_.prop} typee={_.type} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page