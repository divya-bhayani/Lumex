import React, { useState } from "react";
import { useQuery } from "react-query";
import { cerified } from "../../../Services/Admin/certified-diamond";
import { SiEraser } from "react-icons/si";

export default function Cut({ data, filters, setFilter }) {
  const handlecut = (color, key) => {
    if (filters[key]?.includes(color)) {
      const list = filters[key]?.filter((ele) => ele != color);
      setFilter({ ...filters, [key]: list });
    } else {
      const list = [...(filters[key] || []), color];
      setFilter({ ...filters, [key]: list });
    }
  };

  const handleQuick_search = (search) => {
    if (filters?.quick_search?.includes(search)) {
      const list = filters?.quick_search?.filter((ele) => ele != search);
      setFilter({ ...filters, quick_search: list });
    } else {
      setFilter({ ...filters, quick_search: [search] });
    }
  };

  const isRound = filters?.shape?.includes("RD");
  console.log("isRound===================", isRound);

  const quickSearchIndex = data?.symmetrys?.findIndex((symmetry) =>
    filters?.quick_search?.includes(symmetry._id)
  );

  return (
    <div className="shap_main">
      <div className="shap_main_inner">
        <div className="fancy_color" style={{ padding: "0px 108px" }}>
          <div className="fancy_color_inner">
            <div className="fancy_color_box">
              <div className="fancy_color_box_inner">
                <div className="fancy_color_title">
                  <div className="fancy_color_title_inner">
                    <span>Cut</span>
                  </div>
                </div>
                <div className="sub_shape">
                  <div className="sub_shap_inner">
                    <ul className="finish-blocks">
                      {data?.cuts.map((cuts, index) => {
                        // console.log(
                        //   "shape length=====",
                        //   filters?.shape?.length
                        // );
                        let quickSearchIndex;

                        if (isRound) {
                          quickSearchIndex = data?.symmetrys?.findIndex(
                            (symmetry) =>
                              filters?.quick_search?.includes(symmetry._id)
                          );
                          if (quickSearchIndex >= 1) {
                            quickSearchIndex = quickSearchIndex + 1;
                          }
                        }

                        return (
                          <li>
                            <button className="custom_button" key={cuts._id}>
                              <label
                                className={` ${
                                  filters?.cut?.includes(cuts._id) ||
                                  quickSearchIndex >= index
                                    ? "sub_active"
                                    : ""
                                }`}
                                onClick={() => handlecut(cuts._id, "cut")}
                              >
                                <span>{cuts.cut}</span>
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
                    <span>Polish</span>
                  </div>
                </div>{" "}
                <ul className="overtons">
                  {data?.polish.map((polish, index) => {
                    return (
                      <li key={polish._id}>
                        <button className="custom_button">
                          <label
                            className={
                              filters?.polish?.includes(polish._id) ||
                              quickSearchIndex >= index
                                ? "sub_active"
                                : ""
                            }
                            onClick={() => handlecut(polish._id, "polish")}
                          >
                            <span>{polish.polish}</span>
                          </label>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="fancy_color_box">
              <div className="fancy_color_box_inner">
                <div className="fancy_color_title">
                  <div className="fancy_color_title_inner">
                    <span>Symmetry</span>
                  </div>
                </div>
                <ul className="overtons">
                  {data?.symmetrys.map((symmetrys, index) => {
                    return (
                      <li>
                        <button className="custom_button" key={symmetrys._id}>
                          <label
                            className={` ${
                              filters?.symmetry?.includes(symmetrys._id) ||
                              quickSearchIndex >= index
                                ? "sub_active"
                                : ""
                            }`}
                            onClick={() => handlecut(symmetrys._id, "symmetry")}
                          >
                            <span>{symmetrys.symmetry}</span>
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
                    <span>Quick Search</span>
                  </div>
                </div>
                <ul className="overtons">
                  {data?.symmetrys.map((symmetrys, index) => {
                    return (
                      <li>
                        <button className="custom_button" key={symmetrys._id}>
                          <label
                            className={` ${
                              filters?.quick_search?.includes(symmetrys._id)
                                ? "sub_active"
                                : ""
                            }`}
                            onClick={() => {
                              handleQuick_search(symmetrys._id);
                            }}
                          >
                            <span>{symmetrys.symmetry}</span>
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
