import React from 'react'
import p1 from "../../assets/p1.jpg"
import p2 from "../../assets/p2.jpg"
import p3 from "../../assets/p3.jpg"
import p4 from "../../assets/p4.jpg"
import p5 from "../../assets/p5.jpg"
import p6 from "../../assets/p6.jpg"
import p7 from "../../assets/p7.jpg"
import p8 from "../../assets/p8.jpg"
import p9 from "../../assets/p9.jpg"

const Gallery:React.FC = () => {
  return (
    <div id="about" className='w-full h-auto flex flex-col justify-center items-start px-[4vw] sm:px-[8vw] md:px-[10vw] lg:px-[13vw] mt-[30px] py-[50px] md:py-[60px] lg:py-[80px] overflow-hidden'>
        <div className='flex flex-col justify-start items-start h-aut0 w-full '>
          <h1 className='w-fit h-auto text-[40px] md:text-[46px] lg:text-[54px] font-medium mb-[30px]'>Gallery</h1>
          <div className='grid row-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full h-auto gap-[20px]' >
            <img src={p1} alt="" className='col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 w-full h-[220px] object-cover rounded-lg sm:hover:scale-[1.1] transition-all '/> 
            <img src={p2} alt="" className='col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1 w-full h-[220px] object-cover rounded-lg sm:hover:scale-[1.1] transition-all'/> 
            <img src={p3} alt="" className='col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 w-full h-[220px] object-cover rounded-lg sm:hover:scale-[1.1] transition-all'/> 
            <img src={p4} alt="" className='col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 w-full h-[220px] object-cover rounded-lg sm:hover:scale-[1.1] transition-all'/> 
            <img src={p5} alt="" className='col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-2 w-full h-[220px] object-cover rounded-lg sm:hover:scale-[1.1] transition-all'/> 
            <img src={p6} alt="" className='col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 w-full h-[220px] object-cover rounded-lg sm:hover:scale-[1.1] transition-all'/> 
            <img src={p7} alt="" className='col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 w-full h-[220px] object-cover rounded-lg sm:hover:scale-[1.1] transition-all'/> 
            <img src={p8} alt="" className='col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 w-full h-[220px] object-cover rounded-lg sm:hover:scale-[1.1] transition-all'/> 
            <img src={p9} alt="" className='col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 w-full h-[220px] object-cover rounded-lg sm:hover:scale-[1.1] transition-all'/> 
          </div>
        </div>
    </div>
  )
}

export default Gallery