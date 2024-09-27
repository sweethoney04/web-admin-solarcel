import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function SideBar({ children }) {
  const [activeLink, setActiveLink] = useState("/");

  const gradientStyle = {
    background: "linear-gradient(to bottom, #143B8E, #01143F)",
    height: "100vh",
    width: "50vh",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    color: "white",
  };
  const linkStyle = {
    fontSize: "20px",
    fontFamily: "Noto Sans Lao",
    marginLeft: 80,
    marginTop: 25,
    padding: "12px 20px",
    display: "flex",
    alignItems: "center",
    transition: "background 0.3s ease-in-out",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: "#FFFFFF",
    color: "#143B8E",
  };

  const iconStyle = {
    marginRight: "10px",
  };
  return (
    <>
      <div style={gradientStyle}>
        {/* logo */}
        <div className="flex justify-center ...">
          <div
            className="ml-6"
            style={{
              fontSize: "20px",
              fontFamily: "Noto Sans Lao",
              marginTop: 40,
              marginRight: 30,
            }}
          >
            <div style={{ marginBottom: 27 }}>
              <img src={require("../assets/img/itlogo.png")} />
            </div>
          </div>
        </div>

        {/* bar link */}
        {/* //Dashboard */}
        <div
          className="ml-6"
          style={{
            fontSize: "20px",
            fontFamily: "Noto Sans Lao",
            marginLeft: 0,
            marginTop: 25,
          }}
        >
          <div style={{ marginBottom: 27 }}>
            <Link
              to="/"
              style={activeLink === "/" ? activeLinkStyle : linkStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  activeLink === "/" ? "#ffffff" : "transparent")
              }
              onClick={() => setActiveLink("/")}
            >
              <img
                style={{ marginRight: 15 }}
                src={require("../assets/img/Vector1.png")}
              />
              <a>Dashboard</a>
            </Link>
          </div>

          {/* ການບໍລິການ */}
          <div style={{ marginBottom: 27 }}>
            <Link
              to="/service"
              style={activeLink === "/service" ? activeLinkStyle : linkStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  activeLink === "/service" ? "#ffffff" : "transparent")
              }
              onClick={() => setActiveLink("/service")}
            >
              <img
                src={require("../assets/img/carbon_service-id.png")}
                style={iconStyle}
                alt="Service"
              />
              <a>ການບໍລິການ</a>
            </Link>
          </div>
          {/* ຈັດການຂໍ້ມູນສິນຄ້າ */}
          <div style={{ marginBottom: 27 }}>
            <Link
              to="/manage-product"
              style={
                activeLink === "/manage-product" ? activeLinkStyle : linkStyle
              }
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  activeLink === "/manage-product" ? "#ffffff" : "transparent")
              }
              onClick={() => setActiveLink("/manage-product")}
            >
              <img
                src={require("../assets/img/Untitled-2.png")}
                style={iconStyle}
                alt="Manage Product"
              />
              <a>ຈັດການຂໍ້ມູນສິນຄ້າ</a>
            </Link>
          </div>

          {/* ຂໍ້ມູນປະເພດສິນຄ້າ */}
          <div style={{ marginBottom: 27 }}>
            <Link
              to="/product"
              style={activeLink === "/product" ? activeLinkStyle : linkStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  activeLink === "/product" ? "#ffffff" : "transparent")
              }
              onClick={() => setActiveLink("/product")}
            >
              <img
                src={require("../assets/img/simple-icons_homeadvisor.png")}
                style={iconStyle}
                alt="Product Details"
              />
              <a>ຂໍ້ມູນປະເພດສິນຄ້າ</a>
            </Link>
          </div>

          {/* ຈັດການຂ່າວ */}
          <div style={{ marginBottom: 27 }}>
            <Link
              to="/manage-news"
              style={
                activeLink === "/manage-news" ? activeLinkStyle : linkStyle
              }
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  activeLink === "/product" ? "#ffffff" : "transparent")
              }
              onClick={() => setActiveLink("/manage-news")}
            >
              <img
                src={require("../assets/img/Untitled-1.png")}
                style={iconStyle}
                alt="Product Details"
              />
              <a>ຈັດການຂ່າວ</a>
            </Link>
          </div>

          {/* ຈັດການຜູ້ໃຊ້ */}
          <div style={{ marginBottom: 27 }}>
            <Link
              to="manage-user"
              style={
                activeLink === "/manage-user" ? activeLinkStyle : linkStyle
              }
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  activeLink === "/product" ? "#ffffff" : "transparent")
              }
              onClick={() => setActiveLink("/manage-user")}
            >
              <img
                src={require("../assets/img/Untitled.png")}
                style={iconStyle}
                alt="Product Details"
              />
              <span>ຈັດການຜູ້ໃຊ້</span>
            </Link>
          </div>
        </div>
        <div className="ml-6">
          <div style={{ marginBottom: 35, marginTop: 80, marginLeft: 20 }}>
            <div className="flex justify-start ...">
              <div>
                <Link to="/">
                  <img src={require("../assets/img/logout.png")} />
                </Link>
              </div>
              <div className="ml-3">
                <Link to="/login">
                  <a href="">Log out</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>{children}</div>
      </div>
    </>
  );
}
