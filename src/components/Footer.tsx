import LinkedinFillIcon from '@iconify-react/akar-icons/linkedin-box-fill'
import FacebookFillIcon from '@iconify-react/akar-icons/facebook-fill'
import GoogleFillIcon from '@iconify-react/devicon/google'
import TwitterFillIcon from '@iconify-react/akar-icons/x-fill'

function Footer() {
  return (
    <div className='flex flex-col w-full relative bottom-0 h-auto bg-[#0D0D0D]'>
      <div className='flex flex-row mt-4'>
        <div className="mx-5 grow flex flex-col font-ubuntu text-white">
          <h1 className="text-8xl text-left tracking-widest font-ubuntu-mono text-shadow-[5px_6px_3px_rgb(255_255_255_/_0.25)]">DIVERGE</h1>
          <p className="text-left text-xl">From fast to fiber, Where system incompetence diverge. </p>
        </div>
        <div className="w-[80vw] flex flex-row-reverse gap-8">
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
            <h2 className='font-extrabold text-md'>Additional Info</h2>
            <ul className="font-[0] mt-5">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>FAQs</li>
              <li>Help & Support</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="w-max mt-5 flex flex-row gap-2">
        <LinkedinFillIcon className="ml-5 h-10 text-sky-700" />
        <FacebookFillIcon className="ml-5 h-10 text-blue-600" />
        <GoogleFillIcon className="ml-5 h-10" />
        <TwitterFillIcon className="ml-5 h-10 text-white" />

      </div>

      <p className="font-ubuntu text-xs text-white ">&copy; 2026 Diverge. All rights reserved</p>
    </div>
  )

}
export default Footer
