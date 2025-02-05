import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom"
import faceBookIcon from "../../assets/footer/facebook-icon.png"
import instagramIcon from "../../assets/footer/instagram-icon.png"
import twitterIcon from "../../assets/footer/twitter-icon.png"
import linkedinIcon from "../../assets/footer/linkedin-icon.png"

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className="w-full h-[505px] px-[100px] pt-[48px] pb-[38px]">
      <div className="flex justify-between h-[380px] ">
        
        <div className="flex flex-col gap-[50px]">
          <h2 className="font-bold text-[24px]">Furniro.</h2>
          <p className="text-base text-[#9F9F9F]">400 University Drive Suite 200 Coral <br /> Gables,<br /> FL 33134 USA</p>
          
          {isHomePage && (
            <div className="flex justify-between w-[184px] h-[34px]">
              <a href="https://www.facebook.com"><div className="flex justify-center items-center w-[34px] h-[34px] rounded-full shadow-lg"><img src={faceBookIcon} className="[12px] h-[12px]" alt="facebook icon" /></div></a>
              <a href="https://www.instagram.com"><div className="flex justify-center items-center w-[34px] h-[34px] rounded-full shadow-lg"><img src={instagramIcon} className="[12px] h-[12px]" alt="facebook icon" /></div></a>
              <a href="https://www.twitter.com"><div className="flex justify-center items-center w-[34px] h-[34px] rounded-full shadow-lg"><img src={twitterIcon} className="[12px] h-[12px]" alt="facebook icon" /></div></a>
              <a href="https://www.linkedin.com"><div className="flex justify-center items-center w-[34px] h-[34px] rounded-full shadow-lg"><img src={linkedinIcon} className="[12px] h-[12px]" alt="facebook icon" /></div></a>
            </div>
          )}
        </div>

        <div className="flex flex-col font-medium">
          <h3 className="text-[#9F9F9F] mb-[55px]">Links</h3>
          <ul className="flex flex-col gap-[46px]">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="">About</Link>
            <Link to="/contact">Contact</Link> 
          </ul>
        </div>

        <div className="font-medium">
          <h3 className="text-[#9F9F9F] mb-[55px]">Help</h3>
          <ul className="flex flex-col gap-[46px]">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-[#9F9F9F] mb-[55px]">Newsletter</h3>
          <input type="email" placeholder="Enter Your Email Address" className="text-[14px] border-b-2 border-black mr-[10px]"/>
          <button className="font-medium text-[14px] border-b-2 border-black">SUBSCRIBE</button>
        </div>
      </div>

      <hr className="my-4" />

      <p>2023 Funiro. All rights reserved</p>
    </footer>
  );
};

export default Footer;
