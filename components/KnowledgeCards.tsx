/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { CalendarDays, ChevronRight } from "lucide-react"
import Link from "next/link";

const KnowledgeCards = ({ id, img, title, description, category, date, }: any) => {
    return (
        <div className="md:basis-1/2 xl:basis-1/3 h-full py-2 md:py-6">
            <Card className="group rounded-2xl h-full overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col">

                {/* CardContent without breaking flex */}
                <CardContent className="p-0 flex flex-col h-full">
                    <div className="flex flex-col flex-1">

                        {/* Image Section */}
                        <div className="relative -mt-7 h-[200px] sm:h-[230px] lg:h-[250px] overflow-hidden group shrink-0">
                            <Image
                                src={img}
                                alt={title}
                                fill
                                priority
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col flex-1 justify-between gap-4 p-4 sm:p-5 lg:p-6 -mb-7">

                            {/* Props */}
                            <div className="flex flex-row gap-2 text-sm">
                                <span className="font-medium bg-dark-primary text-white rounded-md px-3 py-1">
                                    {category}
                                </span>
                                <span className="flex items-center gap-1 card-body">
                                    <CalendarDays className="w-5" />
                                    <span>{date}</span>
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="card-title leading-snug text-start line-clamp-2
                                           group-hover:text-myprimary
                                           transition-colors duration-300">
                                {title}
                            </h3>

                            {/* Report */}
                            <p className="card-body text-gray-600 text-base leading-relaxed line-clamp-3">
                                {description}
                            </p>


                            {/* Button sticks to bottom */}
                            <div className="mt-auto">
                                <Link href={`/knowledge/${id}`}>
                                    <Button
                                        className="w-full text-white bg-dark-primary hover:bg-myprimary
                                    text-sm md:text-base py-5 rounded-xl transition-all"
                                    >
                                        <div className="flex items-center justify-center gap-1">
                                            Read More
                                            <ChevronRight className="mt-[3px]" />
                                        </div>
                                    </Button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};



export default KnowledgeCards