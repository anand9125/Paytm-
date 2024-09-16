import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Signup } from "./Pages/Signup";
import{Signin} from "./Pages/Signin"
import{Dashboard} from "./Pages/Dashboard"
import{Send} from "./Pages/Send"


function App() {
  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/send" element={<Send/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
