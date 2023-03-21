import SignupForm from "../components/SignupForm";
import CreateUserHeader from "../headers/CreateUserHeader"

export default function SignupPage() {
    return (
        <div >
            <CreateUserHeader /> 
            <h1>Signup</h1>
            <SignupForm />
        </div>
    )
}