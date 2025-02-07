import ImageCarousel from "./ImageCarousel"


const Section4 = () => {
  return (
    <div className="flex justify-center items-center w-full h-[670px] pl-[100px] py-[44px] bg-[#FCF8F3]">
      <div className="flex flex-col">
        <h3 className="font-bold text-[40px] text-[#3A3A3A] mb-[7px]">50+ Beautiful rooms inspiration</h3>
        <p className="font-medium text-[#616161] mb-[25px]">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        <button className="w-[176px] h-[48px] font-semibold text-white bg-[#B88E2F]">Explore More</button>
      </div>

      <div className="overflow-visible ">
        <ImageCarousel></ImageCarousel>
      </div>

      
    </div>
  )
}

export default Section4
