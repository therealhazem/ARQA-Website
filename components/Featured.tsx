import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button"
import MyCard from "./MyCard"
import Link from "next/link"



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

]


const Featured = () => {
    return (
        <div className="container mx-auto flex flex-col items-center text-center section-padding text-pretty">
            <h1 className="section-title">
                Featured Medical Supplies
            </h1>
            <h2 className="section-subtitle max-w-2xl">
                Discover our most trusted medical supplies, carefully selected to meet the highest healthcare standards and designed for professional use
            </h2>


            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-[80%] lg:w-[90%] mt-10"
            >
                <CarouselContent>
                    {products.map((_, index) => (
                        <MyCard key={index} srcc={_.src} namee={_.name} propp={_.prop} typee={_.type} />
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <Link href="/products">
                <Button className=" bg-dark-primary hover:bg-myprimary hover:shadow-lg cursor-pointer lg:text-lg py-6 px-8 mt-4">View All Products</Button>
            </Link>

        </div>
    )
}

export default Featured