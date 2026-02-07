
const cards = [
    {
        title: "30+",
        desc: "Combined industry experience",
    },
    {
        title: "50+",
        desc: "Medical & Industrial Products",
    },
    {
        title: "20+",
        desc: "Healthcare Partners",
    },
    {
        title: "24/7",
        desc: "Customer Support",
    }
]


const Numbers = () => {
    return (
        <div className="w-full bg-linear-to-t from-dark-primary to-myprimary/85 section-padding">

            <div className="container mx-auto">
                <div className="text-white flex flex-row flex-wrap justify-between items-start text-center gap-6 md:gap-8">
                    {cards.map((item) => (
                        <div key={item.title} className="flex-1 min-w-[120px]">
                            <p className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{item.title}</p>
                            <p className="text-sm md:text-base lg:text-lg leading-snug text-white/80 mt-1">{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}


export default Numbers