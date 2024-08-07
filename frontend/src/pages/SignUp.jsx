import { useState } from 'react';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import SubmitButton from '../components/SubmitButton';
import Description from '../components/Description';
import NavigationText from '../components/NavigationText';
import api from '../../api';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 p-6'>
      <div className='flex flex-col w-full max-w-md bg-white p-8 rounded-lg shadow-lg'>
        <Heading title={"Sign Up"} />
        <Description context={"signup"} />
        <InputBox onInput={(e) => {
            setFirstName(e.target.value);
          }} title={"First Name"} placeholder={"John"} star={"yes"} />
        <InputBox onInput={(e) => {
            setLastName(e.target.value);
          }} title={"Last Name"} placeholder={"Doe"} star={"yes"} />
        <InputBox onInput={(e) => {
            setUserName(e.target.value);
          }} title={"Email"} placeholder={"johndoe@example.com"} star={"yes"} />
        <InputBox onInput={(e) => {
            setPassword(e.target.value);
          }} title={"Password"} placeholder={"********"} />
        <SubmitButton
          onClick={async () => {
            const response = await api.post("/api/v1/user/signup", {
              userName: userName,
              firstName: firstName,
              lastName: lastName,
              password: password
            });
            localStorage.setItem("token", response.data.token);
            navigate(`/dashboard?id=${response.data.id}&name=${firstName}`);
          }}
          title={"Sign Up"}
        />
        <NavigationText context="signup" route="Sign In"/>
      </div>
    </div>
  );
};

export default SignUp;
