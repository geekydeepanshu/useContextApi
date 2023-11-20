import {useState,useContext} from "react";
import UserContext from "../context/UserContext.jsx";

function Profile(){
        const {user}=useContext(UserContext);
    return(
        <div className="text-4xl">
            username:{user.username}
            password:{user.password}
        </div>
    );
}


export default Profile;