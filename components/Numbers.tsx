
const cards = [
    {
        title: "30+",
        desc: "Years of Excellence",
    },
    {
        title: "1000+",
        desc: "Healthcare Partners",
    },
    {
        title: "100+",
        desc: "Product Lines",
    },
    {
        title: "24/7",
        desc: "Customer Support",
    }
]


const Numbers = () => {
    return (
        <div className="w-full bg-linear-to-t from-dark-primary to-myprimary/85">

            <div className='container mx-auto px-4 py-16'>
                <div className="text-white flex flex-row justify-between items-start text-center gap-[4%]">
                    {cards.map((item) => (
                        <div key={item.title}>
                            <h1 className="font-bold text-[7.5vw] lg:text-[3vw]">{item.title}</h1>
                            <h2 className="lg:text-[1vw] leading-5 text-white/80">{item.desc}</h2>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Numbers