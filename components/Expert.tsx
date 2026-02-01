import Link from "next/link"
import { Button } from "./ui/button"

const Expert = () => {
    return (
        <div className="w-full bg-gray-50 section-padding flex items-center justify-center">
            <div className="container mx-auto flex flex-col items-center justify-center text-center max-w-3xl">
                <h1 className="section-title">
                    Need Expert Advice?
                </h1>

                <p className="section-subtitle pb-2">
                    Our team of medical supply experts is ready to help you find the perfect products for your facility
                </p>

                <div className="mt-4">
                    <Button
                        asChild
                        className="text-white bg-dark-primary hover:bg-myprimary
                       text-[clamp(1rem,5vw,1.1rem)] py-6 px-10 rounded-xl transition-all"
                    >
                        <Link href="/contact">
                            Contact Our Experts
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Expert
