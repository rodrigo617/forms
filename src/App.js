//en este ejemplo estoy guardando el estado de un campo de un 
//formmulario guardando dentro del estado de useState.
//pero si quiero guardar mas valores??
// >>>> puedo guardar (en lugar de un '') un objeto literal.

import { Form } from 'formik'
import {useState } from 'react'

const App = () => {
  //const [value, setValue] = useState('')
  const [value, setValue] = useState({ normal: '', texto: '', select: 'valor 1', check: false})
  const handleChange = ({ target }) => {
 
    setValue((state) => ({ 
      ...state,
      [target.name]: target.type === 'checkbox' 
      ? target.checked 
      : target.value 
    }))

  }
  console.log(value);
  
  return (
    <div>
      {value.length < 5 ? <span>longitud minima de 5</span>: null}
      <input type="text" name="normal" value={value.normal} onChange={handleChange}/>
      <textarea name='texto' onChange={handleChange} value={value.texto} />
    
    <select value={value.select} name='select' onChange={{handleChange}}>
    <option value=''>-- seleccione --</option>
    <option value='valor 1'>Valor 1</option>
    <option value='valor 2'>Valor 2</option>
    <option value='valor 3'>Valor 3</option>

    </select>

    <input 
      type="checkbox"
      name="check"
      onChange={handleChange}
      checked={Form.check}
    
    />

    <div>
      <label>Seleccione</label>
      <input 
        onChange={handleChange} 
        type="radio" 
        value="Op 1" 
        name="estado" 
        checked={value.estado === 'Op 1'}
      /> Opcion 1
      <input 
        onChange={handleChange} 
        type="radio" 
        value="Op 2" 
        name="estado" 
        checked={value.estado === 'Op 2'}
      /> Opcion 2
      <input 
        onChange={handleChange} 
        type="radio" 
        value="Op 3" 
        name="estado" 
        checked={value.estado === 'Op 3'}
      /> Opcion 3
    </div>
    
    </div>

  )
}

export default App