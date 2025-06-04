import React from 'react';
import { Phone, Instagram, Mail, Bold, Italic, Underline, Link, Type } from 'lucide-react';
import Logo from "./assets/logo.jpg"

export default function SWETRecruitmentForm() {
  return (
    <div className=" max-w-2xl mx-auto bg-white min-h-screen px-2 sm:px-4">
      {/* Header */}
      <div className="bg-slate-700 p-2 sm:p-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-0">
        <div className="mr-0 sm:mr-4 mb-3 sm:mb-0 flex-shrink-0">
          <img 
            src= {Logo}
            alt="Logo" 
            className="w-40 h-40 object-cover shadow-lg rounded-full"
          />
          <div className="text-xs text-center mt-1 font-semibold hidden sm:block text-white">EDUCATIONAL TRUST</div>
        </div>
        <div className="bg-red-500 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg flex-1 text-center sm:text-left">
          <h1 className="text-lg sm:text-xl font-bold leading-tight">Shwetansh Welfare And Educational Trust</h1>
          <p className="text-sm italic">'Empowering Youth, Transforming Futures'</p>
        </div>
      </div>

      {/* Section indicator */}
      <div className="bg-red-300 px-3 py-1 text-sm">
        Section 1 of 13
      </div>

      {/* Form content */}
      <div className="border border-gray-300 mx-2 sm:m-4 rounded-lg">
        {/* Form header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-normal text-gray-800">Recruitment of SWET</h2>
          <div className="flex items-center space-x-2 text-gray-500">
            <button className="hover:bg-gray-100 p-1 rounded">×</button>
            <button className="hover:bg-gray-100 p-1 rounded">⋮</button>
          </div>
        </div>

        {/* Form body */}
        <div className="p-3 sm:p-4 space-y-4">
          <div>
            <p className="font-semibold mb-3">Join Shwetansh Welfare And Educational Trust.</p>
          </div>

          <div className='text-left'>
            <p className="font-semibold underline mb-3">Why join us?</p>
            <ul className="space-y-1 ml-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Experience letter</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Authorized Certificates</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Real projects & Events</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>National level exposure</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Boost your resume</span>
              </li>
            </ul>
          </div>

          <div className="pt-4">
            <p className="font-semibold underline mb-3">Connect with us:</p>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex items-center mb-1 sm:mb-0">
                  <span className="font-semibold">Whatsapp</span>
                  <Phone size={16} className="mx-2 text-green-600" />
                </div>
                <a 
                  href="tel:+918989973328" 
                  className="text-blue-600 hover:underline break-all"
                >
                  - +91 8989973328
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex items-center mb-1 sm:mb-0">
                  <span className="font-semibold">Instagram</span>
                  <Instagram size={16} className="mx-2 text-pink-600" />
                </div>
                <a 
                  href="https://instagram.com/shwetansh_welfare_educational" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline break-all"
                >
                  - @shwetansh_welfare_educational
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <div className="flex items-center mb-1 sm:mb-0">
                  <span className="font-semibold">Email</span>
                  <span className="mx-2">-</span>
                </div>
                <a 
                  href="mailto:shwetanshwelfareeducational@gmail.com"
                  className="text-blue-600 hover:underline break-all"
                >
                  shwetanshwelfareeducational@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-3 sm:px-4 pb-4 pt-8">
          <p className="text-xs text-gray-500">
            This form is automatically collecting emails from all respondents. 
            <span className="text-blue-600 cursor-pointer hover:underline ml-1">Change settings</span>
          </p>
        </div>
      </div>
    </div>
  );
}