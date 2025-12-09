/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'


const logos = [
    { name: "wahmy", src: "/Marquee/wahmy.png" },
    { name: "Blabn", src: "/Marquee/Blabn.png" },
    { name: "Bheg", src: "/Marquee/bheg.jpg" },
    { name: "KFC", src: "/Marquee/KFC.png" },
    { name: "Mcdonalds", src: "/Marquee/Mcdonalds.png" },
    { name: "shaltat", src: "/Marquee/shaltat.jpg" },

]



const MyMarquee = () => {

    const [gradwidth, setgradwidth] = useState(330);
    useEffect(() => {
        const updatewidth = () => {
            setgradwidth(window.innerWidth > 768 ? 330 : 150)
        }
        updatewidth();
        window.addEventListener("resize", updatewidth);
        return () => window.removeEventListener("resize", updatewidth);
    }, [])


    return (
        <div className='container mx-auto flex flex-col items-center text-center px-5 pt-16'>
            <h1 className="font-poppins font-bold text-xl md:text-4xl">
                Trusted By
            </h1>

            <h2 className="text-gray-400 font-poppins text-base md:text-xl">
                Other Great Businesses That Trusted Our Products
            </h2>


            <div className="container mx-auto mt-8">
                <Marquee
                    gradientWidth={gradwidth}
                    autoFill={true}
                    speed={10}
                    pauseOnHover={true}
                    gradient={true}
                >
                    {logos.map((img, index) => (
                        <div key={index} className="mx-5 max-md:mx-2 flex items-center justify-center">
                            <img
                                className="grayscale-100 saturate-0 max-md:max-h-[20vw] max-md:max-w-[22vw] max-h-[6vw] max-w-[5vw] transition-all duration-500 object-contain"
                                alt={img.name}
                                src={img.src}
                            />
                        </div>
                    ))}
                </Marquee>
            </div>

        </div>
    )
}

export default MyMarquee