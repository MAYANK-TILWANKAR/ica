import React from "react";

const home = () => {
  return (
    <>
      <div className="bg-green-800/20 min-h-screen flex items-center py-4 md:py-18">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-6 md:mb-8 leading-tight">
            Master Advanced Data Analytics with MS Excel
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-center text-gray-700 mb-6 md:mb-8">
            Analyze complex data, build interactive dashboards, create detailed
            reports, and save up to 2 hours of time every day – no prior
            knowledge required!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="transform transition duration-300">
              <img
                className="object-cover w-full h-auto rounded-lg"
                src="/images/first.png"
                alt="Data Analytics"
              />
            </div>
            <div className="transform transition duration-300 ">
              <img
                className="object-cover w-full h-auto rounded-lg"
                src="/images/second.png"
                alt="Dashboard"
              />
            </div>
          </div>
          <div className="text-center mt-8 md:mt-10">
            <a
              href="#_"
              class="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden  font-medium tracking-tighter text-white bg-blue-800 group">
              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-700 hover:text-black r group-hover:w-full group-hover:h-full"></span>
              <span class="absolute inset-0 w-full h-full -mt-1  opacity-30 bg-gradient-to-b from-transparent via-transparent to-green-700 "></span>
              <span class="relative text-xl">
                Become an MS Excel Expert Now at 4000/-
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
