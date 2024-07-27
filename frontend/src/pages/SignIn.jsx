import Description from '../components/Description';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import NavigationText from '../components/NavigationText';
import SubmitButton from '../components/SubmitButton';

const SignIn = ({title})=>{
    return <div className=' min-h-screen flex items-center justify-center m-0 p-0 '> 
        <div className='flex flex-col w-96 p-5'>
            <Heading title={"SignIn"} />
            <Description context="signin" />
            <InputBox title={"Email"} placeholder={"johndoe@example.com"} />
            <InputBox title={"Password"} placeholder={"********"} />
            <SubmitButton title="Sign In" />
            <NavigationText context={"sigin"} route={"Sign Up"} />
        </div>

    </div>
}

export default SignIn;