import starIcon from "../../../assets/productpage/star-icon.png"
import halfStarIcon from "../../../assets/productpage/half-star-icon.png";

interface ProductDetailsProps {
    title: string;
    price: number;
    rating: number;
    reviews: number;
    description: string;
  }
  
  const ProductDetails: React.FC<ProductDetailsProps> = ({ title, price, rating, reviews, description }) => {

    const getStartIcons = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const starIcons = [];

        for (let i = 0; i < fullStars; i++) {
            starIcons.push(<img key={`full-${i}`} src={starIcon} alt="star" className="w-[20px] h-[20px]" />);
        }

        if (halfStar) {
            starIcons.push(<img key="half" src={halfStarIcon} alt="half-star" className="w-[20px] h-[20px]" />);
        }

        return starIcons;
    }

    return (
      <div>
        <h1 className="text-[42px]">{title}</h1>
        <p className="text-[24px] font-medium text-[#9F9F9F]">Rs. {price.toLocaleString()}</p>
        <div className="flex items-center gap-5">
          <div className="flex py-[18px] gap-[4px]">{getStartIcons(rating)}</div>
          <div className="w-[1px] h-7 bg-[#9F9F9F]"></div>
          <span className="flex items-center text-[13px] h-8 text-[#9F9F9F] ">{reviews} Customer Review</span>
        </div>
        <p className="text-[13px] text-gray-700 mt-2">{description}</p>
      </div>
    );
  };
  
  export default ProductDetails;
  