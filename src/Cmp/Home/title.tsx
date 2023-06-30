interface props{
    text:string,
    lightColor?:boolean
}
const Title:React.FC<props> = ({text,lightColor}) => {
    return ( 
        <div className="w-full grid ">
        <h1 className={`uppercase font-["Archivo Narrow",sans-serif] w-[240px] border-b-[2px] border-b-solid p-1 text-xl text-center tracking-[2px] justify-self-center
         ${lightColor ? "text-white border-white w-[200px]  my-10 " : "text-[#333333] border-[#333333]  mb-10 "}`}> {text} </h1>
        </div>
  

     );
}
 
export default Title;