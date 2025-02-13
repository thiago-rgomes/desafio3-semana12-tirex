import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const thumbnails = images.filter((img) => img !== selectedImage);

  return (
    <div className="flex justify-center gap-4 md:justify-start">
      <div className="flex flex-col gap-[32px]">
        {thumbnails.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className="w-[76px] h-[80px] object-cover rounded-lg cursor-pointer bg-[#F9F1E7] p-2"
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
      <div className="w-[423px] h-[500px] bg-[#F9F1E7] p-4 rounded-lg flex items-center justify-center">
        <img
          src={selectedImage}
          alt="Selected product"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default ProductGallery;