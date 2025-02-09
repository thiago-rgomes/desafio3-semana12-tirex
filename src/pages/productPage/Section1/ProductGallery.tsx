import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`w-16 h-16 object-cover rounded cursor-pointer ${
              selectedImage === img ? "border-2 border-gray-200" : ""
            }`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
      <div className="bg-gray-100 p-4 rounded">
        <img src={selectedImage} alt="Selected product" className="w-[423px] h-[500px]" />
      </div>
    </div>
  );
};

export default ProductGallery;
