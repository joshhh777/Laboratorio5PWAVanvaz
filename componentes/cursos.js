import React, {Component} from 'react';
import Total from "./total"


function Cursos (props) {

        
   const cursos = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          }
        ]
      }

      const lista = cursos.parts   

    return(
    <div className ="container">
        <h1>Lista de los cursos</h1>
        {
            lista.map(lis =>
                <div key={lis.id}>          
                    <p className="nombre">Nombre del Curso {lis.id} : </p>
                    <p> {lis.name}</p>
                    <p>Ejercicio: {lis.exercises}</p>
                    <p>-----------------------------------------</p>
                </div>
                )
        }
        <Total parte={lista}></Total>
    </div>
    )
}


export default Cursos