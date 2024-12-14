import React, { useEffect } from 'react'
import abt1 from "../../assets/abt1.jpg"
import abt2 from "../../assets/abt2.jpg"
import abt3 from "../../assets/abt3.jpg"
import abt4 from "../../assets/abt4.jpg"

const AboutUs :React.FC = () => {

  useEffect(()=>{
        window.scrollTo(
          {
            top: 0,
            behavior: 'smooth'
          }
        );
  },[])
  
  return (
    <div id="about" className='w-full h-auto flex flex-col justify-center items-start px-[4vw] sm:px-[8vw] md:px-[10vw] lg:px-[13vw] mt-[30px] py-[50px] md:py-[60px] lg:py-[80px] overflow-hidden'>
        <div className='flex flex-col justify-start items-start h-aut0 w-full mb-[40px]'>
          <h1 className='w-fit h-auto text-[40px] md:text-[46px] lg:text-[54px] font-medium mb-[30px]'>About Us</h1>
          <div className='flex w-full justify-center items-center h-auto gap-[20px]' >
            <img src={abt1} alt="" className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]
             object-cover rounded-lg rotate-[3deg] hover:scale-[1.1] transition-all'/>
            <img src={abt2} alt="" className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-cover rounded-lg rotate-[-3deg] hover:scale-[1.1] transition-all'/>
            <img src={abt3} alt="" className='w-[200px] h-[200px] object-cover rounded-lg rotate-[3deg] hover:scale-[1.1] transition-all hidden md:block'/>
            <img src={abt4} alt="" className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] object-cover rounded-lg rotate-[-3deg] hover:scale-[1.1] transition-all hidden sm:block'/>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-start h-auto gap-[10px]'>
          <p><b>Prosperidad Square</b> is a registered company under the Companies Act of India, embodying over a decade of dedication to education and counseling services with deep roots that trace back to 1986. Our journey has been one of continuous growth, resilience, and commitment to community welfare.</p>
          <p>The story of Prosperidad Square began over three decades ago, when our <b>founder and CEO, Mr. Surendra Kishore Verma</b> a respected advocate and visionary—recognized the need for accessible, high-quality education in Patna. Driven by a deep commitment to public service and a desire to empower local students, Mr. Verma established the Honours Coaching Institute. This institute was the first of its kind in the region, providing comprehensive resources to meet the varied teaching and learning needs of students. The Honours Coaching Institute quickly gained a reputation for its rigorous academic standards and holistic support, setting a benchmark for educational excellence.</p>
          <p>Today, Prosperidad Square continues to operate with the same founding principles of accessibility, quality, and compassion. We are driven by a mission to uplift, educate, and counsel individuals across diverse backgrounds. Our legacy, which spans from 1986 to the present, stands as a testament to our commitment to support those who need it most, ensuring that everyone we work with feels empowered, informed, and equipped for a brighter future.</p>
        </div>
    </div>
  )
}

export default AboutUs