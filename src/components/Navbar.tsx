const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex items-center justify-between">

                {/* Logo */}
                <a
                    href="#home"
                    className="text-2xl font-bold text-gray-800 hover:text-green-800 transition-colors"
                >
                    Cyril's <span className="text-green-800">App</span>
                </a>

                {/* Navigation */}
                <ul className="flex items-center gap-6 text-sm md:text-base font-medium">
                    {navItems.map((item, index) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className={`transition-colors duration-300 ${
                                    index === 0
                                        ? "text-green-800"
                                        : "text-gray-600 hover:text-green-800"
                                }`}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;