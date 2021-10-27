import React from 'react';
import './calculadora.css';
import html2pdf from 'html2pdf.js'


function WarningDanger(props) {
    const { ERT, LE, ET, ELC, name, rut } = props

    const generatePDF = () => {
        const print = document.getElementById("print");
        html2pdf()
            .from(print)
            .save();
    }

    return <div id="result1">
        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/bhp_orn_rgb_pos%5B1%5D.png?alt=media&token=e67982c5-67f2-4153-9201-a18c75117eff" width="100px" alt="BHP" />
            <div className="container-result">
                <form id="print" >
                    <div className="ocult">
                        <p className="nameOcult"><b>Nombre: {name} | Rut: {rut}</b></p>
                        
                    </div>

                    <div className="result-warning">
                        <i class="fa fa-times-circle fa-3x" aria-hidden="true"></i>
                        <h2 className="warning" >  ESPACIO LIBRE REQUERIDO PARA DETENER LA CAIDA NO CUMPLE CON LAS MEDIDAS DE SEGURIDAD</h2>
                        <h1 className="nameForm">{ELC.toFixed(2)} metros</h1><br />
                    </div>

                    <div className="nota">
                        <i class="fa fa-exclamation-triangle fa-3x" aria-hidden="true" ></i>
                        <span >Si la caída se detiene demasiado abruptamente, el trabajador puede sufrir serias lesiones, incluso fatales</span>
                    </div>
                </form>
                <div className="download" >
                    <button className="btndownload" type="button" onClick={generatePDF}>Descargar PDF <i className="fa fa-download" aria-hidden="true" /></button>
                </div>
                <div className="btnsResult" >
                    <a href="/calculadora" type="button" className="btn btn-secondary">RECALCULAR</a>
                    <a href="/" type="button" className="btn btn-secondary">FINALIZAR</a>
                </div>
            </div>
        </div>
    </div>
}

export default WarningDanger;