import React, {Component} from 'react';
import Total from "./total"


function Cursos (props) {

        
    const cursos = [
        {
          name: 'Half Stack application development',
          id: 1,
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
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]

        


      function listado1(){
        
        const lista1 = cursos[0].parts  
        return(
        lista1.map(lista =>
            <div key={lista.id}>          
                <p className="nombre">Nombre del Curso {lista.id} : </p>
                <p> {lista.name}</p>
                <p>Ejercicio: {lista.exercises}</p>
                <p>-----------------------------------------</p>
                <Total parte={lista1}></Total>
            </div>)         
        )
      }

      function listado2(){
         
        const lista2 = cursos[1].parts 
        return(
        lista2.map(lista =>
            <div key={lista.id}>          
                <p className="nombre">Nombre del Curso {lista.id} : </p>
                <p> {lista.name}</p>
                <p>Ejercicio: {lista.exercises}</p>
                <p>-----------------------------------------</p>
                <Total parte={lista2}></Total>
            </div>)        
        )
      }

    return(
    <div className ="container">
        <h1>Lista de los cursos</h1>
        <h2>{cursos[0].name}</h2>
        {listado1()}
        
        <p>###############################################</p>
        <h2>{cursos[1].name}</h2>
        {listado2()}
    </div>
    )
}

export default Cursos