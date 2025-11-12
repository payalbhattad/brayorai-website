import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "An absolute standout. This platform delivers instant tools, effortless usability, and quality.",
      initial: "B",
      name: "Brandon",
      role: "owner of agency",
    },
    {
      quote: "A remarkable solution! It provides top-tier features, intuitive interfaces, and reliability.",
      initial: "W",
      name: "Wilson",
      role: "VP of Tech team",
    },
    {
      quote: "A genuine innovator. Experience unparalleled tools, smooth workflows, and high fidelity.",
      initial: "P",
      name: "Prayon",
      role: "director of operations",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-orange-100 mb-6">
            <span className="text-sm text-gray-700">Trusted by Thousands of Recruiters</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from businesses who've transformed their workflows with our solutions
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-[#F29224] mb-6" />
              <p className="text-gray-700 mb-8 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F29224] to-[#F29224] flex items-center justify-center text-white text-xl">
                  {testimonial.initial}
                </div>
                <div>
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}