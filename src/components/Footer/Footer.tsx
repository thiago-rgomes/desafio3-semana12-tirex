import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const twitterIcon = "https://first-aws-bucket-tirex.s3.us-east-2.amazonaws.com/First-S3/src/assets/footer/twitter-icon.png";
const linkedinIcon = "https://first-aws-bucket-tirex.s3.us-east-2.amazonaws.com/First-S3/src/assets/footer/linkedin-icon.png";
const instagramIcon = "https://first-aws-bucket-tirex.s3.us-east-2.amazonaws.com/First-S3/src/assets/footer/instagram-icon.png";
const faceBookIcon = "https://first-aws-bucket-tirex.s3.us-east-2.amazonaws.com/First-S3/src/assets/footer/facebook-icon.png";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError(null);
      console.log("Email submitted:", email);
    }
  };

  return (
    <footer className="w-full px-4 md:px-[100px] pt-8 md:pt-[48px] pb-6 md:pb-[38px] border-t-2">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0 text-center md:text-left items-center md:items-start">
        <div className="flex flex-col gap-6 md:gap-[50px] items-center md:items-start">
          <h2 className="font-bold text-2xl md:text-[24px]">Furniro.</h2>
          <p className="text-sm md:text-base text-[#9F9F9F]">
            400 University Drive Suite 200 Coral <br /> Gables,<br /> FL 33134 USA
          </p>

          {isHomePage && (
            <div className="flex justify-between w-[184px] h-[34px]">
              <a href="https://www.facebook.com">
                <div className="flex justify-center items-center w-[34px] h-[34px] rounded-full shadow-lg">
                  <img src={faceBookIcon} className="w-[12px] h-[12px]" alt="facebook icon" />
                </div>
              </a>
              <a href="https://www.instagram.com">
                <div className="flex justify-center items-center w-[34px] h-[34px] rounded-full shadow-lg">
                  <img src={instagramIcon} className="w-[12px] h-[12px]" alt="instagram icon" />
                </div>
              </a>
              <a href="https://www.twitter.com">
                <div className="flex justify-center items-center w-[34px] h-[34px] rounded-full shadow-lg">
                  <img src={twitterIcon} className="w-[12px] h-[12px]" alt="twitter icon" />
                </div>
              </a>
              <a href="https://www.linkedin.com">
                <div className="flex justify-center items-center w-[34px] h-[34px] rounded-full shadow-lg">
                  <img src={linkedinIcon} className="w-[12px] h-[12px]" alt="linkedin icon" />
                </div>
              </a>
            </div>
          )}
        </div>

        <div className="flex flex-col font-medium items-center md:items-start">
          <h3 className="text-[#9F9F9F] mb-4 md:mb-[55px]">Links</h3>
          <ul className="flex flex-col gap-4 md:gap-[46px]">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="">About</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </div>

        <div className="font-medium text-center md:text-left">
          <h3 className="text-[#9F9F9F] mb-4 md:mb-[55px]">Help</h3>
          <ul className="flex flex-col gap-4 md:gap-[46px]">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-medium text-[#9F9F9F] mb-4 md:mb-[55px]">Newsletter</h3>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 md:gap-0 items-center md:items-start">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-sm md:text-[14px] border-b-2 border-black md:mr-[10px] p-[5px] w-full md:w-auto md:pb-[2px]"
            />
            <button type="submit" className="font-medium text-sm md:text-[14px] border-b-2 border-black md:self-end">
              SUBSCRIBE
            </button>
          </form>
          {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
        </div>
      </div>

      <hr className="my-4" />

      <p className="text-center md:text-left">2023 Funiro. All rights reserved</p>
    </footer>
  );
};

export default Footer;