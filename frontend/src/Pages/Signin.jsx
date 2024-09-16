import {Heading} from "../Components/Heading"
import { Subheading } from "../Components/Subheading"
import { Inputbox } from "../Components/Inputbox"
import{Button} from "../Components/Button"
import { BottomWarning } from "../Components/BottomWarning"
export const Signin = ()=>{
return <div className="bg-slate-300 h-screen  flex justify-center">
<div className="flex flex-col justify-center" >
        <div className = "mt-12 rounded-lg bg-white w-80 text-center p-2 h-max px-4">
       <Heading label = {"Sign in"} ></Heading>
       <Subheading label ={"Enter the information to sign in account"}></Subheading>
       <Inputbox label={"Email"} placeholder={"******@gmail.com"}></Inputbox>
       <Inputbox label={"Password"} placeholder={"********"}></Inputbox>
       <Button label ={"Sign in"} ></Button>
       <BottomWarning label = {" Don't have an account? "} buttonText={"Sign up"} to={"/signup"}></BottomWarning>
       </div>
</div>  
</div>
}