import React, { useEffect, useState } from "react";
import Estimated from "./Estimated";
import Carat from "./Carat";
import Color from "./Color";
import Clarity from "./Clarity";
import Cut from "./Cut";
import Fluorescence from "./Fluorescence";
import LAB from "./LAB";
import Price from "./Price";
import { cerified } from "../../../Services/Admin/certified-diamond";
import { useQuery } from "react-query";
import Shap from "./Shap";
import { Action_creater } from "../../../Store/Action_creater";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Ceritified() {
  const { data, isError, isSuccess, status, isLoading } = useQuery(
    ["data"],
    cerified
  );
  const reduxdata = useSelector((state) => state.getshape || []);
  console.log("reduxdata", reduxdata);

  const [filter, setFilter] = useState({
    shape: [],
    novelty_cut: [],
    carat_range: [],
    color_white: [],
    color_fancy: [],
    color_overtones: [],
    color_intensitiy: [],
    claritys: [],
    cut: [],
    polishs: [],
    symmetry: [],
    quick_search: [],
    fluorescences: [],
    Growth_Type: [],
    sustainability: [],
    labs: [],
  });
  useEffect(() => {
    setFilter(reduxdata);
  }, []);

  console.log("filter", filter);
  console.log(filter.shape);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <div className="main_certified" style={{ backgroundColor: "#eff7fa" }}>
        <div style={{ textAlign: "center", marginBottom: "45px" }}>
          <h3 style={{ fontSize: "48px", fontWeight: "500" }}>
            Certified Diamonds
          </h3>
        </div>
        <Estimated data={data?.data} />
        <Shap
          data={data?.data}
          filters={filter}
          setFilter={setFilter}
          reduxdata={reduxdata}
        />
        <Carat
          data={data?.data}
          filters={filter}
          setFilter={setFilter}
          reduxdata={reduxdata}
        />
        <Color data={data?.data} filters={filter} setFilter={setFilter} />
        <Clarity data={data?.data} filters={filter} setFilter={setFilter} />
        <Cut data={data?.data} filters={filter} setFilter={setFilter} />
        <Fluorescence
          data={data?.data}
          filters={filter}
          setFilter={setFilter}
        />
        <LAB data={data?.data} filters={filter} setFilter={setFilter} />
        <Price data={data?.data} />{" "}
        <div className="apply">
          <div className="apply_inner">
            <button onClick={() => dispatch(Action_creater(filter))}>
              APPLY
            </button>
            <button onClick={() => navigate("/Search_result")}>SEARCH</button>
          </div>
        </div>
      </div>
    </>
  );
}
