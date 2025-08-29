import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Features from "@/components/Features";
import Mission from "@/components/Mission";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Mission />
        <Programs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
