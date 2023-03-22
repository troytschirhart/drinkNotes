import authStore from "../stores/authStore"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SignupForm() {
    const [inUse, setInUse] = useState(false);
    const store = authStore();
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();    
        
        try {
            const res = await store.signup();

            if (res.message !== undefined && res.message.trim() === "Request failed with status code 432") {
                setInUse(true);
            } else {
                setInUse(false);
                navigate("/login");
            }

        } catch (err) {
            console.log("handleSignup error: " + err);
        }
    }

    return (
        <div className="createUser">
            <form onSubmit={handleSignup}>
                <h2>Create an Account</h2>
                <div className="formInput">
                    <label className="createUserLabel" htmlFor="username">Username:&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="text" 
                        name="username"
                        value={store.signupForm.username}
                        onChange={store.updateSignupForm}  
                    />
                </div>
                <div className="formInput">
                    <label className="createUserLabel" htmlFor="password">Password:&nbsp;&nbsp;</label>
                    <input 
                        className="createUserInput"
                        type="password" 
                        name="password" 
                        value={store.signupForm.password}
                        onChange={store.updateSignupForm}                 
                    />
                </div>
                <button className="createUserButton" type="submit">Create Account</button>
                {inUse && (<div><h2>That username is already in use.</h2><h2>Please try another username.</h2></div>)}
            </form>
        </div>
    )
}