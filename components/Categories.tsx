import { Hand, ShieldPlusIcon, Award, TrendingUp } from "lucide-react"

const cards = [
    {
        icon: Hand,
        title: "Hand Protection",
        desc: "Premium nitrile, latex, and vinyl gloves and medical products",
    },
    {
        icon: ShieldPlusIcon,
        title: "Patient Safety",
        desc: "High-quality facemasks and protective equipment",
    },
    {
        icon: Award,
        title: "ISO Certified",
        desc: "Certified Highest Quality Standards for each product",
    },
    {
        icon: TrendingUp,
        title: "Healthcare Partners",
        desc: "Many Healthcare Partners Trusted Our Products",
    },
]
const Categories = () => {
    return (
        <div className="w-full bg-gray-50 section-padding">

            <div className="container mx-auto flex flex-col items-center text-center">
                <h1 className="section-title">
                    Product Categories
                </h1>
                <h2 className="section-subtitle max-w-2xl">
                    Comprehensive medical supply solutions for every healthcare need
                </h2>

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
        </div>
    )
}

export default Categories