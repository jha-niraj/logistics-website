import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown, User } from 'lucide-react';
import mainLogo from "./logo.jpg";

const Navbar = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);

    // Custom hover handlers for services dropdown
    const handleServicesMouseEnter = () => {
        setIsServicesOpen(true);
    };

    const handleServicesMouseLeave = () => {
        setIsServicesOpen(false);
    };

    // Custom hover handlers for account dropdown
    const handleAccountMouseEnter = () => {
        setIsAccountOpen(true);
    };

    const handleAccountMouseLeave = () => {
        setIsAccountOpen(false);
    };

    return (
        <div className="w-full">
            {/* Top bar */}
            <div className="w-full bg-blue-900 text-white text-sm py-2">
                <div className="container mx-auto px-4 flex justify-end items-center">
                    <span className="mr-2">Phone no:</span>
                    <a href="tel:+1-346-202-1829" className="mr-4 hover:text-blue-200">+1-346-202-1829</a>
                    <span className="mr-2">or email us:</span>
                    <a href="mailto:contact@ushwt.com" className="hover:text-blue-200">contact@ushwt.com</a>
                </div>
            </div>

            {/* Main navbar */}
            <div className="sticky top-0 w-full bg-white shadow-md z-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-around h-20">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img 
                                src={mainLogo}
                                alt="Main Logo"
                                className=""
                            />
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className="text-gray-700 hover:text-blue-900">
                                Home
                            </Link>

                            <Link to="/about" className="text-gray-700 hover:text-blue-900">
                                About
                            </Link>

                            <div
                                onMouseEnter={handleServicesMouseEnter}
                                onMouseLeave={handleServicesMouseLeave}
                                className="relative inline-block"
                            >
                                <Button variant="ghost" className="flex items-center space-x-1 px-4">
                                    <span>Services</span>
                                    <ChevronDown className="h-4 w-4" />
                                </Button>
                                {
                                    isServicesOpen && (
                                        <div className="absolute top-full left-0 w-56 bg-white rounded-md shadow-lg py-2 mt-2">
                                            <div className="h-px bg-gray-200 my-1" />
                                            <Link
                                                to="/services/freight-forwarding"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                                            >
                                                Freight Forwarding
                                            </Link>
                                            <Link
                                                to="/services/nvocc"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                                            >
                                                NVOCC
                                            </Link>
                                            <Link
                                                to="/services/custom-brokerage"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                                            >
                                                Custom Brokerage
                                            </Link>
                                            <Link
                                                to="/services/break-bulk-project-cargo"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                                            >
                                                Break Bulk & Project Cargo
                                            </Link>
                                            <Link
                                                to="/services/bill-of-landing"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                                            >
                                                Bill of Landing T&C
                                            </Link>
                                            <Link
                                                to="/services/market-entry"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                                            >
                                                Market Entry
                                            </Link>
                                        </div>
                                    )
                                }
                            </div>
                            <Link to="/tools" className="text-gray-700 hover:text-blue-900">
                                Tools
                            </Link>
                            <Link to="/partners" className="text-gray-700 hover:text-blue-900">
                                Partners
                            </Link>
                            <Link to="/contact" className="text-gray-700 hover:text-blue-900">
                                Contact
                            </Link>
                        </div>

                        {/* Login Button with Dropdown */}
                        <div
                            className="hidden md:block relative"
                            onMouseEnter={handleAccountMouseEnter}
                            onMouseLeave={handleAccountMouseLeave}
                        >
                            <Button variant="outline" className="flex items-center space-x-2">
                                <User className="h-4 w-4" />
                                <span>Account</span>
                            </Button>
                            {
                            isAccountOpen && (
                                <div className="absolute top-full right-0 w-56 bg-white rounded-md shadow-lg py-2 mt-2">
                                    <div className="px-4 py-2 font-medium text-sm text-gray-700">My Account</div>
                                    <div className="h-px bg-gray-200 my-1" />
                                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                        Profile
                                    </button>
                                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                        Dashboard
                                    </button>
                                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                        Settings
                                    </button>
                                    <div className="h-px bg-gray-200 my-1" />
                                    <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                                        Log out
                                    </button>
                                </div>
                            )
                            }
                        </div>
                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <Button variant="ghost" size="sm">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

// "use client"

// import * as React from "react"
// import { Menu } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
// import { ModeToggle } from "./mode-toggle";
// import logo from "../assets/images/logo.png";

// const navItems = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/aboutus" },
//     { name: "Events", href: "/events" },
//     { name: "Contact", href: "/contactus" },
// ]

// export default function Navbar() {
//     const [isScrolled, setIsScrolled] = React.useState(false)
//     const [activePath, setActivePath] = React.useState("/")
//     const navigate = useNavigate()

//     React.useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 10)
//         }
//         window.addEventListener("scroll", handleScroll)
//         return () => window.removeEventListener("scroll", handleScroll)
//     }, [])

//     const handleNavigation = (href: string) => {
//         setActivePath(href)
//         navigate(href)
//     }

//     return (
//         <header
//             className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
//                     ? "bg-background/70 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 shadow-lg"
//                     : "bg-transparent"
//                 }`}
//         >
//             <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-20">
//                     <a
//                         href="/"
//                         className="flex items-center space-x-2"
//                         onClick={(e) => {
//                             e.preventDefault()
//                             handleNavigation("/")
//                         }}
//                     >
//                         <img 
//                             src={logo}
//                             alt="Mian Logo"
//                             height={50}
//                             width={50}
//                             className="rounded-full"
//                         />
//                         <span className="font-bold text-2xl bg-clip-text text-black dark:text-white">
//                             BootStrap
//                         </span>
//                     </a>

//                     <div className="hidden md:flex space-x-1 items-center bg-muted/50 backdrop-blur-sm rounded-full px-2 py-1">
//                         {navItems.map((item) => (
//                             <Button
//                                 key={item.name}
//                                 variant="ghost"
//                                 className={`text-sm font-medium transition-colors hover:text-primary rounded-full ${activePath === item.href
//                                         ? "bg-primary/10 text-primary"
//                                         : "text-muted-foreground hover:bg-muted"
//                                     }`}
//                                 onClick={() => handleNavigation(item.href)}
//                             >
//                                 {item.name}
//                             </Button>
//                         ))}
//                         <ModeToggle />
//                     </div>
                    
//                     <Link to="/joinus">
//                         <Button
//                             className="hidden md:inline-flex hover:from-primary-foreground hover:to-primary text-primary-foreground"
//                         >
//                             Join Now
//                         </Button>
//                     </Link>

//                     <div className="md:hidden flex items-center space-x-4">
//                         <ModeToggle />
//                         <Sheet>
//                             <SheetTrigger asChild>
//                                 <Button variant="outline" size="icon" className="rounded-full">
//                                     <Menu className="h-5 w-5" />
//                                     <span className="sr-only">Toggle menu</span>
//                                 </Button>
//                             </SheetTrigger>
//                             <SheetContent>
//                                 <SheetHeader>
//                                     <SheetTitle>Menu</SheetTitle>
//                                 </SheetHeader>
//                                 <div className="grid gap-4 py-4 w-full">
//                                     {navItems.map((item) => (
//                                         <Button
//                                             key={item.name}
//                                             variant="ghost"
//                                             className={`justify-start ${activePath === item.href ? "text-primary" : "text-muted-foreground"
//                                                 }`}
//                                             onClick={() => {
//                                                 handleNavigation(item.href)
//                                             }}
//                                         >
//                                             {item.name}
//                                         </Button>
//                                     ))}
//                                     <Link to="/joinus" className="w-full">
//                                         <Button className="w-full bg-gradient-to-r from-primary to-primary-foreground hover:from-primary-foreground hover:to-primary text-primary-foreground">
//                                             Join Now
//                                         </Button>
//                                     </Link>
//                                 </div>
//                             </SheetContent>
//                         </Sheet>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     )
// }