const Description = ({context})=>{
    return <div className="px-3 text-center text-lg text-gray-500 font-medium">
        {context == "signup" ? 
        "Enter your information to create an account" 
           : "Enter your credentials to access your account"
        }
    </div>
}

export default Description;