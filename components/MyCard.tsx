/* eslint-disable @typescript-eslint/no-explicit-any */
import { CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

type MyCardProps = {
    id: any
    srcc?: string
    namee: string
    propp?: string[] | null
    typee: string
}

const MyCard = ({ id, srcc, namee, propp, typee }: MyCardProps) => {
    return (
        <CarouselItem className="md:basis-1/2 xl:basis-1/3 py-6">
            <Card className="rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-0 mt-[-30px]">
                    <div className="flex flex-col h-full justify-between">

                        {/* Image Section */}
                        <div className="relative h-[250px] sm:h-[280px] lg:h-[300px] overflow-hidden group">
                            <span className="absolute z-10 top-4 left-4 text-[0.7rem] sm:text-xs font-medium bg-dark-primary text-white rounded-full px-3 py-1">
                                {typee}
                            </span>
                            <Image
                                src={srcc || "/"}
                                alt={namee || "img"}
                                fill
                                priority
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-between mb-[-30px] gap-4 p-4 sm:p-5 lg:p-6">

                            {/* Title */}
                            <h3 className="card-title leading-snug text-start line-clamp-2">
                                {namee}
                            </h3>

                            {/* Features */}
                            <ul className="flex flex-col gap-2">
                                {(propp ?? []).slice(0, 3).map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2 card-body text-start text-gray-600"
                                    >
                                        <Check className="w-4 h-4 mt-0.5 text-teal-700 shrink-0" />
                                        <span className="leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <Link href={`/products/${id}`}>
                                <Button
                                    className="mt-2 w-full text-white bg-dark-primary hover:bg-myprimary
                  text-sm md:text-base py-5 rounded-xl transition-all"
                                >
                                    View Details
                                </Button>
                            </Link>

                        </div>
                    </div>
                </CardContent>
            </Card>
        </CarouselItem>
    )
}

export default MyCard
