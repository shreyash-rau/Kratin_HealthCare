import React, { useState } from 'react';
import Countdown from 'react-countdown';

function Walking() {
  const [walks, setWalks] = useState([
    { km: '5', steps: '7000', time: '07:00', nextSteps: '10000' },
    { km: '7', steps: '10000', time: '19:00', nextSteps: '12000' }
  ]);

  const renderer = ({ hours, minutes, seconds, completed, total }) => {
    if (completed) {
      // we try to reset the timer every 24 hours
      if (total <= 0) {
        return <Countdown date={Date.now() + 24 * 60 * 60 * 1000} renderer={renderer} />;
      }
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
          {walks.map((walk, index) => {
            // Calculate the target date based on the walk time
            let targetDate = new Date();
            targetDate.setHours(Number(walk.time.split(':')[0]));
            targetDate.setMinutes(Number(walk.time.split(':')[1]));
            targetDate.setSeconds(0);

            // If the target date is in the past, add 24 hours to it
            if (targetDate < new Date()) {
              targetDate = new Date(targetDate.getTime() + 24 * 60 * 60 * 1000);
            }

            return (
              <tr key={index}>
                <td>{walk.time}</td>
                <td>{walk.km}</td>
                <td>{walk.steps}</td>
                <td>
                  <Countdown
                    date={targetDate}
                    renderer={renderer}
                  />
                </td>
                <td>{walk.nextSteps}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Walking;
