import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./style/app.css";
import "./style/base.css";
import "./style/index.css";

import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [items, setItems] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        const res = await axios.get("http://127.0.0.1:8000/api/item");
        const data = res.data;
        setItems(data);
    };

    const fetchDataActive = async () => {
        const res = await axios.get("http://127.0.0.1:8000/api/item/active");
        const data = res.data;
        setItems(data);
    };

    const fetchDataCompleted = async () => {
        const res = await axios.get("http://127.0.0.1:8000/api/item/completed");
        const data = res.data;
        setItems(data);
    };

    const addTask = async (task) => {
        const item = {
            name: task,
        };
        await axios.post("http://127.0.0.1:8000/api/item/store", {
            item,
        });
        fetchData();
    };

    const completeTask = async (id, complete) => {
        await axios.put("http://127.0.0.1:8000/api/item/" + id, {
            completed: complete,
        });
    };

    const deleteTask = async (id) => {
        await axios.delete("http://127.0.0.1:8000/api/item/" + id);
        fetchData();
    };

    const changeLook = async (text) => {
        // console.log("Ini Change Look", text);
        if (text == "all") {
            fetchData();
        } else if (text == "active") {
            fetchDataActive();
        } else {
            fetchDataCompleted();
        }
    };

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        });
    }, []);

    return (
        <section className='todoapp'>
            <Header addTask={addTask} />
            <Main
                items={items}
                completeTask={completeTask}
                deleteTask={deleteTask}
            />
            <Footer
                length={items.length}
                clearComplete={fetchData}
                changeLook={changeLook}
            />
        </section>
    );
}

export default App;
