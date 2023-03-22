import { useEffect } from "react"
import authStore from "../stores/authStore"
import LogoutHeader from "../headers/LogoutHeader";

export default function LogoutPage() {
    const store = authStore();

    useEffect(() => {
        store.logout();
    }, [])

    return (
        <div>

            <LogoutHeader />
            
            <div className='appExplanation'>
                <h2>You are now logged out.</h2>
            </div>
        </div>
    )
}