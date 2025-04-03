import React, { useEffect, useState } from 'react'
import BusService from '../services/BusService';
import { Link, useNavigate, useParams } from 'react-router-dom';
//import MarcaService from '../services/MarcaService';

export const AddBusesComponent= () => {

    const [numero_bus, SetNumero_bus] = useState('');
    const [placa, SetPlaca] = useState('');
    const [fecha_creacion, SetFecha_creacion] = useState('');
    const [caracteristicas, SetCarcateristicas] = useState('');
    const [marca_id, SetMarca_id] = useState('');
    const [estado, SetEstado] = useState('');
    //const [marcas, setMarcas] = useState([]);
    const navigate = useNavigate();
    const {id}= useParams();

    const saveOrUpdateBus = (e) => {
        e.preventDefault();
        const bus ={numero_bus,placa,fecha_creacion,caracteristicas,marca_id,estado};
        
        if(id){
            BusService.updateBus(id,bus).then((response) =>{
                console.log(response.data);
                navigate('/buses');
            }).catch(error => {
                console.log(error)
            });

        }
        else{
            BusService.createBus(bus).then((response) =>{
                console.log(response.data);
                navigate('/buses');
            }).catch(error => {
                console.log(error)
            });
        }

        
       
    };

    useEffect(() =>{
        BusService.getBusById(id).then((response) => {
            SetNumero_bus(response.data.numero_bus);
            SetPlaca(response.data.placa);
            SetFecha_creacion(response.data.fecha_creacion);
            SetCarcateristicas(response.data.caracteristicas);
            SetMarca_id(response.data.marca_id);
            SetEstado(response.data.estado);
        }).catch(error =>{
            console.log(error);
        })
    },[])

    const title =() =>{
        if(id){
            return <h2 className='text-center'>Actualizar Buses</h2>
        }
        else{
            return <h2 className='text-center'>Agregar Buses</h2>
        }
    }
  

    return(
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center'>
                            {
                                title()
                            }
                            
                        </h2>
                        <div className='card-body'>   

                            <form>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Numero de Buses</label>
                                    <input
                                        type='text'
                                        placeholder='Ingrese el numero de bus'
                                        name='numero_bus'
                                        className='form-control'
                                        value={numero_bus}
                                        onChange={ (e) => SetNumero_bus(e.target.value)}
                                    >
                                        
                                    </input>    
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Numero de Placas</label>
                                    <input
                                        type='text'
                                        placeholder='Ingrese el numero de placa'
                                        name='placa'
                                        className='form-control'
                                        value={placa}
                                        onChange={ (e) => SetPlaca(e.target.value)}
                                    >
                                        
                                    </input>    
                                </div>


                                <div className='form-group mb-2'>
                                    <label className='form-label'>Fecha de Creación</label>
                                    <input
                                        type='datetime-local'
                                        placeholder='Fecha de Creacion'
                                        name='fecha_creacion'
                                        className='form-control'
                                        value={fecha_creacion}
                                        onChange={ (e) => SetFecha_creacion(e.target.value)}
                                    >
                                        
                                    </input>    
                                </div>


                                <div className='form-group mb-2'>
                                    <label className='form-label'>Caracteristicas</label>
                                    <input
                                        type='text'
                                        placeholder='Escriba una pequeña descripción'
                                        name='caracteristicas'
                                        className='form-control'
                                        value={caracteristicas}
                                        onChange={ (e) => SetCarcateristicas(e.target.value)}
                                    >
                                        
                                    </input>    
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Marca</label>
                                    <input
                                        type='text'
                                        placeholder='Escriba una marca'
                                        name='marca_id'
                                        className='form-control'
                                        value={marca_id}
                                        onChange={ (e) => SetMarca_id(e.target.value)}
                                    >
                                        
                                    </input>    
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Marca</label>
                                    <input
                                        type='text'
                                        placeholder='Eliga un estado'
                                        name='estado'
                                        className='form-control'
                                        value={estado}
                                        onChange={ (e) => SetEstado(e.target.value)}
                                    >
                                        
                                    </input>    
                                </div>


                                <button className='btn btn-success' onClick={ (e) => saveOrUpdateBus(e)} >
                                    Guardar
                                </button>
                                &nbsp;&nbsp;
                                <Link to='/buses' className='btn btn-danger' >Cancelar</Link>



                            </form>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
    
};

export default AddBusesComponent;