
import Swal from "sweetalert2";
import {v4 as uuidv4} from 'uuid'
import useForm from "../hooks/useForm";

function Formulario({addTodos}) {
  const initialState = {
    todoName: "",
    todoDescription: "",
    todoEstado: "Pendiente",
    todoPrioridad: false,
  };

  const [inputs, handleChange, reset] = useForm(initialState)

  const { todoName, todoDescription, todoEstado, todoPrioridad } = inputs;

  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoName.trim() && !todoDescription.trim()) {
      Swal.fire({
        title: "Error",
        text: "Todos los campos son requeridos",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    } else if (!todoName.trim()) {
      e.target[0].focus();
      Swal.fire({
        title: "Error",
        text: "El nombre de la tarea es obligatorio",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    } else if (!todoDescription.trim()) {
      e.target[1].focus();
      Swal.fire({
        title: "Error",
        text: "La descripción de la tarea es obligatoria",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }else{
      Swal.fire({
        title: "Tarea agregada correctamente",
        icon: "success",
        confirmButtonText: "Ok",
      });

      addTodos({
        todoName: todoName,
        todoDescription: todoDescription,
        todoEstado: todoEstado === "Pendiente" ? false : true,
        todoPrioridad: todoPrioridad,
        id: uuidv4(),

      })
    }
    reset();
  };

  

  return (
    <>
      <h2 className="text-center text-white mt-10 mb-5">Agregar Todo</h2>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col ">
          <input
            type="text"
            placeholder="Nombre de la tarea"
            name="todoName"
            className="mb-3 w-5/6 mx-auto rounded-lg p-2"
            value={todoName}
            onChange={handleChange}
          />

          <textarea
            name="todoDescription"
            placeholder="Descripcion de la tarea"
            className="mb-3 w-5/6 mx-auto rounded-lg p-2"
            value={todoDescription}
            onChange={handleChange}
          />

          <select
            name="todoEstado"
            className="mb-3 w-5/6 mx-auto rounded-lg p-2"
            value={todoEstado}
            onChange={handleChange}
          >
            <option value="pendiente">Pendiente</option>
            <option value="completado">Completado</option>
          </select>

          <div className="mb-3 w-5/6 mx-auto p-2 flex items-center">
            <input
              name="todoPrioridad"
              type="checkbox"
              id="checkBox1"
              checked={todoPrioridad}
              onChange={handleChange}
            />
            <label className="text-white px-2" htmlFor="checkBox1">
              Prioridad
            </label>
          </div>

          <button
            type="submit"
            className="bg-yellow-500 w-20 mx-auto p-2 rounded-full text-white shadow-lg transition-colors duration-200  hover:bg-yellow-600"
          >
            Agregar
          </button>
        </div>
      </form>
    </>
  );
}

export default Formulario;
