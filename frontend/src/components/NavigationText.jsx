import {Link} from 'react-router-dom';

const NavigationText = ({context,route})=>{
    return <div className="mt-3 text-center">
        {context == "signup" ?
            "Already have an account? "
            : "Don't have an account? "
        }
        <Link to={context === "signup" ? "/signin" : "/signup"} className="font-medium"><u>{route}</u></Link>
    </div>
}
export default NavigationText;