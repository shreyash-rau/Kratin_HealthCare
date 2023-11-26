import React, { useState } from 'react';
import Countdown from 'react-countdown';

function Medicine() {
  const [medicines, setMedicines] = useState([
    { medicine: 'Paracetamol', drugName: 'Acetaminophen', time: '09:00', remainingDose: '2' },
    { medicine: 'Ibuprofen', drugName: 'Advil', time: '14:00', remainingDose: '1' },
    { medicine: 'Aspirin', drugName: 'Bayer', time: '20:00', remainingDose: '1' }
  ]);

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
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
          {medicines.map((medicine, index) => (
            <tr key={index}>
              <td>{medicine.time}</td>
              <td>{medicine.medicine}</td>
              <td>{medicine.drugName}</td>
              <td>
                <Countdown
                  date={new Date(`2023-11-26T${medicine.time}:00`)}
                  renderer={renderer}
                />
              </td>
              <td>{medicine.remainingDose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Medicine;
