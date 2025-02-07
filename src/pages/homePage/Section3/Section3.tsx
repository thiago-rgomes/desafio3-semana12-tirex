import ProductList from "./ProductList"


const Section3 = () => {
  return (
    <div className="w-full min-h-[1084px] flex flex-col items-center mb-[32px]">
        <h2 className="text-center font-bold text-[40px] text-[#3A3A3A] mb-[32px]">Our Products</h2>

        <ProductList></ProductList>

        <button className="w-[245px] h-[48px] font-semibold text-[#B88E2F] border border-[#B88E2F] mt-[32px]">Show More</button>
      
    </div>
  )
}

export default Section3
