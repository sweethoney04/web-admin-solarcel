import React from "react";
import Donut from "../components/Donut";
import Wavech from "../components/Wavech";
import DataTable from "react-data-table-component";



export default function Dashboard() {
  const columns = [
    {
      name: "No",
      selector: (row) => row.sort,
    },
    {
      name: "IP address",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.category,
    },
    {
      name: "Social",
      selector: (row) => row.name,
    },
    {
      name: "View",
      selector: (row) => row.price,
    },
    {
      name: "Data",
      selector: (row) => row.quantity,
    },
  ];
  const data = [
    {
      sort: 1,
      id: "192.0.2.1",
      category: "Nitnoy",
      name: "Tiktok",
      price: "10",
      quantity: "19/08/2024",
    },
    {
      sort: 2,
      id: "192.0.2.1",
      category: "Nitnoy",
      name: "Tiktok",
      price: "10",
      quantity: "19/08/2024",
    },
  ];
  return (
    <div>
      <div
        className="flex"
        style={{
          boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
          borderRadius: "10px",
          width: "98%",
          marginTop: 15,
          marginLeft: 15,
          marginRight: 15,
          padding: "20px",
          height: 170,
        }}
      >
        <h4 style={{ fontSize: 22, fontWeight: "bold" }}>Visitors</h4>
        <div
          style={{
            backgroundColor: "#F2F2F7",
            marginTop: 45,
            width: "90%",
            paddingLeft: 25,
            borderRadius: 10,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-around", marginTop: 18 }}>
            {/* TikTok Section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "left",
              }}
            >
              <a href="https://www.tiktok.com/explore">
              <img
                src={require("../assets/img/tiktok logo 2.png")}
                alt="Tiktok"
                style={{ width: 50, height: 50, marginRight: 10 }}
              />
              </a>
              <div>
                <p style={{ fontSize: 16, margin: 0 }}>
                  Tiktok
                </p>
                <img src={require("../assets/img/11.png")} />
                <p style={{ fontSize: 14, margin: 0 }}>1.000K</p>
              </div>
            </div>

            {/* Facebook Section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "left",
              }}
            >
              <a href="https://www.facebook.com">
              <img
                src={require("../assets/img/OIP (2).png")}
                alt="Facebook"
                style={{ width: 50, height: 50, marginRight: 10 }}
              />
              </a>
              <div>
                <p style={{ fontSize: 16, margin: 0 }}>
                  Facebook
                </p>
                <img src={require("../assets/img/11.png")} />
                <p style={{ fontSize: 14, margin: 0 }}>
                  50.000k
                </p>
              </div>
            </div>

            {/* Google Section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "left",
              }}
            >
              <a href="https://www.google.com/?client=safari">
              <img
                src={require("../assets/img/OIP (3).png")}
                alt="Google"
                style={{ width: 50, height: 50, marginRight: 10 }}
              />
              </a>
              <div>
                <p style={{ fontSize: 16, margin: 0 }}>
                  Google
                </p>
                <img src={require("../assets/img/11.png")} />
                <p style={{ fontSize: 14, margin: 0 }}>
                  50.000k
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div
          style={{
            boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
            borderRadius: "10px",
            width: 380,
            marginTop: 15,
            marginLeft: 15,
            marginRight: 15,
            padding: "20px",
            height: 320,
          }}
        >
          <h4 style={{ fontSize: 20, fontWeight: "bold" }}>Top browser</h4>
          <div
            style={{
              width: "60%",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Donut />
          </div>
        </div>
        <div
          style={{
            boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
            borderRadius: "10px",
            width: 750,
            marginTop: 15,
            marginLeft: 15,
            marginRight: 15,
            fontFamily: "Noto Sans Lao",
            padding: "20px",
            height: 320,
          }}
        >
          <Wavech />
        </div>
      </div>
      <div
        className=""
        style={{
          boxShadow: "0 4px 8px rgba(192, 183, 188, 0.8)",
          borderRadius: "10px",
          width: "98%",
          marginTop: 15,
          marginLeft: 15,
          marginRight: 15,
          padding: "20px",
          height: 225,
        }}
      >
        <h4 style={{ fontSize: 20, fontWeight: "bold" }}>
          Source of today's visitors
        </h4>
        <DataTable
          style={{ fontSize: 12 }}
          columns={columns}
          data={data}
        ></DataTable>
      </div>
    </div>
  );
}
