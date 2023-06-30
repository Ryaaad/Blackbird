import lady from '../../assets/img/HeroPart/lady.webp'
import flower from '../../assets/img/HeroPart/flower.webp'
import ladyhand from '../../assets/img/HeroPart/ladyhand.webp'
import shoes from '../../assets/img/HeroPart/shoes.webp'
import pinkbg from '../../assets/img/HeroPart/pinkbg.webp'
import Forest from "../../assets/img/Landing/Forest.webp"
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

  const handleNextSlide = (SwiperName:string) => {
    switch (SwiperName) {
      case "POPULAR PRODUCTS":
        if (swiperRefPopular.current && swiperRefPopular.current.swiper) {
          swiperRefPopular.current.swiper.slideNext();
        }
        break;
    
      case "TESTIMONIAL":
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideNext();
        }
        break;
    }
  };

  const handlePrevSlide = (SwiperName:string) => {
    switch (SwiperName) {
      case "POPULAR PRODUCTS":
        if (swiperRefPopular.current && swiperRefPopular.current.swiper) {
          swiperRefPopular.current.swiper.slidePrev();
        }
        break;
    
      case "TESTIMONIAL":
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slidePrev();
        }
        break;
    }


  
  };
    const Cgt= useSelector((state:any) => state.cart.Categorie);
    const items= useSelector((state:any) => state.cart.Product);
    const dispatch=useDispatch()
const [LatestFilter, setLatestFilter] = useState('Featured')
return(
    <div  className=" relative mt-5 " >
    <div className="px-9 mb-10 lg:mb-6 bg-white gap-4 justify-center grid h-auto grid-cols-[20%,20%,10%,20%,20%] grid-rows-[18vw,10vw,18vw] md:gap-2  ">
<div style={{backgroundImage:`url(${lady})`}} className="bg-black col-start-1 col-end-4 
row-start-1 row-end-4 bg-cover bg-center
"></div>
<div style={{backgroundImage:`url(${flower})`}} className="bg-black col-start-4 col-end-5 row-start-1 row-end-2 bg-cover bg-center text-[#ffffff] flex flex-col items-center gap-2 justify-center  ">
  <p className='text-[1vw]  font-["Archivo_Narrow",sans-serif] tracking-[2px] mb-5 mdm:mb-3 lg:mb-0 ' >NEW LOOKS </p>
  <p className='text-[1.5vw] font-["Roboto",sans-serif] max-w-[100px] text-center tracking-[5px]   ' >HAVE LANDED</p>
 </div>

<div style={{backgroundImage:`url(${shoes})`}} className="bg-black col-start-4 col-end-5 
row-start-2 row-end-4 bg-cover bg-center relative ">
   <div  className=' bg-[#ffffff88] py-4 text-center absolute bottom-[8%] translate-x-[50%] 
  right-[50%] w-[80%] '>
      <p  className="font-['Archivo Narrow',sans-serif] text-[#4c4c4c] text-[.9vw]
       italic" >spring / summer</p>
      <h2  className="text-[1vw] text-[#444444] tracking-wider  uppercase 
       font-['Roboto',sans-serif] font-semibold mt-1 "  >NEW ARRIVALS</h2>
  </div>
</div>

<div style={{backgroundImage:`url(${ladyhand})`}} className="bg-black col-start-5 col-end-6
 row-start-1 row-end-3 bg-cover bg-center relative  ">
  <div  className=' bg-[#ffffff88] py-4 text-center absolute bottom-[8%] translate-x-[50%] 
  right-[50%] w-[80%] '>
      <p  className="font-['Archivo Narrow',sans-serif] text-[#4c4c4c] text-[.9vw]
       italic" >fashion jelewry</p>
      <h2  className="text-[1vw] text-[#444444] tracking-wider  uppercase 
       font-['Roboto',sans-serif] font-semibold mt-1 "  >NOW 2 FOR $25</h2>
  </div>

 </div>

<div style={{backgroundImage:`url(${pinkbg})`}} className="bg-black col-start-5 col-end-6 
row-start-3 row-end-4 bg-cover bg-center text-center grid items-center relative text-[#ffffff]  ">
<div  className='font-["Roboto",sans-serif] text-[2.9vw] mb-7 
tracking-[1vw] '  > FREE 
<span className='tracking-[1px] text-[2vw] mt-[-10px] ' > SHIPPING</span></div>

<span className='absolute text-[1vw] bottom-[11%] right-[20%] md:right-[15%]  ' >
   ORDERS OF $95 OR MORE</span>

</div>
    </div>

    <div className="px-9 text-center grid justify-center justify-items-center w-full ">
        <div className="w-[40px] border-b-black border-b-solid border-b-[2px] h-[10px] my-5 "></div>
       <h1  className='text-[#333333] text-xl font-["Archivo_Narrow",sans-serif] font-500 tracking-[5px] uppercase md:text-lg ' >Blackbrid IS AN ECOMMERCE PLATFORM</h1>
       <h1  className='text-[#ababab] text-sm font-500 p-2 font-["Roboto",sans-serif] my-5  ' >Quisque euismod pretium lacinia. Vivamus 
       sollicitudin placerat sit amet sagittis. Mauris ac ante porta, pellentesque lacus.</h1>
    </div>
<div className="grid w-full px-20 my-[100px]  ">
    <Title text='SHOP BY CATEGORY' ></Title>
    <div className="grid grid-cols-[repeat(4,20vw)] w-full grid-rows-[420px] lg:grid-rows-[40vw] relative justify-between">
<BsArrowRight className='text-3xl absolute top-[50%] right-[-5%] cursor-pointer z-10 xl:text-2xl  md:right-[-5px] md:rounded-full md:p-2 md:bg-white ' 
onClick={()=>dispatch(moved('+'))} ></BsArrowRight>
<BsArrowLeft  className='text-3xl absolute top-[50%] left-[-5%] cursor-pointer z-10 xl:text-2xl md:left-[-5px] md:rounded-full md:p-2 md:bg-white '
onClick={()=>dispatch(moved('-'))}
></BsArrowLeft>
    {Cgt?.map((Cat:any)=>{
   return <Item key={Cat.id} {...Cat} ></Item>
    })}
   </div>
</div>  
 <div className="grid w-full px-20 my-[100px] ">
 <Title text='LATEST PRODUCTS' ></Title>
  <div className="flex justify-between justify-self-center font-['Roboto',sans-serif] italic text-[15px] mb-10 font-[500] w-[240px] ">
    <h1 className= {`hover:text-[#444444] tracking-wider cursor-pointer translate-x-[-15%] ${LatestFilter=="Featured" ? "text-[#444444]" : "text-[#b6b6b6]"  }`}  
    onClick={()=>setLatestFilter("Featured")}
    >Featured</h1>
    <h1 className= {`hover:text-[#444444] tracking-wider cursor-pointer ${LatestFilter=="Special" ? "text-[#444444]" : "text-[#b6b6b6]"  }`}  
    onClick={()=>setLatestFilter("Special")}>Special</h1>
    <h1 className= {`hover:text-[#444444] tracking-wider cursor-pointer translate-x-[15%] ${LatestFilter=="New" ? "text-[#444444]" : "text-[#b6b6b6]"  }`}  
    onClick={()=>setLatestFilter("New")}>New</h1>
  </div>

  <div className="grid grid-cols-[repeat(5,minmax(140px,200px))] overflow-hidden xl:grid-cols-[repeat(5,180px)]  w-full relative justify-between">
    
    {items?.map((item:any)=>{
   return <Item key={item.id} {...item} ></Item>
    })}
   
</div>
 </div> 
 
 <div style={{ backgroundImage: `url( ${Forest})` }} className="w-full h-[468px] p-12 flex flex-col items-center ">
  <Title text='TESTIMONIALS' lightColor ></Title>
  <div className="w-full relative text-white px-10 flex items-center ">
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
        className='h-[250px]'
      >
        <SwiperSlide  className='text-center h-full grid items-center justify-center text-[16px] leading-6 w-[50%] px-10 ' >
          <blockquote>  Ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere, dolor quis consectetur facilisis, nisl erat pellentesque velit, ac gravida magna eros vitae nisi. Phasellus condimentum a 
            elit vitae dictum. Fusce risus ipsum, tristique quis lorem non, iaculis </blockquote>
            <p className="">John Doe , 10.11.2022</p>
        </SwiperSlide>
        <SwiperSlide  className='text-center h-full grid items-center justify-center text-[16px] leading-6 w-[50%] px-10 ' >
          <blockquote>  Ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere, dolor quis consectetur facilisis, nisl erat pellentesque velit, ac gravida magna eros vitae nisi. Phasellus condimentum a 
            elit vitae dictum. Fusce risus ipsum, tristique quis lorem non, iaculis </blockquote>
            <p className="">John Doe , 10.11.2022</p>
        </SwiperSlide>
        <SwiperSlide  className='text-center h-full grid items-center justify-center text-[16px] leading-6 w-[50%] px-10 ' >
          <blockquote>  Ipsum dolor sit amet, consectetur adipiscing elit. Morbi posuere, dolor quis consectetur facilisis, nisl erat pellentesque velit, ac gravida magna eros vitae nisi. Phasellus condimentum a 
            elit vitae dictum. Fusce risus ipsum, tristique quis lorem non, iaculis </blockquote>
            <p className="">John Doe , 10.11.2022</p>
        </SwiperSlide>
      </Swiper>

      <BsArrowRight
        className="text-xl absolute top-[50%] translate-y-[-50%] right-[1%] cursor-pointer"
        onClick={()=>  handleNextSlide("TESTIMONIAL")}
      />
      <BsArrowLeft
        className="text-xl absolute top-[50%] translate-y-[-50%] left-[1%] cursor-pointer"
        onClick={()=> handlePrevSlide("TESTIMONIAL")}
      />
  </div>
 </div>

<div className="px-20 w-full my-[100px] ">
  <Title text='POPULAR PRODUCTS' ></Title>
  <div className="w-full relative h-[385px] ">
      <Swiper
        spaceBetween={25}
        initialSlide={1}
        loop
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        ref={swiperRefPopular}
      >
         {items?.map((item:any,index:number)=>{
   return <SwiperSlide key={index} className='w-[220px] h-full '>
          <Item key={item.id} {...item} ></Item>
          </SwiperSlide>
    })}
      </Swiper>
      <BsArrowRight
        className="text-xl absolute top-[50%] translate-y-[-50%] right-[-3%] cursor-pointer"
        onClick={()=>  handleNextSlide("POPULAR PRODUCTS")}
      />
      <BsArrowLeft
        className="text-xl absolute top-[50%] translate-y-[-50%] left-[-3%] cursor-pointer"
        onClick={()=> handlePrevSlide("POPULAR PRODUCTS")}
      />
  </div>
</div>
<div className="px-20 w-full my-[100px] ">
  <Title text='FROM THE BLOG' ></Title>
  <div className="w-full relative h-[350px] ">
      <Swiper
        spaceBetween={45}
        initialSlide={1}
        loop
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        ref={swiperRefPopular}
      >
         {Blogs?.map((Blog:any,index:number)=>{
   return <SwiperSlide key={index} className='w-[250px] h-full ' >
          <BlogBox key={index} {...Blog} ></BlogBox>
          </SwiperSlide>
    })}
      </Swiper>
      <BsArrowRight
        className="text-xl absolute top-[50%] translate-y-[-50%] right-[-3%] cursor-pointer"
        onClick={()=>  handleNextSlide("POPULAR PRODUCTS")}
      />
      <BsArrowLeft
        className="text-xl absolute top-[50%] translate-y-[-50%] left-[-3%] cursor-pointer"
        onClick={()=> handlePrevSlide("POPULAR PRODUCTS")}
      />
  </div>
</div>
<div className="w-full my-[50px] ">
  <Title text='#INSTA_ALYSUM' ></Title>
</div>


  </div>
)

}

export default Landing