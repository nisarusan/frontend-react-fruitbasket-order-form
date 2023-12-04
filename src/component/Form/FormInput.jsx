import React from 'react';

function FormInput({children, name, type, register, selectName}) {
    return (
        <>
            <label htmlFor={name}>{name}:</label>
            <input type={type} {...register(name)} />
            {children}
            {/*<br />*/}
            {/*<input type="radio" {...register("day")}/><span>Overdag</span>*/}
            {/*<input type="radio" {...register("evening")}/><span>'s Avonds</span>*/}
            {/*<label htmlFor="opmerking">Opmerking</label>*/}
            {/*<input type="textarea" {...register("description")}/>*/}
            {/*<input type="checkbox"/>*/}
            {/*<label htmlFor="">Ik ga akkoord met de voorwaarden</label>*/}
        </>
    );
}

export default FormInput;
