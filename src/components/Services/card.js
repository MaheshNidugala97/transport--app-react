
import React, { useState } from "react";
import "../Services/card.css";
import { Link } from "react-router-dom";
import icon1 from "../Assets/tram1.png";
import icon1a from "../Assets/BUS1.png";
import icon2 from "../Assets/Taxi1.png";
import icon2a from "../Assets/Uber1.png";
import icon3 from "../Assets/sharing1.png";

function Card() {
    const [selectedIcon, setSelectedIcon] = useState("");
    const handleIconClick = (iconName) => {
        setSelectedIcon(iconName);
        // Perform action based on the clicked icon
        console.log(`Clicked ${iconName} icon`);

    };

    return (
        <div className="card">
            <div className="icon-row">
                <div className="icon-column" onClick={() => handleIconClick("Icon 1")}>
                    <span>Public </span>
                    <div className="icon-wrapper">
                        <div className="icon-box">
                            <img src={icon1} alt="Icon 1" className="icon" />
                            <div className="forward-slash">/</div>
                            <img src={icon1a} alt="Icon 1a" className="icon" />
                        </div>
                    </div>

                </div>
                <div className="icon-column" onClick={() => handleIconClick("Icon 2")}>
                    <span>Rental</span>
                    <div className="icon-wrapper">
                        <div className="icon-box">
                            <img src={icon2} alt="Icon 1" className="icon" />
                            <div className="forward-slash">/</div>
                            <img src={icon2a} alt="Icon 1a" className="icon" />
                        </div>
                    </div>

                </div>
                <div className="icon-column" onClick={() => handleIconClick("Icon 3")}>
                    <span>Sharing</span>
                    <div className="icon-wrapper">
                        <div className="icon-box">
                            <img src={icon3} alt="Icon 3" className="icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-content-wrapper">
                <div className="card-content">
                    <div className="ContainerofCard">
                        <div className='row1'>
                            <svg className='tramiconservices' xmlns="http://www.w3.org/2000/svg" width="66" height="63" viewBox="0 0 66 63" fill="none">
                                <g clipPath="url(#clip0_145_133)">
                                    <rect x="0.798828" width="65" height="63" rx="12" fill="white" fillOpacity="0.9" />
                                    <path d="M36.0075 13.125L38.0387 9.1875H46.8408V5.25H19.7575V9.1875H32.6221L30.5908 13.125C22.1137 13.3612 14.3408 15.0413 14.3408 22.3125V44.625C14.3408 48.5625 17.3471 51.7913 21.2471 52.3688L18.0242 55.4925C17.1575 56.3325 17.7533 57.75 18.9721 57.75H21.9242C22.2762 57.75 22.6283 57.6188 22.8721 57.3563L27.8825 52.5H38.7158L43.7262 57.3563C43.97 57.5925 44.3221 57.75 44.6742 57.75H47.6262C48.845 57.75 49.4408 56.3325 48.5742 55.5187L45.3512 52.395C49.2512 51.7912 52.2575 48.5625 52.2575 44.625V22.3125C52.2575 15.0413 44.4846 13.3612 36.0075 13.125ZM33.2992 48.5625C31.0512 48.5625 29.2367 46.8037 29.2367 44.625C29.2367 42.4463 31.0512 40.6875 33.2992 40.6875C35.5471 40.6875 37.3617 42.4463 37.3617 44.625C37.3617 46.8037 35.5471 48.5625 33.2992 48.5625ZM46.8408 36.75H19.7575V23.625H46.8408V36.75Z" fill="black" />
                                </g>
                            </svg>
                            <span className='leftTopHeadingServices'><h3>STR - RNV</h3></span>
                            <span ><h1 className='priceServices'>€ 02<sup>.00</sup></h1></span>
                        </div>
                        <div className="Servicestimeline">
                            <span>9:10 am</span>
                            <hr className="horizontal-line-journey-services" />
                            <span>0:15 hrs</span>
                            <hr className="horizontal-line-journey-services" />
                            <span>9:55 am</span>
                        </div>
                        <p className='startStationServices'>Bugermaster Fuch Strass, Mannheim</p>
                        <p className='changeInServices'>1 Change</p>
                        <p className='mid1StationServices'>SRH Campus, Hiedelberg</p>
                        <Link to="/moredetails">
                            <button className="more">More Details</button>
                        </Link>
                    </div>
                    <div className="ContainerofCard">
                        <div className='row1'>
                            <svg className='tramiconservices' xmlns="http://www.w3.org/2000/svg" width="66" height="63" viewBox="0 0 66 63" fill="none">
                                <g clipPath="url(#clip0_145_133)">
                                    <rect x="0.798828" width="65" height="63" rx="12" fill="white" fillOpacity="0.9" />
                                    <path d="M36.0075 13.125L38.0387 9.1875H46.8408V5.25H19.7575V9.1875H32.6221L30.5908 13.125C22.1137 13.3612 14.3408 15.0413 14.3408 22.3125V44.625C14.3408 48.5625 17.3471 51.7913 21.2471 52.3688L18.0242 55.4925C17.1575 56.3325 17.7533 57.75 18.9721 57.75H21.9242C22.2762 57.75 22.6283 57.6188 22.8721 57.3563L27.8825 52.5H38.7158L43.7262 57.3563C43.97 57.5925 44.3221 57.75 44.6742 57.75H47.6262C48.845 57.75 49.4408 56.3325 48.5742 55.5187L45.3512 52.395C49.2512 51.7912 52.2575 48.5625 52.2575 44.625V22.3125C52.2575 15.0413 44.4846 13.3612 36.0075 13.125ZM33.2992 48.5625C31.0512 48.5625 29.2367 46.8037 29.2367 44.625C29.2367 42.4463 31.0512 40.6875 33.2992 40.6875C35.5471 40.6875 37.3617 42.4463 37.3617 44.625C37.3617 46.8037 35.5471 48.5625 33.2992 48.5625ZM46.8408 36.75H19.7575V23.625H46.8408V36.75Z" fill="black" />
                                </g>
                            </svg>
                            <span className='leftTopHeadingServices'><h3>STR - RNV</h3></span>
                            <span ><h1 className='priceServices'>€ 02<sup>.00</sup></h1></span>
                        </div>
                        <div className="Servicestimeline">
                            <span>9:10 am</span>
                            <hr className="horizontal-line-journey-services" />
                            <span>0:15 hrs</span>
                            <hr className="horizontal-line-journey-services" />
                            <span>9:55 am</span>
                        </div>
                        <p className='startStationServices'>Bugermaster Fuch Strass, Mannheim</p>
                        <p className='changeInServices'>1 Change</p>
                        <p className='mid1StationServices'>SRH Campus, Hiedelberg</p>
                        <Link to="/moredetails">
                            <button className="more">More Details</button>
                        </Link>
                    </div>
                    <div className="ContainerofCard">
                        <div className='row1'>
                            <svg className='tramiconservices' xmlns="http://www.w3.org/2000/svg" width="66" height="63" viewBox="0 0 66 63" fill="none">
                                <g clipPath="url(#clip0_145_133)">
                                    <rect x="0.798828" width="65" height="63" rx="12" fill="white" fillOpacity="0.9" />
                                    <path d="M36.0075 13.125L38.0387 9.1875H46.8408V5.25H19.7575V9.1875H32.6221L30.5908 13.125C22.1137 13.3612 14.3408 15.0413 14.3408 22.3125V44.625C14.3408 48.5625 17.3471 51.7913 21.2471 52.3688L18.0242 55.4925C17.1575 56.3325 17.7533 57.75 18.9721 57.75H21.9242C22.2762 57.75 22.6283 57.6188 22.8721 57.3563L27.8825 52.5H38.7158L43.7262 57.3563C43.97 57.5925 44.3221 57.75 44.6742 57.75H47.6262C48.845 57.75 49.4408 56.3325 48.5742 55.5187L45.3512 52.395C49.2512 51.7912 52.2575 48.5625 52.2575 44.625V22.3125C52.2575 15.0413 44.4846 13.3612 36.0075 13.125ZM33.2992 48.5625C31.0512 48.5625 29.2367 46.8037 29.2367 44.625C29.2367 42.4463 31.0512 40.6875 33.2992 40.6875C35.5471 40.6875 37.3617 42.4463 37.3617 44.625C37.3617 46.8037 35.5471 48.5625 33.2992 48.5625ZM46.8408 36.75H19.7575V23.625H46.8408V36.75Z" fill="black" />
                                </g>
                            </svg>
                            <span className='leftTopHeadingServices'><h3>STR - RNV</h3></span>
                            <span ><h1 className='priceServices'>€ 02<sup>.00</sup></h1></span>
                        </div>
                        <div className="Servicestimeline">
                            <span>9:10 am</span>
                            <hr className="horizontal-line-journey-services" />
                            <span>0:15 hrs</span>
                            <hr className="horizontal-line-journey-services" />
                            <span>9:55 am</span>
                        </div>
                        <p className='startStationServices'>Bugermaster Fuch Strass, Mannheim</p>
                        <p className='changeInServices'>1 Change</p>
                        <p className='mid1StationServices'>SRH Campus, Hiedelberg</p>
                        <Link to="/moredetails">
                            <button className="more">More Details</button>
                        </Link>
                    </div>
                    <div className="ContainerofCard">
                        <div className='row1'>
                            <svg className='tramiconservices' xmlns="http://www.w3.org/2000/svg" width="66" height="63" viewBox="0 0 66 63" fill="none">
                                <g clipPath="url(#clip0_145_133)">
                                    <rect x="0.798828" width="65" height="63" rx="12" fill="white" fillOpacity="0.9" />
                                    <path d="M36.0075 13.125L38.0387 9.1875H46.8408V5.25H19.7575V9.1875H32.6221L30.5908 13.125C22.1137 13.3612 14.3408 15.0413 14.3408 22.3125V44.625C14.3408 48.5625 17.3471 51.7913 21.2471 52.3688L18.0242 55.4925C17.1575 56.3325 17.7533 57.75 18.9721 57.75H21.9242C22.2762 57.75 22.6283 57.6188 22.8721 57.3563L27.8825 52.5H38.7158L43.7262 57.3563C43.97 57.5925 44.3221 57.75 44.6742 57.75H47.6262C48.845 57.75 49.4408 56.3325 48.5742 55.5187L45.3512 52.395C49.2512 51.7912 52.2575 48.5625 52.2575 44.625V22.3125C52.2575 15.0413 44.4846 13.3612 36.0075 13.125ZM33.2992 48.5625C31.0512 48.5625 29.2367 46.8037 29.2367 44.625C29.2367 42.4463 31.0512 40.6875 33.2992 40.6875C35.5471 40.6875 37.3617 42.4463 37.3617 44.625C37.3617 46.8037 35.5471 48.5625 33.2992 48.5625ZM46.8408 36.75H19.7575V23.625H46.8408V36.75Z" fill="black" />
                                </g>
                            </svg>
                            <span className='leftTopHeadingServices'><h3>STR - RNV</h3></span>
                            <span ><h1 className='priceServices'>€ 02<sup>.00</sup></h1></span>
                        </div>
                        <div className="Servicestimeline">
                            <span>9:10 am</span>
                            <hr className="horizontal-line-journey-services" />
                            <span>0:15 hrs</span>
                            <hr className="horizontal-line-journey-services" />
                            <span>9:55 am</span>
                        </div>
                        <p className='startStationServices'>Bugermaster Fuch Strass, Mannheim</p>
                        <p className='changeInServices'>1 Change</p>
                        <p className='mid1StationServices'>SRH Campus, Hiedelberg</p>
                        <Link to="/moredetails">
                            <button className="more">More Details</button>
                        </Link>
                    </div>
                </div>
                {selectedIcon && (
                    <div className="card-content">
                        <div className="ContainerofCard">
                            <div className='row1'>
                                <svg className='tramiconservices' xmlns="http://www.w3.org/2000/svg" width="66" height="63" viewBox="0 0 66 63" fill="none">
                                    <g clipPath="url(#clip0_145_133)">
                                        <rect x="0.798828" width="65" height="63" rx="12" fill="white" fillOpacity="0.9" />
                                        <path d="M36.0075 13.125L38.0387 9.1875H46.8408V5.25H19.7575V9.1875H32.6221L30.5908 13.125C22.1137 13.3612 14.3408 15.0413 14.3408 22.3125V44.625C14.3408 48.5625 17.3471 51.7913 21.2471 52.3688L18.0242 55.4925C17.1575 56.3325 17.7533 57.75 18.9721 57.75H21.9242C22.2762 57.75 22.6283 57.6188 22.8721 57.3563L27.8825 52.5H38.7158L43.7262 57.3563C43.97 57.5925 44.3221 57.75 44.6742 57.75H47.6262C48.845 57.75 49.4408 56.3325 48.5742 55.5187L45.3512 52.395C49.2512 51.7912 52.2575 48.5625 52.2575 44.625V22.3125C52.2575 15.0413 44.4846 13.3612 36.0075 13.125ZM33.2992 48.5625C31.0512 48.5625 29.2367 46.8037 29.2367 44.625C29.2367 42.4463 31.0512 40.6875 33.2992 40.6875C35.5471 40.6875 37.3617 42.4463 37.3617 44.625C37.3617 46.8037 35.5471 48.5625 33.2992 48.5625ZM46.8408 36.75H19.7575V23.625H46.8408V36.75Z" fill="black" />
                                    </g>
                                </svg>
                                <span className='leftTopHeadingServices'><h3>STR - RNV</h3></span>
                                <span ><h1 className='priceServices'>€ 02<sup>.00</sup></h1></span>
                            </div>
                            <div className="Servicestimeline">
                                <span>9:10 am</span>
                                <hr className="horizontal-line-journey-services" />
                                <span>0:15 hrs</span>
                                <hr className="horizontal-line-journey-services" />
                                <span>9:55 am</span>
                            </div>
                            <p className='startStationServices'>Bugermaster Fuch Strass, Mannheim</p>
                            <p className='changeInServices'>1 Change</p>
                            <p className='mid1StationServices'>SRH Campus, Hiedelberg</p>
                            <Link to="/moredetails">
                                <Link to="/moredetails">
                                    <button className="more">More Details</button>
                                </Link>
                            </Link>
                        </div>
                        <div className="ContainerofCard">
                            <div className='row1'>
                                <svg className='tramiconservices' xmlns="http://www.w3.org/2000/svg" width="66" height="63" viewBox="0 0 66 63" fill="none">
                                    <g clipPath="url(#clip0_145_133)">
                                        <rect x="0.798828" width="65" height="63" rx="12" fill="white" fillOpacity="0.9" />
                                        <path d="M36.0075 13.125L38.0387 9.1875H46.8408V5.25H19.7575V9.1875H32.6221L30.5908 13.125C22.1137 13.3612 14.3408 15.0413 14.3408 22.3125V44.625C14.3408 48.5625 17.3471 51.7913 21.2471 52.3688L18.0242 55.4925C17.1575 56.3325 17.7533 57.75 18.9721 57.75H21.9242C22.2762 57.75 22.6283 57.6188 22.8721 57.3563L27.8825 52.5H38.7158L43.7262 57.3563C43.97 57.5925 44.3221 57.75 44.6742 57.75H47.6262C48.845 57.75 49.4408 56.3325 48.5742 55.5187L45.3512 52.395C49.2512 51.7912 52.2575 48.5625 52.2575 44.625V22.3125C52.2575 15.0413 44.4846 13.3612 36.0075 13.125ZM33.2992 48.5625C31.0512 48.5625 29.2367 46.8037 29.2367 44.625C29.2367 42.4463 31.0512 40.6875 33.2992 40.6875C35.5471 40.6875 37.3617 42.4463 37.3617 44.625C37.3617 46.8037 35.5471 48.5625 33.2992 48.5625ZM46.8408 36.75H19.7575V23.625H46.8408V36.75Z" fill="black" />
                                    </g>
                                </svg>
                                <span className='leftTopHeadingServices'><h3>STR - RNV</h3></span>
                                <span ><h1 className='priceServices'>€ 02<sup>.00</sup></h1></span>
                            </div>
                            <div className="Servicestimeline">
                                <span>9:10 am</span>
                                <hr className="horizontal-line-journey-services" />
                                <span>0:15 hrs</span>
                                <hr className="horizontal-line-journey-services" />
                                <span>9:55 am</span>
                            </div>
                            <p className='startStationServices'>Bugermaster Fuch Strass, Mannheim</p>
                            <p className='changeInServices'>1 Change</p>
                            <p className='mid1StationServices'>SRH Campus, Hiedelberg</p>
                            <Link to="/moredetails">
                                <button className="more">More Details</button>
                            </Link>
                        </div>
                        <div className="ContainerofCard">
                            <div className='row1'>
                                <svg className='tramiconservices' xmlns="http://www.w3.org/2000/svg" width="66" height="63" viewBox="0 0 66 63" fill="none">
                                    <g clipPath="url(#clip0_145_133)">
                                        <rect x="0.798828" width="65" height="63" rx="12" fill="white" fillOpacity="0.9" />
                                        <path d="M36.0075 13.125L38.0387 9.1875H46.8408V5.25H19.7575V9.1875H32.6221L30.5908 13.125C22.1137 13.3612 14.3408 15.0413 14.3408 22.3125V44.625C14.3408 48.5625 17.3471 51.7913 21.2471 52.3688L18.0242 55.4925C17.1575 56.3325 17.7533 57.75 18.9721 57.75H21.9242C22.2762 57.75 22.6283 57.6188 22.8721 57.3563L27.8825 52.5H38.7158L43.7262 57.3563C43.97 57.5925 44.3221 57.75 44.6742 57.75H47.6262C48.845 57.75 49.4408 56.3325 48.5742 55.5187L45.3512 52.395C49.2512 51.7912 52.2575 48.5625 52.2575 44.625V22.3125C52.2575 15.0413 44.4846 13.3612 36.0075 13.125ZM33.2992 48.5625C31.0512 48.5625 29.2367 46.8037 29.2367 44.625C29.2367 42.4463 31.0512 40.6875 33.2992 40.6875C35.5471 40.6875 37.3617 42.4463 37.3617 44.625C37.3617 46.8037 35.5471 48.5625 33.2992 48.5625ZM46.8408 36.75H19.7575V23.625H46.8408V36.75Z" fill="black" />
                                    </g>
                                </svg>
                                <span className='leftTopHeadingServices'><h3>STR - RNV</h3></span>
                                <span ><h1 className='priceServices'>€ 02<sup>.00</sup></h1></span>
                            </div>
                            <div className="Servicestimeline">
                                <span>9:10 am</span>
                                <hr className="horizontal-line-journey-services" />
                                <span>0:15 hrs</span>
                                <hr className="horizontal-line-journey-services" />
                                <span>9:55 am</span>
                            </div>
                            <p className='startStationServices'>Bugermaster Fuch Strass, Mannheim</p>
                            <p className='changeInServices'>1 Change</p>
                            <p className='mid1StationServices'>SRH Campus, Hiedelberg</p>
                            <Link to="/moredetails">
                                <button className="more">More Details</button>
                            </Link>
                        </div>
                        <div className="ContainerofCard">
                            <div className='row1'>
                                <svg className='tramiconservices' xmlns="http://www.w3.org/2000/svg" width="66" height="63" viewBox="0 0 66 63" fill="none">
                                    <g clipPath="url(#clip0_145_133)">
                                        <rect x="0.798828" width="65" height="63" rx="12" fill="white" fillOpacity="0.9" />
                                        <path d="M36.0075 13.125L38.0387 9.1875H46.8408V5.25H19.7575V9.1875H32.6221L30.5908 13.125C22.1137 13.3612 14.3408 15.0413 14.3408 22.3125V44.625C14.3408 48.5625 17.3471 51.7913 21.2471 52.3688L18.0242 55.4925C17.1575 56.3325 17.7533 57.75 18.9721 57.75H21.9242C22.2762 57.75 22.6283 57.6188 22.8721 57.3563L27.8825 52.5H38.7158L43.7262 57.3563C43.97 57.5925 44.3221 57.75 44.6742 57.75H47.6262C48.845 57.75 49.4408 56.3325 48.5742 55.5187L45.3512 52.395C49.2512 51.7912 52.2575 48.5625 52.2575 44.625V22.3125C52.2575 15.0413 44.4846 13.3612 36.0075 13.125ZM33.2992 48.5625C31.0512 48.5625 29.2367 46.8037 29.2367 44.625C29.2367 42.4463 31.0512 40.6875 33.2992 40.6875C35.5471 40.6875 37.3617 42.4463 37.3617 44.625C37.3617 46.8037 35.5471 48.5625 33.2992 48.5625ZM46.8408 36.75H19.7575V23.625H46.8408V36.75Z" fill="black" />
                                    </g>
                                </svg>
                                <span className='leftTopHeadingServices'><h3>STR - RNV</h3></span>
                                <span ><h1 className='priceServices'>€ 02<sup>.00</sup></h1></span>
                            </div>
                            <div className="Servicestimeline">
                                <span>9:10 am</span>
                                <hr className="horizontal-line-journey-services" />
                                <span>0:15 hrs</span>
                                <hr className="horizontal-line-journey-services" />
                                <span>9:55 am</span>
                            </div>
                            <p className='startStationServices'>Bugermaster Fuch Strass, Mannheim</p>
                            <p className='changeInServices'>1 Change</p>
                            <p className='mid1StationServices'>SRH Campus, Hiedelberg</p>
                            <Link to="/moredetails">
                                <button className="more">More Details</button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;

