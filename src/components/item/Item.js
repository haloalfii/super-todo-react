import React from "react";

const Item = ({ item }) => {
    return (
        <li className={`${item.completed ? `completed` : ""}`}>
            <div className='view'>
                <input
                    className='toggle'
                    type='checkbox'
                    checked={item.completed}
                />
                <label>{item.name}</label>
                <button className='destroy'></button>
            </div>
            <input className='edit' value='Create a Todo template' />
        </li>
    );
};

export default Item;
