import { Shield, Award, BadgeCheck, } from "lucide-react"

import Image from "next/image"


const cards = [
    {
        icon: BadgeCheck,
        title: "Quality Assured",
        desc: "All products meet international healthcare standards and undergo rigorous quality control processes",
    },
    {
        icon: Shield,
        title: "Reliable Supply Chain",
        desc: "Consistent product availability backed by efficient logistics and delivery systems nationwide",
    },
    {
        icon: Award,
        title: "Expert Support",
        desc: "Dedicated team of specialists ready to assist with product selection and technical guidance",
    },
]


const Why = () => {
    return (
        <div className="w-full text-white font-poppins flex items-center justify-center p-4 mt-16 bg-linear-to-b from-dark-primary to-myprimary text-pretty">

            <div className="container mx-auto flex flex-col items-center justify-center py-8">
                <div className="flex flex-col items-center justify-center lg:flex-row gap-8 lg:gap-14">
                    <Image src="/Doctors.png" className="rounded-xl hover:shadow-lg/20 shadow-white transition-all duration-200 hover:translate-y-[-2px]" width={550} height={550} alt="Doctors" priority />
                    <div className="flex flex-col items-center justify-between text-center lg:gap-4 gap-3">
                        <h1 className="lg:text-[4vw] text-[10vw] text-center font-bold ">Why Choose <span className="lg:text-[4.4vw] text-[11vw] font-noticia font-semibold tracking-wider"> ARQA ?</span> </h1>
                        <h1 className="lg:text-[2.5vw] text-[6.5vw]">Trusted by Healthcare Professionals</h1>
                        <h2 className="text-xl">Our commitment to quality, safety, and excellence has made us the preferred partner for healthcare professionals throughout Egypt and the region</h2>
                        <div className="flex flex-col lg:flex-row items-stretch justify-between w-full mt-4 gap-5">
                            {/* card */}
                            {cards.map((item, index) => (
                                <div key={index} className="flex flex-col items-center justify-center border
                                rounded-2xl border-white/30 hover:shadow-lg/20 shadow-white transition-all duration-200
                                p-3 w-full min-h-[200px] bg-myprimary/50 hover:bg-myprimary/70 gap-2">
                                    <div className="bg-white rounded-full text-dark-primary p-3">
                                        <item.icon width={36} height={36} />
                                    </div>
                                    <h1 className="font-semibold lg:text-xl text-lg">{item.title}</h1>
                                    <h2 className="lg:text-lg">{item.desc}</h2>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Why