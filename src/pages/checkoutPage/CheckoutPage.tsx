import React, { useState } from "react";
import BillingComponent from "./BillingComponent";
import SummaryComponent from "./SummaryComponent";
import HighLightSection from "../../components/HighLight/HighLightSection";
import QualitySection from "../../components/Quality/QualitySection";
import { CheckoutValidation } from "./CheckoutValidation";

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

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    zipcode: "",
    country: "",
    street: "",
    city: "",
    province: "",
    addonAddress: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { isValid, newErrors } = CheckoutValidation(formData);
    if (isValid) {
      console.log(formData);
      // future API
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <HighLightSection pageTitle="Checkout" />

      <div className="flex justify-center gap-[160px] py-[100px]">
        <BillingComponent formData={formData} onChange={handleChange} errors={errors} />
        <SummaryComponent onSubmit={handleSubmit} />
      </div>

      <QualitySection />
    </div>
  );
};

export default CheckoutPage;
