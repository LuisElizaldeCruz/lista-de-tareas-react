import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario"
import "../assets/css/ListaDeTareas.css"
import Tarea from "./Tarea";

const ListaDeTareas = () => {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {//verifica si la cadena esta vacia
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    };

    const eliminarTarea = id =>{
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);/*se crea una copia de la lista que contenga  las tareas con los id escepto el que se esta pidiendo*/
        setTareas(tareasActualizadas);
    }

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            eliminarTarea = {eliminarTarea}
                        />
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;