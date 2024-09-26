import React, { useState } from 'react';
import imagel from "../assets/img/imagel.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddProduct(props) {
    const [id, setId] = useState(' ');
    const [category, setCategory] = useState(' ');
    const [name, setName] = useState(' ');
    const [price, setPrice] = useState(' ');
    const [quantity, setQuantity] = useState(' ');

    const changeName = (event) => {
        setName(event.target.value);
    };
    const changeId = (event) => {
        setId(event.target.value);
    };
    const changeCategory = (event) => {
        setCategory(event.target.value);
    };
    const changePrice = (event) => {
        setPrice(event.target.value);
    };
    const changeQuantity = (event) => {
        setQuantity(event.target.value);
    };
    const transferValue = (event) => {
        event.preventDefault();
        const val = {
            id,
            category,
            name,
            price,
            quantity
        };
        props.func(val);
        clearState();
    };
    const clearState = () => {
        setName('');
        setId('');
        setCategory('');
        setPrice('');
        setQuantity('');
    };

  return (
    <div>
        <div
      className="w-full flex flex-col"
      style={{ fontSize: 26, fontFamily: "Noto Sans Lao", padding: "20px" }}
    >
      {/* Title */}
      <h4 style={{ color: "#154391" }}>ເພີ່ມຂໍ້ມູນຂ່າວ</h4>

      {/* Main Container */}
      <div
        style={{
          boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
          borderRadius: "15px",
          width: "100%",
          padding: "20px",
          marginTop: 15,
          height: 680,
        }}
      >
  


        {/* Information Section */}
        <h4 style={{ color: "#154391", marginTop: "20px", marginLeft: 15 }}>ID</h4>
        <input
          type="text"
          className="form-control"
          value={id} onChange={changeId}
          style={{
            width: "20%",
            marginLeft: 15,
            padding: "7px",
            borderRadius: 5,
            border: "1px solid #EDEDED",
            marginBottom: "15px",
            height: 40
          }}
        />

        {/* Title Input */}
        <h4>ຂໍ້ມູນສິນຄ້າ</h4>
        <div className='flex mt-5 ml-6'>
        <label style={{ fontSize: 15, color: "grey", marginLeft: 15 }}>
          ຊື້ສິນຄ້າ
        </label>
        <input
          type="text"
          className="form-control"
          value={name} onChange={changeName}
          style={{
            width: "35%",
            marginLeft: 15,
            padding: "7px",
            borderRadius: 5,
            height: 40,
            border: "1px solid #EDEDED",
            marginBottom: "15px",
          }}
        />

        {/* Description Input */}
        <label style={{ fontSize: 15, color: "grey", marginLeft: 15 }}>
          ລາຄາ
        </label>
        <textarea
          className="form-control"
          value={price} onChange={changePrice}
          style={{
            width: "35%",
            marginLeft: 15,
            padding: "10px",
            borderRadius: 5,
            border: "1px solid #EDEDED",
            height: "40px",
            marginBottom: "20px",
          }}
        />
        </div>

        <div className='flex mt-5'>
        <label style={{ fontSize: 15, color: "grey", marginLeft: 15 }}>
          ຈຳນວນແຜງ
        </label>
        <input
          type="text"
          className="form-control"
          value={quantity} onChange={changeQuantity}
          style={{
            width: "35%",
            marginLeft: 15,
            padding: "7px",
            borderRadius: 5,
            height: 40,
            border: "1px solid #EDEDED",
            marginBottom: "15px",
          }}
        />

        {/* Description Input */}
        <label style={{ fontSize: 15, color: "grey", marginLeft: 15 }}>
          ປະເພດ
        </label>
        <textarea
          className="form-control"
          value={category} onChange={changeCategory}
          style={{
            width: "15%",
            marginLeft: 15,
            padding: "10px",
            borderRadius: 5,
            border: "1px solid #EDEDED",
            height: "40px",
            marginBottom: "20px",
          }}
        />
        </div>

        {/* Buttons */}
        <div className="flex justify-end">
          <button
            style={{
              borderRadius: 10,
              padding: "10px 18px",
              color: "#007AFF",
              border: "1px solid #007AFF",
              marginRight: "20px",
            }}
          >
            <Link to="/manage-product" style={{ color: "#007AFF" }}>
              ຍົກເລີກ
            </Link>
          </button>

          <Link to="/manage-product">
          <button
            style={{
              backgroundColor: "#154391",
              borderRadius: 10,
              padding: "10px 18px",
              color: "white",
            }}
            onClick={() =>
              Swal.fire({
                title: "ທ່ານໄດ້ເພີ່ມຂໍ້ມູນສຳເລັດແລ້ວ",
                icon: "success",

              })
            }
          >
            ບັນທຶກ
          </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}
