import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
const Checkout = () => {
    const {Bag,amount,total} = useSelector((state:any) => state.cart);
    const TotalTax=total+7
return ( 
        <div className="flex w-full my-12 px-4 flex-col gap-6 sm:px-8 md:px-5 lg:items-start lg:flex-row lg:gap-0 lg:px-10 xl:px-20 2xl:px-32 2xl:gap-4 lg:justify-between ">
            <div>
           <div className={`grid max-h-[800px] overflow-y-scroll  pr-2 CustomScroll w-full xl:max-h-[800px] lg:w-[58vw] xl:w-[54vw] xl:pr-5 `}>
                { Bag.map((bag:any)=>{
                        return <Item key={bag.id} {...bag}></Item>
                    })}
                </div> 
            </div>

          
            <div className="w-max text-[#414141] font-['Roboto',sans-serif] bg-[#f8f8f8] self-center h-max p-3  lg:p-4 lg:py-5 lg:self-start xl:p-8 ">
                <div className="pb-2 flex justify-between w-full xl:pb-4" >
                <h1  className="text-base lg:text-lg xl:text-2xl " >{amount} items </h1>
                    <p className="text-sm lg:text-base font-[700] xl:text-xl" > ${total.toFixed(2)}</p>
                </div>
                <div className="box-border  py-1 md:py-2 flex justify-between w-full border-b border-b-solid border-b-[#b9b3b3] xl:py-4 " >
                <h1  className="text-base lg:text-lg xl:text-2xl " >Shipping</h1>
                    <p className=" text-sm lg:text-base font-[700] xl:text-xl " > ${7.00}</p>
                </div>
                <div className="box-border  py-1 md:py-2 flex justify-between w-full xl:py-3" >
                <h1  className="text-base lg:text-lg xl:text-2xl " >Total (tax excl.) </h1>
                    <p className=" text-sm lg:text-base font-[700] xl:text-xl " > ${TotalTax.toFixed(2)}</p>
                </div>
                <div className="box-border  py-1 md:py-2 flex justify-between w-full xl:py-3" >
                <h1  className="text-base lg:text-lg xl:text-2xl " >Total (tax incl.) </h1>
                    <p className=" text-sm lg:text-base font-[700] xl:text-xl " > ${TotalTax.toFixed(2)}</p>
                </div>
                <div className= "py-1 md:py-2 flex justify-between w-full xl:py-3" >
                <h1  className="text-base lg:text-lg xl:text-2xl " >Taxes: </h1>
                    <p className=" text-sm lg:text-base font-[700] xl:text-xl " > ${0.00}</p>
                </div>

                <div className="flex mt-2" >
                    <input type="text" placeholder='Promo code '
                     className='w-52 lg:w-60 border-black border p-1 xl:w-64 2xl:w-[300px] xl:p-2' />
                    <button  className="box-border p-1 px-6 text-sm bg-[#313537] text-white xl:text-lg " >ADD</button>
                </div>
               </div>
             
          </div> );
     
}
 
export default Checkout;