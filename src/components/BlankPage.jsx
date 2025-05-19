import React, { useEffect, useRef, useState } from "react";
import "./Blank.css";
import ColorSchemesExample from "./Navigation Bar";
import Headphone from "./Images/pexels-nardo-1870916-3574678(1).jpg";
import star from "./Images/erasebg-transformed.png";
import troop from "./Images/erasebg-transformed(1).png";
import connect from "./Images/pexels-rquiros-2330137.jpg";

const BlankPage = () => {
  const [showGrid, setShowGrid] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imageRef.current) {
        imageRef.current.classList.add("move-to-grid");
        setTimeout(() => {
          setShowGrid(true);
          setTimeout(() => setTextVisible(true), 100);
        }, 1000);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ColorSchemesExample />
      <div className="containable">
        {!showGrid && (
          <img
            ref={imageRef}
            src={Headphone}
            alt="Initial view"
            className="initial-image"
          />
        )}

        {showGrid && (
          <div className="grids-layout">
            <div className="one1">
              <div className="one1-up">
                <div className="box box-wide">
                  <img src={star} alt="" />
                  <h1
                    className={`headline animated delayed-1 ${
                      textVisible ? "show" : ""
                    }`}
                  >
                    From thought to <span className="italic">magic</span> to
                    book — all in one place.
                  </h1>
                </div>
                <div className="box dark-box image-box">
                  <img
                    src={Headphone}
                    alt="DJ"
                    className={`image animated zoomIn ${
                      textVisible ? "show" : ""
                    }`}
                  />
                </div>
              </div>
              <div className="one1-down">
                <div className="box one">
                  <img src={troop} alt="" />
                  <h2
                    className={`subheading animated delayed-1 ${
                      textVisible ? "show" : ""
                    }`}
                  >
                    Writing a book is a powerful way to share your story, ideas,
                    or knowledge with the world. It’s a chance to express
                    yourself, inspire others, and leave a lasting impact.
                    Everyone has something worth saying — your book could be the
                    spark someone else needs.
                  </h2>
                </div>
                <div className="box dark-box two arrow-above-right">
                  <div className="notr">
                    <p>
                      Just a <br />
                      Click Away
                    </p>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>

                  <h1
                    className={`paragraph animated delayed-2 ${
                      textVisible ? "show" : ""
                    }`}
                  >
                    Your <span className="italic">Masterpiece</span> Starts Here
                  </h1>
                </div>
              </div>
            </div>
            <div className="two2">
              <div
                className={`head animated delayed-1 ${
                  textVisible ? "show" : ""
                }`}
              >
                <div className="title3">
                  {" "}
                  <h2>Top Feeds</h2>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>

                <img src={connect} alt="" />
                <ul>
                  <li>Biography: J.K. Rowling</li>
                  <li>Hot Topics</li>
                  <li>Leading Podcast</li>
                </ul>
              </div>

              <div className="box contact-box">
                <div
                  className={`contact animated delayed-3 ${
                    textVisible ? "show" : ""
                  }`}
                >
                  <p
                    className={`animated delayed-5 ${
                      textVisible ? "show" : ""
                    }`}
                  >
                    Instagram
                  </p>
                  <p
                    className={`animated delayed-6 ${
                      textVisible ? "show" : ""
                    }`}
                  >
                    Youtube
                  </p>
                  <p
                    className={`animated delayed-7 ${
                      textVisible ? "show" : ""
                    }`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    Twitter
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default BlankPage;
