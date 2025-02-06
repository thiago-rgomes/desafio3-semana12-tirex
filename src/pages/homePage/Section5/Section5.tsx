import one from '../../../assets/homepage/section5/01.png'
import two from '../../../assets/homepage/section5/02.png'
import three from '../../../assets/homepage/section5/03.png'
import four from '../../../assets/homepage/section5/04.png'
import five from '../../../assets/homepage/section5/05.png'
import six from '../../../assets/homepage/section5/06.png'
import seven from '../../../assets/homepage/section5/07.png'
import eight from '../../../assets/homepage/section5/08.png'
import nine from '../../../assets/homepage/section5/09.png'

const Section5 = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div>
        <p className="text-center font-semibold text-[20px] text-[#616161]">Share your setup with</p>
        <h2 className="text-center font-bold text-[40px] text-[#3A3A3A]">#FurniroFurniture</h2>
      </div>


      <div className='flex gap-[16px]'>
        <div className='flex flex-col gap-[16px]'>
            <div className='flex gap-[16px]'>
                <img src={one} className='h-[382px]'/>
                <img src={two} className='w-[451px] h-[312px] self-end'/>
            </div>
            <div className='flex gap-[16px]'>
                <img src={three} className='h-[323px]'/>
                <img src={four} className='w-[344px] h-[242px]'/>
            </div>
        </div>

        <img src={five} className='w-[295px] h-[392px] self-center'/>

        <div className='flex flex-col gap-[16px]'>
            <div className='flex gap-[16px]'>
                <img src={six} className='w-[290px] h-[348px] self-end'/>
                <img src={seven} className='h-[433px]'/>
            </div>
            <div className='flex gap-[16px]'>
                <img src={eight} className='w-[178px] h-[242px]'/>
                <img src={nine} className='w-[258px] h-[196px]'/>
            </div>
        </div>


      </div>
    </div>
  )
}

export default Section5
