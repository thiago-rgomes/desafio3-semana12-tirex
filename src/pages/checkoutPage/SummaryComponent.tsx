import { useCart } from "../../hooks/useCart";

interface SummaryProps {
    onSubmit: () => void;
}

const SummaryComponent: React.FC<SummaryProps> = ({ onSubmit }) => {
    const { items } = useCart();
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col max-w-[35%]">
        <div className="flex flex-col border-b-2 mb-[30px] gap-[20px]">
            <div className="flex justify-between font-medium text-[24px]">
               <h3>Product</h3> <p>Subtotal</p> 
            </div>

            <div>
              {items.map((item) => (
                <div key={item.id} className="flex justify-between">
                    <h3 className="text-[#9F9F9F]">{item.name}<span className="text-[12px] font-medium text-black ml-2"> X {item.quantity}</span></h3>
                    <p className="font-light">Rs.{(item.price * item.quantity).toLocaleString()}</p>
                </div>
            ))}  
            </div>
            
            <div className="flex justify-between">
                <p>Subtotal</p><span className="font-light">Rs.{subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between mb-[30px]">
            <p>Total</p><span className="font-bold text-[24px] text-[#B88E2F]">Rs.{subtotal.toLocaleString()}</span>
            </div>
            
        </div>


        <div>
            <div className="flex justify-start items-center gap-3 mb-3">
                <div className="w-[14px] h-[14px] bg-black rounded-full"></div> 
                <p>Direct Bank Transfer</p>
            </div>

            <p className="font-light text-[#9F9F9F] mb-6">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
            
            <div className="flex justify-start items-center gap-3 mb-3">
                <div className="w-[14px] h-[14px] bg-white border-2 rounded-full"></div> 
                <p className="font-medium text-[#9F9F9F]">Direct Bank Transfer</p>
            </div>

            <div className="flex justify-start items-center gap-3 mb-6">
                <div className="w-[14px] h-[14px] bg-white border-2 rounded-full"></div> 
                <p className="font-medium text-[#9F9F9F]">Direct Bank Transfer</p>
            </div>

            <p className="font-light mb-8">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our 
                <span className="font-bold"> privacy policy.</span>
            </p>

            <button onClick={onSubmit} className="flex justify-center items-center w-[318px] h-[64px] text-[20px] border-2 border-black rounded-lg mx-auto">Place Order</button>
            
        </div>
      
    </div>
  )
}

export default SummaryComponent

