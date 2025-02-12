import { useState } from "react";

interface ProductActionsProps {
  product: {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
  };
  onAddToCart: (quantity: number) => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(quantity);
  };

  return (
    <div className="flex items-center gap-4 mt-6">
      <div className="flex justify-center items-center w-[123px] h-[64px] border border-[#9F9F9F] rounded-lg">
        <button
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="px-3 py-1 "
        >
          -
        </button>
        <span className="px-4">{quantity}</span>
        <button onClick={() => setQuantity((q) => q + 1)} className="px-3 py-1 ">
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className=" flex justify-center items-center w-[215px] h-[64px] text-[20px] border border-black rounded-xl"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductActions;