"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import secondLogo from "./mainlogo.png";
import { RainbowButton } from "./ui/rainbow-button";
import ShimmerButton from "./ui/shimmer-button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLocation } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import ShinyButton from "./ui/shiny-button";
import { useUser } from "@/Context/UserContext";
import { Avatar, AvatarFallback } from "./ui/avatar";
import toast, { Toaster } from "react-hot-toast";

const services = [
    {
        title: "Freight Forwarding",
        path: "/services/freight-forwarding"
    },
    {
        title: "NVOCC",
        path: "/services/nvocc"
    },
    {
        title: "Custom Brokerage",
        path: "/services/custom-brokerage"
    },
    {
        title: "Break Bulk & Project Cargo",
        path: "/services/break-bulk-project-cargo"
    },
    {
        title: "Bill of Landing T&C",
        path: "/services/bill-of-landing"
    },
    {
        title: "Market Entry",
        path: "/services/market-entry"
    }
];
const tools = [
    {
        title: "Commercial",
        path: "https://dilas.ca/commercial-shipments/"
    },
    {
        title: "Personal",
        path: "https://dilas.ca/personal-agreement/"
    },
    {
        title: "Fees Calculator",
        path: "https://dilas.ca/brokerage-fees-calculator/"
    }

]
const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/aboutus" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contactus" },
    { name: "Our Employees", href: "/ouremployees" }
]

export default function Navbar() {
    const location = useLocation();
    const pathname = location.pathname;
    const [isScrolled, setIsScrolled] = useState(false);
    const [activePath, setActivePath] = useState(pathname);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isToolsOpen, setIsToolsOpen] = useState(false);
    const servicesRef = useRef<HTMLDivElement>(null);
    const toolsRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const { user, logout } = useUser();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
                setIsServicesOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
                setIsToolsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleNavigation = (href: string) => {
        setActivePath(href)
        navigate(href)
    }
    const handleLogOut = () => {
        logout();
        setTimeout(() => {
            navigate("/");
        }, 1000);
        toast.success("Logged out successfully");
    }

    return (
        <section>
            <Toaster />
            <header
                className={`fixed w-full top-0 left-0 right-0 z-50 bg-white border-b transition-shadow duration-300 ${isScrolled ? "shadow-md" : ""
                    }`}
            >
                <nav className="flex w-full justify-between px-2">
                    <div className="flex w-full items-center justify-between h-20">
                        <Link
                            to="/"
                            className="flex items-center space-x-2"
                            onClick={(e) => {
                                e.preventDefault()
                                handleNavigation("/")
                            }}
                        >
                            <img
                                src={secondLogo}
                                alt="Main Logo"
                                className="w-56 h-48"
                            />
                        </Link>
                        <div className="hidden lg:flex space-x-1 items-center rounded-full px-2 py-1">
                            {
                                navItems.map((item) => (
                                    <Button
                                        key={item.name}
                                        variant="ghost"
                                        className={`text-sm font-medium transition-colors hover:text-primary rounded-full`}
                                        onClick={() => handleNavigation(item.href)}
                                    >
                                        {item.name}
                                    </Button>
                                ))
                            }
                            {/* Tools Dropdown */}
                            <div
                                ref={toolsRef}
                                className="relative"
                                onMouseEnter={() => setIsToolsOpen(true)}
                                onMouseLeave={() => setIsToolsOpen(false)}
                            >
                                <Button
                                    variant="ghost"
                                    className={`text-sm font-medium transition-colors hover:text-primary rounded-full 
                                        ${isToolsOpen ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-muted"}`}
                                >
                                    Tools
                                </Button>
                                {
                                    isToolsOpen && (
                                        <div
                                            className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white rounded-md shadow-lg py-1"
                                            onMouseLeave={() => setIsToolsOpen(false)}
                                        >
                                            {
                                                tools.map((tool, index) => (
                                                    <div key={tool.path}>
                                                        {index > 0 && <div className="h-px bg-gray-200 mx-2" />}
                                                        <Link
                                                            to={tool.path}
                                                            target="_blank"
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                                                        >
                                                            {tool.title}
                                                        </Link>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                            {/* Services Dropdown */}
                            <div
                                ref={servicesRef}
                                className="relative"
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                            >
                                <Button
                                    variant="ghost"
                                    className={`text-sm font-medium transition-colors hover:text-primary rounded-full 
                                        ${isServicesOpen ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-muted"}`}
                                >
                                    Services
                                </Button>
                                {
                                    isServicesOpen && (
                                        <div
                                            className="absolute top-full left-2/3 -translate-x-1/2 w-56 bg-white rounded-md shadow-lg py-1"
                                            onMouseLeave={() => setIsServicesOpen(false)}
                                        >
                                            {
                                                services.map((service, index) => (
                                                    <div key={service.path}>
                                                        {index > 0 && <div className="h-px bg-gray-200 mx-2" />}
                                                        <Link
                                                            to={service.path}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                                                        >
                                                            {service.title}
                                                        </Link>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                            <div>
                                {
                                    user?.token ? 
                                            <Link to="/kycverification">KYC</Link>
                                        :
                                            ""
                                }
                            </div>
                        </div>
                        <div className="flex gap-2 items-center justify-end">
                            <Link
                                to="/clientbriefform"
                                className="hidden md:flex"
                            >
                                <RainbowButton className="w-56">Rate Request Form</RainbowButton>
                            </Link>
                            {
                                user?.token ?
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="focus:outline-none">
                                            <Avatar>
                                                {/* <AvatarImage src={session?.user?.image!} alt="@shadcn" /> */}
                                                <AvatarFallback><User size={24} /></AvatarFallback>
                                            </Avatar>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="w-36">
                                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <Link to="/profile">
                                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                            </Link>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem onClick={handleLogOut} className="text-red-500 flex gap-2">Log Out <span className="text-black underline">{user?.name}</span></DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                    :
                                    <Link to="/signin" className="w-full mx-auto">
                                        <ShinyButton>Sign In</ShinyButton>
                                    </Link>
                            }
                        </div>
                    </div>

                    {/* For mobile navigation */}
                    <div className="lg:hidden flex items-center">
                        <Button onClick={() => setIsSheetOpen(true)} variant="outline" size="icon" className="rounded-full">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                        <Sheet open={isSheetOpen} onOpenChange={() => setIsSheetOpen(false)}>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <div className="grid gap-4 py-4 w-full">
                                    {navItems.map((item) => (
                                        <Button
                                            key={item.name}
                                            variant="ghost"
                                            className={`justify-start ${activePath === item.href ? "text-primary" : "text-muted-foreground"
                                                }`}
                                            onClick={() => {
                                                handleNavigation(item.href)
                                                setIsSheetOpen(false)
                                            }}
                                        >
                                            {item.name}
                                        </Button>
                                    ))}
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="services">
                                            <AccordionTrigger className="text-left px-4">
                                                Services
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="space-y-2 ml-4">
                                                    {services.map((service) => (
                                                        <div
                                                            key={service.path}
                                                            onClick={() => {
                                                                handleNavigation(service.path)
                                                                setIsSheetOpen(false)
                                                            }}
                                                            className="block py-2 cursor-pointer text-sm text-muted-foreground hover:text-primary transition-colors"
                                                        >
                                                            {service.title}
                                                        </div>
                                                    ))}
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="tools">
                                            <AccordionTrigger className="text-left px-4">
                                                Tools
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="space-y-2 ml-4">
                                                    {
                                                        tools.map((tool) => (
                                                            <div
                                                                key={tool.path}
                                                                onClick={() => {
                                                                    handleNavigation(tool.path)
                                                                    setIsSheetOpen(false)
                                                                }}
                                                                className="block cursor-pointer py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                                            >
                                                                {tool.title}
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                    <div className="flex w-full flex-col gap-2">
                                        <Link
                                            to="/clientbriefform"
                                            className="w-full flex md:hidden items-center justify-center"
                                        >
                                            <RainbowButton>Rate Request Form</RainbowButton>
                                        </Link>
                                        <Link to="/signin">
                                            <ShimmerButton
                                                className="w-full"
                                            >
                                                Login
                                            </ShimmerButton>
                                        </Link>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </header>
        </section>
    )
}