
import { Card } from '@/components/ui/card'
import logo from '@/assets/logo.png'
function Navbar() {
  return (

    <Card className="absolute rounded-none sticky top-0 ring-0 flex flex-row">
      <div className="ml-10">
        <img src={logo} className='h-18 w-18 translate-x-5' />
      </div>
      <div className="flex flex-col items-start text-left">
        <span className="text-white text-lg font-thin font-ubuntu">Diverge</span>
        <span className="text-white font-thin"><i>Admin</i></span>
      </div>

      
      <div className="absolute w-20 right-0">
        lol
        {
          //TODO: add the uptime and notif icon

        }  
      </div>

    </Card>

  )
}

export default Navbar
