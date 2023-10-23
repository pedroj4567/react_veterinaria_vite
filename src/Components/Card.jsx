const Card = () => {
  return (
    <div className="m-3 mt-5 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Nombre: {''}
            <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Propietario: {''}
            <span className="font-normal normal-case">Pedro</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Email: {''}
            <span className="font-normal normal-case">Pedroj4567@gmail.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Ingreso: {''}
            <span className="font-normal normal-case">10 Diciembre 2023</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
            Sintomas: {''}
            <span className="font-normal normal-case">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quod rem, sed sint impedit dolorum molestiae 
                ea illo eaque officiis iusto sunt sit, recusandae ipsam neque
                eos error exercitationem, laudantium quis?
            </span>
        </p>
        
    </div>
  )
}

export default Card