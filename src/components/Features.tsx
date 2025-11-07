import { Sparkles, Settings, Wand2, FileText, Target, Download } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Sparkles,
      badge: { text: "Live", color: "bg-green-500" },
      title: "AI-Powered Formatting",
      description: "Instantly transform messy resumes into clean, professional layouts with intelligent layout optimization.",
    },
    {
      icon: Settings,
      badge: { text: "Live", color: "bg-blue-500" },
      title: "Smart Structuring",
      description: "Reorganizes sections intelligently to highlight key candidate details that recruiters need.",
    },
    {
      icon: Wand2,
      badge: { text: "Live", color: "bg-purple-500" },
      title: "AI Enhancement",
      description: "Improves resume language for clarity and professionalism while keeping the candidate's tone.",
    },
    {
      icon: FileText,
      badge: { text: "Q1 2025", color: "bg-[#F29224]" },
      title: "Custom Templates",
      description: "Upload your agency's branded resume designs—we apply them in one click.",
    },
    {
      icon: Target,
      badge: { text: "Q1 2025", color: "bg-pink-500" },
      title: "Job Description Match",
      description: "Instantly tailor resumes to fit specific job requirements with AI-driven keyword optimization.",
    },
    {
      icon: Download,
      badge: { text: "Q1 2025", color: "bg-indigo-500" },
      title: "Submission Package",
      description: "Automatically generate client-ready submission summaries.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-orange-100 mb-6">
            <span className="text-sm text-gray-700 uppercase tracking-wide">Effortless Formatting</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-[#F29224] to-[#F29224] text-transparent bg-clip-text">
              Modern
            </span>{" "}
            Recruiters
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Powerful features that save time and improve placement rates
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gray-50 rounded-2xl p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                {/* Badge */}
                <div className={`absolute top-6 right-6 ${feature.badge.color} text-white text-xs px-3 py-1 rounded-full`}>
                  {feature.badge.text}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F29224] to-[#F29224] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}