import React, {useState} from "react";
import Fruitlist from "./Fruitlist.jsx";
import './Fruitbasket.css';


//Directly destructering instead of using props
function Fruitbasket({title, description}) {

    //Fruits useState with obj  ect data
    const [fruits, setFruits] = useState([
        {emoji: "🍓", title: "Aardbeien", stockNow: 0},
        {emoji: "🍏", title: "Apple", stockNow: 0},
        {emoji: "🍌", title: "Bananen", stockNow: 0},
        {emoji: "🥝", title: "Kiwi's", stockNow: 0},
    ]);

    const minusStock = (index) => {
        setFruits((prevFruits) => {
            const updatedFruits = [...prevFruits];
            const updatedFruit = {...updatedFruits[index]};
            updatedFruit.stockNow = updatedFruit.stockNow > 0 ? updatedFruit.stockNow - 1 : 0;
            updatedFruits[index] = updatedFruit;
            return updatedFruits;
        });
    };

    const increaseStock = (index) => {
        setFruits((prevFruits) => {
            const updatedFruits = [...prevFruits];
            const updatedFruit = {...updatedFruits[index]};
            updatedFruit.stockNow = updatedFruit.stockNow + 1;
            updatedFruits[index] = updatedFruit;
            return updatedFruits;
        });
    };

    const resetNow = () => {
        setFruits((prevFruits) =>
            prevFruits.map((fruit) => ({...fruit, stockNow: 0}))
        );
    };

    return (
        <>
            <section className="fruitmand">
                <header>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </header>
                <ul>
                    {fruits.map((fruit, index) => (
                        <Fruitlist
                            key={index}
                            emoji={fruit.emoji}
                            title={fruit.title}
                            stockNow={fruit.stockNow}
                            minusStock={() => minusStock(index)}
                            increaseStock={() => increaseStock(index)}
                        />
                    ))}
                </ul>
                <button onClick={resetNow}>Reset All</button>
            </section>
        </>
    );
}
export default Fruitbasket;
