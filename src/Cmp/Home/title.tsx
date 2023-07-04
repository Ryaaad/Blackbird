interface props{
    text:string,
    lightColor?:boolean
}
const Title:React.FC<props> = ({text,lightColor}) => {
    return ( 
        <div className="w-full grid ">
        <h1 className={`uppercase font-["Archivo Narrow",sans-serif] border-b-2 border-b-solid p-1 text-center tracking-widest justify-self-center text-sm md:text-base lg:text-xl 2xl:py-2
         ${lightColor ? "text-white border-white my-3 w-40 md:w-52 md:my-5 2xl:w-60 " : "text-[#333333] border-[#333333] sm:w-44 mb-4 md:mb-5 md:w-52 lg:w-60 xl:mb-6 2xl:mb-10 2xl:w-64"}`}> {text} </h1>
        </div>
  

     );
}
 
export default Title;