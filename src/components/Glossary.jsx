import React from 'react';
import './glossary.css'

export const Glossary = () => {

    return (
    <div className="container-glossary">
    <h6>Espacio libre de caídas</h6>
    <h6>Factor de riesgo = 0</h6>
    <span>El espacio Libre de caída se calcula de la siguiente manera:</span>
    <h6>ELC = LE + EA + ET + MS</h6>
    <span>Donde:</span>
     <ul>
       <li>ELC: Es el espacio libre de caída debajo de un usuario para evitar colisiones con el piso o una estructura (m)</li>
       <li>LE: Longitud del estrobo (m).</li>
       <li>EA: Elongación del amortiguador de impacto.</li>
       <li>ET: Estatura del trabajador (m).</li>
       <li>MS: Margen de seguridad (según NCh 1258/6 mayor o igual a 1m)</li>
     </ul>
     <img src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/SDDC.jpg?alt=media&token=a8407981-9bda-4bbb-98cf-584c358e3c87" alt="punto de anclaje"  className="img-modal"/>
     <h6>Estandar de detencion de caídas:</h6>
      <span> Conjunto de componentes y subsistemas interconectados, el cual incluye un arnés de cuerpo completo utilizado por el usuario y que, al ser conectado a un dispositivo de anclaje apropiado, detiene una caída desde altura.</span>
    <h6>Amortiguador de impacto:</h6>
      <span>Componente diseñado para disipar la energía cinética generada durante una caída que limita las fuerzas de detención aplicadas al sistema personal de detención de caída, al dispositivo de anclaje y al usuario.</span>
    <h6>Anclaje:</h6>
      <span>Punto de conexión seguro de un sistema de protección contra caídas. Puede ser una estructura fija como un poste, puntal, viga, columna, suelo o pared.</span>
    <h6>Arnés:</h6>
      <span>Parte de los elementos de protección personal en trabajos realizados en altura. Se usa para contener el cuerpo y distribuir apropiadamente sobre éste las fuerzas dinámicas de detención de caídas y las fuerzas de suspensión posteriores a la detención de caídas..</span> 
    <h6>Estrobo</h6>
    <span>Elemento de conexión de material flexible que, en conjunto con un amortiguador de impacto, se utiliza como un subsistema de conexión en
        un sistema personal de detención de caída.</span>
    <h6>Punto de anclaje:</h6><span>Es un punto seguro de sujeción del sistema personal para la detención de caídas a la estructura disponible.</span>
    <h6>Riesgo:</h6><span>Probabilidad de que eventos, esperados o inesperados causen un impacto adverso</span>
    <h6>Tag de inspección Cesmec:</h6><span> Marca de verificación de inspaccion Cesmec (Centro de Estudios de Medición y Certificación de Calidad)  </span>
    </div>
    )
  }
  
  export default Glossary;
  