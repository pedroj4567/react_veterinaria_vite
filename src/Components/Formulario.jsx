/* eslint-disable react/prop-types */
import {useState, useEffect} from 'react'
import Error from './Error';
const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {
  // States 
  const [nombre,setNombre] = useState("");
  const [propietario,setPropietario] = useState("");
  const [email,setEmail] = useState("");
  const [ingreso,setIngreso] = useState("");
  const [sintomas,setSintomas] = useState("");
  const [error,setError] = useState(false);
  const getId = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

  //objeto paciente
  const objectPaciente = {
    nombre,  
    propietario,
    email,
    ingreso,
    sintomas,
   
  }

  //este useEffect esta atento a la dependencia
  //de paciente.
  useEffect(()=>{
    if(Object.keys(paciente).length > 0){

      const {nombre,propietario,sintomas,email,ingreso} = paciente;

      setNombre(nombre);
      setPropietario(propietario);
      setEmail(email);
      setIngreso(ingreso);
      setSintomas(sintomas);
    }

  },[paciente])

  // //cuando el array de dependencias esta vacios
  // //este useEffect se encarga de ver cuando el componente esta cargado o montado en la vista
  // useEffect(()=>{
  //   console.log("Componente cargado");
  // },[])

  // functions 
  const handlerSubmit = (e) =>{ 
    e.preventDefault();

    //validacion del formulario 
    if([nombre,propietario,email,ingreso,sintomas].includes("")){
        setError(true);
        return;
    }
      setError(false);
      
     if(paciente.id){
        //primero asignamos el id correspondiente 
        //del elemento a editar
        objectPaciente.id = paciente.id;
        //busca el paciente segun su id
        //luego agrega el nuevo objecto actualizado en caso de que lo consiga
        //sino deja el mismo paciente
        const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objectPaciente : pacienteState);
        setPacientes(pacientesActualizados);
        //resetamos el state del paciente seleccionado
        setPaciente({});

     }else{
       //ingresamos el paciente
       objectPaciente.id = getId();
       setPacientes([...pacientes,objectPaciente]);
     }

      //reiniciar el formulario
      resetForm();
  }

  const resetForm = ()=>{
      setNombre("");
      setEmail("");
      setPropietario("");
      setIngreso("");
      setSintomas("");
  }

  
  

  return (
    <div className="md:w-1/2 lg:w-2/5">
       <h2 className="text-3xl font-bold text-center">Seguimiento pacientes</h2>
       <p className="text-xl mt-5 text-center">
          Agrega pacientes y {""}
            <span className="text-indigo-600 font-bold">Administralos</span>
       </p>

       <form 
        onSubmit={handlerSubmit}
        className="bg-white shadow-lg mt-5  py-10 rounded-lg px-5 mb-10">

          {error && <Error><p>Todos los campos son obligatorios</p></Error>}

          <div className="mb-5">
              <label 
                className="block text-gray-700 uppercase font-bold "
                htmlFor="nombre" 
              >
                  Nombre de la Mascota
              </label>
              <input 
                type="name" 
                name="name" 
                id="nombre"
                value={nombre}
                onChange={(e)=> setNombre(e.target.value)}
                placeholder="Nombre de la mascota"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
               />
          </div>

          <div className="w-full mb-5">
              <label 
                className="block text-gray-700 uppercase font-bold "
                htmlFor="propietario" 
              >
                  Nombre del propietario
              </label>
              <input 
                type="text" 
                name="propietario" 
                id="propietario"
                value={propietario}
                onChange={(e)=> setPropietario(e.target.value)}
                placeholder="Nombre del propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
               />
          </div>


          <div className="w-full mb-5">
              <label 
                className="block text-gray-700 uppercase font-bold "
                htmlFor="email" 
              >
                  Email del propietario
              </label>
              <input 
                type="email" 
                name="correo" 
                id="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Email del propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
               />
          </div>

          <div className="w-full mb-5">
              <label 
                className="block text-gray-700 uppercase font-bold "
                htmlFor="email" 
              >
                  Fecha de ingreso
              </label>
              <input 
                type="date" 
                name="correo" 
                id="email"
                value={ingreso}
                onChange={(e)=> setIngreso(e.target.value)}
                placeholder="Email del propietario"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
               />
          </div>

          <div className="w-full mb-5">
              <label 
                className="block text-gray-700 uppercase font-bold "
                htmlFor="sintomas" 
              >
                  Sintomas
              </label>
              <textarea 
                name="sintomas" 
                id="sintomas"
                value={sintomas}
                onChange={(e)=> setSintomas(e.target.value)}
                className="border-2 w-full p-2 mt-2 resize-none placeholder-gray-400 rounded-md"
                placeholder="Describe los sintomas."

              ></textarea>
          </div>



          <div className="w-full text-center">
            <button 
              type="submit"
              className="text-white font-bold w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-all"
              value={paciente.id ? "Editar paciente" : "Agregar paciente"}
            >
                {paciente.id ? "Editar paciente" : "Agregar paciente"}
            </button>
          </div>
       </form>
    </div>
  )
}

export default Formulario