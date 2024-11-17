import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ShimmerButton from './ui/shimmer-button';
import footerImage from "../pages/Images/footerImage.jpg";

const Layout: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <main style={{ flex: 1, padding: '2rem' }}>
                <Outlet />
                <section
                    className="flex mt-10 flex-col sm:flex-row rounded-lg gap-10 items-center justify-around w-full bg-cover bg-center p-8"
                    style={{ backgroundImage: `url(${footerImage})` }}
                >
                    <div className="p-6 rounded-lg backdrop-blur-sm">
                        <h1 className="text-2xl text-white font-medium text-center">
                            We Provide International Air Cargo Services
                        </h1>
                        <p className="text-center text-white mt-2">
                            We provide timely pick up of shipments from the doorstep of customers
                        </p>
                    </div>
                    <div>
                        <ShimmerButton className="px-6 py-3">
                            Call us Now
                        </ShimmerButton>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;