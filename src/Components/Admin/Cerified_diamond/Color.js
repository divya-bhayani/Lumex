import React, { useState } from "react";
import { useQuery } from "react-query";

import "../../../Aseets/Css/Color.css";
import "../../../Aseets/Css/Shap.css";
import { cerified } from "../../../Services/Admin/certified-diamond";

export default function Color({ data, filters, setFilter }) {
  const [tab, setTab] = useState(0);

  const handlecolor = (color, key) => {
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
        <div className="shape_title">
          <div className="shap_title_inner">Color:</div>
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
                  White
                </label>
                <label
                  onClick={() => setTab(1)}
                  className={tab == 1 ? "active" : ""}
                >
                  Fancy
                </label>
              </div>
            </div>
            {tab === 0 ? (
              <div className="color">
                <div className="color_inner">
                  <ul className="fancy">
                    {data?.colors.map((colors, index) => {
                      const id = colors._id;
                      return (
                        <li>
                          <button className="custom_button" key={colors._id}>
                            <label
                              className={` ${
                                filters?.color_white?.includes(colors._id)
                                  ? "sub_active"
                                  : ""
                              }`}
                              onClick={() =>
                                handlecolor(colors._id, "color_white")
                              }
                            >
                              <span>{colors.color}</span>
                            </label>
                          </button>
                        </li>
                      );
                    })}{" "}
                  </ul>
                </div>
              </div>
            ) : (
              ""
            )}
            {tab === 1 ? (
              <div className="fancy_color">
                <div className="fancy_color_inner">
                  <div className="fancy_color_box">
                    <div className="fancy_color_box_inner">
                      <div className="fancy_color_title">
                        <div className="fancy_color_title_inner">
                          <span>Fancy Colors</span>
                        </div>
                      </div>
                      <ul className="overtons">
                        {data?.fancy_colors.map((fancy_colors, index) => {
                          const id = fancy_colors._id;
                          return (
                            <li>
                              <button
                                className="custom_button"
                                key={fancy_colors._id}
                              >
                                <label
                                  className={` ${
                                    filters?.color_fancy?.includes(
                                      fancy_colors._id
                                    )
                                      ? "sub_active"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    handlecolor(fancy_colors._id, "color_fancy")
                                  }
                                >
                                  <img
                                    src={`https://dev.lumex.online:8000/media/admin/color/${fancy_colors.color_image}`}
                                    width={50}
                                  />
                                  <span>{fancy_colors.color}</span>
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
                          <span>Overtone</span>
                        </div>
                      </div>{" "}
                      <ul className="overtons">
                        {data?.overtones.map((overtones, index) => {
                          const id = overtones._id;
                          return (
                            <li>
                              <button
                                className="custom_button"
                                key={overtones._id}
                              >
                                <label
                                  className={` ${
                                    filters?.color_overtones?.includes(
                                      overtones._id
                                    )
                                      ? "sub_active"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    handlecolor(
                                      overtones._id,
                                      "color_overtones"
                                    )
                                  }
                                >
                                  <span>{overtones.overtone}</span>
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
                          <span>Intensity</span>
                        </div>
                      </div>
                      <ul className="overtons">
                        {data?.intensitys.map((intensitys, index) => {
                          const id = intensitys._id;
                          return (
                            <li>
                              <button
                                className="custom_button"
                                key={intensitys._id}
                              >
                                <label
                                  className={` ${
                                    filters?.color_intensitiy?.includes(
                                      intensitys._id
                                    )
                                      ? "sub_active"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    handlecolor(
                                      intensitys._id,
                                      "color_intensitiy"
                                    )
                                  }
                                >
                                  <span>{intensitys.intensity}</span>
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
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
