import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import bagIcon from "../assets/header/bag-icon.png";
import crossIcon from "../assets/header/cross-icon.png";
import formatPrice from "../utils/format-price";
import { useUser } from "@clerk/clerk-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartModalProps {
  items: CartItem[];
  onClose: () => void;
  onRemoveItem: (id: number) => void;
}

export default function CartModal({ onClose }: CartModalProps) {
  const { items, removeFromCart } = useCart();
  const [subtotal, setSubtotal] = useState(0);
  const { isSignedIn } = useUser();

  useEffect(() => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubtotal(total);
  }, [items]);

  return (
    <div className="flex flex-col fixed top-0 right-0 w-[417px] h-full bg-white shadow-lg z-50">
      
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <h2 className="text-[24px] font-semibold">Shopping Cart</h2>
        <button onClick={onClose} className="hover:opacity-70">
          <img src={bagIcon} alt="cart-icon" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4">
        {items.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 py-4 border-b border-gray-200 last:border-b-0"
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-[80px] h-[80px] object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-base font-medium">{item.name}</h3>
                <p className="text-sm text-gray-600">
                  {item.quantity} <span className="mx-1">×</span> Rs. {formatPrice(item.price)}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <img src={crossIcon} alt="remove-icon" className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <p className="text-base">Subtotal</p>
          <p className="font-semibold text-[#B88E2F]">Rs. {formatPrice(subtotal)}</p>
        </div>
        <div className="flex justify-between gap-4">
          <Link
            to="/cart"
            onClick={(e) => {
              onClose();
            }}
            className="flex-1 text-center py-2 border border-black rounded-full text-sm hover:bg-gray-100 transition-colors"
          >
            Cart
          </Link>
          <Link
            to="/checkout"
            onClick={(e) => {
              if (!isSignedIn){
                e.preventDefault();
                window.location.href = "/login?fromCartModal=true";
              } else {
                onClose();
              }
            }}
            className="flex-1 text-center py-2 border border-black rounded-full text-sm hover:bg-gray-100 transition-colors"
          >
            Checkout
          </Link>
          <Link
            to="/comparison"
            className="flex-1 text-center py-2 border border-black rounded-full text-sm hover:bg-gray-100 transition-colors"
          >
            Comparison
          </Link>
        </div>
      </div>
    </div>
  );
}