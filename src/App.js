import { useEffect } from "react";
import Home from "./components/home";
import "./js/slick/slick.css";
import "./js/slick/slick-theme.css";
import "./scss/style.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    let scrollElements = document.querySelectorAll(".js-scroll");

  let elementInView = (el, dividend = 1) => {
    let elementTop = el.getBoundingClientRect().top;

    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };

  let elementOutofView = (el) => {
    let elementTop = el.getBoundingClientRect().top;

    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  let displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };

  let hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };

  let handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
