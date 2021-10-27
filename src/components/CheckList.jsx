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
        history.push('/calculadora' , props)
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
                <div className="d-flex flex-row justify-content-center">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <button className="btn-pdf" onClick={generateDoc}></button>
                        <span className="text-pdf" >Descargar revisión</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <button className="btn-home" onClick={backToHome}> <i class="fa fa-home fa-2x" aria-hidden="true"></i></button>
                        <span className="text-pdf" >Ir a inicio</span>
                    </div>
                </div>
            </nav>
            <main className="main-checkbox">
                <form onSubmit={handleSubmit(onSubmit)} id="form">
                    <div className="form-tittle">
                        <h2 className="tittle-form"> Revisión de arnés de seguridad y puntos de anclaje.</h2>
                        <h5 className="subtittle-form">Asegúrate de revisar tu área de trabajo.</h5>
                        <span>Nombre: {name}</span>
                        <span>Rut: {rut}</span>
                    </div>
                    <div className="form-sub-category">
                        <h5>Estado del arnés</h5>
                        <div className="form-check m-1">
                            <input className="form-check-input" type="checkbox" name="check" {...register("p2", { required: true })} />
                            <label className="form-check-label" id="form1">
                                Se encuentra libre de grasa, pinturas, etc.
                            </label>
                            <div className="linea"></div>
                            {errors.p2 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                        </div>
                        <div className="form-check m-1">
                            <input className="form-check-input" type="checkbox" name="check" {...register("p3", { required: true })} />
                            <label className="form-check-label">
                                No presenta costuras deshilachadas.
                            </label>
                            <div className="linea"></div>
                            {errors.p3 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                        </div>
                        <div className="form-check m-1">
                            <input className="form-check-input" type="checkbox" value="" name="check" {...register("p4", { required: true })} />
                            <label className="form-check-label">
                                Posee la placa de identificación.
                            </label>
                            <div className="linea"></div>
                            {errors.p4 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                        </div>
                        <div className="form-check m-1">
                            <input className="form-check-input" type="checkbox" value="" name="check" {...register("p5", { required: true })} />
                            <label className="form-check-label">
                                Se encontraba correctamente almacenado.
                            </label>
                            <div className="linea"></div>
                            {errors.p5 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                        </div>
                        <div className="form-check m-1">
                            <input className="form-check-input" type="checkbox" name="check" {...register("p6", { required: true })} />
                            <label className="form-check-label" >
                                No presenta cortes o desgarros.
                            </label>
                            <div className="linea"></div>
                            {errors.p6 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input"  type="checkbox" name="check" {...register("p7", { required: true })} />
                        <label className="form-check-label" >
                            Posee el tag de inspección Cesmec.
                        </label>
                        <div className="linea"></div>
                        {errors.p7 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>

                </div>
                <div className="form-sub-category">
                 <h5>Estado de los accesorios</h5>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p8", { required: true })} />
                        <label className="form-check-label" >
                            Los anillos en ○ NO presentan deformaciones.
                        </label>
                        <div className="linea"></div>
                        {errors.p8 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p9", { required: true })} />
                        <label className="form-check-label" >
                            Las hebillas están en buen estado.
                        </label>
                        <div className="linea"></div>
                        {errors.p9 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p10", { required: true })} />
                        <label className="form-check-label" >
                            Mantiene los elementos plásticos.
                        </label>
                        <div className="linea"></div>
                        {errors.p10 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p11", { required: true })} />
                        <label className="form-check-label">
                            Los elementos plásticos están en buen estado.
                        </label>
                        <div className="linea"></div>
                        {errors.p11 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p12", { required: true })} />
                        <label className="form-check-label">
                            No presenta costuras deshilachadas.
                        </label>
                        <div className="linea"></div>
                        {errors.p12 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                </div>
                <div className="form-sub-category">
                <h5>Estado de la cuerda de vida</h5>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p13", { required: true })} />
                        <label className="form-check-label">
                            Se encuentra libre de grasa, pinturas, etc.
                        </label>
                        <div className="linea"></div>
                        {errors.p13 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p14", { required: true })} />
                        <label className="form-check-label">
                            Los ganchos están en buen estado.
                        </label>
                        <div className="linea"></div>
                        {errors.p14 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p15", { required: true })} />
                        <label className="form-check-label">
                            No presenta cortes en sus hebras.
                        </label>
                        <div className="linea"></div>
                        {errors.p15 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p16", { required: true })} />
                        <label className="form-check-label" for="flexCheckDefault">
                            No presenta costuras deshilachadas.
                        </label>
                        <div className="linea"></div>
                        {errors.p16 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                </div>
                <div className="form-sub-category">
                    <h5>Estado de los puntos de anclaje</h5>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p17", { required: true })} />
                        <label className="form-check-label" for="flexCheckDefault">
                            No se visualiza alguna modificación o alteración del punto de anclaje.
                        </label>
                        <div className="linea"></div>
                        {errors.p17 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p18", { required: true })} />
                        <label className="form-check-label">
                            El punto de anclaje a utilizar esta identificado de color amarillo.
                        </label>
                        <div className="linea"></div>
                        {errors.p18 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p19", { required: true })} />
                        <label className="form-check-label">
                            El punto de anclaje se encuentra accesible.
                        </label>
                        <div className="linea"></div>
                        {errors.p19 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p20", { required: true })} />
                        <label className="form-check-label" >
                            No existe deformación en alguno de los componentes (argolla, placa, pernos, etc).
                        </label>
                        <div className="linea"></div>
                        {errors.p20 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p21", { required: true })} />
                        <label className="form-check-label" >
                            Se encuentra instalada la placa identificadora que muestra el código, capacidad y estado de aprobación.
                        </label>
                        <div className="linea"></div>
                        {errors.p21 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p22", { required: true })} />
                        <label className="form-check-label" >
                            La placa cuenta con la fecha de validación, tipo y fijación del anclaje.
                        </label>
                        <div className="linea"></div>
                        {errors.p22 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>
                    <div className="form-check m-1">
                        <input className="form-check-input" type="checkbox" name="check" {...register("p23", { required: true })} />
                        <label className="form-check-label" >
                            NO se aprecian fisuras o golpes en el punto de anclaje.
                        </label>
                        <div className="linea"></div>
                        {errors.p23 && <span className="text-danger text-small">Este ítem es requerido. Para continuar tu trabajo contacta a tu supervisor/a.</span>}
                    </div>

                </div>
                    <div className="d-flex flex-r justify-content-center m-2">
                        <button type="submit" className="btn-checklist">Calcular ELC</button>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default CheckList;
