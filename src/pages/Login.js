import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex" style={{ height: "100vh", alignItems: "center" }}>
      {/* Left section with logo */}
      <div
        style={{
          width: "60%",
   
          display: "flex",
          justifyContent: "left",
          height: "100vh",
        }}
      >
        <img
          src={require("../assets/img/logpic.png")}
          alt="SES Logo"
          style={{ maxWidth: "80%" }}
        />
      </div>

      {/* Right section with login form */}
      <div
        style={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <h2 style={{fontSize: 50}}>Log in</h2>
        </div>

        <div style={{ width: "50%", minWidth: 300 }}>
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 15, color: "grey" }}>Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Email"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #EDEDED",
                marginTop: 5,
              }}
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={{ fontSize: 15, color: "grey" }}>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #EDEDED",
                marginTop: 5,
              }}
            />
          </div>

          <div style={{ textAlign: "right", marginBottom: 10 }}>
            <Link to="/forgot-password" style={{ color: "#5294DE" }}>
              Forgot password?
            </Link>
          </div>

          <button
            style={{
              width: "100%",
              backgroundColor: "#5294DE",
              borderRadius: "5px",
              padding: "10px",
              color: "white",
              fontWeight: "bold",
              border: "none",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Log in
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
