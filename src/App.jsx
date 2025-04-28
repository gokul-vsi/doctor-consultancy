import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,  Route,  Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Alldoctors } from './components/Alldoctors'
import { About } from './components/About'
import { Contactus } from './components/Contactus'
import { Navbar } from './components/Navbar'
import { Doctor1 } from './appointments/Doctor1'
import { Bookapp } from './bookappointment/Bookapp'
import { Doctor2 } from './appointments/Doctor2'
import { Doctor3 } from './appointments/Doctor3'
import { Doctor4 } from './appointments/Doctor4'
import { Doctor5 } from './appointments/Doctor5'
import { Doctor6 } from './appointments/Doctor6'
import { Doctor7 } from './appointments/Doctor7'
import { Doctor8 } from './appointments/Doctor8'
import { Doctor9 } from './appointments/Doctor9'
import { Doctor10 } from './appointments/Doctor10'
import { Doctor11 } from './appointments/Doctor11'
import { Doctor12 } from './appointments/Doctor12'
import { Doctor13 } from './appointments/Doctor13'
import { Doctor14 } from './appointments/Doctor14'
import { Doctor15 } from './appointments/Doctor15'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar/>
         <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/alldoctors' element={<Alldoctors/>} ></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contactus/>}></Route>
            <Route path='/doctor1' element={<Doctor1/>}></Route>
            <Route path='/doctor2' element={<Doctor2/>}></Route>
            <Route path='/doctor3' element={<Doctor3/>}></Route>
            <Route path='/doctor4' element={<Doctor4/>}></Route>
            <Route path='/doctor5' element={<Doctor5/>}></Route>
            <Route path='/doctor6' element={<Doctor6/>}></Route>
            <Route path='/doctor7' element={<Doctor7/>}></Route>
            <Route path='/doctor8' element={<Doctor8/>}></Route>
            <Route path='/doctor9' element={<Doctor9/>}></Route>
            <Route path='/doctor10' element={<Doctor10/>}></Route>
            <Route path='/doctor11' element={<Doctor11/>}></Route>
            <Route path='/doctor12' element={<Doctor12/>}></Route>
            <Route path='/doctor13' element={<Doctor13/>}></Route>
            <Route path='/doctor14' element={<Doctor14/>}></Route>
            <Route path='/doctor15' element={<Doctor15/>}></Route>
            <Route path='/bookappointment' element={<Bookapp/>}></Route>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
