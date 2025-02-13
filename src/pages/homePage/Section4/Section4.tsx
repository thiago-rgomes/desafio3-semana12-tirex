import ImageCarousel from "./ImageCarousel";

const Section4 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full h-auto md:h-[670px] px-4 md:pl-[100px] py-[44px] bg-[#FCF8F3]">
      
      <div className="flex flex-col text-center md:text-left max-w-[500px] md:max-w-none mb-8 md:mb-0">
        <h3 className="font-bold text-2xl sm:text-3xl md:text-[40px] text-[#3A3A3A] mb-[7px]">
          50+ Beautiful rooms inspiration
        </h3>
        <p className="font-medium text-sm sm:text-base text-[#616161] mb-[25px]">
          Our designer already made a lot of beautiful prototypes of rooms that inspire you
        </p>
        <button className="w-[176px] h-[48px] font-semibold text-white bg-[#B88E2F] mx-auto md:mx-0">
          Explore More
        </button>
      </div>

      
      <div className="w-full md:w-auto overflow-visible">
        <ImageCarousel />
      </div>
    </div>
  );
};

export default Section4;