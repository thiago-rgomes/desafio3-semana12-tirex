import React, { useState } from "react";
import InformationComponent from "./InformationComponent";
import InputField from "./InputComponents";
import locationIcon from "../../assets/contactpage/location-icon.png";
import phoneIcon from "../../assets/contactpage/phone-icon.png";
import clockIcon from "../../assets/contactpage/clock-icon.png";

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name:"",
        email: "",
        subject: "",
        message: "",
    });
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };


  return (
    <div className="flex flex-col items-center w-full px-[190px] pt-[100px]">
        <div className="flex flex-col items-center gap-[7px]">
            <h2 className="text-[36px] font-semibold">Get In Touch With Us</h2>
            <p className="text-[#9F9F9F] text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>

        <div className="flex py-[100px] gap-[50px]">
            
            <div className="max-w-sm mx-auto bg-white p-4">
                <InformationComponent imgSrc={locationIcon} title="Address">
                    <p>236 5th SE Avenue, New York NY10000, United States</p>
                </InformationComponent>

                <InformationComponent imgSrc={phoneIcon} title="Phone">
                    <p>Mobile: +(84) 546-6789</p>
                    <p>Hotline: +(84) 456-6789</p>
                </InformationComponent>

                <InformationComponent imgSrc={clockIcon} title="Working Time">
                    <p>Monday-Friday: 9:00 - 22:00</p>
                    <p>Saturday-Sunday: 9:00 - 21:00</p>
                </InformationComponent>
            </div>


            <div className="min-w-[635px] mx-auto p-6 bg-white">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <InputField label="Your name" name="name" placeholder="Abc" value={formData.name} onChange={handleChange} />
                    <InputField label="Email address" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                    <InputField label="Subject" name="subject" placeholder="This is optional" value={formData.subject} onChange={handleChange} />
                    <InputField label="Message" name="message" placeholder="Hi! I’d like to ask about" value={formData.message} onChange={handleChange} isTextarea />

                    <button type="submit" className="min-w-[237px] min-h-[55px] bg-[#B88E2F] text-white py-2 rounded-lg hover:bg-yellow-700">Submit</button>
                </form>
            </div>
        </div>


      
    </div>
  )
}

export default ContactSection
