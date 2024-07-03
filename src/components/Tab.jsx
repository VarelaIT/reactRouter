import { Link } from "react-router-dom";

export default function Tab({title, uri}){
    return (
    <Link 
        style={{
            height: "12px",
            border: "solid 1px #222",
            borderRadius: "4px",
            padding: "8px",
            paddingBottom: "12px",
        }} 

        to={uri}
    >
       <span>{title}</span> 
       <div className="tab-shadow"></div>
    </Link>
    )
}