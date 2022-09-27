import { FiX} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import {OpenClose,AddOpen,AddClose} from "../../features/Manuelle/ManSlice"
import {useEffect, useState } from "react"
import Line from './Line'

interface props{
Add?:boolean
}
const ShoppingBag:React.FC<props>=(props)=>{
    const Bag = useSelector((state:any) => state.cart.Bag);
    const {amount,total} = useSelector((state:any) => state.cart);
    const dispatch=useDispatch()
   
   
    
 if(props.Add){
    const Added = useSelector((state:any) => state.man.Added);
    useEffect(()=>{},[Added.Product])
    return(
    <div className=' grid w-full h-[500px] items-center justify-center  '>
    <div className=" w-[90vw] bg-white h-[400px] px-4 border border-solid border-black
     lg:w-[95vw] " >
              <nav  className="flex text-xl justify-between p-3 px-1 border-b-black
               border-b-solid  
              border-b-[1px] w-full " >
               <h1 className='xl:text-lg' >Product successfully added to your shopping Bag
               </h1>
               <FiX className='text-3xl cursor-pointer text-[#ccc] hover:text-[#a4a4a4]
                duration-500 '
                onClick={()=>dispatch(AddClose())}
               ></FiX>
              </nav>
   
     <div className="grid h-[70%] grid-cols-[55%,45%] w-full mt-5 bg-white gap-1 lg:grid-cols-[48%,52%] ">
               <div className=" p-2  ">
             <div className="relative h-[80%]  flex items-center gap-5 xl:gap-1 ">
  <img src={Added.Product.img[0]} className="h-[20vw] w-[15vw] xl:h-[25.5vw] xl:w-[23vw] " />
      <div className="flex flex-col gap-4 self-start pt-2 text-[24px] leading-[22px]
       xl:text-[17px] xl:leading-[15px] " >
      <h1 className="text-[#888888] font-['Roboto',sans-serif]" >{Added.Product.title}</h1>
     <p  className="font-['Roboto',sans-serif]  "  > $ {Added.Product.price} </p>
     <div className='text-[1vw] text-[#949494] xl:text-[1.5vw] ' >
     <p  >Size:<span className='text-[#525252] ' > S </span></p>
    <p  >Color:<span className='text-[#525252] '> Yellow </span></p>
    <p  >Quantity:<span className='text-[#525252] '> 2 </span></p>  
     </div>
   
   </div>
            </div>
               </div>
               <div className="p-2 px-6 pl-10 border-l-[1px] border-l-solid border-l-[#ccc] ">
                <h1 className='text-[#414141] text-[17px] leading-[15px] 
                font-["Roboto",sans-serif] font-[700] xl:text-[14px] xl:leading-[13px] ' >
                {amount==1 && <> There is {amount} item in your cart.</> } 
                {amount>1 && <> There are {amount} items in your cart.</> }   </h1>
                <div className='p-1' >
                <Line h='Subtotal' p={total.toFixed(2)} ></Line>
                <Line h='Shipping' p={7.50} ></Line>
                <Line h='Total (tax excl.)' p={(total + 7.50).toFixed(2)} ></Line>
                <Line h='Total (tax incl.)' p={(total + 7.50).toFixed(2)} ></Line>
                <Line h='Taxes:' p={0.00} last={true} ></Line>
                </div>

                <div className="btn justify-center text-[#ffffff] flex gap-5 xl:gap-2 ">
                  <button  className='h-[38px] text-[12px] uppercase p-2 bg-[#313537] w-[180px]
                   font-["Archivo Narrow",sans-serif] xl:text-[10px]' > confirme purshase </button>  
                  <button   className='h-[38px] text-[12px] uppercase p-2 bg-[#313537] 
                  font-["Archivo Narrow",sans-serif]   w-[117px] xl:text-[10px] ' > checkout</button> 
                </div>
               </div>
    </div>

   </div>
           </div>
 )}   
 else{  return(
        <div className=' grid w-full h-[100vh] items-center justify-center'>
 <div className=" w-[75vw] bg-white h-[90vh]  px-4 border border-solid border-black " >
           <nav  className="flex text-3xl justify-between  p-4 border-b-black border-b-solid 
           border-b-[1px] w-full " >
            <h1 >Shopping Cart</h1>
            <FiX className='text-3xl cursor-pointer hover:rotate-90 duration-200 ' 
             onClick={()=>dispatch(OpenClose())}
            ></FiX>
           </nav>

       { Bag.length>1 &&  <div className="grid h-[80%] grid-cols-[55%,45%] w-full mt-5
        bg-white gap-1 lg:grid-cols-[65%,35%] ">

            <div className=" p-3 overflow-hidden overflow-y-scroll  ">
            {Bag.map((Produc:any)=>{
                return (<Product key={Math.random()}  {...Produc} ></Product>)
            })}
            </div>
            <div className="p-3 border-l-[1px] border-l-solid border-l-[#ccc] ">
              
                <Line h={`${amount} items`} p={total.toFixed(2)}  ></Line>
                <Line h={`Shipping`} p={7.00}  ></Line>
                <Line h='Taxes:' p={0.00}  ></Line>
                <Line h='Total' p={total.toFixed(2)}  ></Line>
                <Line h='Total (tax incl.)' p={total.toFixed(2)+7}  ></Line>
 
            </div>
           </div>}

       {Bag.length===1 &&   
       <div  className='text-5xl font-bold grid justify-center items-center w-[100%] h-[calc(90vh-80px)] ' > 
Your Bag is empty
       </div>
       }
</div>
        </div>
       
    )}
}

export default ShoppingBag