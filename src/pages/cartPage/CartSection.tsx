import { useCart } from "../../hooks/useCart";
import trashIcon from "../../assets/cartpage/trash.png";

export default function CartSection() {
  const { items, updateQuantity, removeFromCart } = useCart();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    window.location.href = "/login?fromCartModal=true";
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-center gap-[30px]">
      <div className="w-full md:w-2/3 bg-white py-6 space-y-[16px] 2xl:max-w-[817px]">
        <div className="grid grid-cols-5 font-medium h-[55px] bg-[#F9F1E7] sm:px-[20px] mb-[20px] text-center place-items-center">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
          <p>Remove</p>
        </div>
        {items.map((item) => (
          <div key={item.id} className="grid grid-cols-5 items-center px-1 sm:px-[20px] gap-4 text-center">
            <div className="flex items-center justify-center">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
              />             
            </div>
            <p className="text-[#9F9F9F]">Rs. {item.price.toLocaleString()}</p>
            <div className="flex items-center justify-center max-w-[60px] border border-[#9F9F9F] rounded-md gap-2 p-2 sm:min-w-[68px] sm:max-w-[106px] sm:ml-5">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span className="px-1 sm:px-3 font-medium">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
            <p>Rs. {(item.price * item.quantity).toLocaleString()}</p>
            <button onClick={() => removeFromCart(item.id)} className="text-red-500 flex justify-center">
              <img src={trashIcon} alt="trash icon" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center w-full md:w-[393px] bg-[#F9F1E7] p-6 gap-[20px] mt-[24px]">
        <h2 className="text-[32px] font-semibold mb-4">Cart Totals</h2>
        <div className="flex justify-between gap-[60px] mb-[30px]">
          <span className="font-medium">Subtotal:</span>
          <span className="text-[#9F9F9F]">Rs. {subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between gap-[60px] mb-[40px]">
          <span className="font-medium">Total:</span>
          <span className="text-[20px] font-medium text-[#B88E2F]">Rs. {subtotal.toLocaleString()}</span>
        </div>
        <button 
          onClick={handleCheckout} 
          className="w-[222px] h-[60px] border-2 border-black text-[20px] text-black py-2 mt-4 rounded-lg"
        >
          Check Out
        </button>
      </div>
    </div>
  );
}