import type { Product } from "../types";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-card border border-gray-800 rounded overflow-hidden">
      <div className="h-40 bg-gray-900 flex items-center justify-center">
        Produktbilde
      </div>

      <div className="p-4">
        <h3 className="text-white font-semibold">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.category}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-white font-bold">{product.price} kr</span>
          <button className="px-3 py-1 font-semibold rounded border bg-gray-800 hover:bg-accent-purple">
            Kjøp
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
