import MarketingLayout from "../layouts/MarketingLayout";
import { Hero } from "../components/LandingPage/Hero";
import { MetricsBanner } from "../components/LandingPage/MetricsBanner";
import { Problem } from "../components/LandingPage/Problem";
import { Solution } from "../components/LandingPage/Solution";
import { Features } from "../components/LandingPage/Features";
import { ScrollingBanner } from "../components/LandingPage/ScrollingBanner";
import { Pricing } from "../components/LandingPage/Pricing";
import { FAQ } from "../components/LandingPage/FAQ";
import { Testimonials } from "../components/LandingPage/Testimonials";
import { CTA } from "../components/LandingPage/CTA";

export default function LandingPage() {
    return (
        <MarketingLayout>
            <Hero />
            <MetricsBanner />
            <Problem />
            <div id="how-it-works">
                <Solution />
            </div>
            <div id="features">
                <Features />
            </div>
            <ScrollingBanner />
            <div id="pricing">
                <Pricing />
            </div>
            <FAQ />
            <Testimonials />
            <div id="contact">
                <CTA />
            </div>
        </MarketingLayout>
    );
}
