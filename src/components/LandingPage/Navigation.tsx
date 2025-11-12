import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png"; // <- add this

export function Navigation() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["How It Works", "Features", "Pricing", "Contact"];

  // also handles multi-word items like "How It Works"
  const scrollToSection = (item: string) => {
    const sectionId = item.toLowerCase().replace(/\s+/g, "-");
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="BrayorAI"
              className="h-14 w-auto object-contain"
            />
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-gray-900">
                Brayor<span className="text-[#F29224]">AI</span>
              </span>
              <span className="text-xs font-medium bg-[#F29224]/10 text-[#F29224] px-2 py-0.5 rounded-full border border-[#F29224]/30">
                Beta
              </span>
            </div>
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
            <button
              onClick={() => navigate('/login')}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="px-6 py-3 rounded-xl bg-[#1A2F40] text-white hover:scale-105 transition-transform shadow-lg"
            >
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
              <button
                onClick={() => navigate('/login')}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className="w-full px-6 py-3 rounded-xl bg-[#1A2F40] text-white"
              >
                Get Started Free
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
