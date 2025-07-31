
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Blogs from "./components/Blogs";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import { Footer } from "react-day-picker";


export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Blogs />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}
