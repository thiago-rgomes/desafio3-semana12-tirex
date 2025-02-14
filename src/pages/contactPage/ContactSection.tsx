import React, { useState } from "react";
import InformationComponent from "./InformationComponent";
import InputField from "./InputComponents";

const locationIcon = "https://first-aws-bucket-tirex.s3.us-east-2.amazonaws.com/First-S3/src/assets/contactpage/location-icon.png";
const phoneIcon = "https://first-aws-bucket-tirex.s3.us-east-2.amazonaws.com/First-S3/src/assets/contactpage/phone-icon.png";
const clockIcon = "https://first-aws-bucket-tirex.s3.us-east-2.amazonaws.com/First-S3/src/assets/contactpage/clock-icon.png";

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors: any = {};
        let isValid = true;

        if (!formData.name) {
            newErrors.name = "Name is required";
            isValid = false;
        } else if (!/^[A-Za-z]+$/.test(formData.name)) {
            newErrors.name = "Name must contain only letters";
            isValid = false;
        } else if (formData.name.length < 2 || formData.name.length > 15) {
            newErrors.name = "Name must be between 2 and 15 characters";
            isValid = false;
        } 

        if (!formData.email) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
        }

        if (!formData.message) {
            newErrors.message = "Message is required";
            isValid = false;
        } else if (formData.message.length < 5 || formData.message.length > 200) {
            newErrors.message = "Message must be between 5 and 15 characters";
            isValid = false;
        } 

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log(formData);
        }
    };

    return (
        <div className="flex flex-col items-center w-full px-4 md:px-[190px] pt-[100px]">
            <div className="flex flex-col items-center gap-[7px] md:gap-4 text-center">
                <h2 className="text-2xl md:text-[36px] font-semibold">Get In Touch With Us</h2>
                <p className="text-[#9F9F9F] max-w-[685px]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>

            <div className="flex flex-col md:flex-row py-[100px] gap-[50px]">
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

                <div className="w-full md:min-w-[635px] mx-auto p-6 bg-white">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <InputField
                            label="Your name"
                            name="name"
                            placeholder="Abc"
                            value={formData.name}
                            onChange={handleChange}
                            error={errors.name}
                        />
                        <InputField
                            label="Email address"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <InputField
                            label="Subject"
                            name="subject"
                            placeholder="This is optional"
                            value={formData.subject}
                            onChange={handleChange}
                            error={errors.subject}
                        />
                        <InputField
                            label="Message"
                            name="message"
                            placeholder="Hi! I’d like to ask about"
                            value={formData.message}
                            onChange={handleChange}
                            isTextarea
                            error={errors.message}
                        />

                        <button
                            type="submit"
                            className="w-full md:min-w-[237px] min-h-[55px] bg-[#B88E2F] text-white py-2 rounded-lg hover:bg-yellow-700"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;