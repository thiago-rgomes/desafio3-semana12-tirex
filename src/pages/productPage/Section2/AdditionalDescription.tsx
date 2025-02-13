interface AdditionalDescriptionProps {
  additionalTitle: string;
  additionalDescription: string;
  descriptionImages: string[];
}

const AdditionalDescription = ({ additionalTitle, additionalDescription, descriptionImages }: AdditionalDescriptionProps) => {
  return (
      <div className="flex flex-col justify-center items-center px-4 md:px-[100px] py-[50px] border-y-2 border-[#D9D9D9] gap-[30px]">

          <div className="flex flex-col md:flex-row text-lg md:text-[24px] gap-4 md:gap-[130px]">
              <p className="font-medium text-center">Description</p>
              <p className="text-[#9F9F9F]">Additional Information</p>
          </div>

          <div className="flex flex-col max-w-[1026px] gap-[30px] text-[#9F9F9F]">
              <p>{additionalTitle}</p>
              <p>{additionalDescription}</p>
          </div>

          <div className="flex flex-col justify-center md:flex-row gap-[30px]">
              {descriptionImages.map((img, index) => (
                  <img
                      key={index}
                      src={img}
                      className="w-full md:w-[605px] h-auto md:h-[348px] object-cover"
                  />
              ))}
          </div>

      </div>
  );
};

export default AdditionalDescription;