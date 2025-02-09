interface AdditionalDescriptionProps {
    additionalTitle: string;
    additionalDescription: string;
    descriptionImages: string[];
}

const AdditionalDescription = ({additionalTitle, additionalDescription, descriptionImages}: AdditionalDescriptionProps) => {
  return (
    <div className="flex flex-col justify-center items-center px-[100px] py-[50px] border-y-2 border-[#D9D9D9] gap-[30px]">

        <div className="flex text-[24px] gap-[130px]"><p className="font-medium">Description</p> <p className="text-[#9F9F9F]">Additional Information</p></div>

        <div className="flex flex-col max-w-[1026px] gap-[30px] text-[#9F9F9F]"> <p>{additionalTitle}</p> <p>{additionalDescription}</p></div>

        <div className="flex gap-[30px]">
            {descriptionImages.map((img, index) => (                
                <img 
                key = {index}
                src={img}
                className={"w-[605px] h-[348px]"}  />
            ))}
        </div>


    </div>
  )
}

export default AdditionalDescription
