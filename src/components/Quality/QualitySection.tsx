const trophyIcon = "https://first-aws-bucket-tirex.s3.us-east-2.amazonaws.com/First-S3/src/assets/quality/trophy-icon.png";
const warrantyIcon = "https://first-aws-bucket-tirex.s3.us-east-2.amazonaws.com/First-S3/src/assets/quality/warranty-icon.png";
const shippingIcon = "https://first-aws-bucket-tirex.s3.us-east-2.amazonaws.com/First-S3/src/assets/quality/shipping-icon.png";
const supportIcon = "https://first-aws-bucket-tirex.s3.us-east-2.amazonaws.com/First-S3/src/assets/quality/support-icon.png";

const QualitySection = () => {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row w-full min-h-[270px] px-4 md:px-[53px] py-10 md:py-[100px] bg-[#FAF3EA] gap-6 md:gap-[55px] mt-[20px]">

      <div className="flex gap-4 md:gap-[10px]">
        <img src={trophyIcon} alt="trophy icon" className="w-12 md:w-[60px] h-12 md:h-[60px]"/>
        <div>
            <h3 className='text-xl md:text-[25px] font-semibold'>High Quality</h3>
            <p className='text-base md:text-[20px] font-medium text-[#898989]'>crafted from top materials</p>
        </div>
      </div>

      <div className="flex gap-4 md:gap-[10px]">
        <img src={warrantyIcon} alt="warranty icon" className="w-12 md:w-[60px] h-12 md:h-[60px]"/>
        <div>
            <h3 className='text-xl md:text-[25px] font-semibold'>Warranty Protection</h3>
            <p className='text-base md:text-[20px] font-medium text-[#898989]'>Over 2 years</p>
        </div>
      </div>

      <div className="flex gap-4 md:gap-[10px] mr-[70px]">
        <img src={shippingIcon} alt="shipping icon" className="w-12 md:w-[60px] h-12 md:h-[60px]" />
        <div>
            <h3 className='text-xl md:text-[25px] font-semibold'>Free Shipping</h3>
            <p className='text-base md:text-[20px] font-medium text-[#898989]'>Order over 150 $</p>
        </div>
      </div>

      <div className="flex gap-4 md:gap-[10px] ml-[-51px]">
        <img src={supportIcon} alt="support icon" className="w-12 md:w-[60px] h-12 md:h-[60px]"/>
        <div>
            <h3 className='text-xl md:text-[25px] font-semibold'>24 / 7 Support</h3>
            <p className='text-base md:text-[20px] font-medium text-[#898989]'>Dedicated support</p>
        </div>
      </div>

    </div>
  )
}

export default QualitySection;