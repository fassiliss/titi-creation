"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  return (
    <>
      <section className="banner-section-custom">
        <Swiper {...swiperOptions} className="main-slider-carousel">
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="slide-custom"
              style={{ backgroundImage: "url(assets/images/baner1.png)" }}
            >
              <div className="overlay"></div>
              <div className="content-box">
                <h1>
                  <span className="gold">Titi</span> Creation
                </h1>
                <p>Authentic Ethio-Italian Cuisine</p>
                <p className="sub">Homemade Lasagna & Tiramisu</p>
                <div className="btns">
                  <Link href="/menu" className="btn-gold">
                    View Menu
                  </Link>
                  <a href="tel:6155699687" className="btn-outline">
                    📞 615-569-9687
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="slide-custom"
              style={{ backgroundImage: "url(assets/images/banner2.png)" }}
            >
              <div className="overlay"></div>
              <div className="content-box">
                <h1>
                  <span className="gold">Classic</span> Lasagna
                </h1>
                <p>
                  Layers of homemade pasta, rich meat sauce, creamy béchamel
                </p>
                <p className="sub">Serves 6-8 people • $45</p>
                <div className="btns">
                  <Link href="/menu" className="btn-gold">
                    Order Now
                  </Link>
                  <a href="tel:6155699687" className="btn-outline">
                    📞 615-569-9687
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div
              className="slide-custom"
              style={{ backgroundImage: "url(assets/images/banner3.png)" }}
            >
              <div className="overlay"></div>
              <div className="content-box">
                <h1>
                  <span className="gold">Traditional</span> Tiramisu
                </h1>
                <p>
                  Espresso-soaked ladyfingers, mascarpone cream, dusted with
                  cocoa
                </p>
                <p className="sub">Serves 8-10 slices • $35</p>
                <div className="btns">
                  <Link href="/menu" className="btn-gold">
                    Order Now
                  </Link>
                  <a href="tel:6155699687" className="btn-outline">
                    📞 615-569-9687
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div
              className="slide-custom"
              style={{ backgroundImage: "url(assets/images/banner4.png)" }}
            >
              <div className="overlay"></div>
              <div className="content-box">
                <h1>
                  <span className="gold">Event</span> Catering
                </h1>
                <p>
                  Perfect for birthdays, graduations, weddings & corporate
                  events
                </p>
                <p className="sub">Pickup & Delivery in Nashville</p>
                <div className="btns">
                  <Link href="/contact" className="btn-gold">
                    Contact Us
                  </Link>
                  <a href="tel:6155699687" className="btn-outline">
                    📞 615-569-9687
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <style jsx>{`
          .banner-section-custom {
            width: 100%;
            min-height: 100vh;
          }
          .slide-custom {
            min-height: 100vh;
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
          }
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
          }
          .content-box {
            position: relative;
            z-index: 10;
            text-align: center;
            padding: 20px;
            max-width: 800px;
          }
          .content-box h1 {
            font-size: 60px;
            color: #fff;
            margin-bottom: 20px;
            font-weight: bold;
          }
          .content-box h1 .gold {
            color: #daa520;
          }
          .content-box p {
            font-size: 22px;
            color: #fff;
            margin-bottom: 10px;
          }
          .content-box .sub {
            font-size: 18px;
            color: #daa520;
            margin-bottom: 30px;
          }
          .btns {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
          }
          .btn-gold {
            display: inline-block;
            padding: 15px 40px;
            background: #daa520;
            color: #1a1a1a;
            font-size: 18px;
            font-weight: bold;
            border-radius: 50px;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .btn-gold:hover {
            background: #ffd700;
            transform: scale(1.05);
          }
          .btn-outline {
            display: inline-block;
            padding: 15px 40px;
            border: 2px solid #daa520;
            color: #daa520;
            font-size: 18px;
            font-weight: bold;
            border-radius: 50px;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .btn-outline:hover {
            background: #daa520;
            color: #1a1a1a;
          }
          @media (max-width: 768px) {
            .content-box h1 {
              font-size: 36px;
            }
            .content-box p {
              font-size: 18px;
            }
            .btn-gold,
            .btn-outline {
              padding: 12px 30px;
              font-size: 16px;
            }
          }
        `}</style>
      </section>
    </>
  );
}
