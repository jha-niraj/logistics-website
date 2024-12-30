import worldMap from "./Images/worldMap.jpg";

const Partners = () => {
    return (
        <section className="flex items-center justify-center py-24 h-screen max-w-7xl mx-auto">
            <img 
                src={worldMap}
                className="border-black shadow-md rounded-2xl h-full w-full hover:shadow-2xl transition-all duration-300"
            />
        </section>
    )
}

export default Partners;