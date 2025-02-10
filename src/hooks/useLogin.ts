import { useSignIn } from "@clerk/clerk-react"
import { useState } from "react"

export const useLogin = () => {
  const { signIn, isLoaded } = useSignIn()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const login = async (email: string, password: string) => {
    if (!isLoaded) return

    setLoading(true)
    setError("")

    try {
      await signIn.create({ identifier: email, password })
      window.location.href = "/"
    } catch (err: any) {
      setError(err.errors[0]?.message || "Error trying to login")
    } finally {
      setLoading(false)
    }
  }

  return { login, loading, error }
}
