/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link"
import { Button } from "./ui/button"
import KnowledgeCards from "./KnowledgeCards"
import { getKnowledge } from "@/sanity/lib/getKnowledge"


const ProdGuide = async () => {
    const knowledge = await getKnowledge();

    return (
        <>
            {/* Header of Products Guide */}
            <div className="w-full bg-gray-50 section-padding flex items-center justify-center">
                <div className="container mx-auto flex flex-col items-center justify-center text-center max-w-3xl">
                    <h2 className="section-title">Products & Knowledge Hub</h2>
                    <p className="section-subtitle">Clear, practical information to help professionals choose the right materials, understand standards, and use products effectively.</p>
                </div>
            </div>

            <div className="container mx-auto flex flex-col items-center gap-5 section-padding pt-0">
                {/* Products Guide Cards */}
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
                    {knowledge.slice(0, 4).map((card: any) => (
                        <KnowledgeCards key={card._id} id={card._id} img={card.img} title={card.title} description={card.description} category={card.category} date={card.date} />
                    ))}
                </div>
                <Link href="/knowledge">
                    <Button className=" bg-dark-primary hover:bg-myprimary hover:shadow-lg cursor-pointer lg:text-lg py-6 px-8 mt-4">Check Knowledge Hub</Button>
                </Link>
            </div>
        </>

    )
}


export default ProdGuide