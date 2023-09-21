import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const nav=useNavigate();
    console.log('hi')
    return(
       <>
           
            <h3>Want to login?</h3><button onClick={() => nav('/login')}>click here</button>
            <h3>Want to register?</h3><button onClick={() => nav('/register')}>click here</button>

        </>
    )
}
export default Home
