const diningImg = "https://first-aws-bucket-tirex.s3.us-east-2.amazonaws.com/First-S3/src/assets/homepage/section2/dining-img.png";
const livingImg = "https://first-aws-bucket-tirex.s3.us-east-2.amazonaws.com/First-S3/src/assets/homepage/section2/living-img.png";
const bedroomImg = "https://first-aws-bucket-tirex.s3.us-east-2.amazonaws.com/First-S3/src/assets/homepage/section2/bedroom-img.png";

const Section2 = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto py-8 md:py-[56px]">
      <div className="pb-6 md:pb-[48px]">
        <h2 className="text-center font-bold text-2xl md:text-[32px] text-[#333333] md:pb-4">Browse the Range</h2>
        <p className="text-center text-base md:text-[20px] text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-[20px]">
        <div className="flex flex-col justify-center items-center gap-6 md:gap-[30px]">
          <img src={diningImg} alt="dining image" className="w-full md:w-[381px] h-auto md:h-[480px] rounded-md" />
          <p className="font-semibold text-xl md:text-[24px] text-[#333333]">Dining</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 md:gap-[30px]">
          <img src={livingImg} alt="living image" className="w-full md:w-[381px] h-auto md:h-[480px] rounded-md" />
          <p className="font-semibold text-xl md:text-[24px] text-[#333333]">Living</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 md:gap-[30px]">
          <img src={bedroomImg} alt="bedroom image" className="w-full md:w-[381px] h-auto md:h-[480px] rounded-md" />
          <p className="font-semibold text-xl md:text-[24px] text-[#333333]">Bedroom</p>
        </div>
      </div>
    </div>
  );
};

export default Section2;