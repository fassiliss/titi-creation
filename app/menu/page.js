"use client";
import Layout from "@/components/layout/Layout";
import { useCart } from "@/lib/cartStore";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addItem, openCart } = useCart();

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    const { data, error } = await supabase
      .from("menu_items")
      .select("*")
      .eq("is_available", true)
      .order("category");

    if (error) {
      console.error("Error fetching menu:", error);
    } else {
      setMenuItems(data || []);
    }
    setLoading(false);
  };

  const handleAddToCart = (item) => {
    addItem(item);
    openCart();
  };

  const mainDishes = menuItems.filter((item) => item.category === "mains");
  const desserts = menuItems.filter((item) => item.category === "desserts");
  const sides = menuItems.filter((item) => item.category === "sides");

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Menu">
        {/* Menu Intro */}
        <section className="menu-page-section">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="menu-block-two col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">🍝</div>
                  <h6>Fresh to Order</h6>
                  <div className="text">
                    Every dish is made fresh when you order. Perfect for your
                    special occasions.
                  </div>
                </div>
              </div>
              <div className="menu-block-two col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">❤️</div>
                  <h6>Made with Love</h6>
                  <div className="text">
                    Authentic Ethio-Italian recipes crafted with care and the
                    finest ingredients.
                  </div>
                </div>
              </div>
              <div className="menu-block-two col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon">🚗</div>
                  <h6>Pickup & Delivery</h6>
                  <div className="text">
                    Available in the Nashville area. Call 615-569-9687 to order.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="menus-section style-two">
          <div className="auto-container">
            {loading ? (
              <div className="text-center" style={{ padding: "50px" }}>
                <h3>Loading menu...</h3>
              </div>
            ) : (
              <>
                {/* Main Dishes */}
                {mainDishes.length > 0 && (
                  <>
                    <div className="sec-title centered">
                      <div className="title">Signature Dishes</div>
                      <h2>Main Dishes</h2>
                      <div className="separate"></div>
                    </div>
                    <div className="row clearfix">
                      {mainDishes.map((item) => (
                        <div
                          key={item.id}
                          className="col-lg-6 col-md-6 col-sm-12"
                        >
                          <div className="menu-item-card">
                            {item.image_url && (
                              <div className="menu-item-image">
                                <img src={item.image_url} alt={item.name} />
                                {item.is_popular && (
                                  <span className="popular-badge">
                                    ★ Popular
                                  </span>
                                )}
                              </div>
                            )}
                            <div className="menu-item-content">
                              <div className="menu-item-header">
                                <h4>{item.name}</h4>
                                <span className="price">${item.price}</span>
                              </div>
                              {item.servings && (
                                <div className="servings">{item.servings}</div>
                              )}
                              <p>{item.description}</p>
                              <button
                                className="add-to-cart-btn"
                                onClick={() => handleAddToCart(item)}
                              >
                                Add to Order
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Desserts */}
                {desserts.length > 0 && (
                  <>
                    <div
                      className="sec-title centered"
                      style={{ marginTop: "60px" }}
                    >
                      <div className="title">Sweet Treats</div>
                      <h2>Desserts</h2>
                      <div className="separate"></div>
                    </div>
                    <div className="row clearfix">
                      {desserts.map((item) => (
                        <div
                          key={item.id}
                          className="col-lg-6 col-md-6 col-sm-12"
                        >
                          <div className="menu-item-card">
                            {item.image_url && (
                              <div className="menu-item-image">
                                <img src={item.image_url} alt={item.name} />
                                {item.is_popular && (
                                  <span className="popular-badge">
                                    ★ Popular
                                  </span>
                                )}
                              </div>
                            )}
                            <div className="menu-item-content">
                              <div className="menu-item-header">
                                <h4>{item.name}</h4>
                                <span className="price">${item.price}</span>
                              </div>
                              {item.servings && (
                                <div className="servings">{item.servings}</div>
                              )}
                              <p>{item.description}</p>
                              <button
                                className="add-to-cart-btn"
                                onClick={() => handleAddToCart(item)}
                              >
                                Add to Order
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Sides */}
                {sides.length > 0 && (
                  <>
                    <div
                      className="sec-title centered"
                      style={{ marginTop: "60px" }}
                    >
                      <div className="title">Perfect Additions</div>
                      <h2>Sides</h2>
                      <div className="separate"></div>
                    </div>
                    <div className="row clearfix">
                      {sides.map((item) => (
                        <div
                          key={item.id}
                          className="col-lg-6 col-md-6 col-sm-12"
                        >
                          <div className="menu-item-card">
                            {item.image_url && (
                              <div className="menu-item-image">
                                <img src={item.image_url} alt={item.name} />
                              </div>
                            )}
                            <div className="menu-item-content">
                              <div className="menu-item-header">
                                <h4>{item.name}</h4>
                                <span className="price">${item.price}</span>
                              </div>
                              {item.servings && (
                                <div className="servings">{item.servings}</div>
                              )}
                              <p>{item.description}</p>
                              <button
                                className="add-to-cart-btn"
                                onClick={() => handleAddToCart(item)}
                              >
                                Add to Order
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {menuItems.length === 0 && (
                  <div className="text-center" style={{ padding: "50px" }}>
                    <h3>No menu items available</h3>
                    <p>
                      Please call 615-569-9687 to inquire about our offerings.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section
          className="cta-section"
          style={{
            background: "#1a1a1a",
            padding: "60px 0",
            textAlign: "center",
          }}
        >
          <div className="auto-container">
            <h2 style={{ color: "#DAA520", marginBottom: "20px" }}>
              Ready to Order?
            </h2>
            <p style={{ color: "#ccc", marginBottom: "30px" }}>
              Add items to your cart or call us directly for large orders and
              catering.
            </p>
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
              📞 Call 615-569-9687
            </a>
          </div>
        </section>

        <style jsx>{`
          .menu-item-card {
            background: #fff;
            border-radius: 15px;
            overflow: hidden;
            margin-bottom: 30px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }
          .menu-item-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          }
          .menu-item-image {
            position: relative;
            height: 250px;
            overflow: hidden;
          }
          .menu-item-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }
          .menu-item-card:hover .menu-item-image img {
            transform: scale(1.1);
          }
          .popular-badge {
            position: absolute;
            top: 15px;
            left: 15px;
            background: #daa520;
            color: #1a1a1a;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: bold;
          }
          .menu-item-content {
            padding: 25px;
          }
          .menu-item-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 10px;
          }
          .menu-item-header h4 {
            margin: 0;
            font-size: 24px;
            color: #1a1a1a;
          }
          .menu-item-header .price {
            font-size: 28px;
            font-weight: bold;
            color: #daa520;
          }
          .servings {
            font-size: 14px;
            color: #888;
            margin-bottom: 10px;
            background: #f5f5f5;
            display: inline-block;
            padding: 3px 12px;
            border-radius: 15px;
          }
          .menu-item-content p {
            color: #666;
            margin-bottom: 20px;
            line-height: 1.6;
          }
          .add-to-cart-btn {
            width: 100%;
            background: #daa520;
            color: #1a1a1a;
            border: none;
            padding: 15px 30px;
            font-size: 18px;
            font-weight: bold;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .add-to-cart-btn:hover {
            background: #ffd700;
            transform: scale(1.02);
          }
          .menu-block-two .icon {
            font-size: 40px;
            margin-bottom: 15px;
          }
        `}</style>
      </Layout>
    </>
  );
}
