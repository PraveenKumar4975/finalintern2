import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Grid() {
    const allJobs = useSelector((state) => state.jobs.jobs); // All job cards
    const location = useSelector((state) => state.jobs.location); // Selected location
    const jobtype = useSelector((state) => state.jobs.jobtype);
    const input = useSelector((state) => state.jobs.input);
    const salaryrange = useSelector((state) => state.jobs.salaryrange);




    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('https://intern-b0mx.onrender.com/api/jobs')
            .then(res => setJobs(res.data))
            .catch(err => console.error("Error fetching jobs:", err));
    }, []);

    // This updates global Redux store jobs (optional if you want to sync)
    // useDispatch + dispatch(setJobs(res.data)) if needed

    // Filter jobs based on location from jobSlice
    const filteredJobs = jobs.filter((job) => {
        const matchesLocation =
            !location || location === 'Preferred Location' || job.location === location;

        const matchesJobType =
            !jobtype || jobtype === 'Job Type' || job.type === jobtype;

        const matchesInput =
            !input || job.title.toLowerCase().includes(input.toLowerCase());

        const matchesSalary =
            job.salaryRange >= salaryrange.min && job.salaryRange <= salaryrange.max;

        return matchesLocation && matchesJobType && matchesInput && matchesSalary;
    });





    return (
        <div className="w-[1312px] mx-auto bg-[#FBFBFF] mt-[50px]  grid grid-cols-4 gap-4">
            {filteredJobs.map((job, i) => (
                <div key={i} className="w-[316px] h-[360px] bg-white border border-[#E0E0E0] rounded-xl shadow-sm p-4 flex flex-col justify-between shadow-[0px_8px_20px_#C6BFBF40]">
                    {/* Job card layout */}
                    <div className="flex justify-between items-start">
                        <div className="w-[83.46px] h-[82px] bg-[#F1F1F1] rounded-xl shadow-[0_4px_14px_#D3D3D326] flex items-center justify-center">
                            <img src="/tesla_i.png" alt="Company Logo" className="w-[60px] h-[60px] rounded-full" />
                        </div>
                        <div className="flex items-center justify-center w-[75px] h-[33px] px-[10px] py-[7px] gap-[10px] rounded-[10px] bg-[#B0D9FF]">
                            <span className="text-sm text-[#303030] font-medium">24h Ago</span>
                        </div>
                    </div>
                    <h3 className="mt-2 w-[190px] h-[27px] text-[#303030] text-lg font-semibold">{job.title}</h3>
                    <div className="flex items-center gap-[16px] mt-2 h-[22px] text-sm text-[#686868]">
                        <img src="/card_profile.svg" className="w-4 h-4" />
                        <span>1-3yr Exp</span>
                        <img src="/location_incard.svg" className="w-4 h-4" />
                        <span>{job.location}</span>
                        <img src="/salary_incard.svg" className="w-4 h-4" />
                        <span>{job.salaryRange} LPA</span>
                    </div>
                    <ul className="mt-2 w-[300px] h-[36px] text-sm text-gray-600 pr-4 text-justify leading-tight list-disc list-inside overflow-hidden">
                        {job.description.split('.').filter(item => item.trim() !== '').map((point, index) => (
                            <li key={index}>{point.trim()}.</li>
                        ))}
                    </ul>
                    <button className="w-[284px] h-[46px] mt-4 px-[10px] py-[12px] bg-[#00AAFF] text-white text-sm font-medium rounded-[10px] border border-[#00AAFF] hover:shadow-[0px_4px_6px_rgba(0,0,0,0.1)] transition-all duration-300">
                        Apply Now
                    </button>
                </div>
            ))}
        </div>
    );
}
