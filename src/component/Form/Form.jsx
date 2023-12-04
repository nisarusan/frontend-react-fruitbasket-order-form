import React, {useState} from "react";
import {useForm} from 'react-hook-form';
import './Form.css';
import FormInput from "./FormInput.jsx";

function Form(props) {


    const {register, handleSubmit} = useForm();
    const handleFormSubmit = (data) => {
        console.log(data);
    }
    return (

        <>
            <section className="form">
                <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
                    <FormInput
                        name="Voornaam"
                        type="text"
                        register={register}

                    />
                    <FormInput
                        name="Achternaam"
                        type="text"
                        register={register}
                    />
                    <FormInput
                        name="Leeftijd"
                        type="text"
                        register={register}
                    />
                    <FormInput name="Leeftijd"
                               type="text"
                               register={register}><select name="bezorgfrequentie" id="category">
                        <option value="weekly" {...register("weekly")}>Iedere week</option>
                        <option value="monthly" {...register("monthly")}>Ieder maand</option>
                    </select></FormInput>


                    <button onClick={handleSubmit}>Verzend</button>
                </form>
            </section>
        </>
    )
}

export default Form;