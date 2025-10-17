import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer";
import GallerySection from "@/components/gallerysection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <GallerySection />
      <Experience />

      <Resume />
      <Footer />
    </div>
  );
};

export default Index;
