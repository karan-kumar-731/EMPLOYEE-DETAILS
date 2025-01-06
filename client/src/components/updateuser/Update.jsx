import { Link, useNavigate, useParams } from "react-router-dom";

import React, { useEffect, useState } from "react";
import axios from "axios";






const Update=()=>{

    const users={
        fname:"",
        lname:"",
        email:"",
        phonnumber:"",
        address:""
    }

    const{id}=useParams();

    const[user,setUser]=useState(users);
    const navigate=useNavigate();


    const inputChange=(e)=>{
      const {name,value}=e.target;
      setUser({...user,[name]:value});
      

    }


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/getone/${id}`)
        .then((response)=>{
            setUser(response.data)
        }).catch((error)=>{
            console.log(error)
        })  
        

    },[id]);

    const submitForm=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/update/${id}`,user)
        .then((response)=>{
        console.log(response)

        })
        .catch(error=>console.log(error));

        navigate("/")


     
    }
    





    return (
        
          <div className="addUser">
          
          <Link to={"/"}>Back</Link>
          <h3>Update Employee Table</h3>
          <form className="addUserForm" onSubmit={submitForm}>
              <div className="inputGroup">

                  <label htmlFor="fname">firstname</label>
                  <input type="text" onChange={inputChange} value={user.fname} id="fname" name="fname"placeholder="first name" />
              </div>

             

              <div className="inputGroup">

                  <label htmlFor="lname">Lastname</label>
                  <input type="text" id="lname" onChange={inputChange} value={user.lname} name="lname"placeholder="last name" />
              </div>

              <div className="inputGroup">

                  <label htmlFor="email">Email</label>
                  <input type="text" id="email" onChange={inputChange} value={user.email} name="email"placeholder="email" />
              </div>

              <div className="inputGroup">

                  <label htmlFor="phonnumber">Phon number</label>
                  <input type="text" id="phonnumber" onChange={inputChange} value={user.phonnumber} name="phonnumber"placeholder="phonNumber" />
              </div>
              <div className="inputGroup">

<label htmlFor="address">Address</label>
<input type="text" id="address" onChange={inputChange} value={user.address} name="address"placeholder="address" />
</div>

              <div className="inputGroup">

                 <button type="submit">Update user</button>
              </div>





          </form>
      </div>
        
    )
}

export default Update;