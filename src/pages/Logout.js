import React from 'react'
import { Link, } from "react-router-dom";

export default function Logout() {
  return (
    <div>
      <button style={{width: 150, }}>
        <Link to="/login">
          go to login
        </Link>
      </button>
    </div>
  )
}
