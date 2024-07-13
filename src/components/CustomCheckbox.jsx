import React, { useState } from 'react';

const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox" className="flex items-center cursor-pointer">
        <span
          className={`w-4 h-4 rounded border-[1.5px] border-black flex items-center ${
            isChecked ? ' bg-[#7D8288]' : 'bg-white'
          }`}
        >
          {isChecked && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          )}
        </span>
        <span className="ml-2 text-[#A6AAAE] text-[.9rem]">
          My shipping and billing information are the same
        </span>
      </label>
    </div>
  );
};

export default CustomCheckbox;
