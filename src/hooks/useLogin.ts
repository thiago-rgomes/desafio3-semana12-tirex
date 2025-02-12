import { useSignIn, useClerk } from "@clerk/clerk-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { signIn, setActive } = useSignIn();
  const { session } = useClerk();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (email: string, password: string, fromCartModal: boolean = false) => {
    if (!signIn) return;

    setLoading(true);
    setError("");

    try {
      const result = await signIn.create({ identifier: email, password });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });

        if (fromCartModal) {
          navigate("/checkout");
        } else {
          navigate("/");  
        }
      }
    } catch (err: any) {
      setError(err.errors[0]?.message || "Error trying to login");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};