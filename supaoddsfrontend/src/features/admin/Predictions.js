import './Predictions.css';
import React, {useState} from 'react';
import {createPredictionURL} from '../../api/Api';
import axios from 'axios';

const Predictions = () => {
  const initialRow = {
    id: Date.now (),
    time: '',
    rightLeague: '',
    leftLeague: '',
    leftScores: '',
    rightScores: '',
    homeOrAway: '',
  };
  const [data, setData] = useState ([initialRow]);

  const handleInputChange = (e, id, field) => {
    const updatedData = data.map (row => {
      if (row.id === id) {
        return {...row, [field]: e.target.value};
      }
      return row;
    });
    setData (updatedData);
  };

  const addRow = () => {
    setData ([...data, {...initialRow, id: Date.now ()}]);
  };

  const handleSubmit = async () => {
    console.log ('Submitted Data:', data);
    try {
      const response = await axios.post (createPredictionURL, data);
      if (response.status === 200) {
        alert('Prediction created sucessfully...')
      }
    } catch (error) {
      console.error ('Error:', error);
    }
  };

  return (
    <section>
    <div className="predictions-container">
      <table className="predictions-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>League</th>
            <th>Outcome</th>
            <th>Tips</th>
          </tr>
        </thead>
        <tbody>
          {data.map (row => (
            <tr key={row.id}>
              <td>
                <input
                  type="datetime-local"
                  name="time"
                  value={row.time}
                  onChange={e => handleInputChange (e, row.id, 'time')}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="leftLeague"
                  value={row.leftLeague}
                  onChange={e => handleInputChange (e, row.id, 'leftLeague')}
                />
                <span> VS </span>
                <input
                  type="text"
                  name="rightLeague"
                  value={row.rightLeague}
                  onChange={e => handleInputChange (e, row.id, 'rightLeague')}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="leftScores"
                  value='-'
                  onChange={e => handleInputChange (e, row.id, 'leftScores')}
                  readOnly
                />
                <span>VS</span>
                <input
                  type="text"
                  name="rightScores"
                  value="-"
                  onChange={e => handleInputChange (e, row.id, 'rightScores')}
                  readOnly
                />
              </td>
              <td>
                <select
                  name="homeOrAway"
                  id=""
                  value={row.homeOrAway}
                  onChange={e => handleInputChange (e, row.id, 'homeOrAway')}
                >
                  <option value='' selected disabled></option>
                  <option value="home">Home</option>
                  <option value="away">Away</option>
                  <option value="draw">Draw</option>
                  <option value="X1">X1</option>
                  <option value="GG">GG</option>
                  <option value="X2">X2</option>
                  <option value="OV2.5">OV2.5</option>
                  <option value="OV1.5">OV1.5</option>
                  <option value="OV3.5">OV3.5</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <button onClick={addRow}>Add Row</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
    </section>
  );
};

export default Predictions;
