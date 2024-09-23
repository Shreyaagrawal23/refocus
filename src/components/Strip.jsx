import React from 'react'

const Strip = ({val}) => {
  return (
    <div className=" px-3 py-6 border-t-[1.2px] border-b-[1.2px] lg:border-r-[1px] border-zinc-600 overflow-x-hidden flex items-center justify-between lg:gap-20">
     <img src={val.url} alt="" />
          <span className='font-semibold '>{val.number}</span>
    </div>
  );
}

export default Strip