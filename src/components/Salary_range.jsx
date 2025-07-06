import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setsalaryrange } from '../redux/jobSlice';
export const Salary_range = () => {
  const dispatch = useDispatch();
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(15);

  useEffect(() => {
    dispatch(setsalaryrange({ min: minSalary, max: maxSalary }));
  }, [minSalary, maxSalary, dispatch]);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxSalary - 5);
    setMinSalary(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minSalary + 5);
    setMaxSalary(value);
  };

  return (
    <div className="flex flex-col justify-between w-[260px]">
      {/* Label Row */}
      <div className="flex justify-between items-center">
        <h5 className="text-sm text-[#686868] font-medium">Salary Per Month</h5>
        <p className="text-sm text-[#686868] font-medium">
          ₹{minSalary}k - ₹{maxSalary}k
        </p>
      </div>

      {/* Range Slider */}
      <div className="relative mt-4">
        <div className="h-1 bg-[#E0E0E0] rounded relative">
          <div
            className="h-1 bg-black absolute top-0"
            style={{
              left: `${minSalary}%`,
              width: `${maxSalary - minSalary}%`,
            }}
          />
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={minSalary}
          onChange={handleMinChange}
          className="absolute w-full top-[-6px] appearance-none bg-transparent pointer-events-auto accent-black"
        />
        <input
          type="range"
          min="0"
          max="100"
          value={maxSalary}
          onChange={handleMaxChange}
          className="absolute w-full top-[-6px] appearance-none bg-transparent pointer-events-auto accent-black"
        />
      </div>
    </div>
  );
};
