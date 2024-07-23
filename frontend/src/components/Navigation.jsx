import { Link } from "react-router-dom";

const Navigation = ({context,route})=>{
    return <div className="mt-3 text-center">
        {context = "signup" ?
            "Already have an account? "
            : "Don't have an account? "
        }
        <a>{route}</a>
    </div>
}
export default Navigation;