import React from 'react';
import html2pdf from 'html2pdf.js'
import './calculadora.css';


function Result(props) {
    const { ERT, LE, ET, ELC , name , rut } = props

    console.log("LAS PROPS", props)

    const generatePDF = () => {
        const print = document.getElementById("print");
        html2pdf()
            .from(print)
            .save();
    }




    return <div id="result" >
        <img src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/bhp_orn_rgb_pos%5B1%5D.png?alt=media&token=e67982c5-67f2-4153-9201-a18c75117eff" alt="logo" width="100px" />
       
        <div className="container1">
            <div className="containerGif" >
                <div className="nota">
                    <i class="fa fa-exclamation-triangle fa-3x" aria-hidden="true" ></i>
                    <span >Trabaja seguro, si no te sientes preparado para proseguir mejor no lo hagas. En caso de dudas, contacta a tu supervisor.</span>
                </div>

                <img className="gif" src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/ELC%20(2).gif?alt=media&token=00c040ee-fc2c-40f8-9aae-516897bd2205"  alt="gif caída"></img>

            </div>


            <div className="container-result">
                <form id="print" >

                    <h1 className="name" ><i class="fa fa-check-circle " aria-hidden="true"></i> RESULTADO</h1>
                    <h2 className="name-medium" >ESPACIO LIBRE REQUERIDO PARA DETENER LA CAIDA</h2>
                    <h1 className="nameForm">{ELC.toFixed(2)} metros</h1>

                    <div className="ocult">
                        <p className="nameOcult"><b>Nombre: {name}</b></p>
                        <p className="nameOcult"><b>Rut: {rut}</b></p>
                        <p className="nameOcult"> ERT= {ERT.toFixed(1)} LE= {LE.toFixed(1)} ET = {ET.toFixed(1)}</p>
                        <p className="nameOcult"> Información adicional que se necesite mostrar en el informe podrá realizarse en este apartado</p>
                    </div>

                    <div className="containerGif-mobil" >
                    
                        <img className="gif" src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/ELC%20(2).gif?alt=media&token=00c040ee-fc2c-40f8-9aae-516897bd2205" alt="gif" ></img>
                        <div className="nota">
                            <i class="fa fa-exclamation-triangle fa-3x" aria-hidden="true" ></i>
                            <span >Trabaja seguro, si no te sientes preparado para proseguir mejor no lo hagas. En caso de dudas, contacta a tu supervisor.</span>
                        </div>
                    </div>


                </form>
                <div className="download" >
                    <button className="btndownload" type="button" onClick={generatePDF}>Descargar PDF <i className="fa fa-download" aria-hidden="true" /></button>
                </div>
                <div className="btnsResult">
                    <a href="/calculadora" type="button" className="btn btn-secondary">RECALCULAR</a>
                    <a href="/" type="button" className="btn btn-secondary">FINALIZAR</a>
                </div>
            </div>
        </div>
    </div>

}

export default Result;

