import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {   BiChevronDown,  BiChevronUp } from "react-icons/bi";
import { FiX} from "react-icons/fi";

import {deleteproduct,reduceproduct,Addproduct} from "../../features/Cart/cartSlice"
interface props{
  id:string,
  img:string,
  mark:string,
  title:string,
  price:number,
  Promotion:number,
  amount:number,
}
const Item:React.FC<props> = (props) => {
    // const bagshop = useSelector((state:any) => state.man.Bagshop);
   
    
 if(props.id!=='Err') { 
  const dispatch=useDispatch()
   let price=props.price-(props.price * props.Promotion)/100
 let Newprice=price.toFixed(2)
 let totale= (price * props.amount).toFixed(2)
//  Unlock the Goddess in you


   return ( 
        <div  className= {`w-full font-['Roboto'] border-b border-b-solid border-b-[#cfcbcbb6] p-1 sm:p-2 py-3 lg:p-3 2xl:py-4`} >
         <div className="flex justify-between gap-2 ">
         <div className="flex gap-3 2xl:gap-5" >
    <img src={props.img[1]} className="h-24 w-20 sm:w-28 sm:h-32 md:h-40 md:w-32 2xl:w-36 2xl:h-44"  />

         <div className="w-[90%] lg:w-[60%]" >
         <h1 className="text-xs sm:text-sm lg:text-xl text-[#414141]" >  {props.title} </h1>

         <div className="flex w-[70%] text-xs sm:text-sm lg:text-xl ">
         {props.Promotion>0 && <div className="flex justify-between gap-10 " >
    <p   className=' text-[#b7b4b4] line-through'> ${props.price} </p>  <p>  ${ Newprice  } </p>
    </div> }
    {props.Promotion===0 &&  <p> ${props.price} </p>}
         </div>
       
       {/* product features */}
       <div className="flex flex-col my-2  xl:gap-1 xl:my-4">
         <h2  className="text-[#777777] font-['Archivo_Narrow'] text-xs sm:text-base">Product features:</h2>
         <p className="text-xs sm:text-sm xl:text-base" >Size: <span  className="text-[#777777] "> S</span></p>
         <p className="text-xs sm:text-sm xl:text-base">Color: <span  className="text-[#777777] "> Yellow</span></p>
       </div>

         </div>
         </div>
  
       <div className="flex gap-3 sm:gap-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl items-center w-max h-max " >
        <div className="flex" >
        <input type="text" value={props.amount} disabled 
       className="border bg-white border-solid border-stone-500 grid text-center items-center w-5 sm:w-8 sm:h-6 md:h-8 md:w-9 lg:h-8 lg:w-10 " />
     <div>
     <BiChevronUp onClick={()=>dispatch(Addproduct(props.id))}
      className="border border-solid border-stone-500 border-b-0 border-l-0 cursor-pointer h-3 w-3 md:h-4 md:w-4 " >
      </BiChevronUp>
      <BiChevronDown onClick={()=>dispatch(reduceproduct(props.id))}
       className="border border-solid border-stone-500  border-l-0 cursor-pointer h-3 w-3 md:h-4 md:w-4" >
       </BiChevronDown>
     </div>
        </div>
      
      <h1 className="font-[500]"> ${totale} </h1>
      <FiX className=" cursor-pointer text-xl translate-y-[-10px] lg:translate-y-0 2xl:text-2xl" 
      onClick={()=>dispatch(deleteproduct(props.id))} ></FiX>
       </div>
         </div>
         
       </div>
     );}
  else return(
    <div className="hidden" ></div>
  )
}
 
export default Item;