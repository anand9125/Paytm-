import {Heading} from "../Components/Heading"
import { Subheading } from "../Components/Subheading"
import { Inputbox } from "../Components/Inputbox"
import{Button} from "../Components/Button"
import { BottomWarning } from "../Components/BottomWarning"
export const Signup = ()=>{
return <div className="bg-slate-300 h-screen  flex justify-center">
         <div className="flex flex-col justify-center" >
                 <div className = "mt-12 rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label = {"Sign up"} ></Heading>
                <Subheading label ={"Enter the information to create an account"}></Subheading>
                <Inputbox label={"First Name"} placeholder={"Anand"}></Inputbox>
                <Inputbox label={"Last Name"} placeholder={"Chuadhary"}></Inputbox>
                <Inputbox label={"Email"} placeholder={"******@gmail.com"}></Inputbox>
                <Inputbox label={"Password"} placeholder={"********"}></Inputbox>
                <Button label ={"Sign up"} ></Button>
                <BottomWarning label = {"Already have account ? "} buttonText={"Sign in"} to={"/signin"}></BottomWarning>
                </div>
         </div>  
     </div>
}