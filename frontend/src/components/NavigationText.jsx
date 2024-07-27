const NavigationText = ({context,route})=>{
    return <div className="mt-3 text-center">
        {context = "signup" ?
            "Already have an account? "
            : "Don't have an account? "
        }
        <a>{route}</a>
    </div>
}
export default NavigationText;