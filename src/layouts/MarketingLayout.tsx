import { ReactNode } from "react";
import { Navigation } from "../components/LandingPage/Navigation";
import { Footer } from "../components/LandingPage/Footer";

type Props = { children: ReactNode };

export default function MarketingLayout({ children }: Props) {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
