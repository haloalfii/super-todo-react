import React from "react";

const Header = () => {
    return (
        <header className='header'>
            <h1>Super2Do</h1>
            <input
                className='new-todo'
                placeholder='What needs to be done?'
                autofocus
            />
        </header>
    );
};

export default Header;
