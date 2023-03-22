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
                navigate("/homepage");
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
        // <div>
        //     <h2>{store.failedLogin}</h2>
        //     <form onSubmit={handleLogin}>
        //         <input 
        //             type="text" 
        //             name="username"
        //             value={store.loginForm.username}
        //             onChange={store.updateLoginForm}  
        //         />
        //         <input 
        //             type="password" 
        //             name="password" 
        //             value={store.loginForm.password}
        //             onChange={store.updateLoginForm}                 
        //         />
        //         <button type="submit">Login</button>
        //     </form>
        // </div>

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
</form>
</div>


    )
}