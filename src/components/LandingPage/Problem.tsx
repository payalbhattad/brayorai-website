import { Clock, Target, Users } from "lucide-react";
import problemImg from "../../assets/problem-photo.svg";

import { Reveal, Stagger, fadeUp, scaleIn } from "@/lib/motion-kit";

export function Problem() {
  const items = [
    { Icon: Clock, title: "Time Waste", desc: "Recruiters spend hours weekly reformatting resumes instead of placing candidates." },
    { Icon: Target, title: "Inconsistent Quality", desc: "Messy, unprofessional resumes damage brand reputation." },
    { Icon: Users, title: "Missed Placements", desc: "Formatting issues cause qualified candidates to get rejected by ATS systems." },
  ];

  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-14 xl:gap-20">

          {/* Left */}
          <Reveal variants={fadeUp}>
            <div className="max-w-md flex flex-col gap-8 lg:max-w-none">
              <h2
                className="font-semibold leading-snug text-gray-900"
                style={{ fontSize: "2.6rem" }}
              >
                The Recruiter's Daily Struggle
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Manual resume formatting wastes hours and hurts consistency across your brand.
              </p>
            </div>
          </Reveal>

          {/* Middle image */}
          <Reveal variants={scaleIn}>
            <div className="flex justify-center">
              <div className="rounded-xl ring-1 ring-gray-200/70 shadow-[0_12px_40px_rgba(0,0,0,0.08)] bg-white overflow-hidden p-4">
                <img
                  src={problemImg}
                  alt="Illustration"
                  className="block"
                  style={{ width: 270, height: 240, objectFit: "contain" }}
                />
              </div>
            </div>
          </Reveal>

          {/* Right: points */}
          <div className="w-full max-w-xl">
            <Stagger gap={0.12}>
              <div className="flex flex-col gap-8">
                {items.map(({ Icon, title, desc }) => (
                  <Reveal key={title} variants={fadeUp}>
                    <div className="flex items-start gap-4">
                      {/* Icon box */}
                      <span
                        className="inline-flex h-14 w-14 items-center justify-center rounded-xl flex-shrink-0"
                        style={{ backgroundColor: "#1A2F40" }}
                      >
                        <Icon className="h-6 w-6" style={{ color: "#F19025" }} />
                      </span>

                      {/* Text */}
                      <div className="max-w-[560px]">
                        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
                        <p className="mt-2 text-gray-600 text-[15px] leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Stagger>
          </div>

        </div>
      </div>
    </section>
  );
}
