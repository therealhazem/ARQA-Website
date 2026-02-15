import { Shield, Award, BadgeCheck } from "lucide-react"
import Image from "next/image"
import FadeInSection from "./FadeInSection"


const cards = [
    {
        icon: BadgeCheck,
        title: "Quality You Can Trust",
        desc: "All products are carefully selected to meet international quality standards and undergo strict evaluation before entering the Egyptian market.",
    },
    {
        icon: Shield,
        title: "Reliable Supply Chain",
        desc: "Decades of expertise in importing, customs clearance, and logistics ensure consistent availability and dependable delivery.",
    },
    {
        icon: Award,
        title: "Market Expertise",
        desc: "A professional team with deep knowledge of Egypt’s medical supply landscape, ready to support informed purchasing decisions.",
    },
]


const Why = () => {
    return (
        <FadeInSection className="w-full text-white flex items-center justify-center section-padding bg-linear-to-b from-dark-primary to-myprimary text-pretty">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center xl:flex-row gap-8 lg:gap-14">
                    <Image src="/Doctors.png" className="rounded-xl hover:shadow-lg/20 shadow-white transition-all duration-200 hover:translate-y-[-2px]" width={530} height={530} alt="Doctors" priority />
                    <div className="flex flex-col items-center justify-between text-center lg:gap-4 gap-3">
                        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-[4vw] text-center font-bold">Why Choose <span className="font-noticia font-semibold tracking-wider"> ARQA</span> </h2>
                        <h3 className="text-xl md:text-2xl">Trusted by Healthcare Professionals</h3>
                        <p className="text-lg md:text-xl  text-white/90">Our commitment to quality, safety, and excellence has made us the preferred partner for healthcare professionals throughout Egypt and the region</p>
                        <div className="flex flex-col lg:flex-row items-stretch justify-between w-full mt-4 gap-5">
                            {/* card */}
                            {cards.map((item, index) => (
                                <div key={index} className="flex flex-col items-center justify-center border
                                rounded-2xl border-white/30 hover:shadow-lg/20 shadow-white transition-all duration-200
                                p-4 w-full min-h-[200px] bg-myprimary/50 hover:bg-myprimary/70 gap-2">
                                    <div className="bg-white rounded-full text-dark-primary p-3">
                                        <item.icon width={36} height={36} />
                                    </div>
                                    <h3 className="card-title">{item.title}</h3>
                                    <p className="why-body">{item.desc}</p>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </FadeInSection>
    )
}

export default Why