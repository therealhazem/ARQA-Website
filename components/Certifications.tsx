/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarBadge } from "./ui/avatar";
import { getCertificates } from "@/sanity/lib/getCertificates";


const Certifications = async () => {
    const cards = await getCertificates();

    return (
        <div className="w-full bg-white section-padding">
            <div className="container mx-auto flex flex-col items-center text-center">

                <h1 className="section-title">
                    Quality & Certifications
                </h1>

                <p className="section-subtitle max-w-3xl">
                    ARQA sources products from manufacturers adhering to international quality standards, including ISO, CE, and FDA, ensuring safety, reliability, and compliance with local Egyptian regulations. We prioritize transparency by working with certified suppliers and showcasing their quality certifications.
                </p>

                <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 
                items-stretch auto-rows-fr w-full gap-4 mt-10">

                    {(cards ?? []).map((item: any) => (
                        <div
                            key={item._id}
                            className="h-full flex flex-col items-center justify-center 
                            border-2 rounded-2xl shadow-myprimary hover:shadow-lg/20 
                            transition-all duration-200 bg-white gap-2 p-6 md:p-8"
                        >
                            <Avatar>
                                <AvatarImage
                                    className="rounded-full w-24 h-24"
                                    src={item.img || "/"}
                                    alt={item.name || "Avatar"}
                                />
                                <AvatarFallback>{item.name}</AvatarFallback>
                                <AvatarBadge />
                            </Avatar>

                            <h3 className="font-poppins font-semibold text-dark-primary text-xl md:text-2xl">
                                {item.name}
                            </h3>
                            <p className="card-body text-gray-700">
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Certifications