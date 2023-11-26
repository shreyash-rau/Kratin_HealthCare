

import React, { useState } from 'react';
import Countdown from 'react-countdown';

function Meal() {
  const [meals, setMeals] = useState([
    { meal: 'Breakfast', dish: 'Oatmeal', time: '09:00', nextDish: 'Salad' },
    { meal: 'Lunch', dish: 'Salad', time: '14:00', nextDish: 'Steak' },
    { meal: 'Dinner', dish: 'Steak', time: '20:00', nextDish: 'Oatmeal' }
  ]);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>It's meal time!</span>;
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
          {meals.map((meal, index) => (
            <tr key={index} >
              <td>{meal.time}</td>
              <td>{meal.meal}</td>
              <td>{meal.dish}</td>
              <td>
                <Countdown
                  date={new Date(`2023-11-26T${meal.time}:00`)}
                  renderer={renderer}
                />
              </td>
              <td>{meal.nextDish}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
  );
}

export default Meal;
