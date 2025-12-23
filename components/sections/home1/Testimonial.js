"use client";
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
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Testimonial() {
  return (
    <>
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
                      "Best tiramisu I've ever had! The perfect dessert for our
                      graduation celebration. The service was amazing and the
                      food arrived fresh and on time."
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
    </>
  );
}
