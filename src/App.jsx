import React from 'react'
import NavBar from './Components/navbar/NavBar'
import Data from './Components/mainSection/Data';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const App = () => {
  return (


    <Router>
        <NavBar />
        <Routes>
        <Route path="/" element={<Data/>} />
      
        </Routes>
    </Router>
  )
}

export default App