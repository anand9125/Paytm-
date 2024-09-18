import {Heading} from "../Components/Heading"
import { Subheading } from "../Components/Subheading"
import { Inputbox } from "../Components/Inputbox"
import{Button} from "../Components/Button"
import { BottomWarning } from "../Components/BottomWarning"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
 import axios from "axios";  // 


export const Signup = ()=>{
    const[firstName,setFirstName] = useState("");
    const [lastName ,setLastName] = useState("");
    const [username ,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

return <div className="bg-slate-300 h-screen  flex justify-center">
         <div className="flex flex-col justify-center" >
                 <div className = "mt-12 rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label = {"Sign up"} ></Heading>
                <Subheading label ={"Enter the information to create an account"}></Subheading>
                <Inputbox  onChange ={e=>{
                    setFirstName(e.target.value)
                }}label={"First Name"} placeholder={"Anand"}></Inputbox>
                <Inputbox onChange={e=>{
                    setLastName(e.target.value)
                }} label={"Last Name"} placeholder={"Chuadhary"}></Inputbox>
                <Inputbox onChange={e=>{
                    setUsername(e.target.value)
                }} label={"Email"} placeholder={"******@gmail.com"}></Inputbox>
                <Inputbox onChange={e=>{
                    setPassword(e.target.value)
                }} label={"Password"} placeholder={"********"}></Inputbox>
               <Button
  label={"Sign up"}
  onClick={async () => {
    // Basic validation
    if (!username || !firstName || !lastName || !password) {
      alert("All fields are required.");
      return;
    }

    try {
      // Make the POST request
      const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
        username: username,
        firstName,
        lastName,
        password
      });

      // Store the token and navigate
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      // Handle errors
      console.error("Signup error:", err);
      alert("Signup failed. Please try again.");
    }
  }}
>
</Button>
          <BottomWarning label = {"Already have account ? "} buttonText={"Sign in"} to={"/signin"}></BottomWarning>
                </div>
         </div>  
     </div>
}