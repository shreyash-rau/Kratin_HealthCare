import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Register() {

  const [fname, setFname] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [comPassword, setComPassword] = useState("");

  // to store all the values of input filed we create one empty state;
  const [allValue, setAllValue] = useState([])

  const submitForm = (e) => {
    e.preventDefault();
    const newValue = { fname, age, number, email, password, comPassword }
    setAllValue([...allValue, newValue])

    // after clicking on submit btn the feild should be empty so we do this

    setFname("")
    setEmail("")
    setPassword("")
    setComPassword("")
  }


  return (
    <>
      <section className="forms-page sec">
        <div className="container1">
          <div className="box1">
            <p>Don't have an account? Create your account, it takes less than a minute.</p>

            <form onSubmit={submitForm}>
              <h4>Enter Your First Name : </h4>
              <input type="fname" name="name" placeholder='Enter Your Name' value={fname} onChange={(e) => setFname(e.target.value)} required />

              <h4>Enter Your Age : </h4>
              <input type="number" name="number" placeholder='Enter Current Age' value={age} onChange={(e) => setAge(e.target.value)} required />


              <h4>Gender : </h4>
              <select className='select'>
                <option>Male</option>
                <option>FeMale</option>
                <option>Other</option>
              </select>

              <h4>Enter Your Email : </h4>
              <input type="email" name="email" placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />

              <h4>Enter Your Contact Number : </h4>
              <input type="phone" name="phone" placeholder='Enter Your Contact Number' value={number} onChange={(e) => setNumber(e.target.value)} required />

              <h4>Create Your Password : </h4>
              <input type="password" name="password" placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} required />

              <h4>Comfirm Your Password : </h4>
              <input type="password" name="password" placeholder='Confirm Password' value={comPassword} onChange={(e) => setComPassword(e.target.value)} required />
              <br /><br />
              <button type='submit'>Check Once Again</button>

            </form>
          </div>
        </div>
      </section>

      <section className="data sec">
        {allValue.map((value) => {
          const { fname, age, number, email, password, comPassword } = value
          return (<>
            <div className="sign-box1">
              <h1>Sended to Login Page Successfully</h1><hr />
              {/* &nbsp; */}
              <h3>First Name : <span>{fname}</span> </h3>
              <h3>Age : <span>{age} year's old</span> </h3>
              <h3>E-mail : <span>{email}</span></h3>
              <h3>Contact Number : <span> {number}</span></h3>
              <h3>Password  : <span>{password}</span></h3>
              <h3>Confirm Password : <span>{comPassword}</span></h3>

              <button type='submit' ><Link to="/"><p>Go To Login</p></Link></button>
            </div>
          </>)
        })}

      </section>

    </>
  )
}

export default Register;