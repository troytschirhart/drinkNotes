import authStore from "../stores/authStore"
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await store.login();
            const loggedIn = store.getLoggedIn();
            console.log("after login await:" + loggedIn);

            if (loggedIn) {
                // go to the home page
                navigate("/");
            } 
            // else {
            //     // try to login again
            //     navigate("/login");
            // }
            
        } catch (err) {
            console.log(err);
        }
        
    }

    return (
        <div>
            <h2>{store.failedLogin}</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    name="email"
                    value={store.loginForm.email}
                    onChange={store.updateLoginForm}  
                />
                <input 
                    type="password" 
                    name="password" 
                    value={store.loginForm.password}
                    onChange={store.updateLoginForm}                 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}