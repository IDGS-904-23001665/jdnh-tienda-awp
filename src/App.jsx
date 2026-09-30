import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.jsx'
import './App.css'
import Encabezado from './components/Encabezado.jsx'
import Catalogo from './components/Catalogo.jsx'
import { obtenerProductosLocales } from './data/inventario.js'

function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [segundos, setSegundos] = useState(3);

  // Contador en reversa
  useEffect(() => {
    const Intervalo = setInterval(() => {
      setSegundos((tiempoAnterior) => {
        if (tiempoAnterior <= 1){
          clearInterval(Intervalo);
          return 0;
        }
        return tiempoAnterior - 1;
      });
    }, 1000);




    // 3 segundos
    const cargarDatos = async() => {
      setTimeout(async() => {
        const datos = await obtenerProductosLocales();
        setProductos(datos);
        setCargando(false);
      }, 3000);
    };

    cargarDatos();

    return() => clearInterval(Intervalo);
  }, []);



  return(
    <div className="container-fluid p-0 bg-light min-vh-100">
      <Encabezado
      titulo = "Abarrotes Daniel"
      descripcion = "Te queremos bieeeen" />

      <main className='container-pb5'>
        {cargando ? (
          <div className='d-flex flex-column align-item-center justify-content-center mt-5'>
            <h2 className='mb-4 text-secondary'> Preparando tu carrito, espera poquito...</h2>
            {}
            <div className='display-1 fw-bold text-warning' role='status' style={{width: '3rem', height: '3rem'}}>
            </div>
          </div>
        ) : (
          <Catalogo listaProductos={productos}/>
        )}
      </main>
    </div>
  );
}

export default App
