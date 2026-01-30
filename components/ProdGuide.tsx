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
            <div className="w-full font-poppins bg-gray-50 flex items-center justify-center p-4 mb-8 my-6">
                <div className="container mx-auto w-[85%] py-7 flex flex-col items-center justify-center text-center">
                    <h1 className="font-semibold pb-2 text-3xl/snug xl:text-5xl/snug">Product Guides</h1>
                    <h2 className="text-gray-500 xl:text-xl">Expert insights and detailed information about our medical supply categories</h2>
                </div>
            </div>

            <div className="container mx-auto flex flex-col items-center gap-5">
                {/* Products Guide Cards */}
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 px-4 items-stretch">
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