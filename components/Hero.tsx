"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { fadeInUp } from "@/lib/motion"

const Hero = () => {
    return (
        <div className="relative w-full h-[85vw] md:h-[40vw] overflow-hidden">


            <video
                src="https://res.cloudinary.com/dcpyxsfh2/video/upload/v1770069172/ARQA_HERO_VIDEO_r5gn1l.mp4"
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            />
            <div className="absolute inset-0 bg-myprimary mix-blend-multiply"></div>

            <motion.div
                className="absolute z-10 flex flex-col items-start justify-center p-5 md:p-14 h-full w-full md:w-[60%] gap-3"
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={fadeInUp.transition}
            >
                <h1 className="
                text-white tracking-tight font-semibold font-poppins text-balance
                text-[6.3vw]/[7vw] text-start
                md:text-[3.8vw]/[4.2vw] md:text-start/snug
                ">
                    Premium Medical Supplies for Egypt&apos;s Healthcare Professionals
                </h1>
                <h2 className="
                text-white/90 font-poppins text-pretty
                text-base/snug text-start
                xl:text-[1.2vw]/relaxed md:text-base/snug md:text-start">
                    Delivering certified medical products that meet international standards, backed by decades of experience in importing, logistics, and supply chain management.
                    At ARQA, we collaborate with leading global manufacturers to bring reliable, high quality medical supplies to healthcare professionals across Egypt.
                </h2>
                <div className="flex flex-row gap-4">
                    <Link href={"/products"}>
                        <Button className="bg-creamy/90 text-dark-primary lg:p-5 lg:text-lg transition-all duration-300
                    md:border-3 border-2 border-creamy hover:bg-creamy hover:cursor-pointer font-poppins">
                            Explore Products
                        </Button>
                    </Link>
                    <Link href={"/knowledge"}>
                        <Button className="bg-dark-primary text-creamy lg:p-5 lg:text-lg transition-all duration-300
                    md:border-3 border-2 border-creamy/80 hover:bg-dark-primary/50 hover:cursor-pointer font-poppins">
                            Knowledge Hub
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>

    )
}

export default Hero