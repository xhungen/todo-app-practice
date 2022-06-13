import React from "react";

const Todo = ({ todo, deleteTodos, editTodos }) => {
  const { id, todoName, todoDescription, todoEstado, todoPrioridad } = todo;

  return (
    <>
       
        <li className=" bg-violet-600 rounded-xl p-3 shadow-xl ">
        <div className="flex lg:gap-4 items-center lg:flex-row flex-col gap-1">
          <h1 className="text-white font-bold text-xl ">{todoName}</h1>

          <span className="text-yellow-500">
            ({todoEstado ? "Finalizado" : "Pendiente"})
          </span>
        </div>
        <div className="break-all text-center lg:text-start mt-1">
          <p className="text-white">{todoDescription}</p>
          <span className="text-white underline decoration-solid r lg:text-start">{todoPrioridad && "Prioritario"}</span>
        </div>

  

        <div className="flex items-center justify-center lg:justify-start gap-2">
          <button className="bg-yellow-500 w-20  p-2 rounded-full text-white shadow-lg transition-colors duration-200  hover:bg-yellow-600 mt-4" onClick={()=>editTodos(id)}>
          
            Editar
          </button>

          <button
            className="bg-red-500 w-20  p-2 rounded-full text-white shadow-lg transition-colors duration-200  hover:bg-red-600 mt-4"
            onClick={() => deleteTodos(id)}
          >
            
            Eliminar
          </button>
        </div>
      </li>


  
      
    </>
  );
};

export default Todo;
