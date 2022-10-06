import React from "react";
import Item from "./item/Item";

const Main = ({ items, completeTask, deleteTask }) => {
    return (
        <section className='main'>
            <input id='toggle-all' className='toggle-all' type='checkbox' />
            <label htmlFor='toggle-all'>Mark all as complete</label>
            {items.length > 0 && (
                <ul className='todo-list'>
                    {items.map((item) => (
                        <Item
                            key={item.id}
                            item={item}
                            completeTask={completeTask}
                            deleteTask={deleteTask}
                        />
                    ))}
                </ul>
            )}
            {items.length == 0 && (
                <ul className='todo-list'>
                    <p className='no-task'>No Task</p>
                </ul>
            )}
        </section>
    );
};

export default Main;
