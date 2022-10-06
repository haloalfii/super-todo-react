import React from "react";

const Item = ({ item }) => {
    const done = () => {
        console.log("done");
    };

    return (
        <li className={`${item.completed ? `completed` : ""}`}>
            <div className='view'>
                <input
                    className='toggle'
                    type='checkbox'
                    checked={item.completed}
                    onChange={done}
                />
                <label>{item.name}</label>
                <button className='destroy'></button>
            </div>
            <input className='edit' />
        </li>
    );
};

export default Item;
