import React, { useState } from "react";
import axios from "axios";
import InputField from "../contactPage/InputComponents";

interface BillingProps {
  formData: {
    firstname: string;
    lastname: string;
    company: string;
    zipcode: string;
    country: string;
    street: string;
    city: string;
    province: string;
    addonAddress: string;
    email: string;
    aditional: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  errors: { [key: string]: string };
}

const BillingComponent: React.FC<BillingProps> = ({ formData, onChange, errors }) => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    province: "",
    country: "",
  });


  const [zipcodeError, setZipcodeError] = useState(""); 
  

  const handleZipcodeChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const zipcode = e.target.value;
    onChange(e); 

    setZipcodeError(""); 

    if (zipcode.length === 8) {
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${zipcode}/json/`);
        const data = response.data;

        if (data && !data.erro) {
          setAddress({
            street: data.logradouro || "",
            city: data.localidade || "",
            province: data.uf || "",
            country: "Brasil",
          });
        } else {
          setZipcodeError("CEP inválido ou não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar o CEP:", error);
        setZipcodeError("Erro ao buscar o CEP. Tente novamente.");
      }
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-semibold text-[36px] mb-12">Billing Details</h1>
      
      <div className="flex gap-[30px]">
        <div className="flex flex-col">
          <InputField label="First Name" name="firstname" value={formData.firstname} onChange={onChange} />
          {errors.firstname && <p className="text-red-500 text-sm mt-[-10px]">{errors.firstname}</p>}
        </div>
        <div className="flex flex-col">
          <InputField label="Last Name" name="lastname" value={formData.lastname} onChange={onChange} />
          {errors.lastname && <p className="text-red-500 text-sm mt-[-10px]">{errors.lastname}</p>}
        </div>
      </div>

      <InputField label="Company Name (Optional)" name="company" value={formData.company} onChange={onChange} />


      <div className="flex flex-col relative">
        <InputField label="ZIP code" name="zipcode" type="number" value={formData.zipcode} onChange={handleZipcodeChange} />
        {zipcodeError && (
          <div className="absolute top-[64px] text-gray-400 text-sm p-2 rounded-md self-end">
            {zipcodeError}
          </div>
        )}
        {errors.zipcode && <p className="text-red-500 text-sm mt-[-10px]">{errors.zipcode}</p>}
      </div>
      

      <InputField label="Country / Region" name="country" value={address.country || formData.country} onChange={onChange} />
      {errors.street && <p className="text-red-500 text-sm mt-[-10px]">{errors.country}</p>}

      <InputField label="Street address" name="street" value={address.street || formData.street} onChange={onChange} />
      {errors.street && <p className="text-red-500 text-sm mt-[-10px]">{errors.street}</p>}

      <InputField label="Town / City" name="city" value={address.city || formData.city} onChange={onChange} />
      {errors.city && <p className="text-red-500 text-sm mt-[-10px]">{errors.city}</p>}

      <InputField label="Province" name="province" value={address.province || formData.province} onChange={onChange} />
      {errors.province && <p className="text-red-500 text-sm mt-[-10px]">{errors.province}</p>}

      <InputField label="Add-on address" name="addonAddress" value={formData.addonAddress} onChange={onChange} />
      {errors.addonAddress && <p className="text-red-500 text-sm mt-[-10px]">{errors.addonAddress}</p>}

      <InputField label="Email address" name="email" value={formData.email} onChange={onChange} />
      {errors.email && <p className="text-red-500 text-sm mt-[-10px]">{errors.email}</p>}

      <InputField name="aditional" placeholder="Additional Information" value={formData.aditional} onChange={onChange} />
    </div>
  );
};

export default BillingComponent;
