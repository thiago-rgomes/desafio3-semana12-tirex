import section1Bg from '../../../assets/homepage/section1/section1-bg.png'

const Section1 = () => {
  return (
    <div className="relative w-full h-auto">
      <img src={section1Bg} alt="imagem de background" className='w-full min-w-[950px] h-auto'/>
      <div className='absolute flex flex-col justify-center w-[45%] h-[443px] bg-[#FFF3E3] top-[20%] left-[51%] px-[30px] pt-[62px] pb-[37px]'>
        <p className='font-semibold text-[#333333] pb-[4px] tracking-[3px]'>New Arrival</p>
        <h1 className='font-bold text-[52px] leading-[65px] text-[#B88E2F] pb-[17px]'>Discover our <br /> New Collection</h1>
        <p className='w-[546px] h-[52px]font-medium text-[18px] text-[#333333] pb-[46px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <button className='w-[222px] h-[74px] font-bold text-white bg-[#B88E2F]'>BUY NOW</button>
      </div>
    </div>
  )
}

export default Section1
