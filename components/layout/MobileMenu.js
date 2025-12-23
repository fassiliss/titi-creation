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
          <div
            className="nav-logo"
            style={{ padding: "25px 20px", borderBottom: "1px solid #333" }}
          >
            <Link
              href="/"
              onClick={handleMobileMenu}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#DAA520",
                  lineHeight: "1.2",
                }}
              >
                Titi Creation
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "#DAA520",
                  letterSpacing: "2px",
                  marginTop: "5px",
                  textTransform: "uppercase",
                }}
              >
                Ethio-Italian Cuisine
              </div>
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

          <div
            style={{
              padding: "25px 20px",
              borderTop: "1px solid #333",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                color: "#DAA520",
                fontSize: "14px",
                marginBottom: "15px",
              }}
            >
              Order Online, Text or Call
            </div>
            <a
              href="tel:6155699687"
              style={{
                display: "inline-block",
                padding: "12px 25px",
                backgroundColor: "#DAA520",
                color: "#1a1a1a",
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "50px",
                textDecoration: "none",
              }}
            >
              📞 615-569-9687
            </a>
          </div>

          <div style={{ padding: "15px 20px" }}>
            <a
              href="#"
              style={{
                color: "#DAA520",
                fontSize: "20px",
                marginRight: "15px",
              }}
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" style={{ color: "#DAA520", fontSize: "20px" }}>
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};
export default MobileMenu;
