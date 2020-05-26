import React, { useState } from "react";

const Officer =()=>{

  const[values,setvalues] = useState({
    firstname:"",
    lastname:"",
    email:"",
    phone_number:"",
    sucuess:false,
  });

  const handleChange =(name)=>(e)=>{
    setvalues({...values,[name]:e.target.value})

  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const Data ={
        firstname:values.firstname,
        lastname:values.lastname,
        email:values.email,
        phone_number:values.phone_number,
      };

      const response = await fetch('https://comm-backend.herokuapp.com/api/register',{
        method:"POST",
        headers:{
          Accept:"application/json",
          "Content-Type": "application/json",
        },
        body:JSON.stringify(Data),
      });
      const result = await response.json();

      setvalues({
        ...values,
    firstname:"",
    lastname:"",
    email:"",
    phone_number:"",
    sucuess:true,
      })
    }catch(err){
      setvalues({...values,sucuess:false});
    }
  }


  return(
    <div className="container mt-3">

      <form onSubmit ={handleSubmit}>
      {values.sucuess ? (<div className="bg-success">Your complain submitted</div>):(
          <div className="bg-danger" style={{display:"none"}}></div>
        )}
      <div class="form-group">
          <label >First Name</label>
          <input type="text" 
           className="form-control"  
           placeholder="Enter First Name"
           value={values.firstname}
           onChange={handleChange('firstname')}
           />
          </div>
          <div class="form-group">
          <label >Last Name</label>
          <input type="text" 
           className="form-control"  
           placeholder="Enter Last Name"
           value={values.lastname}
           onChange={handleChange('lastname')}
           />
          </div>

          <div class="form-group">
          <label >Email address</label>
          <input type="email" 
           className="form-control"  
           placeholder="Enter email"
           value={values.name}
           onChange={handleChange('name')}
           />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
        
          <div class="form-group">
          <label >Phone Number</label>
          <input type="tel" 
           className="form-control"  
           placeholder="Phone Name"
           value={values.phonenumber}
           onChange={handleChange('phonenumber')}
           />
          </div>
        
          <button type="submit" class="btn btn-primary">Submit</button>





        </form>
      </div>
  )
}

export default Officer;