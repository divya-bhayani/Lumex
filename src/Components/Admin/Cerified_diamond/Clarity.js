import React, { useState } from "react";

import { useQuery } from "react-query";
import "../../../Aseets/Css/Clarity.css";
import { cerified } from "../../../Services/Admin/certified-diamond";

export default function Clarity({ data, filters, setFilter }) {
  const handleclarity = (clarity) => {
    if (filters?.claritys?.includes(clarity)) {
      const list = filters?.claritys?.filter((ele) => ele != clarity);
      setFilter({ ...filters, claritys: list });
    } else {
      const list = [...(filters?.claritys || []), clarity];
      setFilter({ ...filters, shape: list });
      setFilter({ ...filters, claritys: list });
    }
  };
  return (
    <div className="shap_main">
      <div className="shap_main_inner">
        <div className="shape_title">
          <div className="shap_title_inner">Clarity:</div>
        </div>
        <div className="clarity_box">
          <div className="clarity_box_inner">
            {" "}
            <ul className="clarity">
              {data?.claritys.map((clarit, index) => {
                const id = clarit._id;
                return (
                  <li>
                    <button className="custom_button" key={clarit._id}>
                      <label
                        className={` ${
                          filters?.claritys?.includes(clarit._id)
                            ? "sub_active"
                            : ""
                        }`}
                        onClick={() => handleclarity(clarit._id)}
                      >
                        <span>{clarit.clarity}</span>
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
  );
}
