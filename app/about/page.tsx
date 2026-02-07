import Certifications from "@/components/Certifications"
import MandV from "@/components/MandV"
import Numbers from "@/components/Numbers"
import Testimonials from "@/components/Testimonials"
import Image from "next/image"

const page = () => {
    return (
        <>
            {/* Hero section */}
            <div className="relative w-full h-[50vw] md:h-[20vw] overflow-hidden">
                <Image
                    src="/Media/im9.jpg"
                    className="absolute inset-0 h-full w-full object-cover"
                    width={10000}
                    height={10000}
                    alt="hero cover"
                />
                <div className="absolute inset-0 bg-dark-primary mix-blend-multiply"></div>
                <div className="absolute z-10 flex flex-col items-center justify-center p-5 md:p-14 h-full w-full gap-3">
                    <h1 className="section-title text-white">About ARQA Medical</h1>
                    <p className="header-subtitle mt-2">Built on responsibility, experience, and a commitment to raising healthcare standards</p>
                </div>
            </div>


            {/* Our Story Section */}
            <div className="container mx-auto flex flex-col items-center justify-center section-padding">
                <h1 className="section-title">
                    Our  Story & Responsibility
                </h1>
                <div className="section-subtitle max-w-5xl text-pretty leading-relaxed">
                    <p className="py-2">ARQA Medical Trade & Import was founded by a team of professionals with more than 30 years of combined experience in importing, logistics, customs clearance, and supply chain management within the Egyptian market.</p>
                    <p className="py-2">From the start, ARQA was built on a strong sense of responsibility toward Egypt’s healthcare sector. Our goal has always been to bridge the gap between global medical manufacturing standards and the real needs of local healthcare professionals.</p>
                    <p className="py-2">To achieve this, we collaborate with reputable international manufacturers to introduce carefully selected medical and industrial products that meet the quality benchmarks applied in Europe and the United States, ensuring safety, reliability, and consistent performance.</p>
                    <p className="py-2">Today, ARQA serves as a trusted link between global suppliers and Egypt’s medical and commercial sectors, committed to raising standards, delivering real value, and supporting healthcare professionals with products they can depend on.</p>
                </div>
            </div>
            {/* Mission & Vision */}
            <MandV />
            <Numbers />
            <Certifications />
            <Testimonials />

        </>
    )
}

export default page