import React  from 'react'
import StudentForm from './Components/StudentForm';
import StudentInfoDisplay from './Components/StudentInfoDisplay';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import CollegeCodeEntry from './Components/CollegeCodeEntry';
import Login from './Components/Login';
const App = () => {
  return (
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<CollegeCodeEntry/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/StudentForm'element={<StudentForm/>}/>
      <Route path='/StudentInfoDisplay' element={<StudentInfoDisplay/>}/>

    </Routes>
   
    </BrowserRouter>
  )
}

export default App
