import { BsArrowRight } from "react-icons/bs"
import { FaLinkedinIn, FaFacebookF,FaTwitter } from "react-icons/fa"
import { TfiYoutube} from "react-icons/tfi"
const Footer = () => {
    return ( 
        <>
        <div  className="text-[#333333] w-full flex flex-col items-center py-20 gap-12 md:py-12 md:gap-8 sm:py-8 sm:gap-5 " >
            <h1 className='font-[500] uppercase tracking-[3px] font-["Archivo Narrow",sans-serif] text-lg  sm:text-base'>  Stay Up to date </h1>
            <div className="relative h-max ">
            <input type="text"  placeholder="Enter your email adress" className=" pl-2 focus:outline-0 placeholder-[#444444] h-12 w-[60vw] text-xl border-b-solid border-b border-[#444444]
             text-[#444444] sm:text-base sm:w-[75vw] " />
            <BsArrowRight  className="text-xl absolute top-[50%] translate-y-[-50%] right-[2%] cursor-pointer" ></BsArrowRight>
            </div>
        </div>
        
        <div className="flex items-center justify-center w-full py-6 gap-2 text-xl text-[#333] sm:text-lg sm:py-2 sm:gap-1 ">
            <div className="hover:bg-[#1884bc] hover:text-white p-3 rounded-[10%] duration-500 cursor-pointer ">
             <FaLinkedinIn></FaLinkedinIn>
            </div>
            <div className="hover:bg-[#4e69a2] hover:text-white p-3 rounded-[10%] duration-500 cursor-pointer ">
             <FaFacebookF></FaFacebookF>
            </div>
            <div className="hover:bg-[#33aaf3] hover:text-white p-3 rounded-[10%] duration-500 cursor-pointer ">
             <FaTwitter></FaTwitter>
            </div>
            <div className="hover:bg-[#d13534] hover:text-white p-3 rounded-[10%] duration-500 cursor-pointer ">
             <TfiYoutube></TfiYoutube>
            </div>
        </div>
        <div className="w-full text-center text-sm text-[#333] mb-5 sm:text-[12px] ">Easy returns. Free shipping on orders over $100. Need help?</div>
        </>
     );
}
 
export default Footer;