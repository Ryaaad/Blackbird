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
     <div className=" relative xl:w-[180px] w-[200px] h-[270px] "
     onMouseOver={()=>{setVis(true),seticon(true) }}
      onMouseOut={()=>{setVis(false),seticon(false)}} >
        
  {props.img.length===3 && 
  <> 
  <div className=" x xl:w-[calc(180px/3)] w-[calc(200px/3)] h-[270px] absolute flex items-end top-0 left-0 z-30   ">
  <div className={`A w-full bg-[#deddddfb] h-[0px] duration-200 
   ${visible?'h-[5px]':'h-[0px]'} ease-in-out`} ></div> 
 </div>

 <div className=" x xl:w-[calc(180px/3)] w-[calc(200px/3)] h-[270px] absolute flex items-end top-0 left-[33.5%] 
 z-30 " onMouseOver={()=>{setpic(props.img[1])}} onMouseOut={()=>{setpic(props.img[0])}}
 >
  <div className={`A w-full bg-[#deddddfb] h-[0px] duration-200 
   ${visible?'h-[5px]':'h-[0px]'} ease-in-out`}></div>
 </div>

 <div className= " x   xl:w-[calc(180px/3)] w-[calc(200px/3)] h-[270px] absolute flex items-end top-0 right-0 z-30 "
 onMouseOver={()=>{setpic(props.img[2])}} onMouseOut={()=>{setpic(props.img[0])}}
 >
  <div className={`A w-full bg-[#deddddfb] h-[0px] duration-200 
   ${visible?'h-[5px]':'h-[0px]'} ease-in-out`}></div> 
 </div>
 <img src={pic} className=" h-[270px] bg-cover bg-center brightness-95  " />
 </>
  }
{props.img.length===2 && 
  <> 
  <div className=" x  xl:w-[calc(180px/2)] w-[calc(200px/2)] h-[270px] absolute flex items-end top-0 left-0 z-30  ">
  <div className={`A w-full bg-[#deddddfb] h-[0px] duration-200 
   ${visible?'h-[5px]':'h-[0px]'} ease-in-out`} ></div> 
 </div>
 <div className= " x xl:w-[calc(180px/2)] w-[calc(200px/2)] h-[270px] absolute flex items-end top-0 right-0 z-30 "
 onMouseOver={()=>{setpic(props.img[1])}} onMouseOut={()=>{setpic(props.img[0])}}
 >
  <div className={`A w-full bg-[#deddddfb] h-[0px] duration-200 
   ${visible?'h-[5px]':'h-[0px]'} ease-in-out`}></div> 
 </div>
 <img src={pic} className=" h-[270px] bg-cover bg-center brightness-95 " />
 </>
  }
    </div>

{ icons && <div className="flex gap-3 absolute text-xl z-40 top-[50%] 
left-[50%] translate-y-[-50%]  translate-x-[-50%]" >
<div className=" grid justify-center items-center h-[45px] w-[45px]  
duration-300 bg-black text-white rounded-full hover:scale-[1.15]  cursor-pointer" 
onMouseOver={()=>{setVis(false),seticon(true)}} onMouseOut={()=>{setVis(true)}}
>
<AiOutlineEye></AiOutlineEye>
</div>
<div className="grid justify-center items-center h-[45px] w-[45px] duration-300
bg-black text-white rounded-full hover:scale-[1.15] cursor-pointer" 
onMouseOver={()=>{setVis(false),seticon(true)}} onMouseOut={()=>{setVis(true)}}
onClick={()=>{dispatch(Addproduct(props.id));dispatch(AddOpen(props.id))}}
>
   <MdAddShoppingCart>  </MdAddShoppingCart></div>

<div className="grid justify-center items-center h-[45px] w-[45px] duration-300 bg-black
text-white rounded-full hover:scale-[1.15] cursor-pointer" 
onMouseOver={()=>{setVis(false),seticon(true)}} onMouseOut={()=>{setVis(true)}} 
onClick={()=>dispatch(Fav(props.id))}
>

{ props.fav &&
     <MdFavorite 
    // 
     ></MdFavorite>}
    { !props.fav && 
    <MdOutlineFavoriteBorder 
    ></MdOutlineFavoriteBorder>} 

</div>
         </div>}
    </>
   
)
}

export default ImgHandler
