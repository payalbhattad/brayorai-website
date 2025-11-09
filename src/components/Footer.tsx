import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import logo from "../assets/logo.png"; // <-- use your logo file

export function Footer() {
  const quickLinks = ["Features", "Pricing", "Contact", "Privacy", "Terms"];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="BrayorAI"
                className="h-12 w-auto object-contain"
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

            <p className="text-gray-600 max-w-sm">
              Transform resumes into recruiter-ready designs in seconds with AI-powered formatting and optimization.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 hover:text-[#F29224] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-gray-900 mb-4 font-semibold">Connect</h3>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#F29224] hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
          © 2025 BrayorAI • brayorai.com
        </div>
      </div>
    </footer>
  );
}
