import React from "react";

export const GET_SHAPE = "getShape";

export const Action_creater = (data) => {
  return { type: GET_SHAPE, payload: data };
};
