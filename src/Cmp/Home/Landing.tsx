import lady from '../../assets/img/HeroPart/lady.webp'
import flower from '../../assets/img/HeroPart/flower.webp'
import ladyhand from '../../assets/img/HeroPart/ladyhand.webp'
import shoes from '../../assets/img/HeroPart/shoes.webp'
import pinkbg from '../../assets/img/HeroPart/pinkbg.webp'
import { moved } from '../../features/Cart/cartSlice';
import Item from './Item'
import { BsArrowRight,BsArrowUp,BsArrowLeft,BsMessenger } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import data from '../../data/data'
import { useEffect, useState } from 'react'
import Menuu from '../shared/Menu'
const Landing=()=>{
  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
    const Cgt= useSelector((state:any) => state.cart.Categorie);
    const items= useSelector((state:any) => state.cart.Product);
    const dispatch=useDispatch()
    const [Arr,SetArr]=useState(false)
useEffect(()=>{
  window.addEventListener("scroll",()=>{
    if (window.scrollY > 500) {
      SetArr(true);
  } else {
    SetArr(false);
  }
  })
},[])
return(
    <div  className=" relative px-9 mt-5 " >
    <div  className='fixed top-[40%] h-[210px] w-[100px] right-[1%] z-20 ' >
  
   {Arr && <div className='rounded-full grid justify-center items-center top-[60%] right-[2%] shadow-md bg-[#eee] h-[60px] 
  duration-1000 w-[60px] z-50 absolute text-[#575757] hover:bg-[#575757] first:hover:text-[#eee] cursor-pointer text-3xl'
  onClick={()=>{goToTop()}}
  >
   <BsArrowUp ></BsArrowUp>
   </div>}


   {!Arr && <div  className=' bg-gradient-to-r from-violet-500 to-fuchsia-500  
   rounded-full grid justify-center items-center top-[60%] right-[2%] shadow-lg h-[60px] 
   w-[60px] z-10 absolute text-4xl cursor-pointer ' >
    <BsMessenger className=' text-white ' ></BsMessenger>
   </div>
   
  }
  
 <Menuu></Menuu>
  
    </div>
    <div className=" mb-10 lg:mb-6 bg-white gap-4 justify-center grid h-auto
    grid-cols-[20%,20%,10%,20%,20%] grid-rows-[18vw,10vw,18vw] md:gap-2  ">
<div style={{backgroundImage:`url(${lady})`}} className="bg-black col-start-1 col-end-4 
row-start-1 row-end-4 bg-cover bg-center
"></div>
<div style={{backgroundImage:`url(${flower})`}} className="bg-black col-start-4 col-end-5
 row-start-1 row-end-2 bg-cover bg-center text-[#ffffff] flex flex-col items-center gap-2 justify-center 
 ">
  <p className='text-[1vw]  font-["Archivo_Narrow",sans-serif] tracking-[2px] mb-5 mdm:mb-3 lg:mb-0 ' >NEW LOOKS </p>
  <p className='text-[1.5vw] font-["Roboto",sans-serif] max-w-[100px] text-center tracking-[5px]   ' >HAVE LANDED</p>
 </div>

<div style={{backgroundImage:`url(${shoes})`}} className="bg-black col-start-4 col-end-5 
row-start-2 row-end-4 bg-cover bg-center relative ">
   <div  className=' bg-[#ffffff88] py-4 text-center absolute bottom-[8%] translate-x-[50%] 
  right-[50%] w-[80%] '>
      <p  className="font-['Archivo Narrow',sans-serif] text-[#4c4c4c] text-[.9vw]
       italic" >spring / summer</p>
      <h2  className="text-[1vw] text-[#444444] tracking-wider  uppercase 
       font-['Roboto',sans-serif] font-semibold mt-1 "  >NEW ARRIVALS</h2>
  </div>
</div>

<div style={{backgroundImage:`url(${ladyhand})`}} className="bg-black col-start-5 col-end-6
 row-start-1 row-end-3 bg-cover bg-center relative  ">
  <div  className=' bg-[#ffffff88] py-4 text-center absolute bottom-[8%] translate-x-[50%] 
  right-[50%] w-[80%] '>
      <p  className="font-['Archivo Narrow',sans-serif] text-[#4c4c4c] text-[.9vw]
       italic" >fashion jelewry</p>
      <h2  className="text-[1vw] text-[#444444] tracking-wider  uppercase 
       font-['Roboto',sans-serif] font-semibold mt-1 "  >NOW 2 FOR $25</h2>
  </div>

 </div>

<div style={{backgroundImage:`url(${pinkbg})`}} className="bg-black col-start-5 col-end-6 
row-start-3 row-end-4 bg-cover bg-center text-center grid items-center relative text-[#ffffff]  ">
<div  className='font-["Roboto",sans-serif] text-[2.9vw] mb-7 
tracking-[1vw] '  > FREE 
<span className='tracking-[1px] text-[2vw] mt-[-10px] ' > SHIPPING</span></div>

<span className='absolute text-[1vw] bottom-[11%] right-[20%] md:right-[15%]  ' >
   ORDERS OF $95 OR MORE</span>

</div>
    </div>

    <div className="text-center grid justify-center justify-items-center w-full mb-10 ">
        <div className="w-[40px] border-b-black border-b-solid border-b-[2px] h-[10px] my-5 "></div>
       <h1  className='text-[#333333] text-xl font-["Archivo_Narrow",sans-serif] font-500 tracking-widest md:text-lg' >Blackbrid IS AN ECOMMERCE PLATFORM</h1>
       <h1  className='text-[#ababab] text-sm font-500 p-2 font-["Roboto",sans-serif]   ' >Quisque euismod pretium lacinia. Vivamus 
       sollicitudin placerat sit amet sagittis. Mauris ac ante porta, pellentesque lacus.</h1>
    </div>

    <div className=" grid justify-items-center justify-center ">
   
{/*categorie */}
  <h1 className='text-[#333333] font-["Archivo Narrow",sans-serif] w-[230px] border-b-[2px] 
  border-b-solid border-black p-1 text-xl text-center mb-10 tracking-wider '> SHOP BY CATEGORY </h1>  
  
<div className="grid grid-cols-[repeat(4,20vw)] grid-rows-[430px] lg:grid-rows-[40vw] 
relative gap-4">
<BsArrowRight className='text-4xl absolute top-[50%] right-[-30px] cursor-pointer z-[100] xl:text-3xl  md:right-[-5px] md:rounded-full md:p-2 md:bg-white ' 
onClick={()=>dispatch(moved('+'))} ></BsArrowRight>
<BsArrowLeft  className='text-4xl absolute top-[50%] left-[-30px] cursor-pointer z-[100]  xl:text-3xl md:left-[-5px] md:rounded-full md:p-2 md:bg-white '
onClick={()=>dispatch(moved('-'))}
></BsArrowLeft>


    {Cgt?.map((Cat:any)=>{
   return <Item key={Cat.id} {...Cat} ></Item>
    })}

   
</div>

{/* Latest product */}
<h1 className='text-[#333333] font-["Archivo Narrow",sans-serif] w-[230px] border-b-[2px] 
  border-b-solid border-black p-1 text-xl text-center  tracking-wider mt-10 '>
     LATEST PRODUCTS </h1>  
  <div className="flex w-full  gap-14 font-['Roboto',sans-serif] italic
   text-[15px]  text-[#b6b6b6] mb-10 mt-6 font-[500] ">
    <h1  className='hover:text-[#444444] tracking-wider cursor-pointer ' >Featured</h1>
    <h1  className='hover:text-[#444444] tracking-wider cursor-pointer'>Special</h1>
    <h1 className='hover:text-[#444444] tracking-wider cursor-pointer'>New</h1>
  </div>

  <div className="grid grid-cols-[repeat(5,minmax(140px,200px))] overflow-hidden xl:grid-cols-[repeat(5,180px)]
grid-rows-[repeat(2,420px)] w-full relative gap-6">
    
    {items?.map((Cat:any)=>{
   return <Item key={Cat.id} {...Cat} ></Item>
    })}

   
</div>
</div>
  </div>
)

}

export default Landing