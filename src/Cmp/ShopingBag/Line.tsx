
interface props{
h:string,
p:number,
last?:boolean
}

const Line:React.FC<props>=(props)=>{
if(props.last)return(
        <div className="flex justify-between w-full font-['Roboto',sans-serif]">
                       <h1  className="text-[17px] xl:text-[14px] " >{props.h} </h1>
                        <p className=" text-[16px] font-[700] xl:text-[13px] " > ${props.p}</p>
                   </div>
)
else return(
    <div className="flex justify-between w-full border-b text-[#414141] font-['Roboto',sans-serif]
     border-dashed border-b-[#ccc]">
                   <h1  className="text-[17px] " >{props.h} </h1>
                    <p className=" text-[16px] font-[700]" > ${props.p}</p>
               </div>
)
}

export default Line