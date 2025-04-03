import React, { useEffect, useState } from "react";
import BusService from "../services/BusService";
import { Link } from "react-router-dom";
//import MarcaService from "../services/MarcaService";

export const ListBusesComponent = () => {  

    const [buses, setBuses] = useState([]);
    //const [marcas, setMarcas] = useState([]);

    
    useEffect(() => {
        listarBuses();  
        //listarMarcas();
    }, []);

    
    const listarBuses = () => {
        BusService.geTAllBuses()  
            .then(response => {
                setBuses(response.data);  
                console.log(response.data); 
            })
            .catch(error => {
                console.log(error);  
            });
    };

    /*const listarMarcas = () => {
        MarcaService.getAllMarcas()  
            .then(response => {
                setMarcas(response.data);  
                console.log(response.data); 
            })
            .catch(error => {
                console.log(error);  
            });
    };

    const obtenerNombreMarcas = (marcaId) => {
        const marca = marcas.find((marca) => marca.id === marcaId);
        return marca ? marca.nombre : "Marca no encontrada";
    };*/



    const deleteBus = (busId) => {
        BusService.deleteBus(busId)  
            .then(response => {
                listarBuses();  
            })
            .catch(error => {
                console.log(error); 
            });
    };

    return (
        <div className="container">
            <h2 className="text-center">Listado de Buses</h2>
            <Link to='/add-bus' className="btn btn-primary mb-2">Agregar Bus</Link>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Número de Buses</th>
                        <th>Placa de Bus</th>
                        <th>Fecha de Creación</th>
                        <th>Caracteristicas</th>
                        <th>Marca</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        buses.map(
                            bus =>
                                <tr key={bus.id}>
                                    <td>{bus.id}</td>
                                    <td>{bus.numero_bus}</td>
                                    <td>{bus.placa}</td>
                                    <td>{bus.fecha_creacion}</td>
                                    <td>{bus.caracteristicas}</td>
                                    <td>{bus.marca_id}</td>
                                    <td>{bus.estado}</td>
                                    <td>
                                        <Link className="btn btn-info" to={`/edit-bus/${bus.id}`}>Actualizar</Link>
                                        <button
                                            style={{ marginLeft: "10px" }}
                                            className="btn btn-danger"
                                            onClick={() => deleteBus(bus.id)}  
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ListBusesComponent;
