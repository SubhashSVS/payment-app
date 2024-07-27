import BalanceCard from '../components/BalanceCard';
import Header from '../components/Header';
import UsersCard from '../components/UsersCard';

const Dashboard = ()=>{
    return <div>
        <Header username={"User"} />
        <BalanceCard amount={5000} />
        <UsersCard />
    </div>
}

export default Dashboard;