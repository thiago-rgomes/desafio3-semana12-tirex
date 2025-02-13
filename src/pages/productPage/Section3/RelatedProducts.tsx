import ProductList from "../../homePage/Section3/ProductList";

const RelatedProducts = () => {
    return (
        <div className="flex flex-col items-center w-full px-4 md:px-[100px] py-[55px] gap-8 md:gap-[56px]">

            <p className="font-medium text-2xl md:text-[36px]">Related Products</p>

            <ProductList itemsToShow={4} />

            <button className="flex justify-center items-center w-[245px] h-[48px] font-semibold text-[#B88E2F] border border-[#B88E2F]">
                Show more
            </button>

        </div>
    );
};

export default RelatedProducts;