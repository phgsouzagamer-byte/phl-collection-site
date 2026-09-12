import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ImpactBar from "./components/ImpactBar/ImpactBar";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Brands from "./components/Brands/Brands";
import HowToBuy from "./components/HowToBuy/HowToBuy";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ImpactBar />
        <FeaturedProducts />
        <ProductGrid />
        <Brands />
        <HowToBuy />
        <About />
        <Benefits />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
