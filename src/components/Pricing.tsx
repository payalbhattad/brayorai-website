import { useState } from "react";
import { Check } from "lucide-react";

type Period = "monthly" | "yearly";

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<Period>("monthly");

  const plans = [
    {
      badgeText: "EARLY BETA ACCESS",
      badgeClass: "bg-[#F29224] text-white",
      title: "FREE",
      subtitle: "Become a Beta Insider",
      features: [
        "Full access during beta",
        "AI resume enhancement",
        "Priority access to new features",
        "Provide feedback to influence product improvements",
      ],
      cta: "Join Beta Free",
      ctaClass: "bg-[#1A2F40] text-white",
      footnote: "No credit card required",
      cardClass: "bg-white border-2 border-gray-200",
    },
    {
      badgeText: "OFFICIAL LAUNCH PRICING",
      badgeClass: "bg-orange-200 text-orange-900",
      title: "Coming Soon",
      subtitle: "Launching Soon",
      features: [
        "Pricing will go live after beta",
        "Beta members will receive exclusive early adopter pricing",
        "Be notified",
      ],
      cta: "Get Notified",
      ctaClass: "bg-[#F29224] text-white",
      footnote: "Secure your spot before public release",
      cardClass: "bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300",
    },
  ];

  return (
    <section id="pricing" className="bg-gradient-to-b from-white to-gray-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl text-gray-900 sm:text-5xl">Pricing & Plans</h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600">
            Start free, then shape the product. Enjoy full access now and receive early-winner pricing at launch.
          </p>

          {/* Billing toggle (kept for later) */}
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 p-1">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`rounded-full px-6 py-2 transition-colors ${billingPeriod === "monthly" ? "bg-[#1A2F40] text-white" : "text-gray-600 hover:text-gray-900"
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`rounded-full px-6 py-2 transition-colors ${billingPeriod === "yearly" ? "bg-[#1A2F40] text-white" : "text-gray-600 hover:text-gray-900"
                }`}
            >
              Yearly
              <span className="ml-2 rounded-full bg-[#F29224] px-2 py-1 text-xs text-white">SAVE 25%</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">


          {plans.map((p, i) => (
            <article
              key={i}
              className={`flex min-h-[560px] flex-col justify-between rounded-3xl p-8 lg:p-10 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ${p.cardClass}`}
            >

              {/* Top */}
              <div>
                <span className={`mb-6 inline-block rounded-full px-4 py-2 text-xs ${p.badgeClass}`}>
                  {p.badgeText}
                </span>

                <h3 className="text-4xl text-gray-900">{p.title}</h3>
                <p className="mt-1 mb-4 text-sm text-gray-500">{p.subtitle}</p>


                <ul className="mt-6 space-y-4">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#F29224]" />
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom (aligned) */}
              <div>
                <button
                  className={`w-full rounded-xl px-6 py-4 text-center text-base shadow-lg transition-transform hover:scale-105 ${p.ctaClass} mt-12`}
                >
                  {p.cta}
                </button>
                <p className="mt-6 text-sm text-gray-500">{p.footnote}</p>
              </div>


            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
