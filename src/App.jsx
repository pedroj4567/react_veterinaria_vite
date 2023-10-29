import {
    Header,
    Formulario,
    ListadoPacientes    
} from './Components'
import { useEffect, useState } from 'react'

function App() {
    //Este state se encarga de almacenar los datos
    //extraidos desde el formulario
    const [pacientes,setPacientes] = useState(JSON.parse(localStorage.getItem("pacientes")) ?? []);
    //state para tomar un paciente en especifico
    const [paciente,setPaciente] = useState({});
    
  

    //obtener los datos de localstorage
    //como no tiene dependencias 
    //solo se ejecuta 1 vez, y con esta vez 
    //se puede verificar si tiene o no datos en LocalStorage
    //usamos el nullish coalition ?? para comparar si hay datos los agrega, sino anexa un array vacio
    

    //sincronizando localstorage
    useEffect(()=>{
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
    },[pacientes])

      //funcion para eliminar paciente 
      const eliminarPaciente = id =>{
        const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
        setPacientes(pacientesActualizados)
    }
  
return (
    <div className='container mx-auto mt-20'>
        <Header/>
        
        <div className='mt-8 md:flex '>
            <Formulario
                pacientes={pacientes}
                setPacientes={setPacientes}
                paciente={paciente}
                setPaciente={setPaciente}
            />
            <ListadoPacientes
                pacientes={pacientes}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
            />
        </div>
    </div>
)
  
}

export default App
