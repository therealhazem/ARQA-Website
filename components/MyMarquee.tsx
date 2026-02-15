/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from "react"
import Marquee from "react-fast-marquee"
import Image from "next/image"
import { getCompanies } from "@/sanity/lib/getCompanies"

const MyMarquee = () => {
    const [logos, setLogos] = useState<any[]>([])
    const [gradWidth, setGradWidth] = useState(330)

    // company images data
    useEffect(() => {
        getCompanies().then(setLogos)
    }, [])

    // responsive width
    useEffect(() => {
        const updateWidth = () => {
            setGradWidth(window.innerWidth > 768 ? 330 : 150)
        }

        updateWidth()
        window.addEventListener("resize", updateWidth)
        return () => window.removeEventListener("resize", updateWidth)
    }, [])

    return (
        <div className="container mx-auto flex flex-col items-center text-center section-padding">
            <h2 className="section-title">Trusted by Leading Organizations</h2>

            <p className="section-subtitle">
                ARQA products are used by a wide range of businesses and institutions that value consistency, safety, and dependable supply.
            </p>

            <div className="container mx-auto mt-10">
                <Marquee
                    gradientWidth={gradWidth}
                    autoFill
                    speed={10}
                    pauseOnHover
                    gradient
                >
                    {logos.map((company) => (
                        <div
                            key={company._id}
                            className="mx-5 max-md:mx-2 flex items-center justify-center relative max-md:max-h-[20vw] max-md:max-w-[22vw] max-lg:max-w-[13vw] max-lg:max-h-[15vw] max-h-[6vw] max-w-[5vw] w-[5vw] h-[6vw] max-md:w-[22vw] max-md:h-[20vw] max-lg:w-[13vw] max-lg:h-[15vw] min-w-[58px] min-h-[68px]"
                        >
                            <Image
                                src={company.Image_URL}
                                alt={company.Company_Name}
                                fill
                                sizes="(max-width: 768px) 22vw, (max-width: 1024px) 13vw, 5vw"
                                className="grayscale saturate-0 transition-all duration-500 object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default MyMarquee
