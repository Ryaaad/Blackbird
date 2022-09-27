import Navbar from "./Cmp/Navbar"
import Landing from "./Cmp/Landing"
import ShoppingBag from "./Cmp/ShopingBag/ShopingBag"
import { useSelector } from "react-redux"
import Checkout from "./Cmp/ShopingBag/Checkout"
import WebFont from 'webfontloader';
import { useEffect  } from "react";

function App() {
  const Added = useSelector((state:any) => state.man.Added);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto',"Archivo Narrow"]
      }
    });
   }, []);
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
  <Checkout></Checkout>
  </>
  )
}

export default App
