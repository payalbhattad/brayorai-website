import { useState } from "react";
import { Check } from "lucide-react";

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      badge: { text: "EARLY BETA ACCESS", color: "bg-[#F29224]" },
      price: "FREE",
      subtitle: "during beta",
      features: [
        "Full access during beta",
        "AI resume enhancement",
        "Priority access to new features",
        "Shape feedback on continued product improvements",
      ],
      cta: "Join Beta (Free)",
      ctaStyle: "bg-gradient-to-r from-[#1A2F40] to-[#1A2F40]",
      cardStyle: "bg-white border-2 border-gray-200",
      isSpecial: false,
    },
    {
      badge: { text: "SPECIAL LAUNCH PRICING", color: "bg-orange-200 text-orange-900" },
      price: "Coming Soon",
      subtitle: "Lock in early beta pricing",
      features: [
        "Pricing will go live after beta",
        "Beta members will receive exclusive early pricing",
        "No contracts",
      ],
      cta: "Get Started",
      ctaStyle: "bg-gradient-to-r from-[#F29224] to-[#F29224]",
      cardStyle: "bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300",
      isSpecial: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            Pricing & Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Start free, then shape the product. Enjoy full access now and receive early-winner pricing at launch.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-2 p-1 bg-gray-100 rounded-full">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-full transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-[#1A2F40] text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("yearly")}
              className={`px-6 py-2 rounded-full transition-colors flex items-center gap-2 ${
                billingPeriod === "yearly"
                  ? "bg-[#1A2F40] text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Yearly
              <span className="text-xs px-2 py-1 bg-[#F29224] text-white rounded-full">
                SAVE 25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${plan.cardStyle} rounded-3xl p-8 lg:p-10`}
            >
              {plan.isSpecial && (
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs px-4 py-2 rounded-lg rotate-12 shadow-lg">
                  SPECIAL LAUNCH PRICING
                </div>
              )}

              <div className={`${plan.badge.color} text-white text-xs px-4 py-2 rounded-full inline-block mb-6`}>
                {plan.badge.text}
              </div>

              <div className="mb-6">
                <div className="text-5xl text-gray-900 mb-2">{plan.price}</div>
                <div className="text-gray-600">{plan.subtitle}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#F29224] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full ${plan.ctaStyle} text-white py-4 rounded-xl hover:scale-105 transition-transform shadow-lg`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}