import React from "react";
import logo from "./logo.png";

export default function App() {
  const navLink = {
    color: "rgba(255,255,255,0.92)",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "0.2px",
  };

  const sectionTitle = {
    fontSize: "40px",
    marginBottom: "12px",
    textAlign: "center",
    color: "#0f172a",
    lineHeight: "1.1",
  };

  const sectionText = {
    fontSize: "18px",
    color: "#475569",
    textAlign: "center",
    maxWidth: "860px",
    margin: "0 auto 38px",
    lineHeight: "1.8",
  };

  const cardStyle = {
    backgroundColor: "white",
    border: "1px solid #e2e8f0",
    borderRadius: "22px",
    padding: "30px",
    boxShadow: "0 18px 44px rgba(15, 23, 42, 0.07)",
    textAlign: "center",
  };

  const darkButton = {
    display: "inline-block",
    backgroundColor: "#0f172a",
    color: "white",
    textDecoration: "none",
    padding: "15px 28px",
    borderRadius: "14px",
    fontWeight: "700",
    border: "1px solid #0f172a",
    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.18)",
  };

  const lightButton = {
    display: "inline-block",
    backgroundColor: "white",
    color: "#0f172a",
    textDecoration: "none",
    padding: "15px 28px",
    borderRadius: "14px",
    fontWeight: "700",
    border: "1px solid #cbd5e1",
    boxShadow: "0 12px 28px rgba(15, 23, 42, 0.08)",
  };

  const highlightBox = {
    backgroundColor: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "16px",
    padding: "18px 20px",
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "center",
    minWidth: "200px",
    boxShadow: "0 10px 28px rgba(0,0,0,0.15)",
  };

  const naicsCardStyle = {
    backgroundColor: "white",
    border: "1px solid #e2e8f0",
    borderRadius: "22px",
    padding: "26px 22px",
    boxShadow: "0 16px 40px rgba(15, 23, 42, 0.06)",
    textAlign: "center",
    minWidth: "200px",
    maxWidth: "220px",
  };

  const premiumStripBox = {
    backgroundColor: "white",
    border: "1px solid #e2e8f0",
    borderRadius: "18px",
    padding: "18px 20px",
    boxShadow: "0 14px 34px rgba(15, 23, 42, 0.06)",
    fontWeight: "700",
    color: "#0f172a",
    textAlign: "center",
    minWidth: "180px",
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    border: "1px solid #cbd5e1",
    fontSize: "15px",
    color: "#0f172a",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        color: "#0f172a",
        backgroundColor: "#ffffff",
      }}
    >
      {/* NAVBAR */}
      <div
        style={{
          background: "linear-gradient(90deg, #0b1220 0%, #0f172a 100%)",
          color: "white",
          padding: "18px 22px",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        }}
      >
        <div
          style={{
            maxWidth: "1220px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flexGrow: 1,
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "22px",
                  padding: "10px",
                  boxShadow: "0 20px 52px rgba(0,0,0,0.38)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.12)";
                  e.currentTarget.style.boxShadow =
                    "0 28px 68px rgba(0,0,0,0.48)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 52px rgba(0,0,0,0.38)";
                }}
              >
                <img
                  src={logo}
                  alt="Ground Ops Logo"
                  style={{
                    height: "110px",
                    width: "110px",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>

              <div style={{ lineHeight: "1.02" }}>
                <div
                  style={{
                    fontWeight: "800",
                    fontSize: "40px",
                    letterSpacing: "0.3px",
                  }}
                >
                  Ground Ops
                </div>
                <div
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    opacity: 0.95,
                    letterSpacing: "0.4px",
                  }}
                >
                  Logistics & Services LLC
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="#quote" style={darkButton}>
                Request a Quote
              </a>
              <a href="#contact" style={lightButton}>
                Contact Us
              </a>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <a href="#about" style={navLink}>About</a>
            <a href="#services" style={navLink}>Services</a>
            <a href="#capabilities" style={navLink}>Capabilities</a>
            <a href="#military" style={navLink}>Military Experience</a>
            <a href="#naics" style={navLink}>NAICS</a>
            <a href="#quote" style={navLink}>Request a Quote</a>
            <a href="#contact" style={navLink}>Contact</a>
          </div>
        </div>
      </div>

     {/* HERO */}
<section
  style={{
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #334155 100%)",
    color: "white",
    padding: "110px 24px 95px",
  }}
>
  <div
    style={{
      maxWidth: "1220px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "42px",
      alignItems: "center",
    }}
  >
    <div>
      <div
        style={{
          display: "inline-block",
          backgroundColor: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.16)",
          padding: "9px 16px",
          borderRadius: "999px",
          fontSize: "13px",
          fontWeight: "700",
          letterSpacing: "0.4px",
          marginBottom: "24px",
        }}
      >
        GOVERNMENT PROCUREMENT • SUBCONTRACT SUPPORT • OPERATIONAL READINESS
      </div>

      <h1
        style={{
          fontSize: "60px",
          lineHeight: "1.02",
          margin: "0 0 20px",
          maxWidth: "760px",
        }}
      >
        Procurement and logistics support for government and prime contractor needs
      </h1>

      <p
        style={{
          fontSize: "19px",
          lineHeight: "1.8",
          maxWidth: "720px",
          color: "rgba(255,255,255,0.9)",
          marginBottom: "32px",
        }}
      >
        Ground Ops Logistics & Services LLC supports government agencies, prime contractors,
        and commercial partners with responsive procurement assistance, sourcing support,
        logistics coordination, and operational follow-through when timing, accountability,
        and execution matter.
      </p>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <a href="#quote" style={lightButton}>
          Request a Quote
        </a>

        <a href="mailto:contracts@groundopsls.com" style={lightButton}>
          Submit Opportunity
        </a>

        <a
          href="/capability-statement.pdf"
          download
          style={{
            ...darkButton,
            backgroundColor: "transparent",
            border: "1px solid rgba(255,255,255,0.35)",
            color: "white",
            boxShadow: "none",
          }}
        >
          Download Capability Statement
        </a>
      </div>
    </div>

    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.14)",
        borderRadius: "28px",
        padding: "36px",
        boxShadow: "0 24px 55px rgba(0,0,0,0.2)",
      }}
    >
      <h2 style={{ marginTop: 0, fontSize: "30px", marginBottom: "20px" }}>
        Why Ground Ops
      </h2>

      <div style={{ display: "grid", gap: "14px" }}>
        {[
          "Veteran-led, disciplined, mission-focused execution",
          "Support for agency purchasing and subcontract opportunities",
          "Responsive communication and dependable follow-through",
          "Flexible sourcing, coordination, and operational support",
        ].map((item, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "16px",
              padding: "15px 16px",
              lineHeight: "1.6",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* PREMIUM STRIP UNDER HERO */}
      <section
        style={{
          padding: "0 24px 30px",
          marginTop: "-28px",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div style={premiumStripBox}>Veteran-Led</div>
          <div style={premiumStripBox}>Subcontractor Ready</div>
          <div style={premiumStripBox}>Ready to Mobilize</div>
          <div style={premiumStripBox}>Government & Commercial Support</div>
        </div>
      </section>

      {/* ABOUT */}
<section id="about" style={{ padding: "70px 24px 90px", backgroundColor: "#ffffff" }}>
  <div style={{ maxWidth: "980px", margin: "0 auto", textAlign: "center" }}>
    <h2 style={sectionTitle}>About Ground Ops</h2>

    <p style={sectionText}>
      Ground Ops Logistics & Services LLC is a veteran-led company built on discipline,
      accountability, and mission-focused execution. With over 20 years of military
      experience in logistics, ammunition operations, and field support, we understand
      the importance of reliability, organization, and follow-through in high-demand environments.
      <br /><br />
      We support government agencies, contractors, and commercial partners with procurement
      assistance, logistics coordination, and operational support—delivering responsive
      communication and dependable execution when timing and accuracy matter most.
    </p>

    {/* CREDENTIAL STRIP */}
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "center",
        gap: "14px",
        flexWrap: "wrap",
      }}
    >
      <div style={premiumStripBox}>UEI: LZCLFH48AWG5</div>
      <div style={premiumStripBox}>DUNS: 144817747</div>
      <div style={premiumStripBox}>CA Small Business (Micro): 2051256</div>
      <div style={premiumStripBox}>SDVOSB: In Progress</div>
    </div>
  </div>
</section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "90px 24px", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: "1220px", margin: "0 auto" }}>
          <h2 style={sectionTitle}>Services</h2>
          <p style={sectionText}>
            Practical support built for execution, coordination, and reliability.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              {
                title: "Logistics Support",
                desc: "Coordinated logistics assistance, supply movement, asset handling, and operational support for time-sensitive needs.",
              },
              {
                title: "Procurement Assistance",
                desc: "Vendor coordination, sourcing support, and fulfillment readiness to help keep projects and operations moving.",
              },
              {
                title: "Administrative Support",
                desc: "Documentation, reporting, tracking, records management, and organized back-office support.",
              },
              {
                title: "Field Operations",
                desc: "Dependable support in active, fast-paced, and mission-critical environments where responsiveness matters.",
              },
            ].map((item, i) => (
              <div key={i} style={cardStyle}>
                <h3 style={{ marginTop: 0, fontSize: "22px", marginBottom: "12px" }}>
                  {item.title}
                </h3>
                <p style={{ marginBottom: 0, lineHeight: "1.78", color: "#475569" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" style={{ padding: "90px 24px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1220px", margin: "0 auto" }}>
          <h2 style={sectionTitle}>Capabilities</h2>
          <p style={sectionText}>
            Built to support disciplined operations and ready to assist on subcontract and direct support opportunities.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Operational Discipline</h3>
              <p style={{ lineHeight: "1.78", color: "#475569", marginBottom: 0 }}>
                Ground Ops operates with a disciplined, mission-focused approach shaped by
                military experience. We emphasize accountability, structured execution, and
                clear communication to deliver reliable results in high-demand and time-sensitive environments.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Responsive Support</h3>
              <p style={{ lineHeight: "1.78", color: "#475569", marginBottom: 0 }}>
                We prioritize communication, responsiveness, and timely execution
                to support client needs.
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0 }}>Flexible Service</h3>
              <p style={{ lineHeight: "1.78", color: "#475569", marginBottom: 0 }}>
                Positioned to support government, commercial, and subcontracting
                opportunities with a service-first mindset.
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: "36px",
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
              color: "white",
              borderRadius: "26px",
              padding: "36px",
              boxShadow: "0 20px 48px rgba(15, 23, 42, 0.16)",
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: "30px", textAlign: "center" }}>
              Company Highlights
            </h3>

            <div style={{ marginTop: "20px", maxWidth: "720px", marginLeft: "auto", marginRight: "auto" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                  marginBottom: "16px",
                  flexWrap: "wrap",
                }}
              >
                <div style={highlightBox}>Veteran-led business</div>
                <div style={highlightBox}>Military-trained operational discipline</div>
                <div style={highlightBox}>Subcontractor ready</div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <div style={highlightBox}>Government and commercial support</div>
                <div style={highlightBox}>Reliable and responsive service</div>
              </div>
            </div>

            <div style={{ marginTop: "24px", textAlign: "center" }}>
              <a href="/capability-statement.pdf" download style={lightButton}>
                View Capability Statement
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MILITARY EXPERIENCE */}
      <section id="military" style={{ padding: "90px 24px", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={sectionTitle}>Military Experience & Operational Background</h2>
          <p style={sectionText}>
            Relevant military experience that supports Ground Ops’ disciplined, accountable,
            and mission-focused approach to logistics and operational support.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            {[
              {
                title: "Infantry Operations (11B)",
                desc: "Leadership, mission execution, and field operations in high-tempo environments.",
              },
              {
                title: "Human Resources & Administration (42A)",
                desc: "Personnel management, documentation, and administrative operations.",
              },
              {
                title: "Ammunition Supply & Logistics (89B)",
                desc: "Inventory control, storage, accountability, and logistics coordination.",
              },
              {
                title: "Small Arms Repair & Maintenance (91F)",
                desc: "Equipment maintenance, inspection, and operational readiness.",
              },
            ].map((item, i) => (
              <div key={i} style={cardStyle}>
                <h3 style={{ marginTop: 0, fontSize: "22px", marginBottom: "12px" }}>
                  {item.title}
                </h3>
                <p style={{ marginBottom: 0, lineHeight: "1.78", color: "#475569" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NAICS */}
      <section id="naics" style={{ padding: "90px 24px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={sectionTitle}>NAICS Codes</h2>
          <p style={sectionText}>
            Core classifications aligned with logistics, operations, and support services.
          </p>

          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginBottom: "20px",
                flexWrap: "wrap",
              }}
            >
              <div style={naicsCardStyle}>
                <h3 style={{ marginTop: 0 }}>541614</h3>
                <p style={{ marginBottom: 0, lineHeight: "1.7", color: "#475569" }}>
                  Logistics Consulting Services
                </p>
              </div>

              <div style={naicsCardStyle}>
                <h3 style={{ marginTop: 0 }}>561210</h3>
                <p style={{ marginBottom: 0, lineHeight: "1.7", color: "#475569" }}>
                  Facilities Support Services
                </p>
              </div>

              <div style={naicsCardStyle}>
                <h3 style={{ marginTop: 0 }}>541611</h3>
                <p style={{ marginBottom: 0, lineHeight: "1.7", color: "#475569" }}>
                  Administrative Management
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <div style={naicsCardStyle}>
                <h3 style={{ marginTop: 0 }}>488510</h3>
                <p style={{ marginBottom: 0, lineHeight: "1.7", color: "#475569" }}>
                  Freight Transportation Arrangement
                </p>
              </div>

              <div style={naicsCardStyle}>
                <h3 style={{ marginTop: 0 }}>493110</h3>
                <p style={{ marginBottom: 0, lineHeight: "1.7", color: "#475569" }}>
                  Warehousing & Storage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "95px 24px",
          background: "linear-gradient(135deg, #e2e8f0 0%, #f8fafc 100%)",
        }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "44px", marginBottom: "16px", lineHeight: "1.1" }}>
            Ready to support your next project
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#475569",
              marginBottom: "30px",
            }}
          >
            Contact Ground Ops Logistics & Services LLC to discuss logistics
            coordination, procurement support, subcontracting opportunities, or
            operational assistance.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <a href="#quote" style={darkButton}>
              Request a Quote
            </a>

            <a href="mailto:contracts@groundopsls.com" style={darkButton}>
              Contact for Opportunities
            </a>

            <a href="/capability-statement.pdf" download style={lightButton}>
              Download Capability Statement
            </a>
          </div>

          <p style={{ marginTop: "18px", color: "#64748b", fontSize: "14px" }}>
            Immediate response available for contracting and subcontracting opportunities
          </p>
        </div>
      </section>

      {/* REQUEST A QUOTE */}
      <section id="quote" style={{ padding: "90px 24px", backgroundColor: "#f8fafc" }}>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "24px",
            padding: "40px 28px",
            boxShadow: "0 18px 44px rgba(15, 23, 42, 0.06)",
          }}
        >
          <h2 style={{ fontSize: "38px", textAlign: "center", marginBottom: "14px" }}>
            Request a Quote
          </h2>

          <p
            style={{
              textAlign: "center",
              color: "#475569",
              maxWidth: "700px",
              margin: "0 auto 28px",
              lineHeight: "1.7",
              fontSize: "17px",
            }}
          >
            Need pricing, sourcing, or procurement support? Send us your request and we’ll respond quickly.
          </p>

          <form
            action="https://formsubmit.co/armando@groundopsls.com"
            method="POST"
            style={{
              display: "grid",
              gap: "16px",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            <input type="hidden" name="_subject" value="New Quote Request - Ground Ops Logistics & Services" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://www.groundopsls.com/" />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              style={inputStyle}
            />

            <input
              type="text"
              name="agency"
              placeholder="Agency / Company"
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              style={inputStyle}
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              style={inputStyle}
            />

            <select name="timeline" required style={inputStyle}>
              <option value="">Timeline</option>
              <option>ASAP</option>
              <option>30 Days</option>
              <option>60 Days</option>
              <option>Planning</option>
            </select>

            <select name="requestType" required style={inputStyle}>
              <option value="">Type of Request</option>
              <option>Public Safety Equipment</option>
              <option>Office Supplies</option>
              <option>Janitorial / Facility Supplies</option>
              <option>Training Aids</option>
              <option>Logistics Support</option>
              <option>General Procurement Support</option>
              <option>Other</option>
            </select>

            <textarea
              name="details"
              placeholder="What do you need? (items, quantities, specs, delivery timing, brands, or any special requirements)"
              required
              rows="6"
              style={inputStyle}
            />

            <div style={{ textAlign: "center", marginTop: "6px" }}>
              <button type="submit" style={darkButton}>
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "90px 24px", backgroundColor: "#ffffff" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            backgroundColor: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "28px",
            padding: "46px 26px",
            boxShadow: "0 18px 44px rgba(15, 23, 42, 0.05)",
          }}
        >
          <h2 style={{ fontSize: "40px", marginBottom: "32px", textAlign: "center" }}>
            Contact Ground Ops
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
              textAlign: "center",
            }}
          >
            <div style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: "10px" }}>General Inquiries</h3>
              <a href="mailto:info@groundopsls.com?subject=General Inquiry" style={darkButton}>
                Email Us
              </a>
              <p style={{ marginTop: "12px", fontSize: "14px", color: "#64748b" }}>
                info@groundopsls.com
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: "10px" }}>Contracts & Opportunities</h3>
              <a
                href="mailto:contracts@groundopsls.com?subject=Contract Opportunity Inquiry"
                style={darkButton}
              >
                Submit Opportunity
              </a>
              <p style={{ marginTop: "12px", fontSize: "14px", color: "#64748b" }}>
                contracts@groundopsls.com
              </p>
            </div>

            <div style={cardStyle}>
              <h3 style={{ marginTop: 0, marginBottom: "10px" }}>Phone</h3>
              <a
                href="tel:7145614967"
                style={{
                  ...lightButton,
                  color: "#0f172a",
                }}
              >
                Call Now
              </a>
              <p style={{ marginTop: "12px", fontSize: "14px", color: "#64748b" }}>
                714-561-4967
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <p style={{ fontSize: "17px", color: "#475569", marginBottom: "12px" }}>
              <strong>Direct Contacts</strong>
            </p>

            <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.7", marginBottom: "18px" }}>
              <strong>Armando Lozano</strong> – Owner
              <br />
              <a href="mailto:armando@groundopsls.com" style={{ color: "#0f172a", fontWeight: "600" }}>
                armando@groundopsls.com
              </a>
            </p>

            <p style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.7", marginBottom: 0 }}>
              <strong>Allison Lozano</strong> – Operations Manager
              <br />
              <a href="mailto:allison@groundopsls.com" style={{ color: "#0f172a", fontWeight: "600" }}>
                allison@groundopsls.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
  style={{
    background: "linear-gradient(90deg, #0b1220 0%, #0f172a 100%)",
    color: "white",
    textAlign: "center",
    padding: "28px 20px",
    fontSize: "14px",
    lineHeight: "1.8",
  }}
>
  © {new Date().getFullYear()} Ground Ops Logistics & Services LLC. All rights reserved.
  <br />
  Yorba Linda, CA
  <br /><br />

  <strong>Business Credentials</strong>
  <br />
  UEI: LZCLFH48AWG5 • DUNS: 144817747
  <br />
  Small Business (Micro) – CA DGS • Cert #: 2051256 (Exp: 04/30/2028)
  <br />
  SDVOSB: In Progress • CAGE Code: Pending
</footer>
    </div>
  );
}