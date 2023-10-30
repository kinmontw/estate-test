import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { BASE_URL } from './const';

function App() {

  const [area, setArea] = useState('');
  const [line, setLine] = useState('');
  const [station, setStation] = useState('');
  const [id,setId] = useState(0);

  const handleAdd = () => {
    console.log('Area:', area);
    console.log('Line:', line);
    console.log('Station:', station);
    const data = {
      "area": area,
      "line": line,
      "station": station
    }

    const tempURL = BASE_URL;

    axios.post(tempURL, data).then(
      res => {
        console.log("Success")
        alert("成功")
      },
      err => {
        console.log("err")
        alert("失敗")
      }
    )

  }

  const handleDelete = () => {
    const tempURL = "http://localhost:8080/api/v1/station/" + id
    axios.delete(tempURL).then(
      res => {
        console.log("Success")
        alert("成功")
      },
      err => {
        console.log("err")
        alert("失敗")
      }
    )
  }

  return (
    <div>
      <h2>Transportation Information</h2>
      <label>
        Area:
        <input type="text" value={area} onChange={(e) => setArea(e.target.value)} />
      </label>
      <br />
      <label>
        Line:
        <input type="text" value={line} onChange={(e) => setLine(e.target.value)} />
      </label>
      <br />
      <label>
        Station:
        <input type="text" value={station} onChange={(e) => setStation(e.target.value)} />
      </label>
      <br />
      <button onClick={handleAdd}>登録</button>

      <br />
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleDelete}>削除</button>
    </div>
  );
}

export default App;
