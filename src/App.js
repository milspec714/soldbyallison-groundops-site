import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        Procurement & Supply Support
        <br />
        for Government & Public Safety Agencies
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "30px" }}>
        Ground Ops Logistics & Services LLC provides reliable procurement support,
        equipment sourcing, and supply coordination.
      </p>

      <a
        href="mailto:armando@groundopsls.com"
        style={{
          display: "inline-block",
          padding: "12px 20px",
          background: "#0f172a",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px",
        }}
      >
        Contact Us
      </a>
    </div>
  );
}