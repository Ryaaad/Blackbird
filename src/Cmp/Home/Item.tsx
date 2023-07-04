import suit from '../assets/img/suit.jpg'
import pants from '../assets/img/pants.jfif'
import shoes from '../assets/img/shoes.jpg'
import gun from '../assets/img/gun.jpg'
import { useDispatch ,useSelector } from "react-redux";
import ImgHandler from './ImgHandler';
import { useEffect, useState } from 'react'
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
  
   const [width, setwidth] = useState(`50px`)
    if(props.type){
return(
    <div  style={{ backgroundImage: `url( ${props.img})` }} className={`relative bg-cover bg-center w-full h-full `} >
    <div  className='py-5 bg-[#ffffffd1] text-center absolute bottom-[7%] right-[50%] min-h-max translate-x-[50%] w-[85%] xl:py-6 xl:w-[90%]  '>
      <p  className="font-['Archivo Narrow',sans-serif] font-semibold text-[#4c4c4c] italic sm:text-xs md:text-sm xl:text-lg" >{props.Slogan}</p>
      <h2  className="font-semibold text-[#444444] tracking-wider uppercase font-['Roboto',sans-serif] sm:text-sm md:text-base xl:text-xl "  >{props.type}</h2>
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
<div>
 <div className={`relative w-full bg-cover bg-center font-['Roboto',sans-serif]`}  >
  
   <ImgHandler fav={props.fav} id={props.id} img={props.img}></ImgHandler>
   <div  className='bg-[#313537] grid text-white text-xs uppercase justify-center absolute top-3 right-4 py-1 w-12 z-10 2xl:w-14 2xl:text-sm'>New </div>

   {props.Promotion>0 && 
    <div  className='bg-[#a40e1c] grid text-white text-xs uppercase justify-center font-semibold absolute top-12 right-4 py-1 w-12 font-["Roboto",sans-serif] z-10  2xl:w-14 2xl:text-sm'>
      - {props.Promotion}%
    </div> }

   
 </div>
  <div className="mt-2 py-1 flex items-center ">
  <div className='h-20 grid items-center content-center justify-center border-r border-r-[#b1b1b1] border-r-solid pr-4 mr-4'>
   {props.Promotion>0 && <div>
    <p   className=' text-[#9b9b9b] line-through md:text-sm lg:text-xs 2xl:text-sm'> ${props.price} </p>  <p  className="font-semibold md:text-lg lg:text-sm 2xl:text-lg">  ${ Newprice  } </p>
    </div> }
    {props.Promotion===0 && <p className="font-semibold md:text-lg lg:text-sm 2xl:text-lg "> ${props.price} </p>}
   </div>


 <div  className='grid items-center content-start'>
 <p  className='text-[#b1b1b1] md:text-lg lg:text-sm w-[90%] 2xl:text-base' > {props.mark} </p>
 <h2  className='text-[#444444] md:text-sm lg:text-xs 2xl:text-sm' >{props.title}</h2> 
 </div>
  
    </div>
</div>
)
}

export default Card

