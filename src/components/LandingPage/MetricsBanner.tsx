import { useEffect, useRef, useState } from "react";
import { Reveal, scaleIn } from "@/lib/motion-kit";


export function MetricsBanner() {
    const items = [
        { value: "30s", line1: "Processing Time" },
        { value: "60+", line1: "Minutes Saved Weekly" },
        { value: ">90%", line1: "Accuracy" },
    ];

    const [show, setShow] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const io = new IntersectionObserver(
            ([e]) => e.isIntersecting && setShow(true),
            { threshold: 0.25 }
        );
        if (ref.current) io.observe(ref.current);
        return () => io.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            style={{ backgroundColor: "#1A2F40", padding: "18px 0" }}
            className="w-full"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
                    {items.map((it, i) => (
                        <Reveal> <div
                            key={it.value}
                            className={`flex flex-col items-center text-center transition-all duration-700 ease-out
  ${show ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-3 scale-95"}`}
                            style={{ transitionDelay: `${i * 140}ms` }}
                        >
                            <div
                                className="text-4xl sm:text-5xl font-bold tracking-tight text-center"
                                style={{ color: "#F19025" }}
                            >
                                {it.value.startsWith(">") ? (
                                    // Render '>' and the digits as a centered group
                                    <span className="inline-flex items-center justify-center gap-1 leading-none">
                                        <span className="leading-none">{">"}</span>
                                        <span className="tabular-nums leading-none">90%</span>
                                    </span>
                                ) : (
                                    it.value
                                )}
                            </div>

                            <div className="mt-2 text-sm sm:text-base" style={{ color: "#ffffff" }}>
                                {it.line1}
                            </div>
                        </div>

                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
