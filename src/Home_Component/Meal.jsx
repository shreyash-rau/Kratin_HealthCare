import React, { useState } from 'react';
import Countdown from 'react-countdown';

function Meal() {
  const [meals, setMeals] = useState([
    { meal: 'Breakfast', dish: 'Oatmeal', time: '09:00', nextDish: 'Salad' },
    { meal: 'Lunch', dish: 'Salad', time: '14:00', nextDish: 'Steak' },
    { meal: 'Dinner', dish: 'Steak', time: '20:00', nextDish: 'Oatmeal' }
  ]);

  const renderer = ({ hours, minutes, seconds, completed, total }) => {
    if (completed){
      // we try to reset the timer every 24 hours
      if (total <= 0) {
        return <Countdown date={Date.now() + 24 * 60 * 60 * 1000} renderer={renderer} />;
      }
      return <span>It's Meal time!</span>;
    } else {
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };

  return (<>
    <hr /><hr />
    <div className='main-table'>
      <h2>Take a Meal With__</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Meal</th>
            <th>Dish</th>
            <th>Timer</th>
            <th>Next Dish</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal, index) => {
            // Calculate the target date based on the meal time
            let targetDate = new Date();
            targetDate.setHours(Number(meal.time.split(':')[0]));
            targetDate.setMinutes(Number(meal.time.split(':')[1]));
            targetDate.setSeconds(0);

            // If the target date is in the past, add 24 hours to it
            if (targetDate < new Date()) {
              targetDate = new Date(targetDate.getTime() + 24 * 60 * 60 * 1000);
            }

            return (
              <tr key={index}>
                <td>{meal.time}</td>
                <td>{meal.meal}</td>
                <td>{meal.dish}</td>
                <td>
                  <Countdown
                    date={targetDate}
                    renderer={renderer}
                  />
                </td>
                <td>{meal.nextDish}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </>
  );
}

export default Meal;
