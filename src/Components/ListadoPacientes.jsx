/* eslint-disable react/prop-types */
import Card from "./Card"
// import { useEffect } from 'react'

const ListadoPacientes = ({setPaciente,pacientes,eliminarPaciente}) => {
  
  // useEffect(()=>{
  //   if(pacientes.length > 0){
  //     console.log("Nuevo paciente");
  //   }
  // },[pacientes])


  return (
    
    <div className="lg:w-3/5 ml-5 md:h-screen overflow-y-scroll">
    {pacientes && pacientes.length ? (
      <>
        <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
        <p className="text-xl mt-10 mb-5 text-center">
          Administra tus {''}
          <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>

      
        {pacientes.map((paciente)=>{
          return (
          <Card
            paciente={paciente}
            setPaciente={setPaciente}
            key={paciente.id}
            eliminarPaciente={eliminarPaciente}
          />)
        })}
       </>
    ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
              <p className="text-xl mt-10 mb-5 text-center">
                 Comienza agregando pacientes{' '} con git
              <span className="text-indigo-600 font-bold">ellos aparecerán aqui</span>
            </p>  
        </>
    )}

       
       
    </div>
  )
}

export default ListadoPacientes