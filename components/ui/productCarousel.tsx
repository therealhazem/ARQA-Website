"use client"

import * as React from "react"
import Image from "next/image"
import { Card, } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import clsx from "clsx"

const images = [
    "/products/Black.png",
    "/products/blue.png",
    "/products/latex.png",
    "/products/mask.png",
    "/products/vinyl.png",
]

export function ProductCarousel() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) return

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <div className="mx-auto lg:mx-0 w-full max-w-xl overflow-hidden xl:overflow-visible">
            {/* Main image */}
            <Carousel setApi={setApi}>
                <CarouselContent>
                    {images.map((src, index) => (
                        <CarouselItem key={index}>
                            <Card className="border-0 shadow-none">
                                <Image
                                    src={src}
                                    width={600}
                                    height={600}
                                    alt={`Product image ${index + 1}`}
                                    className="rounded-xl w-full"
                                    priority={index === current}
                                />
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />

            </Carousel>

            {/* Thumbnails */}
            <div className=" flex gap-4 justify-center overflow-x-auto">
                {images.map((src, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={clsx(
                            "transition rounded-xl border-2",
                            current === index
                                ? "border-primary"
                                : "border-transparent opacity-70"
                        )}
                    >
                        <Image
                            src={src}
                            width={80}
                            height={80}
                            alt={`Thumbnail ${index + 1}`}
                            className="rounded-xl"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}