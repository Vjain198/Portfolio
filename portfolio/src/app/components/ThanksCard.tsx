import React from "react";

const ThanksCard = ({ setOpen }: { setOpen?: (val: boolean) => void }) => {
  return (
    <div className="mx-auto rounded-md bg-white">
      <div className="relative">
        <button
          type="button"
          className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-md border-2 border-gray-300 bg-white text-base font-light text-black transition-colors hover:bg-red-600 hover:border-red-600 hover:text-dark"
          onClick={() => setOpen && setOpen(false)}
        >
          ×
        </button>
        <div className="p-5">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 transition-transform animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <g strokeWidth={0} id="SVGRepo_bgCarrier" />
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                id="SVGRepo_tracerCarrier"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="#000000"
                  d="M20 7L9.00004 18L3.99994 13"
                />{" "}
              </g>
            </svg>
          </div>
          <div className="mt-3 text-center">
            <span className="text-sm font-semibold text-green-800">
              Form Submitted
            </span>
            <p className="mt-2 text-sm text-gray-600">
              Thank you! We&apos;ve received your message and will be in touch
              shortly
            </p>
          </div>
          <div className="mt-3 mx-3">
            <button
              type="button"
              className="w-full rounded bg-green-700 px-4 py-2 text-base font-medium text-dark shadow-sm hover:bg-green-800"
              onClick={() => setOpen && setOpen(false)}
            >
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThanksCard;
