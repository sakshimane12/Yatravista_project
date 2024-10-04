import { useState } from "react";

const SignUp = ({existingUser}) => {

    const [user,setUser] = useState({
        firstName:'',
        lastName:'',
        emailAddress:'',
        password:'',
        confirmPassword:''
    })

    const submitForm = (e) => {
        e.preventDefault();
        alert("Congrats! Your registered successfully.")
    }

    return(
        <div style={{marginTop:'90px'}}  className="container border border-dark rounded-4 bg-light w-50">
            <h4 className="m-3">SignUp Form</h4>
            <form onSubmit={submitForm}>
                <div className="row">
                    <div className=" col form-floating mb-3">
                        <input className="form-control" id="fnm" type="text" placeholder="First Name"
                        value={user.firstName} onChange={e => setUser({...user,firstName:e.target.value})} required/>
                        <label className="form-label" htmlFor="fnm">First Name*</label>
                    </div>
                    <div className="col form-floating mb-3">
                        <input id="lnm" className="form-control" type="text" placeholder="Last Name"
                        value={user.lastName} onChange={e => setUser({...user,lastName:e.target.value})} required/>
                        <label className="form-label" htmlFor="lnm">Last Name*</label>
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input id="eml" className="form-control" type="email" placeholder="email address"
                    value={user.emailAddress} onChange={e=> setUser({...user,emailAddress:e.target.value})} required/>
                    <label className="form-label" htmlFor="eml">Email Address*</label>
                </div>
                <div className="form-floating mb-3">
                    <input id="npwd" className="form-control" type="password" placeholder="new password"
                    value={user.password} onChange={e=> setUser({...user,password:e.target.value})} 
                    required pattern='(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$#%&]).{6,10}' aria-describedby="pwd-txt"/>
                    <label className="form-label" htmlFor="npwd">New Password</label>
                    <span className="form-text">Password must be 6 to 10 characters long. It must include at least one upper case alphabet,
                    lower case alphabet, digit and special symbol.</span>
                </div>
                <div className="form-floating mb-3">
                    <input id="cpwd" className="form-control" type="password" placeholder="confirm password"
                    value={user.confirmPassword} onChange={e=> setUser({...user,confirmPassword:e.target.value})} />
                    <label className="form-label" htmlFor="cpwd">Confirm Password</label>
                    {user.password != user.confirmPassword && <p style={{color:'red'}}>Sorry! password is not matched</p>}
                </div>
                <div>
                    <button className="btn btn-success me-2" type="submit">SignUp</button>
                    <button className="btn btn-danger" onClick={() => setUser({
                      firstName:'',
                      lastName:'',
                      emailAddress:'',
                      password:'',
                      confirmPassword:''  
                    })} type="reset">Reset</button>
                </div>
            </form>
            <p>Already User? <button className="btn btn-link" onClick={existingUser}>Login</button></p>
        </div>
    )
}
export default SignUp;