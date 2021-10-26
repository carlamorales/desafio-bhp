import React from 'react'
import html2pdf from 'html2pdf.js'
import './CheckList.css'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";



const CheckList = (props) => {
    const { name, rut } = props

    console.log("SOY LAS PROPS", props)
    const { register, handleSubmit, formState: { errors } } = useForm();
    let history = useHistory();


    const onSubmit = (data) => {
        console.log(data)
        history.push('/calculadora')
    }

    const backToHome = () => {
        history.push('/')
    }



    function generateDoc() {
        const form = document.getElementById("form");
        html2pdf()
            .from(form)
            .save();
    }


    return (
        <div className="container-check">
            <nav className="nav-checkbox">
                <img src="https://firebasestorage.googleapis.com/v0/b/elc-bhp.appspot.com/o/bhp_orn_rgb_pos%5B1%5D.png?alt=media&token=e67982c5-67f2-4153-9201-a18c75117eff" alt="logo" width="100px" />
                <i className="fa fa-home" aria-hidden="true"></i>
                {/* <button onClick={backToHome}>Volver a Inicio</button> */}
            </nav>
            <div className="container-checkbox">
                <form onSubmit={handleSubmit(onSubmit)} id="form" className="p-1">
                    <h4 className="text-center m-1"> Revisión de arnés de seguridad y puntos de anclaje.</h4>
                    <p className="h5">Nombre: {name}</p>
                    <p className="h5">RUT: {rut}</p>
                    <h6 className="m-2">Asegúrate de revisar tu área de trabajo.</h6>
                    <div className="m-2">

                    </div>
                    <h5>Estado del arnés</h5>
                    <div className="form-check m-1">
                        <input className="form-check-input my-2" type="checkbox" name="check" {...register("p2", { required: true })} />
                        <label className="form-check-label my-1" id="form1">
                            Se encuentra libre de grasa, pinturas, etc.
                        </label>
                        {errors.p2 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input my-2" type="checkbox" name="check" {...register("p3", { required: true })} />
                        <label className="form-check-label my-1">
                            No presenta costuras deshilachadas.
                        </label>
                        {errors.p3 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" value="" name="check" {...register("p4", { required: true })} />
                        <label className="form-check-label">
                            Posee la placa de identificación.
                        </label>
                        {errors.p4 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" value="" name="check" {...register("p5", { required: true })} />
                        <label className="form-check-label">
                            Se encontraba correctamente almacenado.
                        </label>
                        {errors.p5 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p6", { required: true })} />
                        <label className="form-check-label" >
                            No presenta cortes o desgarros.
                        </label>
                        {errors.p6 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p7", { required: true })} />
                        <label className="form-check-label" >
                            Posee el tag de inspección Cesmec.
                        </label>
                        {errors.p7 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <h5>Estado de los accesorios</h5>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p8", { required: true })} />
                        <label className="form-check-label" >
                            Los anillos en ○ NO presentan deformaciones.
                        </label>
                        {errors.p8 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p9", { required: true })} />
                        <label className="form-check-label" >
                            Las hebillas están en buen estado.
                        </label>
                        {errors.p9 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p10", { required: true })} />
                        <label className="form-check-label" >
                            Mantiene los elementos plásticos.
                        </label>
                        {errors.p10 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p11", { required: true })} />
                        <label className="form-check-label">
                            Los elementos plásticos están en buen estado.
                        </label>
                        {errors.p11 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p12", { required: true })} />
                        <label className="form-check-label">
                            No presenta costuras deshilachadas.
                        </label>
                        {errors.p12 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <h5>Estado de la cuerda de vida</h5>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p13", { required: true })} />
                        <label className="form-check-label">
                            Se encuentra libre de grasa, pinturas, etc.
                        </label>
                        {errors.p13 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p14", { required: true })} />
                        <label className="form-check-label">
                            Los ganchos están en buen estado.
                        </label>
                        {errors.p14 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p15", { required: true })} />
                        <label className="form-check-label">
                            No presenta cortes en sus hebras.
                        </label>
                        {errors.p15 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p16", { required: true })} />
                        <label className="form-check-label" for="flexCheckDefault">
                            No presenta costuras deshilachadas.
                        </label>
                        {errors.p16 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <h5>Estado de los puntos de anclaje</h5>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p17", { required: true })} />
                        <label className="form-check-label" for="flexCheckDefault">
                            No se visualiza alguna modificación o alteración del punto de anclaje.
                        </label>
                        {errors.p17 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p18", { required: true })} />
                        <label className="form-check-label">
                            ¿El punto de anclaje a utilizar esta identificado de color amarillo?
                        </label>
                        {errors.p18 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p19", { required: true })} />
                        <label className="form-check-label">
                            El punto de anclaje se encuentra accesible.
                        </label>
                        {errors.p19 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p20", { required: true })} />
                        <label className="form-check-label" >
                            No existe deformación en alguno de los componentes (argolla, placa, pernos, etc).
                        </label>
                        {errors.p20 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p21", { required: true })} />
                        <label className="form-check-label" >
                            Se encuentra instalada la placa identificadora que muestra el código, capacidad y estado de aprobación.
                        </label>
                        {errors.p21 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p22", { required: true })} />
                        <label className="form-check-label" >
                            La placa cuenta con la decha de validación, tipo y fijación del anclaje.
                        </label>
                        {errors.p22 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p23", { required: true })} />
                        <label className="form-check-label" >
                            NO se aprecian fisuras o golpes en el punto de anclaje.
                        </label>
                        {errors.p23 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="d-flex flex-r justify-content-center m-2">
                        <button type="submit" className="btn-checklist">Calcular ELC</button>
                    </div>
                </form>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <button className="btn-pdf" onClick={generateDoc}></button>
                <span className="text-pdf" >Descargar lista de revisión</span>
            </div>
        </div>
    )
}

export default CheckList;
