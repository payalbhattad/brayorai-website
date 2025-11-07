import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-gradient-to-r from-[#F29224] to-[#F29224] overflow-hidden">
      {/* Floating White Blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6 max-w-4xl mx-auto">
          Ready to Transform Your Recruitment Workflow?
        </h2>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Join 500+ recruiters who are saving time and improving their placement rates with AI-powered resume formatting
        </p>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
          <div>
            <div className="text-5xl sm:text-6xl text-white mb-2">30s</div>
            <div className="text-white/90">Processing Time</div>
          </div>
          <div>
            <div className="text-5xl sm:text-6xl text-white mb-2">60+</div>
            <div className="text-white/90">Minutes saved weekly</div>
          </div>
          <div>
            <div className="text-5xl sm:text-6xl text-white mb-2">&gt;90%</div>
            <div className="text-white/90">Accuracy</div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-[#F29224] rounded-xl hover:scale-105 transition-transform shadow-2xl">
          <span className="text-lg">Join the Beta</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}