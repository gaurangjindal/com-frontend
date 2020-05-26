import React, { useState } from "react";

const Case =()=>{

  const[values,setvalues] = useState({
    firstname:"",
    lastname:"",
    email:"",
    phone_number:"",
    carnumber:"",
    carmodel:"",
    date:"",
    location:"",
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
        carnumber:values.phone_number,
        carmodel:values.carmodel,
        date:values.date,
        location:values.location,
      };

      const response = await fetch('https://comm-backend.herokuapp.com/api/submit',{
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
    carnumber:"",
    carmodel:"",
    date:"",
    location:"",
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
          <div class="form-group">
          <label >Car Number</label>
          <input type="text" 
           className="form-control"  
           placeholder="Car Name"
           value={values.carnumber}
           onChange={handleChange('carnumber')}
           />
          </div>
          <div class="form-group">
          <label >Car Model</label>
          <input type="text" 
           className="form-control"  
           placeholder="Car Model"
           value={values.carmodel}
           onChange={handleChange('carmodel')}
           />
          </div>
          <div class="form-group">
          <label >Date</label>
          <input type="date" 
           className="form-control"  
           placeholder="Enter Date"
           value={values.date}
           onChange={handleChange('date')}
           />
          </div>
          <div class="form-group">
          <label >Location</label>
          <input type="text" 
           className="form-control"  
           placeholder="Enter Car stolen Location"
           value={values.location}
           onChange={handleChange('location')}
           />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>





        </form>
      </div>
  )
}

export default Case;