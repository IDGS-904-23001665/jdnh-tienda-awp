export default function Producto ({item}){
    const {nombre, precio, img} = item;
    return(
        <div className="col-md4 col-sm6 mb4">
            <div>
                <img src = {img} className="card-img-top" alt={`imagen ${nombre}`} style={{height: '200px', objectFit: 'cover' }}/>
                <div className="card-body bg-white">
                    <h5 className="card-title text-primary fw-bold mb-2" >{nombre}</h5>
                    <span className="badge bg-success fs-5 px-3 py-2 rounded-pill">{precio}</span>
                </div>
            </div>
        </div>
    );
}