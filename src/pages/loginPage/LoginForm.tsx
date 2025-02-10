import React from 'react'

interface LoginFormProps {
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}

const LoginForm: React.FC<LoginFormProps> = ({ label, type, value, onChange, error }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`p-2 border text-gray-600 ${error ? 'border-red-500' : 'border-gray-300'} rounded`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  )
}

export default LoginForm
