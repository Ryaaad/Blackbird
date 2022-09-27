
import { useDispatch, useSelector } from "react-redux";
import Checkoutitem from "./Checkoutitem";
const Checkout = () => {
    const {Bag,amount,total} = useSelector((state:any) => state.cart);
 if(Bag[1])   return ( 
        <div className="flex gap-14 w-full justify-center lg:flex-col ">
            <div>
               { <h1 className="text-3xl font-semibold" > Shoping Bag </h1>}
           <div className="grid gap-5 mt-10 ">
                { Bag.map((bag:any)=>{
                        return <Checkoutitem key={bag.id} {...bag} ></Checkoutitem>
                    })}
                </div> 
            </div>

          
            <div className=" w-[300px] mt-12 text-[#414141] font-['Roboto',sans-serif]">
                <div className="box-border py-2 flex justify-between w-full " >
                <h1  className="text-[17px] " >{amount} items </h1>
                    <p className=" text-[16px] font-[700]" > ${total}</p>
                </div>
                <div className="box-border py-2 flex justify-between w-full border-b border-b-solid
                 border-b-[#b9b3b3]  " >
                <h1  className="text-[17px] " >Shipping</h1>
                    <p className=" text-[16px] font-[700]" > ${7.00}</p>
                </div>
                <div className="box-border py-2 flex justify-between w-full " >
                <h1  className="text-[17px] " >Total (tax excl.) </h1>
                    <p className=" text-[16px] font-[700]" > ${total+7.00}</p>
                </div>
                <div className="box-border py-2 flex justify-between w-full " >
                <h1  className="text-[17px] " >Total (tax incl.) </h1>
                    <p className=" text-[16px] font-[700]" > ${total+7.00}</p>
                </div>
                <div className="box-border py-2 flex justify-between w-full mb-5 " >
                <h1  className="text-[17px] " >Taxes: </h1>
                    <p className=" text-[16px] font-[700]" > ${0.00}</p>
                </div>

                <div className="flex mb-5" >
                    <input type="text" placeholder='Promo code '
                     className='w-[250px] border-black border p-1' />
                    <button  className="box-border p-1 px-6 text-sm bg-[#313537] text-white " >ADD</button>
                </div>
               </div>
             
          </div> );
   else return(
    <div className="hidden" ></div>
  )        
}
 
export default Checkout;