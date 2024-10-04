import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";


const SignUpLogin = () => {

    const [isNewUser,setIsNewUser] = useState(false)

    const handleIsNewUser = () => {
        setIsNewUser(true)
    }

    return(
        <div>
           {isNewUser ? <SignUp existingUser={() => setIsNewUser(false)}/> : <Login newUser={handleIsNewUser}/>} 
        </div>
    )
}
export default SignUpLogin;