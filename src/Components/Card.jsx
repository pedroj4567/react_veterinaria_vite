/* eslint-disable react/prop-types */
const Card = ({paciente,setPaciente, eliminarPaciente}) => {
    
    const {nombre,propietario,email,ingreso,sintomas,id} = paciente;

    const handlerPaciente = () =>{
        const respuesta = confirm("¿Desea eliminar este paciente?");
        
        if(respuesta) {
            eliminarPaciente(id);
        }
    }
  return (
    <div className="m-3 mt-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Nombre: {''}
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Propietario: {''}
            <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Email: {''}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Ingreso: {''}
            <span className="font-normal normal-case">{ingreso}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Sintomas: {''}
            <span className="font-normal normal-case">
             {sintomas}
            </span>
        </p>
        <div className="flex justify-between">
            <button 
                className="bg-indigo-600 transition-all hover:bg-indigo-700 py-2 px-7 text-white rounded-lg"
                onClick={()=>{setPaciente(paciente)}}
                >Editar</button>

            <button
                className="bg-red-600 py-2 transition-all hover:bg-red-700 px-7 text-white rounded-lg"
                onClick={handlerPaciente}
                >Eliminar</button>

        </div>
    </div>
  )
}

export default Card