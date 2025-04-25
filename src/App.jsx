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
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
