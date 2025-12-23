export default function Deal() {
  return (
    <>
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
          padding: "80px 0",
        }}
      >
        <div className="auto-container">
          <div
            style={{
              background: "rgba(0,0,0,0.5)",
              borderRadius: "20px",
              padding: "60px 40px",
              maxWidth: "600px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: "#DAA520",
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Made with Love
            </div>
            <h2
              style={{ color: "#fff", fontSize: "36px", marginBottom: "20px" }}
            >
              Perfect for Special Events
            </h2>
            <p
              style={{ color: "#ccc", fontSize: "18px", marginBottom: "30px" }}
            >
              Birthday • Graduation • Wedding • Corporate • Family Gathering
              <br />
              Fresh to order with pickup and delivery available in Nashville
              area.
            </p>
            <div
              style={{
                color: "#fff",
                fontSize: "20px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              Order Online, Text or Call
            </div>
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
      </section>
    </>
  );
}
