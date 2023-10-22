import {
    Header,
    Formulario,
    ListadoPacientes    
} from './Components'

function App() {
 
return (
    <div className='container mx-auto mt-20'>
        <Header/>
        
        <div className='mt-20  md:flex'>
            <Formulario/>
            <ListadoPacientes/>
        </div>
    </div>
)
  
}

export default App
