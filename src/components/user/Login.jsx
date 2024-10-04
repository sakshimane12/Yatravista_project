import { useState } from "react";

const Login = ({newUser}) => {

    const [user,setUser] = useState({
        username:'',
        password:''
    })

    const handleLogin = (e) => {
        e.preventDefault();
        alert("You are LoggedIn")
    }

    const handleUsernameChange = (e) => setUser({...user,username:e.target.value})

    const handlePasswordChange = (e) => setUser({...user,password:e.target.value})

    return(
        <div style={{marginTop:'90px'}} className="container border border-secondary rounded-4 w-50 bg-light">
           <h3 className="text-center">Login</h3>
            <form onSubmit={handleLogin}>
                <div  className="mb-3">
                    <input id="un" className="form-control" type="text" placeholder="Enter Username"
                    value={user.username} onChange={handleUsernameChange} required/>
                </div>
                <div className="mb-3">
                    <input className="form-control" id="pwd" type="password" placeholder="Enter password"
                    onChange={handlePasswordChange} value={user.password} required/>
                </div>
                <div>
                    <button className="btn btn-success" type="submit">Login</button>
                </div>
            </form> 
            <p className="mt-2">New User?<button className="btn btn-link" onClick={newUser}>SignUp</button></p>
        </div>
    )
}
export default Login;