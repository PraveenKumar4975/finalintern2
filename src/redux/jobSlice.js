import { createSlice } from '@reduxjs/toolkit';

const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
     // store list of job cards
     location:'',
     jobtype: '',
  input: '',
  salaryrange: { min: 0, max: 100 }
  },
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
    },
    addJob: (state, action) => {
      state.jobs.unshift(action.payload); // add new job at the top
    },
    setlocation: (state, action) => {
      state.location = action.payload;
    },
    setjobtype: (state, action) => {
    state.jobtype = action.payload;  // <-- new reducer
  },
    setinput: (state, action) => {
    state.input = action.payload; // <-- input reducer
  },setsalaryrange: (state, action) => {
    state.salaryrange = action.payload; // expects {min, max}
  }
  },
});

export const { setJobs, addJob,setlocation,setjobtype,setinput,setsalaryrange } = jobSlice.actions;
export default jobSlice.reducer;
