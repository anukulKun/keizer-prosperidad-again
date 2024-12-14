import React, { useEffect } from 'react'
import counselling from "../../assets/counselling_1.jpg"

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

interface props{
  title : string,
  description:string
}

const Counselling:React.FC<props>= (props) => {
    useEffect(() => {
        window.scrollTo(
          {
            top: 0,
            behavior: 'smooth'
          }
        );
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        
        script.onload = () => {
          window.Tally?.loadEmbeds();
          
        };

        document.body.appendChild(script);

        return () => {
          document.body.removeChild(script);
        };
    }, []);

  return (
    <div className='mt-[50px] px-[4vw] sm:px-[8vw] md:px-[10vw] lg:px-[13vw] py-[40px] sm:py-[50px] md:py-[60px] lg:py-[80px] overflow-hidden w-full h-auto flex flex-col justify-center items-start'> 
      <h1 className='w-full text-[38px] md:text-[46px] lg:text-[54px] font-medium'>{props.title}</h1>
      <p className='w-full h-auto p-[8px] text-[14px] sm:text-[16px]'>{props.description}</p>
      <div className='w-full h-auto flex justify-start md:justify-center items-start gap-[20px]'>
        <iframe 
          className='w-full md:basis-1/2' 
          data-tally-src="https://tally.so/embed/wvq0vD?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
          loading="lazy" 
          width="100%" 
          height="762" 
          title="Counselling"
        />
        <div className='hidden basis-1/2 md:flex justify-between items-center h-auto overflow-hidden'>
          <img src={counselling} alt="" className='w-[500px] h-[500px] object-cover mt-[60px] rounded-lg'/>
        </div>
        </div>
    </div>
  );
}

export default Counselling

