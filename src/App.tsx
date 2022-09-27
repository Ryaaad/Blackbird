import Navbar from "./Cmp/Navbar"
import Landing from "./Cmp/Landing"
import ShoppingBag from "./Cmp/ShopingBag/ShopingBag"
import { useSelector,useDispatch } from "react-redux"
import Checkout from "./Cmp/ShopingBag/Checkout"
import WebFont from 'webfontloader';
import {deleteproduct,reduceproduct,calcTotal} from "./features/Cart/cartSlice"
import { useEffect  } from "react";

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
   const {Checkout} = useSelector((state:any) => state.man);
   useEffect(()=>{dispatch(calcTotal())},[amount]);
  return (
  <>
  <Navbar></Navbar>
 
  {Added.etat && <>
        <div className="fixed h-[100vh] w-full z-[120] top-[50%] translate-y-[-50%]  left-[50%] translate-x-[-50%] "  
        >
     <ShoppingBag Add={true} ></ShoppingBag>
        </div>
       <div className="h-[100vh] fixed top-0 right-0 opacity-100  w-full bg-[#00000099] z-[60] "  ></div>
      
     </>  }

  <Landing></Landing>
  
  </>
  )
}

export default App
