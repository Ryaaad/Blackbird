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
     <div className="border border-solid border-[#ccc] relative my-3 p-2 flex items-center gap-4 h-32 sm:h-28 lg:h-40">
     <img src={props.img[0]} className=" brightness-95 h-20 w-16 lg:h-32 lg:w-24" />
      <div className="flex flex-col gap-4 self-start mt-3 w-full" >
      <h1 className=" text-black leading-5 w-[90%] sm:w-[80%] xl:text-lg  " >{props.title}</h1>
      
   {props.Promotion>0 && <div className="flex gap-3" >
    <p className='text-sm text-[#9b9b9b] line-through xl:text-base '> ${props.price} </p>  <p  className="font-semibold text-base xl:text-lg">  ${ Newprice  } </p>
    </div> }
    {props.Promotion===0 &&  <p className="font-semibold text-base xl:text-lg"> ${props.price} </p>}
     </div>
      <FiX className='text-xl absolute top-3 right-3 text-[#b1abab] cursor-pointer xl:text-2xl '
       onClick={()=>{dispatch(deleteproduct(props.id))  }} />
      </div>
      
 )}
 else return (   
   <div className="hidden"></div>
 )
}

export default Product