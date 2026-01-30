import Link from "next/link"
import { Button } from "./ui/button"

const Expert = () => {
    return (
        <div className="w-full font-poppins bg-gray-50 flex items-center justify-center p-4 mb-8 my-6">
            <div className="container mx-auto w-[85%] py-7 flex flex-col items-center justify-center text-center">
                <h1 className="font-semibold pb-2 text-3xl/snug xl:text-5xl/snug">
                    Need Expert Advice?
                </h1>

                <h2 className="text-gray-500 xl:text-xl pb-2">
                    Our team of medical supply experts is ready to help you find the perfect products for your facility
                </h2>

                <div className="mt-2">
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
