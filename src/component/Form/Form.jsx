import React, {useState} from "react";
import { useForm } from 'react-hook-form';
import './Form.css';
function Form({lastName, forName, age, zipCode}) {


    const { register, handleSubmit } = useForm();
    const handleFormSubmit = (data) => {
        console.log(data);
    }
    return (

        <>
            <section className="form">
                <form action="" onSubmit={handleSubmit(handleFormSubmit)}>

                    <label htmlFor="name">{forName}:</label>
                    <input type="text" {...register("forName")}/>

                    <label htmlFor="Achternaam">{lastName}</label>
                    <input type="text" {...register("lastName")}/>

                    <label htmlFor="Leeftijd">{age}</label>
                    <input type="text" {...register("age")}/>

                    <label htmlFor="postcode">{zipCode}</label>
                    <input type="text" {...register("zipcode")}/>

                    <label htmlFor="bezorg">Bezorgfrequentie</label>
                    <select name="bezorgfrequentie" id="category">
                        <option value="weekly" {...register("bezorgfrequentie")}>Iedere week</option>
                        <option value="monthly" {...register("bezorgfrequentie")}>Ieder maand</option>
                    </select>
                    <br />
                    <input type="radio" {...register("day")}/><span>Overdag</span>
                    <input type="radio" {...register("evening")}/><span>'s Avonds</span>
                    <label htmlFor="opmerking">Opmerking</label>
                    <input type="textarea" {...register("description")}/>
                    <input type="checkbox"/>
                    <label htmlFor="">Ik ga akkoord met de voorwaarden</label>
                    <button onClick={handleSubmit}>Verzend</button>
                </form>
            </section>
        </>
    )
}

export default Form;