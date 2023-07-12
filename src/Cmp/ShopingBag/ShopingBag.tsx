import { FiX} from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import {OpenClose,AddOpen,AddClose} from "../../features/Manuelle/ManSlice"
import {useEffect, useState } from "react"
import Line from '../shared/Line'

interface props{
Add?:boolean
}
const ShoppingBag:React.FC<props>=(props)=>{
    const Bag = useSelector((state:any) => state.cart.Bag);
    const {amount,total} = useSelector((state:any) => state.cart);
    const dispatch=useDispatch()
   
   
    
 if(props.Add){
    const Added = useSelector((state:any) => state.man.Added);
 return(
  <div className=" bg-white px-4 border absolute top-5 md:top-10 right-[50%] translate-x-[50%] border-solid border-black w-[90vw] sm:w-[75vw] md:w-[85vw] xl:w-[80vw] 2xl:w-[75vw]">
    <nav  className="flex justify-between p-2 md:p-3 px-1 border-b-black border-b-solid border-b w-full" >
               <h1 className=' text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl' >Product successfully added to your shopping Bag </h1>
               <FiX className='cursor-pointer text-[#ccc] hover:text-[#a4a4a4] duration-500 text-xl md:text-2xl lg:text-3xl '
                onClick={()=>dispatch(AddClose())} />
    </nav>
    <div className="flex flex-col md:flex-row md:items-start w-full bg-white md:justify-between my-1 md:my-3 xl:my-5">
         <div className="relative p-2 flex items-center gap-3 xl:gap-5">
              <img src={Added.Product.img[0]} className="w-28 h-32 md:w-44 md:h-48 lg:w-48 lg:h-52 xl:w-52 xl:h-56"/>
          <div className="flex flex-col self-start gap-1 md:gap-2 xl:gap-3" >
           <h1 className="text-[#888888] font-['Roboto',sans-serif] text-sm md:text-base lg:text-xl xl:text-2xl" >{Added.Product.title}</h1>
           <p className="font-['Roboto',sans-serif] text-xs md:text-sm lg:text-lg xl:text-xl "> $ {Added.Product.price} </p>
           <div className='text-[#949494] text-xs md:text-sm lg:text-lg xl:text-xl'>
            <p>Size:<span className='text-[#525252]'> S </span></p>
            <p>Color:<span className='text-[#525252] '> Yellow </span></p>
            <p>Quantity:<span className='text-[#525252] '> 2 </span></p>  
           </div>
          </div>
         </div>
               <div className="p-2 md:border-l md:border-l-solid md:border-l-[#ccc] md:mx-2 min-w-max md:pl-4 lg:pl-5 ">
                <h1 className='text-[#414141] font-["Roboto",sans-serif] font-bold text-sm md:text-base lg:text-lg' >
                {amount==1 && <> There is {amount} item in your cart.</> } 
                {amount>1 && <> There are {amount} items in your cart.</> }   </h1>
                <div className='flex flex-col mt-2 xl:mt-3' >
                <Line h='Subtotal' p={total.toFixed(2)} ></Line>
                <Line h='Shipping' p={7.50} ></Line>
                <Line h='Total (tax excl.)' p={(total + 7.50).toFixed(2)} ></Line>
                <Line h='Total (tax incl.)' p={(total + 7.50).toFixed(2)} ></Line>
                <Line h='Taxes:' p={0.00} last={true} ></Line>
                </div>
                <div className="flex justify-start text-[#ffffff] gap-3 my-3 xl:gap-5 xl:my-5">
                  <button  className='bg-[#313537] font-["Archivo Narrow",sans-serif] text-xs px-2 lg:px-4 p-2 xl:text-base xl:p-3 xl:px-6' > Confirme Purshase </button>  
                  <button  className='bg-[#313537] font-["Archivo Narrow",sans-serif] text-xs px-2 lg:px-4 p-2 xl:text-base xl:p-3 xl:px-6' > Checkout</button> 
                </div>
               </div>
    </div>

  </div>
 )}   
 else{  return(
<div className='grid w-full h-[100vh] items-center justify-center'>
 <div className="bg-white border border-solid border-black h-[70vh] min-h-max overflow-hidden w-[85vw] hidden lg:block lg:w-[80vw] lg:px-4 xl:w-[75vw] " >
           <nav  className="flex text-3xl justify-between p-4 border-b-black border-b-solid border-b w-full " >
            <h1 >Shopping Cart</h1>
            <FiX className='text-3xl cursor-pointer hover:rotate-90 duration-200 ' 
             onClick={()=>dispatch(OpenClose())}
            ></FiX>
           </nav>

       { Bag.length>1 &&  <div className="flex h-[80%] w-full mt-5 gap-1 ">
            <div className=" p-3 overflow-hidden overflow-y-scroll flex-1 ">
            {Bag.map((Produc:any)=>{
                return (<Product key={Math.random()}  {...Produc} ></Product>)
            })}
            </div>
            <div className="p-3 border-l border-l-solid border-l-[#ccc] min-w-[30%] grid ">     
                <div className="">
                <Line h={`${amount} items`} p={total.toFixed(2)}  ></Line>
                <Line h={`Shipping`} p={7.00}  ></Line>
                <Line h='Taxes:' p={0.00}  ></Line>
                <Line h='Total' p={total.toFixed(2)}  ></Line>
                <Line h='Total (tax incl.)' p={total.toFixed(2)+7}  ></Line>
                </div>
                <div className="flex items-center gap-3 self-end justify-self-end mb-4">
                <button className="bg-[#333] text-white py-2 uppercase lg:text-base lg:px-5 2xl:px-6 2xl:py-3 ">cart</button>
                <button className="bg-[#333] text-white py-2 uppercase lg:text-base lg:px-5 2xl:px-6 2xl:py-3 ">checkout</button>
                </div>
             
            </div>
           </div>}

       {Bag.length===1 &&   
       <div  className=' font-bold grid justify-center items-center w-full h-[60vh] lg:text-3xl 2xl:text-5xl' >  Your Bag is empty </div>
       }
</div>

<div className="bg-white border border-solid border-black block px-3 w-[100vw] h-[100vh] sm:h-max sm:w-[90vw] md:w-[85vw] lg:hidden" >
           <nav  className="flex text-xl justify-between p-3 border-b-black border-b-solid border-b w-full " >
            <h1 >Shopping Cart</h1>
            <FiX className='text-2xl cursor-pointer hover:rotate-90 duration-200 ' 
             onClick={()=>dispatch(OpenClose())}/>
           </nav>

       { Bag.length>1 &&  <div className="w-full mt-2">
            <div className="max-h-40 px-3 overflow-hidden overflow-y-scroll ">
            {Bag.map((Produc:any)=>{
                return (<Product key={Math.random()}  {...Produc} ></Product>)
            })}
            </div>
            <div className="p-3 grid mt-3">     
                <div className="">
                <Line h={`${amount} items`} p={total.toFixed(2)}  ></Line>
                <Line h={`Shipping`} p={7.00}  ></Line>
                <Line h='Taxes:' p={0.00}  ></Line>
                <Line h='Total' p={total.toFixed(2)}  ></Line>
                <Line h='Total (tax incl.)' p={total.toFixed(2)+7}  ></Line>
                </div>
                <div className="flex items-center gap-3 my-5 mb-4 self-end justify-self-end ">
                <button className="bg-[#333] text-white py-2 uppercase text-xs px-4">cart</button>
                <button className="bg-[#333] text-white py-2 uppercase text-xs px-4">checkout</button>
                </div>
             
            </div>
           </div>}

       {Bag.length===1 &&   
       <h1  className=' font-bold grid justify-center items-center w-[100%] h-[calc(90vh-80px)] text-xl sm:text-2xl md:text-3xl' > Your Bag is empty </h1>
       }
</div>
</div>       
    )}
}

export default ShoppingBag