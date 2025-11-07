import uploadImg from "figma:asset/88ebba961b260d3f71a192af803f3a1be0c342ef.png";
import formatImg from "figma:asset/74431a842174c8df7ccf94f4f696b120907e4c5d.png";
import downloadImg from "figma:asset/95bffc2c9aa45116087b9a67fd58291f2483c048.png";

export function Solution() {
  const steps = [
    {
      number: "1",
      image: uploadImg,
      title: "Upload Resume",
      description: "Drag & drop any PDF or Word file",
    },
    {
      number: "2",
      image: formatImg,
      title: "Format & AI Enhance",
      description: "AI improves content and applies your branding",
    },
    {
      number: "3",
      image: downloadImg,
      title: "Download & Share",
      description: "Get a polished, client-ready resume instantly",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-orange-100 mb-6">
            <span className="text-sm text-gray-700 uppercase tracking-wide">AI-Powered Formatting</span>
          </div>
          <h2 className="text-4xl sm:text-5xl text-gray-900 mb-4">
            The{" "}
            <span className="bg-gradient-to-r from-[#F29224] to-[#F29224] text-transparent bg-clip-text">
              BrayorAI
            </span>{" "}
            Solution
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            An AI-powered resume transformation that simplifies manual formatting and standardizes your submissions.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => {
            return (
              <div key={index} className="relative text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-64 h-64 flex items-center justify-center">
                    <img src={step.image} alt={step.title} className="w-full h-full object-contain" />
                  </div>
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}