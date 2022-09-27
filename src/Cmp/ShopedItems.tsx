import { useDispatch } from "react-redux";
import { increase ,Buy} from '../features/Cart/Cartslice';
import { MdAddShoppingCart,MdDelete} from "react-icons/md";
// import { FaMinus } from "react-icons/fa"

interface props{
    id:string,
    img:string,
    Type:string,
    title:string,
    price:number,
    fav?:number
    Promotion:number,
    amount?:number,
    name?:string,
    text?:string,
    nbr?:number
}
const Shoped:React.FC<props> = (props)=>{
   const dispatch=useDispatch()

  if(props.id!=='A'){
return (
    <div  >
 <div  style={{ backgroundImage: `url(${props.img})` }} className= "relative w-[300px] h-[300px] bg-cover bg-center "  >
 <MdAddShoppingCart 
  className='absolute top-[3%] left-[2%] text-3xl cursor-pointer hover:scale-105'
  onClick={()=>{dispatch(increase(props.id));  dispatch(Buy(props.id));}}
  >  </MdAddShoppingCart>
   <div   className="bg-black text-white p-2 px-4 grid  absolute top-[70%] right-[8%] 
   h-[100px] w-[250px] text-center " >

   <h1> {props.Type} </h1>
  <div  className="flex justify-between text-2xl " >
  <MdDelete></MdDelete> <MdDelete  className="text-[red]  " ></MdDelete>
  </div> 
   </div>

   </div>

    </div>
)}
else return(
  <span  className="hidden" ></span>
)
}

export default Shoped