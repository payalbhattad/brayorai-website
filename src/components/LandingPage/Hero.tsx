import { ArrowRight, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Floating Gradient Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#F29224]/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1A2F40]/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-orange-100 mb-8 animate-fade-in-up">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#F29224] to-[#F29224]" />
          <span className="text-sm text-gray-700">BrayorAI</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 text-gray-900 max-w-4xl mx-auto animate-fade-in-up">
          Turn Resumes into Recruiter Ready Designs{" "}
          <span className="bg-gradient-to-r from-[#F29224] to-[#F29224] text-transparent bg-clip-text">
            in Seconds
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in-up">
          Your journey to flawless resume formatting, branding, and optimization.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <button
            onClick={() => navigate('/signup')}
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#F29224] to-[#F29224] text-white hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
          >
            Start Free Trial Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#1A2F40] to-[#1A2F40] text-white hover:scale-105 transition-transform shadow-lg">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}