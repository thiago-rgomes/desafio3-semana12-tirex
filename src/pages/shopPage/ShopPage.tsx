import { useState } from "react";
import HighLightSection from "../../components/HighLight/HighLightSection";
import QualitySection from "../../components/Quality/QualitySection";
import filterIcon from "../../assets/shoppage/filter-icon.png";
import gridIcon from "../../assets/shoppage/grid-icon.png";
import listIcon from "../../assets/shoppage/view-list-icon.png";
import ProductList from "../homePage/Section3/ProductList";

const ShopPage = () => {
  const [itemsToShow, setItemsToShow] = useState(16);

  
  const handleItemsToShowChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    setItemsToShow(value);
  };

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
          <p className="text-[20px]">Showing 1–{itemsToShow} of 32 results</p>
        </div>

        <div className="flex gap-[30px]">
          <div className="flex items-center text-[20px] gap-[17px]">
            <label htmlFor="show">Show</label>
            <select
              name="show"
              value={itemsToShow}
              onChange={handleItemsToShowChange} 
              className="flex w-[85px] h-[55px] text-[#9F9F9F] text-center"
            >
              <option value={4}>4</option>
              <option value={8}>8</option>
              <option value={16}>16</option>
              <option value={32}>32</option>
            </select>
          </div>

          <div className="flex items-center text-[20px] gap-[17px]">
            <label htmlFor="sortby">Sort by</label>
            <input
              name="sortby"
              type="text"
              value="Default"
              placeholder="Default"
              className="w-[188px] h-[55px] text-[#9F9F9F] text-center"
            />
          </div>
        </div>
      </div>

      <div className="w-full min-h-[1084px] flex flex-col items-center py-[60px] mb-[32px]">
        <ProductList itemsToShow={itemsToShow} />
      </div>

      <QualitySection />
    </div>
  );
};

export default ShopPage;
