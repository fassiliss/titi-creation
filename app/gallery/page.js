"use client"

import Layout from "@/components/layout/Layout";

export default function Gallery() {
  const galleryImages = [
    { src: "food-1.png", title: "Classic Lasagna", desc: "Homemade with love" },
    {
      src: "food-2.png",
      title: "Traditional Tiramisu",
      desc: "Espresso-soaked perfection",
    },
    {
      src: "food-3.png",
      title: "Fresh Ingredients",
      desc: "Quality in every bite",
    },
    { src: "food-4.png", title: "Catering Setup", desc: "Perfect for events" },
    { src: "food-5.png", title: "Family Style", desc: "Serves 6-8 people" },
    { src: "food-6.png", title: "Dessert Selection", desc: "Sweet endings" },
    { src: "food-7.png", title: "Event Catering", desc: "We bring the feast" },
    { src: "food-8.png", title: "Party Favorites", desc: "Crowd pleasers" },
    { src: "food-9.png", title: "Made Fresh", desc: "To order, always" },
    {
      src: "food-10.png",
      title: "Special Occasions",
      desc: "Celebrate with us",
    },
    {
      src: "food-11.png",
      title: "Authentic Recipes",
      desc: "Ethio-Italian fusion",
    },
    {
      src: "food-12.png",
      title: "Delicious Moments",
      desc: "Creating memories",
    },
  ];

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Gallery">
        {/* Gallery Intro */}
        <section style={{ padding: "60px 0 40px" }}>
          <div className="auto-container">
            <div className="sec-title centered">
              <div className="title">Our Creations</div>
              <h2>
                Food <span style={{ color: "#DAA520" }}>Gallery</span>
              </h2>
              <div className="separate"></div>
              <div className="text">
                Take a look at some of our delicious creations. Every dish is
                made fresh to order
                <br />
                with authentic recipes and the finest ingredients.
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section style={{ padding: "0 0 80px" }}>
          <div className="auto-container">
            <div className="row">
              {galleryImages.map((image, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "15px",
                      overflow: "hidden",
                      marginBottom: "30px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                      cursor: "pointer",
                    }}
                    className="gallery-item"
                  >
                    <img
                      src={`assets/images/gallery/${image.src}`}
                      alt={image.title}
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background:
                          "linear-gradient(transparent, rgba(0,0,0,0.8))",
                        padding: "60px 20px 20px",
                        color: "#fff",
                      }}
                    >
                      <h5 style={{ color: "#DAA520", marginBottom: "5px" }}>
                        {image.title}
                      </h5>
                      <p style={{ margin: 0, fontSize: "14px", color: "#ccc" }}>
                        {image.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          style={{
            background: "#1a1a1a",
            padding: "80px 0",
            textAlign: "center",
          }}
        >
          <div className="auto-container">
            <h2 style={{ color: "#DAA520", marginBottom: "20px" }}>
              Ready to Taste the Difference?
            </h2>
            <p
              style={{ color: "#ccc", marginBottom: "30px", fontSize: "18px" }}
            >
              Order now for your next event or family gathering!
            </p>
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="tel:6155699687"
                style={{
                  display: "inline-block",
                  padding: "15px 40px",
                  background: "#DAA520",
                  color: "#1a1a1a",
                  fontSize: "20px",
                  fontWeight: "bold",
                  borderRadius: "50px",
                  textDecoration: "none",
                }}
              >
                📞 615-569-9687
              </a>
              <a
                href="/menu"
                style={{
                  display: "inline-block",
                  padding: "15px 40px",
                  border: "2px solid #DAA520",
                  color: "#DAA520",
                  fontSize: "20px",
                  fontWeight: "bold",
                  borderRadius: "50px",
                  textDecoration: "none",
                }}
              >
                View Menu
              </a>
            </div>
          </div>
        </section>

        <style jsx>{`
          .gallery-item:hover img {
            transform: scale(1.1);
          }
        `}</style>
      </Layout>
    </>
  );
}
