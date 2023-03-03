import React from 'react';
import Card from 'react-bootstrap/Card';
import '../components/ItemDetail.css';


const data = [
    {
        "id": 1,
        "nombre": "Taladro",
        "precio": 71400,
        "descripcion": "TALADRO 13mm INALAMBRICO 18V 1BAT TP 813/18 C1 PRO",
        "categoria": "Herramientas electricas",
        "oferta": true,
        "image": "https://aco.cl/imagenes/productos/054121.jpg"
    }]


const ItemDetail = () => {
    return (


        <div>
            {data.map((data, id) => {
                return (
                    <>
                        <div class="detalle" key="id">

                            <><Card style={{ width: '30rem' }}>
                                <Card.Img variant="top" src={data.image} />
                                <h1 >{data.nombre}</h1>
                                <p>$ {data.descripcion}</p>
                                <p>$ {data.precio}</p>
                                <button>-</button>
                                <label>1</label>
                                <button>+</button>

                            </Card>
                            <button>Agregar al carro</button>
                            </>
                        </div>

                    </>
                );
            })}
        </div>


    );

}
export default ItemDetail;
