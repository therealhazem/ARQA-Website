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
        <div className="w-full bg-white">

            <div className='container mx-auto flex flex-col items-center text-center px-5 pt-14'>
                <h1 className="font-poppins font-bold text-xl md:text-4xl">
                    Quality & Certifications
                </h1>
                <h2 className="text-gray-500 font-poppins mt-4 md:text-xl md:w-[70%]">
                    All ARQA products meet or exceed international quality standards.
                    We work exclusively with ISO-certified manufacturers and ensure every product complies
                    with relevant healthcare regulations including FDA, CE Mark, and local Egyptian healthcare standards.
                </h2>


                <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 items-center justify-between w-full h-full gap-4 mt-8">
                    {cards.map((item) => (
                        <div key={item.title} className="flex flex-col items-center justify-center border-2 rounded-2xl shadow-myprimary hover:shadow-lg/20 transition-all duration-200 bg-white gap-2
                        p-[7%]">
                            <div className="flex flex-row items-center">
                                <h1 className="font-semibold text-dark-primary text-[7vw] md:text-[2.3vw]">{item.title}</h1>
                            </div>
                            <h2 className="text-gray-700 text-base md:text-lg">{item.desc}</h2>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Certifications