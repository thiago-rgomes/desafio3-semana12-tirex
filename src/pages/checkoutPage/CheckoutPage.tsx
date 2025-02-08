import React, { useState } from "react";
import BillingComponent from "./BillingComponent";
import SummaryComponent from "./SummaryComponent";
import HighLightSection from "../../components/HighLight/HighLightSection";
import QualitySection from "../../components/Quality/QualitySection";

const CheckoutPage: React.FC = () => {
  const [formData, setFormData] = useState({
      firstname: "",
      lastname: "",
      company: "",
      zipcode: "",
      country: "",
      street: "",
      city: "",
      province: "",
      addonAddress: "",
      email: "",
      aditional: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
      console.log("Enviando os dados do formulário:", formData);        
  };

  return (
      <div>
        <HighLightSection pageTitle="checkout"></HighLightSection>

        <div className="flex justify-center gap-[160px] py-[100px]">          
          <BillingComponent formData={formData} onChange={handleChange} />
          <SummaryComponent onSubmit={handleSubmit} />
        </div>

        <QualitySection></QualitySection>
          
      </div>
  );
};

export default CheckoutPage;



