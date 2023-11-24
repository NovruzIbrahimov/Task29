import { useState } from 'react'
import Data from './Data.json';
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className='container'>
      <h1>Mission: Impossible – Dead Reckoning</h1>
      <div className='inputContainer'>
        <input className='search' type="text" placeholder="Enter name please..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>
      <div className='dataContainer'>
        {
          Data
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                return val;
              }
            }).map((val) => {
              return (
                <div className="data" key={val.id}>
                  <div className="box">
                  <img src={val.image} alt="" />
                  </div>
                  
                  <h3>{val.title}</h3>
                  

                </div>
              )
            })
        }
      </div>
    </div>
  );
}

export default App
