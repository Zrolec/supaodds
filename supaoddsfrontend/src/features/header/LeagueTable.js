import React, { useState, useEffect } from 'react';
import './LeagueTable.css'

function LeagueTable() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append("X-RapidAPI-Key", "eeeaacac97mshcb9675db4b7ae05p1da0dbjsn09680b7dde7a");
      myHeaders.append("X-RapidAPI-Host", "sports-live-scores.p.rapidapi.com");

      // const endpoint = "teams/statistics"; // Replace with the actual API endpoint you want to call

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      try {
        const response = await fetch(`https://sports-live-scores.p.rapidapi.com/football/live`, requestOptions);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); // The empty array means this effect runs once when the component mounts

  return (
    <>
      <h1 className="hl">Livescores</h1>
      {data ? (
        // <pre className="pp">{JSON.stringify(data, null, 2)}</pre>
        // LeagueTable API 

        <section className='bula'>
          <table className='tabula'>
            <thead>
              <tr>
                <th>MatchID</th>
                <th>Home v Away</th>
                <th>Scores</th>
                <th>Odds</th>
                <th>League</th>
                <th>Live Odd</th>
                <th>Match Status</th>
              </tr>
            </thead>
            <tbody>
             {data.matches.map((match)=>{
               return (<tr>
               <td>{match['Match ID']}</td>
               <td>{match['Home Team']} VS {match['Away Team']}</td>
               <td>{match['Home Score']} - {match['Away Score']}</td>
               <td>{match['Initial Home Odd']} - {match['Initial Away Odd']}</td>
               <td>{match['League']}</td>
               <td>{match['Live Home Odd']} - {match['Live Away Odd']}</td>
               <td>{match['Status']}</td>
             </tr>
             )})}
             {console.log(data.matches)}
            </tbody>
          </table>
        </section>


      ) : (
        <h1>Loading data...</h1>
        
      )}
    </>
  );
}

export default LeagueTable;
