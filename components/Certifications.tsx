const cards = [
    {
        title: "ISO",
        desc: "13485 Certified",
    },
    {
        title: "FDA",
        desc: "Approved Products",
    },
    {
        title: "CE",
        desc: "Mark Certified",
    },
    {
        title: "GMP",
        desc: "Compliant",
    }
]

const Certifications = () => {
    return (
        <div className="w-full bg-white section-padding">
            <div className="container mx-auto flex flex-col items-center text-center">

                <h1 className="section-title">
                    Quality & Certifications
                </h1>

                <p className="section-subtitle max-w-3xl">
                    All ARQA products meet or exceed international quality standards.
                    We work exclusively with ISO-certified manufacturers and ensure every product complies
                    with relevant healthcare regulations including FDA, CE Mark, and local Egyptian healthcare standards.
                </p>

                <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 
                items-stretch auto-rows-fr w-full gap-4 mt-10">

                    {cards.map((item) => (
                        <div
                            key={item.title}
                            className="h-full flex flex-col items-center justify-center 
                            border-2 rounded-2xl shadow-myprimary hover:shadow-lg/20 
                            transition-all duration-200 bg-white gap-2 p-6 md:p-8"
                        >
                            <h3 className="font-poppins font-semibold text-dark-primary text-xl md:text-2xl">
                                {item.title}
                            </h3>
                            <p className="card-body text-gray-700">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Certifications