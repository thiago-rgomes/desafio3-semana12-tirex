import HighLightSection from "../../components/HighLight/HighLightSection"
import QualitySection from "../../components/Quality/QualitySection"
import filterIcon from "../../assets/shoppage/filter-icon.png"
import gridIcon from "../../assets/shoppage/grid-icon.png"
import listIcon from "../../assets/shoppage/view-list-icon.png"
import ProductList from "../homePage/Section3/ProductList"

const ShopPage = () => {
  return (
    <div>
      <HighLightSection pageTitle="Shop"></HighLightSection>
      <div className="flex justify-between items-center w-full h-[100px] bg-[#F9F1E7] px-[100px]">
        <div className="flex items-center gap-8">
          <img src={filterIcon} alt="filter icon" className="h-[25px] w-[25px]" />
          <p className="ml-[-10px]">Filter</p>
          <img src={gridIcon} alt="grid icon" className="h-[25px] w-[25px]" />
          <img src={listIcon} alt="list icon" className="h-[25px] w-[25px]" />
          <div className="w-[2px] h-10 bg-[#9F9F9F] mx-4"></div>
          <p className="text-[20px]">Showing 1–16 of 32 results</p>
        </div>

        <div className="flex gap-[30px]">
          <div className="flex items-center text-[20px] gap-[17px]">
            <label htmlFor="show">Show</label>
            <input
            name="show" 
            type="number"
            value="16"
            placeholder="16"
            className="flex w-[55px] h-[55px] text-[#9F9F9F] text-center" />
          </div>

          <div className="flex items-center text-[20px] gap-[17px]">
            <label htmlFor="sortby">Sort by</label>
            <input
            name="sortby" 
            type="text"
            value="Default"
            placeholder="Default"
            className="w-[188px] h-[55px] text-[#9F9F9F] text-center" />
          </div>
        </div>
      </div>

      <div className="w-full min-h-[1084px] flex flex-col items-center py-[60px] mb-[32px]">
        <ProductList itemsToShow={16}></ProductList>
        <div className="flex justify-center items-center text-[20px] gap-[38px] mt-[70px]">
          <button className="w-[60px] h-[60px] bg-[#F9F1E7]">1</button>
          <button className="w-[60px] h-[60px] bg-[#F9F1E7]">2</button>
          <button className="w-[60px] h-[60px] bg-[#F9F1E7]">3</button>
          <button className="w-[98px] h-[60px] bg-[#F9F1E7]">Next</button>
        </div>
      </div>


      <QualitySection></QualitySection>
    </div>
  )
}

export default ShopPage
