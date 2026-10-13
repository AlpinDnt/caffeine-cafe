import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import MenuCarousel from "@/components/menu-carousel";
import BestSellers from "@/components/best-sellers";
import Location from "@/components/location";
import Footer from "@/components/footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuCarousel />
        <BestSellers />
        <Location />
      </main>
      <Footer />
    </>
  );
}
