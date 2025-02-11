import { useInput } from "../../hooks/useInput"
import { useLogin } from "../../hooks/useLogin"
import LoginForm from "./LoginForm"

const Login = () => {
  const email = useInput("")
  const password = useInput("")
  const { login, loading, error } = useLogin()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.value) {
      email.setError("Email required")
      return
    } 

    if (!password.value) {
      password.setError("Password required")
      return
    } else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,20}$/.test(password.value)) {
      password.setError("The password must contain at least 8 characters, one uppercase letter, and one special character")
      return
    }

    login(email.value, password.value)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[450px] h-[350px]">
        <h2 className="text-xl font-semibold text-center mb-4 text-[#B88E2F]">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <LoginForm label="Email" type="email" value={email.value} onChange={email.onChange} error={email.error} />
          <LoginForm label="Password" type="password" value={password.value} onChange={password.onChange} error={password.error} />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="flex w-full justify-center items-center text-[#B88E2F] border border-[#B88E2F] p-2 rounded hover:bg-[#fffcf5] transition disabled:bg-gray-400 mt-2"
            disabled={loading}
          >
            {loading ? "Carregando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
