import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import GallerySection from "@/components/GallerySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AdvisorsSection from "@/components/AdvisorsSection";
import ManagementSection from "@/components/ManagementSection";
import ClientsSection from "@/components/ClientsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import ContactInfoSection from "@/components/ContactInfoSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <GallerySection />
        <TestimonialsSection />
        <WhyChooseSection />
        <AdvisorsSection />
        <ManagementSection />
        <ClientsSection />
        <BlogSection />
        <ContactSection />
        <ContactInfoSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
