import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import MenuCarousel from "@/components/menu-carousel";
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
        <Location />
      </main>
      <Footer />
    </>
  );
}
