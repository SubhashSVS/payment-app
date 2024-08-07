import { useState } from 'react';
import Heading from '../components/Heading';
import { useNavigate, useSearchParams } from 'react-router-dom';
import api from '../../api';

const SendMoney = ()=>{
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount,setAmount] = useState();
    const navigate = useNavigate();

    return <div className='min-h-screen flex items-center justify-center'> 
        <div className='flex-col w-96 p-5 shadow-md
        '>
            <Heading title={"Send Money"}/>
            <div className="flex py-3 text-lg font-medium items-center mt-6">
                <div className="mr-3 bg-green-400 pt-1 size-9 rounded-full text-center text-lg">{name[0]}</div>
                {name}
            </div>
            <div className='flex flex-col text-sm font-medium'>
                Amount (in Rs)
                <input onChange={(e)=>{
                    setAmount(e.target.value);
                }} type="text" placeholder='Enter Amount' className='border rounded p-3 mt-1'/>
                <div><button onClick={()=>{
                    api.post('/api/v1/account/transfer',{
                        to : id,
                        amount : amount
                    },{
                        headers : {
                            Authorization : "Bearer " + localStorage.getItem("token")
                        }
                    })
                    navigate(`/dashboard?id=${id}&name=${name}`,{state : { replace : true }});
                }} className='size-full bg-green-400 rounded p-3 mt-4'>Initiate Transfer</button></div>
            </div>
        </div>
    </div>
}

export default SendMoney;