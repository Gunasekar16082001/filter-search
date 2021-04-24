
import './App.css';
import JSONDATA from './MOCK_DATA.json';
import { useState } from 'react';
import { BsFillPlusSquareFill } from 'react-icons/bs';


function First() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="header">

        <input type="text" placeholder="Search" className="search" onChange={(event) => {
          setSearchTerm(event.target.value);
        }} />

        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          <h2 > <BsFillPlusSquareFill /> </h2>
        </button>
      </div>

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel"></h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <input type="text" class="form-control" placeholder="Enter name" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
              <button type="button" class="btn btn-primary">ADD</button>
            </div>
          </div>
        </div>
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
