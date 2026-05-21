import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "./assets/logo.png";
import searchIcon from "./assets/search.png";
import notificationIcon from "./assets/notification.png";
import hamburgerIcon from "./assets/hamburger.png";
import closeIcon from "./assets/close.png";
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

function App() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
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
          <a href="#Support">Support</a>
          <a href="#Subscriptions">Subscriptions</a>

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
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m1} alt="Movie 1" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m2} alt="Movie 2" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m3} alt="Movie 3" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m4} alt="Movie 4" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m5} alt="Movie 5" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up ">
            <img src={m6} alt="Movie 6" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m7} alt="Movie 7" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m8} alt="Movie 8" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m9} alt="Movie 9" />
          </div>

          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m10} alt="Movie 10" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m11} alt="Movie 11" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m12} alt="Movie 12" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m13} alt="Movie 13" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m14} alt="Movie 14" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m15} alt="Movie 15" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m16} alt="Movie 16" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m17} alt="Movie 17" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m18} alt="Movie 18" />
          </div>

          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m19} alt="Movie 19" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m20} alt="Movie 20" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m21} alt="Movie 21" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m22} alt="Movie 22" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m23} alt="Movie 23" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m24} alt="Movie 24" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m25} alt="Movie 25" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m26} alt="Movie 26" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m27} alt="Movie 27" />
          </div>

          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m10} alt="Movie 10" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m11} alt="Movie 11" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m12} alt="Movie 12" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m13} alt="Movie 13" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m14} alt="Movie 14" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m15} alt="Movie 15" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m16} alt="Movie 16" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m17} alt="Movie 17" />
          </div>
          <div className="hero-image" aos-delay="100" data-aos="fade-up">
            <img src={m18} alt="Movie 18" />
          </div>
        </div>

        <div className="hero-content">
          <h1 data-aos-delay="100" data-aos="fade-up">
            The Best Streaming Experience.
          </h1>
          <p data-aos-delay="100" data-aos="fade-up">
            StreamVibe is the best streaming experience for watching your
            favorite movies and shows on demand, anytime, anywhere. With
            StreamVibe, you can enjoy a wide variety of content, including the
            latest blockbusters, classic movies, popular TV shows, and more. You
            can also create your own watchlists, so you can easily find the
            content you want to watch..
          </p>
          <button className="btn" data-aos-delay="100" data-aos="fade-up">
            <img src={playMusicIcon} alt="Play Music" />
            <span>Watch Now</span>
          </button>
        </div>
      </section>

      <section className="slider">
        <div className="slider-container"></div>
      </section>
    </>
  );
}

export default App;
