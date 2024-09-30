import React from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { FaRegEdit } from "react-icons/fa";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

export default function Product() {
  const handleConfirmClick = () => {
    Swal.fire({
      title: "  ຢືນຢັນການລົບຂໍ້ມູນ",
      showCancelButton: true,
      cancelButtonColor: "#007AFF",
      confirmButtonColor: "#EA2A2D",
      cancelButtonText: "ຍົກເລີກ",
      confirmButtonText: "ລົບ",
    })
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
      name: "Name",
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
    {
      name: "ເພີ່ມຂໍ້ມູນ",
      selector: (row) => row.add,
    },
    {
      name: "ແກ້ໄຂ",
      selector: (row) => row.edit,
    },
    {
      name: "ລຶບ",
      selector: (row) => row.change,
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
      add: (
        <Link to="/add-por">
        <button>
        <FaRegEdit
          icon={FaRegEdit}
          style={{ fontSize: 25, marginLeft: 10, color: "green" }}
        />
      </button>
      </Link>
      ),
      edit: 
      <Link to="/add-por">
        <button>
        <BiSolidEditAlt style={{ fontSize: 25, color: "darkblue" }} />
      </button>
      </Link>,
      change: 
        <button onClick={handleConfirmClick}>
        <MdDelete style={{ fontSize: 25, color: "red" }} />
      </button>,
    },
    {
      sort: 1,
      id: "000000",
      category: "ແບບປ້ຳ",
      name: "ຊຸດປ້ຳ210w",
      price: "1,000,000",
      quantity: "2ແຜງ",
      add: (
        <Link to="/add-por">
        <button>
        <FaRegEdit
          icon={FaRegEdit}
          style={{ fontSize: 25, marginLeft: 10, color: "green" }}
        />
      </button>
      </Link>
      ),
      edit: 
      <Link to="/add-por">
        <button>
        <BiSolidEditAlt style={{ fontSize: 25, color: "darkblue" }} />
      </button>
      </Link>,
      change: 
        <button onClick={handleConfirmClick}>
        <MdDelete style={{ fontSize: 25, color: "red" }} />
      </button>,
    },
  ];
  return (
    <>
      <div
        className="flex w-full justify-between ml-3 mr-3 mt-5"
        style={{ fontFamily: "Noto Sans Lao" }}
      >
        <h4 style={{ fontSize: 24, color: "#154391" }}>ຂໍ້ມູນປະເພດສິນຄ້າ</h4>
        <div></div>
        <Link to="/add-por">
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
            + ເພີ່ມປະເພດສິນຄ້າ
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
