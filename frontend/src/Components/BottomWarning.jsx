import {Link} from "react-router-dom"
export const BottomWarning = ({label,buttonText,to})=>{
    return <div className="pb-1">
        <div>
        {label}
        <Link className="underline " to={to}>{buttonText}</Link>
        </div>   
    </div>
}