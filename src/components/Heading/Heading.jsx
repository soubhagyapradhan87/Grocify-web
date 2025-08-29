import React from "react";

const Heading = (props) => {
  return (
    <div className="mx-auto w-fit ">
      <h2 className="md:text-5xl text-[2rem] font-bold">
        <span className="text-orange-500">{props.highlight}</span> {props.content}
      </h2>
      <div className="w-35 h-1 bg-orange-300 md:mt-5 mt-2 ml-auto"></div>
    </div>
  );
};

export default Heading;
