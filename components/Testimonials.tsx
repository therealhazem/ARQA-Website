/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Avatar } from '@radix-ui/react-avatar'
import { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { AvatarBadge, AvatarFallback, AvatarImage } from './ui/avatar'
import { getTestimonials } from '@/sanity/lib/getTestimonials'

const Testimonials = () => {
    const [cards, setCards] = useState<any[]>([])

    useEffect(() => {
        getTestimonials().then(setCards)
    }, [])

    const [gradWidth, setGradWidth] = useState(330)
    useEffect(() => {
        const updateWidth = () => setGradWidth(window.innerWidth > 768 ? 330 : 150)
        updateWidth()
        window.addEventListener("resize", updateWidth)
        return () => window.removeEventListener("resize", updateWidth)
    }, [])

    if (!cards.length) return null

    return (
        <div className="container mx-auto flex flex-col items-center text-center section-padding">
            <h1 className="section-title">Testimonials</h1>
            <p className="section-subtitle">What our customers say about our products</p>

            <Marquee
                gradientWidth={gradWidth}
                speed={10}
                pauseOnHover
                gradient
                autoFill
                className='mt-5'
            >
                {(cards ?? []).map((item) => (
                    <div
                        key={item._id}
                        className="flex flex-col items-center justify-center border-2 rounded-2xl shadow-myprimary hover:shadow-lg/20 transition-all duration-200
                        px-3 py-5 h-full bg-white gap-2 mx-2"
                    >
                        <Avatar>
                            <AvatarImage
                                className="rounded-full w-24 h-24"
                                src={item.img || "/fallback.png"}
                                alt={item.name || "Avatar"}
                            />
                            <AvatarFallback>{item.name}</AvatarFallback>
                            <AvatarBadge />
                        </Avatar>
                        <h3 className="card-title">{item.name}</h3>
                        <p className="card-body text-center">{item.said}</p>
                    </div>
                ))}
            </Marquee>
        </div>
    )
}

export default Testimonials
