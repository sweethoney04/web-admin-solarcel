import React, { useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import one from '../assets/img/ic_baseline-delete.png';
import { FaRegEdit } from "react-icons/fa";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

export default function () {
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
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Toggle editing mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

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
    {
      name: "ເພີ່ມຂໍ້ມູນ",
      selector: (row) => row.add
    },
    {
      name: "ແກ້ໄຂ",
      selector: (row) => row.edit
    },
    {
      name: "ລຶບ",
      selector: (row) => row.change
    }
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
        <Link to="/add-product">
        <button>
        <FaRegEdit
          icon={FaRegEdit}
          style={{ fontSize: 25, marginLeft: 10, color: "green" }}
        />
      </button>
      </Link>
      ),
      edit: 
      <Link to="/add-product">
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
      sort: 2,
      id: "000000",
      category: "ແບບປ້ຳ",
      name: "ຊຸດປ້ຳ210w",
      price: "1,000,000",
      quantity: "2ແຜງ",
      add: (
        <Link to="/add-product">
        <button>
        <FaRegEdit
          icon={FaRegEdit}
          style={{ fontSize: 25, marginLeft: 10, color: "green" }}
        />
      </button>
      </Link>
      ),
      edit: 
      <Link to="/add-product">
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
        style={{ fontFamily: "Noto Sans Lao", color: "#154391" }}
      >
        <h4 style={{ fontSize: 24 }}>ການຈັດການຂໍ້ມູນ</h4>
        <div class="relative inline-block text-left">
          <div onClick={toggleDropdown} style={{ marginLeft: 650 }}>
            <button
              style={{
                backgroundColor: "#154391",
                color: "white",
                borderRadius: 10,
              }}
              type="button"
              class="inline-flex w-full justify-center gap-x-1.5 px-3 py-3 text-sm font-semibold shadow-sm hover:bg-gray-50"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              ປະເພດໂຊລາເຊວ
              <svg
                class="-mr-1 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div
              style={{
                backgroundColor: "rgba(39, 79, 148, 0.8)",
                color: "white",
              }}
              class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md shadow-lg text-white focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1" role="none">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm "
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-1"
                >
                  ແບບປ້ຳ
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm "
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-2"
                >
                  Looftop
                </a>
              </div>
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
