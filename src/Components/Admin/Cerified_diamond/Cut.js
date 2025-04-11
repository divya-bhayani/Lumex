import React, { useState } from "react";
import { useQuery } from "react-query";
import { cerified } from "../../../Services/Admin/certified-diamond";

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
                        const id = cuts._id;
                        return (
                          <li>
                            <button className="custom_button" key={cuts._id}>
                              <label
                                className={` ${
                                  filters?.cut?.includes(cuts._id)
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
                    const id = polish._id;
                    return (
                      <li>
                        <button className="custom_button" key={polish._id}>
                          <label
                            className={` ${
                              filters?.polishs?.includes(polish._id)
                                ? "sub_active"
                                : ""
                            }`}
                            onClick={() => handlecut(polish._id, "polishs")}
                          >
                            <span>{polish.polish}</span>
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
                    <span>Symmetry</span>
                  </div>
                </div>
                <ul className="overtons">
                  {data?.symmetrys.map((symmetrys, index) => {
                    const id = symmetrys._id;
                    return (
                      <li>
                        <button className="custom_button" key={symmetrys._id}>
                          <label
                            className={` ${
                              filters?.symmetry?.includes(symmetrys._id)
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
                    const id = `syme-${index}`;
                    return (
                      <li>
                        <button className="custom_button" key={symmetrys._id}>
                          <label
                            className={` ${
                              filters?.quick_search?.includes(symmetrys._id)
                                ? "sub_active"
                                : ""
                            }`}
                            onClick={() =>
                              handlecut(symmetrys._id, "quick_search")
                            }
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
