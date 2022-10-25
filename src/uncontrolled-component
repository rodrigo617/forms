
function App() {
  const submit = (e) => {
    e.preventDefault()
    const data = Array.from(new FormData(e.target))
    // Object.fromEntries toma un arreglo con arreglo internos, y toma el primer valor
    // de cada arreglo y lo usa como key, y el segundo arreglo como valor.
    console.log(Object.fromEntries(data))
  }
  
  return (
    <form onSubmit={submit}>
      <div>
        <span>
          lala
        </span>
        <input name='campo' />
        </div> 
        <input name='campo-2' />
        <input type='submit' value='Enviar'/>
    </form>
  )

}


export default App;
