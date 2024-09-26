import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import MakePaymentComponent from "./MakePaymentComponent";

const One = () => {
  const typedRef = useRef(null);
  let typedInstance;

  useEffect(() => {
    typedInstance = new Typed(typedRef.current, {
      strings: ["CAREER CHANGING RIDE", "EXCITING JOURNEY AHEAD"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: false,
      onComplete: (instance) => {
        if (instance && instance.cursor) {
          instance.cursor.remove();
        }
      },
    });

    return () => {
      typedInstance?.destroy();
    };
  }, []);

  return (
    <div className="bg-[#C0D7CC] text-center py-32 md:py-52 px-4 md:px-0">
      <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-gray-800">
        WE HOPE NOW YOU ARE READY TO GO ON THIS
      </h1>
      <h2
        className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 mt-2"
        ref={typedRef}></h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mt-4">
        SEE YOU INSIDE THE BATCH <span className="text-lg sm:text-xl">😊</span>
      </p>

      <div className="mt-6 inline-block bg-green-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 text-sm sm:text-lg rounded-full">
        <MakePaymentComponent name="Become MS Excel Expert Now At ₹4000/-" />
      </div>
    </div>
  );
};

export default One;
