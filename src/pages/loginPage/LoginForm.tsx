import React from 'react'

interface LoginFormProps {
  id: string
  label: string
  type: string
  value: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

const LoginForm: React.FC<LoginFormProps> = ({ id, label, type, value, placeholder, onChange, error }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium">{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`p-2 pl-6 border rounded-xl text-gray-600 bg-gray-50 ${error ? 'border-red-500' : 'border-gray-300'} focus:border-[#B88E2F] focus:outline-none `}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  )
}

export default LoginForm
