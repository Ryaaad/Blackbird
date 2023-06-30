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
  <Navbar></Navbar>
 
  {Added.etat && <>
        <div className="fixed h-[100vh] w-full z-[120] top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] "  
        >
     <ShoppingBag Add={true} ></ShoppingBag>
        </div>
       <div className="h-[100vh] fixed top-0 right-0 opacity-100  w-full bg-[#00000099] z-[60] "  ></div>
      
     </>  }

  <Landing></Landing>
  <Footer></Footer> 

  <div  className='fixed top-[40%] h-[150px] w-[100px] right-[1%] z-50 ' >
   {!Arr ? <div  className='bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full grid justify-center items-center top-[50%] right-[2%] shadow-lg h-[55px] w-[55px] z-50 absolute cursor-pointer ' >
           <BsMessenger className=' text-white text-3xl ' ></BsMessenger>
           </div>
          : <div className='rounded-full grid justify-center items-center top-[50%] right-[2%] shadow-md bg-[#eee] h-[55px] duration-1000 w-[55px] z-50 absolute text-[#575757] hover:bg-[#575757]
           first:hover:text-[#eee] cursor-pointer text-3xl'
          onClick={()=>{goToTop()}} >
           <BsArrowUp ></BsArrowUp>
           </div>
  }
  
     <Menuu></Menuu>

    </div>
  </div>
  )
}

export default App
