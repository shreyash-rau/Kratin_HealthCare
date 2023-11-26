import React, { useState } from 'react';
import Countdown from 'react-countdown';

function Walking() {
  const [walks, setWalks] = useState([
    { km: '5', steps: '7000', time: '07:00', nextSteps: '10000' },
    { km: '7', steps: '10000', time: '19:00', nextSteps: '12000' }
  ]);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>It's walking time!</span>;
    } else {
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };

  return (
    <div className='main-table'>
      <h2>It's Walking Time__</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>KM</th>
            <th>Steps</th>
            <th>Timer</th>
            <th>Next Steps Target</th>
          </tr>
        </thead>
        <tbody>
          {walks.map((walk, index) => (
            <tr key={index}>
              <td>{walk.time}</td>
              <td>{walk.km}</td>
              <td>{walk.steps}</td>
              <td>
                <Countdown
                  date={new Date(`2023-11-26T${walk.time}:00`)}
                  renderer={renderer}
                />
              </td>
              <td>{walk.nextSteps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Walking;
