import React, { useState, useEffect } from 'react';
import './Predictable.css'; // Import your CSS styles here
import { getPredictionsURL } from '../../api/Api';
import axios from 'axios';

const MatchTable = ({ data }) => {
  return (
    <table className="responsive-table">
      <thead>
        <tr>
          <th>Time</th>
          <th>Teams</th>
          <th>Tips</th>
          <th>Outcome</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td>{item.dateTime}</td>
            <td>{item.nameOfLeague}</td>
            <td>{item.type}</td>
            <td>{item.scores}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Predictable = () => {
  const [predictions, setPredictions] = useState([]);

  const fetchPredictions = async () => {
    try {
      const response = await axios.get(getPredictionsURL);
      setPredictions(response.data.data);
      console.log(response)
    } catch (error) {
      console.error('Error fetching predictions:', error);
    }
  };

  useEffect(() => {
    fetchPredictions();
  }, []);

  return (
    <div className="table-container">
      <div className="table-group">
        <h2 className='bab'>TODAY</h2>
        <MatchTable data={predictions} />
      </div>

      {/* You can create additional MatchTable components for other days */}
    </div>
  );
};

export default Predictable;
