import Certifications from "@/components/Certifications"
import MandV from "@/components/MandV"
import Numbers from "@/components/Numbers"
import Testimonials from "@/components/Testimonials"

const page = () => {
    return (
        <>
            {/* Hero section */}
            <div className="w-full text-white bg-linear-to-r from-dark-primary to-myprimary/65 section-padding flex items-center justify-center">
                <div className="container mx-auto text-center max-w-3xl">
                    <h1 className="section-title text-white">About ARQA Medical</h1>
                    <p className="header-subtitle mt-2">Over three decades of trusted partnership with healthcare professionals worldwide</p>
                </div>
            </div>
            {/* Our Story Section */}
            <div className="container mx-auto flex flex-col items-center justify-center section-padding">
                <h1 className="section-title">
                    Our Story
                </h1>
                <div className="section-subtitle max-w-3xl text-pretty leading-relaxed mt-4">
                    <p>Founded over 30 years ago, ARQA Medical Import & Export has grown from a small local distributor to become a trusted name in medical supplies across the region and beyond. Our journey began with a simple mission: to provide healthcare professionals with reliable, high-quality medical products they can depend on.</p>
                    <br />
                    <p>Through decades of experience, we&apos;ve built strong relationships with leading manufacturers and healthcare institutions worldwide. This network allows us to source the finest medical supplies while maintaining competitive pricing and consistent availability.</p>
                    <br />
                    <p>Today, ARQA Medical serves thousands of healthcare facilities, from small clinics to major hospitals, providing everything from basic examination supplies to specialized medical equipment. Our commitment to quality, reliability, and service has made us the preferred choice for healthcare professionals who demand excellence.</p>
                </div>
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