import { FiX} from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import {deleteproduct,reduceproduct,calcTotal} from "../../features/Cart/cartSlice"

interface props{
    id:string,
    img:string,
    mark:string,
    title:string,
    price:number,
    Promotion:number,
    amount:number,
}
const Product:React.FC<props>=(props)=>{
    
if(props.amount>0) {
    let price=props.price-(props.price * props.Promotion)/100
    let Newprice=price.toFixed(2)
    const dispatch = useDispatch()
    return( 
     <div className="border border-solid border-[#ccc] relative
               h-[140px] my-3 p-2 flex items-center gap-5 ">
  <img src={props.img[0]} className="h-[120px] w-[100px] brightness-95 " />
      <div className="flex flex-col gap-4 self-start mt-3 " >
      <h1 className=" text-black leading-5 " >{props.title}</h1>
      
   {props.Promotion>0 && <div className="flex justify-between " >
    <p   className='text-sm text-[#9b9b9b] line-through ' > ${props.price} </p>  <p  className="font-semibold text-[15px] "  >  ${ Newprice  } </p>
    </div> }
    {props.Promotion===0 &&  <p className="font-semibold text-[15px] "  > ${props.price} </p>}
   </div>
   <FiX className='text-xl absolute top-[4%] right-[2%] text-[#b1abab] cursor-pointer '
   onClick={()=>{dispatch(deleteproduct(props.id))  }}
   ></FiX>
     </div>
      
 )}
 else return (   
   <div className="hidden"></div>
   
 )
}

export default Product