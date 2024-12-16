const CustomBrokerage = () => {

    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left side - Image */}
                        <div className="relative h-[400px] md:h-full">
                            <div className="absolute inset-0">
                                <img
                                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Air Freight"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="p-8 md:p-12">
                            <h1 className="text-4xl text-center sm:text-left font-bold text-gray-900 mb-6">
                                Project Cargo Services
                            </h1>
                            <p className="text-gray-700 text-center sm:text-left mb-8 leading-relaxed">
                            Handling Project Cargo is a specialized job which calls for expertise and experience 
                            in this particular field. We have a dedicated team to undertake such services with 
                            utmost responsibility and skill with minute planning to ensure that the consignments 
                            with wide range of items which are large in size, weight and dimensions and are 
                            transported and delivered from the manufacturing/ assembling/ procurement point to 
                            the project site without any damage or loss through the shortest route and in the 
                            fastest possible time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomBrokerage;