export default function Encabezado({titulo, descripcion}){
    return (
        <header className="bg-warning text-dark text-center py-4 mb-4 shadow-sm border-bottom border-warning border-5">
            <h1 className="fw-bold display-5"> {titulo} </h1>
            <h1 className="lead mb-0 fw-semibold"> {descripcion} </h1>
        </header> 
    );
}