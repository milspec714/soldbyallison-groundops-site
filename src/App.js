import React from "react";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        color: "#0f172a",
      }}
    >
      <header
        style={{
          backgroundColor: "#0f172a",
          color: "white",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <div>
          <div style={{ fontSize: "22px", fontWeight: "700" }}>Ground Ops</div>
          <div style={{ fontSize: "12px", opacity: 0.85 }}>
            Logistics & Services LLC
          </div>
        </div>

        <a
          href="mailto:armando@groundopsls.com"
          style={{
            backgroundColor: "white",
            color: "#0f172a",
            padding: "10px 16px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Contact Us
        </a>
      </header>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" }}>
        <section
          style={{
            backgroundColor: "white",
            borderRadius: "16px",
            padding: "48px 32px",
            boxShadow: "0 8px 24px rgba(15, 23, 42, 0.08)",
            marginBottom: "32px",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#475569",
              marginBottom: "14px",
            }}
          >
            Government Procurement • Supply Coordination • Operational Support
          </p>

          <h1
            style={{
              fontSize: "46px",
              lineHeight: "1.1",
              margin: "0 0 20px 0",
              maxWidth: "800px",
            }}
          >
            Reliable procurement and supply support for public agencies.
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#334155",
              maxWidth: "760px",
              marginBottom: "28px",
            }}
          >
            Ground Ops Logistics & Services LLC supports government and public
            safety organizations with sourcing assistance, supply coordination,
            and responsive operational support.
          </p>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="mailto:armando@groundopsls.com"
              style={{
                display: "inline-block",
                padding: "14px 22px",
                backgroundColor: "#0f172a",
                color: "white",
                textDecoration: "none",
                borderRadius: "10px",
                fontWeight: "600",
              }}
            >
              Email Ground Ops
            </a>

            <a
              href="tel:7148754553"
              style={{
                display: "inline-block",
                padding: "14px 22px",
                backgroundColor: "#e2e8f0",
                color: "#0f172a",
                textDecoration: "none",
                borderRadius: "10px",
                fontWeight: "600",
              }}
            >
              Call 714-875-4553
            </a>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          {[
            {
              title: "Procurement Support",
              text: "Responsive sourcing assistance for agency purchasing and operational needs.",
            },
            {
              title: "Supply Coordination",
              text: "Help coordinating materials, equipment, and vendor communication.",
            },
            {
              title: "Public Safety Focus",
              text: "Support tailored to law enforcement, municipalities, and public sector buyers.",
            },
            {
              title: "Quick Communication",
              text: "Fast response times and direct communication when timing matters.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                backgroundColor: "white",
                borderRadius: "14px",
                padding: "24px",
                boxShadow: "0 6px 18px rgba(15, 23, 42, 0.06)",
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: "12px", fontSize: "20px" }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, color: "#475569", lineHeight: "1.6" }}>
                {item.text}
              </p>
            </div>
          ))}
        </section>

        <section
          style={{
            backgroundColor: "#0f172a",
            color: "white",
            borderRadius: "16px",
            padding: "36px 32px",
          }}
        >
          <h2 style={{ marginTop: 0, fontSize: "30px", marginBottom: "14px" }}>
            Ready to talk?
          </h2>
          <p
            style={{
              marginTop: 0,
              marginBottom: "20px",
              color: "#cbd5e1",
              lineHeight: "1.6",
              maxWidth: "700px",
            }}
          >
            Contact Ground Ops Logistics & Services LLC to discuss procurement,
            supply, or operational support needs.
          </p>

          <a
            href="mailto:armando@groundopsls.com"
            style={{
              display: "inline-block",
              padding: "14px 22px",
              backgroundColor: "white",
              color: "#0f172a",
              textDecoration: "none",
              borderRadius: "10px",
              fontWeight: "700",
            }}
          >
            armando@groundopsls.com
          </a>
        </section>
      </main>
    </div>
  );
}
