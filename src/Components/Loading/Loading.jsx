import React from "react";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="h-[78vh] dark:bg-slate-900">
      <div className='loader w-5 inline-block mx-auto my-48'>
        <span></span>
      </div>
    </div>
  );
};

export default Loading;