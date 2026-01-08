import { Eye, Target, CircleStar } from "lucide-react"

const cards = [
    {
        icon: Target,
        title: "Our Mission",
        desc: "To provide Egyptian healthcare professionals with premium medical supplies that meet the highest international quality standards.",
    },
    {
        icon: Eye,
        title: "Our Vision",
        desc: "To become Egypt's most trusted partner for medical supplies, known for quality, reliability, and exceptional service.",
    },
    {
        icon: CircleStar,
        title: "Our Values",
        desc: "Quality, integrity, reliability, and unwavering commitment to our healthcare partners and the patients they serve.",
    }
]

const MandV = () => {
    return (
        <div className="w-full bg-gray-50">

            <div className='container mx-auto flex flex-col items-center text-center px-5 py-16'>
                <h1 className="font-poppins font-bold text-xl md:text-4xl">
                    Our Mission & Vision
                </h1>
                <h2 className="text-gray-400 font-poppins mt-1 md:text-xl">
                    The principles that guide everything we do
                </h2>

                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 text-start items-center justify-between gap-4 mt-8">
                    {cards.map((item) => (
                        <div key={item.title} className="flex flex-col items-start justify-center border-2 rounded-2xl shadow-myprimary hover:shadow-lg/20 transition-all duration-200 bg-white gap-2
                        p-[7%]">
                            <div className="flex flex-row items-center">
                                <div className="bg-myprimary/30 rounded-full text-dark-primary my-1 md:my-2 mr-3 p-3">
                                    <item.icon width={36} height={36} />
                                </div>
                                <h1 className="font-semibold text-lg lg:text-xl">{item.title}</h1>
                            </div>
                            <h2 className="text-gray-500 lg:text-lg">{item.desc}</h2>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default MandV