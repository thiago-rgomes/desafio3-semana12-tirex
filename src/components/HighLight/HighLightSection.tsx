import siteLogo from "../../assets/header/site-logo.png";
import highLightBg from "../../assets/highlight/highlight-bg.png";
import gtIcon from "../../assets/highlight/gt-icon.png";

const HighLightSection = ({ pageTitle }: { pageTitle: string }) => {
    return (
      <div className="relative w-full h-[316px]">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url(${highLightBg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: 0.5,
            filter: 'blur(3px)',
            zIndex: -1,
          }}
        />
        <div className="relative z-10 flex justify-center items-center w-full h-full flex-col">
          <img src={siteLogo} alt="site logo" />
          <h1 className="text-[48px] font-medium">{pageTitle}</h1>
          <p className="flex items-center font-medium">
            Home 
            <img src={gtIcon} alt="Icon" className="ml-2" /> 
            <span className="ml-2 font-normal">{pageTitle}</span>
          </p>
        </div>
      </div>
    );
  };
  
  export default HighLightSection;
  
  
  
