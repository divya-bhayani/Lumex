import React, { useState } from "react";
import { useQuery } from "react-query";

import "../../../Aseets/Css/Estimated.css";

export default function Estimated({ data }) {
  const shipping_list = ["1 Day", "2 Days", "4 Days", "7 Days", "7+ Days"];
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleActive = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
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
                  {shipping_list.map((shipping_list, index) => {
                    const key = `shipping_list-${index}`;
                    return (
                      <li>
                        <button className="custom_button">
                          <label
                            className={` ${
                              activeIndices.includes(key) ? "sub_active" : ""
                            }`}
                            onClick={() => toggleActive(key)}
                          >
                            <span>{shipping_list}</span>
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
        <div className="lab">
          <div className="lab_inner">
            <div className="shape_title">
              <div className="shap_title_inner">Warehouse:</div>
            </div>
            <div className="clarity_box">
              <div className="clarity_box_inner">
                {" "}
                <ul className="clarity">
                  {data?.warehouses.map((warehouses, index) => {
                    const key = `warehouses-${index}`;
                    return (
                      <li>
                        <button className="custom_button">
                          <label
                            className={` ${
                              activeIndices.includes(key) ? "sub_active" : ""
                            }`}
                            onClick={() => toggleActive(key)}
                          >
                            <span>{warehouses.warehouse_name}</span>
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
      </div>
    </div>
  );
}
