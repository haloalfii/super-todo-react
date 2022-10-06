import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./style/app.css";
import "./style/base.css";
import "./style/index.css";

import { useState, useEffect } from "react";

function App() {
    const [items, setItems] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = () => {
        fetch("http://127.0.0.1:8000/api/item")
            .then((res) => {
                if (!res.ok) {
                    // error coming back from server
                    throw Error("could not fetch the data for that resource");
                }
                return res.json();
            })
            .then((data) => {
                setIsPending(false);
                setItems(data);
                // console.log("Ini Data", data);
                setError(null);
            })
            .catch((err) => {
                // auto catches network / connection error
                setIsPending(false);
                setError(err.message);
            });
    };

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        });
    }, []);

    return (
        <section className='todoapp'>
            <Header />
            <Main items={items} />
            <Footer />
        </section>
    );
}

export default App;
