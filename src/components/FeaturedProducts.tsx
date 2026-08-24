import ProductCard from "./ProductCard";
import type { Product } from "../types";

const products: Product[] = [
  {
    name: "Karambit - Doppler",
    category: "CS2-inspirert kniv",
    price: 449,
    rarity: "legendary",
  },

  {
    name: "Mandalorian-maske",
    category: "Star Wars inspirert",
    price: 350,
    rarity: "epic",
  },

  {
    name: "Butterly - Marble Fade",
    category: "CS2-inspirert kniv",
    price: 449,
    rarity: "legendary",
  },

  {
    name: "Stormtrooper-figur",
    category: "Star Wars inspirert",
    price: 229,
    rarity: "rare",
  },
];

function FeaturedProducts() {
  return (
    <section className="grid grid-cols-4 gap-6 px-6 py-12">
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </section>
  );
}

export default FeaturedProducts;
