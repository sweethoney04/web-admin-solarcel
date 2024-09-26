import React, { useState } from "react";
import imagel from "../assets/img/imagel.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddService() {
  const [image, setImage] = useState(null);

  return (
    <div
      className="w-full flex flex-col"
      style={{ fontSize: 26, fontFamily: "Noto Sans Lao", padding: "20px" }}
    >
      {/* Title */}
      <h4 style={{ color: "#154391" }}>ເພີ່ມການບໍລິການ</h4>

      {/* Main Container */}
      <div
        style={{
          boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
          borderRadius: "5px",
          width: "100%",
          padding: "20px",
          marginTop: 15,
        }}
      >
        {/* Image Upload Section */}
        <h4 style={{ color: "#154391", marginBottom: "10px" }}>
          ຮູບພາບ/ວິດີໂອ
        </h4>
        <div className="flex items-center">
          <form
            style={{
              width: 350,
              height: 200,
              borderRadius: 5,
              boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
              backgroundColor: "#EDEDED",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => document.querySelector(".input-field").click()}
          >
            <input
              type="file"
              accept="image/*"
              className="input-field"
              style={{ display: "none" }}
            />
            {image ? (
              <img src={imagel} alt="Selected" />
            ) : (
              <p style={{ color: "grey" }}>ເລືອກຮູບພາບ</p>
            )}
          </form>

          <button
            style={{
              backgroundColor: "#154391",
              borderRadius: 10,
              padding: "10px 18px",
              color: "white",
              marginLeft: 20,
            }}
          >
            ອັບໂຫຼດ
          </button>
        </div>

        {/* Information Section */}
        <h4 style={{ color: "#154391", marginTop: "20px" }}>ຂໍ້ມູນຂ່າວ</h4>

        {/* Title Input */}
        <label style={{ fontSize: 15, color: "grey", marginLeft: 15 }}>
          ຫົວຂໍ້
        </label>
        <input
          type="text"
          className="form-control"
          style={{
            width: "97%",
            marginLeft: 15,
            padding: "10px",
            borderRadius: 5,
            border: "1px solid #EDEDED",
            marginBottom: "20px",
          }}
        />

        {/* Description Input */}
        <label style={{ fontSize: 15, color: "grey", marginLeft: 15 }}>
          ເນື້ອໃນຂ່າວ
        </label>
        <textarea
          className="form-control"
          style={{
            width: "97%",
            marginLeft: 15,
            padding: "10px",
            borderRadius: 5,
            border: "1px solid #EDEDED",
            height: "140px",
            marginBottom: "20px",
          }}
        />

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
            <Link to="/service" style={{ color: "#007AFF" }}>
              ຍົກເລີກ
            </Link>
          </button>

          <button
            style={{
              backgroundColor: "#154391",
              borderRadius: 10,
              padding: "10px 18px",
              color: "white",
            }}
            onClick={() =>
              Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire("Deleted!", "Your file has been deleted.", "success");
                }
              })
            }
          >
            ບັນທຶກ
          </button>
        </div>
      </div>
    </div>
  );
}
