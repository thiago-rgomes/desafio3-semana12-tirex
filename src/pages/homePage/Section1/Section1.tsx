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
        <div className="absolute inset-0 bg-gray-200 bg-opacity-45  md:bg-opacity-0"></div>
      </div>

      {/* Div da frente */}
      <div className="absolute max-h-[716px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-auto bg-none px-6 py-8 text-center rounded-lg 
      md:bg-opacity-100 md:top-[58%] md:left-[68%] md:px-[30px] md:text-left md:bg-[#FFF3E3]">
        <p className="font-semibold text-[#333333] pb-2 tracking-[3px]">
          New Arrival
        </p>
        <h1 className="font-bold text-4xl leading-tight text-[#B88E2F] pb-4">
          Discover our <br /> New Collection
        </h1>
        <p className="w-full font-medium text-base text-[#333333] pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="w-full h-[60px] font-bold text-white bg-[#B88E2F] rounded-lg md:rounded-none md:w-[222px] md:h-[74px] md:mt-4">
          BUY NOW
        </button>
      </div>
    </div>
  );
};

export default Section1;