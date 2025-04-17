import React, { useState } from "react";
import "../../../Aseets/Css/Table.css";
import { dynamicSort } from "../../../Utils/Hook/DynamicSort";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
export default function Table({ data, column }) {
  const [sortOrder, setSortOrder] = useState("desc");
  const [sortfield, setSortfield] = useState();
  const handlesort = (dataField) => {
    setSortfield(dataField);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

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
                  <div className="custom-table-head-name">
                    {ele.text}
                    {ele.dataField !== "Stock_No" &&
                    ele.dataField !== "Certificate_URL" &&
                    ele.dataField !== "#" ? (
                      sortfield === ele.dataField && sortOrder === "asc" ? (
                        <FaCaretUp />
                      ) : (
                        <FaCaretDown />
                      )
                    ) : (
                      ""
                    )}
                  </div>
                </th>
              );
            })}
        </tr>
      </thead>
      <tbody className="table_body">
        {data &&
          data?.length > 0 &&
          [...data].sort(dynamicSort(sortfield, sortOrder)).map((ele, i) => {
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
