"use client";
import Popup from "./Components/PopUp";

import React from "react";
import MakePaymentComponent from "./Components/MakePaymentComponent";
import Faq from "./Components/Faq";
import Vm from "./Components/Vm";
import Why from "./Components/Why";
import One from "./Components/One";
import Bar from "./Components/Bar";
import Enquiry from "./Components/Enquiry";

const LandingPage = () => {
  return (
    <div className="bg-green-800/30 ">
      <Popup />
      <div className="min-h-screen flex flex-col items-center py-4 md:py-18">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-8 leading-tight">
            Master Advanced Data Analytics with MS Excel
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-center text-gray-700 mb-6 md:mb-8">
            Analyze complex data, build interactive dashboards, create detailed
            reports, and save up to 2 hours of time every day – no prior
            knowledge required!
          </p>
          <div>
            <div className="transform transition duration-300 justify-center flex">
              <img
                className="object-cover w-[600px] h-auto rounded-lg "
                src="/images/first.jpg"
                alt="Data Analytics"
              />
            </div>
          </div>
          <div className="text-center mt-8 md:mt-10">
            <a
              href="#_"
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium tracking-tighter text-white bg-blue-800 group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-700 hover:text-black group-hover:w-full group-hover:h-full"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 opacity-30 bg-gradient-to-b from-transparent via-transparent to-green-700"></span>
              <div className="relative text-xl">
                <MakePaymentComponent name="Become MS Excel Expert Now At ₹4000/-" />
              </div>
            </a>
          </div>
        </div>
      </div>

      <One />

      <div class="flex items-center justify-center -my-48 md:-my-0 min-h-screen px-4 md:px-10">
        <div class="px-6 py-10 md:px-10 text-black rounded-2xl lg:max-w-[1300px] ">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            WHAT IF <br />I TOLD YOU...
            <span role="img" aria-label="thinking-face">
              🤔
            </span>
          </h2>
          <p class="text-center mt-4 text-base sm:text-lg">
            You Can Master Advanced MS Excel and Make High-Quality Reports and
            Analyze Data at Your Fingertips
            <br />
            without paying for any expensive tools or software
          </p>
          <h3 class="text-2xl sm:text-3xl lg:text-4xl text-center mt-6 font-semibold">
            Yes, Its Super Easy!!
            <span role="img" aria-label="hand-gesture">
              ✌🏻
            </span>
          </h3>
          <p class="text-center mt-2 text-sm sm:text-base font-medium">
            NO Coding....NO Experience Required!
          </p>

          <div class="flex justify-center mt-6">
            <div class="bg-green-400 text-white text-base sm:text-lg lg:text-xl font-bold py-3 px-6 sm:py-4 sm:px-8 hover:scale-110 transition-all duration-300 rounded-full">
              <MakePaymentComponent name="Become MS Excel Expert Now At ₹4000/-" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="w-full lg:max-w-[1300px] px-8 py-48   ">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Who is this workshop for?
            <span role="img" aria-label="thinking-face">
              🤔
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { title: "HR & Admin", icon: "/images/admin.svg" },
              { title: "Engineers", icon: "/images/enginner.svg" },
              {
                title: "Sales & Marketing Professional",
                icon: "/images/sales.svg",
              },
              {
                title: "Statistical Analysis Professional",
                icon: "/images/stastics.svg",
              },
              { title: "Finance Professional", icon: "/images/finance.svg" },
              {
                title: "Advocate-Lawyers Professional",
                icon: "/images/advocate.svg",
              },
              {
                title: "Investment Banking Analyst",
                icon: "/images/banking.svg",
              },
              { title: "Share Marketing", icon: "/images/share.svg" },
              { title: "Student", icon: "/images/student.svg" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 mr-4"
                />
                <span className="text-lg font-medium text-gray-800">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <div className="bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300">
              <MakePaymentComponent name="Become MS Excel Expert Now At ₹4000/-" />
            </div>
          </div>
        </div>
      </div>
      <div className="-my-32 md:-my-10 mx-8 ">
        <div className="lg:max-w-[1300px] mx-auto flex flex-col items-center text-center md:text-left">
          <div className="md:w-2/3 mt-10 md:mt-0 md:ml-12">
            <h2 className="text-4xl font-bold text-black">Meet your trainer</h2>
            <h3 className="text-3xl font-light text-black mt-3">
              Deepesh Khokale Sir
            </h3>
            <p className="mt-6 text-lg text-black leading-relaxed">
              For over 6 years, I have been running a successful education
              institute where I teach Basic Computer Courses, Advanced Excel,
              and Tally Prime with GST. With a strong focus on quality
              education, I have helped over 500+ students secure placements in
              top companies. In addition to my teaching experience, I have
              worked for the past 2 years as an accountant at AdVNZ 101, where I
              managed complex accounting and taxation tasks. Drawing from my
              professional experience, I am now launching a comprehensive online
              course on Accounting and Taxation with Tally Prime. This course is
              designed to equip students with the practical skills and knowledge
              they need to excel as accountants. We cover everything from the
              basics to advanced concepts, ensuring that every student is
              prepared for a successful career in accounting. Join me in this
              journey and unlock the skills that will set you up for a
              prosperous future in the accounting field!
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 text-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <p className="text-2xl font-semibold text-gray-800">6+</p>
            <p className="text-gray-700 mt-2">Courses</p>
          </div>
          <div className="bg-white p-6 text-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <p className="text-2xl font-semibold text-gray-800">100+</p>
            <p className="text-gray-700 mt-2">Students Placed</p>
          </div>
          <div className="bg-white p-6 text-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <p className="text-2xl font-semibold text-gray-800">6+</p>
            <p className="text-gray-700 mt-2">Years of Experience</p>
          </div>
        </div>
      </div>
      <Vm />
      <section className="py-64 px-10">
        <div className="lg:max-w-[1300px] mx-auto text-center">
          <h2 className="md:text-5xl text-4xl  font-semibold text-gray-900 mb-12">
            Do you Know?
            <span role="img" aria-label="thinking">
              🫨
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="border-2 border-dashed hover:border-blue-300 hover:border-solid border-blue-300 p-2 rounded-lg flex flex-col items-center sm:col-span-1">
              <div className="flex  md:space-x-16 space-x-16 ">
                <h3 className="md:text-[50px] text-[25px]  font-monserrat font-extrabold text-blue-600 md:mb-2 mt-2 ">
                  15K TO 2 LAKH
                </h3>
                <svg
                  className="w-16 mb-8"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  enableBackground="new 0 0 512 512"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve">
                  <path
                    fill="#FFB125"
                    d="M446.908 175.275H45.647c-9.906 0-17.936 8.03-17.936 17.936v48.18h437.134v-48.18c-.001-9.905-8.031-17.936-17.937-17.936z"></path>
                  <path
                    fill="#B6FA4C"
                    d="M301.231 75.667l-36.338 367.865c-.913 9.241-9.144 15.992-18.385 15.079l-184.12-18.188c-9.241-.913-15.992-9.144-15.079-18.385L83.647 54.174c.913-9.241 9.144-15.992 18.385-15.079l184.12 18.188c9.24.912 15.991 9.143 15.079 18.384z"></path>
                  <path
                    fill="#A8E83A"
                    d="M286.152 57.282l-184.12-18.188c-9.241-.913-17.472 5.838-18.385 15.079l-3.26 33.004a16.72 16.72 0 019.248-1.747l184.12 18.188c9.241.913 15.992 9.144 15.079 18.385l-33.078 334.862c4.945-2.512 8.551-7.403 9.136-13.332L301.23 75.668c.914-9.242-5.838-17.473-15.078-18.386z"></path>
                  <path
                    fill="#7D0"
                    d="M103.162 106.336L76.653 374.703c-.379 3.841 1.429 7.585 4.705 9.627a49.303 49.303 0 0119.858 23.984c1.381 3.563 4.679 6.02 8.481 6.396l95.447 9.428c3.802.376 7.518-1.389 9.568-4.613a49.306 49.306 0 0124.167-19.635c3.612-1.362 6.118-4.679 6.497-8.52l26.509-268.367c.379-3.841-1.429-7.585-4.705-9.627a49.303 49.303 0 01-19.858-23.984c-1.381-3.562-4.679-6.02-8.481-6.396l-95.447-9.428c-3.802-.376-7.518 1.389-9.568 4.613a49.306 49.306 0 01-24.167 19.635c-3.611 1.362-6.117 4.679-6.497 8.52z"></path>
                  <path
                    fill="#73CC00"
                    d="M267.182 113.376a49.303 49.303 0 01-19.858-23.984c-1.381-3.563-4.679-6.02-8.481-6.396l-95.447-9.428c-3.802-.376-7.518 1.389-9.569 4.613a49.306 49.306 0 01-24.167 19.635c-3.612 1.362-6.118 4.679-6.497 8.52l-1.009 10.216 123.673 11.835c3.802.376 7.101 2.833 8.481 6.396a49.308 49.308 0 0019.858 23.984c3.276 2.042 5.084 5.786 4.705 9.627l-22.992 232.754a49.708 49.708 0 013.001-1.257c3.612-1.362 6.118-4.679 6.497-8.52l26.509-268.367c.38-3.842-1.429-7.586-4.704-9.628z"></path>
                  <path
                    fill="#B6FA4C"
                    d="M457.345 130.474L249.176 435.942c-5.229 7.673-15.689 9.655-23.362 4.426L72.924 336.177c-7.673-5.229-9.655-15.689-4.426-23.362L276.668 7.347c5.229-7.673 15.689-9.655 23.362-4.426l152.89 104.191c7.673 5.229 9.654 15.688 4.425 23.362z"></path>
                  <path
                    fill="#A8E83A"
                    d="M452.92 107.112L300.03 2.921c-7.673-5.229-18.133-3.248-23.362 4.426l-17.806 26.129a16.809 16.809 0 014.455 2.154l152.89 104.191c7.673 5.229 9.655 15.689 4.426 23.362L230.27 442.523c6.88 2.152 14.637-.314 18.907-6.58l208.169-305.469c5.228-7.674 3.247-18.133-4.426-23.362z"></path>
                  <path
                    fill="#7D0"
                    d="M268.802 62.482L116.937 285.329c-2.174 3.19-2.38 7.342-.484 10.704a49.297 49.297 0 015.937 30.567c-.495 3.788 1.222 7.526 4.379 9.677l79.258 54.012c3.157 2.152 7.264 2.383 10.609.536a49.31 49.31 0 0130.62-5.654c3.823.535 7.612-1.175 9.786-4.365L408.907 157.96c2.174-3.19 2.38-7.342.483-10.704a49.295 49.295 0 01-5.937-30.566c.495-3.788-1.222-7.526-4.379-9.677L319.816 53c-3.157-2.152-7.264-2.383-10.609-.536a49.31 49.31 0 01-30.62 5.654c-3.822-.537-7.612 1.174-9.785 4.364z"></path>
                  <path
                    fill="#73CC00"
                    d="M409.39 147.256a49.302 49.302 0 01-5.937-30.566c.495-3.788-1.222-7.526-4.379-9.678L319.816 53c-3.157-2.151-7.264-2.383-10.609-.536a49.302 49.302 0 01-30.62 5.653c-3.823-.535-7.612 1.175-9.786 4.365l-6.329 9.287 99.054 66.77c3.157 2.152 4.875 5.889 4.379 9.677a49.309 49.309 0 005.937 30.566c1.896 3.362 1.69 7.515-.484 10.704L238.29 384.755a49.081 49.081 0 018.967.417c3.823.536 7.612-1.175 9.786-4.365L408.907 157.96c2.174-3.19 2.38-7.342.483-10.704z"></path>
                  <circle
                    cx="286.18"
                    cy="201"
                    r="54.39"
                    fill="#B6FA4C"></circle>
                  <path
                    fill="#FFB125"
                    d="M453.122 512H34.109c-14.286 0-25.868-11.581-25.868-25.868V230.139c0-14.286 11.581-25.868 25.868-25.868h419.013c14.286 0 25.868 11.581 25.868 25.868v255.993c0 14.287-11.581 25.868-25.868 25.868z"></path>
                  <path
                    fill="#FF901D"
                    d="M453.122 204.271h-47.06c14.286 0 25.868 11.582 25.868 25.868v255.993c0 14.286-11.582 25.868-25.868 25.868h47.06c14.286 0 25.868-11.581 25.868-25.868V230.139c0-14.286-11.582-25.868-25.868-25.868z"></path>
                  <path
                    fill="#FF6D3A"
                    d="M494.387 308.688h-94.308c-27.309 0-49.447 22.138-49.447 49.447s22.138 49.447 49.447 49.447h94.308a9.372 9.372 0 009.372-9.372v-80.15a9.373 9.373 0 00-9.372-9.372z"></path>
                  <path
                    fill="#ED5729"
                    d="M494.387 308.688H447.16a9.372 9.372 0 019.372 9.372v67.511c0 5.52-4.475 9.995-9.995 9.995h-46.459c-25.274 0-46.105-18.966-49.071-43.44a49.848 49.848 0 00-.376 6.008c0 27.309 22.138 49.447 49.447 49.447H494.386a9.372 9.372 0 009.372-9.372V318.06c.001-5.175-4.195-9.372-9.371-9.372z"></path>
                  <path
                    fill="#FF6D3A"
                    d="M453.122 204.271H34.109c-14.286 0-25.868 11.582-25.868 25.868v28.348H478.99v-28.348c0-14.286-11.581-25.868-25.868-25.868z"></path>
                  <path
                    fill="#ED5729"
                    d="M474.572 215.676a26.025 26.025 0 00-3.159-3.828l-.042-.04a25.955 25.955 0 00-4.837-3.792 26.228 26.228 0 00-1.627-.902 25.757 25.757 0 00-11.786-2.844h-47.057c14.285.001 25.865 11.582 25.865 25.868v28.347h47.06v-28.347a25.75 25.75 0 00-4.417-14.462z"></path>
                  <path
                    fill="#FF6D3A"
                    d="M34.109 512h419.013c14.286 0 25.868-11.582 25.868-25.868v-28.348H8.241v28.348C8.241 500.418 19.822 512 34.109 512z"></path>
                  <path
                    fill="#ED5729"
                    d="M431.93 457.784v28.392c-.004 2.389-2.004 4.296-4.393 4.296H34.109c-14.286 0-25.868-11.582-25.868-25.868v21.527C8.241 500.419 19.822 512 34.109 512h419.014c.511 0 1.017-.019 1.52-.048.157-.009.313-.024.469-.036a25.758 25.758 0 002.59-.328c.151-.027.303-.051.453-.081.481-.095.959-.199 1.43-.321h.002c.207-.053.409-.116.614-.174a25.85 25.85 0 002.991-1.044 25.695 25.695 0 002.261-1.089l.001-.001c.732-.398 1.443-.83 2.131-1.294l.001-.001.001-.001c.586-.396 1.15-.819 1.699-1.26l.078-.062a26.145 26.145 0 003.351-3.248v-.001a26.021 26.021 0 002.349-3.183l.058-.09c.258-.417.508-.839.743-1.271l.002-.004v-.001a25.71 25.71 0 001.61-3.606c.051-.142.097-.287.146-.43a26.396 26.396 0 00.448-1.461c.089-.326.171-.655.247-.987.035-.151.073-.302.105-.454.101-.477.193-.958.267-1.444l.001-.008v-.004c.087-.568.148-1.145.197-1.725l.034-.441c.04-.585.067-1.174.067-1.77v-28.347l-47.059-.001z"></path>
                  <circle
                    cx="401.84"
                    cy="358.14"
                    r="22.959"
                    fill="#F2F2F2"></circle>
                </svg>
              </div>
              <p className="text-black text-lg  text-left px-2 mb-4">
                An average salary for a person who is an expert in MS Excel is
                Rs. 15,000/- to 20,00,000/- INR.
              </p>
            </div>

            <div className="border-2 border-dashed hover:border-blue-300 hover:border-solid border-blue-300 p-2 rounded-lg flex flex-col items-center ">
              <div className="flex md:space-x-60 mt-4 md:mt-0">
                <h3 className="md:text-[50px] text-[30px] font-monserrat font-extrabold mr-28  text-blue-600 mb-2">
                  90%
                </h3>
                <svg
                  className="w-16 mb-8 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <circle cx="256" cy="256" r="256" fill="#fb8408"></circle>
                  <path
                    fill="#c0405c"
                    d="M163.486 249.223h144.793L242.403 108.19a52.426 52.426 0 00-47.499-30.239H116.86c-15.548 0-25.83 16.152-19.25 30.239z"></path>
                  <g fill="#e9465e">
                    <path d="M196.86 249.223h-33.375L97.61 108.19c-6.58-14.087 3.703-30.239 19.25-30.239zM308.279 249.223h-33.375l-80-171.272a52.424 52.424 0 0147.499 30.239z"></path>
                  </g>
                  <g>
                    <path
                      fill="#e9465e"
                      d="M348.517 249.223H203.724L269.6 108.19a52.426 52.426 0 0147.499-30.239h78.044c15.548 0 25.83 16.152 19.25 30.239z"></path>
                    <g fill="#ee6781">
                      <path d="M315.143 249.223h33.375l65.876-141.033c6.58-14.087-3.703-30.239-19.25-30.239zM203.724 249.223h33.375l80-171.272A52.424 52.424 0 00269.6 108.19z"></path>
                    </g>
                  </g>
                  <g>
                    <circle
                      cx="256"
                      cy="332.121"
                      r="124.228"
                      fill="#f9c744"></circle>
                    <path
                      fill="#fad98f"
                      d="M256 456.349c68.609 0 124.228-55.619 124.228-124.228S324.609 207.894 256 207.894z"></path>
                    <path
                      fill="#ea792e"
                      d="M256 437.823c-58.284 0-105.702-47.417-105.702-105.702S197.716 226.419 256 226.419s105.702 47.418 105.702 105.702S314.284 437.823 256 437.823zm0-204.404c-54.424 0-98.702 44.278-98.702 98.702s44.278 98.702 98.702 98.702 98.702-44.277 98.702-98.702-44.278-98.702-98.702-98.702z"></path>
                    <path
                      fill="#f39e22"
                      d="M256 437.823v-7c54.424 0 98.702-44.277 98.702-98.702S310.424 233.419 256 233.419v-7c58.284 0 105.702 47.418 105.702 105.702S314.284 437.823 256 437.823z"></path>
                    <g>
                      <circle
                        cx="256"
                        cy="332.121"
                        r="82.898"
                        fill="#ea792e"></circle>
                      <path
                        fill="#f39e22"
                        d="M256 415.019c45.783 0 82.898-37.115 82.898-82.898S301.783 249.223 256 249.223z"></path>
                    </g>
                    <g>
                      <path
                        fill="#f4e6f4"
                        d="M288.17 372.08h-17.85v-92.14c0-3.4-.96-6.06-2.89-7.99-4.517-4.519-12.113-3.146-17.34.17l-26.35 16.32c-2.95 1.82-4.42 4.37-4.42 7.65-.12 4.571 3.632 10.01 8.5 9.86 1.25 0 2.66-.45 4.25-1.36l16.32-10.03v77.52h-17.68c-6.91 0-10.37 2.89-10.37 8.67 0 6.01 3.46 9.01 10.37 9.01h57.46c6.8 0 10.2-3 10.2-9.01 0-5.78-3.4-8.67-10.2-8.67z"></path>
                      <path
                        fill="#fff"
                        d="M298.37 380.75c0 6.01-3.4 9.01-10.2 9.01H256v-120.2c7.471-2.085 14.59 2.121 14.32 10.38v92.14h17.85c6.8 0 10.2 2.89 10.2 8.67z"></path>
                    </g>
                  </g>
                  <g>
                    <path
                      fill="#fff"
                      d="M407.484 279.945h-10.57c-7.352 0-13.312-5.96-13.312-13.312v-10.57a5.78 5.78 0 10-11.562 0v10.57c0 7.352-5.96 13.312-13.312 13.312h-10.57a5.78 5.78 0 100 11.562h10.57c7.352 0 13.312 5.96 13.312 13.312v10.57a5.78 5.78 0 1011.562 0v-10.57c0-7.352 5.96-13.312 13.312-13.312h10.57a5.78 5.78 0 100-11.562z"></path>
                    <g fill="#ffccd7">
                      <path d="M442.58 335.489h-8.125c-5.652 0-10.233-4.582-10.233-10.233v-8.125a4.444 4.444 0 00-8.888 0v8.125c0 5.652-4.582 10.233-10.233 10.233h-8.125a4.444 4.444 0 000 8.888h8.125c5.652 0 10.233 4.582 10.233 10.233v8.125a4.444 4.444 0 008.888 0v-8.125c0-5.652 4.582-10.233 10.233-10.233h8.125a4.444 4.444 0 000-8.888zM108.033 220.638h-10.57c-7.352 0-13.312-5.96-13.312-13.312v-10.57a5.78 5.78 0 10-11.562 0v10.57c0 7.352-5.96 13.312-13.312 13.312h-10.57a5.78 5.78 0 100 11.562h10.57c7.352 0 13.312 5.96 13.312 13.312v10.57a5.78 5.78 0 1011.562 0v-10.57c0-7.352 5.96-13.312 13.312-13.312h10.57a5.78 5.78 0 100-11.562z"></path>
                    </g>
                  </g>
                </svg>
              </div>

              <p className="text-black text-lg  text-left px-2 mb-4">
                90% of small, mid-cap, and big corporate companies use MS Excel
                for data handling and reporting.
              </p>
            </div>

            <div className="border-2 py-8 border-dashed hover:border-blue-300 hover:border-solid border-blue-300 rounded-lg flex flex-col items-center sm:col-span-2">
              <div className="flex md:space-x-[1000px] space-x-[120px] ">
                <h3 className="md:text-[50px] text-[25px] font-extrabold text-blue-600 mb-2">
                  JOBS
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 mb-8"
                  viewBox="0 0 512 512">
                  <path
                    fill="#86dcff"
                    d="M408.114 502.36H103.886l-9.64-9.64v-66.861c0-36.624 15.783-69.561 40.918-92.382h241.672c25.135 22.821 40.918 55.758 40.918 92.382v66.861z"></path>
                  <path
                    fill="#56caed"
                    d="M99.602 512h51.018l7.5-9 7.5 9h180.76l7.5-9 7.5 9h51.018a5.356 5.356 0 005.356-5.356V492.72H94.246v13.925A5.356 5.356 0 0099.602 512z"></path>
                  <path
                    fill="#e4eef9"
                    d="M256 406.558l80.641-88.733-.533-9.057c-13.432-4.948-27.948-7.653-43.097-7.653h-74.022c-15.008 0-29.394 2.655-42.721 7.515l.42 10.658z"></path>
                  <path
                    fill="#d5e0f2"
                    d="M175.894 308.773a124.383 124.383 0 00-12.582 5.436l3.316 14.257L256 425.838l90.281-98.373 2.407-13.256a124.157 124.157 0 00-12.582-5.436l-76.143 83.783a5.356 5.356 0 01-7.927 0z"></path>
                  <path
                    fill="#ff5876"
                    d="M256 406.558l22.688-24.965 1.987-11.826-5.909-32.388L256 327.737l-18.766 9.64-5.909 32.388 1.987 11.826z"></path>
                  <path
                    fill="#e6485d"
                    d="M274.766 337.378h-37.532l-8.186-36.262h53.904zM283.605 385.822l-2.93-16.056-20.712 22.79a5.356 5.356 0 01-7.927 0l-20.712-22.79-2.93 16.056L256 435.478z"></path>
                  <path
                    fill="#ffcf4d"
                    d="M163.312 314.21a124.944 124.944 0 00-18.093 11.051l1.23 10.994 97.66 107.46c6.375 7.015 17.405 7.015 23.78 0l98.718-108.624.172-9.83a124.979 124.979 0 00-18.093-11.051L259.7 412.126a5 5 0 01-7.4 0z"></path>
                  <path
                    fill="#ffb629"
                    d="M267.89 434.074c-6.375 7.015-17.405 7.015-23.78 0l-98.889-108.811a124.854 124.854 0 00-10.057 8.215L244.11 453.354c6.375 7.015 17.405 7.015 23.78 0l108.945-119.877a125.07 125.07 0 00-10.057-8.215z"></path>
                  <path
                    fill="#ffc4ad"
                    d="M164.396 194.884l-9.64-25.949a34.125 34.125 0 00-3.491-.179c-15.149 0-27.967 9.978-32.241 23.72-.986 3.171-.047 34.158 32.241 34.158l3.749-9.853z"></path>
                  <path
                    fill="#ffb69f"
                    d="M151.265 216.993c-15.294 0-28.205-10.173-32.354-24.119a33.752 33.752 0 00-1.405 9.64c0 18.644 15.114 33.759 33.759 33.759 2.359 0 4.66-.244 6.883-.704l7.699-8.936-10.825-9.854a33.784 33.784 0 01-3.757.214z"></path>
                  <path
                    fill="#ffc4ad"
                    d="M347.604 194.884l9.64-25.949a34.125 34.125 0 013.491-.179c15.149 0 27.967 9.978 32.241 23.72.986 3.171.047 34.158-32.241 34.158l-3.749-9.853z"></path>
                  <path
                    fill="#ffb69f"
                    d="M360.735 216.993c15.294 0 28.205-10.173 32.354-24.119a33.752 33.752 0 011.405 9.64c0 18.644-15.114 33.759-33.759 33.759-2.359 0-4.66-.244-6.883-.704l-7.699-8.936 10.825-9.854c1.234.138 2.487.214 3.757.214z"></path>
                  <path
                    fill="#ffe0cc"
                    d="M154.756 64.99v134.882c0 55.916 45.329 101.244 101.244 101.244s101.244-45.328 101.244-101.244V64.99z"></path>
                  <path
                    fill="#ffceb3"
                    d="M256 291.475c-55.915 0-101.244-45.328-101.244-101.244v19.28c0 55.916 45.329 101.244 101.244 101.244s101.244-45.328 101.244-101.244v-19.28c0 55.916-45.329 101.244-101.244 101.244z"></path>
                  <path
                    fill="#2d4456"
                    d="M352.579 136.646c-18.148-15.475-34.013-32.601-34.013-32.601-28.908 23.236-50.633 25.276-50.633 25.276l-21.247-20.733c-36.128 27.215-77.846 32.589-89.219 32.306a19.03 19.03 0 01-5.098-.832c-26.502-8.112-36.515-24.183-36.515-24.183s-3.097-7.039 1.792-7.979c25.591-4.923 34.587-22.459 34.587-22.459-28.484.861-37.686-20.256-40.589-31.865-.895-3.578 1.967-6.949 5.644-6.66 53.197 4.187 66.108-28.597 116.131-43.371 52.129-15.396 89.037 24.366 89.037 24.366s52.831-5.101 57.364 48.757c4.333 51.477-27.241 59.978-27.241 59.978z"></path>
                  <g fill="#253847">
                    <path d="M353.508 127.32c-12.771-9.033-24.491-25.749-30.574-35.321-2.004-3.155-6.502-3.281-8.79-.326-21.888 28.268-67.458 16.915-67.458 16.915s11.191 13.703 11.167 29.799c-.005 3.462 3.164 6.039 6.539 5.27 12.862-2.932 39.785-12.168 54.174-39.611 0 0 16.353 29.4 34.931 42.548a5.349 5.349 0 006.994-.706c6.956-7.426 22.39-28.608 19.407-68.059-2.223 27.221-13.667 42.642-19.394 48.763a5.347 5.347 0 01-6.996.728z"></path>
                    <path d="M247.818 102.237c.727-5.033-5.305-8.173-8.962-4.64-32.495 31.394-70.875 33.919-81.389 33.657a19.03 19.03 0 01-5.098-.832c-12.867-3.938-25.313-13.614-34.724-22.53a69.498 69.498 0 01-5.863.867c-4.361.457-6.38 5.663-3.433 8.91 9.264 10.207 26.25 26.594 44.02 32.033 1.658.507 3.369.789 5.098.832 11.373.283 55.353-2.695 89.219-41.946.497-2.404.866-4.509 1.132-6.351z"></path>
                  </g>
                  <path
                    fill="#4ea1f4"
                    d="M165.62 437.98v54.74l-7.5 9.64-7.5-9.64v-54.74c0-4.15 3.36-7.5 7.5-7.5 4.15 0 7.5 3.35 7.5 7.5z"></path>
                  <path fill="#3292e0" d="M150.62 492.72h15V512h-15z"></path>
                  <path
                    fill="#4ea1f4"
                    d="M361.38 437.98v54.74l-7.5 9.64-7.5-9.64v-54.74c0-4.15 3.36-7.5 7.5-7.5 4.15 0 7.5 3.35 7.5 7.5z"></path>
                  <path fill="#3292e0" d="M346.38 492.72h15V512h-15z"></path>
                  <g>
                    <path
                      fill="#ff5876"
                      d="M256 261.119c28.558 0 37.192-20.07 37.569-20.981l.003-.006c2.275-5.112-1.769-11.281-7.404-11.155a8.034 8.034 0 00-7.422 4.96c-.406.86-5.621 11.116-22.745 11.116-17.12 0-22.336-10.25-22.745-11.115a8.034 8.034 0 00-7.422-4.96c-5.635-.127-9.679 6.044-7.404 11.155l.003.006c.375.91 9.009 20.98 37.567 20.98z"></path>
                    <g fill="#2d4456">
                      <path d="M206.941 170.362a8.033 8.033 0 00-8.033 8.033v22.698a8.033 8.033 0 0016.066 0v-22.698a8.033 8.033 0 00-8.033-8.033zM305.059 209.127a8.034 8.034 0 008.034-8.033v-22.698c0-4.437-3.597-8.033-8.034-8.033s-8.033 3.597-8.033 8.033v22.698a8.033 8.033 0 008.033 8.033z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <p className="text-black text-xl px-4  text-left  mb-4">
                In India alone, an average of more than 2000 jobs is being
                created every month for MS Excel, you can check on google,
                naukri.com, indeed etc
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="py-10  sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="lg:max-w-[1300px] mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-4xl">
              Still thinking whether this course will benefit you or not?
            </h2>
          </div>

          <div class="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            <div class="overflow-hidden bg-white rounded-md shadow">
              <div class="px-8 py-12">
                <div class="relative w-24 h-24 mx-auto">
                  <img
                    class="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="/images/testi1.png"
                    alt=""
                  />
                  <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg
                      class="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote class="mt-7">
                  <p class="text-lg text-black">
                    &quot;The Advanced Excel course was highly valuable. It
                    covered pivot tables, macros, and complex formulas, boosting
                    my confidence in using Excel for advanced tasks.&quot;
                  </p>
                </blockquote>
                <p class="text-base font-semibold tex-tblack mt-9">
                  Anush Jain
                </p>
                <p class="mt-1 text-base text-gray-600">Student</p>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md shadow">
              <div class="px-8 py-12">
                <div class="relative w-24 h-24 mx-auto">
                  <img
                    class="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="/images/testi2.png"
                    alt=""
                  />
                  <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg
                      class="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote class="mt-7">
                  <p class="text-lg text-black">
                    &quot;This course was excellent for mastering advanced Excel
                    features like data visualization and complex
                    problem-solving. It was concise yet very effective.&quot;
                  </p>
                </blockquote>
                <p class="text-base font-semibold tex-tblack mt-9">
                  Sujal Pandiya
                </p>
                <p class="mt-1 text-base text-gray-600">Student</p>
              </div>
            </div>

            <div class="overflow-hidden bg-white rounded-md shadow">
              <div class="px-8 py-12">
                <div class="relative w-24 h-24 mx-auto">
                  <img
                    class="relative object-cover w-24 h-24 mx-auto rounded-full"
                    src="/images/testi3.png"
                    alt=""
                  />
                  <div class="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg
                      class="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor">
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote class="mt-7">
                  <p class="text-lg text-black">
                    &quot;The Advanced Excel course was extremely beneficial. It
                    taught me advanced functions, data analysis greatly
                    enhancing my Excel skills and efficiency.&quot;
                  </p>
                </blockquote>
                <p class="text-base font-semibold tex-tblack mt-9">
                  Ayushi Jain
                </p>
                <p class="mt-1 text-base text-gray-600">Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="why-section">
        <Why />
      </div>
      <div id="enquiry">
        <Enquiry />
      </div>

      <Faq />
      <Bar />
    </div>
  );
};

export default LandingPage;
