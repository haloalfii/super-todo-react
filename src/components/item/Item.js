import React from "react";
import { useState } from "react";

const Item = ({ item, completeTask, deleteTask }) => {
    const [complete, setComplete] = useState(item.completed);

    const done = (id) => {
        completeTask(id, !complete);
        setComplete(!complete);
    };

    return (
        <li className={`${complete ? `completed` : ""}`}>
            <div className='view'>
                <input
                    className='toggle'
                    type='checkbox'
                    checked={complete}
                    onChange={() => done(item.id, complete)}
                />
                <label>{item.name}</label>
                <button
                    className='destroy'
                    onClick={() => deleteTask(item.id)}></button>
            </div>
            <input className='edit' />
        </li>
    );
};

export default Item;
