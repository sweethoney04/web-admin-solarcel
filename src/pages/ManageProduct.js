import React, { useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";

export default function () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const tableCustomStyles = {
    headRow: {
      style: {
        backgroundColor: "#D9D9D9",
      },
    },
    rows: {
      style: {
        backgroundColor: "#D9D9D9",
      },
    },
  };
  const columns = [
    {
      name: "Sort",
      selector: (row) => row.sort,
    },
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "ປະເພດ",
      selector: (row) => row.category,
    },
    {
      name: "ຊື່",
      selector: (row) => row.name,
    },
    {
      name: "ລາຄາ",
      selector: (row) => row.price,
    },
    {
      name: "ຈຳນວນແຜງ",
      selector: (row) => row.quantity,
    },
  ];
  const data = [
    {
      sort: 1,
      id: "000000",
      category: "ແບບປ້ຳ",
      name: "ຊຸດປ້ຳ210w",
      price: "1,000,000",
      quantity: "2ແຜງ",
    },
    {
      sort: 1,
      id: "000000",
      category: "ແບບປ້ຳ",
      name: "ຊຸດປ້ຳ210w",
      price: "1,000,000",
      quantity: "2ແຜງ",
    },
  ];
  return (
    <>
      <div
        className="flex w-full justify-between ml-3 mr-3 mt-5"
        style={{ fontFamily: "Noto Sans Lao" }}
      >
        <h4 style={{ fontSize: 24 }}>ການຈັດການປະເພດຂໍ້ມູນ</h4>
        <div
          className="relative"
          id="dropdownButton"
          style={{ fontFamily: "Noto San Laos", marginLeft: 580 }}
        >
          <div
            onClick={toggleDropdown}
            className="border-solid border-gray-300 border-[1px] px-5 py-2 rounded cursor-pointer flex justify-between w-[200px]  shadow-md"
            style={{
              backgroundColor: "#154391",
              padding: "10px 20px",
              borderRadius: 10,
              color: "white",
              textAlign: "center",
              fontFamily: "Noto San Laos",
            }}
          >
            ປະເພດໂຊລາເຊວ
            <img
              width={20}
              src={require("../assets/img/teenyicons_up-outline.png")}
              alt="Toggle dropdown"
            />
          </div>
          {isOpen && (
            <div
              id="dropdown"
              className="rounded border-[1px] border-gray-300 p-4 absolute top-[45px] w-[200px] shadow-md"
              style={{
                backgroundColor: "#274F94",
                padding: "10px 20px",
                borderRadius: 10,
                color: "white",
                textAlign: "center",
              }}
            >
              <div className="cursor-pointer hover:bg-blue-300 z-50">ແບບປ້ຳ</div>
              <div className="cursor-pointer hover:bg-blue-300 z-50">Rooftop</div>
            </div>
          )}
        </div>

        <Link to="/add-product">
          <button
            style={{
              backgroundColor: "#154391",
              padding: "10px 20px",
              borderRadius: 10,
              color: "white",
              textAlign: "center",
              marginRight: 25,
            }}
          >
            + ເພີ່ມ
          </button>
        </Link>
      </div>
      <div
        className="container mt-5 ml-5 mr-5"
        style={{
          boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
          borderRadius: "15px",
          width: "99%",
          marginTop: 15,
          marginLeft: 15,
          marginRight: 15,
          fontFamily: "Noto Sans Lao",
          padding: "20px",
          backgroundColor: "#D9D9D9",
        }}
      >
        <DataTable
          customStyles={tableCustomStyles}
          columns={columns}
          data={data}
        ></DataTable>
      </div>
    </>
  );
}
