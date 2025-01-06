import React, { useState } from "react";
import './add.css';
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";





const Add  = () =>{


    const users={
        fname:"",
        lname:"",
        email:"",
        phonnumber:"",
        address:""
    }

    const[user,setUser]=useState(users);
    const navigate=useNavigate();
    


const inputHandler=(e)=>{
    const{name,value}=e.target;
    setUser({...user,[name]:value});

}
const submitForm=async(e)=>{
    e.preventDefault();
   await axios.post("http://localhost:8000/api/create",user)
   .then((response)=>console.log(response)
 

)
   .catch(error=>console.log(error));
   
   
   navigate("/")
}






    return(
        <div className="addUser">
          
            <Link to={"/"}>Back</Link>
            <h3>Add New User</h3>
            <form onSubmit={submitForm} className="addUserForm" >
                <div className="inputGroup">

                    <label htmlFor="fname">firstname</label>
                    <input onChange={inputHandler} type="text" id="fname" name="fname"placeholder="first name" maxLength={20} required={true} />
                </div>

               

                <div className="inputGroup">

                    <label htmlFor="lname">Lastname</label>
                    <input onChange={inputHandler} type="text" id="lname" name="lname"placeholder="last name" maxLength={20} required={true} />
                </div>

                <div className="inputGroup">

                    <label htmlFor="email">Email</label>
                    <input onChange={inputHandler} type="text" id="email" name="email"placeholder="email" required={true} maxLength={20} />
                </div>

                <div className="inputGroup">

                    <label htmlFor="phonnumber">Phon number</label>
                    <input onChange={inputHandler} type="text" id="phonnumber" name="phonnumber"placeholder="phonNumber" required={true} maxLength={10}/>
                </div>
                <div className="inputGroup">

<label htmlFor="address">Address</label>
<input type="text" id="address" onChange={inputHandler} name="address"placeholder="address" required={true} maxLength={50} />
</div>

                <div className="inputGroup">

                   <button type="submit">Add user</button>
                </div>





            </form>
        </div>
    )
}

export default Add;