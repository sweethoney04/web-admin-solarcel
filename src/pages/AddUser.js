import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function AddUser() {
  const inputRef = useRef(null);
  const [image, setImage] = useState(" ");

  const handleImageClick = (event) => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.file[0]);
  };
  return (
    <>
      <div
        className="w-full flex justify-between ml-3 mr-3 mt-5"
        style={{ fontSize: 26, fontFamily: "Noto Sans Lao" }}
      >
        <div>
          <h3 style={{ color: "#154391" }}>ຂໍ້ມູນຜູ້ໃຊ້</h3>
        </div>
        <div>
          <p style={{ marginRight: 20 }}>ID</p>
        </div>
      </div>
      <div
        style={{
          boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
          borderRadius: "5px",
          width: "99%",
          marginTop: 15,
          marginLeft: 15,
          marginRight: 15,
          fontFamily: "Noto Sans Lao",
          padding: "20px",
        }}
      >
        <div className="flex flex-col ml-5">
          <div>
            <h4
              style={{
                marginLeft: 25,
                marginTop: 20,
                color: "#154391",
                fontSize: 24,
              }}
            >
              ຮູບພາບ
            </h4>
          </div>
          <div className="flex">
          <div className="flex items-center">
          <form
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
              backgroundColor: "#EDEDED",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10
            }}
            onClick={() => document.querySelector(".input-field").click()}
          >
            <input
              type="file"
              accept="image/*"
              className="input-field"
              style={{ display: "none" }}
            />
            {/* {image ? (
              <img src={imagel} alt="Selected" />
            ) : (
              <p style={{ color: "grey" }}>ເລືອກຮູບພາບ</p>
            )} */}
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
         
          </div>
          <div>
            <h4 style={{ marginLeft: 45, marginTop: 5 }}>User</h4>
          </div>
          <div>
            <h4
              style={{
                marginTop: 25,
                marginLeft: 35,
                fontSize: 24,
                color: "#154391",
              }}
            >
              ຂໍ້ມູນ
            </h4>
          </div>
        </div>

        {/* Adjust input fields to vertical alignment with outlined styles */}
        <div className="grid grid-cols-2 gap-5 mt-3 ml-5 mr-5">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "15px",
            }}
          >
            <label style={{ fontSize: 15, color: "grey" }}>First Name</label>
            <input
              style={{
                width: "100%",
                height: 40,
                border: "1px solid #EDEDED",
                borderRadius: 5,
                paddingLeft: 10,
              }}
              type="text"
              className="form-control"
              id="first-name"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "15px",
            }}
          >
            <label style={{ fontSize: 15, color: "grey" }}>Last Name</label>
            <input
              style={{
                width: "100%",
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

        <div className="grid grid-cols-2 gap-5 mt-3 ml-5 mr-5">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "15px",
            }}
          >
            <label style={{ fontSize: 15, color: "grey" }}>Email</label>
            <input
              style={{
                width: "100%",
                height: 40,
                border: "1px solid #EDEDED",
                borderRadius: 5,
                paddingLeft: 10,
              }}
              type="email"
              className="form-control"
              id="email"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "15px",
            }}
          >
            <label style={{ fontSize: 15, color: "grey" }}>Password</label>
            <input
              style={{
                width: "100%",
                height: 40,
                border: "1px solid #EDEDED",
                borderRadius: 5,
                paddingLeft: 10,
              }}
              type="password"
              className="form-control"
              id="password"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-3 ml-5 mr-5">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "15px",
            }}
          >
            <label style={{ fontSize: 15, color: "grey" }}>Phone Number</label>
            <input
              style={{
                width: "100%",
                height: 40,
                border: "1px solid #EDEDED",
                borderRadius: 5,
                paddingLeft: 10,
              }}
              type="text"
              className="form-control"
              id="phone-number"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "15px",
            }}
          >
            <label style={{ fontSize: 15, color: "grey" }}>Address</label>
            <input
              style={{
                width: "100%",
                height: 40,
                border: "1px solid #EDEDED",
                borderRadius: 5,
                paddingLeft: 10,
              }}
              type="text"
              className="form-control"
              id="address"
            />
          </div>
        </div>

        {/* Buttons */}
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
              <Link to="/manage-user">
                <h4>ຍົກເລີກ</h4>
              </Link>
            </button>
          </div>
          <div>
          <Link to="/manage-user">
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
    </>
  );
}
