import React from "react";

const Select = ({ value, onChange, option, className = "", disabled }) => {
  return (
    <select
      className={"form-control " + className}
      onChange={onChange}
      disabled={disabled}
      value={value}
    >
      {option &&
        option.length > 0 &&
        option.map((ele, i) => {
          return (
            <option key={i} value={ele}>
              {ele}
            </option>
          );
        })}
    </select>
  );
};

export default Select;
