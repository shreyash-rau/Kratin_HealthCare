import React from 'react';
import UserData from './User-Data';

import "../User-review/Review.scss";
import { Link } from 'react-router-dom';

function Review() {
  return (
    <>
      <section>
       
        <div className='review'>
      
          {UserData.map((user) => (

            <div key={user.id}>
              <div className="box1">
                <div className="box2">
                  <div className="para3"> <p>{user.desc}</p></div>
                  <div className="name"><h3>{user.name}</h3><span>{user.post}</span></div>
                </div>  
                 <div className="img"> <img src={user.profile} alt={user.name} /></div>

              </div>
            </div>
          ))}
        </div>
      </section>

      <button><Link to="/home"> <p>Go Home</p></Link></button>
      <br/>
      <br/><br/><br/>


    </>
  )
}

export default Review;