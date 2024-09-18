import { Subheading } from "../Components/Subheading"
import { Inputbox } from "../Components/Inputbox"
import { Heading } from "../Components/Heading"
import { Button } from "../Components/Button"
export const Send = ()=>{
    return <div className="bg-slate-300 h-screen  flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center h-max px-4">
            <Heading label={"Send Money"}></Heading>
             <div className="p-6">
                
            <div className="flex items-center  space-x-4">
                    <div className=" w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-2xl text-white">A</span>
                    </div>
                    <h3 className=" text-2xl font-semibold">Friend's Name</h3>
                </div>
            </div> 

            <Inputbox label ={"Amount (in Rs)"} placeholder={"Enter the amount"}></Inputbox>
            <Button label={"Initiate Transfer"}></Button>
         <div className="pt-4"></div> 

            </div>
      </div>
    </div>

}