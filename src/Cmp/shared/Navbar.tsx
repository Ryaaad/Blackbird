import { HiSearch } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";
import { CgMenuGridR } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import ShoppingBag from "../ShopingBag/ShopingBag";
import {OpenClose} from "../../features/Manuelle/ManSlice"
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const Navbar=()=>{
    const amount = useSelector((state:any) => state.cart.amount);
    const bagshop = useSelector((state:any) => state.man.Bagshop);
    const [Menu, setMenu] = useState(false)
  const dispatch=useDispatch()
return(
<>
<div className="py-4 hidden sm:block sm:px-8 md:px-5 lg:px-10 xl:px-20 2xl:px-32">
        <div  className="items-center flex justify-between">
            <div className="relative flex items-center gap-3 xl:gap-5 ">
              <div className="relative">
              <input type="text" className="h-9 py-1 px-4 font-semibold rounded-full border border-solid border-[#e6e3e3f2] focus:outline-0 w-48 text-sm lg:text-base lg:w-60 "  placeholder="Search..." />
          <HiSearch  className="absolute right-3 text-[#5c5a5a] text-lg top-[25%] lg:top-[20%] lg:text-xl" ></HiSearch> 
              </div>
              <div className="relative">
              <FiShoppingBag  className="text-3xl cursor-pointer xl:text-4xl " 
          onClick={()=>dispatch(OpenClose())} ></FiShoppingBag>
       { amount>0 &&  <div className="flex justify-center items-center absolute rounded-full bg-[red] border-2 border-solid text-sm text-white font-semibold border-white h-7 w-7 top-[-40%] right-[-40%]
        xl:top-[-38%] xl:right-[-28%] xl:w-7 xl:h-7 ">
                       {amount} 
                      </div>}
              </div>
          </div>
          
            <h1 className="text-black font-semibold text-3xl lg:text-4xl font-['Times_New_Roman'] 2xl:text-5xl ">Blackbird</h1>
           
   
    <ul className="flex items-center uppercase  gap-7 text-[#5c5a5a] text-xs lg:text-sm xl:text-base">
        <li className="cursor-pointer" >Sign in</li>
        <li className="cursor-pointer" >Account</li>
    </ul>
        </div>
 {/* Menu */}
   <ul className='flex w-full items-center text-[#3b3b3b] font-["Roboto",sans-serif] justify-between p-2 uppercase border-b-black mt-12 font-semibold border-b-solid border-b-[3px]
tracking-wider px-10 text-xs lg:text-sm lg:px-24 lg:gap-9 xl:px-32 2xl:text-lg '>
     <li className="cursor-pointer" >home</li>
     <li className="cursor-pointer" >shop</li>
     <li className="cursor-pointer" >featured</li>
     <li className="cursor-pointer" >products</li>
     <li className="cursor-pointer" >lookbook</li>
     <li className="cursor-pointer" >contact us</li>
   </ul>
     {bagshop && <>
        <div className="fixed h-[100vh] w-full z-[70] top-[50%] translate-y-[-50%]  left-[50%] translate-x-[-50%] "  
        >
     <ShoppingBag ></ShoppingBag>
        </div>
       <div className="h-[100vh] fixed top-0 right-0 opacity-100  w-full bg-[#00000099] z-[60] "  ></div>
      
     </>  }


</div>

<div className="py-2 pb-0 block sm:hidden">
        <div  className="items-center flex justify-between px-6 ">
        <h1 className="text-[#333333] font-semibold text-3xl font-['Times_New_Roman'] ">Blackbird</h1>
            <div className="flex items-center gap-3 text-2xl ">
          <HiSearch  className="cursor-pointer"/> 
          <BsFillPersonFill className="cursor-pointer"/>
              <div className="relative">
              <FiShoppingBag  className="cursor-pointer " 
          onClick={()=>dispatch(OpenClose())} />
       { amount>0 &&  <div className="flex justify-center items-center absolute rounded-full bg-[red] border-2 border-solid text-xs text-white font-semibold border-white h-6 w-6 bottom-3 right-[-40%]">
                       {amount} 
                      </div>}
              </div>
          </div>

        </div>
         {/* Menu */}
        <div>
        <div className="flex bg-[#222222] text-white w-full p-3 items-center justify-between mt-3 relative ">
        <h1> Menu </h1>
       <IoMdMenu className="text-xl cursor-pointer"  onClick={()=> setMenu(prev=>prev=!prev) } />
       </div>
      {Menu && <ul className='mb-5 w-full flex flex-col text-[#3b3b3b] font-["Roboto",sans-serif] justify-center uppercase text-center tracking-wider'
       style={{boxShadow:"0 3px 5px 0 rgba(50,50,50,.5)"}}
       >
     <li className="cursor-pointer p-4 border-b border-b-solid border-b-[#777] w-full " >home</li>
     <li className="cursor-pointer p-4 border-b border-b-solid border-b-[#777] w-full " >shop</li>
     <li className="cursor-pointer p-4 border-b border-b-solid border-b-[#777] w-full " >featured</li>
     <li className="cursor-pointer p-4 border-b border-b-solid border-b-[#777] w-full " >products</li>
     <li className="cursor-pointer p-4 border-b border-b-solid border-b-[#777] w-full " >lookbook</li>
     <li className="cursor-pointer p-4 border-b border-b-solid border-b-[#777] w-full " >contact us</li>
       </ul>}
       </div>

     {bagshop && <>
        <div className="fixed h-[100vh] w-full z-[70] top-[50%] translate-y-[-50%]  left-[50%] translate-x-[-50%] "  
        >
     <ShoppingBag ></ShoppingBag>
        </div>
       <div className="h-[100vh] fixed top-0 right-0 opacity-100 w-full bg-[#00000099] z-[60] " ></div>
      
     </>  }


</div>
</>

    )
}

export default Navbar
