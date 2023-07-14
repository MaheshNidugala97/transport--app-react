import React, { useState } from "react";
import "./sidefilter.css";
import { Link } from "react-router-dom";
import { FiFilter } from 'react-icons/fi';
import Card from "./card";

function Sidefilter() {
    const [selectedOption, setSelectedOption] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="service-container">
        <section className="sidefilter-section">
            <div className={`sidebar ${isMenuOpen ? "menu-open" : ""}`}>
                <div className="filter">
                    {/* <div className="filter-icon">
                        <FiFilter size={24} />
                    </div> */}
                    <h1>Filters</h1>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                <FiFilter size={24} />
                </div>
                <div className="menu-content">
                    <h2>Sort By</h2>
                    <div className="sortby-container">
                        <ul>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        value="time"
                                        checked={selectedOption === "time"}
                                        onChange={handleOptionChange}
                                    />
                                    Time (earliest)
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        value="priceLowHigh"
                                        checked={selectedOption === "priceLowHigh"}
                                        onChange={handleOptionChange}
                                    />
                                    Price (low - high)
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        value="priceHighLow"
                                        checked={selectedOption === "priceHighLow"}
                                        onChange={handleOptionChange}
                                    />
                                    Price (High - low)
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input
                                        type="radio"
                                        value="changeLowHigh"
                                        checked={selectedOption === "changeLowHigh"}
                                        onChange={handleOptionChange}
                                    />
                                    Change (low - high)
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </section>
        <section className="card-section">
        <Card />
        </section>
        </div>
    );
}


export default Sidefilter;






