
interface props{
    img:any,
    Title:string,
    desc:string
}
const BlogBox:React.FC<props> = ({img,Title,desc}) => {
    return (
         <div  className="flex items-center gap-4 justify-between sm:gap-2 md:gap-0" >
        <img src={img} alt="BlogPic"  className="h-full w-[45%] md:w-[50%] lg:w-[55%]  " />
        <div className="flex flex-col items-start justify-center gap-2 w-full md:gap-5 md:w-[45%] lg:w-[38%]">
            <h1 className="text-[#333] font-[300] text-sm sm:text-xs md:text-lg lg:text-xl 2xl:text-2xl"> {Title} </h1>
            <div className="bg-[#333333df] text-white cursor-pointer hover:bg-[#333] duration-300 uppercase font-['Archivo Narrow'] p-1 px-3 text-[8px] md:text-xs md:p-2 md:px-4 lg:p-3 lg:px-5 xl:text-sm ">
                 Read More</div>
        </div>
        </div> 
    );
}
 
export default BlogBox;