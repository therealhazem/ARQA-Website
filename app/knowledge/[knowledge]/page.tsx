import Featured from "@/components/Featured"
import NotFound from "@/components/NotFound"
import { getSpecificKnowledge } from "@/sanity/lib/getKnowledge"
import { CalendarDays } from "lucide-react"
import { PortableText } from "next-sanity"
import Image from "next/image"

export const dynamic = "force-dynamic";

type PageProps = {
    params: Promise<{ knowledge: string }>
}
export default async function Page({ params }: PageProps) {
    const { knowledge } = await params
    const theKnowledge = await getSpecificKnowledge(`
    *[_type == "Knowledge" && _id == "${knowledge}"][0]{
  _id,
  title,
  category,
  date,
  report,
  "img": img.asset->url
    }
    `)

    if (!theKnowledge) return <NotFound />

    return (
        <>
            <div className="container mx-auto overflow-hidden p-4 gap-5 lg:mt-[3%]">
                <div className="flex flex-col lg:flex-row items-start justify-center gap-5 w-full">
                    {/* Product Image */}
                    <div className="w-full flex items-center justify-center">
                        <Image src={theKnowledge.img} className="rounded-xl" width={670} height={670} alt={theKnowledge.title} priority />
                    </div>
                    {/* Product Props */}
                    <div className="flex flex-col items-start justify-between gap-3 w-full">
                        {/* Categ */}
                        <div className="flex flex-row gap-3">
                            <span className="font-medium text-sm bg-dark-primary text-white rounded-md px-3 py-1"> {theKnowledge.category} </span>
                            <span className="flex items-center gap-1 text-gray-700">
                                <CalendarDays className="w-5" />
                                <span>{theKnowledge.date}</span>
                            </span>
                        </div>
                        {/* Product Name */}
                        <h1 className="product-title text-2xl md:text-3xl leading-snug text-start line-clamp-2">
                            {theKnowledge.title}
                        </h1>
                        <div className="card-body text-gray-600 text-base md:text-lg prose prose-sm md:prose-base">
                            <PortableText value={theKnowledge.report} />
                        </div>
                    </div>
                </div>
                <Featured />
            </div>
        </>
    )
}
