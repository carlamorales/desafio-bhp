import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './calculadora.css';


function Calculator(props) {
    const [state, setState] = useState({ ERT: 0, LE: 0, ET: 0, ELC: 0 })
    let history = useHistory();

    console.log("EL RESULTADO", state)
    const checkIsSafe = () => {
        const ea = 1.2
        const ms = 1
        var elc = (ea + ms + state.LE + state.ET)
        //setState({ ...state, ELC: elc })

        if (elc >= state.ERT) {
            history.push("/resultado", { ...state, ELC: elc })
        } else {
            history.push("/error");
        }
    }

    return <div className="container">
        <img src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/bhp_orn_rgb_pos%5B1%5D.png?alt=media&token=e67982c5-67f2-4153-9201-a18c75117eff" alt="logo" width="100px" />
        <div className="container-calculator">
            <h1 className="name">CALCULADORA</h1>
            <h2 className="name-medium" >ELC</h2>
            <h1 className="nameParam">Ingreso de parámetros</h1>
            <form onSubmit={checkIsSafe} class="needs-validation" >
                <div class="form-check">
                    <div className="row">
                        <label className="col-form-label" for="ert">Espacio Real Terreno</label>
                        <input className="form-control" type="number" min="1" step="0.10" onKeyUp={(e) => { setState({ ...state, 'ERT': Number(e.target.value) }) }} id="ert" required />
                        <span className="form-text"> metros</span>
                    </div>
                    <div className="row">
                        <label className="col-form-label">Longitud del estrobo</label>
                        <input className="form-control" type="number" min="1" step="0.10" onKeyUp={(e) => { setState({ ...state, 'LE': Number(e.target.value) }) }} required />
                        <span className="form-text"> metros </span>
                    </div>
                    <div className="row">
                        <label className="col-form-label">Estatura del trabajador</label>
                        <input className="form-control" type="number" min="1" step="0.10" onKeyUp={(e) => { setState({ ...state, 'ET': Number(e.target.value) }) }} required />
                        <span className="form-text"> metros </span>
                    </div>
                </div>
                <button type="submit" className="btn btn-secondary">CALCULAR</button>
            </form>
        </div>
    </div>

}

export default Calculator;