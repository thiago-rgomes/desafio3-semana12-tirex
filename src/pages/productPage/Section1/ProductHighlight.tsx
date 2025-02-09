import gtIcon from "../../../assets/highlight/gt-icon.png"

interface ProductHighlightProps {
    title: string;
}

const ProductHighlight = ({title}: ProductHighlightProps) => {
  return (
    <div className="flex items-center w-full h-[100px] bg-[#F9F1E7] px-[100px] gap-[30px]">
        <p className="text-[#9F9F9F]">Home</p>
        <img src={gtIcon} alt="greater-than icon" />
        <p className="text-[#9F9F9F]">Shop</p>
        <img src={gtIcon} alt="greater-than icon" />
        <div className="w-[2px] h-10 bg-[#9F9F9F]"></div>
        <p>{title}</p>

      
    </div>
  )
}

export default ProductHighlight
