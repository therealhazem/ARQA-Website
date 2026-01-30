import Featured from "@/components/Featured"
import { CalendarDays } from "lucide-react"
import Image from "next/image"

const page = () => {
    return (
        <>
            <div className="container mx-auto overflow-hidden p-4 gap-5 lg:mt-[3%]">
                <div className="flex flex-col lg:flex-row items-start justify-center gap-5 w-full">
                    {/* Product Image */}
                    <div className="w-full flex items-center justify-center">
                        <Image src="/Doctors.png" className="rounded-xl" width={670} height={670} alt="Doctors" priority />

                    </div>
                    {/* Product Props */}
                    <div className="flex flex-col items-start justify-between gap-3 w-full">
                        {/* Categ */}
                        <div className="flex flex-row gap-3">
                            <span className="font-medium text-sm bg-dark-primary text-white rounded-md px-3 py-1"> Gloves </span>
                            <span className="flex items-center gap-1 text-gray-700">
                                <CalendarDays className="w-5" />
                                <span>March 15, 2024</span>
                            </span>
                        </div>
                        {/* Product Name */}
                        <h1 className="font-poppins font-bold leading-snug text-start line-clamp-2
                                            text-[clamp(1.35rem,2.5vw,2.5rem)]">
                            Nitrile Gloves - Professional Grade
                        </h1>
                        {/* Product Description */}
                        <p className="text-gray-600 font-poppins text-base md:text-xl">
                            Our professional-grade nitrile gloves provide superior protection and comfort for healthcare professionals. Made from high-quality synthetic rubber, these gloves offer excellent puncture resistance and chemical protection while remaining latex-free to prevent allergic reactions.
                        </p>
                        <p className="text-gray-600 font-poppins text-base md:text-xl">
                            Our professional-grade nitrile gloves provide superior protection and comfort for healthcare professionals. Made from high-quality synthetic rubber, these gloves offer excellent puncture resistance and chemical protection while remaining latex-free to prevent allergic reactions.
                        </p>
                        <p className="text-gray-600 font-poppins text-base md:text-xl">
                            Our professional-grade nitrile gloves provide superior protection and comfort for healthcare professionals. Made from high-quality synthetic rubber, these gloves offer excellent puncture resistance and chemical protection while remaining latex-free to prevent allergic reactions.
                        </p>
                        <p className="text-gray-600 font-poppins text-base md:text-xl">
                            Our professional-grade nitrile gloves provide superior protection and comfort for healthcare professionals. Made from high-quality synthetic rubber, these gloves offer excellent puncture resistance and chemical protection while remaining latex-free to prevent allergic reactions.
                        </p>
                        <p className="text-gray-600 font-poppins text-base md:text-xl">
                            Our professional-grade nitrile gloves provide superior protection and comfort for healthcare professionals. Made from high-quality synthetic rubber, these gloves offer excellent puncture resistance and chemical protection while remaining latex-free to prevent allergic reactions.
                        </p>
                        <p className="text-gray-600 font-poppins text-base md:text-xl">
                            Our professional-grade nitrile gloves provide superior protection and comfort for healthcare professionals. Made from high-quality synthetic rubber, these gloves offer excellent puncture resistance and chemical protection while remaining latex-free to prevent allergic reactions.
                        </p>
                        <p className="text-gray-600 font-poppins text-base md:text-xl">
                            Our professional-grade nitrile gloves provide superior protection and comfort for healthcare professionals. Made from high-quality synthetic rubber, these gloves offer excellent puncture resistance and chemical protection while remaining latex-free to prevent allergic reactions.
                        </p>
                        <p className="text-gray-600 font-poppins text-base md:text-xl">
                            Our professional-grade nitrile gloves provide superior protection and comfort for healthcare professionals. Made from high-quality synthetic rubber, these gloves offer excellent puncture resistance and chemical protection while remaining latex-free to prevent allergic reactions.
                        </p>

                    </div>
                </div>
                <Featured />
            </div>
        </>
    )
}

export default page