import React, { useEffect } from "react";
import couselling from "../../assets/counselling.jpg";
import education from "../../assets/education.jpeg";
import AnimatedCounter from "../../Components/AnimatedCounter/AnimatedCounter";
// import cert1 from "../../assets/cert1.png"
// import cert2 from "../../assets/cert2.png"
// import cert3 from "../../assets/cert3.png"
import map from "../../assets/map.jpeg";
import { Link } from "react-router-dom";
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const Hero: React.FC = () => {
  const contactMethods = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      ),
      contact: "prosperidadsquare@gmail.com ",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      ),
      contact: "+91 9334651729, +91 7480041729",
    },
  ];

  function handleClick(id: string) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const script = document.createElement("script");
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
    <div className="w-screen h-auto overflow-hidden">
      <div className="w-full h-auto relative mt-[60px] px-[4vw] sm:px-[8vw] md:px-[10vw] lg:px-[13vw] py-[40px] sm:py-[50px] md:py-[60px] lg:py-[80px] overflow-hidden">
        <div className="absolute -z-10 top-[-50px] left-[-20px] w-[200px] h-[200px] rounded-full filter blur-[100px] bg-[#ff8791]"></div>
        <div className="w-full h-auto flex flex-col sm:flex-row justify-center items-center">
          <div className="basis-1/2 flex flex-col justify-center items-start h-auto w-full">
            <h1 className="w-fit h-auto text-[22px] sm:text-[26px] md:text-[32px] lg:text-[38px] font-medium">
              {" "}
              <span className="text-[#93193a] text-[34px] sm:text-[38px] md:text-[44px] lg:text-[50px] font-semibold">
                Surendra Samriddhi's Square{" "}
              </span>{" "}
              <br /> empowering minds through dedicated education and counseling
              since 1986
            </h1>
            <button
              onClick={() => {
                handleClick("book");
              }}
              className="mt-[30px] px-[16px] py-[8px] sm:px-[20px] sm:py-[10px] md:px-[24px] md:py-[12px] text-[12px] sm:text-[14px] md:text-[16px] bg-[#b00030] rounded-lg text-[#fff] font-medium hover:scale-[1.1] transition-all"
            >
              Book a Session
            </button>
          </div>
          <div className="basis-1/2 w-full h-auto sm:h-[450px] relative flex justify-center sm:justify-end items-start gap-[25px] sm:gap-[25px] md:gap-[35px] lg:gap-[50px] mt-[40px] sm:mt-[0px]">
            <div className="relative w-[100px] h-[200px] sm:w-[100px] sm:h-[250px] lg:w-[150px] lg:h-[300px] rounded-t-[1000px] rounded-b-[1000px] overflow-hidden">
              <img
                src={couselling}
                alt=""
                className="absolute top-[50px] sm:top-[75px] sm:left-[-10px] lg:top-[75px] lg:left-[-20px] scale-[2] sm:scale-[2.5] lg:scale-[2]"
              />
            </div>
            <div className="relative mt-[100px] w-[100px] h-[200px] sm:w-[100px] sm:h-[250px] lg:w-[150px] lg:h-[300px] rounded-t-[1000px] rounded-b-[1000px] overflow-hidden">
              <img
                src={education}
                alt=""
                className="absolute top-[50px] right-[120px] sm:top-[92px] sm:right-[120px] lg:top-[75px] lg:right-[170px] scale-[4]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto relative px-[4vw] sm:px-[8vw] md:px-[10vw] lg:px-[13vw] py-[40px] sm:py-[50px] md:py-[60px] lg:py-[80px] overflow-hidden">
        <div className="w-full h-auto text-center text-[26px] sm:text-[28px] md:text-[32px] font-medium">
          What makes us a trusted and impactful partner? <br />
          Hear it from our clients!
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full h-auto gap-[30px] md:gap-[15px] mt-[40px]">
          <div className="basis-1/3 md:h-[200px] flex flex-col justify-start items-center">
            <div className="text-[#72001c] text-[64px] sm:text-[72px] font-medium">
              <AnimatedCounter end={84} duration={30000} suffix="&#37;" />
            </div>
            <span className="text-center text-[14px] sm:text-[16px]">
              users reported a reduction in stress levels after reaching out
            </span>
          </div>
          <div className="basis-1/3 md:h-[200px] flex flex-col justify-start items-center">
            <div className="text-[#72001c] text-[64px] sm:text-[72px] font-medium">
              <AnimatedCounter end={90} duration={30000} suffix="&#37;" />
            </div>
            <span className="text-center text-[14px] sm:text-[16px]">
              users reported that their overall mental health has improved after
              using the service
            </span>
          </div>
          <div className="basis-1/3 md:h-[200px] flex flex-col justify-start items-center">
            <div className="text-[#72001c] text-[64px] sm:text-[72px] font-medium">
              <AnimatedCounter end={92} duration={30000} suffix="&#37;" />
            </div>
            <span className="text-center text-[14px] sm:text-[16px]">
              organisations choose to partner with us year after year
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-auto relative px-[4vw] sm:px-[8vw] md:px-[10vw] lg:px-[13vw] py-[20px] sm:py-[10px] md:py-[15px] lg:py-[20px] overflow-hidden mb-[60px]">
        <div className="w-full h-auto text-center text-[30px] sm:text-[34px] md:text-[38px] font-medium">
          We are registerd under The Companies Act, 2013
        </div>
        {/* <div className='flex flex-col md:flex-row justify-center items-center w-full h-auto gap-[30px] md:gap-[15px] mt-[40px]'>
          <div className='basis-1/3 h-auto md:h-[150px] flex flex-col justify-start items-center'>
            <img src={cert1} alt="" className='w-[100px] sm:w-[150px]'/>
          </div>
          <div className='basis-1/3 h-auto md:h-[150px] flex flex-col justify-start items-center'>
            <img src={cert2} alt="" className='w-[100px] sm:w-[150px]'/>
          </div>
          <div className='basis-1/3 h-auto md:h-[150px] flex flex-col justify-start items-center'>
            <img src={cert3} alt="" className='w-[100px] sm:w-[150px]'/>
          </div>
        </div> */}
      </div>
      <div className="w-full h-auto relative px-[4vw] sm:px-[8vw] md:px-[10vw] lg:px-[13vw] py-[40px] overflow-hidden bg-[#fff0f2]">
        <div className="w-full h-auto text-center text-[26px] sm:text-[28px] md:text-[32px] font-medium">
          Our Milestones
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-center w-full h-auto gap-[30px] md:gap-[15px] mt-[20px] sm:mt-[40px]">
          <div className="basis-1/5 md:h-[200px] flex flex-col justify-start items-center">
            <div className="text-[#72001c] text-[44px] sm:text-[54px] font-medium">
              <AnimatedCounter end={38} duration={30000} suffix="&#43;" />
            </div>
            <span className="text-center text-[16px] sm:text-[20px] font-semibold">
              Years of Experience
            </span>
          </div>
          <div className="basis-1/5 md:h-[200px] flex flex-col justify-start items-center">
            <div className="text-[#72001c] text-[44px] sm:text-[54px] font-medium">
              <AnimatedCounter end={25} duration={30000} suffix="K&#43;" />
            </div>
            <span className="text-center text-[16px] sm:text-[20px] font-semibold">
              Counselling Hours
            </span>
          </div>
          <div className="basis-1/5 md:h-[200px] flex flex-col justify-start items-center">
            <div className="text-[#72001c] text-[44px] sm:text-[54px] font-medium">
              <AnimatedCounter end={1} duration={30000} suffix="M&#43;" />
            </div>
            <span className="text-center text-[16px] sm:text-[20px] font-semibold">
              Lives Touched
            </span>
          </div>
          <div className="basis-1/5 md:h-[200px] flex flex-col justify-start items-center">
            <div className="text-[#72001c] text-[44px] sm:text-[54px] font-medium">
              <AnimatedCounter end={1} duration={30000} suffix="K&#43;" />
            </div>
            <span className="text-center text-[16px] sm:text-[20px] font-semibold">
              Success Stories
            </span>
          </div>
          <div className="basis-1/5 md:h-[200px] flex flex-col justify-start items-center">
            <div className="text-[#72001c] text-[44px] sm:text-[54px] font-medium">
              <AnimatedCounter end={150} duration={30000} suffix="&#43;" />
            </div>
            <span className="text-center text-[16px] sm:text-[20px] font-semibold">
              Webinars on mental health awareness
            </span>
          </div>
        </div>
      </div>
      <div
        id="book"
        className="w-full h-auto flex flex-col md:flex-row justify-center items-center relative px-[4vw] sm:px-[8vw] md:px-[10vw] lg:px-[13vw] py-[20px] sm:py-[30px] md:py-[40px] lg:py-[50px] overflow-hidden gap-[20px] "
      >
        <div className="basis-1/2 flex flex-col justify-center items-start h-auto w-full gap-[20px] self-start mt-[20px]">
          <h1 className="w-fit h-auto text-[38px] sm:text-[42px] md:text-[46px] font-medium">
            Book a Session Now !{" "}
          </h1>
          <span className="w-fit h-auto text-[13px] sm:text-[15px]">
            We’re here to help and answer any question you might have, We look
            forward to hearing from you! Please fill out the form, or us the
            contact information bellow .
          </span>
          <div>
            <ul className="mt-[10px] flex flex-wrap gap-x-10 gap-y-6 items-center">
              {contactMethods.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-x-3 text-[13px] sm:text-[16px]"
                >
                  <div className="flex-none text-gray-400">{item.icon}</div>
                  <p>{item.contact}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="basis-1/2 w-full h-auto relative flex justify-start items-start">
          <iframe
            data-tally-src="https://tally.so/embed/mDvrXX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="200"
            title="Book Session"
          ></iframe>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col sm:flex-row justify-center items-center relative px-[4vw] sm:px-[8vw] md:px-[10vw] lg:px-[13vw] py-[40px] sm:py-[50px] md:py-[60px] lg:py-[80px] overflow-hidden gap-[20px] bg-[#fff9fa]">
        <div className="basis-1/2 w-full h-auto relative flex justify-start items-start self-start sm:mt-[10px]">
          <Link to="https://g.co/kgs/FmV6UCX">
            <img
              src={map}
              alt=""
              className="w-full md:w-[400px] object-cover rounded-lg border-[1px] border-[#000]"
            />
          </Link>
        </div>
        <div className="basis-1/2 flex flex-col justify-center items-start h-auto w-full">
          <h1 className="w-fit h-auto text-[26px] sm:text-[28px] md:text-[32px] font-medium">
            Our registered locations{" "}
          </h1>
          <span className="w-fit h-auto text-[13px] sm:text-[15px]">
            Surendra Samriddhi's Square,has registered branches operating
            schools, NGOs, and a team of over 50 counselors dedicated to our
            mission.
          </span>
          <div className="w-full h-auto flex flex-col justify-center items-start py-[14px] gap-[10px]">
            <div className="w-full px-[16px] py-[16px] bg-[#ffdee1] rounded-lg text-[15px] sm:text-[16px] font-medium">
              Bihar
            </div>
            <div className="w-full px-[16px] py-[16px] bg-[#ffdee1] rounded-lg text-[15px] sm:text-[16px] font-medium">
              Jharkhand
            </div>
            <div className="w-full px-[16px] py-[16px] bg-[#ffdee1] rounded-lg text-[15px] sm:text-[16px] font-medium">
              West Bengal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
