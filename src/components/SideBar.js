import React, { useState } from 'react';
import { Link, NavLink, } from "react-router-dom";

export default function SideBar({ children }) {
  
  const gradientStyle = {
    background: "linear-gradient(to bottom, #143B8E, #01143F)",
    height: "100vh",
    width: "50vh",
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    color: "white",
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
          <div style={{ marginBottom: 27, }}>
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
            marginLeft: 80,
            marginTop: 25,
          }}
        >
          <div style={{ marginBottom: 27 }}>
            <div className="flex justify-start ...">
              <div>
                <Link to="/">
                  <img src={require("../assets/img/Vector1.png")} />
                </Link>
              </div>
              <div className="cursor-pointer ml-4">
                <Link to="/">
                  <h5>Dashboard</h5>
                </Link>
              </div>
            </div>
          </div>
        
        {/* ການບໍລິການ */}
          <div style={{ marginBottom: 27 }}>
            <div className="flex justify-start ...">
              
              <div>
                <Link to="/">
                  <img src={require("../assets/img/carbon_service-id.png")} />
                </Link>
              </div>
              <div className="ml-2">
                <Link to="/service">
                  <h5>ການບໍລິການ</h5>
                </Link>
              </div>
            </div>
          </div>

        {/* ຈັດການຂໍ້ມູນສິນຄ້າ */}
          <div style={{ marginBottom: 27 }}>
            <div className="flex justify-start ...">
              <div>
                <Link to="/manage-product">
                  <img src={require("../assets/img/Untitled-2.png")} />
                </Link>
              </div>
              <div className="ml-2">
                <Link to="/manage-product">
                  <h5>ຈັດການຂໍ້ມູນສິນຄ້າ</h5>
                </Link>
              </div>
            </div>
          </div>
        
        {/* ຂໍ້ມູນປະເພດສິນຄ້າ */}
          <div style={{ marginBottom: 27 }}>
            <div className="flex justify-start ...">
              <div>
                <Link to="/product-detail">
                  <img
                    src={require("../assets/img/simple-icons_homeadvisor.png")}
                  />
                </Link>
              </div>
              <div className="ml-3">
                <Link to="/product">
                  <h5>ຂໍ້ມູນປະເພດສິນຄ້າ</h5>
                </Link>
              </div>
            </div>
          </div>
        
        {/* ຈັດການຂ່າວ */}
          <div style={{ marginBottom: 27 }}>
            <div className="flex justify-start ...">
              <div>
                <Link to="/">
                  <img src={require("../assets/img/Untitled-1.png")} />
                </Link>
              </div>
              <div className="ml-3">
                <Link to="/manage-news">
                  <h5>ຈັດການຂ່າວ</h5>
                </Link>
              </div>
            </div>
          </div>
        
        {/* ຈັດການຜູ້ໃຊ້ */}
          <div style={{ marginBottom: 27 }}>
            <div className="flex justify-start ...">
              <div>
                <Link to="/">
                  <img src={require("../assets/img/Untitled.png")} />
                </Link>
              </div>
              <div className="ml-3">
                <Link to="/manage-user">
                  <h5>ຈັດການຜູ້ໃຊ້</h5>
                </Link>
              </div>
            </div>
          </div>

          
        </div>
        <div className="ml-6">
        <div style={{ marginBottom: 35, marginTop: 240, marginLeft: 20, }}>
            <div className="flex justify-start ...">
              <div>
                <Link to="/">
                  <img src={require("../assets/img/logout.png")} />
                </Link>
              </div>
              <div className="ml-3">
                <Link to="/logout">
                  <h5>Log out</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          {children}
        </div>
      </div>
    </>
  );
}
