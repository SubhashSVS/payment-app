import {useNavigate} from 'react-router-dom';

const User = ({user})=>{
    const navigate = useNavigate();

    return <div className="flex justify-between items-center">
        <div className="flex py-3 text-lg font-medium items-center">
            <div className="mr-3 bg-gray-300 pt-1 size-9 rounded-full text-center text-lg">{user.firstName[0]}</div>
                {user.firstName}
            </div>
            <button onClick={()=>{
                navigate(`/send?id=${user._id}&name=${user.firstName}`);
            }} className="mt-1 bg-black text-white p-2 rounded-md font-medium">Send Money</button>
        </div>
}

export default User;
