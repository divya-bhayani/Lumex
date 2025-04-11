import React, { useEffect, useState } from "react";
import "../../../Aseets/Css/Shap.css";
import { Action_creater } from "../../../Store/Action_creater";
import { useDispatch, useSelector } from "react-redux";

export default function Shap({ data, setFilter, filters, reduxdata }) {
  const [tab, setTab] = useState(0);

  const handlestatestore = (shape) => {
    if (filters?.shape?.includes(shape)) {
      const list = filters.shape.filter((ele) => ele != shape);
      setFilter({ ...filters, shape: list });
    } else {
      const list = [...(filters?.shape || []), shape];
      setFilter({ ...filters, shape: list });
    }
    // setShapeselected([...shapeselected, shape]);
  };

  const noveltyFilter = (noveltyshape) => {
    if (filters?.novelty_cut?.includes(noveltyshape)) {
      const list = filters.novelty_cut.filter((ele) => ele != noveltyshape);
      setFilter({ ...filters, noveltyshape: list });
    } else {
      const list = [...(filters?.shape || []), noveltyshape];
      setFilter({ ...filters, novelty_cut: list });
    }
  };
  //redux data

  // const getDatashape = useSelector((state) => state.getshape);
  // console.log("getDatashape", getDatashape);
  return (
    <>
      {" "}
      <div className="shap_main">
        <div className="shap_main_inner">
          <div className="shape_title">
            <div className="shap_title_inner">Shape:</div>
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
                    General
                  </label>
                  <label
                    onClick={() => setTab(1)}
                    className={tab == 1 ? "active" : ""}
                  >
                    Novelty Cut
                  </label>
                </div>
              </div>
              {tab === 0 ? (
                <div className="sub_shape">
                  <div className="sub_shap_inner">
                    {data?.shapes?.map((shape, index) => {
                      const id = shape._id;
                      return (
                        <div className="sub_box" key={shape._id}>
                          <div
                            className={`sub_box_inner ${
                              filters?.shape?.includes(shape.shape_code)
                                ? "sub_active"
                                : ""
                            }`}
                            onClick={() => {
                              console.log(shape);

                              handlestatestore(shape.shape_code);
                            }}
                          >
                            <img
                              src={`https://dev.lumex.online:8000/media/admin/shape/${shape.shape_image}`}
                            ></img>
                            <span>{shape.shape_name}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ""
              )}
              {tab === 1 ? (
                <div className="sub_shape">
                  <div className="sub_shap_inner">
                    {data?.novelty?.map((shape, index) => {
                      const id = shape._id;
                      return (
                        <li className="sub_box">
                          <div
                            className={`sub_box_inner ${
                              filters?.novelty_cut?.includes(shape._id)
                                ? "sub_active"
                                : ""
                            }`}
                            onClick={() => {
                              // toggleActive(id);
                              noveltyFilter(shape._id);
                            }}
                          >
                            <img
                              src={`https://dev.lumex.online:8000/media/admin/shape/${shape.shape_image}`}
                            ></img>
                            <span>{shape.shape_name}</span>
                          </div>
                        </li>
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
      <div className="divider"></div>
    </>
  );
}
