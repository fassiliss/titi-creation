import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer className="main-footer">
        <div
          className="pattern-layer-one"
          style={{
            backgroundImage: "url(assets/images/resource/footer-pattern-1.png)",
          }}
        ></div>
        <div
          className="pattern-layer-two"
          style={{
            backgroundImage: "url(assets/images/resource/footer-pattern-2.png)",
          }}
        ></div>
        <div
          className="pattern-layer-three"
          style={{
            backgroundImage: "url(assets/images/background/pattern-6.png)",
          }}
        ></div>
        <div className="auto-container">
          <div className="widgets-section">
            <div className="row clearfix">
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget contact-widget">
                      <h6>Contact Us</h6>
                      <div className="text">
                        Nashville, Tennessee
                        <br />
                        Pickup & Delivery Available
                      </div>
                      <ul className="contact-list">
                        <li>
                          <span className="icon fa fa-phone"></span>
                          <Link href="tel:6155699687">615-569-9687</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h6>Quick Links</h6>
                      <ul className="footer-list">
                        <li>
                          <Link href="/">Home</Link>
                        </li>
                        <li>
                          <Link href="/about">About</Link>
                        </li>
                        <li>
                          <Link href="/menu">Menu</Link>
                        </li>
                        <li>
                          <Link href="/gallery">Gallery</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget social-widget">
                      <h6>Follow Us</h6>
                      <ul className="social-list">
                        <li>
                          <Link href="#">
                            <span className="icon fa fa-facebook"></span>
                            Facebook
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <span className="icon fa fa-instagram"></span>
                            Instagram
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget newsletter-widget">
                      <h6>We Cater For</h6>
                      <ul className="footer-list" style={{ color: "#aaa" }}>
                        <li>🎂 Birthday Parties</li>
                        <li>🎓 Graduations</li>
                        <li>💒 Weddings</li>
                        <li>💼 Corporate Events</li>
                        <li>👨‍👩‍👧‍👦 Family Gatherings</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright">
              &copy; 2025 Titi Creation - Ethio-Italian Cuisine. Made with ❤️ in
              Nashville
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
