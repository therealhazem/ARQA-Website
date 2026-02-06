/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from "react"
import Marquee from "react-fast-marquee"
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
            <h1 className="section-title">Trusted By</h1>

            <p className="section-subtitle">
                Other Great Businesses That Trusted Our Products
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
                            className="mx-5 max-md:mx-2 flex items-center justify-center"
                        >
                            <img
                                src={company.Image_URL}
                                alt={company.Company_Name}
                                className="grayscale saturate-0 max-md:max-h-[20vw] max-md:max-w-[22vw]
                           max-lg:max-w-[13vw] max-lg:max-h-[15vw]
                           max-h-[6vw] max-w-[5vw] transition-all duration-500 object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}

export default MyMarquee
