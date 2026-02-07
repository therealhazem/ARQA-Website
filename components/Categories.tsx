import { Hand, ShieldPlusIcon, Award, TrendingUp } from "lucide-react"
import FadeInSection from "./FadeInSection"

const cards = [
    {
        icon: Hand,
        title: "Hand Protection",
        desc: "Medical and industrial gloves including nitrile, latex, vinyl, and advanced synthetic options, designed for safety, comfort, and durability.",
    },
    {
        icon: ShieldPlusIcon,
        title: "Patient & Staff Safety",
        desc: "Face masks, protective equipment, and essential disposables that support infection control and daily clinical use.",
    },
    {
        icon: Award,
        title: "Quality & Compliance",
        desc: "Products sourced from ISO-certified manufacturers and selected to meet European and U.S. quality benchmarks.",
    },
    {
        icon: TrendingUp,
        title: "Trusted Partnerships",
        desc: "Built on long term relationships with distributors, wholesalers, and professional users across Egypt.",
    },
]
const Categories = () => {
    return (
        <FadeInSection className="w-full bg-gray-50 section-padding">
            <div className="container mx-auto flex flex-col items-center text-center">
                <h1 className="section-title">
                    What We Provide
                </h1>
                <h2 className="section-subtitle max-w-2xl">
                    A carefully selected range of medical and industrial supplies designed to support safety, performance, and reliability in healthcare and professional environments.                </h2>

                <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 items-center justify-between gap-4 mt-10">
                    {cards.map((item) => (
                        <div key={item.title} className="flex flex-col items-center justify-center border-2 rounded-2xl shadow-myprimary hover:shadow-lg/20 transition-all duration-200
                    px-3 py-5 h-full bg-white gap-2">
                            <div className="bg-myprimary/30 rounded-full text-dark-primary p-3 m-2">
                                <item.icon width={36} height={36} />
                            </div>
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-body text-center">{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </FadeInSection>
    )
}

export default Categories