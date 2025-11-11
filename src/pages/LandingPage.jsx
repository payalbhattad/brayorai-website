import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { MetricsBanner } from "../components/MetricsBanner";
import { Problem } from "../components/Problem";
import { Solution } from "../components/Solution";
import { Features } from "../components/Features";
import { ScrollingBanner } from "../components/ScrollingBanner";
import { Pricing } from "../components/Pricing";
import { FAQ } from "../components/FAQ";
import { Testimonials } from "../components/Testimonials";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <Hero />
            <MetricsBanner />
            <Problem />
            <Solution />
            <Features />
            <ScrollingBanner />
            <Pricing />
            <FAQ />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    );
}
