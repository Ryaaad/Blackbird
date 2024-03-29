import Navbar from "./Cmp/shared/Navbar"
import Landing from "./Cmp/Home/Landing"
import ShoppingBag from "./Cmp/ShopingBag/ShopingBag"
import { useSelector,useDispatch } from "react-redux"
import Checkout from "./Cmp/Checkout/Checkout"
import WebFont from 'webfontloader';
import {deleteproduct,reduceproduct,calcTotal} from "./features/Cart/cartSlice"
import { BsArrowUp,BsMessenger } from "react-icons/bs"
import { useEffect, useState  } from "react";
import Footer from "./Cmp/shared/Footer"
import Menuu from "./Cmp/shared/Menu"

function App() {
  const Added = useSelector((state:any) => state.man.Added);
  const dispatch=useDispatch()
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto',"Archivo Narrow"]
      }
    });
   }, []);
   const {amount} = useSelector((state:any) => state.cart);
  //  const {Checkout} = useSelector((state:any) => state.man);
   useEffect(()=>{dispatch(calcTotal())},[amount]);
   const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
const [Arr,SetArr]=useState(false)
useEffect(()=>{
  window.addEventListener("scroll",()=>{
    if (window.scrollY > 500) {
      SetArr(true);
  } else {
    SetArr(false);
  }
  })
},[])


  return (
  <div  className="relative" >
    
  <Navbar/>
 
  {Added.etat && <>
        <div className="fixed h-[100vh] w-full z-[120] bottom-0 left-0 ">
     <ShoppingBag Add={true} />
        </div>
       <div className="h-[100vh] fixed top-0 right-0 opacity-100  w-full bg-[#00000099] z-[60] "  ></div>
      
     </>  }

  {/* <Checkout/> */}
  <Landing/>
  <Footer/> 

  <div  className='fixed top-[40%] right-[1%] z-50 w-24 h-32 lg:h-40  ' >
   {!Arr ? <div  className='bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full grid justify-center items-center top-[50%] right-[2%] shadow-lg z-50 absolute cursor-pointer h-12 w-12 lg:h-14 lg:w-14' >
           <BsMessenger className=' text-white text-2xl lg:text-3xl ' />
           </div>
          : <div className='rounded-full grid justify-center items-center top-[50%] right-[2%] shadow-md bg-[#eee] duration-1000 z-50 absolute text-[#575757] hover:bg-[#575757] h-12 w-12 lg:h-14 lg:w-14
           first:hover:text-[#eee] cursor-pointer'
          onClick={()=>{goToTop()}} >
           <BsArrowUp className='text-2xl lg:text-3xl ' />
           </div>
  }
  
     <Menuu/>

    </div>
  </div>
  )
}

export default App
