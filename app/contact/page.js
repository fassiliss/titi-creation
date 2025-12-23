"use client";
import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    event_type: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // For now, just show success (you can add a contact_messages table later)
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        event_type: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
        {/* Contact Info Section */}
        <section style={{ padding: "80px 0" }}>
          <div className="auto-container">
            <div className="sec-title centered">
              <div className="title">Get in Touch</div>
              <h2>
                We'd Love to <span style={{ color: "#DAA520" }}>Hear</span> From
                You
              </h2>
              <div className="separate"></div>
              <div className="text">
                Ready to order or have questions about our catering services?
                <br />
                Give us a call or send us a message!
              </div>
            </div>

            {/* Contact Cards */}
            <div className="row clearfix" style={{ marginTop: "50px" }}>
              {/* Phone Card */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <a href="tel:6155699687" style={{ textDecoration: "none" }}>
                  <div
                    style={{
                      background: "#1a1a1a",
                      borderRadius: "15px",
                      padding: "40px 30px",
                      textAlign: "center",
                      marginBottom: "30px",
                      transition: "all 0.3s ease",
                      border: "2px solid transparent",
                    }}
                    className="contact-card"
                  >
                    <div style={{ fontSize: "50px", marginBottom: "20px" }}>
                      📞
                    </div>
                    <h4 style={{ color: "#DAA520", marginBottom: "10px" }}>
                      Call or Text
                    </h4>
                    <p
                      style={{
                        color: "#fff",
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    >
                      615-569-9687
                    </p>
                    <p style={{ color: "#888", marginTop: "10px" }}>
                      Best way to reach us!
                    </p>
                  </div>
                </a>
              </div>

              {/* Location Card */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  style={{
                    background: "#1a1a1a",
                    borderRadius: "15px",
                    padding: "40px 30px",
                    textAlign: "center",
                    marginBottom: "30px",
                  }}
                >
                  <div style={{ fontSize: "50px", marginBottom: "20px" }}>
                    📍
                  </div>
                  <h4 style={{ color: "#DAA520", marginBottom: "10px" }}>
                    Location
                  </h4>
                  <p style={{ color: "#fff", fontSize: "20px" }}>
                    Nashville, Tennessee
                  </p>
                  <p style={{ color: "#888", marginTop: "10px" }}>
                    Pickup & Delivery Available
                  </p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  style={{
                    background: "#1a1a1a",
                    borderRadius: "15px",
                    padding: "40px 30px",
                    textAlign: "center",
                    marginBottom: "30px",
                  }}
                >
                  <div style={{ fontSize: "50px", marginBottom: "20px" }}>
                    🕐
                  </div>
                  <h4 style={{ color: "#DAA520", marginBottom: "10px" }}>
                    Order Hours
                  </h4>
                  <p style={{ color: "#fff", fontSize: "18px" }}>
                    Monday - Sunday
                  </p>
                  <p style={{ color: "#888", marginTop: "10px" }}>
                    Please order 24hrs in advance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section style={{ background: "#f9f9f9", padding: "80px 0" }}>
          <div className="auto-container">
            <div className="row clearfix">
              {/* Form Column */}
              <div className="col-lg-7 col-md-12 col-sm-12">
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "15px",
                    padding: "40px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 style={{ marginBottom: "10px" }}>Send Us a Message</h3>
                  <p style={{ color: "#666", marginBottom: "30px" }}>
                    Have a question or want to discuss a large order? Fill out
                    the form below.
                  </p>

                  {success ? (
                    <div
                      style={{
                        background: "#d4edda",
                        color: "#155724",
                        padding: "30px",
                        borderRadius: "10px",
                        textAlign: "center",
                      }}
                    >
                      <h4>✅ Message Sent!</h4>
                      <p>
                        Thank you for contacting us. We'll get back to you soon!
                      </p>
                      <p style={{ marginTop: "15px" }}>
                        <strong>
                          For faster response, call us at 615-569-9687
                        </strong>
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div style={{ marginBottom: "20px" }}>
                            <label
                              style={{
                                display: "block",
                                marginBottom: "8px",
                                fontWeight: "600",
                              }}
                            >
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                              style={{
                                width: "100%",
                                padding: "15px",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                fontSize: "16px",
                              }}
                              placeholder="John Doe"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div style={{ marginBottom: "20px" }}>
                            <label
                              style={{
                                display: "block",
                                marginBottom: "8px",
                                fontWeight: "600",
                              }}
                            >
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  phone: e.target.value,
                                })
                              }
                              style={{
                                width: "100%",
                                padding: "15px",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                fontSize: "16px",
                              }}
                              placeholder="(615) 555-1234"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div style={{ marginBottom: "20px" }}>
                            <label
                              style={{
                                display: "block",
                                marginBottom: "8px",
                                fontWeight: "600",
                              }}
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                })
                              }
                              style={{
                                width: "100%",
                                padding: "15px",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                fontSize: "16px",
                              }}
                              placeholder="john@email.com"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div style={{ marginBottom: "20px" }}>
                            <label
                              style={{
                                display: "block",
                                marginBottom: "8px",
                                fontWeight: "600",
                              }}
                            >
                              Event Type
                            </label>
                            <select
                              value={formData.event_type}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  event_type: e.target.value,
                                })
                              }
                              style={{
                                width: "100%",
                                padding: "15px",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                fontSize: "16px",
                                background: "#fff",
                              }}
                            >
                              <option value="">Select an option</option>
                              <option value="birthday">Birthday Party</option>
                              <option value="graduation">Graduation</option>
                              <option value="wedding">Wedding</option>
                              <option value="corporate">Corporate Event</option>
                              <option value="family">Family Gathering</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div style={{ marginBottom: "20px" }}>
                        <label
                          style={{
                            display: "block",
                            marginBottom: "8px",
                            fontWeight: "600",
                          }}
                        >
                          Your Message *
                        </label>
                        <textarea
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          style={{
                            width: "100%",
                            padding: "15px",
                            border: "1px solid #ddd",
                            borderRadius: "8px",
                            fontSize: "16px",
                            minHeight: "150px",
                            resize: "vertical",
                          }}
                          placeholder="Tell us about your event, how many guests, and what you'd like to order..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        style={{
                          width: "100%",
                          padding: "18px",
                          background: "#DAA520",
                          color: "#1a1a1a",
                          border: "none",
                          borderRadius: "8px",
                          fontSize: "18px",
                          fontWeight: "bold",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Info Column */}
              <div className="col-lg-5 col-md-12 col-sm-12">
                <div style={{ paddingLeft: "30px" }}>
                  <h3 style={{ marginBottom: "20px" }}>Quick Contact</h3>
                  <p
                    style={{
                      color: "#666",
                      marginBottom: "30px",
                      fontSize: "18px",
                    }}
                  >
                    The fastest way to reach us is by phone. Call or text
                    anytime!
                  </p>

                  <a
                    href="tel:6155699687"
                    style={{
                      display: "block",
                      padding: "25px",
                      background: "#DAA520",
                      color: "#1a1a1a",
                      borderRadius: "15px",
                      textDecoration: "none",
                      textAlign: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <div style={{ fontSize: "30px", marginBottom: "10px" }}>
                      📞
                    </div>
                    <div style={{ fontSize: "28px", fontWeight: "bold" }}>
                      615-569-9687
                    </div>
                    <div style={{ marginTop: "5px" }}>Tap to Call</div>
                  </a>

                  <div
                    style={{
                      background: "#1a1a1a",
                      borderRadius: "15px",
                      padding: "30px",
                      color: "#fff",
                    }}
                  >
                    <h4 style={{ color: "#DAA520", marginBottom: "20px" }}>
                      We Cater For:
                    </h4>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      <li
                        style={{
                          padding: "10px 0",
                          borderBottom: "1px solid #333",
                        }}
                      >
                        🎂 Birthday Parties
                      </li>
                      <li
                        style={{
                          padding: "10px 0",
                          borderBottom: "1px solid #333",
                        }}
                      >
                        🎓 Graduations
                      </li>
                      <li
                        style={{
                          padding: "10px 0",
                          borderBottom: "1px solid #333",
                        }}
                      >
                        💒 Weddings
                      </li>
                      <li
                        style={{
                          padding: "10px 0",
                          borderBottom: "1px solid #333",
                        }}
                      >
                        💼 Corporate Events
                      </li>
                      <li style={{ padding: "10px 0" }}>
                        👨‍👩‍👧‍👦 Family Gatherings
                      </li>
                    </ul>
                  </div>

                  <div style={{ marginTop: "30px" }}>
                    <h4 style={{ marginBottom: "15px" }}>Follow Us</h4>
                    <div style={{ display: "flex", gap: "15px" }}>
                      <a
                        href="#"
                        style={{
                          width: "50px",
                          height: "50px",
                          background: "#1a1a1a",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#DAA520",
                          fontSize: "24px",
                          textDecoration: "none",
                        }}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a
                        href="#"
                        style={{
                          width: "50px",
                          height: "50px",
                          background: "#1a1a1a",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#DAA520",
                          fontSize: "24px",
                          textDecoration: "none",
                        }}
                      >
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section style={{ padding: "0" }}>
          <div style={{ width: "100%", height: "400px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.45192482844!2d-86.94abortn!3d36.1622296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864ec3213eb903d%3A0x7d3fb9d0a1e9daa0!2sNashville%2C%20TN!5e0!3m2!1sen!2sus!4v1703000000000!5m2!1sen!2sus"
              style={{ width: "100%", height: "100%", border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <style jsx>{`
          .contact-card:hover {
            border-color: #daa520 !important;
            transform: translateY(-5px);
          }
        `}</style>
      </Layout>
    </>
  );
}
