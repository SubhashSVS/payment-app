import { useSearchParams } from 'react-router-dom';
import BalanceCard from '../components/BalanceCard';
import Header from '../components/Header';
import UsersCard from '../components/UsersCard';

const Dashboard = ()=>{
    const [searchParams] = useSearchParams();
    const name = searchParams.get("name");
    return <div className="min-h-screen bg-gray-50 p-5">
                <Header username={name} />
                <div className="mt-8 flex flex-col">
                    <BalanceCard amount={5000} />
                    <UsersCard />
                </div>
            </div>
}

export default Dashboard;