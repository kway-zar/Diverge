
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { useNavigate } from "react-router-dom"
import logo from "@/assets/logo.png"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

const DEMO_ACCOUNTS: Array<{
  label: string
  email: string
  password: string
  role: string
}> = [
  {
    label: "Customer - Jonathan",
    email: "jonathan@example.com",
    password: "seed-password",
    role: "CUSTOMER",
  },
  {
    label: "Customer - Guiller",
    email: "guiller.delaCruz@example.com",
    password: "seed-password",
    role: "CUSTOMER",
  },
  {
    label: "Customer - Vanna",
    email: "vanna.banana@example.com",
    password: "seed-password",
    role: "CUSTOMER",
  },
  {
    label: "Technician",
    email: "tech@diverge.com",
    password: "seed-password",
    role: "TECHNICIAN",
  },
  {
    label: "Admin",
    email: "admin@diverge.com",
    password: "seed-password",
    role: "ADMIN",
  },
]

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4001"

function LoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState<string>(DEMO_ACCOUNTS[0].email)
  const [password, setPassword] = useState<string>(DEMO_ACCOUNTS[0].password)
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const payload = await response.json().catch(() => ({ message: "Login failed" }))

      if (!response.ok) {
        throw new Error(payload?.message ?? "Invalid email or password")
      }

      localStorage.setItem("diverge_token", payload.token)
      localStorage.setItem("diverge_user", JSON.stringify(payload.user))

      const role = payload?.user?.role

      if (role === "ADMIN") {
        navigate("/admin")
        return
      }

      if (role === "TECHNICIAN") {
        navigate("/technician")
        return
      }

      navigate("/customers")
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : "Unable to sign in right now.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center to-85% p-6 font-ubuntu bg-[conic-gradient(from_180deg_at_50%_50%,_#121212,_#373535,_#121212)]"

    >
      <div className="grid w-full shadow-glassy max-w-4xl grid-cols-1 overflow-hidden rounded-3xl bg-white/20 backdrop-blur-md md:grid-cols-2"

      >

        {/* Left panel — brand / gradient */}
        <div className="relative m-4 flex flex-col justify-between rounded-[30px] shadow-glassy [--glassy-color:207_58_114] bg-gradient-to-br from-[#0C0C0C] from-30% via-[#B00049] via-66% to-[#3ACF98] to-100% p-10 md:m-10">
          <div className="flex items-center gap-0">
            <img src={logo} alt="Diverge logo" className="h-24 w-auto -ml-12 -mt-7" />
            <span className="text-2xl font-light tracking-wide text-white -ml-6 -mt-10 font-['Ubuntu']">Diverge</span>
          </div>
          <p className="text-2xl font-bold  leading-snug text-white mb-[-35px] -ml-6 !text-left [text-shadow:0_4px_4px_rgba(0,0,0,0.25)] opacity-85">
            From fast to fiber, where system incompetence diverge.
          </p>
        </div>

        {/* Right panel — form */}
        <div className="flex flex-col justify-start items-start text-left p-8 pt-10 md:p-12 md:pt-14">
          <h1 className="text-6xl font-medium tracking-tight text-white text-left">
            Log In
          </h1>
          <p className="mt-2 text-neutral-300 !text-left">
            Access your Diverge account from anywhere, anytime.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 w-full space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-white/20 bg-white/20 text-white placeholder:text-white/70"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-white/20 bg-white/20 pr-10 text-white placeholder:text-white/70"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="remember" className="bg-black" defaultChecked />
              <Label htmlFor="remember" className="text-xs font-normal text-neutral-200">
                Remember me
              </Label>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-white/80">Demo accounts</Label>
              <div className="flex flex-wrap gap-2">
                {DEMO_ACCOUNTS.map((account) => (
                  <button
                    key={account.email}
                    type="button"
                    onClick={() => {
                      setEmail(account.email)
                      setPassword(account.password)
                    }}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80 transition hover:border-emerald-400/60 hover:text-white"
                  >
                    {account.label}
                  </button>
                ))}
              </div>
            </div>

            {error ? (
              <p className="rounded-md border border-red-400/50 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                {error}
              </p>
            ) : null}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-70 bg-emerald-800 py-6 text-base text-white hover:bg-emerald-900 ml-11 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage



