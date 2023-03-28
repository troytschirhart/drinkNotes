import authStore from "../stores/authStore"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function LoginForm() {
    const [failedLogin, setFailedLogin] = useState(false);

    const store = authStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await store.login();

            const loggedIn = store.getLoggedIn();

            if (loggedIn) {
                setFailedLogin(false);
                // go to the home page
                navigate("/homepage");
            } else {
                setFailedLogin(true);
            }
            
        } catch (err) {
            console.log(err);
        }
        
    }

    return (

        <div className="createUser">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <div className="formInput">
                    <label className="createUserLabel" htmlFor="username">Username:&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="text" 
                        name="username"
                        value={store.loginForm.username}
                        onChange={store.updateLoginForm}  
                    />
                </div>
                <div className="formInput">
                    <label className="createUserLabel" htmlFor="password">Password:&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="password" 
                        name="password" 
                        value={store.loginForm.password}
                        onChange={store.updateLoginForm}                 
                    />
                </div>
                <button className="createUserButton" type="submit">Login</button>
                {failedLogin && (<div><h2>The username and/or password are not correct.</h2></div>)}
            </form>
        </div>


    )
}