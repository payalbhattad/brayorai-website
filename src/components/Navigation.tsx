import { useState } from "react";
import { FileText, Menu, X } from "lucide-react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Features", "How It Works", "Services", "Pricing", "Contact"];

  const scrollToSection = (item: string) => {
    const sectionId = item.toLowerCase().replace(" ", "-");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F29224] to-[#F29224] flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl text-gray-900">BrayorAI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-600 hover:text-gray-900 transition-colors">
              Login
            </button>
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#1A2F40] to-[#1A2F40] text-white hover:scale-105 transition-transform shadow-lg">
              Get Started Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-100">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item}
              </button>
            ))}
            <div className="px-4 pt-4 space-y-3 border-t border-gray-100">
              <button className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors">
                Login
              </button>
              <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#1A2F40] to-[#1A2F40] text-white">
                Get Started Free
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}