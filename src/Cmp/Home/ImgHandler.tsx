import {useState } from "react"
import { MdFavorite,MdOutlineFavoriteBorder} from "react-icons/md"; 
import { MdAddShoppingCart} from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { Fav,Addproduct } from "../../features/Cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AddOpen } from "../../features/Manuelle/ManSlice"
interface props{
    img:string,
    fav?:boolean,
    id:string
}

const ImgHandler:React.FC<props>=(props)=>{
const dispatch=useDispatch()
const bought = useSelector((state:any) => state.cart.Bag);
const Added = useSelector((state:any) => state.man.Added);


    const [pic,setpic]=useState(props.img[0])
    const [visible,setVis]=useState(false)
    const [icons,seticon]=useState(false)

return(
    <>
     <div className="relative w-full h-full z-10"
     onMouseOver={()=>{setVis(true),seticon(true) }}
      onMouseOut={()=>{setVis(false),seticon(false)}} >
        
  {props.img.length===3 && 
 <> 
  <div className=" x w-[33.4%] h-full absolute flex items-end top-0 left-0 z-30 ">
  <div className={`A w-full bg-[#deddddfb] h-0 duration-200  ${visible?'h-1 2xl:h-2':'h-0'} ease-in-out`} ></div> 
 </div>

 <div className=" x w-[33.4%] h-full absolute flex items-end top-0 left-[33.5%] z-30 " 
 onMouseOver={()=>{setpic(props.img[1])}} onMouseOut={()=>{setpic(props.img[0])}}>
  <div className={`A w-full bg-[#deddddfb] h-0 duration-200 ${visible?'h-1 2xl:h-2':'h-0'} ease-in-out`}></div>
 </div>

 <div className= " x w-[33.4%] h-full absolute flex items-end top-0 right-0 z-30 "
 onMouseOver={()=>{setpic(props.img[2])}} onMouseOut={()=>{setpic(props.img[0])}}>
  <div className={`A w-full bg-[#deddddfb] h-0 duration-200 ${visible?'h-1 2xl:h-2':'h-0'} ease-in-out`}></div> 
 </div>
 <img src={pic} className=" h-full bg-cover bg-center brightness-95 w-full " />
 </>
  }
{props.img.length===2 && 
 <> 
  <div className=" x w-[50%] h-full absolute flex items-end top-0 left-0 z-30">
  <div className={`A w-full bg-[#deddddfb] h-0 duration-200 ${visible?'h-1 2xl:h-2':'h-0'} ease-in-out`} ></div> 
 </div>
 <div className= " x w-[50%] h-full absolute flex items-end top-0 right-0 z-30"
 onMouseOver={()=>{setpic(props.img[1])}} onMouseOut={()=>{setpic(props.img[0])}} >
  <div className={`A w-full bg-[#deddddfb] h-0 duration-200  ${visible?'h-1 2xl:h-2':'h-0'} ease-in-out`}></div> 
 </div>
 <img src={pic} className=" h-full bg-cover bg-center brightness-95 w-full" />
 </>
  }
    </div>

{icons && <div className="flex absolute text-xl z-40 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] gap-2 xl:gap-3 2xl:gap-4" >
<div className="grid justify-center items-center duration-300 bg-black text-white rounded-full hover:scale-[1.15] cursor-pointer text-lg h-12 w-12 lg:text-sm lg:h-10 lg:w-10 xl:text-lg xl:h-12 xl:w-12 2xl:h-14 2xl:w-14 2xl:text-2xl" 
onMouseOver={()=>{setVis(false),seticon(true)}} onMouseOut={()=>{setVis(true)}}
>
<AiOutlineEye></AiOutlineEye>
</div>
<div className="grid justify-center items-center duration-300 bg-black text-white rounded-full hover:scale-[1.15] cursor-pointer text-lg h-12 w-12 lg:text-sm lg:h-10 lg:w-10 xl:text-lg xl:h-12 xl:w-12 2xl:h-14 2xl:w-14 2xl:text-2xl" 
onMouseOver={()=>{setVis(false),seticon(true)}} onMouseOut={()=>{setVis(true)}}
onClick={()=>{dispatch(Addproduct(props.id));dispatch(AddOpen(props.id))}}
>
   <MdAddShoppingCart>  </MdAddShoppingCart></div>

<div className="grid justify-center items-center duration-300 bg-black text-white rounded-full hover:scale-[1.15] cursor-pointer text-lg h-12 w-12 lg:text-sm lg:h-10 lg:w-10 xl:text-lg xl:h-12 xl:w-12 2xl:h-14 2xl:w-14 2xl:text-2xl" 
onMouseOver={()=>{setVis(false),seticon(true)}} onMouseOut={()=>{setVis(true)}} 
onClick={()=>dispatch(Fav(props.id))}
>

{ props.fav &&
     <MdFavorite></MdFavorite>}
    { !props.fav && 
    <MdOutlineFavoriteBorder 
    ></MdOutlineFavoriteBorder>} 

</div>
         </div>}
    </>
   
)
}

export default ImgHandler
