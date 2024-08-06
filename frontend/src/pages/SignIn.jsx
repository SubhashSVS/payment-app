import { useState } from 'react';
import Description from '../components/Description';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import NavigationText from '../components/NavigationText';
import SubmitButton from '../components/SubmitButton';
import Error from '../components/Error';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ title }) => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 p-6'>
      <div className='flex flex-col w-full max-w-md bg-white p-8 rounded-lg shadow-lg'>
        <Heading title={"Sign In"} />
        <Description context="signin" />
        <InputBox onInput={(e)=>{
          setEmail(e.target.value);
        }} title={"Email"} placeholder={"johndoe@example.com"} />
        <InputBox onInput={(e)=>{
          setPassword(e.target.value);
        }} title={"Password"} placeholder={"********"} />
        <SubmitButton onClick={async ()=>{
            try{
              const response = await axios.post('http://localhost:3000/api/v1/user/signin',{
                userName : email,
                password : password
              })
              if(response.status === 200){
                localStorage.setItem('token',response.data.token);
                navigate(`/dashboard?id=${response.data.id}&name=${response.data.firstName}`);
              }
            }catch(error){
              if(error.response.status === 400){
                setError(error.response.data.message);
              } else if(error.response.status === 411){
                setError(error.response.data.message);
              }
            }
        }} title="Sign In" />
        <NavigationText context={"signin"} route={"Sign Up"}/>
        <Error errorText={error} />
      </div>
    </div>
  );
};

export default SignIn;
