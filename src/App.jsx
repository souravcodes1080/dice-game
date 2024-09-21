
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Play from './Components/Play'

function App() {

  return (
    <>
      <Routes >
        <Route path="/" element={<Homepage />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </>
  )
}

export default App
