import Expert from "@/components/Expert"
import Featured from "@/components/Featured"
import KnowledgeCards from "@/components/KnowledgeCards"
import ProductsGuide from "@/components/ProductsGuide"
import Image from "next/image"

const products = [
    {
        name: "Nitrile vs. Latex Gloves: Which is Right for Your Facility?", src: "/Products/Black.png", type: "Product Guide",
        prop: ["Understanding the key differences between nitrile and latex gloves can help you make the best choice for your healthcare facility's needs."]
    },
    {
        name: "The Importance of Quality Medical Gloves in Infection Control", src: "/Products/mask.png", type: "Safety",
        prop: ["Learn how choosing the right medical gloves plays a crucial role in maintaining proper infection control protocols."]
    },
    {
        name: "Understanding Medical Face Mask Standards and Certifications", src: "/Products/thermo.png", type: "Standards",
        prop: ["A comprehensive guide to international face mask standards and what certifications mean for your facility."]
    },
    {
        name: "Proper Glove Selection for Different Medical Procedures", src: "/Products/blue.png", type: "Best Practices",
        prop: ["Discover which types of gloves are best suited for various medical procedures and examinations."]
    },
    {
        name: "The Evolution of Medical Protective Equipment", src: "/Products/latex.png", type: "Industry Insights",
        prop: ["Explore how medical protective equipment has evolved over the years to meet modern healthcare challenges."]
    },
    {
        name: "Cost-Effective Medical Supply Management for Clinics", src: "/Products/Syntex.png", type: "Management",
        prop: ["Tips and strategies for managing medical supply inventory efficiently while maintaining quality standards."]
    },

]



const Guide = [
    {
        name: "Glove Selection Guide", src: "/Products/Black.png", type: "Gloves",
        desc: "Learn how to choose the right gloves for different medical procedures. Understand the differences between nitrile, latex, and vinyl gloves.",
        prop: ["Material comparison", "Allergy considerations", "Puncture resistance", "Chemical compatibility"],
        icon: "ShieldCheck"
    },
    {
        name: "Face Mask Standards", src: "/Products/mask.png", type: "Masks",
        desc: "Comprehensive guide to understanding medical face mask ratings, filtration efficiency, and proper usage protocols.",
        prop: ["ASTM ratings explained", "BFE vs PFE", "Proper wearing technique", "Storage guidelines"],
        icon: "Microscope"
    },
    {
        name: "Thermometer Types", src: "/Products/thermo.png", type: "Thermometers",
        desc: "Discover the different types of medical thermometers and their best use cases in clinical settings.",
        prop: ["Contact vs non-contact", "Accuracy comparison", "Cleaning protocols", "Calibration tips"],
        icon: "BookOpen"
    },
    {
        name: "Casting Materials", src: "/Products/blue.png", type: "Casting Tapes",
        desc: "Expert guidance on selecting and applying casting materials for various orthopedic conditions.",
        prop: ["Fiberglass vs plaster", "Application techniques", "Setting times", "Patient care instructions"],
        icon: "BookMarked"
    }

]

const Page = () => {
    return (
        <>

            {/* Hero section */}
            <div className="relative w-full h-[50vw] md:h-[20vw] overflow-hidden">
                <Image
                    src="/Media/im2.jpg"
                    className="absolute inset-0 h-full w-full object-cover"
                    width={10000}
                    height={10000}
                    alt="hero cover"
                />
                <div className="absolute inset-0 bg-dark-primary mix-blend-multiply"></div>
                <div className="absolute z-10 flex flex-col items-center justify-center p-5 md:p-14 h-full w-full gap-3">
                    <h1 className="section-title text-white">Knowledge Hub</h1>
                    <p className="header-subtitle text-white/90">Expert insights and guides to help you make informed decisions about medical supplies</p>
                </div>
            </div>


            {/* Knowledge Cards */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-5 pt-10 md:pt-12 pb-16 md:pb-20 items-stretch">
                {products.map((_, index) => (
                    <KnowledgeCards key={index} srcc={_.src} namee={_.name} propp={_.prop} typee={_.type} />
                ))}
            </div>


            {/* Header of Products Guide */}
            <div className="w-full bg-gray-50 section-padding flex items-center justify-center">
                <div className="container mx-auto flex flex-col items-center justify-center text-center max-w-3xl">
                    <h1 className="section-title">Product Guides</h1>
                    <p className="section-subtitle">Expert insights and detailed information about our medical supply categories</p>
                </div>
            </div>

            {/* Products Guide Cards */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-4 sm:px-5 pt-10 md:pt-12 pb-16 md:pb-20 items-stretch">
                {Guide.map((_, index) => (
                    <ProductsGuide key={index} namee={_.name} propp={_.prop} typee={_.type} desc={_.desc} icon={_.icon} />
                ))}
            </div>

            {/* Contact Us */}
            <Expert />
            <Featured />

        </>
    )
}

export default Page