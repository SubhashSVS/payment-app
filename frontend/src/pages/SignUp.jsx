import { useState } from 'react';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import SubmitButton from '../components/SubmitButton';
import Description from '../components/Description';
import NavigationText from '../components/NavigationText';
import axios from "axios";

const SignUp = ()=>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName,setUserName] = useState("");
    const [password, setPassword] = useState("");

    return <div className='min-h-screen flex items-center justify-center m-0 p-0'> 
        <div className='flex flex-col w-96 p-5 rounded-xl  bg-white m-4'>
            <Heading title={"SignUp"} />
            <Description context={"signup"} />
            <InputBox onInput={(e)=>{
                setFirstName(e.target.value);
            }} title={"First Name"} placeholder={"John"} star={"yes"} />
            <InputBox onInput={(e)=>{
                setLastName(e.target.value);
            }} title={"Last Name"} placeholder={"Doe"} star={"yes"} />
            <InputBox onInput={(e)=>{
                setUserName(e.target.value);
            }} title={"Email"} placeholder={"johndoe@example.com"} star="yes" />
            <InputBox onInput={(e)=>{
                setPassword(e.target.value);
            }} title={"Password"} placeholder={"********"} />
            <SubmitButton onClick={async()=>{
                const response  = await axios.post("http://localhost:3000/api/v1/user/signup",{
                    userName : userName,
                    firstName : firstName,
                    lastName : lastName,
                    password : password
                })
                localStorage.setItem("token",response.data.token)
            }} title={"Sign Up"} />
            <NavigationText context="signup" route="Login" link="url" />
        </div>
    </div>
} 

export default SignUp;