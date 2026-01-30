import Expert from "@/components/Expert"
import Featured from "@/components/Featured"
import KnowledgeCards from "@/components/KnowledgeCards"
import ProductsGuide from "@/components/ProductsGuide"

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
            {/* Header of Knowledge Hub */}
            <div className="w-full text-white font-poppins bg-linear-to-t from-dark-primary to-myprimary
                    flex items-center justify-center p-4 mb-8">
                <div className="container mx-auto w-[85%] py-7 flex flex-col items-center justify-center text-center">
                    <h1 className="font-semibold pb-2 text-3xl/snug xl:text-5xl/snug">Knowledge Hub</h1>
                    <h2 className="text-white/90 xl:text-xl">Expert insights and guides to help you make informed decisions about medical supplies</h2>
                </div>
            </div>

            {/* Knowledge Cards */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 items-stretch">
                {products.map((_, index) => (
                    <KnowledgeCards key={index} srcc={_.src} namee={_.name} propp={_.prop} typee={_.type} />
                ))}
            </div>


            {/* Header of Products Guide */}
            <div className="w-full font-poppins bg-gray-50 flex items-center justify-center p-4 mb-8 my-6">
                <div className="container mx-auto w-[85%] py-7 flex flex-col items-center justify-center text-center">
                    <h1 className="font-semibold pb-2 text-3xl/snug xl:text-5xl/snug">Product Guides</h1>
                    <h2 className="text-gray-500 xl:text-xl">Expert insights and detailed information about our medical supply categories</h2>
                </div>
            </div>

            {/* Products Guide Cards */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-4 items-stretch">
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