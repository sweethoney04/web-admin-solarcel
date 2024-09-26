import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Service() {
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
  return (
    <div>
      <div
        class="flex w-full justify-between ml-3 mr-3 mt-5"
        style={{ fontSize: 26, fontFamily: "Noto Sans Lao" }}
      >
        <div style={{ color: "#154391" }}>ການບໍລິການ</div>
        <div style={{ marginRight: 55 }}>
          <button
            style={{
              backgroundColor: "#154391",
              padding: "8px 20px",
              borderRadius: 10,
              color: "white",
              textAlign: "center",
            }}
          >
            <Link to="/add-service">
              <h4>+ ເພີ່ມ</h4>
            </Link>
          </button>
        </div>
      </div>

      <div
        style={{ fontFamily: "Noto Sans Lao" }}
        class="flex justify-between ml-3 mr-2 mt-5"
      >
        <div
          style={{
            width: 250,
            height: 280,
            borderWidth: 1,
            borderRadius: "10px",
            backgroundColor: "white",
            marginLeft: 35,
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <div className="flex justify-center mt-2">
            <div>
              <img
                style={{ width: 171, height: 164 }}
                src={require("../assets/img/pic6.png")}
              />
            </div>
          </div>
          <p style={{ marginLeft: 38, marginTop: 10 }}>ບໍລິການຕິດຕັ້ງເຖິງທີ່</p>

          <div style={{ marginTop: 25 }} class="flex justify-end">
            <div>
              <button
                style={{
                  backgroundColor: "#154391",
                  padding: "8px 20px",
                  borderRadius: 10,
                  color: "white",
                  textAlign: "center",
                  marginRight: 7,
                }}
              >
                Edit
              </button>
            </div>
            <div>
              <button
                style={{
                  backgroundColor: "#EA2A2D",
                  padding: "8px 17px",
                  borderRadius: 10,
                  color: "white",
                  textAlign: "center",
                  marginRight: 10,
                }}
                onClick={handleConfirmClick}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            width: 250,
            height: 280,
            borderWidth: 1,
            textAlign: "left",
            borderRadius: "10px",
            backgroundColor: "white",
          }}
        >
          <div className="flex justify-center mt-2">
            <img
              style={{ width: 206, height: 164 }}
              src={require("../assets/img/pic5.png")}
            />
          </div>
          <p style={{ marginLeft: 10, marginTop: 10 }}>
            ປະຢັດຄ່າໄຟຟ້າຂອງທ່ານໃນຮູບແບບງ່າຍໆ
          </p>
          <div style={{ marginTop: 25 }} class="flex justify-end">
            <div>
              <button
                style={{
                  backgroundColor: "#154391",
                  padding: "8px 20px",
                  borderRadius: 10,
                  color: "white",
                  textAlign: "center",
                  marginRight: 7,
                }}
              >
                Edit
              </button>
            </div>
            <div>
              <button
                style={{
                  backgroundColor: "#EA2A2D",
                  padding: "8px 17px",
                  borderRadius: 10,
                  color: "white",
                  textAlign: "center",
                  marginRight: 10,
                }}
                onClick={handleConfirmClick}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            width: 250,
            height: 280,
            borderWidth: 1,
            textAlign: "center",
            borderRadius: "10px",
            backgroundColor: "white",
            marginRight: 35,
          }}
        >
          <div className="flex justify-center mt-2">
            <img
              style={{ width: 171, height: 164 }}
              src={require("../assets/img/pic4.png")}
            />
          </div>
          <p>ລະບົບອອັຟກິດ 3ກິໂລວັດ</p>
          <div style={{ marginTop: 35 }} class="flex justify-end">
            <div>
              <button
                style={{
                  backgroundColor: "#154391",
                  padding: "8px 20px",
                  borderRadius: 10,
                  color: "white",
                  textAlign: "center",
                  marginRight: 7,
                }}
              >
                Edit
              </button>
            </div>
            <div>
              <button
                style={{
                  backgroundColor: "#EA2A2D",
                  padding: "8px 17px",
                  borderRadius: 10,
                  color: "white",
                  textAlign: "center",
                  marginRight: 10,
                }}
                onClick={handleConfirmClick}
              >
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* colum 2 */}
      </div>
      <div
        style={{ fontFamily: "Noto Sans Lao" }}
        class="flex justify-between ml-3 mr-2 mt-5"
      >
        <div
          style={{
            width: 250,
            height: 280,
            borderWidth: 1,
            textAlign: "center",
            borderRadius: "10px",
            backgroundColor: "white",
            marginLeft: 35,
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <div className="flex justify-center mt-2">
            <img
              style={{ width: 171, height: 164 }}
              src={require("../assets/img/pic3.png")}
            />
          </div>
          <p style={{ marginLeft: 37 }}>ລະບົບໂຊລາປ້ຳ</p>
          <div style={{ marginTop: 35 }} class="flex justify-end">
            <div>
              <button
                style={{
                  backgroundColor: "#154391",
                  padding: "8px 20px",
                  borderRadius: 10,
                  color: "white",
                  textAlign: "center",
                  marginRight: 7,
                }}
              >
                Edit
              </button>
            </div>
            <div>
              <button
                style={{
                  backgroundColor: "#EA2A2D",
                  padding: "8px 17px",
                  borderRadius: 10,
                  color: "white",
                  textAlign: "center",
                  marginRight: 10,
                }}
                onClick={handleConfirmClick}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            width: 250,
            height: 280,
            borderWidth: 1,
            textAlign: "left",
            borderRadius: "10px",
            backgroundColor: "white",
          }}
        >
          <div className="flex justify-center mt-2">
            <img
              style={{ width: 206, height: 164 }}
              src={require("../assets/img/pic2.png")}
            />
          </div>
          <p style={{ marginLeft: 5, marginTop: 10 }}>
            ໃຊ້ພະລັງງານແສງຈາເວັນຈະຄຸ່ມຄ່າຕໍ່ການລົງທຶນທີ່ສຸດ
          </p>
          <div style={{ marginTop: 0 }} class="flex justify-end">
            <div>
              <button
                style={{
                  backgroundColor: "#154391",
                  padding: "8px 20px",
                  borderRadius: 10,
                  color: "white",
                  textAlign: "center",
                  marginRight: 7,
                }}
              >
                Edit
              </button>
            </div>
            <div>
              <button
                style={{
                  backgroundColor: "#EA2A2D",
                  padding: "8px 17px",
                  borderRadius: 10,
                  color: "white",
                  textAlign: "center",
                  marginRight: 10,
                }}
                onClick={handleConfirmClick}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            width: 250,
            height: 280,
            borderWidth: 1,
            textAlign: "left",
            borderRadius: "10px",
            backgroundColor: "white",
            marginRight: 35,
          }}
        >
          <div className="flex justify-center mt-2">
            <img
              style={{ width: 171, height: 164 }}
              src={require("../assets/img/pic1.png")}
            />
          </div>
          <p style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
            {" "}
            ໂຊລາປ້ຳເຫມາະແກ່ຊາວກະເສດຕະກອນເຮັດໄຮ່ເຮັດສວນເຮັດນາ
          </p>
          <div style={{ marginTop: 0 }} class="flex justify-end">
            <div>
              <button
                style={{
                  backgroundColor: "#154391",
                  padding: "8px 20px",
                  borderRadius: 10,
                  color: "white",
                  textAlign: "center",
                  marginRight: 7,
                }}
              >
                Edit
              </button>
            </div>
            <div>
              <button
                style={{
                  backgroundColor: "#EA2A2D",
                  padding: "8px 17px",
                  borderRadius: 10,
                  color: "white",
                  textAlign: "center",
                  marginRight: 10,
                }}
                onClick={handleConfirmClick}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
