import React, { useState,useEffect } from 'react'

interface props{
    end:number,
    duration:number,
    suffix?:string,
    prefix?:string
}

const AnimatedCounter :React.FC<props> = (props) => {
  const {end, duration, suffix = "", prefix = ""}= props
  const [count,setCount] = useState<number>(0)
  
  useEffect(()=>{
    function animate (){
        const value : number = end;
        const increment :number = value/duration

        if(count<value){
            setCount(prev => prev+increment)
            // setTimeout(animate,1)
        }
        else{
            setCount(value)
        }
    }

    animate()   
  },[count])
  return (
    <span className=''>
        {prefix}{count.toFixed(0)}{suffix}
    </span>
  )
}

export default AnimatedCounter