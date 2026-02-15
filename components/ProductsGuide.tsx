export const dynamic = "force-dynamic";


import { Card, CardContent } from "./ui/card"
import { CalendarDays, Dot } from "lucide-react"
import * as Icons from "lucide-react";

export type ProductsGuideProps = {
    name: string
    prop?: string[]
    type: string
    desc: string
    icon?: string
    date: string
}

const ProductsGuide = ({ name, prop, type, desc, icon, date }: ProductsGuideProps) => {
    const IconComponent = icon ? (Icons[icon as keyof typeof Icons] as React.ElementType) : null;

    return (
        <div className="md:basis-1/2 xl:basis-1/3 h-full">
            <Card className="group rounded-2xl h-full overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col">

                {/* CardContent fills card height */}
                <CardContent className="p-0 flex flex-col h-full">
                    <div className="flex flex-col flex-1 min-h-0 justify-between p-4 sm:p-5 lg:p-6">
                        {/* Top Content: grows/shrinks so card height stays consistent */}
                        <div className="flex flex-col gap-4 flex-1 min-h-0">
                            <div className="flex flex-row items-center gap-3">
                                {IconComponent && (
                                    <div className="bg-myprimary/30 rounded-xl text-dark-primary p-3 flex items-center justify-center">
                                        <IconComponent width={38} height={38} />
                                    </div>
                                )}
                                <h3 className="card-title leading-snug text-start line-clamp-2
                                           group-hover:text-myprimary
                                           transition-colors duration-300">
                                    {name}
                                </h3>
                            </div>
                            <div className="flex flex-row gap-2 text-sm items-center">
                                <span className="font-medium bg-dark-primary text-white rounded-md px-3 py-1">
                                    {type}
                                </span>
                                <span className="flex items-center gap-1 card-body">
                                    <CalendarDays className="w-5" />
                                    <span>{date}</span>
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 flex-1 min-h-0">
                                <span className="card-body text-gray-600 leading-snug line-clamp-3">{desc}</span>
                                <span className="leading-snug card-title text-sm">Topics covered:</span>
                                <ul className="flex flex-col gap-1">
                                    {(prop ?? []).slice(0,).map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 card-body text-gray-600">
                                            <Dot className="w-6 h-6 text-teal-700 shrink-0" />
                                            <span className="leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};




export default ProductsGuide