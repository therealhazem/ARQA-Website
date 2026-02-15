/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

type mytypess = {
    id: any
    srcc: string;
    namee: string;
    propp?: string[];
    key: number;
    typee: string;
};

const ProductCard = ({ id, srcc, namee, propp, typee }: mytypess) => {
    return (
        <div className="md:basis-1/2 xl:basis-1/3 py-2">
            <Link href={`/products/${id}`} className="block h-full">
                <Card className="group h-full rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer">
                    <CardContent className="p-0 mt-[-30px]">
                        <div className="flex flex-col h-full justify-between">

                            {/* Image: zoom on hover (like KnowledgeCards) */}
                            <div className="relative h-[250px] sm:h-[280px] lg:h-[300px] overflow-hidden">
                                <span className="absolute z-10 top-4 left-4 text-[0.7rem] sm:text-xs font-medium bg-dark-primary text-white rounded-full px-3 py-1">
                                    {typee}
                                </span>
                                <Image
                                    src={srcc}
                                    alt={namee}
                                    fill
                                    priority
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Content: title color change on hover */}
                            <div className="flex flex-col flex-1 min-h-0 gap-4 p-4 sm:p-5 lg:p-6 mb-[-30px]">
                                <div className="flex-1 min-h-0 flex flex-col gap-2">
                                    <h3 className="card-title leading-snug text-start line-clamp-2 transition-colors duration-300 group-hover:text-myprimary">
                                        {namee}
                                    </h3>
                                    <ul className="flex flex-col gap-2">
                                        {(propp ?? []).slice(0, 3).map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-2 card-body text-gray-600"
                                            >
                                                <Check className="w-4 h-4 mt-0.5 text-teal-700 shrink-0" />
                                                <span className="leading-snug">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Button
                                    className="mt-auto w-full text-white bg-dark-primary hover:bg-myprimary
                                text-sm md:text-base py-5 rounded-xl transition-all pointer-events-none"
                                >
                                    View Details
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </div>
    );
};


export default ProductCard