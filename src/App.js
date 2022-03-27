import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './components/Navbar.js'
import Card from './components/Card.js'
import data from './data.js'

const travelData = data.map((item, index) => {
  return (
    <div>
      <Card
        key = {item.id}
        {...item}
      />
      {index != data.length-1 && <hr/>}
    </div>
  )
})

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="cards">
        {travelData}
      </div>
    </div>
  );
}

export default App;
