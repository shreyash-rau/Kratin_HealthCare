import React, { useState } from 'react';

import "../Contact-Us/Contact.scss";
import { Link } from 'react-router-dom';

function Contact() {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [update, setUpdate] = useState("");
    const [message, setMessage] = useState("");

    // to store all the values of input filed we create one empty state;
    const [allValue, setAllValue] = useState([])

    const submitForm = (e) => {
        e.preventDefault();
        const newValue = { fname, lname, email, phone, subject, message, update }
        setAllValue([...allValue, newValue])

        // after clicking on submit btn the feild should be empty so we do this

        setFname("")
        setLname("")
        setPhone("")
        setEmail("")
        setSubject("")
        setUpdate("")
        setMessage("")
    }


    return (
        <>
            <section className="contact">
                <h1>Lets Connect With Us__</h1>
                <div className="container2">
                    <div className="main-content1">
                        <form onSubmit={submitForm}>
                            <div className="grid2">

                                <div className="input">
                                    <span>
                                        First name <label>__</label>
                                    </span>
                                    <input type="text" name="fname" value={fname} onChange={(e) => setFname(e.target.value)} required />
                                </div>
                                <div className="input">
                                    <span>
                                        Last Name <label>__</label>
                                    </span>
                                    <input type="text" name="lname" value={lname} onChange={(e) => setLname(e.target.value)} required />
                                </div>
                                <div className="input">
                                    <span>
                                        Phone Number <label>__</label>
                                    </span>
                                    <input type="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                </div>
                                <div className="input">
                                    <span>
                                        E-Mail <label>__</label>
                                    </span>
                                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="input">
                                    <span>
                                        Subject <label>__</label>
                                    </span>
                                    <input type="text" name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                                </div>
                                <div className="input">
                                    <span>
                                        Updates U Want<label>__</label>
                                    </span>
                                    <input type="text" name="update" value={update} onChange={(e) => setUpdate(e.target.value)} required />
                                </div>
                            </div> <br />
                            <div className="input">
                                <span>
                                    Write Your Message <label>__</label>
                                </span>
                                <textarea cols='30' rows='10' name='message' value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                            </div>
                            <button className='primary-btn'>Submit Now</button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="msg-data">
                {allValue.map((value) => {
                    const { fname, lname, email, phone, subject, message,
                        update } = value
                    return (
                        <div className="s-box">
                            <h1>send successfully</h1><hr /> &nbsp;
                            <h3>First Name : <span>{fname}</span> </h3>
                            <h3>Last Name : <span>{lname}</span></h3>
                            <h3>Phone Number : <span>{phone}</span></h3>
                            <h3>E-mail : <span>{email}</span></h3>
                            <h3>Subject  : <span>{subject}</span></h3>
                            <h3>Need Update's : <span>{update}</span></h3>
                            <h3>Your Message : <span>{message}</span></h3>
                            <h3>Thanks To Knowing Us with Love and Care</h3>
                        </div>
                    )
                })}

            </section>

            <button><Link to="/home"> <p>Go Home</p></Link></button>


        </>
    )
}

export default Contact;  