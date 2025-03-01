import React, { useState } from "react";
import Loader from "./Loader";

const Button = ({
  downloadResume,
  title = "Button",
}: {
  title: string;
  downloadResume: () => void;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      downloadResume();
      setLoading(false);
    }, 3000);
  };
  return (
    <button
      onClick={handleClick}
      className=" w-full md:w-[200px] bg-white text-dark font-bold font-sans text-md md:text-lg py-2 px-4 border border-white-500 rounded-md"
      disabled={loading}
    >
      {loading ? <Loader loading={loading} color="##000000" /> : title}
    </button>
  );
};

export default Button;
