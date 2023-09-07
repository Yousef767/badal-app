import React from 'react';

const Footer = () => {
  return (
    <footer>
    <div className="footerTop">
      <div className="footerLinks">
        <h4>SERVICES</h4>
        <a href="##">Online game</a>
        <a href="##">Social media</a>
        <a href="##">Cryptocurrency</a>
        <a href="##">Bank Transfer</a>
      </div>
      <div className="footerLinks">
        <h4>SUPPORT</h4>
        <a href="##">Fee Calculator</a>
        <a href="##"> Payment Options</a>
        <a href="##">Approved Carriers</a>
        <a href="##">Security </a>
        <a href="##"> Fraud Prevention</a>
        <a href="##"> Common Questions</a>
        <a href="##">Report A Bug </a>
      </div>
      <div className="footerLinks">
        <h4>COMPANY</h4>
        <a href="##">Awards </a>
        <a href="##">In the News </a>
      </div>
      <div className="footerLinks">
        <h4>CONTACT US</h4>
        <a href="##">Badalplus@gmail.com </a>
        <a href="##">(010) 123 - 5772 </a>
      </div>
      <div className="footerLinks">
        <h4>ABOUT US</h4>
        <span>An online P2P smart contract system to
          buy, sell and swap digital products
          without 3rd party </span>
      </div>
    </div>
    <div className="footerLogo">
      <img src={require("../media/logo.png")} alt=""/>
      <h4><span>PRIVACY POLICY</span> <span className="line">|</span> <span>LICENSES AND COMPLAINTS</span> <span
          className="line">|</span>
        <span>LEGAL</span>
      </h4>
      <span className="copy">
        <div>Copyright ©️ 2023 Badal Plus</div>
        <div>A company of Freelancer Limited</div>
      </span>
    </div>
  </footer>
  );
}

export default Footer;
