import React, { useEffect } from 'react'

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const Login : React.FC = () => {

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
    <div className='w-full h-auto flex flex-col md:flex-row justify-center items-center relative px-[4vw] sm:px-[8vw] md:px-[10vw] lg:px-[13vw] py-[40px] sm:py-[50px] md:py-[60px] lg:py-[80px] overflow-hidden gap-[20px] mt-[30px] '>
        <div className='basis-1/2 flex flex-col justify-center items-start h-auto w-full gap-[20px] self-start mt-[20px]'>
          <h1 className='w-fit h-auto text-[38px] sm:text-[42px] md:text-[46px] font-medium'>Login </h1>
          <span className='w-fit h-auto text-[13px] sm:text-[15px]'> <span className='text-[16px] sm:text-[18px] font-medium'>Welcome back.</span> <br/> Breathe, relax, and know you’re not alone. Every journey toward well-being is unique, and yours matters deeply. We’re here to help you find peace and clarity.</span>
        </div>
        <div className='basis-1/2 w-full h-auto relative flex justify-start items-start'>
          <iframe data-tally-src="https://tally.so/embed/wv0GWd?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="200" title="Login"></iframe>
        </div>
    </div>
  )
}

export default Login