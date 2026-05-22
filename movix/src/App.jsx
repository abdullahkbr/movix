import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import logo from "./assets/logo.png";
import searchIcon from "./assets/search.png";
import notificationIcon from "./assets/notification.png";
import hamburgerIcon from "./assets/hamburger.png";
import closeIcon from "./assets/close.png";

// Import all movie images
import m1 from "./assets/m1.png";
import m2 from "./assets/m2.png";
import m3 from "./assets/m3.png";
import m4 from "./assets/m4.png";
import m5 from "./assets/m5.png";
import m6 from "./assets/m6.png";
import m7 from "./assets/m7.png";
import m8 from "./assets/m8.png";
import m9 from "./assets/m9.png";
import m10 from "./assets/m10.png";
import m11 from "./assets/m11.png";
import m12 from "./assets/m12.png";
import m13 from "./assets/m13.png";
import m14 from "./assets/m14.png";
import m15 from "./assets/m15.png";
import m16 from "./assets/m16.png";
import m17 from "./assets/m17.png";
import m18 from "./assets/m18.png";
import m19 from "./assets/m19.png";
import m20 from "./assets/m20.png";
import m21 from "./assets/m21.png";
import m22 from "./assets/m22.png";
import m23 from "./assets/m23.png";
import m24 from "./assets/m24.png";
import m25 from "./assets/m25.png";
import m26 from "./assets/m26.png";
import m27 from "./assets/m27.png";
import playMusicIcon from "./assets/playmusic.png";

// Device icons
import phoneIcon from "./assets/smartphone.svg";
import gamesIcon from "./assets/games.svg";
import tvIcon from "./assets/tv.svg";
import laptopIcon from "./assets/laptop.svg";
import tabletIcon from "./assets/tablet.svg";
import vrIcon from "./assets/vr.svg";

// Category data with 4 images (2x2 grid) per category
const categories = [
  {
    name: "Action",
    images: [m1, m2, m7, m8],
  },
  {
    name: "Adventure",
    images: [m3, m4, m9, m10],
  },
  {
    name: "Comedy",
    images: [m5, m6, m11, m12],
  },
  {
    name: "Drama",
    images: [m13, m14, m19, m20],
  },
  {
    name: "Horror",
    images: [m15, m16, m21, m22],
  },
  {
    name: "Thriller",
    images: [m17, m18, m23, m24],
  },
];

const faqs = [
  {
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more.",
  },
  {
    question: "How much does StreamVibe cost?",
    answer:
      "StreamVibe offers flexible pricing plans to suit your needs. Choose from our Basic, Standard, or Premium plans. Each plan includes unlimited streaming access to our entire content library.",
  },
  {
    question: "What content is available on StreamVibe?",
    answer:
      "StreamVibe offers a vast library of content including movies, TV shows, documentaries, and original series. We regularly update our content library with new releases and exclusive titles.",
  },
  {
    question: "How can I watch StreamVibe?",
    answer:
      "You can watch StreamVibe on any device including smartphones, tablets, smart TVs, laptops, gaming consoles, and VR headsets. Simply download our app or visit our website.",
  },
  {
    question: "How do I sign up for StreamVibe?",
    answer:
      "To sign up for StreamVibe, simply click on the 'Sign Up' button on our homepage and follow the prompts to create your account. Choose your subscription plan and start streaming.",
  },
  {
    question: "What is the StreamVibe free trial?",
    answer:
      "New StreamVibe users can enjoy a 7-day free trial to explore our entire content library. No credit card required to start your free trial.",
  },
  {
    question: "How do I contact StreamVibe customer support?",
    answer:
      "Our dedicated support team is available 24/7. You can reach us via email, live chat, or phone. Visit the Contact Us page for more information.",
  },
  {
    question: "What are the StreamVibe payment methods?",
    answer:
      "StreamVibe accepts all major credit cards, debit cards, digital wallets, and other secure payment methods for your convenience.",
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null); // Start with no item open

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingData = {
    basic: { monthly: 9.99, yearly: 99.99 },
    standard: { monthly: 14.99, yearly: 149.99 },
    premium: { monthly: 19.99, yearly: 199.99 },
  };

  return (
    <>
      <header className="App-header">
        <a href="https://movix.com" target="_blank" rel="noopener noreferrer">
          <img src={logo} className="logo" alt="logo" />
        </a>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="https://movix.com" target="_blank" rel="noopener noreferrer">
            Home
          </a>
          <a href="#movies">Movies & Shows</a>
          <a href="#features">Features</a>
          <a href="#faq">FAQs</a>

          <button className="close" onClick={() => setIsOpen(false)}>
            <img src={closeIcon} alt="close" />
          </button>
        </div>

        <div className="nav-icons">
          <button className="search btn">
            <img src={searchIcon} alt="search" />
          </button>
          <button className="notification btn">
            <img src={notificationIcon} alt="notification" />
          </button>
        </div>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <img src={hamburgerIcon} alt="hamburger" />
        </button>
      </header>

      <section className="hero">
        <div className="hero-container">
          {[
            m1,
            m2,
            m3,
            m4,
            m5,
            m6,
            m7,
            m8,
            m9,
            m10,
            m11,
            m12,
            m13,
            m14,
            m15,
            m16,
            m17,
            m18,
            m19,
            m20,
            m21,
            m22,
            m23,
            m24,
            m25,
            m26,
            m27,
            m10,
            m11,
            m12,
            m13,
            m14,
            m15,
            m16,
            m17,
            m18,
          ].map((movie, index) => (
            <div
              key={index}
              className="hero-image"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={movie} alt={`Movie ${index}`} />
            </div>
          ))}
        </div>

        <div className="hero-content">
          <h1 data-aos-delay="200" data-aos="fade-up">
            The Best Streaming Experience.
          </h1>
          <p data-aos-delay="200" data-aos="fade-up">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch.
          </p>
          <button className="btn" data-aos-delay="200" data-aos="fade-up">
            <img src={playMusicIcon} alt="Play Music" />
            <span>Watch Now</span>
          </button>
        </div>
      </section>

      <section className="slider" id="movies">
        <div className="slider-header">
          <div className="slider-titles">
            <h2>Explore our wide variety of categories</h2>
            <p>
              Whether you're looking for a comedy to make you laugh, a drama to
              make you think, or a documentary to learn something new
            </p>
          </div>

          <div className="slider-controls">
            <div className="swiper-button-prev-custom">←</div>
            <div className="swiper-pagination-custom"></div>
            <div className="swiper-button-next-custom">→</div>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          pagination={{
            el: ".swiper-pagination-custom",
            type: "bullets",
          }}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index} className="swiper-slide category-slide">
              <div className="category-card">
                <div className="category-grid">
                  {category.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="grid-item">
                      <img src={image} alt={`${category.name} ${imgIndex}`} />
                    </div>
                  ))}
                </div>
                <div className="category-footer">
                  <span className="category-name">{category.name}</span>
                  <span className="category-arrow">→</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="features" id="features">
        <div className="features-container">
          <div className="feature-header">
            <h2>We Provide you streaming experience across various devices.</h2>
            <p>
              Our dedicated support team is available 24/7 to assist you with
              any questions or issues you may have. Whether you need help with
              your account, billing, or technical support, we're here to ensure
              you have the best streaming experience possible.
            </p>
          </div>

          <div className="feature-grid">
            <div
              className="feature-item"
              data-aos-delay="100"
              data-aos="fade-up"
            >
              <div className="feature-item-header">
                <div className="feature-icon">
                  <img src={phoneIcon} alt="Smartphones" />
                </div>
                <h3>Smartphones</h3>
              </div>
              <p>
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
            <div
              className="feature-item"
              data-aos-delay="200"
              data-aos="fade-up"
            >
              <div className="feature-item-header">
                <div className="feature-icon">
                  <img src={tabletIcon} alt="Tablet" />
                </div>
                <h3>Tablet</h3>
              </div>
              <p>
                StreamVibe is optimized for both Android and iOS tablets.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
            <div
              className="feature-item"
              data-aos-delay="300"
              data-aos="fade-up"
            >
              <div className="feature-item-header">
                <div className="feature-icon">
                  <img src={tvIcon} alt="Smart TV" />
                </div>
                <h3>Smart TV</h3>
              </div>
              <p>
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>

            <div
              className="feature-item"
              data-aos-delay="400"
              data-aos="fade-up"
            >
              <div className="feature-item-header">
                <div className="feature-icon">
                  <img src={laptopIcon} alt="Laptop" />
                </div>
                <h3>Laptop</h3>
              </div>
              <p>
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>

            <div
              className="feature-item"
              data-aos-delay="500"
              data-aos="fade-up"
            >
              <div className="feature-item-header">
                <div className="feature-icon">
                  <img src={gamesIcon} alt="Gaming Consoles" />
                </div>
                <h3>Gaming Consoles</h3>
              </div>
              <p>
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>

            <div
              className="feature-item"
              data-aos-delay="500"
              data-aos="fade-up"
            >
              <div className="feature-item-header">
                <div className="feature-icon">
                  <img src={vrIcon} alt="VR" />
                </div>
                <h3>VR Headsets</h3>
              </div>
              <p>
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="faq-container">
          <div className="faq-header">
            <div className="faq-titles">
              <h2>Frequently Asked Questions</h2>
              <p>
                Got questions? We've got answers! Check out our FAQ section to
                find answers to the most common questions about StreamVibe
              </p>
            </div>

            <button className="btn-primary">Ask a Question</button>
          </div>
          <div className="faq-items">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? "active" : ""}`}
                onClick={() => {
                  if (openIndex === index) {
                    setOpenIndex(null);
                  } else {
                    setOpenIndex(index);
                  }
                }}
                data-number={String(index + 1).padStart(2, "0")}
              >
                <h3>{faq.question}</h3>
                {openIndex === index && <p>{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="pricing-container">
          <div className="pricing-header">
            <div className="pricing-titles">
              <h2>Simple, Transparent Pricing</h2>
              <p>
                Choose the plan that's right for you. All plans include a 14-day
                free trial.
              </p>
            </div>

            <div className="pricing-cta">
              <button
                className={`btn-primary ${billingCycle === "monthly" ? "active" : ""}`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly
              </button>
              <button
                className={`btn-primary ${billingCycle === "yearly" ? "active" : ""}`}
                onClick={() => setBillingCycle("yearly")}
              >
                Yearly
              </button>
            </div>
          </div>

          <div className="pricing-items">
            <div className="pricing-item">
              <h3>Basic Plan</h3>
              <p>
                Enjoy an extensive library of movies and shows, featuring a
                range of content, including recently released titles.
              </p>
              <h3 className="price">
                $
                {billingCycle === "monthly"
                  ? pricingData.basic.monthly
                  : pricingData.basic.yearly}
                <span className="price-period">
                  /{billingCycle === "monthly" ? "month" : "year"}
                </span>
              </h3>

              <div className="pricing-item__cta">
                <button className="item-btn">Start Free Trial</button>
                <button className="item-btn__secondary">Choose Plan</button>
              </div>
            </div>

            <div className="pricing-item">
              <h3>Standard Plan</h3>
              <p>
                Enjoy an extensive library of movies and shows, featuring a
                range of content, including recently released titles.
              </p>
              <h3 className="price">
                $
                {billingCycle === "monthly"
                  ? pricingData.standard.monthly
                  : pricingData.standard.yearly}
                <span className="price-period">
                  /{billingCycle === "monthly" ? "month" : "year"}
                </span>
              </h3>

              <div className="pricing-item__cta">
                <button className="item-btn">Start Free Trial</button>
                <button className="item-btn__secondary">Choose Plan</button>
              </div>
            </div>

            <div className="pricing-item">
              <h3>Premium Plan</h3>
              <p>
                Enjoy an extensive library of movies and shows, featuring a
                range of content, including recently released titles.
              </p>
              <h3 className="price">
                $
                {billingCycle === "monthly"
                  ? pricingData.premium.monthly
                  : pricingData.premium.yearly}
                <span className="price-period">
                  /{billingCycle === "monthly" ? "month" : "year"}
                </span>
              </h3>

              <div className="pricing-item__cta">
                <button className="item-btn">Start Free Trial</button>
                <button className="item-btn__secondary">Choose Plan</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
