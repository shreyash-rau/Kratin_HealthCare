import React, { useState } from 'react';
import Countdown from 'react-countdown';

function Medicine() {
  const [medicines, setMedicines] = useState([
    { medicine: 'Paracetamol', drugName: 'Acetaminophen', time: '09:00', remainingDose: '2' },
    { medicine: 'Ibuprofen', drugName: 'Advil', time: '14:00', remainingDose: '1' },
    { medicine: 'Aspirin', drugName: 'Bayer', time: '20:00', remainingDose: '1' }
  ]);

  const renderer = ({ hours, minutes, seconds, completed, total }) => {
    if (completed) {
      // we try to reset the timer every 24 hours
      if (total <= 0) {
        return <Countdown date={Date.now() + 24 * 60 * 60 * 1000} renderer={renderer} />;
      }
      return <span>It's medicine time!</span>;
    } else {
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };

  return (
    <div className='main-table'>
      <h2>Look Over Medicine Time__</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Medicine</th>
            <th>Drug Name</th>
            <th>Timer</th>
            <th>Remaining Dose</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine, index) => {
            // Calculate the target date based on the medicine time
            let targetDate = new Date();
            targetDate.setHours(Number(medicine.time.split(':')[0]));
            targetDate.setMinutes(Number(medicine.time.split(':')[1]));
            targetDate.setSeconds(0);

            // If the target date is in the past, add 24 hours to it
            if (targetDate < new Date()) {
              targetDate = new Date(targetDate.getTime() + 24 * 60 * 60 * 1000);
            }

            return (
              <tr key={index}>
                <td>{medicine.time}</td>
                <td>{medicine.medicine}</td>
                <td>{medicine.drugName}</td>
                <td>
                  <Countdown
                    date={targetDate}
                    renderer={renderer}
                  />
                </td>
                <td>{medicine.remainingDose}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Medicine;
