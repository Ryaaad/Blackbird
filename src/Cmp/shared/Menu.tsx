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
    <div className="grid items-center hover:scale-105 duration-[0.5s] justify-center z-10 cursor-pointer rounded-full h-[55px] w-[55px] bg-black   "
      onClick={()=>dispatch(Click())}
      >
    { !Menu && <>
     <FiMenu className='text-white font-semibold text-3xl ' ></FiMenu>
      { amount>0 &&
       <p className="absolute h-[32px] w-[32px] text-[12px] py-1 top-[-20%] right-[-14%]
        border-white border-solid border-[3px] bg-[red] 
        rounded-full leading-[18px] text-center text-white font-semibold  " >  {amount} </p>}
      </> }
    {  Menu && <FiX className='text-white font-semibold text-3xl ' ></FiX>}
  
     </div>
   
{ Menu &&   
<> 
  <div className="grid items-center absolute top-[135%] right-[-12%] hover:scale-110 duration-[0.5s] justify-center z-10
      mx-5 cursor-pointer rounded-[20%] h-10 w-10 bg-black "
      onClick={()=>dispatch(Click())}
      >
   <FaShoppingCart className='text-[#006480] font-semibold text-xl '
   onClick={()=>{dispatch(OpenClose())}}
   ></FaShoppingCart>
   { amount>0 &&
 <p className="absolute h-[24px] w-[24px] text-[12px] top-[-30%] right-[-30%]
  border-white border-solid border-[3px] bg-[red] 
  rounded-full text-center text-white font-semibold  " >  {amount} </p>}
     </div>
  <div className="grid items-center hover:scale-110 duration-[0.5s] justify-center absolute 
  top-[-104%] right-[-12%] z-10 mx-5 cursor-pointer h-10 w-10  rounded-[20%] bg-black "
onClick={()=>dispatch(Click())}
>
<MdFavorite className='text-[red] font-semibold text-xl ' ></MdFavorite>
</div>

<div className="grid items-center hover:scale-110 duration-[0.5s] justify-center absolute 
top-[50%]  z-10 translate-y-[-50%] left-[-130%]
mx-5 cursor-pointer h-10 w-10  rounded-[20%] bg-black "
onClick={()=>dispatch(Click())}
>
<BsFillPiggyBankFill className='text-[pink] font-semibold text-xl ' ></BsFillPiggyBankFill>
</div>
</>
}
   
    </div>
)
}

export default Menuu