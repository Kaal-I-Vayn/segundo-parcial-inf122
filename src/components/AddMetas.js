import React from 'react';
import '../styles/AddMetas.css';
import { useState } from 'react';
import Metas from './Metas';

export default function AddMetas({checkin}){
    const [nuevaMeta,setNuevaMeta]=useState('')
    const [metas,setMetas] =useState([])
    const [completado,setCompletado]=useState(0)
    const [incompleto,setIncompleto]=useState(0)    
    const marcar = () =>{        
        setCompletado(completado+1)
        setIncompleto(incompleto-1)
    }
    const agregar = ()=>{
        console.log("Agregar Meta")
        if(nuevaMeta.trim() === '') return(console.log("retorno por estar vacio"));
        setMetas([...metas,{id:Date.now(), texto: nuevaMeta}]);
        setNuevaMeta('');
        setIncompleto(incompleto+1);            
    };
    const eliminarMeta = (id) =>{
        console.log("Eliminar")
        setMetas((prevMetas) => prevMetas.filter((meta) => meta.id !== id));
    }
    return(
        <div className='contenedor-meta-lista'>
            
            <h1>Completado: {completado} Pendiente: {incompleto}</h1>                
            <div className='text-container'>
                <input
                    className="entrada-cuadro"
                    type="text"
                    value={nuevaMeta}
                    onChange={(e)=>setNuevaMeta(e.target.value)}                    
                />                                    
                <button className='boton-addmeta' onClick={agregar}>Agregar</button>
                </div>
                {metas.map((meta) => (
                <Metas            
                    key={meta.id}
                    meta={meta}
                    funcEliminar={eliminarMeta}                    
                    funcComplet={marcar}
                />
                ))}

            
              
        </div>        
    );
};