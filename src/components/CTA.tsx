import { ArrowRight } from "lucide-react";
import ctaBg from "../assets/cta-bg.jpg";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-12 "
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(26,47,64,0.9) 0%, rgba(14,27,61,0.9) 100%), url(" +
          ctaBg +
          ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left pt-4">

        {/* Text + Button block */}
        <div className="mb-6">
          <h2 className="font-bold text-white text-4xl sm:text-[2.75rem] leading-snug mb-4">
            Ready to <span className="text-[#F29224]">Transform</span> your Recruiting Workflow?
          </h2>

          <p className="text-white mt-2 mb-6">
            <span className="text-white font-medium">Start free</span> during Beta. No credit card required.
          </p>

          <button className="bg-[#F29224] hover:bg-[#d97f1f] text-[#1A2F40] font-bold px-6 py-3 rounded-lg transition-colors">
            Join the Beta
          </button>
        </div>
      </div>
    </section>
  );
}
