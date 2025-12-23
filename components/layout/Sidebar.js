import Link from "next/link";

export default function Sidebar({ isSidebar, handleSidebar }) {
  return (
    <>
      <div
        className={`xs-sidebar-group info-group info-sidebar ${
          isSidebar ? "isActive" : ""
        }`}
      >
        <div className="xs-overlay xs-bg-black" onClick={handleSidebar}></div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <Link
                href="#"
                className="close-side-widget"
                onClick={handleSidebar}
              >
                X
              </Link>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="logo">
                    <Link href="/" style={{ textDecoration: "none" }}>
                      <span
                        style={{
                          fontSize: "32px",
                          fontWeight: "bold",
                          color: "#DAA520",
                        }}
                      >
                        Titi <span style={{ color: "#fff" }}>Creation</span>
                      </span>
                      <span
                        style={{
                          display: "block",
                          fontSize: "11px",
                          color: "#DAA520",
                          letterSpacing: "3px",
                          marginTop: "5px",
                        }}
                      >
                        ETHIO-ITALIAN CUISINE
                      </span>
                    </Link>
                  </div>
                  <div className="content-box">
                    <h2>About Us</h2>
                    <p className="text">
                      At Titi Creation, we blend the rich culinary traditions of
                      Ethiopia with the beloved flavors of Italy. Every dish is
                      made fresh to order with authentic recipes and the finest
                      ingredients. Perfect for birthdays, graduations, weddings,
                      and all your special occasions.
                    </p>
                    <Link
                      href="/menu"
                      className="theme-btn btn-style-one clearfix"
                    >
                      <span className="icon"></span>View Menu
                    </Link>
                  </div>
                  <div className="contact-info">
                    <h2>Contact Info</h2>
                    <ul className="list-style-one">
                      <li>
                        <span className="icon fa fa-location-arrow"></span>
                        Nashville, Tennessee
                      </li>
                      <li>
                        <span className="icon fa fa-phone"></span>
                        <a href="tel:6155699687" style={{ color: "inherit" }}>
                          615-569-9687
                        </a>
                      </li>
                      <li>
                        <span className="icon fa fa-truck"></span>Pickup &
                        Delivery Available
                      </li>
                      <li>
                        <span className="icon fa fa-clock-o"></span>Order 24hrs
                        in advance
                      </li>
                    </ul>
                  </div>
                  <div
                    style={{
                      marginTop: "20px",
                      padding: "20px",
                      background: "rgba(218,165,32,0.1)",
                      borderRadius: "10px",
                    }}
                  >
                    <h4 style={{ color: "#DAA520", marginBottom: "15px" }}>
                      We Cater For:
                    </h4>
                    <p style={{ color: "#ccc", margin: 0, lineHeight: "1.8" }}>
                      🎂 Birthday Parties
                      <br />
                      🎓 Graduations
                      <br />
                      💒 Weddings
                      <br />
                      💼 Corporate Events
                      <br />
                      👨‍👩‍👧‍👦 Family Gatherings
                    </p>
                  </div>
                  <ul className="social-box">
                    <li className="facebook">
                      <Link href="#" className="fa fa-facebook-f"></Link>
                    </li>
                    <li className="instagram">
                      <Link href="#" className="fa fa-instagram"></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
