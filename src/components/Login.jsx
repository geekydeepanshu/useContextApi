import React,{useState,useContext} from 'react';
import UserContext from '../context/UserContext.jsx';


function Login(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");

    const {setUser}=useContext(UserContext);

    const clickHandler=(event)=>{
        event.preventDefault();
        setUser({username,password});
    }

    return(
        <div>
            <h1>Login</h1>
            <input 
            type="text"
            placeholder="username"
            value={username}
            onChange={(event)=>{
                setUsername(event.target.value);
            }}
            ></input>
            <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(event)=>{
                setPassword(event.target.value);
            }}
            >
            </input>
            <button 
            onClick={clickHandler}>Login</button>
        </div>
    )
}


export default Login;