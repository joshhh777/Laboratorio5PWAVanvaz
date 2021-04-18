import React, {Component} from 'react';

function Total (props){
    
    const total = props.parte.reduce(
      (valorviejo, valornuevo) => valorviejo + valornuevo.exercises,
      0
    );
    return(
        <div>
        <p>Total de Ejercicios es: {total}</p>
        </div>
    )
};

export default Total