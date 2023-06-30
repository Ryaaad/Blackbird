
interface props{
    img:any,
    Title:string,
    desc:string
}
const BlogBox:React.FC<props> = ({img,Title,desc}) => {
    return (
         <div  className="flex items-center justify-between" >
        <img src={img} alt="BlogPic"  className=" h-full w-[55%] " />
        <div className="w-[38%] flex flex-col items-start justify-center gap-5  ">
            <h1 className="text-[#333] text-2xl leading-8 font-[300] "> {Title} </h1>
            <div className="bg-[#333333df] text-white cursor-pointer hover:bg-[#333] duration-300 uppercase text-[12px] font-['Archivo Narrow'] p-3 px-5 "> Read More</div>
        </div>
        </div> 
    );
}
 
export default BlogBox;