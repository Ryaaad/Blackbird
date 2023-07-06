
interface props{
h:string,
p:number,
last?:boolean
}

const Line:React.FC<props>=(props)=>{
if(props.last) return(
        <div className="flex justify-between w-full font-['Roboto',sans-serif]">
                       <h1  className=" text-base lg:text-lg" >{props.h} </h1>
                        <p className=" text-sm lg:text-base font-[700] " > ${props.p}</p>
                   </div>
)
else return(
    <div className="flex justify-between w-full border-b text-[#414141] font-['Roboto',sans-serif]
     border-dashed border-b-[#ccc]">
                   <h1  className=" text-base lg:text-lg " >{props.h} </h1>
                    <p className="text-sm lg:text-base font-[700]" > ${props.p}</p>
               </div>
)
}

export default Line