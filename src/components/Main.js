import React from "react";
import Item from "./item/Item";

const Main = ({ items }) => {
    return (
        <section className='main'>
            <input id='toggle-all' className='toggle-all' type='checkbox' />
            <label for='toggle-all'>Mark all as complete</label>
            <ul className='todo-list'>
                {items.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
                {/* <Item /> */}
            </ul>
        </section>
    );
};

export default Main;
