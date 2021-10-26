import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './glossary.css';

export const Glossary = (props) => {
    const { name, userRol}=props
    
    let history = useHistory();
  
    const cerrar = () => {
      history.push('/calculadora' , props);
    }
  
    return (
    <div className="container-glossary">
    <h2>Arnés: Lorem ipsum dolor sit amet, consectetur adipiscing elit </h2>
    <h2>Espacio Real Terreno: Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h2> 
    <h2>Estandar de detencion de caídas: Lorem ipsum dolor sit amet, consectetur adipiscing elit </h2>
    <h2>Estatura del trabajador: Lorem ipsum dolor sit amet, consectetur adipiscing elit  </h2>
    <h2>Estrobo: Lorem ipsum dolor sit amet,  </h2>
    <h2>Longitud del estrobo: Lorem ipsum dolor sit amet,  </h2>
    <h2>Tag de inspección Cesmec: Lorem ipsum dolor sit amet,  </h2>
    </div>
    )
  }
  
  export default Glossary;
  