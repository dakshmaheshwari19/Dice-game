import { useState } from 'react'
import './App.css'
import { Home } from './my components/Home'
import { Game } from './my components/Game'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {

  return (
    <>
      
      <Router>

        <Routes>

        

          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/game' element={<Game/>}/>

        </Routes>

      </Router>

    </>
  )
}

export default App
