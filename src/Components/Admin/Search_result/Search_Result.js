import React, { useState } from "react";
import "../../../Aseets/Css/Search_result.css";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { BsFiletypeXlsx } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { useQuery } from "react-query";
import { Search_list } from "../../../Services/Admin/Search_result";
import Table from "../../Atoms/Table/Table";
import { RiMedalLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaRegImage } from "react-icons/fa6";
import { LiaFileVideo } from "react-icons/lia";
import { IoEyeSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import Pagination from "../../Atoms/Pagination/Pagination";
import Select from "../../Atoms/Filters/Select";

export default function Search_Result() {
  const [tab, setTab] = useState(0);
  const [selectchecked, setSelectchecked] = useState({});

  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const onPerPageChange = (page) => {
    setPageSize(page);
  };

  //api through data fetch
  const { refetch, data, isError, isSuccess, status, isLoading } = useQuery(
    ["search", pageSize, currentPage],
    () => Search_list({ limit: pageSize, page: currentPage }),
    {
      onSuccess: (data) => {
        setTotal(data?.data?.total);
      },
    }
  );

  console.log("serachdata", data?.data?.data);

  //single checkbox click
  const handleChange = (id) => {
    setSelectchecked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  //all checkbox checked
  const alldataselect = (e) => {
    const checked = e.target.checked;
    const updated = {};
    data.data.data.map((row) => {
      updated[row._id] = checked;
    });
    setSelectchecked(updated);
  };

  //how much row checked
  const selectedCount = Object.values(selectchecked).filter(Boolean).length;

  //count total amount
  const totalamount = data?.data?.data
    ?.filter((row) => selectchecked[row._id])
    ?.reduce((sum, row) => sum + (row.Price * row.Carat || 0), 0);
  console.log(totalamount);

  //count total weight
  const weight = data?.data?.data
    ?.filter((row) => selectchecked[row._id])
    ?.reduce((sum, row) => sum + (row.Carat || 0), 0);
  console.log(weight);

  //count sum of price
  const totalprice = data?.data?.data
    ?.filter((row) => selectchecked[row._id])
    ?.reduce((sum, row) => sum + (row.Price || 0), 0);

  //table column
  const column = [
    {
      dataField: "#",
      text: "#",
      formatter: (cell, row) => (
        <input
          type="checkbox"
          checked={!!selectchecked[row._id]}
          onChange={() => handleChange(row._id)}
        />
      ),
    },

    {
      dataField: "Stock_No",
      text: "Stock_No",
    },

    {
      dataField: "Certificate_URL",
      text: "Preview",
      formatter: (cell, row) => (
        <>
          {" "}
          <div className="certification">
            <Link to={cell} target="_blank" title="View Cerification">
              <RiMedalLine />
            </Link>
            <Link to={row.Image} target="_blank" title="View Image">
              <FaRegImage />
            </Link>
            <Link to={row.Video} title="View Video">
              <LiaFileVideo />
            </Link>
            <Link to={cell} target="_blank" title="View Product">
              <IoEyeSharp />
            </Link>
          </div>
        </>
      ),
    },
    {
      dataField: "Shape",

      text: "Shape",
    },
    {
      dataField: "Carat",
      text: "Carat",
      formatter: (carat) => {
        return <>{carat.toFixed(2)}</>;
      },
    },
    {
      dataField: "Color",
      text: "Color",
    },
    {
      dataField: "Clarity",
      text: "Clarity",
    },
    {
      dataField: "_Id",
      text: "CUT",
      formatter: (cell, row) => {
        return cell ? cell : "N/A";
      },
    },
    {
      dataField: "Polish",
      text: "Polish",
    },
    {
      dataField: "Symmetry",
      text: "Symmetry",
    },
    {
      dataField: "Lab",
      text: "Lab",
    },
    {
      dataField: "Length",
      text: "Length",
    },
    {
      dataField: "Width",
      text: "Width",
    },
    {
      dataField: "Height",
      text: "Height",
    },
    {
      dataField: "Depth",
      text: "Depth",
    },
    {
      dataField: "Table_Percentage",
      text: "Table",
    },
    {
      dataField: "Ratio",
      text: "Ratio",
    },
    // {
    //   dataField: "Growth",
    //   text: "Growth",
    // },
    {
      dataField: "Fluor",
      text: "Flour",
    },
    {
      dataField: "_id",
      text: "Estimated Delivery",
      formatter: (cell, row) => "7 days",
    },
    {
      dataField: "Price",
      text: "Price per Carat",
      formatter: (price) => {
        return `$${price.toFixed(2)}`;
      },
    },
    {
      dataField: "Price",
      text: "Total Price",
      formatter: (price, row) => {
        const total = price * row.Carat;
        return `$${total.toFixed(2)}`;
      },
    },
    {
      dataField: "warehouse",
      text: "warehouse",
    },
  ];

  return (
    <div className="container">
      <div className="main_serach">
        <div className="main_search_inner">
          <div className="fixed_section">
            <div className="top_section">
              <div className="top_section_inner">
                <div className="heading">
                  <div className="heading_inner">
                    <h3>Search Result</h3>
                  </div>
                </div>
                <div className="top">
                  <div className="top_inner">
                    <div className="search_filter_box">
                      <div className="search_filter_box_inner">
                        <div className="card">
                          <div className="box_header">PCS </div>
                          <div className="nox_body">
                            <h4> {selectedCount}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="search_filter_box">
                      <div className="search_filter_box_inner">
                        <div className="card">
                          <div className="box_header">WEIGHT </div>
                          <div className="nox_body">
                            <h4>${weight?.toFixed(2)}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="search_filter_box">
                      <div className="search_filter_box_inner">
                        <div className="card">
                          <div className="box_header">PRICE/CTS</div>
                          <div className="nox_body">
                            <h4>${totalprice?.toFixed(2)}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="search_filter_box">
                      <div className="search_filter_box_inner">
                        <div className="card">
                          <div className="box_header">TOTAL AMOUNT</div>
                          <div className="nox_body">
                            <h4>${totalamount?.toFixed(2)}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="middel_section">
              <div className="middle_section_inner">
                <div className="table_action">
                  <div className="table_action_inner">
                    <div className="select_section">
                      <div className="form_check">
                        <input
                          type="checkbox"
                          className="checkbox"
                          checked={
                            data?.data?.data?.length > 0 &&
                            data.data.data.every(
                              (row) => selectchecked[row._id]
                            )
                          }
                          onChange={(e) => {
                            alldataselect(e);
                          }}
                        />
                        <label className="selectAll">Select All</label>
                      </div>
                    </div>
                    <div className="pagination_section">
                      <div className="paginatiom_section_inner">
                        Total : <b>{data?.data.total}</b> of
                        <Select
                          value={pageSize.toString()}
                          onChange={(e) => onPerPageChange(e.target.value)}
                          className="w-24 form-select box mt-3 sm:mt-0"
                          option={[10, 25, 50, 100, 150, 200, 250]}
                          disabled={total < 10}
                        />
                        items per page
                      </div>
                    </div>
                    <div
                      className={tab === 1 ? "active" : "icon"}
                      onClick={() => setTab(1)}
                    >
                      <div className="icon_inner">
                        <BsFillGrid3X3GapFill />
                      </div>
                    </div>
                    <div
                      onClick={() => setTab(0)}
                      className={tab === 0 ? "active" : "icon"}
                    >
                      <div className="icon_inner">
                        <BsList />
                      </div>
                    </div>
                    <button className="btn" disabled>
                      <BsFiletypeXlsx />
                      Download Stock
                    </button>
                    <button className="btn">
                      <MdOutlineSettingsSuggest />
                      Modify Search
                    </button>
                    <button className="btn" disabled>
                      <MdShoppingCart />
                      Add To Cart
                    </button>
                    <button className="btn" disabled>
                      <BsSuitHeart />
                      Add To Wishlist
                    </button>
                    <button className="search_btn">Save Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {tab === 0 ? (
            <div className="bottom_section">
              <div className="bottom_section_inner">
                <Table data={data?.data?.data} column={column} />
              </div>
            </div>
          ) : (
            ""
          )}
          {tab === 1 ? (
            <div className="bottom_section">
              <div className="bottom_section_inner">
                <div className="product_card">
                  <div className="product_card_inner">
                    {data?.data?.data?.map((item, index) => {
                      return (
                        <div
                          className={`card_box ${
                            selectchecked[item._id] ? "selected" : ""
                          }`}
                          onClick={() => handleChange(item._id)}
                        >
                          <div className="card_box_inner" key={index}>
                            <>
                              <div className="card_box_top">
                                <div className="card_box_top_inner">
                                  <div className="card_image">
                                    <img
                                      src={
                                        item.Image
                                          ? item.Image
                                          : "https://dev.lumex.online/_next/static/media/product.2f7a2f0b.png"
                                      }
                                      width={50}
                                    />
                                  </div>
                                  <div className="card_wishlist">
                                    <IoHeartOutline />
                                  </div>
                                </div>
                              </div>
                              <div className="card_box_bottom">
                                <div className="card_box_bottom_inner">
                                  <div className="product_title">
                                    <span className="product_name">
                                      {item.Shape}
                                    </span>
                                    <span className="product_carat">
                                      {item.Carat}
                                    </span>
                                    <span className="product_Clarity">
                                      {item.Clarity}
                                    </span>
                                  </div>
                                  <div className="product_desc">
                                    <span className="product_Polish">
                                      {item.Polish}
                                    </span>
                                    <span className="product_Symmetry">
                                      {item.Symmetry}
                                    </span>
                                  </div>
                                  <div className="product_detailas">
                                    <div className="divide">
                                      <p className="total_price">Total Price</p>
                                      <span className="product_Price">
                                        ${item.Price}
                                      </span>{" "}
                                    </div>
                                    <div className="certification">
                                      <Link
                                        to={item.Certificate_URL}
                                        target="_blank"
                                        title="View Cerification"
                                      >
                                        <RiMedalLine />
                                      </Link>
                                      <Link
                                        to={item.Image}
                                        target="_blank"
                                        title="View Image"
                                      >
                                        <FaRegImage />
                                      </Link>
                                      <Link
                                        to={item.Video}
                                        target="_blank"
                                        title="View Video"
                                      >
                                        <LiaFileVideo />
                                      </Link>
                                      <Link
                                        to="#"
                                        target="_blank"
                                        title="View Product"
                                      >
                                        <IoEyeSharp />
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <Pagination
            parPage={[10, 25, 50, 100, 150, 200, 250]}
            onPerPageChange={(page) => setPageSize(page)}
            onPageChange={(page) => setCurrentPage(page)}
            totalCount={total}
            currentPage={currentPage}
            pageSize={pageSize}
          />
        </div>
      </div>
    </div>
  );
}
