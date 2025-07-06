import React from 'react';
import { useDispatch } from 'react-redux';
import { setinput } from '../redux/jobSlice';
export const Search_input = () => {
  const dispatch = useDispatch();

  const handlechange = (e) => {
    dispatch(setinput(e.target.value));
  };

  return (
    <div>
      <div className="flex items-center relative gap-4 border-r border-gray-300 pr-15">
        <img src="/input_search.svg" className="w-4 h-4" />
        <input
          type="text"
          placeholder="Search By Job Title, Role"
          onChange={handlechange}
          className="outline-none text-sm pr-[100px] text-gray-700 bg-transparent placeholder:text-gray-400"
        />
      </div>
    </div>
  );
};
