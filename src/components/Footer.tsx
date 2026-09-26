import { Separator } from '@/components/ui/separator'
import Logo from '../assets/logo.png'


function Footer() {
  return (
    <div className='flex flex-col w-full relative bottom-0 h-auto bg-[#0D0D0D] items-center'>
      <div className="mx-5 grow flex flex-row font-ubuntu mt-5 text-white items-center">
        <img src={Logo} className='w-15 h-15'></img>
        <p className="text-left text-xl tracking-widest -translate-x-2">DIVERGE</p>
      </div>
      <div className='flex flex-row mt-4'>
        <div className="w-full flex flex-row-reverse gap-50">
          <div className="flex flex-col text-left text-white font-ubuntu-mono mb-auto mr-5">
            <h2 className='font-extrabold text-md'>Additional Info</h2>
            <ul className="font-[0] mt-5">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>FAQs</li>
              <li>Help & Support</li>
            </ul>
          </div>
          <div className="flex flex-col text-left text-white font-ubuntu-mono mb-auto mr-5">
            <h2 className='font-extrabold text-md'>Services</h2>
            <ul className="font-[0] mt-5">
              <li>Fiber 50 Mbps</li>
              <li>Diverge Netflix</li>
              <li>Super FiberX</li>
            </ul>
          </div>
          <div className="flex flex-col text-left text-white font-ubuntu-mono mb-auto mr-5">
            <h2 className='font-extrabold text-md'>Contact Information</h2>
            <ul className="font-[0] mt-5">
              <li>diverge.support@gmail.com</li>
              <li>Terms & Conditions</li>
              <li>FAQs</li>
              <li>Help & Support</li>
            </ul>
          </div>
          <div className="flex flex-col text-left text-white font-ubuntu-mono mb-auto mr-5">
            <h2 className='font-extrabold text-md'>Quick Links</h2>
            <ul className="font-[0] mt-5">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Plans</li>
            </ul>
          </div>

        </div>
      </div>
      
      <Separator className="w-[90vw] bg-white/40 mx-5 mt-5"/>

      <p className="font-ubuntu text-xs text-white my-5">&copy; 2026 Diverge. All rights reserved</p>
    </div>
  )

}
export default Footer
