import React, { Fragment } from "react";
import Slider from "react-slick";
import Customers from "./cutomers";
import Footer from "./footer";
import Nav from "./nav";


const Home = () => {
  const settings = {
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
  };
  

  return (
    <Fragment>
      <Nav/>
      <div className="home">
        <div className="homeText">
          <h1
            className="opacity"
            style={{ animation: "fadeleft 800ms ease 200ms forwards" }}
          >
            <span>P2P</span> Solution For Digital Markets.
          </h1>
          <Slider {...settings} className="slick-slider" style={{ width: "100%" }}>
            <div className="element element-1">
              <div
                className="icon opacity"
                style={{ animation: "faderight 800ms ease 400ms forwards" }}
              >
                <img src={require("../media/yt.png")} alt="" />
                <p>
                  Buy or sell your social media chanel safely and confidently
                </p>
              </div>
              <div className="list">
                <div
                  className="li opacity"
                  style={{ animation: "faderight 800ms ease 500ms forwards" }}
                >
                  <img src={require("../media/checkmark.png")} alt="" />
                  <span>Buyer and seller agree on contract</span>
                </div>
                <div
                  className="li opacity"
                  style={{ animation: "faderight 800ms ease 500ms forwards" }}
                >
                  <img src={require("../media/checkmark.png")} alt="" />
                  <span>The buyer hold the money with BadalPlus</span>
                </div>
                <div
                  className="li opacity"
                  style={{ animation: "faderight 800ms ease 700ms forwards" }}
                >
                  <img src={require("../media/checkmark.png")} alt="" />
                  <span>The seller transfer the channel to the seller</span>
                </div>
                <div
                  className="li opacity"
                  style={{ animation: "faderight 800ms ease 800ms forwards" }}
                >
                  <img src={require("../media/checkmark.png")} alt="" />
                  <span>BadalPlus pays the selle</span>
                </div>
                <div
                  className="li opacity"
                  style={{ animation: "faderight 800ms ease 900ms forwards" }}
                >
                  <img src={require("../media/checkmark.png")} alt="" />
                  <span>Buyer and seller agree on contract</span>
                </div>
              </div>
            </div>

            <div className="element element-2">
              <div className="icon">
                <img src={require("../media/games.jpg")} alt="" />
                <p>Buy or sell your game safely and confidently</p>
              </div>
              <div className="list">
                <div className="li">
                  <img src={require("../media/checkmark.png")} alt="" />
                  <span>Buyer and seller agree on contract</span>
                </div>
                <div className="li">
                  <img src={require("../media/checkmark.png")} alt="" />
                  <span>The buyer hold the money with BadalPlus</span>
                </div>
                <div className="li">
                  <img src={require("../media/checkmark.png")} alt="" />
                  <span>The seller transfer the channel to the seller</span>
                </div>
                <div className="li">
                  <img src={require("../media/checkmark.png")} alt="" />
                  <span>BadalPlus pays the selle</span>
                </div>
                <div className="li">
                  <img src={require("../media/checkmark.png")} alt="" />
                  <span>Buyer and seller agree on contract</span>
                </div>
              </div>
            </div>
          </Slider>
          <div className="list ch">
            <div
              className="check opacity"
              style={{ animation: "faderight 800ms ease 1000ms forwards" }}
            >
              <img src={require("../media/checkstar.png")} alt="" />
              <span>Enable swipe left and right</span>
            </div>
            <div
              className="check opacity"
              style={{ animation: "faderight 800ms ease 1100ms forwards" }}
            >
              <img src={require("../media/checkstar.png")} alt="" />
              <span>Change categories to our categories</span>
            </div>
            <div
              className="check opacity"
              style={{ animation: "faderight 800ms ease 1200ms forwards" }}
            >
              <img src={require("../media/checkstar.png")} alt="" />
              <span>Change logos for subcategories logos</span>
            </div>
          </div>
          <div className="getStarted">
            <a href="##">Get Started Now</a>
          </div>
        </div>
        <div className="homeImg">
          <img src={require("../media/image.png")} alt="" />
        </div>
      </div>

      <div className="categories">
        <div className="categorieMain" id="d1">
          <div className="dropL">
            <img src={require("../media/arrow.png")} alt="" />
            <a href="./pages/Cryptocurrency.html" className="dropM">
              <span>
                <img src={require("../media/crypt.png")} alt="" />
                USDT
              </span>
            </a>
          </div>
          <div className="categorie yellow js-scroll fade-btm">
            <div className="sectionInfo">
              <img src={require("../media/crypt.png")} alt="" />
              <span>Cryptocurrency</span>
            </div>
          </div>
        </div>
        <div className="categorieMain" id="d2">
          <div className="dropL">
            <img src={require("../media/arrow.png")} alt="" />
            <a href="./pages/OnlineBank.html" className="dropM">
              <span>
                <img src={require("../media/icons/Perfect.png")} alt="" />
                Perfect Money
              </span>
              <span>
                <img src={require("../media/icons/skrill.png")} alt="" />
                Skrill
              </span>
              <span>
                <img src={require("../media/icons/Payoneer.png")} alt="" />
                Payoneer
              </span>
              <span>
                <img src={require("../media/icons/Alipay.png")} alt="" />
                Alipay
              </span>
              <span>
                <img src={require("../media/icons/WeChat.png")} alt="" />
                WeChat
              </span>
              <span>
                <img src={require("../media/icons/cripton.png")} alt="" />
                NETELLER
              </span>
              <span>
                <img src={require("../media/icons/Webmoney.png")} alt="" />
                Webmoney
              </span>
              <span>
                <img src={require("../media/icons/Payza.png")} alt="" />
                Payza
              </span>
              <span>
                <img src={require("../media/icons/Payeer.png")} alt="" />
                Payeer
              </span>
            </a>
          </div>
          <div className="categorie purple js-scroll fade-btm">
            <div className="sectionInfo">
              <img src={require("../media/bank.png")} alt="" />
              <span>Online Bank</span>
            </div>
          </div>
        </div>
        <div className="categorieMain" id="d3">
          <div className="dropL">
            <img src={require("../media/arrow.png")} alt="" />
            <a href="./pages/SocialMedia.html" className="dropM">
              <span>
                <img src={require("../media/icons/youtube.png")} alt="" />
                YouTube
              </span>
              <span>
                <img src={require("../media/icons/facebook.png")} alt="" />
                Facebook
              </span>
              <span>
                <img src={require("../media/icons/twitter.png")} alt="" />
                Twitter
              </span>
              <span>
                <img src={require("../media/icons/tiktok.png")} alt="" />
                TikTok
              </span>
              <span>
                <img src={require("../media/icons/instagram.png")} alt="" />
                Instagram
              </span>
            </a>
          </div>
          <div className="categorie orange js-scroll fade-btm">
            <div className="sectionInfo">
              <img src={require("../media/yt-squre.png")} alt="" />
              <span> Social Media</span>
            </div>
          </div>
        </div>
        <div className="categorieMain" id="d4">
          <div className="dropL">
            <img src={require("../media/arrow.png")} alt="" />
            <a href="./pages/OnlineGames.html" className="dropM">
              <span>
                <img src={require("../media/icons/lol.png")} alt="" />
                League of legend
              </span>
              <span>
                <img src={require("../media/icons/valo.png")} alt="" />
                Valorant
              </span>
              <span>
                <img src={require("../media/icons/pubg.png")} alt="" />
                Pubg Mobile
              </span>
            </a>
          </div>
          <div className="categorie aqua js-scroll fade-btm">
            <div className="sectionInfo">
              <img src={require("../media/helmet.png")} alt="" />
              <span>Online Games</span>
            </div>
          </div>
        </div>
      </div>
      <div className="badal js-scroll fade-btm">
        <img src={require("../media/badal1.png")} alt="" />
      </div>

      <div className="icons">
        <div className="iconMain js-scroll fade-btm">
          <div className="icImg tp">
            <img src={require("../media/icon1.png")} alt="" />
          </div>
          <div className="icoText">Buyer and seller agree to terms</div>
        </div>
        <div className="iconMain m2 js-scroll fade-btm">
          <div className="icImg btm">
            <img src={require("../media/icon2.png")} alt="" />
          </div>
          <div className="icoText">Buyer submits payment</div>
        </div>
        <div className="iconMain m3 js-scroll fade-btm">
          <div className="icImg tp">
            <img src={require("../media/icon3.png")} alt="" />
          </div>
          <div className="icoText">Seller delivers goods or service to buyer</div>
        </div>
        <div className="iconMain m4 js-scroll fade-btm">
          <div className="icImg btm">
            <img src={require("../media/icon4.png")} alt="" />
          </div>
          <div className="icoText">Buyer approves goods or services</div>
        </div>
        <div className="iconMain m5 js-scroll fade-btm">
          <div className="icImg tp">
            <img src={require("../media/icon5.png")} alt="" />
          </div>
          <div className="icoText">Releases payment to seller</div>
        </div>
        <div className="p50">
          <a className="js-scroll fade-left" href="##">
            Get Started Now
          </a>
          <a className="learn js-scroll fade-right" href="##">
            Learn more
          </a>
        </div>
      </div>

      <div className="badal js-scroll fade-btm ">
        <img src={require("../media/badal2.png")} alt="" />
      </div>

      <div className="whyUs">
        <div className="whyText">
          <p className="js-scroll fade-left">Why to choose us</p>
          <h1 className="js-scroll fade-top">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>
          <div className="is">
            <div className="i js-scroll fade-btm">
              <img src={require("../media/feather.png")} alt="" />
              <span>We connect our customers with the best.</span>
            </div>
            <div className="i js-scroll fade-btm">
              <img src={require("../media/eye.png")}alt="" />
              <span>See everything to ensure the correct payment</span>
            </div>
            <div className="i js-scroll fade-btm">
              <img src={require("../media/sun.png")} alt="" />
              <span>Business-to-consumer long tail.</span>
            </div>
          </div>
        </div>
        <div className="whyImg js-scroll fade-btm">
          <img src={require("../media/glope.png")} alt="" />
        </div>
      </div>
      <Customers/>
      <Footer/>
    </Fragment>
  );
};

export default Home;
