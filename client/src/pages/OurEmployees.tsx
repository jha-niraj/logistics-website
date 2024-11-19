import { motion } from "framer-motion";
import ceoImage from "@/pages/Images/ceoImage.jpg";

interface EmployeeCardProps {
    name: string;
    role: string;
    email: string;
}
const EmployeeCard: React.FC<EmployeeCardProps> = ({ name, role, email }) => {
    return (
        <div className="group perspective w-64 h-80">
            <div className="relative w-full h-full duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden">
                    <img
                        src={ceoImage}
                        alt={name}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
                {/* Back Side */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-lg shadow-lg transform rotate-y-180 backface-hidden p-4 flex flex-col justify-center items-center">
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-sm opacity-80 mb-2">{role}</p>
                    <a
                        href={`mailto:${email}`}
                        className="text-xs underline opacity-90 hover:opacity-100 transition-opacity"
                    >
                        {email}
                    </a>
                </div>
            </div>
        </div>
    );
};

const employees = [
    {
        image: "https://via.placeholder.com/150",
        name: "John Doe",
        role: "Logistics Manager",
        email: "johndoe@example.com",
    },
    {
        image: "https://via.placeholder.com/150",
        name: "Jane Smith",
        role: "Operations Specialist",
        email: "janesmith@example.com",
    },
    {
        image: "https://via.placeholder.com/150",
        name: "Alice Johnson",
        role: "Customer Support",
        email: "alicejohnson@example.com",
    },
];
export default function OurEmployees() {
    return (
        <section>
            <div className="min-h-screen bg-gray-50">
                {/* Header Section */}
                <motion.section
                    className="relative overflow-hidden py-20 px-4 bg-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="container mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Meet Our Exceptional Team
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            We're a diverse group of passionate individuals working together to create
                            innovative solutions. Hover over our cards to learn more about each team
                            member.
                        </p>
                    </div>
                    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(45%_45%_at_50%_50%,#f3e8ff_0,transparent_100%)]" />
                </motion.section>

                {/* Team Members Grid */}
                <section className="p-8 bg-gray-50 min-h-screen">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                        Our Employees
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {
                            employees.map((employee, index) => (
                                <EmployeeCard
                                    key={index}
                                    name={employee.name}
                                    role={employee.role}
                                    email={employee.email}
                                />
                            ))
                        }
                    </div>
                </section>
            </div>
        </section>
    )
}