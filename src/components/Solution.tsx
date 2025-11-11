import uploadImg from "../assets/upload.svg";
import formatImg from "../assets/transform.svg";
import downloadImg from "../assets/download.svg";

import { Reveal, Stagger, fadeUp, scaleIn } from "../lib/motion-kit";

export function Solution() {
  const steps = [
    {
      number: "1",
      badgeBg: "#68D585",
      image: uploadImg,
      title: "Upload Resume",
      description: "Drag & drop any PDF or Word file",
    },
    {
      number: "2",
      badgeBg: "#F03BC9",
      image: formatImg,
      title: "Format & AI Enhance",
      description: "AI improves content and applies your branding",
    },
    {
      number: "3",
      badgeBg: "#6C63FF",
      image: downloadImg,
      title: "Download & Share",
      description: "Get a polished, client-ready resume instantly",
    },
  ];

  return (
    <section className="pt-20 pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <Reveal variants={fadeUp}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold leading-tight text-[#1A2F40]">
              The{" "}
              <span className="whitespace-nowrap">
                <span style={{ color: "#1A2F40" }}>Brayor</span>
                <span style={{ color: "#F19025" }}>AI</span>
              </span>{" "}
              Solution
            </h2>
            <div aria-hidden className="block h-6 sm:h-8 lg:h-10"></div>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
              AI-powered resume transformation that eliminates manual formatting and<br />
              standardizes your submissions
            </p>
          </div>
        </Reveal>

        <div className="relative mx-auto max-w-6xl">
          {/* dashed line */}
          <div className="pointer-events-none absolute inset-x-[8%] top-[18rem] hidden md:block">
            <div
              className="w-full border-t-4 border-dashed"
              style={{ borderColor: "#1A2F40" }}
            ></div>
            <div
              className="absolute left-[16.66%] top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-white p-1"
              style={{ borderColor: "#1A2F40" }}
            />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-white p-1"
              style={{ borderColor: "#1A2F40" }}
            />
            <div
              className="absolute left-[83.33%] top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 bg-white p-1"
              style={{ borderColor: "#1A2F40" }}
            />
          </div>

          {/* steps */}
          <Stagger gap={0.14}>
            <div className="relative grid gap-12 md:grid-cols-3">
              {steps.map((s, i) => (
                <Reveal key={i} variants={fadeUp} delay={i * 0.1}>
                  <div className="relative flex flex-col items-center text-center">
                    {/* image */}
                    <Reveal variants={scaleIn}>
                      <div className="mb-8 flex h-64 w-80 items-center justify-center overflow-hidden">
                        <img
                          src={s.image}
                          alt={s.title}
                          className="h-full w-auto max-w-full object-contain"
                        />
                      </div>
                    </Reveal>

                    {/* number badge */}
                    <Reveal variants={scaleIn} delay={0.05}>
                      <div className="relative z-10 mb-6">
                        <div
                          className="flex h-14 w-14 items-center justify-center rounded-full shadow-lg"
                          style={{ backgroundColor: s.badgeBg }}
                        >
                          <span className="text-2xl font-semibold text-white">
                            {s.number}
                          </span>
                        </div>
                      </div>
                    </Reveal>

                    {/* title + description */}
                    <Reveal variants={fadeUp} delay={0.1}>
                      <h3 className="mb-3 text-xl font-semibold text-gray-900">
                        {s.title}
                      </h3>
                    </Reveal>
                    <Reveal variants={fadeUp} delay={0.16}>
                      <p className="text-base text-gray-600">{s.description}</p>
                    </Reveal>
                  </div>
                </Reveal>
              ))}
            </div>
          </Stagger>

          {/* mobile dashed divider */}
          <div className="mt-10 space-y-8 md:hidden">
            <div
              className="border-t-2 border-dashed"
              style={{ borderColor: "#1A2F40" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
