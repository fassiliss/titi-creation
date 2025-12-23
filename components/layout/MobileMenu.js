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
            <Link href="/" onClick={handleMobileMenu}>
              <img
                src="assets/images/logo-2.png"
                alt="Titi Creation"
                title=""
                style={{ display: "none" }}
              />
              <span
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  color: "#DAA520",
                }}
              >
                Titi Creation
              </span>
              <br />
              <span
                style={{
                  fontSize: "9px",
                  color: "#DAA520",
                  letterSpacing: "2px",
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
              <ul className="navigation clearfix">
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
          <div className="contact-info">
            <h4>Order Online, Text or Call</h4>
            <ul>
              <li>
                <a href="tel:6155699687">📞 615-569-9687</a>
              </li>
              <li>Nashville, Tennessee</li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <a href="#">
                  <span className="fab fa-facebook-f"></span>
                </a>
              </li>
              <li>
                <a href="#">
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
