import React, { useEffect } from 'react'

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const ContactUs : React.FC = () => {

    const contactMethods = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ,
            contact: "prosperidadsquare@gmail.com "
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ,
            contact: "+91 9334651729, +91 7480041729"
        },
    ]

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
          <h1 className='w-fit h-auto text-[26px] sm:text-[28px] md:text-[32px] font-medium'>Let us know how we can help </h1>
          <span className='w-fit h-auto text-[13px] sm:text-[15px]'>We’re here to help and answer any question you might have, We look forward to hearing from you! Please fill out the form, or us the contact information bellow .</span>
          <div>
            <ul className="mt-[10px] flex flex-wrap gap-x-10 gap-y-6 items-center">
                {
                    contactMethods.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-x-3 text-[13px] sm:text-[16px]">
                            <div className="flex-none text-gray-400">
                                {item.icon}
                            </div>
                            <p>{item.contact}</p>
                        </li>
                    ))
                }
            </ul>
          </div>
        </div>
        <div className='basis-1/2 w-full h-auto relative flex justify-start items-start'>
          <iframe data-tally-src="https://tally.so/embed/w8pbko?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="657" title="Contact Us"></iframe>
        </div>
    </div>
  )
}

export default ContactUs