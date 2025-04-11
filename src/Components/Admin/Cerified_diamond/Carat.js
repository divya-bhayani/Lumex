import React, { useState } from "react";
import { useQuery } from "react-query";

import "../../../Aseets/Css/Carat.css";
import { cerified } from "../../../Services/Admin/certified-diamond";

export default function Carat({ data, filters, setFilter }) {
  const [tab, setTab] = useState(0);

  const handlerange = (rangeshap) => {
    if (filters?.carat_range?.includes(rangeshap)) {
      const list = filters?.carat_range?.filter((ele) => ele != rangeshap);
      setFilter({ ...filters, carat_range: list });
    } else {
      const list = [...(filters?.carat_range || []), rangeshap];
      setFilter({ ...filters, carat_range: list });
    }
  };

  return (
    <div className="shap_main">
      <div className="shap_main_inner">
        <div className="shape_title">
          <div className="shap_title_inner">Carat:</div>
        </div>
        <div className="shap">
          <div className="shap_inner">
            <div className="label_title">
              <div className="label_title_inner">
                <label
                  role="button"
                  onClick={() => setTab(0)}
                  className={tab == 0 ? "active" : ""}
                >
                  Manual
                </label>
                <label
                  onClick={() => setTab(1)}
                  className={tab == 1 ? "active" : ""}
                >
                  Range
                </label>
              </div>
            </div>
            {tab === 0 ? (
              <div className="manual_carat">
                <div className="manual_carat_inner">
                  <div className="form_control">
                    <div className="form_control_inner">
                      <input type="number" placeholder="From" />
                      <input type="number" placeholder="To" />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {tab === 1 ? (
              <div className="sub_shape">
                <div className="sub_shap_inner">
                  {data?.sizes?.map((size, index) => {
                    const id = size._id;
                    return (
                      <div className="sub_box" key={size._id}>
                        <div
                          className={`sub_box_inner carat_box ${
                            filters?.carat_range?.includes(size._id)
                              ? "sub_active"
                              : ""
                          }`}
                          onClick={() => handlerange(size._id)}
                        >
                          <span>{size.size}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
