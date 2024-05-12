import { useState, useEffect } from 'react'


const ProgressBar=()=>{
    const [value, setValue] = useState(0);
    const [percentage,setPercentage]=useState(0);
  
    useEffect(()=>{
      setInterval(()=>{
        setValue((num)=>num+0.1)
      },20)
    },[]);
  
    useEffect(()=>{
      setPercentage(Math.min(100,value))
    },[value])
  
    return (
        <div className='w-7/12 h-auto mx-auto mt-48 text-center'>
  
          <h1 className='text-3xl mb-5 font-bold'>Progress Bar</h1>
  
          <div className='w-full h-12 rounded-3xl bg-gray-200 flex justify-center items-center relative overflow-hidden'>
              <span className='text-2xl z-10 font-mono' style={{color: percentage>=50 ? "white" : "black"}}>{percentage.toFixed()}%</span>
              <div className=' absolute top-0 left-0 h-full bg-green-500' style={{ width:`${percentage}%`}}>
              </div>
          </div>
  
          <p className=' mt-2 text-2xl font-mono'>{percentage>=100? "Completed" : "Loading..."}</p>
  
        </div>
    )
}

export default ProgressBar;