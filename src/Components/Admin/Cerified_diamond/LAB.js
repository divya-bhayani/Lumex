import React, { useState } from "react";
import { useQuery } from "react-query";

// import "../../Aseets/css/Lab.css";
import "../../../Aseets/Css/Lab.css";

export default function LAB({ data, filters, setFilter }) {
  const handlelab = (color, key) => {
    if (filters[key]?.includes(color)) {
      const list = filters[key]?.filter((ele) => ele != color);
      setFilter({ ...filters, [key]: list });
    } else {
      const list = [...(filters[key] || []), color];
      setFilter({ ...filters, [key]: list });
    }
  };
  return (
    <div className="shap_main">
      <div className="shap_main_inner">
        <div className="lab">
          <div className="lab_inner">
            <div className="shape_title">
              <div className="shap_title_inner">LAB :</div>
            </div>
            <div className="clarity_box">
              <div className="clarity_box_inner">
                {" "}
                <ul className="clarity">
                  {data?.lab.map((lab, index) => {
                    const id = lab._id;
                    return (
                      <li key={id}>
                        <button className="custom_button">
                          <label
                            className={` ${
                              filters?.labs?.includes(lab) ? "sub_active" : ""
                            }`}
                            onClick={() => handlelab(lab, "labs")}
                          >
                            <span>{lab}</span>
                          </label>
                        </button>
                      </li>
                    );
                  })}{" "}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="number_of_stone">
          <div className="number_of_stone_inner">
            <div className="shape_title">
              <div className="shap_title_inner">Number Of Stone :</div>
            </div>
            <div className="number_stone_input">
              <div className="number_stone_input_inner">
                {" "}
                <input
                  type="number"
                  placeholder="Enter Number Of Stone"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
