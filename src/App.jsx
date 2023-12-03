import './App.css'
import Fruitbasket from "./component/Fruit/Fruitbasket.jsx";
import Form from "./component/Form/Form.jsx";

function App() {

    return (
        <>
            <Fruitbasket title="Fruitmand bezorgservice" description="Je mag toch niet naar buiten" />
            <Form forName="Voornaam" lastName="Achternaam" age="Leeftijd" zipCode="Postcode" />
        </>
    )
}

export default App
