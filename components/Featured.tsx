/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "./ui/button"
import MyCard from "./MyCard"
import Link from "next/link"
import { getFeaturedProducts } from "@/sanity/lib/getProducts"

const Featured = async () => {
    type Product = {
        _id: any
        name: string
        images: {
            _key: string
            url: string
        }[]
        features: string[] | null
        category: string
    }

    // Fetch featured products
    const products: Product[] = await getFeaturedProducts()

    return (
        <div className="container mx-auto flex flex-col items-center text-center section-padding text-pretty">
            <h1 className="section-title">Featured Medical Supplies</h1>
            <h2 className="section-subtitle max-w-2xl">
                Discover our most trusted medical supplies, carefully selected to meet
                the highest healthcare standards and designed for professional use
            </h2>

            <Carousel
                opts={{ align: "start" }}
                className="w-[80%] lg:w-[90%] mt-10"
            >
                <CarouselContent>
                    {products.map((product) => (
                        <MyCard
                            key={product._id}
                            id={product._id}
                            srcc={product.images?.[0]?.url || "/"}
                            namee={product.name}
                            propp={product.features}
                            typee={product.category}
                        />
                    ))}

                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <Link href="/products/">
                <Button className="bg-dark-primary hover:bg-myprimary hover:shadow-lg cursor-pointer lg:text-lg py-6 px-8 mt-4">
                    View All Products
                </Button>
            </Link>
        </div>
    )
}

export default Featured
