import React from "react";
import { GET_SHAPE } from "./Action_creater";

const intialstate = {
  getshape: "",
};

export const Shape_Reducer = (state = intialstate, action) => {
  switch (action.type) {
    case GET_SHAPE:
      return {
        ...state,
        getshape: action.payload,
      };

    default:
      return state;
  }
};
