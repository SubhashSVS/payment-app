import { useEffect, useState } from "react";
import axios from 'axios';
import User from './User';

const UsersCard = ()=>{
    const [users,setUsers] = useState([]);
    const [filter,setFilter] = useState("");

    useEffect(()=>{
        if(filter !== "")
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`,{
            headers : {
                Authorization : "Bearer" + " " + localStorage.getItem("token")
            }
        }).then((response)=>{
                setUsers(response.data.users);
            })
    },[filter])  

    return <div className="my-2 flex-col px-6">
        <div className="text-2xl font-semibold">
            Users
        </div>
        <input onChange={(e)=>{
            setFilter(e.target.value);
        }} type="text" placeholder="Search users..." className="my-3 border border-slate-400 p-2 rounded-md size-full"/>
        {users.map(user => <User user={user} />)}     
    </div>

}

export default UsersCard;