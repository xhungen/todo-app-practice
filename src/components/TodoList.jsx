import React, { useState, useEffect } from "react";
import Formulario from "./Formulario";
import Todo from "./Todo";
import Swal from "sweetalert2";

function TodoList() {
  const [todos, setTodos] = useState([]);

 

  useEffect(() => {
   if(localStorage.getItem('todos')){
     setTodos(JSON.parse(localStorage.getItem('todos')))
   }
  }, []);

  useEffect(() =>{
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodos = (todo) => {
    setTodos((old) => [...old, todo]);
  };

  const editTodos = (id) =>{
    const editTodos = todos.map(item => (
      item.id === id ? {...item, todoEstado: !item.todoEstado} : item
    ) ) 

    setTodos(editTodos);
  }

  const deleteTodos = (id) => {

    setTodos((old) => old.filter((todo) => todo.id !== id));

    Swal.fire({
      title: "Tarea eliminada",
      text: "La tarea se ha eliminado correctamente",
      icon: "success",
      confirmButtonText: "Ok",
    });

  }

  let encontrado = false;

  if(todos.length > 0){
    encontrado = true;
  }


  return (
    <>
      <div className="container lg:w-1/2 w-full mx-auto bg-violet-600 p-5 rounded-xl shadow-lg ">
        <h1 className="font-bold text-center text-4xl text-white">Todo App</h1>

        <Formulario addTodos={addTodos}  />

        {encontrado ?(<ul className="bg-violet-700 flex flex-col  gap-5 p-4 rounded-xl mt-5 shadow-lg">
          {todos.map((item) => {
            return <Todo key={item.id} todo={item} deleteTodos={deleteTodos} editTodos={editTodos} />;
          })}
        </ul>) : (<div></div>)}
        

        
      </div>
    </>
  );
}

export default TodoList;
