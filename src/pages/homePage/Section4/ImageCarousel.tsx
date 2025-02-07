import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { ArrowRight } from "lucide-react";

const images = [
  { id: 1, src: "/src/assets/homepage/section4/img1.png", title: "Inner Peace", category: "Bed Room" },
  { id: 2, src: "/src/assets/homepage/section4/img2.png", title: "Cozy Vibes", category: "Living Room" },
  { id: 3, src: "/src/assets/homepage/section4/img3.png", title: "Minimalist", category: "Dining Room" },
  { id: 4, src: "/src/assets/homepage/section4/img1.png", title: "Great Style", category: "Workspace" },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-[1400px]  mx-auto px-4">
      <Splide
        options={{
          type: "slide",
          perPage: 3, 
          perMove: 1, 
          gap: "1rem",
          pagination: true,
          arrows: true,
          focus: "center",
          trimSpace: false, 
          breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1 },
          },
        }}
        onMove={(splide) => setActiveIndex(splide.index)}
      >
        {images.map((image, index) => (
          <SplideSlide key={image.id}>
            <div className={`relative group z-15 transition-all duration-300 ${index === activeIndex ? "scale-105" : "scale-95"}`}>
              <img src={image.src} alt={image.title} className="min-w-[200px] h-[582px]" />
                           
              {index === activeIndex && (
                <div className="absolute flex flex-col justify-center w-[217px] h-[130px] bottom-4 left-4 bg-white opacity-70 p-3 shadow-md">
                  <span className="text-[#616161]">{`0${index + 1} — ${image.category}`}</span>
                  <h3 className="font-semibold text-[28px]">{image.title}</h3>

                  <button className="absolute right-[-40px] bottom-[20px] translate-y-1/2 bg-yellow-600 p-3 shadow-md">
                    <ArrowRight size={16} className="text-white" />
                  </button>
                </div>
              )}
            </div>
          </SplideSlide>
        ))}
        <style>{".splide__arrow--prev { display: none !important; }"}</style>
      </Splide>
    </div>
  );
}
