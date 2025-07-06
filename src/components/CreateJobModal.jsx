import React from 'react'
import { useState } from 'react';            // from React
import { useDispatch } from 'react-redux';   // from React-Redux

import TextField from '@mui/material/TextField';
import { addJob } from '../redux/jobSlice';
import axios from 'axios'
//import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';


export const CreateJobModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    salaryRange: '',
    deadline: '',
    description: '',
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      //https://intern-b0mx.onrender.com
      const response = await axios.post('https://internbackend-lr0y.onrender.com/api/jobs', formData);
      const newJob = response.data;
      dispatch(addJob(newJob));// Add the new job to the UI
    } catch (error) {
      console.error("Error posting job:", error);
    }
    //onSubmit(formData);
    onClose(); // Close the modal after submit
  };

  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[700px] h-[620px] p-6">
        <h2 className="text-xl font-semibold flex items-center  justify-center mb-4">Create Job Opening</h2>
        <div className="grid grid-cols-2 gap-2">
          {/* Job Title */}
          <div>
            <label className="block text-md font-medium mb-1">Job Title</label>
            {/* <input name="title" placeholder="Job Title" onChange={handleChange} className="border p-2 rounded w-full" /> */}
            <TextField name="title" id="outlined-basic" style={{ width: 300, height: 91 }} onChange={handleChange} label="Software Developer" variant="outlined" />
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-md font-medium mb-1">Company Name</label>
            <TextField name="company" id="outlined-basic" style={{ width: 300, height: 91 }} onChange={handleChange} label="Amazon,Microsoft,Swiggy" variant="outlined" />
          </div>

          {/* Location */}
          <div className=''>
            <div className="w-full w-[298px] h-[91px] ">
              <label className="block text-md font-medium text-gray-700 mb-1">
                Location
              </label>
              <select
                name="location"
                onChange={handleChange}
                defaultValue=""
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="" disabled>
                  Choose Preferred Location
                </option>
                <option value="Chennai">Chennai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
          </div>

          {/* Job Type */}
          <div className='w-[300px] h-[91px]'>
            <label className="block text-md font-medium mb-1">Job Type</label>
            <select
              name="type"
              onChange={handleChange}
              className="border p-2 rounded text-gray-500 w-full"
              defaultValue=""
            >
              <option value="" disabled>Job Type</option>
              <option value="FullTime">Full Time</option>
              <option value="PartTime">Part Time</option>
              <option value="Internship">Internship</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          {/* Salary Range */}
          <div>
            <label className="block text-md font-medium mb-1">Salary Range</label>

            <div className='flex justify-around'>
              <TextField
              name="salaryRange"
              type="number"
              id="outlined-basic"
              label="min"
              placeholder='LPA'
              variant="outlined"
              style={{ width: 150, height: 91 }}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img
                      src="/minmax.svg" // your icon path
                      alt="search"
                      style={{ width: 16, height: 16, marginRight: 4 }}
                    />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              name="salaryRange"
              type="number"
              id="outlined-basic"
              label="max"
              variant="outlined"
              placeholder='LPA'
              style={{ width: 150, height: 91 }}
              onChange={handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img
                      src="/minmax.svg" // your icon path
                      alt="search"
                      style={{ width: 16, height: 16, marginRight: 4 }}
                    />
                  </InputAdornment>
                ),
              }}
            />
            </div>


            {/* <TextField name="salaryRange" type='number' id="outlined-basic" style={{ width: 120, height: 91 }} onChange={handleChange} label="Job Title" variant="outlined" /> */}
          </div>

          {/* Application Deadline */}
          <div>
            <label className="block text-md font-medium mb-1">Application Deadline</label>
            <TextField name="deadline" type='date' id="outlined-basic" style={{ width: 300, height: 91 }} onChange={handleChange} label="" variant="outlined" />
          </div>
        </div>

        {/* Job Description */}
        <div className="mt-4">
          <label className="block text-md font-medium mb-1">Job Description</label>
          <textarea
            name="description"
            placeholder="Please share a description to let the candidate know more about the job role"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Footer buttons */}
        <div className="flex justify-between gap-3 mt-4">
          <button onClick={onClose} className="px-4 py-2 border rounded">Save Draft</button>
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-6 py-4 rounded shadow-md">
            Publish
          </button>
        </div>
      </div>
    </div>

  );
}
