export type Product = {
  name: string;
  category: string;
  price: number;
  rarity: "legendary" | "epic" | "rare";
};

const karambit: Product = {
  name: "Karambit - Doppler",
  category: "CS2-inspirert kniv",
  price: 449,
  rarity: "legendary",
};
