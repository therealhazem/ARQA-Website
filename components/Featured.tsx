import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Check } from "lucide-react"



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
        <div className='container mx-auto flex flex-col items-center text-center px-5 py-16 font-poppins text-pretty'>
            <h1 className="font-poppins font-bold text-xl md:text-4xl/snug">
                Featured Medical Supplies
            </h1>
            <h2 className="text-gray-400 lg:w-1/2 font-poppins text-base md:text-xl mt-1">
                Discover our most trusted medical supplies, carefully selected to meet the highest healthcare standards and designed for professional use
            </h2>


            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-[80%] lg:w-[90%] mt-8"
            >
                <CarouselContent>
                    {products.map((_, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/3 hover:drop-shadow-lg duration-200 transition-all py-6 rounded-2xl">
                            <div className="rounded-2xl">
                                <Card className="p-0 rounded-2xl">
                                    <CardContent className="flex p-0 aspect-2/3 bg-gray-100 items-center justify-center rounded-2xl">
                                        <div className="w-full h-full flex flex-col ">
                                            {/* Image section - 1/3 of card height */}
                                            <div className="h-3/6 w-full relative overflow-hidden group">
                                                <div className="absolute z-10 bg-dark-primary text-white rounded-full px-2 py-1 m-4">{_.type}</div>
                                                <Image
                                                    src={_.src}
                                                    alt={_.name}
                                                    fill
                                                    className="object-cover rounded-t-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-110"
                                                    priority
                                                />
                                            </div>
                                            <div className="flex flex-col text-start h-3/6 items-stretch justify-between p-[5%]">
                                                <h1 className="text-xl/snug lg:text-2xl font-semibold font-sans" >{_.name}</h1>
                                                <h2 className="flex flex-col just lg:gap-3">
                                                    <span className="flex flex-row lg:text-lg"><Check className="text-teal-700" /> {_.prop[0]}</span>
                                                    <span className="flex flex-row lg:text-lg"><Check className="text-teal-700" /> {_.prop[1]}</span>
                                                    <span className="flex flex-row lg:text-lg"><Check className="text-teal-700" /> {_.prop[2]}</span>
                                                </h2>
                                                {/* <h3 className="text-lg font-semibold text-dark-primary">Contact for pricing</h3> */}
                                                <Button className="bg-dark-primary hover:bg-myprimary hover:shadow-lg  cursor-pointer lg:text-lg lg:p-5">View Details</Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <Button className=" bg-dark-primary hover:bg-myprimary hover:shadow-lg cursor-pointer lg:text-lg py-6 px-8 mt-4">View All Products</Button>

        </div>
    )
}

export default Featured