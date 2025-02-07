import { useCart } from "../../hooks/useCart";
import trashIcon from "../../assets/cartpage/trash.png"

export default function CartPage() {
  const { items, addToCart, removeFromCart, clearCart, updateQuantity } = useCart();
  
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col w-full mx-auto px-[100px] py-[70px]">
      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-[30px]">
          <div className="w-full max-w-[817px] lg:w-2/3 bg-white py-6 space-y-[16px]">
            <div className="flex items-center w-full font-medium h-[55px] bg-[#F9F1E7] px-[40px] mb-[20px]">
              <p className="ml-[4%] mr-[13%]">Product</p>
              <p className="mr-[11%]">Price</p>
              <p className="mr-[8%]">Quantity</p>
              <p>Subtotal</p>
            </div>
            {items.map((item) => (
              <div key={item.id} className="relative flex items-center justify-between pb-4">
                <div className="flex items-center gap-4">
                  <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex gap-[70px]">
                    <h2 className="w-[150px] text-[#9F9F9F]">{item.name}</h2>
                    <p className="text-[#9F9F9F]">Rs. {item.price.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex border border-[#9F9F9F] rounded-md gap-[14px] p-2">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span className="px-3 font-medium">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>

                <p>Rs. {(item.price * item.quantity).toLocaleString()}</p>

                <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                  <img src={trashIcon} alt="trash icon" />
                </button>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center w-full lg:w-1/3 bg-[#F9F1E7] p-6 gap-[20px] mt-[24px]">
            <h2 className="text-[32px] font-semibold mb-4">Cart Totals</h2>
            <div className="flex justify-between gap-[60px] mb-[30px]">
              <span className="font-medium">Subtotal:</span>
              <span className="text-[#9F9F9F]">Rs. {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between gap-[60px] mb-[40px]">
              <span className="font-medium">Total:</span>
              <span className="text-[20px] font-medium text-[#B88E2F]">Rs. {subtotal.toLocaleString()}</span>
            </div>
            <button className="w-[222px] h-[60px] border-2 border-black text-black py-2 mt-4 rounded-lg">
              Check Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
