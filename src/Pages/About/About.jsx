import React from 'react';

import img1 from "../../Images/The-1-Daily-Routine-for-Seniors-1.jpg";
import img2 from "../../Images/The-1-Daily-Routine-for-Seniors-2.jpg";

import "../About/About.scss";
import { Link } from 'react-router-dom';

function About() {
    return (
        <>

            <div className='para'>
                <h1>Welcome to our Health Care website', </h1>
                <h2>'We understand that as your age above 60+', </h2>
                <h3> 'Our team is composed of highly talented doctors, willings to take care of u', and</h3>
                <h4> 'We believe that everyone deserves better Health'</h4>
                <button><Link to="/home"> <p>Go Home</p></Link></button>
            </div>
            <div className="para1">
                <p>
                    Welcome to our health care website, a dedicated platform designed with the needs of the 65+ age group in mind. Our mission is to empower seniors to live healthier and better lives through technology.
                </p>
                <p>
                    We understand that as we age, health monitoring becomes increasingly important. That's why we've developed a range of features to help you stay on top of your health. From tracking vital signs to providing health updates and emergency alerts, we've got you covered.
                </p>
                <p>
                    Our team is composed of dedicated professionals with years of experience in the healthcare and technology sectors. We are committed to providing a user-friendly experience and reliable service that you can trust.
                </p>
                <p>
                    We believe that everyone deserves to enjoy their golden years in the best health possible. Join us on this journey to better health!
                </p>

                <p>
                    Our platform is designed with a user-friendly interface, making it easy for seniors to navigate and use. We've also ensured that our website is accessible, with features such as text-to-speech, large fonts, and high-contrast themes for those with visual impairments.
                </p>
                <p>
                    We prioritize the privacy and security of our users. All personal data is encrypted and stored securely. We adhere strictly to privacy laws and regulations to ensure your information is safe with us.
                </p>
                <p>
                    We offer personalized health recommendations based on the data from our health monitoring system. These recommendations can help guide lifestyle changes or signal when it might be necessary to consult with a healthcare professional.
                </p>
                <p>
                    We believe in the power of community. That's why we've included a community forum where users can connect, share experiences, and offer support to each other. After all, a strong support network can greatly contribute to overall well-being.
                </p>
                <p>
                    We're constantly working to improve and expand our services based on user feedback and the latest research in healthcare and technology. We're committed to helping our users lead healthier, happier lives.
                </p>

            </div>

            <div className="para2">
                <img src={img1} alt="img1" />
                <br />
                <img src={img2} alt="img2" />
            </div>


        </>
    )
}

export default About;