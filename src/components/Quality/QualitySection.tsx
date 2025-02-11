import trophyIcon from "../../assets/quality/trophy-icon.png";
import warrantyIcon from "../../assets/quality/warranty-icon.png";
import shippingIcon from "../../assets/quality/shipping-icon.png";
import supportIcon from "../../assets/quality/support-icon.png";

const QualitySection = () => {
  return (
    <div className="flex justify-center items-center w-full h-[270px] px-[53px] py-[100px] bg-[#FAF3EA] gap-[55px] mt-[20px]">

      <div className="flex gap-[10px]">
        <img src={trophyIcon} alt="trophy icon" className="w-[60px] h-[60px]"/>
        <div>
            <h3 className='text-[25px] font-semibold'>High Quality</h3>
            <p className='text-[20px] font-medium text-[#898989]'>crafted from top materials</p>
        </div>
      </div>


      <div className="flex gap-[10px]">
        <img src={warrantyIcon} alt="warranty icon" className="w-[60px] h-[60px]"/>
        <div>
            <h3 className='text-[25px] font-semibold'>Warranty Protection</h3>
            <p className='text-[20px] font-medium text-[#898989]'>Over 2 years</p>
        </div>
      </div>


      <div className="flex gap-[10px]">
        <img src={shippingIcon} alt="shipping icon" className="w-[60px] h-[60px]" />
        <div>
            <h3 className='text-[25px] font-semibold'>Free Shipping</h3>
            <p className='text-[20px] font-medium text-[#898989]'>Order over 150 $</p>
        </div>
      </div>


      <div className="flex gap-[10px]">
        <img src={supportIcon} alt="support icon" className="w-[60px] h-[60px]"/>
        <div>
            <h3 className='text-[25px] font-semibold'>24 / 7 Support</h3>
            <p className='text-[20px] font-medium text-[#898989]'>Dedicated support</p>
        </div>
      </div>


    </div>
  )
}

export default QualitySection
