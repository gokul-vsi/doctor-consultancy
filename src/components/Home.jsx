import React from 'react'
import header from '../images/header.png'
import home2 from '../images/home2.png'
import home3 from '../images/home3.png'
import logo1 from '../images/logo1.svg'
import logo2 from '../images/logo2.svg'
import logo3 from '../images/logo3.svg'
import logo4 from '../images/logo4.svg'
import logo5 from '../images/logo5.svg'
import logo6 from '../images/logo6.svg'
import doc1 from '../doctors/doc1'

export const Home = () => {
  return (
    <div>
        {/* header */}
        <div className="container mx-auto mt-5 md:mt-16 mb-10 rounded bg-blue-500">
            <div className="flex flex-col  md:flex-row">
            <div className="md:w-1/2  text-center md:text-start   md:ms-14  ">
              <h1 className='md:text-5xl text-2xl text-white font-medium  md:mt-24 '>Book Appointment
              With Trusted Doctors</h1>
              <div className='mt-7 px-3 md:px-0 flex gap-4' >
                 <img src={home2} alt="" />
                 <p className='text-white' >Simply browse through our extensive list of trusted doctors,
                 schedule your appointment hassle-free.</p>
              </div>
              
             <div className='flex  justify-center md:justify-start ' >
             <button className='bg-white text-gray-400 mt-7 flex px-4 py-2 gap-2 rounded-3xl font-bold hover:scale-110 transition-all ease-linear ' >Book appointment <span class="material-symbols-outlined">
arrow_forward
</span> </button>
             </div>
              
              
            </div>
            <div className="md:w-1/2 flex justify-center items-center">
               <img className='w-lg' src={header} alt="" />
            </div>
            </div>
        </div>
        {/* ================================= */}
        {/* home--about */}
        <div className="container mx-auto p-5">
            <div className="flex flex-col text-center justify-center items-center ">
            <h1 className='mb-5 md:text-4xl font-medium '>Find by Speciality</h1>
            <p className='text-justify mb-9'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-3'>
                <div className='hover:translate-y-[-10px] transition-all duration-500' >
                    <img src={logo1} className='w-24' alt="" />
                    <p className='text-xs mt-2' >Dermatologist</p>
                </div>
                <div className='hover:translate-y-[-10px] transition-all duration-500'>
                <img src={logo2} className='w-24' alt="" />
                <p className='text-xs mt-2' >Gastroenterologist</p>
                </div>
                <div className='hover:translate-y-[-10px] transition-all duration-500'>
                <img src={logo3} className='w-24' alt="" />
                <p className='text-xs mt-2' >Gynecologist</p>
                </div>
                <div className='hover:translate-y-[-10px] transition-all duration-500'>
                <img src={logo4} className='w-24' alt="" />
                <p className='text-xs mt-2' >Neurologist</p>
                </div>
                <div className='hover:translate-y-[-10px] transition-all duration-500'>
                <img src={logo5} className='w-24' alt="" />
                <p className='text-xs mt-2' >Pediatricians</p>
                </div>
                <div className='hover:translate-y-[-10px] transition-all duration-500'>
                <img src={logo6} className='w-24' alt="" />
                <p className='text-xs mt-2' >General physician</p>
                </div>
            </div>
            </div>
        </div>
        {/* ================================================= */}
        {/* Doctors List */}
        <h1 className='text-center mt-10 text-3xl font-medium mb-3 '>
        Top Doctors to Book
        </h1>
        <p className='text-center text-sm '>
        Simply browse through our extensive list of trusted doctors.
        </p>
        <div className="container mx-auto p-5">
        <div  className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {
            doc1.map((dd,index)=>(
               <div key={index} className=' border overflow-hidden border-blue-200 rounded-xl hover:translate-y-[-10px] transition-all duration-500  '>
                   <img src={dd.image} className='w-full h-auto bg-gray-100  ' alt="" />
                   <div className="flex justify-center items-center flex-row gap-2 mt-2 ">
                    <p className='w-2 h-2 rounded-full bg-green-500'></p>
                    <p className='text-green-500'>Available</p>
                   </div>
                      <p className='text-center font-medium ' >{dd.name}</p>
                      <p className='text-center mb-2'>{dd.role}</p>  
               </div>
            ))
          }
        </div>
        </div>
        {/* ===================================================== */}
        {/* footer-one */}
        <div className="container mx-auto p-5">
          <div className="flex flex-row rounded-lg bg-blue-500 ">
            <div className="md:w-1/2 md:ms-14 ms-1.5" >
              <h1 className='md:text-5xl text-2x text-white font-medium mx-1 text-justify mt-10 md:mt-40 '>
              Book Appointment
With 100+ Trusted Doctors
              </h1>
              <button className='md:px-4 md:py-2 px-1 py-1.5 rounded-4xl md:mt-8 mt-4 bg-white text-gray-400 font-bold hover:scale-110 transition-all duration-500 '>Create Account</button>
            </div>
            <div className="md:w-1/2">
               <div className="flex justify-center items-center">
               <img src={home3} className='md:w-96 md:py-2 ' alt="" />
               </div>
            </div>
          </div>
        </div>
    </div>
  )
}
