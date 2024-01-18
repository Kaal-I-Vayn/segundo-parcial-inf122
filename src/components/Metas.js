import React from 'react';
import '../styles/Metas.css';
import { useState } from 'react';

export default function Metas({meta,funcEliminar,funcComplet}){
    const [nuevoTexto, setNuevoTexto] = useState(meta.texto);
    return(
        <div className='contenedor-meta'>
            <div className='cuadros'>            
            <p className='meta'>{meta.texto}</p>            
            <button className='eliminar' onClick={() => funcEliminar(meta.id)}><img src={require(`../images/trash 1.svg`)}/></button>
            <button className='check' onClick={()=> funcComplet(meta.id)}><img src={require(`../images/check-circle 1.svg`)}/></button>                        
            </div>    
        
        </div>
    );

};