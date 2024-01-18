import React from 'react';
import '../styles/AddMetas.css';
import { useState } from 'react';
import Metas from './Metas';

export default function AddMetas({textoIngresado}){
    const [nuevaMeta,setNuevaMeta]=useState('')
    const [metas,setMetas] =useState([])
    const [completado,setCompletado]=useState(0)
    const [incompleto,setIncompleto]=useState(0)
    

    const eliminarNota = (id) =>{
        console.log("Eliminar")
        setMetas((prevMetas) => prevMetas.filter((meta) => meta.id !== id));

    };

    
    const marcar = () =>{

    }
    const agregar = ()=>{
        console.log("Agregar Meta")
        if(nuevaMeta.trim() === '') return(console.log("retorno por estar vacio"));
        setMetas([...metas,{id:Date.now(), texto: nuevaMeta}]);
        setNuevaMeta('');
    };
    const eliminarMeta = (id) =>{
        console.log("Eliminar")
        setMetas((prevNotas) => prevNotas.filter((meta) => meta.id !== id));
    }
    return(
        <div className='contenedor-meta-lista'>
            <input
                    className="input"
                    type="text"
                    value={nuevaMeta}
                    onChange={(e)=>setNuevaMeta(e.target.value)}                    
                />                    
                
                <button className='boton' onClick={agregar} >Agregar Meta</button>
                {metas.map((meta) => (

                <Metas            
                    key={meta.id}
                    meta={meta}
                    funcEliminar={eliminarMeta}                    
                />
                ))

                }  
        </div>        
    );
};