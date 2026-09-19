
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import logo from "@/assets/logo.png"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
 
function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: auth API/backend
    console.log({ email, password })
  }
 
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[conic-gradient(from_180deg_at_50%_50%,_#121212,_#373535,_#121212)] p-6">
      <div className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-3xl bg-[#D9D9D933] shadow-2xl border-2 border-white/20 backdrop-blur-md md:grid-cols-2">
 
        {/* Left panel — brand / gradient */}
        <div className="relative m-4 flex flex-col justify-between rounded-[30px] border-[2px] border-[#CF3A72] bg-gradient-to-br from-[#0C0C0C] via-[#B00049] to-[#3ACF98] p-10 md:m-10">
          <div className="flex items-center gap-0">
            <img src={logo} alt="Diverge logo" className="h-24 w-auto -ml-12 -mt-7" />
            <span className="text-2xl font-light tracking-wide text-white -ml-6 -mt-10 font-['Ubuntu']">Diverge</span>
          </div>
          <p className="text-2xl font-bold  leading-snug text-white mb-[-35px] -ml-6 !text-left [text-shadow:0_4px_4px_rgba(0,0,0,0.25)]">
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
 
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
              <Checkbox id="remember" defaultChecked />
              <Label htmlFor="remember" className="text-sm font-normal text-neutral-200">
                Remember me
              </Label>
            </div>
 
            <Button
              type="submit"
              className="w-70 bg-emerald-800 py-6 text-base text-white hover:bg-emerald-900 ml-11"
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
 
export default LoginPage
 


