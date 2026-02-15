/* eslint-disable @typescript-eslint/no-explicit-any */
import Expert from "@/components/Expert"
import Featured from "@/components/Featured"
import KnowledgeCards from "@/components/KnowledgeCards"
import ProductsGuide from "@/components/ProductsGuide"
import { getKnowledge } from "@/sanity/lib/getKnowledge"
import { getProductGuides } from "@/sanity/lib/getProductGuides"
import Image from "next/image"

/** Ensures Sanity content (Knowledge cards, Product guides) is fetched on every request so updates show after refresh. */
export const dynamic = "force-dynamic";

export type ProductGuide = {
    _id: string
    name: string
    icon?: string
    type: string
    desc: string
    prop?: string[]
    date: string
}
const Page = async () => {
    const Guide = await getProductGuides();
    const knowledge = await getKnowledge();
    return (
        <>

            {/* Hero section */}
            <div className="relative w-full h-[50vw] md:h-[20vw] overflow-hidden">
                <Image
                    src="/Media/im2.jpg"
                    className="absolute inset-0 h-full w-full object-cover"
                    width={10000}
                    height={10000}
                    alt="hero cover"
                />
                <div className="absolute inset-0 bg-dark-primary mix-blend-multiply"></div>
                <div className="absolute z-10 flex flex-col items-center justify-center p-5 md:p-14 h-full w-full gap-3">
                    <h1 className="section-title text-white">Knowledge Hub</h1>
                    <p className="header-subtitle text-white/90">Expert insights and guides to help you make informed decisions about medical supplies</p>
                </div>
            </div>


            {/* Knowledge Cards */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-5 pt-10 md:pt-12 pb-16 md:pb-20 items-stretch">
                {knowledge.map((card: any) => (
                    <KnowledgeCards key={card._id} id={card._id} img={card.img} title={card.title} description={card.description} category={card.category} date={card.date} />
                ))}
            </div>


            {/* Header of Products Guide */}
            <div className="w-full bg-gray-50 section-padding flex items-center justify-center">
                <div className="container mx-auto flex flex-col items-center justify-center text-center max-w-3xl">
                    <h1 className="section-title">Product Guides</h1>
                    <p className="section-subtitle">Expert insights and detailed information about our medical supply categories</p>
                </div>
            </div>

            {/* Products Guide Cards */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-4 sm:px-5 pt-10 md:pt-12 pb-16 md:pb-20 items-stretch">
                {Guide.map((_: ProductGuide) => (
                    <ProductsGuide key={_._id} name={_.name} prop={_.prop} type={_.type} desc={_.desc} icon={_.icon} date={_.date} />
                ))}
            </div>

            {/* Contact Us */}
            <Expert />
            <Featured />

        </>
    )
}

export default Page