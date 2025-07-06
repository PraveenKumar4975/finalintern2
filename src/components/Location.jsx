import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setlocation } from '../redux/jobSlice'; // adjust path if needed

export default function Location() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Preferred Location');

  const options = ['Chennai', 'Bangalore', 'Hyderabad', 'Remote'];

  const handleSelect = (option) => {
    setSelected(option);
    dispatch(setlocation(option)); // ✅ dispatch selected location
    setOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="flex justify-between border-r border-gray-300 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex">
          <img src="/Location.svg" alt="Location" className="w-4 h-4" />
          <span className="text-sm pl-3 text-[#686868] font-medium">{selected}</span>
        </div>
        <div className="pr-[50px] pl-[85px]">
          <img src="/dropdown.svg" alt="Dropdown" className="w-4 h-4" />
        </div>
      </div>

      {open && (
        <div className="absolute left-0 mt-1 w-full bg-white shadow-lg rounded-md z-10">
          {options.map((option) => (
            <div
              key={option}
              className="px-3 py-2 hover:bg-gray-100 text-sm text-gray-700 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
