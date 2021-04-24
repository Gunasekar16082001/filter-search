import './App.css';
import JSONDATA from './MOCK_DATA.json';
import {useState} from 'react';
import {BsFillPlusSquareFill} from 'react-icons/bs';


function First() {
  
  const [searchTerm, setSearchTerm, setData] = useState("");
  
  function addText() {
    JSONDATA.push({
      "id": 11,
      "first_name": Math.random().toString(36).substring(7),
    })
  }
  
  
  return (
    <>
      <div className="header">
        
        <input type="text" placeholder="Search" className="search" onChange={(event) => {
          setSearchTerm(event.target.value);
        }}/>
        
        <button type="button" className="btn btn-sm btn-primary m-2"
                onClick={addText}>
          + Add Random Text
        </button>
      </div>
      
      <div className="App">
        
        {JSONDATA.filter((val) => {
          if (searchTerm == "") {
            return val
          } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).map((val, key) => {
          return (
            <div className="user" key={key}>
              <p>{val.first_name}</p>
             
            </div>
          );
        })}
      
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <First></First>
    </div>
  );
  
}

export default App;