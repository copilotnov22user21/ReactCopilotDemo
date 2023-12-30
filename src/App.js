import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { getStocks } from './apicall/stcoksapi';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getStocks().then(res => setData(res));
  }, []);

  return (
    <div >
      <h1>Hi....Mouni happy Coding</h1>
      {/* <table>
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Stock Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((stock, index) => (
            <tr key={index}>
              <td>{stock.symbol}</td>
              <td>{stock.open}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    {/* //displaying data in bootsrap card format and cards must be 3 in a row */}
      <div className="row">
        {data.map((stock, index) => (
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Symbol: {stock.symbol}</h5>
                <p className="card-text">Open: {stock.open}</p>
                <p className="card-text">Low: {stock.dayLow}</p>
                {/* //if pChange is positive then color is green else red */}
                <p className="card-text">pChange: <span style={{color: stock.pChange > 0 ? 'green' : 'red'}}>{stock.pChange}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>

</div>
   
  );
}

export default App;
