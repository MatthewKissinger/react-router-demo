import { useState } from "react"
import { useAuth } from "./auth"
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location);

    const redirectPath = location.state?.path || '/';

    const handleLogin = () => {
        auth.login(user);
        navigate(redirectPath, { replace: true });
    }
    
    return (
        <div>
            <label>
                Username: <input type='text' onChange={e => setUser(e.target.value)}></input>
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}