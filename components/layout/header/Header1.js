import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import { useCart } from "@/lib/cartStore";

export default function Header1({
  scroll,
  handlePopup,
  handleMobileMenu,
  handleSidebar,
}) {
  const { openCart, getCount } = useCart();

  return (
    <>
      {/* Main Header*/}
      <header
        className={`main-header header-style-one ${
          scroll ? "fixed-header" : ""
        }`}
      >
        {/* Header Upper */}
        <div className="header-upper">
          <div className="auto-container clearfix">
            <div className="pull-left logo-box">
              <div className="logo">
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
            </div>

            <div className="nav-outer clearfix">
              {/* Mobile Navigation Toggler */}
              <div className="mobile-nav-toggler">
                <span
                  className="icon flaticon-menu"
                  onClick={handleMobileMenu}
                ></span>
              </div>
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-md">
                <Menu />
              </nav>
              {/* Main Menu End*/}
              <div className="outer-box clearfix">
                {/* Cart Button */}
                <div
                  className="search-box-btn search-box-outer"
                  onClick={openCart}
                  style={{ cursor: "pointer", position: "relative" }}
                >
                  <span className="icon fa fa-shopping-cart"></span>
                  {getCount() > 0 && (
                    <span
                      style={{
                        position: "absolute",
                        top: "-8px",
                        right: "-8px",
                        background: "#DAA520",
                        color: "#1a1a1a",
                        fontSize: "12px",
                        fontWeight: "bold",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {getCount()}
                    </span>
                  )}
                </div>
                {/* Nav Btn */}
                <div className="nav-btn navSidebar-button">
                  <span
                    className="icon flaticon-menu-2"
                    onClick={handleSidebar}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Header */}
        <div className="sticky-header">
          <div className="auto-container clearfix">
            <div className="logo pull-left">
              <Link href="/" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#DAA520",
                  }}
                >
                  Titi <span style={{ color: "#333" }}>Creation</span>
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: "9px",
                    color: "#8B6914",
                    letterSpacing: "2px",
                    fontWeight: "bold",
                  }}
                >
                  ETHIO-ITALIAN CUISINE
                </span>
              </Link>
            </div>
            <div className="pull-right">
              <nav className="main-menu">
                <Menu />
              </nav>
              <div className="outer-box clearfix">
                {/* Cart Button */}
                <div
                  className="search-box-btn search-box-outer"
                  onClick={openCart}
                  style={{ cursor: "pointer", position: "relative" }}
                >
                  <span className="icon fa fa-shopping-cart"></span>
                  {getCount() > 0 && (
                    <span
                      style={{
                        position: "absolute",
                        top: "-8px",
                        right: "-8px",
                        background: "#DAA520",
                        color: "#1a1a1a",
                        fontSize: "12px",
                        fontWeight: "bold",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {getCount()}
                    </span>
                  )}
                </div>
                {/* Nav Btn */}
                <div className="nav-btn navSidebar-button">
                  <span
                    className="icon flaticon-menu-2"
                    onClick={handleSidebar}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MobileMenu handleMobileMenu={handleMobileMenu} />
      </header>
    </>
  );
}
