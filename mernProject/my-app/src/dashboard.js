import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './App.css';
const Dashboard = () => {
    const [data,setdata]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/dashboard')
        .then((res)=>{
            console.log(res.data);
            setdata(res.data);
        })
        .catch((err)=>{
            console.log(err);
        }
    )},[])
    return (
        <>
        <h1 className="empcss">Employee Data</h1>
        {
            data.map((item)=>{
                return(
                    <>
                    <div key={item._id}>
                    <h1>{item.name}</h1>
                    <h1>{item.age}</h1>
                    <hr/>
                    </div>
                
                    </>
                )
            }
            )}
        </>
    );

}
export default Dashboard;