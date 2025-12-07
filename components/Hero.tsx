import Image from "next/image"
import { Button } from "./ui/button"

const Hero = () => {
    return (
        <div className="relative w-full h-[85vw] md:h-[40vw] overflow-hidden">
            <Image
                src="/Hero Doctors.svg"
                alt="Hero"
                className="object-cover object-top"
                fill
                priority
            />
            <div className="absolute inset-0 bg-myprimary/65 mix-blend-multiply"></div>

            <div className="absolute z-10 flex flex-col items-start justify-center p-5 md:p-14 h-full w-full md:w-[50%] gap-3">
                <h1 className="
                text-white tracking-tight font-semibold font-poppins text-balance
                text-[6.3vw]/[7vw] text-start
                md:text-[3.8vw]/[4.2vw] md:text-start
                ">
                    Premium Medical Supplies for Egypt&apos;s Healthcare Professionals
                </h1>
                <h2 className="
                text-gray-300 font-poppins text-pretty
                text-[3.3vw] text-start
                md:text-[1.2vw] md:text-start">
                    delivering premium medical products to healthcare professionals across Egypt and beyond. Quality you can trust, service you can rely on.
                    Sourcing the highest quality medical consumables from trusted global partners in China, Malaysia, and Thailand.
                </h2>
                <div className="flex flex-row gap-4">
                    <Button className="bg-creamy/90 text-dark-primary lg:p-5 lg:text-lg transition-all duration-300
                    md:border-4 border-2 border-creamy hover:bg-creamy hover:cursor-pointer font-poppins">
                        Explore Products
                    </Button>
                    <Button className="bg-dark-primary text-creamy lg:p-5 lg:text-lg transition-all duration-300
                    md:border-4 border-2 border-creamy/80 hover:bg-dark-primary/50 hover:cursor-pointer font-poppins">
                        Knowledge Hub
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default Hero