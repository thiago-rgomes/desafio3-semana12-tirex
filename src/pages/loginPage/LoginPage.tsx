import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import { useLogin } from "../../hooks/useLogin";
import LoginForm from "./LoginForm";
import highLightBg from "../../assets/highlight/highlight-bg.png";
import { useLocation } from "react-router-dom";


const Login = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const fromCartModal = searchParams.get("fromCartModal") === "true";

  const email = useInput("");
  const password = useInput("");
  const { login, loading, error } = useLogin();
  const [isChecked, setIsChecked] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.value) {
      email.setError("Email required");
      return;
    }

    if (!password.value) {
      password.setError("Password required");
      return;
    } else if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,20}$/.test(
        password.value
      )
    ) {
      password.setError(
        "The password must contain at least 8 characters, one uppercase letter, and one special character"
      );
      return;
    }

    login(email.value, password.value, fromCartModal);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex justify-center items-center lg:h-[500px] bg-gray-100 p-4">
      <div className="flex flex-col lg:flex-row lg:h-[500px] w-full">
        
        <div
          className="relative rounded-lg w-full lg:w-1/2 h-[500px] lg:h-auto flex items-center justify-center"
          style={{
            backgroundImage: `url(${highLightBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 flex justify-center items-center flex-col text-white p-4">
            <h1 className="text-4xl font-bold text-center">
              Welcome to <span className="text-[#eab63e]">login</span>
            </h1>
            <p className="mt-2 text-center">Don't have an account?</p>
            <button className="flex justify-center items-center rounded-xl border border-[#B88E2F] text-white px-4 py-2 mt-4 hover:bg-[#B88E2F] transition">
              Sign Up
            </button>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg w-full lg:w-1/2 flex-shrink-0">
          <h2 className="text-xl font-semibold mb-4 text-[#B88E2F]">Login</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <LoginForm
              id="Email"
              label="Email"
              type="email"
              value={email.value}
              placeholder="Username"
              onChange={email.onChange}
              error={email.error}
            />
            <LoginForm
              id="Password"
              label="Password"
              type="password"
              value={password.value}
              placeholder="Password"
              onChange={password.onChange}
              error={password.error}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="flex w-full justify-center items-center text-[#B88E2F] border border-[#B88E2F] p-2 rounded-md hover:bg-[#fffcf5] transition disabled:bg-gray-400 mt-2"
              disabled={loading}
            >
              {loading ? "Loading..." : "Enter"}
            </button>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className={`accent-[#B88E2F] ${isChecked ? 'opacity-100' : 'opacity-50'}`}
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className={`${isChecked ? 'text-[#B88E2F]' : 'text-gray-700'}`}>
                  Remember Me
                </span>
              </label>
              <p className="text-gray-600">Forgot Password?</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;