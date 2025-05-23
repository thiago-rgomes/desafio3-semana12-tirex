
interface InputFieldProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  maxlength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextarea?: boolean;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type = "text", placeholder, value, maxlength, onChange, isTextarea = false, error }) => {
  return (
    <div className="flex flex-col gap-5">
      <label className="font-medium text-black">{label}</label>
      {isTextarea ? (
        <textarea
          name={name}
          className="min-h-[75px] max-h-[300px] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 pl-7 mb-7"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={4}
        />
      ) : (
        <input
          name={name}
          type={type}
          className=" h-[50px] md:min-h-[75px] border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500 pl-7 mb-5 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          placeholder={placeholder}
          value={value}
          maxLength={maxlength}
          onChange={onChange}
        />
      )}
      {error && <p className="text-red-500 text-xs mt-[-30px]">{error}</p>}
    </div>
  );
};

export default InputField;
