import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bagIcon from "../../../assets/header/bag-icon.png"
import crossIcon from "../../../assets/header/cross-icon.png"
import formatPrice from "../../../utils/format-price";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartModalProps {
  items: CartItem[];
  onClose: () => void;
  onRemoveItem: (id: number) => void;
}

export default function CartModal({ items, onClose, onRemoveItem }: CartModalProps) {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    
    setSubtotal(total);
  }, [items]);

  return (
    <div className="flex flex-col items-center fixed top-0 right-0 w-[417px] h-[746px] pt-[30px] bg-white shadow-lg">      
      <div className="flex gap-[152px] items-center pb-[26px] w-[350px]">
        <h2 className="text-[24px] font-semibold ">Shopping Cart</h2>
        <button onClick={onClose}>
          <img src={bagIcon} alt="cart-icon" />
        </button>
      </div>

      <div className="w-[287px] h-[1px] bg-gray-200 self-start ml-[34px] mb-[42px]"></div>

      
      <div className="mt-4 space-y-4 overflow-y-auto h-2/3 w-[350px]">
        {items.length === 0 ? (
          <p className="text-gray-500">Seu carrinho está vazio.</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex items-center justify-between w-[350px] h-[105px]">
              <img src={item.image} alt={item.name} className="w-[108px] h-[105px] rounded flex justify-center items-center" />
              <div className="ml-4">
                <h3 className="text-base">{item.name}</h3>
                <p className="text-base font-light">{item.quantity}
                <span className="text-[12px] font-light ml-[15px] mr-[15px]">X</span>
                <span className="text-[12px] font-medium text-[#B88E2F]">Rs. {formatPrice(item.price)}</span>
                </p>
              </div>
              <button onClick={() => onRemoveItem(item.id)}>
                <img src={crossIcon} alt="cart-icon" />
              </button>
            </div>
          ))
        )}
      </div>

      
      <div className="ml-[30px] pt-2 flex self-start gap-[100px]">
        <p className="text-base flex self-start">Subtotal</p>
        <p className="font-semibold text-[#B88E2F]">Rs. {formatPrice(subtotal)}</p>
      </div>


      <div className="w-full h-[1px] bg-gray-200 self-start mt-[23px] mb-[26px]"></div>


      <div className="flex justify-between items-center gap-[14px] mb-[20px]">
        <Link to="/cartPage" className="flex justify-center items-center w-[87px] h-[30px] border border-black rounded-full text-[12px] hover:bg-gray-100">Cart</Link>
        <Link to="/checkout" className="flex justify-center items-center w-[118px] h-[30px] border border-black rounded-full text-[12px] hover:bg-gray-100">Checkout</Link>
        <Link to="/comparison" className="flex justify-center items-center w-[135px] h-[30px] border border-black rounded-full text-[12px] hover:bg-gray-100">Comparison</Link>
      </div>
    </div>
  );
}
