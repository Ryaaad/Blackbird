import suit from '../assets/img/suit.jpg'
import pants from '../assets/img/pants.jfif'
import shoes from '../assets/img/shoes.jpg'
import gun from '../assets/img/gun.jpg'
import { useDispatch ,useSelector } from "react-redux";
import ImgHandler from '../ItemImg/ImgHandler';
import { useEffect } from 'react'
// import { increase , Fav,Buy} from '../features/Cart/Cartslice';

// import { FavSec} from '../features/Cart/Cartslice'; 


interface props{
    id:string,
    img:string,
    mark:string,
    title:string,
    price:number,
    fav?:boolean
    Promotion:number,
    amount?:number,
    type?:string,
    Slogan?:string,
    nbr?:number
}
const Card:React.FC<props> = (props)=>{
   
    if(props.type){
return(
    <div  style={{ backgroundImage: `url( ${props.img})` }} className={`relative bg-cover bg-center `} >
    <div  className=' py-3 bg-[#ffffffd1] text-center absolute bottom-[7%] right-[2%] h-[90px] w-[80%] lg:w-[90%] lg:h-[100px] '>
      <p  className="font-['Archivo Narrow',sans-serif] font-semibold text-[#4c4c4c]
       italic" >{props.Slogan}</p>
      <h2  className="text-lg font-semibold text-[#444444] tracking-wider  uppercase 
       font-['Roboto',sans-serif]  "  >{props.type}</h2>
    </div>

  </div>

);
    }
    let price=props.price-(props.price * props.Promotion)/100
   let Newprice=price.toFixed(2)

   const dispatch=useDispatch()
   const { F } = useSelector((state:any) => state.cart);
   const  bagItems  = useSelector((state:any) => state.shopbag);
   
  //  useEffect(()=>{
  //   // dispatch(FavSec())
  // },[props.fav])
return (
    <div  >
 <div 
 className= "relative w-[210px] h-[270px] bg-cover bg-center font-['Roboto',sans-serif] "  >
  
   <ImgHandler fav={props.fav} id={props.id} img={props.img}></ImgHandler>
 
   <div  className='bg-[#313537] grid text-white text-[11px] uppercase justify-center content-center
    absolute top-[5%] right-[22%] translate-x-[50%] h-[23px] w-[48px] xl:right-[29%]  '>New
   </div>

   {props.Promotion>0 && 
    <div  className='bg-[#a40e1c] grid text-white text-[11px] uppercase justify-center content-center font-semibold
    absolute top-[15%] right-[22%] translate-x-[50%] h-[23px] w-[48px] 
    font-["Roboto",sans-serif] xl:right-[29%] '>- {props.Promotion}%
    </div> }

   
   </div>
  <div className="grid gap-2 mt-2 grid-cols-[70px,125px] py-1 ">
  <div className='h-[90px] grid items-center content-center justify-center border-r
   border-r-[#b1b1b1] border-r-solid '  >
   {props.Promotion>0 && <div>
    <p   className='text-sm text-[#9b9b9b] line-through ' > ${props.price} </p>  <p  className="font-semibold text-[15px] "  >  ${ Newprice  } </p>
    </div> }
    {props.Promotion===0 &&  <p className="font-semibold text-[15px] "  > ${props.price} </p>}
   </div>


 <div  className='h-[95px] grid items-center content-start'>
 <p  className='text-[#b1b1b1] text-[15px] w-[90%] leading-[15px] my-2 ' > {props.mark} </p>
 <h2  className='text-sm text-[#444444] ' >{props.title}</h2> 
 </div>
  
 
  

    </div>
    </div>
)
}

export default Card

