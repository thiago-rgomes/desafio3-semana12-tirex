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
}

const BillingComponent: React.FC<BillingProps> = ({ formData, onChange }) => {

  return (
    <div className="flex flex-col">
        <h1 className="font-semibold text-[36px] mb-12">Billing Details</h1>
        <div className="flex gap-[30px]">
            <InputField label="First Name" name="firstname"  value={formData.firstname} onChange={onChange} />
            <InputField label="Last Name" name="lastname"  value={formData.lastname} onChange={onChange} />
        </div>
        <InputField label="Company Name(Optional)" name="company"  value={formData.company} onChange={onChange} />
        <InputField label="ZIP code" name="zipcode" value={formData.zipcode} onChange={onChange} />
        <InputField label="Country / Region" name="country" value={formData.country} onChange={onChange} />
        <InputField label="Street address" name="street" value={formData.street} onChange={onChange} />
        <InputField label="Town / City" name="city" value={formData.city} onChange={onChange} />
        <InputField label="Province" name="province" value={formData.province} onChange={onChange} />
        <InputField label="Add-on address" name="addonAddress" value={formData.addonAddress} onChange={onChange} />
        <InputField label="Email address" name="email" value={formData.email} onChange={onChange} />
        <InputField name="aditional" placeholder="Additonal Information"  value={formData.aditional} onChange={onChange} />
      
    </div>
  )
}

export default BillingComponent




