import lady from '../../assets/img/HeroPart/lady.webp'
import flower from '../../assets/img/HeroPart/flower.webp'
import ladyhand from '../../assets/img/HeroPart/ladyhand.webp'
import shoes from '../../assets/img/HeroPart/shoes.webp'
import pinkbg from '../../assets/img/HeroPart/pinkbg.webp'
import Forest from "../../assets/img/Landing/Forest.webp"
import Categorie from '../../data/Categorie';
import { moved } from '../../features/Cart/cartSlice';
import Item from './Item'
import { BsArrowRight,BsArrowUp,BsArrowLeft,BsMessenger } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState,useRef  } from 'react'
import Title from './title'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/swiper.min.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Blogs from '../../data/Blog'
import BlogBox from './BlogBox'
const Landing=()=>{

  const swiperRef = useRef<Swiper | null>(null); 
  const swiperRefPopular = useRef<Swiper | null>(null); 
  const swiperRefBlog = useRef<Swiper | null>(null); 

  const handleNextSlide = (SwiperName:React.MutableRefObject<any>) => {
        if (SwiperName.current && SwiperName.current.swiper) {
          SwiperName.current.swiper.slideNext();
        }
  };

  const handlePrevSlide =(SwiperName:React.MutableRefObject<any>) => {
    if (SwiperName.current && SwiperName.current.swiper) {
      SwiperName.current.swiper.slidePrev();
    }
};
    const Cgt= useSelector((state:any) => state.cart.Categorie);
    const items= useSelector((state:any) => state.cart.Product);
    const dispatch=useDispatch()
const [LatestFilter, setLatestFilter] = useState('Featured')
return(
<div  className="relative mt-5 overflow-hidden">
  <div className="px-4 max-w- sm:px-8 md:px-5 lg:px-10 mb-10 lg:mb-6 bg-white gap-2 justify-center grid h-auto grid-cols-[20%,21%,13%,21%,20%] grid-rows-[19vw,12vw,19vw] md:grid-cols-[20%,20%,10%,20%,20%] md:grid-rows-[18vw,10vw,18vw] xl:px-28 2xl:px-44 xl:grid-rows-[17vw,9vw,17vw] 
  xl:grid-cols-[21%,22%,10%,22%,21%] 2xl:py-2 2xl:gap-4">
      <div style={{backgroundImage:`url(${lady})`}} className="bg-black col-start-1 col-end-4 row-start-1 row-end-4 bg-cover bg-center"></div>
        <div style={{backgroundImage:`url(${flower})`}} className="bg-black col-start-4 col-end-5 row-start-1 row-end-2 bg-cover bg-center text-[#ffffff] flex flex-col items-center gap-2 justify-center">
             <p className='text-[1vw]  font-["Archivo_Narrow",sans-serif] tracking-[2px] mb-5 mdm:mb-3 lg:mb-0'>NEW LOOKS </p>
             <p className='text-[1.5vw] font-["Roboto",sans-serif] max-w-24 text-center tracking-[5px]'>HAVE LANDED</p>
        </div>

    <div style={{backgroundImage:`url(${shoes})`}} className="bg-black col-start-4 col-end-5 row-start-2 row-end-4 bg-cover bg-center relative">
     <div  className='bg-[#ffffff88] py-4 text-center absolute bottom-[8%] translate-x-[50%] right-[50%] w-[80%]'>
      <p  className="font-['Archivo Narrow',sans-serif] text-[#4c4c4c] text-[.9vw] italic">spring / summer</p>
      <h2  className="text-[1vw] text-[#444444] tracking-wider uppercase font-['Roboto',sans-serif] font-semibold mt-1 "  >NEW ARRIVALS</h2>
     </div>
    </div>

    <div style={{backgroundImage:`url(${ladyhand})`}} className="bg-black col-start-5 col-end-6 row-start-1 row-end-3 bg-cover bg-center relative">
     <div  className=' bg-[#ffffff88] py-4 text-center absolute bottom-[8%] translate-x-[50%] right-[50%] w-[80%] '>
      <p  className="font-['Archivo Narrow',sans-serif] text-[#4c4c4c] text-[.9vw] italic" >fashion jelewry</p>
      <h2  className="text-[1vw] text-[#444444] tracking-wider  uppercase font-['Roboto',sans-serif] font-semibold mt-1 ">NOW 2 FOR $25</h2>
     </div>
    </div>

<div style={{backgroundImage:`url(${pinkbg})`}} className="bg-black col-start-5 col-end-6 row-start-3 row-end-4 bg-cover bg-center text-center grid items-center relative text-[#ffffff]">
<div  className='font-["Roboto",sans-serif] text-[2.9vw] mb-7 tracking-[1vw] '> FREE 
<span className='tracking-[1px] text-[2vw] mt-[-10px] ' > SHIPPING</span></div>
<span className='absolute text-[1vw] bottom-[11%] right-[20%] md:right-[15%]'>ORDERS OF $95 OR MORE</span>
</div>
  </div>

  <div className="text-center grid justify-center justify-items-center w-full px-4 sm:px-8 md:px-5 lg:px-10 xl:px-28 2xl:px-44">
    <div className=" hidden sm:block border-b-black border-b-solid border-b-2 w-8 my-3 md:my-5 md:w-10 xl:w-12"></div>
     <h1 className='text-[#333333] font-["Archivo_Narrow",sans-serif] font-[500] uppercase tracking-widest text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>Blackbrid IS AN ECOMMERCE PLATFORM</h1>
     <h1 className='text-[#ababab] text-xs font-[500] p-2 font-["Roboto",sans-serif] md:text-sm lg:text-base xl:my-2' >Quisque euismod pretium lacinia. Vivamus sollicitudin placerat sit amet sagittis. Mauris 
     ac ante porta, pellentesque lacus.</h1>
   </div>
<div className=" w-full my-8 sm:my-12 md:my-16 lg:my-20 xl:my-24">
    <Title text='SHOP BY CATEGORY' />
    <div className="grid w-full relative h-[100vw] gap-4 px-4 grid-cols-2 sm:grid-cols-4 sm:px-8 md:px-5 lg:px-10 xl:px-28 2xl:px-44 sm:h-[35vw] sm:gap-2 lg:gap-6 md:gap-4 lg:h-[35vw] xl:gap-5 xl:h-[32vw] 2xl:gap-8 2xl:h-[30vw] ">
    {Categorie?.map((Cat:any)=>{
   return <Item key={Cat.id} {...Cat} ></Item>
    })}
</div>

</div>  
 <div className="grid w-full my-12 md:my-16 lg:my-20 xl:my-24 px-4 sm:px-8 md:px-5 lg:px-10 xl:px-28 2xl:px-44">
 <Title text='LATEST PRODUCTS' />
  <div className="flex justify-between justify-self-center font-['Roboto',sans-serif] italic font-[500] text-xs mb-5 sm:text-sm w-44 sm:mb-3 md:text-base md:w-52 md:mb-8 lg:mb-10 lg:text-lg lg:w-60 xl:text-xl 2xl:w-64">
    <h1 className= {`hover:text-[#444444] tracking-wider cursor-pointer translate-x-[-15%] ${LatestFilter=="Featured" ? "text-[#444444]" : "text-[#b6b6b6]"  }`}  
    onClick={()=>setLatestFilter("Featured")}>Featured</h1>
    <h1 className= {`hover:text-[#444444] tracking-wider cursor-pointer ${LatestFilter=="Special" ? "text-[#444444]" : "text-[#b6b6b6]"  }`}  
    onClick={()=>setLatestFilter("Special")}>Special</h1>
    <h1 className= {`hover:text-[#444444] tracking-wider cursor-pointer translate-x-[15%] ${LatestFilter=="New" ? "text-[#444444]" : "text-[#b6b6b6]"  }`}  
    onClick={()=>setLatestFilter("New")}>New</h1>
  </div>

  <div className="grid w-full relative gap-5 grid-cols-1 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-8 lg:grid-cols-5 lg:gap-5 xl:gap-8 ">
    {items?.map((item:any)=>{
   return <Item key={item.id} {...item} ></Item>
    })} 
  </div>
 </div> 
 
 <div style={{ backgroundImage: `url( ${Forest})` }} className="w-full flex flex-col items-center h-80 sm:h-64 p-5 md:h-80 md:p-8 xl:h-96 xl:p-12 ">
  <Title text='TESTIMONIALS' lightColor />
  <div className="w-full relative text-white px-4 sm:px-8 md:px-5 lg:px-10 flex items-center">
      <Swiper
        spaceBetween={20}
        centeredSlides
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        ref={swiperRef}
        className='h-52 sm:h-40 xl:h-44'
      >
        <SwiperSlide  className='text-center h-full grid items-center justify-center leading-4 sm:leading-5 w-[50%] text-xs sm:px-2 sm:text-sm md:text-base md:px-5 lg:px-10 2xl:text-xl' >
          <blockquote>  Ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere, dolor quis consectetur facilisis, nisl erat pellentesque velit, ac gravida magna eros vitae nisi. Phasellus condimentum a 
            elit vitae dictum. Fusce risus ipsum, tristique quis lorem non, iaculis </blockquote>
            <p className="self-start">John Doe , 10.11.2022</p>
        </SwiperSlide>
        <SwiperSlide  className='text-center h-full grid items-center justify-center leading-4 sm:leading-5 w-[50%] text-xs sm:px-2 sm:text-sm md:text-base md:px-5 lg:px-10 2xl:text-xl' >
          <blockquote>  Ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere, dolor quis consectetur facilisis, nisl erat pellentesque velit, ac gravida magna eros vitae nisi. Phasellus condimentum a 
            elit vitae dictum. Fusce risus ipsum, tristique quis lorem non, iaculis </blockquote>
            <p className="self-start">John Doe , 10.11.2022</p>
        </SwiperSlide>
        <SwiperSlide  className='text-center h-full grid items-center justify-center leading-4 sm:leading-5 w-[50%] text-xs sm:px-2 sm:text-sm md:text-base md:px-5 lg:px-10 2xl:text-xl' >
          <blockquote>  Ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere, dolor quis consectetur facilisis, nisl erat pellentesque velit, ac gravida magna eros vitae nisi. Phasellus condimentum a 
            elit vitae dictum. Fusce risus ipsum, tristique quis lorem non, iaculis </blockquote>
            <p className="self-start">John Doe , 10.11.2022</p>
        </SwiperSlide>
      </Swiper>

      <BsArrowRight
        className="text-xl absolute top-[50%] translate-y-[-100%] right-[-3%] sm:right-[1%] cursor-pointer md:translate-y-[-50%]  lg:text-2xl xl:text-3xl 2xl:text-4xl "
        onClick={()=>  handleNextSlide(swiperRef)}
      />
      <BsArrowLeft
        className="text-xl absolute top-[50%] translate-y-[-100%] left-[-3%] sm:left-[1%] cursor-pointer  md:translate-y-[-50%] lg:text-2xl xl:text-3xl 2xl:text-4xl "
        onClick={()=> handlePrevSlide(swiperRef)}
      />
  </div>
 </div>

<div className="w-full my-8 sm:my-12 md:my-16 lg:my-20 px-4 sm:px-8 md:px-5 lg:px-10 xl:my-24 xl:px-28 2xl:px-44">
  <Title text='POPULAR PRODUCTS'/>
  <div className="w-full relative h-max hidden lg:block ">
      <Swiper
        spaceBetween={25}
        initialSlide={1}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        ref={swiperRefPopular}
      >
         {items?.map((item:any,index:number)=>{
   return <SwiperSlide key={index} className=' h-full'>
          <Item key={item.id} {...item} ></Item>
          </SwiperSlide>
    })}
      </Swiper>
      <BsArrowRight
        className="text-xl absolute top-[50%] translate-y-[-100%] right-[-3%] cursor-pointer lg:text-2xl xl:text-3xl 2xl:text-4xl xl:right-[-5%]"
        onClick={()=>  handleNextSlide(swiperRefPopular)}
      />
      <BsArrowLeft
        className="text-xl absolute top-[50%] translate-y-[-100%] left-[-3%] cursor-pointer lg:text-2xl xl:text-3xl 2xl:text-4xl xl:left-[-5%]"
        onClick={()=> handlePrevSlide(swiperRefPopular)}
      />
  </div>

  <div className="w-full relative h-max hidden md:block px-4 sm:px-8 md:px-5 lg:hidden ">
      <Swiper
        spaceBetween={20}
        initialSlide={1}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        ref={swiperRefPopular}
      >
         {items?.map((item:any,index:number)=>{
   return <SwiperSlide key={index} className=' h-full'>
          <Item key={item.id} {...item} ></Item>
          </SwiperSlide>
    })}
      </Swiper>
      <BsArrowRight
        className="text-xl absolute top-[35%] right-[-1%] cursor-pointer"
        onClick={()=>  handleNextSlide(swiperRefPopular)}
      />
      <BsArrowLeft
        className="text-xl absolute top-[35%] left-[-1%] cursor-pointer"
        onClick={()=> handlePrevSlide(swiperRefPopular)}
      />
  </div>

  <div className="w-full relative h-max hidden sm:block px-4 sm:px-8 md:hidden">
      <Swiper
        spaceBetween={30}
        initialSlide={1}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        ref={swiperRefPopular}
      >
         {items?.map((item:any,index:number)=>{
   return <SwiperSlide key={index} className='h-full'>
          <Item key={item.id} {...item} ></Item>
          </SwiperSlide>
    })}
      </Swiper>
      <BsArrowRight
        className="text-xl absolute top-[35%] right-[-1%] cursor-pointer"
        onClick={()=>  handleNextSlide(swiperRefPopular)}
      />
      <BsArrowLeft
        className="text-xl absolute top-[35%] left-[-1%] cursor-pointer"
        onClick={()=> handlePrevSlide(swiperRefPopular)}
      />
  </div>

  <div className="w-full relative h-max px-4 sm:hidden ">
      <Swiper
        spaceBetween={30}
        initialSlide={1}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        ref={swiperRefPopular}
      >
         {items?.map((item:any,index:number)=>{
   return <SwiperSlide key={index} className='h-full'>
          <Item key={item.id} {...item} ></Item>
          </SwiperSlide>
    })}
      </Swiper>
      <BsArrowRight
        className="text-2xl absolute top-[35%] right-[10%] z-20 cursor-pointer"
        onClick={()=>  handleNextSlide(swiperRefPopular)}
      />
      <BsArrowLeft
        className="text-2xl absolute top-[35%] left-[10%] z-20 cursor-pointer"
        onClick={()=> handlePrevSlide(swiperRefPopular)}
      />
  </div>
</div>
<div className="w-full my-8 sm:my-12 md:my-16 lg:my-20 xl:my-24 px-4 sm:px-8 md:px-5 lg:px-10 xl:px-28 2xl:px-44 2xl:my-32 ">
  <Title text='FROM THE BLOG' />
  <div className="w-full relative h-max px-4 hidden sm:block sm:px-8 md:px-5 lg:px-0">
      <Swiper
        spaceBetween={45}
        initialSlide={1}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        ref={swiperRefBlog}
      >
         {Blogs?.map((Blog:any,index:number)=>{
   return <SwiperSlide key={index} className=' h-full lg:w-64' >
          <BlogBox key={index} {...Blog} ></BlogBox>
          </SwiperSlide>
    })}
      </Swiper>
      <BsArrowRight
        className="absolute top-[50%] right-0 translate-y-[-50%] md:right-[-1%] md:translate-y-[-100%] md:text-xl lg:right-[-3%] cursor-pointer xl:text-3xl 2xl:text-4xl xl:right-[-5%] "
        onClick={()=>  handleNextSlide(swiperRefBlog)}
      />
      <BsArrowLeft
        className="absolute top-[50%] left-0 translate-y-[-50%] md:left-[-1%]  md:translate-y-[-100%] md:text-xl lg:left-[-3%] cursor-pointer xl:text-3xl 2xl:text-4xl xl:left-[-5%] "
        onClick={()=> handlePrevSlide(swiperRefBlog)}
      />
  </div>

  <div className="w-full relative h-max px-5 block sm:hidden">
      <Swiper
        spaceBetween={45}
        initialSlide={1}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        ref={swiperRefBlog}
      >
         {Blogs?.map((Blog:any,index:number)=>{
   return <SwiperSlide key={index} className=' h-full lg:w-64' >
          <BlogBox key={index} {...Blog} ></BlogBox>
          </SwiperSlide>
    })}
      </Swiper>
      <BsArrowRight
        className="absolute top-[50%] right-0 translate-y-[-50%] md:right-[-1%] md:translate-y-[-100%] md:text-xl lg:right-[-3%] cursor-pointer xl:text-3xl 2xl:text-4xl xl:right-[-5%] "
        onClick={()=>  handleNextSlide(swiperRefBlog)}
      />
      <BsArrowLeft
        className="absolute top-[50%] left-0 translate-y-[-50%] md:left-[-1%]  md:translate-y-[-100%] md:text-xl lg:left-[-3%] cursor-pointer xl:text-3xl 2xl:text-4xl xl:left-[-5%] "
        onClick={()=> handlePrevSlide(swiperRefBlog)}
      />
  </div>
 
</div>
<div className="w-full xl:my-8 2xl:my-12 ">
  <Title text='#INSTA_ALYSUM' />
</div>


</div>
)

}

export default Landing