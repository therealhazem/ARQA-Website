import ProductsGuide from "./ProductsGuide"
import { Button } from "./ui/button"

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

const ProdGuide = () => {
    return (
        <>
            {/* Header of Products Guide */}
            <div className="w-full bg-gray-50 section-padding flex items-center justify-center">
                <div className="container mx-auto flex flex-col items-center justify-center text-center max-w-3xl">
                    <h1 className="section-title">Product Guides</h1>
                    <p className="section-subtitle">Expert insights and detailed information about our medical supply categories</p>
                </div>
            </div>

            <div className="container mx-auto flex flex-col items-center gap-5 section-padding pt-0">
                {/* Products Guide Cards */}
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
                    {Guide.map((_, index) => (
                        <ProductsGuide key={index} namee={_.name} propp={_.prop} typee={_.type} desc={_.desc} icon={_.icon} />
                    ))}
                </div>

                <Button className=" bg-dark-primary hover:bg-myprimary hover:shadow-lg cursor-pointer lg:text-lg py-6 px-8 mt-4">Check Knowledge Hub</Button>
            </div>
        </>

    )
}

export default ProdGuide