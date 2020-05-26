import React, { useState, useEffect } from "react";

const OfficerList =()=>{
  const [policeList,setPoliceList]= useState([]);

  const getPoliceList = async()=>{
    const response = await fetch('https://comm-backend.herokuapp.com/api/read',{
      method:"GET",
    });
    const result = await response.json();
    console.log(result);
     setPoliceList([...result]);
  }
  useEffect(() => {
    getPoliceList();
}, []);


return (
  <div className="container">
      {policeList.map((data) => {
          return (
              <div key={data._id} className="row mt-3">
                  <div className="col">
                      <div
                          className="card"
                          style={{ background: "#e5e5e5" }}
                      >
                        <span>
                          <div className="card-title text-center mt-1">
                              Officer Name: {data.firstname}
                          </div>
                          <div className="card-title text-center mt-1">
                              Officer Name: {data.lastname}
                          </div>
                          </span>
                          <div className="card-title text-center mt-1">
                              Officer Name: {data.email}
                          </div>
                          <div className="card-title text-center mt-1">
                              Officer Name: {data.phone_number}
                          </div>
                          
                          {data.officer_status === 1  ? (
                              <div className="bg-danger d-block w-20 text-center p-2">
                                  Engaged
                              </div>
                          ) : (
                              <span className="bg-success d-block w-20 text-center p-2">
                                  Free
                              </span>
                          )}
                          
                      </div>
                  </div>
              </div>
          );
      })}
  </div>
);
};

export default OfficerList;
