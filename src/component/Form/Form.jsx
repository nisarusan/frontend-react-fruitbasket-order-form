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
                    <FormInput name="bezorgfrequentie" type="text" register={register}>
                        <select name="bezorgfrequentie" id="category" {...register("bezorgfrequentie")}>
                            <option value="weekly">Iedere week</option>
                            <option value="monthly">Ieder maand</option>
                        </select>
                        <br/>
                        <input type="radio" {...register("day")}/><span>Overdag</span>
                        <input type="radio" {...register("evening")}/><span>'s Avonds</span>
                    </FormInput>
                    <FormInput name="Opmerking" type="textarea" register={register}/>
                    {/*<FormInput>*/}
                    {/*    <input type="checkbox" id="agree"  {...register("agree")} />*/}
                    {/*    <label htmlFor="">Ik ga akkoord met de voorwaarden</label>*/}
                    {/*</FormInput>*/}


                    <button onClick={handleSubmit}>Verzend</button>
                </form>
            </section>
        </>
    )
}

export default Form;