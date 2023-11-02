// import React, { useState, useEffect } from 'react';
// import './UpdatePredictions.css'; // Import your CSS styles here
// import { getPredictionsURL } from '../../api/Api';
// import axios from 'axios';

// const MatchTable = ({ data }) => {
//     const [tableData, setTableData] = useState(data)

//     console.log(tableData)

//   return (
//     <>
//     <table className="responsive-table">
//       <thead>
//         <tr>
//           <th>Time</th>
//           <th>Teams</th>
//           <th>Tips</th>
//           <th>Outcome</th>
//         </tr>
//       </thead>
//       <tbody>
//         {tableData.map((item) => (
//           <tr key={item._id}>
//             <td>{item.dateTime}</td>
//             <td>{item.nameOfLeague}</td>
//             <td>{item.type}</td>
//             <td>
//                 {/* dropdown table data */}

//                 <select
//                 //   name="homeOrAway"
//                 //   id=""
//                 //   value={row.homeOrAway}
//                 //   onChange={e => handleInputChange (e, row.id, 'homeOrAway')}
//                 >
//                   <option value='' defaultValue disabled></option>
//                   <option value="home">Home</option>
//                   <option value="away">Away</option>
//                   <option value="draw">Draw</option>
//                   <option value="X1">X1</option>
//                   <option value="GG">GG</option>
//                   <option value="X2">X2</option>
//                   <option value="OV2.5">OV2.5</option>
//                   <option value="OV1.5">OV1.5</option>
//                   <option value="OV3.5">OV3.5</option>
//                 </select>

//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//         <button className='abdul'>Submit</button>
//       </>
//   );
// };

// const UpdatePredictions = () => {
//   const [predictions, setPredictions] = useState([]);

//   const fetchPredictions = async () => {
//     try {
//       const response = await axios.get(getPredictionsURL);
//       setPredictions(response.data.data);
//       console.log(response)
//     } catch (error) {
//       console.error('Error fetching predictions:', error);
//     }
//   };

//   useEffect(() => {
//     fetchPredictions();
//   }, []);

//   return (
//     <div className="table-container">
//       <div className="table-group">
//         <h2 className='bab'>TODAY</h2>
//         <MatchTable data={predictions} />
//       </div>

//       {/* You can create additional MatchTable components for other days */}
//     </div>
//   );
// };

// export default UpdatePredictions;


import React, { useState, useEffect } from 'react';
import './UpdatePredictions.css'; // Import your CSS styles here
import { updatePredictionsUrl, getPredictionsURL } from '../../api/Api';
import axios from 'axios';

const MatchTable = () => {
  const [tableData, setTableData] = useState([]);
  
  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        const response = await axios.get(getPredictionsURL);
        setTableData(response.data.data);
      } catch (error) {
        console.error('Error fetching predictions:', error);
      }
    };

    fetchPredictions();
  }, []);

  const handleSelectChange = (e, id)=>{
    // console.log(id)
    const updatedData = tableData.map (row => {
        if(row._id === id){
            return {...row, scores:e.target.value}
        }else{
            return row
        }
      });
      setTableData(updatedData);
  }

  const handleUpdate= async(id)=>{
    const filterData = tableData.filter((data)=>data._id === id)
    const newScores = filterData[0].scores
    const Updatename = filterData[0].nameOfLeague
    const url = `${updatePredictionsUrl}/${Updatename}`

    try {
        const response = await axios.patch (url, {scores: newScores});
        if (response.status === 200) {
          alert(`"${Updatename}" updated sucessfully...`)
        }
      } catch (error) {
        console.error ('Error:', error);
      }
  }

  return (
    <>
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
          {tableData.map((item) => (
            <tr key={item._id}>
              <td>{item.dateTime}</td>
              <td>{item.nameOfLeague}</td>
              <td>{item.type}</td>
              <td>
                <select onChange={e => handleSelectChange(e, item._id)}>
                  <option value='-' selected disabled></option>
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
              <td><button onClick={e => handleUpdate(item._id)}>update</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const UpdatePredictions = () => {
  return (
    <div className="table-container">
      <div className="table-group">
        <h2 className='bab'>TODAY</h2>
        <MatchTable />
      </div>
      {/* You can create additional MatchTable components for other days */}
    </div>
  );
};

export default UpdatePredictions;

