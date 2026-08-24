import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import type { Product } from "./types";

const karambit: Product = {
  name: "Karambit - Doppler",
  category: "CS2-inspirert kniv",
  price: 449,
  rarity: "legendary",
};

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="grid grid-cols-4 gap-6 px-6 py-12">
        <ProductCard product={karambit} />
      </section>
    </>
  );
}

export default App;
