import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AddPor() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
        <div className='flex w-full justify-between ml-3 mr-3 mt-5' style={{fontFamily: "Noto Sans Lao" }}>
        <h4 style={{fontSize: 24, color: '#154391'}}>ເພີ່ມປະເພດສິນຄ້າ</h4>
        </div>
        <div className='container mt-5 ml-5 mr-5'
        style={{
          boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
          borderRadius: "5px",
          width: "100%",
          padding: "20px",
          marginTop: 15,
          fontFamily: "Noto Sans Lao",
          height: 680,
        }}
      >
        <div className='flex justify-start' style={{color: '#154391'}}>
            <div>
                <h4 style={{fontSize: 24, marginLeft: 100}}>ປະເພດສິນຄ້າ</h4>
            </div>
            <div>
                <h4 style={{fontSize: 24, marginLeft: 470}}>ເພີ່ມ</h4>
            </div>
            <div style={{marginLeft: 15}}>
            <input
              style={{
                width: 311,
                height: 40,
                border: "1px solid #EDEDED",
                borderRadius: 5,
                paddingLeft: 10,
              }}
              type="text"
              className="form-control"
              id="last-name"
            />
            </div>
        </div>
        <div class="relative inline-block text-left">
          <div onClick={toggleDropdown} style={{ marginLeft: 100, marginTop: 20 }}>
            <button
            style={{borderRadius: 10}}
              type="button"
              class="inline-flex w-full justify-center gap-x-1.5 px-5 py-3 bg-white text-black text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
              class="absolute right-0 z-10 mt-2 w-full origin-top-center rounded-md shadow-lg bg-white ring-1 ring-black text-white ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div class="py-1 text-black" role="none">
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
        <div className="flex justify-end mt-10 mr-10 mb-5">
          <div>
            <button
              style={{
                borderRadius: 10,
                padding: "10px 18px",
                color: "#007AFF",
                textAlign: "center",
                border: "1px solid #007AFF",
                marginRight: 20,
              }}
            >
              <Link to="/product">
                <h4>ຍົກເລີກ</h4>
              </Link>
            </button>
          </div>
          <div>
            <button
              style={{
                backgroundColor: "#154391",
                borderRadius: 10,
                padding: "10px 18px",
                color: "white",
                textAlign: "center",
              }}
            >
              <Link to="/product">
                <h4>ບັນທຶກ</h4>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
