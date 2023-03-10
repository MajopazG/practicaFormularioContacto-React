import React, { useState } from 'react'
// oh tambien se puede = import { useState } from 'react'
import './RepasoHooks.css'

export const RepasoHooks = () => {

    //1. Hook: useState
    //2. const [] = useState();
    //es valor iniciar y funcion 
    const [valorInicial, setValorInicial] = useState(0);

    function suma() {
        setValorInicial(valorInicial+1)
    }

    const [mensaje, setMensaje] = useState("Nombre");

    const colocarMensajeNuevo = (event) => {
        // console.log(event.target.value);
        //target reconoce el elemento y lo trae, en este caso es un input
        setMensaje(event.target.value);
    }

    const [estado, setEstado] = useState(true);
    const [style, setStyle] = useState('colorRed');
    const [keyWord1, setKeyWord1] = useState("enabled");

    const modification = () => {
        setEstado(!estado);
        estado === true ? setStyle('colorGreen') : setStyle('colorRed');
        estado === true ? setKeyWord1('disabled'):setKeyWord1('enabled');
    }
  return (
    <>
        <h1 className={style} >{`Cantidad de Click:  ${valorInicial}`}</h1>
        {/* El ` sirbe para hacer una cadena para concatenar y las llaves se utilizan para meter codigo javascript */}
        <input onChange={colocarMensajeNuevo} type="text" />
        {/* captura un cambio del elemento */}
        <h2>{mensaje}</h2>
        <button onClick={suma}>Dar click</button>

        <button onClick={modification} >{keyWord1}</button>
    </>
  )
}
