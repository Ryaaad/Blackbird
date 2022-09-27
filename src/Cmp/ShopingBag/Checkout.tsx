
import { useDispatch, useSelector } from "react-redux";
import Checkoutitem from "./Checkoutitem";
const Checkout = () => {
    const {Bag} = useSelector((state:any) => state.cart);
    return ( 
        <div className="flex gap-2 lg:flex-col ">
            <div>
               { <h1 className="text-3xl font-semibold" > Shoping Bag </h1>}
               { Bag[1] && <div className="grid gap-5 mt-10 ">
                { Bag.map((bag:any)=>{
                        return <Checkoutitem key={bag.id} {...bag} ></Checkoutitem>
                    })}
                </div> }
            </div>
        </div>
     );
}
 
export default Checkout;