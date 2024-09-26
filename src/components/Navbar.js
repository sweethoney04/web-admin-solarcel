import React from "react";

export default function Navbar({ children }) {
  return (
    <>
      <div
        className="w-full h-20 mt-3 ml-3 mr-3"
        style={{ borderRadius: "5px", backgroundColor: "#F0F0F0", marginRight: 15, }}
      >
        <div className="flex ...">
          <div
            style={{ marginTop: 20, marginLeft: 15 }}
            className="flex-none w-14 h-14"
          >
            <img style={{ width: 40 }} src={require("../assets/img/33.png")} />
            <div
              style={{
                borderLeft: "1px solid",
                height: "80px",
                marginTop: -60,
                marginLeft: 60,
                color: "#D9D9D9",
              }}
            >

            </div>
          </div>
          <div className="grow h-14 ...">
            <div className="pt-2 relative mx-auto text-gray-600">
              <label for="simple-search" className="sr-only">
                Search
              </label>
              <input
                style={{ width: "70%", marginTop: 4, marginLeft: 40 }}
                className="border-2 border-white-300 bg-white h-14 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
              />
            </div>
          </div>
          <div style={{ marginRight: 10 }} className="flex-none w-14 h-14">
            <img
              style={{ width: 55, marginTop: 13 }}
              src={require("../assets/img/user1.png")}
            />
          </div>
          <div
            style={{ marginTop: 16, marginRight: 70 }}
            className="flex-none w-14 h-14 mr-10px"
          >
            <h5 style={{ fontSize: 20 }}>User</h5>
            <p style={{ fontSize: 12, color: "#D9D9D9" }}>admin</p>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
}
