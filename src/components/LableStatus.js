import React from "react";

const LableStatus = ({ type, childen }) => {
  let styleClassName = "";
  switch (type) {
    case "success":
      styleClassName = "text-green-500 bg-green-100";
      break;
    case "warning":
      styleClassName = "text-orange-500 bg-orange-100";
      break;
    case "danger":
      styleClassName = "text-red-500 bg-red-100";
      break;
    default:
      break;
  }
  return (
    <div className={`px-2 py-3 rounded-lg font-medium flex items-center justify-center ${styleClassName}`}>
      {childen}
    </div>
  );
};

export default LableStatus;
