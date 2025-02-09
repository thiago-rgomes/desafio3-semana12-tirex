import fbIcon from "../../../assets/productpage/facebook-icon.png"
import linkedinIcon from "../../../assets/productpage/linkedin-icon.png"
import twitterIcon from "../../../assets/productpage/twitter-icon.png"


interface ProductMetaProps {
    sku: string;
    category: string;
    tags: string[];
  }
  
  const ProductMeta: React.FC<ProductMetaProps> = ({ sku, category, tags }) => {
    return (
      <div className="mt-12 text-[#9F9F9F] pt-[40px] border-t-2">
        <div className="flex"><p className="w-[100px]">SKU </p> <p>:<span className="ml-2">{sku}</span></p> </div>
        <div className="flex"><p className="w-[100px]">Category </p> <p>:<span className="ml-2">{category}</span></p> </div>
        <div className="flex"><p className="w-[100px]">Tags </p> <p>:<span className="ml-2">{tags.join(", ")}</span></p> </div>
        <div className="flex gap-6 mt-2">
          
          <p className="w-[76px]">Share</p> <span>:</span>
          <img src={fbIcon} alt="facebook icon" className="w-[20px] h-[20px] cursor-pointer" />
          <img src={linkedinIcon} alt="facebook icon" className="w-[20px] h-[20px] cursor-pointer" />
          <img src={twitterIcon} alt="facebook icon" className="w-[20px] h-[20px] cursor-pointer" />

        </div>
      </div>
    );
  };
  
  export default ProductMeta;
  