import { Eye, Target, CircleStar } from "lucide-react"

const cards = [
    {
        icon: Target,
        title: "Our Mission",
        desc: "To provide Egyptian healthcare professionals with certified, high-quality medical supplies that support safety, performance, and trust.",
    },
    {
        icon: Eye,
        title: "Our Vision",
        desc: "To become one of Egypt’s most reliable medical supply partners, recognized for integrity, consistency, and long-term value.",
    },
    {
        icon: CircleStar,
        title: "Our Values",
        desc: "Quality • Responsibility • Transparency • Long Term Partnerships and unwavering commitment to our healthcare partners and the patients they serve.",
    }
]

const MandV = () => {
    return (
        <div className="w-full bg-gray-50 section-padding">

            <div className="container mx-auto flex flex-col items-center text-center">
                <h1 className="section-title">
                    Our Mission & Vision
                </h1>
                <p className="section-subtitle">
                    The principles that guide everything we do
                </p>

                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 text-start items-center justify-between gap-4 mt-10">
                    {cards.map((item) => (
                        <div key={item.title} className="flex flex-col items-start justify-center border-2 rounded-2xl shadow-myprimary hover:shadow-lg/20 transition-all duration-200 bg-white gap-2 p-6 md:p-8">
                            <div className="flex flex-row items-center">
                                <div className="bg-myprimary/30 rounded-full text-dark-primary my-1 md:my-2 mr-3 p-3">
                                    <item.icon width={36} height={36} />
                                </div>
                                <h3 className="card-title">{item.title}</h3>
                            </div>
                            <p className="card-body text-left">{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default MandV