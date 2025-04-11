import React, { useState } from "react";
import { useQuery } from "react-query";
import { cerified } from "../../../Services/Admin/certified-diamond";

export default function Price({ data }) {
  const [tab, setTab] = useState(0);

  return (
    <div className="shap_main">
      <div className="shap_main_inner">
        <div className="shape_title">
          <div className="shap_title_inner">Price:</div>
        </div>
        <div className="shap" style={{ width: "600px" }}>
          <div className="shap_inner">
            <div className="label_title">
              <div className="label_title_inner">
                <label
                  role="button"
                  onClick={() => setTab(0)}
                  className={tab == 0 ? "active" : ""}
                >
                  Total Price
                </label>
                <label
                  onClick={() => setTab(1)}
                  className={tab == 1 ? "active" : ""}
                >
                  Price Per Carat
                </label>
              </div>
            </div>
            {tab === 0 ? (
              <div className="manual_carat">
                <div className="manual_carat_inner">
                  <div className="form_control">
                    <div className="form_control_inner">
                      <input
                        type="number"
                        placeholder="Min, $"
                        style={{ width: "200px" }}
                      />
                      <input
                        type="number"
                        placeholder="Max, $"
                        style={{ width: "200px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {tab === 1 ? (
              <div className="manual_carat">
                <div className="manual_carat_inner">
                  <div className="form_control">
                    <div className="form_control_inner">
                      <input type="number" style={{ width: "20px" }} />
                      <input type="number" style={{ width: "20px" }} />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="stock">
          <div
            className="stock_inner"
            style={{ display: "flex", alignItems: "anchor-center" }}
          >
            {" "}
            <div className="shape_title">
              <div className="shap_title_inner">Stock No:</div>
            </div>
            <div className="shap">
              <div className="shap_inner">
                <div className="manual_carat">
                  <div className="manual_carat_inner">
                    <div className="form_control">
                      <div className="form_control_inner">
                        <textarea type="number" style={{ width: "200px" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
