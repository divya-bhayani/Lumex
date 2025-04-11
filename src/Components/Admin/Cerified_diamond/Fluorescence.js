import React, { useState } from "react";
import { useQuery } from "react-query";
import { cerified } from "../../../Services/Admin/certified-diamond";

export default function Fluorescence({ data, filters, setFilter }) {
  const handleflurescence = (color, key) => {
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
        <div className="fancy_color" style={{ padding: "0px 108px" }}>
          <div className="fancy_color_inner">
            <div className="fancy_color_box">
              <div className="fancy_color_box_inner">
                <div className="fancy_color_title">
                  <div className="fancy_color_title_inner">
                    <span>Fluorescence</span>
                  </div>
                </div>
                <div className="sub_shape">
                  <div className="sub_shap_inner">
                    <ul className="finish-blocks">
                      {data?.fluor.map((fluor, index) => {
                        const id = fluor._id;
                        return (
                          <li>
                            <button className="custom_button" key={fluor._id}>
                              <label
                                className={` ${
                                  filters?.fluorescences?.includes(fluor._id)
                                    ? "sub_active"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleflurescence(fluor._id, "fluorescences")
                                }
                              >
                                <span>{fluor.fluor}</span>
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
            <div className="fancy_color_box">
              <div className="fancy_color_box_inner">
                <div className="fancy_color_title">
                  <div className="fancy_color_title_inner">
                    <span>Growth Type</span>
                  </div>
                </div>{" "}
                <ul className="overtons">
                  {data?.growth.map((growth, index) => {
                    const id = growth._id;
                    return (
                      <li>
                        <button className="custom_button" key={growth._id}>
                          <label
                            className={` ${
                              filters?.Growth_Type?.includes(growth._id)
                                ? "sub_active"
                                : ""
                            }`}
                            onClick={() =>
                              handleflurescence(growth._id, "Growth_Type")
                            }
                          >
                            <span>{growth.growth}</span>
                          </label>
                        </button>
                      </li>
                    );
                  })}{" "}
                </ul>
              </div>
            </div>
            <div className="fancy_color_box">
              <div className="fancy_color_box_inner">
                <div className="fancy_color_title">
                  <div className="fancy_color_title_inner">
                    <span>Sustainability</span>
                  </div>
                </div>
                <ul className="overtons">
                  {data?.sustainability.map((sustainability, index) => {
                    const id = sustainability._id;
                    return (
                      <li>
                        <button
                          className="custom_button"
                          key={sustainability._id}
                        >
                          <label
                            className={` ${
                              filters?.sustainability?.includes(
                                sustainability._id
                              )
                                ? "sub_active"
                                : ""
                            }`}
                            onClick={() =>
                              handleflurescence(
                                sustainability._id,
                                "sustainability"
                              )
                            }
                          >
                            <span>{sustainability.sustainability}</span>
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
