import { HiSearch } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";
import { CgMenuGridR } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import ShoppingBag from "../ShopingBag/ShopingBag";
import {OpenClose} from "../../features/Manuelle/ManSlice"

const Navbar=()=>{
    const amount = useSelector((state:any) => state.cart.amount);
    const bagshop = useSelector((state:any) => state.man.Bagshop);
  const dispatch=useDispatch()
    return(
    <div className="p-[5px] px-10 md:px-4">
        <div  className=" items-center flex justify-between md:hidden " >
            <div className="relative flex gap-2 items-center ">
            <input type="text" className="h-[34px] py-1 px-4 font-semibold rounded-full border border-solid border-[#e6e3e3f2] w-[240px] focus:outline-0 "  placeholder="Search..." />
          <HiSearch  className="absolute text-xl right-[20%] top-[20%] text-[#5c5a5a] " ></HiSearch> 

          <FiShoppingBag  className="text-3xl cursor-pointer relative" 
          onClick={()=>dispatch(OpenClose())} ></FiShoppingBag>
       { amount>0 &&  <div className=" grid justify-center items-center rounded-full w-[24px] h-[24px]
           bg-red-600 border-[2px] border-solid border-[white] top-[-25%] right-[-3%] absolute">
            <div className="text-sm text-white font-semibold" >{amount}</div> 
          </div>}
          </div>
          
            <h1 className="text-black font-semibold text-4xl font-['Times_New_Roman'] ">Blackbird</h1>
           
   
    <ul className="flex  items-center uppercase font-semibold text-sm gap-7
     text-[#5c5a5a] ">
        <li>Sign in</li>
        <li>Account</li>
    </ul>
        </div>
 
{/* responsive */}

<div className="mdm:hidden sm:hidden ">
<h1 className="text-black font-semibold text-4xl text-center font-['Times_New_Roman'] mb-3 ">Blackbird</h1>

<div className="flex items-center justify-between" >
<div className="relative flex gap-2 items-center ">
            <input type="text  " className="h-[34px] py-1 px-4 font-bold rounded-full border
             border-solid
             border-[#e6e3e3f2] w-[200px] focus:outline-0"  placeholder="Search..." />
          <HiSearch  className="absolute text-xl right-[20%] top-[20%] text-[#5c5a5a] " >
            </HiSearch> 

          <FiShoppingBag  className="text-3xl cursor-pointer relative" 
          onClick={()=>dispatch(OpenClose())} ></FiShoppingBag>
       { amount>0 &&  <div className=" grid justify-center items-center rounded-full w-[24px] h-[24px]
           bg-red-600 border-[2px] border-solid border-[white] top-[-25%] right-[-3%] absolute">
            <div className="text-sm text-white font-semibold" >{amount}</div> 
          </div>}
</div>
<ul className="flex  items-center uppercase font-semibold text-sm gap-5
     text-[#5c5a5a] ">
        <li>Sign in</li>
        <li>Cart</li>
        <li>Account</li>
    </ul>
</div>

</div>

<div className="smm:hidden  ">
<h1 className="text-black font-semibold text-4xl text-center font-['Times_New_Roman'] mb-3 ">Blackbird</h1>

<div className="flex items-center justify-center" >

<CgMenuGridR className="text-3xl  cursor-pointer " ></CgMenuGridR>
</div>

</div>


{/* Menu */}
<ul className='flex w-full wrap items-center text-[#3b3b3b] font-["Roboto",sans-serif] justify-between p-2 px-[150px] uppercase border-b-black mt-12 text-sm font-semibold border-b-solid border-b-[3px] 
tracking-wider md:hidden lg:gap-9 '>
     <li>home</li>
     <li>shop</li>
     <li>featured</li>
     <li>products</li>
     <li>lookbook</li>
     <li>contact us</li>
</ul>
     {bagshop && <>
        <div className="fixed h-[100vh] w-full z-[70] top-[50%] translate-y-[-50%]  left-[50%] translate-x-[-50%] "  
        >
     <ShoppingBag ></ShoppingBag>
        </div>
       <div className="h-[100vh] fixed top-0 right-0 opacity-100  w-full bg-[#00000099] z-[60] "  ></div>
      
     </>  }
</div>
    )
}

export default Navbar
