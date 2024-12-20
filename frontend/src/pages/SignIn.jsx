import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import Description from '../components/Description';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import NavigationText from '../components/NavigationText';
import SubmitButton from '../components/SubmitButton';
import Error from '../components/Error';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

const SignIn = ({ title }) => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 p-6'>
      <div className='flex flex-col w-full max-w-md bg-white p-8 rounded-lg shadow-lg'>
        <Heading title={"Sign In"} />
        <Description context="signin" />
        <InputBox onInput={(e)=>{
          setEmail(e.target.value);
        }} title={"Email"} placeholder={"johndoe@example.com"} type={"text"} />
        <InputBox onInput={(e)=>{
          setPassword(e.target.value);
        }} title={"Password"} placeholder={"********"} type={"password"} />
        <SubmitButton onClick={async ()=>{
            try{
              setLoading(true);
              const response = await api.post('/api/v1/user/signin',{
                userName : email,
                password : password
              })
              if(response.status === 200){
                localStorage.setItem('token',response.data.token);
                navigate(`/dashboard?id=${response.data.id}&name=${response.data.firstName}`);
              }
            }catch(error){
              setLoading(false);
              if(error.response.status === 400){
                setError(error.response.data.message);
              } else if(error.response.status === 411){
                setError(error.response.data.message);
              }
            }
        }} title="Sign In" disabled={loading ? true : false} />
        {
          loading ? 
            <div className='flex justify-center pt-3'>
              <ClipLoader color="#000000" size={30} /> 
            </div> 
            : null
        }
        <NavigationText context={"signin"} route={"Sign Up"}/>
        <Error errorText={error} />
      </div>
    </div>
  );
};

export default SignIn;
