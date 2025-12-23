"use client";
import Link from "next/link";

const MobileMenu = ({ handleMobileMenu }) => {
  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu}></div>
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="icon flaticon-multiply"></span>
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/" style={{ textDecoration: "none" }}>
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#DAA520",
                }}
              >
                Titi <span style={{ color: "#fff" }}>Creation</span>
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "10px",
                  color: "#DAA520",
                  letterSpacing: "3px",
                }}
              >
                ETHIO-ITALIAN CUISINE
              </span>
            </Link>
          </div>
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation">
                <li>
                  <Link href="/" onClick={handleMobileMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={handleMobileMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/menu" onClick={handleMobileMenu}>
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" onClick={handleMobileMenu}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={handleMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div
            style={{
              padding: "30px 20px",
              borderTop: "1px solid #333",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                color: "#DAA520",
                fontSize: "16px",
                marginBottom: "15px",
              }}
            >
              Order Online, Text or Call
            </div>
            <a
              href="tel:6155699687"
              style={{
                display: "inline-block",
                padding: "12px 30px",
                backgroundColor: "#DAA520",
                color: "#1a1a1a",
                fontSize: "18px",
                fontWeight: "bold",
                borderRadius: "50px",
                textDecoration: "none",
              }}
            >
              📞 615-569-9687
            </a>
          </div>

          {/* Social */}
          <div className="social-links" style={{ padding: "20px" }}>
            <ul
              className="clearfix"
              style={{
                display: "flex",
                gap: "15px",
                listStyle: "none",
                padding: 0,
              }}
            >
              <li>
                <a href="#" style={{ color: "#DAA520", fontSize: "20px" }}>
                  <span className="fab fa-facebook-f"></span>
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#DAA520", fontSize: "20px" }}>
                  <span className="fab fa-instagram"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default MobileMenu;
