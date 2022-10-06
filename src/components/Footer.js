import React, { useState } from "react";
import axios from "axios";

const Footer = ({ length, clearComplete, changeLook }) => {
    const [choose, setChoose] = useState("all");

    const clearCompletedData = async () => {
        await axios.get("http://127.0.0.1:8000/api/item/clear");
        clearComplete();
    };

    const changeView = (x) => {
        // console.log(x);
        changeLook(x);
    };

    return (
        <footer className='footer'>
            <span className='todo-count'>
                <strong>{length}</strong> item left
            </span>

            <ul className='filters'>
                <li>
                    <a
                        onClick={() => {
                            setChoose("all");
                            changeView("all");
                        }}
                        className={`${choose == "all" ? `selected` : ""}`}
                        href='#/'>
                        All
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            setChoose("active");
                            changeView("active");
                        }}
                        className={`${choose == "active" ? `selected` : ""}`}
                        href='#/active'>
                        Active
                    </a>
                </li>
                <li>
                    <a
                        onClick={() => {
                            setChoose("completed");
                            changeView("completed");
                        }}
                        className={`${choose == "completed" ? `selected` : ""}`}
                        href='#/completed'>
                        Completed
                    </a>
                </li>
            </ul>

            <button onClick={clearCompletedData} className='clear-completed'>
                Clear completed
            </button>
        </footer>
    );
};

export default Footer;
