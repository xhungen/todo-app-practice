import {useState} from 'react'

export default function useForm(initialState = {}) {

    const [inputs, setInputs] = useState(initialState);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        setInputs((old) => ({
          ...old,
          [name]: type === "checkbox" ? checked : value,
        }));
      };

    const reset = () =>{
        setInputs(initialState);
    }

  return [inputs, handleChange, reset];
}
