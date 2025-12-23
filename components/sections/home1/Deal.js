export default function Deal() {
  return (
    <>
      <section
        className="deal-section"
        style={{ backgroundImage: "url(assets/images/background/2.jpg)" }}
      >
        <div
          className="top-pattern-layer"
          style={{
            backgroundImage: "url(assets/images/background/pattern-1.png)",
          }}
        ></div>
        <div
          className="bottom-pattern-layer"
          style={{
            backgroundImage: "url(assets/images/background/pattern-2.png)",
          }}
        ></div>
        <div className="auto-container">
          <div
            className="content-box"
            style={{ backgroundImage: "url(assets/images/resource/deal.png)" }}
          >
            <div className="box-inner">
              <div className="sec-title light centered">
                <div className="title">Made with Love</div>
                <h2>Perfect for Special Events</h2>
                <div className="text">
                  Birthday • Graduation • Wedding • Corporate • Family Gathering
                  <br />
                  Fresh to order with pickup and delivery available in Nashville
                  area.
                </div>
              </div>
              <div className="email-form">
                <div className="email-title">Call or Text to Order</div>
                <div style={{ textAlign: "center", paddingTop: "15px" }}>
                  <a
                    href="tel:6155699687"
                    style={{
                      display: "inline-block",
                      padding: "15px 40px",
                      backgroundColor: "#DAA520",
                      color: "#1a1a1a",
                      fontSize: "24px",
                      fontWeight: "bold",
                      borderRadius: "50px",
                      textDecoration: "none",
                    }}
                  >
                    📞 615-569-9687
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
