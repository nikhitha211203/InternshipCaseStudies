import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { DoctorPatientDetails } from './components/DoctorPatientDetails'
import DoctorList from './components/DoctorList'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<DoctorList />} />
      <Route path='/doctors/:doctorId/patients/:patientId' element={<DoctorPatientDetails />} />
      
    </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
