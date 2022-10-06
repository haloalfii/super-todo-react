import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./style/app.css";
import "./style/base.css";
import "./style/index.css";

import { useState } from "react";

function App() {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Belajar HTML",
            completed: 0,
        },
        {
            id: 2,
            name: "Belajar CSS",
            completed: 0,
        },
    ]);
    return (
        <section className='todoapp'>
            <Header />
            <Main items={items} />
            <Footer />
        </section>
    );
}

export default App;
