import React from "react";
import "../Services/moredetails.css";
import { Link } from "react-router-dom";

function Moredetails() {
  return (
    <section className="more-section">
      <div className="More-details-container">
        <div className="row-1">
          <svg
            className="tramicon"
            xmlns="http://www.w3.org/2000/svg"
            width="66"
            height="63"
            viewBox="0 0 66 63"
            fill="none"
          >
            <g clipPath="url(#clip0_145_133)">
              <rect
                x="0.798828"
                width="65"
                height="63"
                rx="12"
                fill="white"
                fillOpacity="0.9"
              />
              <path
                d="M36.0075 13.125L38.0387 9.1875H46.8408V5.25H19.7575V9.1875H32.6221L30.5908 13.125C22.1137 13.3612 14.3408 15.0413 14.3408 22.3125V44.625C14.3408 48.5625 17.3471 51.7913 21.2471 52.3688L18.0242 55.4925C17.1575 56.3325 17.7533 57.75 18.9721 57.75H21.9242C22.2762 57.75 22.6283 57.6188 22.8721 57.3563L27.8825 52.5H38.7158L43.7262 57.3563C43.97 57.5925 44.3221 57.75 44.6742 57.75H47.6262C48.845 57.75 49.4408 56.3325 48.5742 55.5187L45.3512 52.395C49.2512 51.7912 52.2575 48.5625 52.2575 44.625V22.3125C52.2575 15.0413 44.4846 13.3612 36.0075 13.125ZM33.2992 48.5625C31.0512 48.5625 29.2367 46.8037 29.2367 44.625C29.2367 42.4463 31.0512 40.6875 33.2992 40.6875C35.5471 40.6875 37.3617 42.4463 37.3617 44.625C37.3617 46.8037 35.5471 48.5625 33.2992 48.5625ZM46.8408 36.75H19.7575V23.625H46.8408V36.75Z"
                fill="black"
              />
            </g>
          </svg>
          <span className="leftTopHeading">
            <h3>STR - RNV</h3>
          </span>
          <span className="price">
            <h1>
              € 02<sup>.00</sup>
            </h1>
          </span>
        </div>

        <div className="miniContainer">
          <div className="vertical-line-with-horizontal-lines">
            <div className="vertical-line"></div>
            <div className="horizontal-lines-container">
              <div className="horizontal-line">
                <div className="circle"></div>
              </div>
              <div className="horizontal-line">
                <div className="circle"></div>
              </div>
              <div className="horizontal-line">
                <div className="circle"></div>
              </div>
              <div className="horizontal-line">
                <div className="circle"></div>
              </div>
              <div className="horizontal-line">
                <div className="circle"></div>
              </div>
            </div>
          </div>
          <div className="fullJourneyDetails">
            <p className="allP">
              Neckerstad West, Mannheim - SRH Campus, Heidelberg
            </p>
          </div>
          <div className="dayDetails">
            <p className="allP">
              Total Duration : 0:45 | Today, Sat, 01/07/2023
            </p>
          </div>
          <div className="firstTramDetails">
            <div className="tramNameAndLogo">
              <svg
                className="tramicon2"
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 66 63"
                fill="none"
              >
                <g clipPath="url(#clip0_145_133)">
                  <rect
                    x="0.798828"
                    width="65"
                    height="63"
                    rx="12"
                    fill="white"
                    fillOpacity="0.9"
                  />
                  <path
                    d="M36.0075 13.125L38.0387 9.1875H46.8408V5.25H19.7575V9.1875H32.6221L30.5908 13.125C22.1137 13.3612 14.3408 15.0413 14.3408 22.3125V44.625C14.3408 48.5625 17.3471 51.7913 21.2471 52.3688L18.0242 55.4925C17.1575 56.3325 17.7533 57.75 18.9721 57.75H21.9242C22.2762 57.75 22.6283 57.6188 22.8721 57.3563L27.8825 52.5H38.7158L43.7262 57.3563C43.97 57.5925 44.3221 57.75 44.6742 57.75H47.6262C48.845 57.75 49.4408 56.3325 48.5742 55.5187L45.3512 52.395C49.2512 51.7912 52.2575 48.5625 52.2575 44.625V22.3125C52.2575 15.0413 44.4846 13.3612 36.0075 13.125ZM33.2992 48.5625C31.0512 48.5625 29.2367 46.8037 29.2367 44.625C29.2367 42.4463 31.0512 40.6875 33.2992 40.6875C35.5471 40.6875 37.3617 42.4463 37.3617 44.625C37.3617 46.8037 35.5471 48.5625 33.2992 48.5625ZM46.8408 36.75H19.7575V23.625H46.8408V36.75Z"
                    fill="black"
                  />
                </g>
              </svg>
              <h3 className="firstTramNameAndNumber">STR 2</h3>
              <h3 className="tramName">Feudenheim Endstelle, Mannheim</h3>
            </div>
            <div className="frequency">
              <div class="clock">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="#FF63CE"
                >
                  <path
                    d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM12 13.7C11.5 14 10.9 13.8 10.6 13.3L9.1 10.5C9 10.3 9 10.2 9 10V5C9 4.4 9.4 4 10 4C10.6 4 11 4.4 11 5V9.7L12.4 12.3C12.6 12.8 12.5 13.4 12 13.7Z"
                    fill="#FF63CE"
                  />
                </svg>
                <p className="frequently">Every 10 min</p>
              </div>
            </div>
            <div className="routeDetails">
              <div className="timeline">
                <span>9:10 am</span>
                <hr className="horizontal-line-journey" />
                <span>0:15 hrs</span>
                <hr className="horizontal-line-journey" />
                <span>9:55 am</span>
              </div>
              <p className="startStation">Bugermaster Fuch Strass, Mannheim</p>
              <p className="mid1Station">Kurpfalzbruche, Mannheim</p>
            </div>
          </div>
          <div className="change">
            <p className="allP">1 Change required</p>
          </div>
          <div className="transferTime">
            <span>&darr;</span>
            <span>7 minutes transfer time</span>
            <span>&darr;</span>
          </div>

          <div className="secondTramDetails">
            <div className="tramNameAndLogo2">
              <svg
                className="tramicon3"
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="45"
                viewBox="0 0 66 63"
                fill="none"
              >
                <g clipPath="url(#clip0_145_133)">
                  <rect
                    x="0.798828"
                    width="65"
                    height="63"
                    rx="12"
                    fill="white"
                    fillOpacity="0.9"
                  />
                  <path
                    d="M36.0075 13.125L38.0387 9.1875H46.8408V5.25H19.7575V9.1875H32.6221L30.5908 13.125C22.1137 13.3612 14.3408 15.0413 14.3408 22.3125V44.625C14.3408 48.5625 17.3471 51.7913 21.2471 52.3688L18.0242 55.4925C17.1575 56.3325 17.7533 57.75 18.9721 57.75H21.9242C22.2762 57.75 22.6283 57.6188 22.8721 57.3563L27.8825 52.5H38.7158L43.7262 57.3563C43.97 57.5925 44.3221 57.75 44.6742 57.75H47.6262C48.845 57.75 49.4408 56.3325 48.5742 55.5187L45.3512 52.395C49.2512 51.7912 52.2575 48.5625 52.2575 44.625V22.3125C52.2575 15.0413 44.4846 13.3612 36.0075 13.125ZM33.2992 48.5625C31.0512 48.5625 29.2367 46.8037 29.2367 44.625C29.2367 42.4463 31.0512 40.6875 33.2992 40.6875C35.5471 40.6875 37.3617 42.4463 37.3617 44.625C37.3617 46.8037 35.5471 48.5625 33.2992 48.5625ZM46.8408 36.75H19.7575V23.625H46.8408V36.75Z"
                    fill="black"
                  />
                </g>
              </svg>
              <h3 className="firstTramNameAndNumber">STR 2</h3>
              <h3 className="tramName2">Feudenheim Endstelle, Mannheim</h3>
            </div>
            <div className="frequency2">
              <div class="clock2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="#FF63CE"
                >
                  <path
                    d="M10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10C20 4.5 15.5 0 10 0ZM12 13.7C11.5 14 10.9 13.8 10.6 13.3L9.1 10.5C9 10.3 9 10.2 9 10V5C9 4.4 9.4 4 10 4C10.6 4 11 4.4 11 5V9.7L12.4 12.3C12.6 12.8 12.5 13.4 12 13.7Z"
                    fill="#FF63CE"
                  />
                </svg>
                <p className="frequently2">Every 10 min.</p>
              </div>
            </div>
            <div className="furtherRouteDetails">
              <div className="timeline2">
                <span>9:10 am</span>
                <hr className="horizontal-line-journey2" />
                <span>0:15 hrs</span>
                <hr className="horizontal-line-journey2" />
                <span>9:55 am</span>
              </div>
              <p className="startStation2">Kurpfalzbruche, Mannheim</p>
              <p className="mid1Station2">SRH Campus, Heidelberg</p>
            </div>
          </div>
        </div>
        <Link to="/service">
          <button className="back-button">Back</button>
        </Link>
        <Link to="/bookingdetails">
          <button className="login-pay-button">Login & Pay</button>
        </Link>
      </div>
    </section>
  );
}

export default Moredetails;
