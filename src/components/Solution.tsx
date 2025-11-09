import uploadImg from "../assets/upload.svg";
import formatImg from "../assets/transform.svg";
import downloadImg from "../assets/download.svg";

export function Solution() {
  const steps = [
    {
      number: "1",
      badgeBg: "#68D585", // green
      image: uploadImg,
      title: "Upload Resume",
      description: "Drag & drop any PDF or Word file",
    },
    {
      number: "2",
      badgeBg: "#F03BC9", // pink
      image: formatImg,
      title: "Format & AI Enhance",
      description: "AI improves content and applies your branding",
    },
    {
      number: "3",
      badgeBg: "#6C63FF", // purple
      image: downloadImg,
      title: "Download & Share",
      description: "Get a polished, client-ready resume instantly",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header omitted for brevity */}

        <div className="relative mx-auto max-w-6xl">
          {/* dashed line */}
          <div className="pointer-events-none absolute inset-x-[8%] top-[18rem] hidden md:block">
            {/* main dashed line */}
            <div
              className="w-full border-t-4 border-dashed"
              style={{ borderColor: "#1A2F40" }}
            ></div>

            {/* circle markers */}
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
          <div className="relative grid gap-12 md:grid-cols-3">
            {steps.map((s, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center"
              >
                <div className="mb-8 flex h-64 w-80 items-center justify-center overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-auto max-w-full object-contain"
                  />
                </div>

                {/* badge with inline bg color */}
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

                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {s.title}
                </h3>
                <p className="text-base text-gray-600">{s.description}</p>
              </div>
            ))}
          </div>

          {/* mobile dashed divider */}
          <div className="mt-10 space-y-8 md:hidden">
            <div
              className="border-t-2 border-dashed"
              style={{ borderColor: "#1A2F40" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
