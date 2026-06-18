import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionsShell from "@/components/SectionsShell";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionsShell>
          <About />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
          <Footer />
        </SectionsShell>
      </main>
    </>
  );
}
