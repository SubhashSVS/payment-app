import Button from '../components/SubmitButton';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import SubmitButton from '../components/SubmitButton';
import Description from '../components/Description';
import Navigation from '../components/Navigation';

const SignUp = ()=>{
    return <div className='min-h-screen flex items-center justify-center m-0 p-0'> 
        <div className='flex flex-col w-96 p-5 rounded-xl  bg-white m-4'>
            <Heading title={"SignUp"} />
            <Description context={"signup"} />
            <InputBox title={"First Name"} placeholder={"John"} star={"yes"} />
            <InputBox title={"Last Name"} placeholder={"Doe"} star={"yes"} />
            <InputBox title={"Email"} placeholder={"johndoe@example.com"} star="yes" />
            <InputBox title={"Password"} placeholder={"********"} />
            <SubmitButton title={"Sign Up"} />
            <Navigation context="signup" route="Login" link="url" />
        </div>
    </div>
} 

export default SignUp;