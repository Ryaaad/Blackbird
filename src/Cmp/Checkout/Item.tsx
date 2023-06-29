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
        <div  className= {` w-[700px] p-3 font-['Roboto'] border-t border-t-solid border-t-[#cfcbcbb6]  `} >
         <div className="flex justify-between">
         <div className="flex gap-2" >
    <img src={props.img[1]} className="h-[160px] w-[120px]  "  />

         <div className="w-[60%]" >
         <h1 className="text-xl  text-[#414141] " >  {props.title} </h1>

         <div className="flex w-[70%] ">
         {props.Promotion>0 && <div className="flex justify-between gap-10 text-xl " >
    <p   className=' text-[#b7b4b4] line-through ' > ${props.price} </p>  <p>  ${ Newprice  } </p>
    </div> }
    {props.Promotion===0 &&  <p className="font-semibold  text-xl "  > ${props.price} </p>}
         </div>
       
       {/* product features */}
       <div className="my-2" >
         <h2  className="text-[#777777] font-['Archivo_Narrow'] " >Product features:</h2>
         <p>Size: <span  className="text-[#777777] text-sm" > S</span></p>
         <p>Color: <span  className="text-[#777777] text-sm"  > Yellow</span></p>
       </div>

         </div>
         </div>
  
       <div className=" flex gap-4 text-xl items-center w-[max-content] h-[max-content] " >
        <div className="flex" >
        <input type="text" value={props.amount} disabled 
       className=" border bg-white border-solid border-stone-500 h-[35px] w-[45px] grid text-center items-center " />
     <div>
     <BiChevronUp onClick={()=>dispatch(Addproduct(props.id))}
      className="border border-solid border-stone-500 border-b-0 border-l-0 cursor-pointer h-[17.5px] w-[22px] " >
      </BiChevronUp>
      <BiChevronDown onClick={()=>dispatch(reduceproduct(props.id))}
       className="border border-solid border-stone-500 h-[17.5px] border-l-0 w-[22px] cursor-pointer " >
       </BiChevronDown>
     </div>
        </div>
      
      <h1 className="font-[500]"> ${totale} </h1>
      <FiX className="text-gl cursor-pointer " 
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