import React, { useEffect, useState } from "react";
import "../../../Aseets/Css/Table.css";
import { dynamicSort } from "../../../Utils/Hook/DynamicSort";

export default function Table({ data, column }) {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortfield, setSortfield] = useState();
  const handlesort = (dataField) => {
    setSortfield(dataField);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortedData = Array.isArray(data)
    ? [...data].sort(dynamicSort(sortfield, sortOrder))
    : [];

  return (
    <table className="main_table">
      <thead className="table_header">
        <tr>
          {column &&
            column.length > 0 &&
            column?.map((ele, i) => {
              return (
                <th
                  className="table_heading_text"
                  onClick={() => handlesort(ele.dataField)}
                >
                  {ele.text}
                </th>
              );
            })}
        </tr>
      </thead>
      <tbody className="table_body">
        {data &&
          data?.length > 0 &&
          sortedData.map((ele, i) => {
            return (
              <tr key={i} className="table_content_row">
                {column &&
                  column.length > 0 &&
                  column.map((item, index) => {
                    if (item?.formatter) {
                      return (
                        <td key={index}>
                          {item?.formatter(ele[item.dataField], ele, i)}
                        </td>
                      );
                    }
                    return <td key={index}>{ele[item.dataField]}</td>;
                  })}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
