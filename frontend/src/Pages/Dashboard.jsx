import { Appbar } from "../Components/Appbar"
import{Balance} from "../Components/Balance"
import {Users} from "../Components/Users"
import { useNavigate } from "react-router-dom"
export const Dashboard = () => {
  const navigate = useNavigate();
  return <div>
      <Appbar />
      <div className="m-4">
          <Balance Value={"10,000"} />
          <Users />
      </div>
      <div>
    <button onClick={()=>{ 
      navigate("/signup") }}>Signup</button>
      </div>
      <div>
          <button onClick={()=>{
              navigate("/signin")
          }}>Signin</button>
      </div>
      <div>
          <button onClick={()=>{
              navigate("/send")
          }}>Send Money</button>
      </div>

  </div>
}