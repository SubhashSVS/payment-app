import { useNavigate, useSearchParams } from 'react-router-dom';
import BalanceCard from '../components/BalanceCard';
import Header from '../components/Header';
import UsersCard from '../components/UsersCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ()=>{
    const [balance, setBalance] = useState();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const name = searchParams.get("name");
    const id = searchParams.get("id");
    useEffect(()=>{
        const check = async ()=>{
            const response = await axios.get('http://localhost:3000/api/v1/account/balance',{
                headers : {
                    Authorization : "Bearer"+" "+ localStorage.getItem("token")
                }
            });
            setBalance(response.data.balance);
        }
        check();
    },[balance])
    return <div className="min-h-screen bg-gray-50 p-5">
                <Header username={name} onClick={()=>{
                    localStorage.removeItem("token");
                    navigate('/');
                }} />
                <div className="mt-8 flex flex-col">
                    <BalanceCard amount={balance} />
                    <UsersCard />
                </div>
            </div>
}

export default Dashboard;