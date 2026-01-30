import Certifications from "@/components/Certifications"
import MandV from "@/components/MandV"
import Numbers from "@/components/Numbers"
import Testimonials from "@/components/Testimonials"

const page = () => {
    return (
        <>
            {/* Hero section */}
            <div className="w-full text-white font-poppins bg-linear-to-r from-dark-primary to-myprimary/65
            flex items-center justify-center p-4">
                <div className="container py-7">
                    <h1 className="font-semibold pb-3 text-3xl/snug xl:text-5xl/snug">About ARQA Medical</h1>
                    <h2 className="text-white/90 xl:text-xl">Over three decades of trusted partnership with healthcare professionals worldwide</h2>
                </div>
            </div>
            {/* Our Story Section */}
            <div className="container mx-auto flex flex-col items-center justify-center my-12 px-4">
                <h1 className="font-poppins font-bold text-2xl/snug md:text-4xl">
                    Our Story
                </h1>
                <br />
                <h2 className="text-gray-500 font-poppins text-base lg:text-xl lg:w-[65%] text-pretty text-center leading-[150%]">
                    <p>Founded over 30 years ago, ARQA Medical Import & Export has grown from a small local distributor to become a trusted name in medical supplies across the region and beyond. Our journey began with a simple mission: to provide healthcare professionals with reliable, high-quality medical products they can depend on.</p>
                    <br />
                    <p>Through decades of experience, we&apos;ve built strong relationships with leading manufacturers and healthcare institutions worldwide. This network allows us to source the finest medical supplies while maintaining competitive pricing and consistent availability.</p>
                    <br />
                    <p>Today, ARQA Medical serves thousands of healthcare facilities, from small clinics to major hospitals, providing everything from basic examination supplies to specialized medical equipment. Our commitment to quality, reliability, and service has made us the preferred choice for healthcare professionals who demand excellence.</p>
                </h2>
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