import React, { useState } from "react";

const Header = ({ addTask }) => {
    const [text, setText] = useState("");
    const submitEvent = (e) => {
        e.preventDefault();
        addTask(text);

        setText("");
        // console.log("Enter", text);
    };

    return (
        <header className='header'>
            <h1>Super2Do</h1>
            <form action='' onSubmit={submitEvent}>
                <input
                    className='new-todo'
                    placeholder='What needs to be done?'
                    autoFocus
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </form>
        </header>
    );
};

export default Header;
