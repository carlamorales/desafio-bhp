import React, { useState } from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import './Home.css'

Modal.setAppElement('#root');

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: '10%',
    bottom: 'auto',
    marginRight: '-30%',
    transform: 'translate(-50%, -50%)',

  },
};

const Home = (props) => {

  const [role, setRole] = useState({ name: "", rut: "" });

  const handleSelectChange = (rol) => {
    setRole({ ...role, 'userRol': rol })
  }

  console.log("SOY EL STATE", role)

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  }

  const handleCloseModal = () => {
    setModalIsOpen(false);
    if (role.userRol === 'Eléctrico') {
      props.history.push('/harnessone', { ...role });
    }
    if (role.userRol === 'Soldador') {
      props.history.push('/harnesstwo', { ...role });
    }
    if (role.userRol === 'Trabajos generales') {
      props.history.push('/harnessthree', { ...role });
    }
  }

  return (
    <div className="containerHome" >
      <div className="imgDesktop"> 
        <img  src=""  alt=""/>
      </div>
      <div className="container-home-desktop">
        <nav className="bhpLogo">
          <img  src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/bhp_orn_rgb_pos%5B1%5D.png?alt=media&token=e67982c5-67f2-4153-9201-a18c75117eff" alt="logo" width="100px" />
        </nav>
        <div className="keepSafe">
          <h1 className="nameApp">ESTANDAR DE DETENCIÓN DE CAÍDA</h1>
          <h1 className="textKeepSafe">En casa te esperan, mantente seguro</h1>
        </div>

        <div className="backgroundSelectBtn">

          <div>
            <input className="form-control" type="text" placeholder="NOMBRE Y APELLIDO" onKeyUp={(e) => { setRole({ ...role, 'name': e.target.value.toUpperCase()  }) }} aria-label="default input example" />
            <input className="form-control" type="text" placeholder="RUT" onKeyUp={(e) => { setRole({ ...role, 'rut': e.target.value }) }} aria-label="default input example" />
          </div>


          <div className="backgroundSelect">
            <select className="form-select" onChange={(e) => { handleSelectChange(e.target.value) }}>
              <option value="zero">SELECCIONA TU ESPECIALIDAD</option>
              <option value="Eléctrico">Eléctrico</option>
              <option value="Soldador">Soldador</option>
              <option value="Trabajos generales">Trabajos generales</option>
            </select>
          </div>

          <button type="buttonHome" onClick={handleOpenModal} className="btn btn-secondary">CONTINUAR</button>
        </div>
        
          <Modal isOpen={modalIsOpen} style={modalStyles}>
          <div>
            <h1>Acuerdo de licencia de usuario final</h1>
            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
            <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi.</p>
            <div>
              <button onClick={handleCloseModal}>Acepto</button>
            </div>
            </div>
          </Modal>
       
      </div>
    </div>
  )
}

export default withRouter(Home);
