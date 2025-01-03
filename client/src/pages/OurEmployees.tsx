import { motion } from "framer-motion";
import ceoImage from "@/pages/Images/ceoImage.jpg";
import employee2 from "@/assets/employer3.jpeg";
import employee4 from "@/assets/employer4.jpeg";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

type ProductCardProps = {
    name: string;
    role: string;
    image: string;
    email: string;
};

const EmployeeCard: React.FC<ProductCardProps> = ({
    name,
    role,
    image,
    email,
}) => {
    return (
        <div className="relative w-80 p-1 rounded-xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
            {/* Inner Card */}
            <div className="bg-black rounded-lg p-6 text-white">
                {/* Image */}
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 scale-105 rounded-full object-contain mb-4"
                />
                <h2 className="text-xl font-semibold text-center">{name}</h2>
                <p className="text-sm text-gray-300 text-center my-4">{role}</p>
                <Link to={`mailto:${email}`} className="flex justify-center items-center gap-1 mt-4 w-full hover:text-sky-500 hover:scale-105 transition-all duration-300">
                    <Mail size={24} className="mr-2" />
                    <span className="text-lg text-center font-semibold">{email}</span>
                </Link>
            </div>
        </div>
    );
};

const employees = [
    {
        image: ceoImage,
        name: "Karla Regina Baeza",
        role: "Managing Director",
        email: "krbaeza@ushwt.com",
    },
    {
        image: employee4,
        name: "Abraham Munoz",
        role: "Project Manager",
        email: "amunoz@ushwt.com",
    },
    {
        image: employee2,
        name: "Kratik Singh",
        role: "IT ASSISTANT EXMIN DEPATMENT",
        email: "ksingh@ushwt.com"
    },
    {
        image: "https://tse4.mm.bing.net/th?id=OIP.-BS8Y2nH1k93GJiitUVBCAHaHa&pid=Api&P=0",
        name: "Ami Mehta",
        role: "Export Import Agent",
        email: "imports@ushwt.com"
    },
    {
        image: "https://tse4.mm.bing.net/th?id=OIP.-BS8Y2nH1k93GJiitUVBCAHaHa&pid=Api&P=0",
        name: "Susana Rico",
        role: "Accounting",
        email: "accounting@ushwt.com"
    },
    {
        image: "https://tse4.mm.bing.net/th?id=OIP.-BS8Y2nH1k93GJiitUVBCAHaHa&pid=Api&P=0",
        name: "Anita Delgado",
        role: "Human Resources",
        email: "hr@accounting.com"
    },
];
export default function OurEmployees() {
    return (
        <section>
            <div className="min-h-screen bg-gray-50 py-6">
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
                        <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
                            We're a diverse and passionate team working together to deliver innovative solutions. 
                            Hover over our cards to learn more about each of our team members and the unique contributions they bring to the table.
                        </p>
                    </div>
                    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(45%_45%_at_50%_50%,#f3e8ff_0,transparent_100%)]" />
                </motion.section>

                {/* Team Members Grid */}
                <section className=" bg-gray-50 min-h-screen">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                        Our Team
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                        {
                            employees.map((employee, index) => (
                                <EmployeeCard
                                    key={index}
                                    name={employee.name}
                                    image={employee.image}
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
