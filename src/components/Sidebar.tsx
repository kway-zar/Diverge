
import {
  Sidebar,
  SidebarProvider,
  SidebarGroup,
  SidebarContent,
  SidebarTrigger,
  SidebarFooter,

} from '../components/ui/sidebar'

import { useState } from 'react'
interface SidebarProps {
  items: string[];
  getCurrentState: (data: string) => void;

}


function SidebarApp({ items, getCurrentState }: SidebarProps) {

  const [activeItem, setActiveItem] = useState(items[0]);
  return (
    <>
      <SidebarProvider className="w-max">
        <Sidebar variant="floating" className="h-max my-auto lg:mt-20 mb-10 ml-5">
          <SidebarContent className='gap-2 bg-[#393939] rounded-t-xl inset-shadow-white inset-shadow-xs text-white backdrop-blur-md pt-4'>
            {items.map((item) => {
              const isActive = activeItem === item;
              return (
                <SidebarGroup key={item} onClick={() => getCurrentState(item)}>
                  <div
                    onClick={() => { setActiveItem(item); }}
                    className={`w-[90%] mx-auto p-[2px] md:p-[15px] text-xs lg:text-base text-left cursor-pointer ${isActive ? " transition ease-in bg-[rgba(217,217,217,0.4)] rounded-lg border-white/40 border-1 backdrop-blur-md" : ""}`}>
                    {item}

                  </div>
                </SidebarGroup>

              )

            })}
          </SidebarContent>
          <SidebarFooter className="backdrop-brightness-50 bg-neutral-600/20 w-full rounded-b-xl text-white relative bottom-0 border-t-1 border-white/40 backdrop-blur-md flex-row py-3 pb-5 items-center">
            <div className="w-10 h-10 rounded-full bg-white"></div>
            <div className="flex flex-col text-left">
              <span>Name</span>
              <span className="text-gray-400 text-xs">email@email.com</span>
            </div>
            <i className="fa-solid fa-arrow-right-from-bracket fa-lg ml-auto"></i>
          </SidebarFooter>
        </Sidebar>
        <main>
          <SidebarTrigger
            className="h-full pl-20 text-transparent" />
        </main>
      </SidebarProvider>
    </>

  )

}
export default SidebarApp
