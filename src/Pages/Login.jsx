import React, { useState } from 'react'
import { Link} from 'react-router-dom';
import img from "../Images/2.webp"



function Login() {


    // to check the login info are filled correctly or not 
    // we used useState then its show below, after clicking submit 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // to store all the values of input filed we create one empty state;
    const [allValue, setAllValue] = useState([]);


    const submitForm = (e) => {
        e.preventDefault();
        const newValue = { email, password }
        setAllValue([...allValue, newValue])
        // after clicking on submit btn the field should be empty so we do this
        setEmail("")
        setPassword("")
    }

    return (
        <>
            <div className="main">
                <section className="forms-page">
                    <div className="container">
                        <div className="box">
                        <img src={img} alt="Login Logo" />
                        <hr/>
                            <p>Enter Your Username and password to Know your health Status</p>
                          &nbsp;&nbsp;
                            <form onSubmit={submitForm}>
                                <h3>Enter Email : </h3>
                                <input type="email" name='email' placeholder='Enter Email'
                                    value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <h3>Enter Password : </h3>
                                <input type="password" name='password' placeholder='Enter Password'
                                    value={password} onChange={(e) => setPassword(e.target.value)} required />

                                <br /><br />
                                <div className="flex">
                                    <span>I Forgot My Password</span>
                                </div>
                                <br />
                                <button type='submit'>Check Once Again</button>

                                <p>Don't Have Account ? <Link to="/register"><span>Register</span></Link></p>

                            </form>
                        </div>
                    </div>
                </section>

                {/* here are showing the above filled information without any visibility */}
                <section className="show-data">
                    {allValue.map((value) => {
                        const { email, password } = value
                        return (<>
                            <div className="sign-box">
                                <h1>Submitted Successfully</h1><hr /> &nbsp;
                                <h3>E-mail : <span>{email}</span></h3>
                                <h3>Password  : <span>{password}</span></h3>
                            
                            {/* <button type='submit onClick={handleLogin}'><Link to="/home"><p>Welcome To Home</p></Link></button> */}
                            <button type='submit'><Link to="/home"><p>Welcome To Home</p></Link></button>
                            </div>
                        </>)
                    })}

                </section>
            </div>
        </>
    )
}

export default Login;