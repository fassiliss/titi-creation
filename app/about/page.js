"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function About() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
        {/* Our Story Section */}
        <section className="history-section-two">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div
                    className="image"
                    style={{ borderRadius: "15px", overflow: "hidden" }}
                  >
                    <img
                      src="assets/images/classiclasagna.png"
                      alt="Titi Creation Lasagna"
                    />
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title">
                    <div className="title">Our Story</div>
                    <h2>
                      Made with <span style={{ color: "#DAA520" }}>Love</span>{" "}
                      in Nashville
                    </h2>
                    <div className="text">
                      At Titi Creation, we believe that food is more than just
                      nourishment—it's a way to bring people together, celebrate
                      special moments, and share love with those who matter
                      most.
                    </div>
                    <div className="text" style={{ marginTop: "15px" }}>
                      Our journey began with a simple passion: combining the
                      rich, bold flavors of Ethiopian cuisine with the
                      comforting classics of Italian cooking. The result is
                      something truly unique—dishes that honor both traditions
                      while creating something entirely new.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Special */}
        <section style={{ background: "#1a1a1a", padding: "80px 0" }}>
          <div className="auto-container">
            <div className="sec-title centered">
              <div className="title" style={{ color: "#DAA520" }}>
                Why Choose Us
              </div>
              <h2 style={{ color: "#fff" }}>What Makes Us Special</h2>
              <div className="separate"></div>
            </div>
            <div className="row clearfix" style={{ marginTop: "40px" }}>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div style={{ textAlign: "center", padding: "30px" }}>
                  <div style={{ fontSize: "50px", marginBottom: "20px" }}>
                    🍝
                  </div>
                  <h4 style={{ color: "#DAA520", marginBottom: "15px" }}>
                    Fresh to Order
                  </h4>
                  <p style={{ color: "#ccc" }}>
                    Every dish is made fresh when you order. We never pre-make
                    our food—quality is our priority.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div style={{ textAlign: "center", padding: "30px" }}>
                  <div style={{ fontSize: "50px", marginBottom: "20px" }}>
                    ❤️
                  </div>
                  <h4 style={{ color: "#DAA520", marginBottom: "15px" }}>
                    Made with Love
                  </h4>
                  <p style={{ color: "#ccc" }}>
                    Family recipes passed down through generations, prepared
                    with care and the finest ingredients.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div style={{ textAlign: "center", padding: "30px" }}>
                  <div style={{ fontSize: "50px", marginBottom: "20px" }}>
                    🎉
                  </div>
                  <h4 style={{ color: "#DAA520", marginBottom: "15px" }}>
                    Perfect for Events
                  </h4>
                  <p style={{ color: "#ccc" }}>
                    From birthdays to weddings, we cater to all your special
                    occasions with delicious food.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Dishes */}
        <section style={{ padding: "80px 0" }}>
          <div className="auto-container">
            <div className="sec-title centered">
              <div className="title">Signature Dishes</div>
              <h2>Ethio-Italian Fusion</h2>
              <div className="separate"></div>
            </div>
            <div className="row clearfix" style={{ marginTop: "40px" }}>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    marginBottom: "30px",
                  }}
                >
                  <img
                    src="assets/images/classiclasagna.png"
                    alt="Classic Lasagna"
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "25px" }}>
                    <h4 style={{ marginBottom: "10px" }}>Classic Lasagna</h4>
                    <p style={{ color: "#666" }}>
                      Layers of homemade pasta, rich meat sauce, creamy
                      béchamel, and melted mozzarella. Serves 6-8 people.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    marginBottom: "30px",
                  }}
                >
                  <img
                    src="assets/images/traditional-tiramisu.png"
                    alt="Traditional Tiramisu"
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "25px" }}>
                    <h4 style={{ marginBottom: "10px" }}>
                      Traditional Tiramisu
                    </h4>
                    <p style={{ color: "#666" }}>
                      Espresso-soaked ladyfingers, mascarpone cream, dusted with
                      cocoa. Serves 8-10 slices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events We Cater */}
        <section style={{ background: "#f9f9f9", padding: "80px 0" }}>
          <div className="auto-container">
            <div className="sec-title centered">
              <div className="title">Catering Services</div>
              <h2>Events We Cater</h2>
              <div className="separate"></div>
            </div>
            <div className="row clearfix" style={{ marginTop: "40px" }}>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "15px",
                    padding: "40px 30px",
                    textAlign: "center",
                    marginBottom: "30px",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <div style={{ fontSize: "40px", marginBottom: "15px" }}>
                    🎂
                  </div>
                  <h5>Birthday Parties</h5>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "15px",
                    padding: "40px 30px",
                    textAlign: "center",
                    marginBottom: "30px",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <div style={{ fontSize: "40px", marginBottom: "15px" }}>
                    🎓
                  </div>
                  <h5>Graduations</h5>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "15px",
                    padding: "40px 30px",
                    textAlign: "center",
                    marginBottom: "30px",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <div style={{ fontSize: "40px", marginBottom: "15px" }}>
                    💒
                  </div>
                  <h5>Weddings</h5>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "15px",
                    padding: "40px 30px",
                    textAlign: "center",
                    marginBottom: "30px",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <div style={{ fontSize: "40px", marginBottom: "15px" }}>
                    💼
                  </div>
                  <h5>Corporate Events</h5>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "15px",
                    padding: "40px 30px",
                    textAlign: "center",
                    marginBottom: "30px",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <div style={{ fontSize: "40px", marginBottom: "15px" }}>
                    👨‍👩‍👧‍👦
                  </div>
                  <h5>Family Gatherings</h5>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "15px",
                    padding: "40px 30px",
                    textAlign: "center",
                    marginBottom: "30px",
                    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
                  }}
                >
                  <div style={{ fontSize: "40px", marginBottom: "15px" }}>
                    🎊
                  </div>
                  <h5>Special Occasions</h5>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonial-section">
          <div
            className="pattern-layer"
            style={{
              backgroundImage: "url(assets/images/background/pattern-4.png)",
            }}
          ></div>
          <div className="auto-container">
            <div className="sec-title centered">
              <div className="title">Testimonials</div>
              <h2>What Our Customers Say</h2>
              <div className="separate"></div>
            </div>
            <div className="inner-container">
              <Swiper {...swiperOptions} className="single-item-carousel">
                <SwiperSlide>
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">
                        "The lasagna was absolutely incredible! It was the
                        highlight of our family reunion. Everyone kept asking
                        where we ordered it from. Will definitely be ordering
                        again!"
                      </div>
                      <div className="designation">
                        Sarah M. <span>- Birthday Party</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">
                        "Best tiramisu I've ever had! The perfect dessert for
                        our graduation celebration. The service was amazing and
                        the food arrived fresh and on time."
                      </div>
                      <div className="designation">
                        Michael T. <span>- Graduation Party</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-block">
                    <div className="inner-box">
                      <div className="text">
                        "We ordered for our company event and everyone loved it!
                        The portions were generous and the quality was
                        outstanding. Highly recommend Titi Creation!"
                      </div>
                      <div className="designation">
                        Jennifer L. <span>- Corporate Event</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
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
              Ready to Order?
            </h2>
            <p
              style={{ color: "#ccc", marginBottom: "30px", fontSize: "18px" }}
            >
              Contact us today to place your order or discuss catering for your
              next event!
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
              <Link
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
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
