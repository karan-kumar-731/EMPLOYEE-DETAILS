import react, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './user.css';
import axios from"axios";


const User=()=>{


    const[users,setUsers]=useState([])

useEffect(()=>{
    const fetchData=async()=>{
        const response=await axios.get("http://localhost:8000/api/getall");
        setUsers(response.data);
    }
    fetchData();
},[])

const deleteUser=async(userId)=>{
    await axios.delete(`http://localhost:8000/api/deleteone/${userId}`)
    .then((response)=>{
        setUsers((prevUser)=>prevUser.filter((user)=>user._id!==userId));
        console.log(response)
    }).catch((error)=>{
        console.log(error)
    })

}





    
    return(
        <div className='userTable'>
        <Link className='addButton' to={"/add"}>Add Employee</Link>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Employee first Name</th>
                    <th>Employee last Name</th>
                    <th>Employee Email</th>
                    <th>Employee Phone Number</th>
                    <th>Employee Address</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index)=>{
                        return(
                            <tr key={user._id}>
                    <td>{index+1}</td>
                    <td>{user.fname}</td>
                    <td>{user.lname}</td>
                    <td>{user.email}</td>
                    <td>{user.phonnumber}</td>
                    <td>{user.address}</td>
                    <td>
                        <button onClick={()=>deleteUser(user._id)} className='actbtn'>Delete</button>&nbsp;
                        <Link className='edtbtn' to={`/edit/`+user._id}>Edit</Link>
                    </td>



                </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
        </div>
    )
}
export default User;