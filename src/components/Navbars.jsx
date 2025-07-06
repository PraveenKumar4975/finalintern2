import React from 'react'
import { useState } from 'react';
import { CreateJobModal } from './CreateJobModal';

export const Navbars = (isOpen,onClose) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex justify-center w-full px-4">
        <nav className="w-[890px] h-[80px] shadow-[0px_0px_15px_8px_#7F7F7F26] bg-white border border-[#FCFCFC] rounded-[122px] px-6 py-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-8 w-[838px] h-[48px]">
            <img src="/logo.png" alt="Logo" className="h-15" />
            <div className="w-[613px] h-[48px]">
                            <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                                <li className="w-[146px] h-[48px] p-[5px] flex items-center justify-center text-[#303030] font-semibold text-base rounded-[12px] transition-all duration-300 ease-in-out hover:bg-[#7F7F7F26] hover:scale-105 hover:shadow-[-4px_4px_6px_rgba(0,0,0,0.15)] cursor-pointer">
                                    Home
                                </li>

                                <li className="w-[146px] h-[48px] p-[5px] flex items-center justify-center text-[#303030] font-semibold text-base rounded-[12px] transition-all duration-300 ease-in-out hover:bg-[#7F7F7F26] hover:scale-105 hover:shadow-[-4px_4px_6px_rgba(0,0,0,0.15)] cursor-pointer">
                                    Find Jobs
                                </li>

                                <li className="w-[148px] h-[48px] p-[5px] flex items-center justify-center text-[#303030] font-semibold text-base rounded-[12px] transition-all duration-300 ease-in-out hover:bg-[#7F7F7F26] hover:scale-105 hover:shadow-[-4px_4px_6px_rgba(0,0,0,0.15)] cursor-pointer">
                                    Find Talents
                                </li>

                                <li className="w-[146px] h-[48px] p-[5px] flex items-center justify-center text-[#303030] font-semibold text-base rounded-[12px] transition-all duration-300 ease-in-out hover:bg-[#7F7F7F26] hover:scale-105 hover:shadow-[-4px_4px_6px_rgba(0,0,0,0.15)] cursor-pointer">
                                    About Us
                                </li>

                                <li className="w-[146px] h-[48px] p-[5px] flex items-center justify-center text-[#303030] font-semibold text-base rounded-[12px] transition-all duration-300 ease-in-out hover:bg-[#7F7F7F26] hover:scale-105 hover:shadow-[-4px_4px_6px_rgba(0,0,0,0.15)] cursor-pointer">
                                    Testimonials
                                </li>
                            </ul>


                        </div>
            <div className="w-[133px] h-[48px] flex justify-center items-center">
              <button
                onClick={() => setShowModal(true)}
                className="w-[123px] h-[38px] relative overflow-hidden rounded-full text-white font-medium bg-gradient-to-b from-[#A128FF] to-[#6100AD] shadow-md hover:from-purple-700 hover:to-violet-600 transition-all duration-300 group hover:shadow-[-4px_4px_6px_rgba(0,0,0,0.15)]"
              >
                <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform">
                  Create Jobs
                </span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      <CreateJobModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
