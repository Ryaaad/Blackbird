import { useSelector,useDispatch } from 'react-redux';
import { FiMenu,FiX  } from "react-icons/fi";
import { Click} from '../../features/Menu/menuSlice';
import { MdFavorite } from "react-icons/md";
import { BsFillPiggyBankFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import {OpenClose } from '../../features/Manuelle/ManSlice'
  


  // menu states
  

const Menuu=()=>{
  const {amount} = useSelector((state:any) => state.cart);
  const {Menu} = useSelector((state:any) => state.menu);
  const dispatch=useDispatch()
return(
    <div className="menu absolute z-50 top-[0%] right-[1%]">
    <div className="grid items-center hover:scale-105 duration-[0.5s] justify-center z-10 cursor-pointer rounded-full bg-black h-12 w-12 lg:h-14 lg:w-14 "
      onClick={()=>dispatch(Click())}
      >
    { !Menu && <>
     <FiMenu className='text-white font-semibold text-2xl lg:text-3xl ' ></FiMenu>
      { amount>0 &&
       <p className="absolute text-xs justify-center border-white border-solid border-[3px] bg-[red] rounded-full flex items-center text-white font-semibold top-[-25%] right-[-15%] h-7 w-7
       lg:h-8 lg:w-8 lg:top-[-20%] lg:right-[-14%]" >  {amount} </p>}
      </> }
    {  Menu && <FiX className='text-white font-semibold text-2xl lg:text-3xl' />}
  
     </div>
   
{ Menu &&   
<> 
  <div className="grid items-center hover:scale-110 duration-[0.5s] justify-center absolute top-[50%] z-10 translate-y-[-50%] left-[-80px] text-white mx-5 cursor-pointer rounded-[20%] bg-black h-9 w-9 
  lg:h-10 lg:w-10 "
      onClick={()=>dispatch(Click())}>
   <FaShoppingCart className='font-semibold text-xl '
   onClick={()=>{dispatch(OpenClose())}}/>
   { amount>0 &&
 <p className="absolute h-[24px] w-[24px] text-xs top-[-30%] right-[-30%] border-white border-solid border-[3px] bg-[red] rounded-full text-center text-white font-semibold " >  {amount} </p>}
     </div>
  <div className="grid items-center hover:scale-110 duration-[0.5s] justify-center absolute bottom-20 left-[-15px] z-10 mx-5 cursor-pointer h-9 w-9 rounded-[20%] bg-black text-white lg:h-10 lg:w-10"
onClick={()=>dispatch(Click())}
>
<MdFavorite className='font-semibold text-xl '/>
</div>

</>
}
   
    </div>
)
}

export default Menuu