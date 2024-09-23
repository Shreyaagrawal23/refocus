import React from 'react'
import Strip from './Strip'
import strip1 from '../assets/strip 1.svg'
import strip2 from '../assets/strip 2.svg'
import strip3 from '../assets/strip 3.svg'

const Strips = () => {
    let data = [
      { url: strip1, number: 48 },
      { url: strip2, number: 2 },
      { url: strip3, number: 11 },
      { url: strip1, number: 48 },
      { url: strip2, number: 2 },
      { url: strip3, number: 11 },
    ];
  return (
      <div className=' mt-20 lg:flex lg:items-center  '>
         {data.map((elem,index)=>(<Strip val={elem} key={index}></Strip>))}
    </div>
  )
}

export default Strips