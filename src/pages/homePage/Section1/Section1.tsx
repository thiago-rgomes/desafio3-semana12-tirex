import section1Bg from '../../../assets/homepage/section1/section1-bg.png';

const Section1 = () => {
  return (
    <div className="relative w-full h-auto">
      {/* Imagem de fundo com blur */}
      <div className="relative w-full h-auto">
        <img
          src={section1Bg}
          alt="imagem de background"
          className="w-full h-auto object-cover"
        />
        {/* Overlay com blur */}
        <div className="absolute inset-0 bg-gray-200 bg-opacity-15  md:bg-opacity-0"></div>
      </div>

      {/* Div da frente */}
      <div className="absolute w-full text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-none rounded-lg
      sm:px-8 sm:max-w-[500px]
      md:bg-opacity-100 md:h-auto md:top-[58%] md:left-[68%] md:px-[30px] md:py-8 md:text-left md:bg-[#FFF3E3] md:max-h-[716px]">
        <p className="font-semibold text-[#333333] sm:pb-2 tracking-[3px]">
          New Arrival
        </p>
        <h1 className="font-bold text-xl sm:pb-4 md:text-4xl leading-tight text-[#B88E2F]">
          Discover our <br /> New Collection
        </h1>
        <p className="w-full text-sm px-2 mb-2 font-medium sm:text-base  text-[#333333] sm:pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="w-[100px] h-[25px] text-sm sm:w-[180px] sm:h-[50px] font-bold text-white bg-[#B88E2F] rounded-lg md:rounded-none md:w-[222px] md:h-[74px] md:mt-4">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default Section1;