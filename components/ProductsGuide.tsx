import { Card, CardContent } from "./ui/card"
import { CalendarDays, Dot } from "lucide-react"
import * as Icons from "lucide-react";

type mytypess = {
    namee: string;
    propp: string[];
    desc: string;
    typee: string;
    icon?: string;
};

const ProductsGuide = ({ namee, propp, typee, desc, icon }: mytypess) => {
    const IconComponent = icon ? (Icons[icon as keyof typeof Icons] as React.ElementType) : null;

    return (
        <div className="md:basis-1/2 xl:basis-1/3 h-full">
            <Card className="group rounded-2xl h-full overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col">

                {/* CardContent fills card height */}
                <CardContent className="p-0 flex flex-col h-full">
                    <div className="flex flex-col flex-1 justify-between">

                        {/* Top Content */}
                        <div className="flex flex-col gap-4 p-4 sm:p-5 lg:p-6">

                            {/* Icon + Title */}
                            <div className="flex flex-row items-center gap-3">
                                {IconComponent && (
                                    <div className="bg-myprimary/30 rounded-xl text-dark-primary p-3 flex items-center justify-center">
                                        <IconComponent width={38} height={38} />
                                    </div>
                                )}
                                <h1 className="font-semibold leading-snug text-start line-clamp-2
                                           text-[clamp(1.05rem,2.5vw,1.35rem)]
                                           group-hover:text-myprimary
                                           transition-colors duration-300">
                                    {namee}
                                </h1>
                            </div>

                            {/* Type + Date */}
                            <div className="flex flex-row gap-2 text-[0.85rem] items-center">
                                <span className="font-medium bg-dark-primary text-white rounded-md px-3 py-1">
                                    {typee}
                                </span>
                                <span className="flex items-center gap-1 text-gray-600">
                                    <CalendarDays className="w-5" />
                                    <span>March 15, 2024</span>
                                </span>
                            </div>

                            {/* Description + Features */}
                            <div className="flex flex-col gap-2">
                                <span className="text-gray-700 text-[clamp(0.85rem,2vw,1.1rem)] leading-snug">{desc}</span>
                                <span className="leading-snug font-semibold">Topics covered:</span>
                                <ul className="flex flex-col gap-1">
                                    {propp.slice(0,).map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-700 text-[clamp(0.85rem,2vw,1.1rem)]">
                                            <Dot className="w-6 h-6 text-teal-700 shrink-0" />
                                            <span className="leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* If you add a button later, wrap it in mt-auto to push to bottom */}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};




export default ProductsGuide