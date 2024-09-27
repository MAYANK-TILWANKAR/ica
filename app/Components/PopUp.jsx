// Components/Popup.js
import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  // Popup timer
  useEffect(() => {
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
      }, 2000);
      return () => clearTimeout(timer); // Clean up the timer on component unmount
    }
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
    // Reset the hasShown state after a delay to allow the popup to show again
    setTimeout(() => {
      setHasShown(false);
    }, 10000); // 1 minute delay before allowing the popup to show again
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-gradient-to-br from-[#3e784f] to-[#32b049] p-8 rounded-xl shadow-2xl text-center max-w-md w-full mx-4 animate-fadeIn relative">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3  text-[#ed1515] transition-colors duration-300"
          aria-label="Close">
          <IoMdClose size={28} />
        </button>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white leading-tight">
          Only 5 seats left!
        </h1>
        <a href="/bookDemo">
          <button className="bg-[#EDA915] text-[#075593] font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-[#075593] transition-colors duration-300 transform hover:scale-105">
            Book demo now
          </button>
        </a>
      </div>
    </div>
  );
};

export default Popup;
