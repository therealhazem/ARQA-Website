"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Text Section */}
                <div className="space-y-6">
                    <h1 className="text-7xl font-bold text-dark-primary tracking-tight">
                        404
                    </h1>

                    <h2 className="text-2xl font-semibold text-gray-900">
                        Page not found
                    </h2>

                    <hr />
                    <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                        The page you are looking for may have been removed, renamed,
                        or is temporarily unavailable.
                    </p>

                    <Link href="/">
                        <Button className="bg-dark-primary px-8 py-6 text-base hover:bg-myprimary">
                            Go back to homepage
                        </Button>
                    </Link>
                </div>

                {/* Image Section */}
                <div className="hidden md:flex justify-center">
                    <Image
                        src="/Media/404.png"
                        alt="Page not found illustration"
                        width={500}
                        height={500}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
