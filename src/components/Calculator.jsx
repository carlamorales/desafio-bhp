import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './calculadora.css';
import Glossary from './Glossary';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '10%',
        bottom: 'auto',
        marginRight: '-30%',
        transform: 'translate(-50%, -50%)',
        overflow: 'scroll',
        width: '90%',
        height: '90%',
        color: 'black',
        backgroundColor: 'transparent' 

    },
};


function Calculator(props) {
    const [state, setState] = useState({ ERT: 0, LE: 0, ET: 0, ELC: 0 })
    let history = useHistory();

    console.log("EL RESULTADO", state)
    const checkIsSafe = () => {
        const ea = 1.2
        const ms = 1
        var elc = (ea + ms + state.LE + state.ET)
        var diff =  state.ERT - elc


        if (elc <= state.ERT && diff <= 2){
            history.push("/resultado", { ...state, ELC: elc })
        } else {
            history.push("/error");
        }
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleOpenModal = () => {
        setModalIsOpen(true);
    }

    const handleCloseModal = () => {
        setModalIsOpen(false);
    }

    return <div className="container">


        <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/bhp_orn_rgb_pos%5B1%5D.png?alt=media&token=e67982c5-67f2-4153-9201-a18c75117eff" alt="logo" width="100px" />
            <img className="containerImg" src="https://www.bhp.com/-/media/project/bhp1ip/bhp-com-en/images/_primary-banner/2021/210610_jimblebarbanner.jpg?h=585&iar=0&w=1440&hash=48C14C99831E48F05C1D64727BAD6258" />

        </div>


        <div className="container-calculator">

            { !modalIsOpen && <a className="info" onClick={handleOpenModal} ><i class="fa fa-info-circle fa-2x" aria-hidden="true"></i> </a>}
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
        <Modal isOpen={modalIsOpen} style={modalStyles}>
            <button className='btn-modal' onClick={handleCloseModal}> X </button>
            <Glossary />
        </Modal>
    </div>
 
}

export default Calculator;