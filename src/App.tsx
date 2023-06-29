import Navbar from "./Cmp/shared/Navbar"
import Landing from "./Cmp/Home/Landing"
import ShoppingBag from "./Cmp/ShopingBag/ShopingBag"
import { useSelector,useDispatch } from "react-redux"
import Checkout from "./Cmp/Checkout/Checkout"
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
  //  const {Checkout} = useSelector((state:any) => state.man);
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

  {/* <div className="bg-[green] ">
  <Shoped     id="s"
    img="string"
    Type="string"
    title="string"
    price={1000}
    Promotion={55}
  ></Shoped>

  </div> */}
  <Checkout></Checkout>
 
  </>
  )
}

export default App
