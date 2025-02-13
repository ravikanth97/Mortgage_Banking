import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    const submitLogin = () => {
        // userData.filter(data => data.account_id === 
        // )
        navigate("/accountsummary")
    }

    useEffect(() => {
        fetch("https://react-redux-3127c-default-rtdb.firebaseio.com/transactions.json")
        .then(res => res.json())
        .then(data => setUserData(data))
    })

    return (
        <>
        <div>Login</div>
        <div className="container">
            <label>UserName</label><input name="userId" type="text"/>
        </div>
        <div>
            <label>Password</label><input name="pswd" type="password"/>
        </div>
        <input name="loginBtn" type="Login" onClick={() => submitLogin()}/>
        </>
    )
}

export default Login