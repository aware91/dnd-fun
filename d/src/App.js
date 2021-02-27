import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [ dnd, setDnd ] = useState([])

  useEffect(() => {
    axios
      .get(`https://www.dnd5eapi.co/api/classes/`)
      .then(res => {
        setDnd(res.data.results)
        // console.log('aw: app.js: .get: ', res.data)
      })
      .catch(err => {
        console.log('error', err.message, err.response)
      })
  }, [])

  console.log('const dnd useState', dnd)

  return (
    <div className="App">
      <header className="App-header">
        {dnd.map(DnD => (
          <div key={DnD.results}>
            <p>{DnD.name}</p>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
