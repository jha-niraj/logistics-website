const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-black py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="text-gray-400 text-sm">
                    Copyright ©{currentYear} All rights reserved | Site Designed and Developed by{' '}
                    <a
                        href="https://dstrichinnovations.com"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        Dstrich Innovations
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;