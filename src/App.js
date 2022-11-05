import './App.css';
import {useEffect, useState} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import Search from "./components/Search";

function App() {
    const {onToggleButton, tg} = useTelegram();
    const [products, setProducts] = useState(null)
    useEffect(() => {
        tg.ready();
        fetch('https://31.184.253.77:8000/code', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(data => data.json())
            .then(code => {
                setProducts(code.code)
                console.log(code)
            }
            )
    }, [])
    
    return (
        <div className="App">
            <Header />
            <div className={'search'}>
                <Search products={products}/>

            </div>
        </div>
    );
}

export default App;
