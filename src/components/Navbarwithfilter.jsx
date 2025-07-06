import React from 'react'
import { Navbars } from './Navbars'
import { Salary_range } from './Salary_range'
import { Search_input } from './Search_input'
import { Job_type } from './Job_type'
import Location  from './Location'
export const Navbarwithfilter = () => {
  return (
    <div><div className='relative w-[1580px] shadow-[0px_0px_15px_10px_#7F7F7F26]'>
            <div className='absolute z-50 top-[21px] pl-[355px]'>
                 <Navbars/>
            </div>
            <div className="relative w-full h-[214px] px-6 py-4 bg-white shadow-[0px_4px_8px_#C6BFBF40] shadow-sm rounded-xl">
                <div className="absolute bottom-5 left-6 right-6 flex items-center justify-evenly gap-4">
                    <Search_input />
                    <Job_type />
                    <Location />
                    <Salary_range />
                </div>
            </div>
        </div></div>
  )
}
