import Producto from './Producto'

export default function Catalogo ({listaProductos}){
    return(
        <div className='row'>
            {listaProductos.map((producto) => (
                <Producto key={producto.id} item={producto}/>
            ))}
        </div>
    );
}