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

type ProductImage = {
    _key: string
    url: string
}

type ProductCarouselProps = {
    images: ProductImage[]
}

export function ProductCarousel({ images }: ProductCarouselProps) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) return

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    if (!images || images.length === 0) return null

    return (
        <div className="mx-auto lg:mx-0 w-full max-w-xl overflow-hidden xl:overflow-visible">
            {/* Main image */}
            <Carousel setApi={setApi}>
                <CarouselContent>
                    {images.map((image, _key) => (
                        <CarouselItem key={_key}>
                            <Card className="border-0 shadow-none">
                                <Image
                                    src={image.url}
                                    width={600}
                                    height={600}
                                    alt={`Product image ${_key + 1}`}
                                    className="rounded-xl w-full"
                                    priority={_key === 0}
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
                {images.map((image, _key) => (
                    <button
                        key={_key}
                        onClick={() => api?.scrollTo(_key)}
                        className={clsx(
                            "transition rounded-xl border-2",
                            current === _key
                                ? "border-primary"
                                : "border-transparent opacity-70"
                        )}
                    >
                        <Image
                            src={image.url}
                            width={80}
                            height={80}
                            alt={`Thumbnail ${_key + 1}`}
                            className="rounded-xl"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}