import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../components/ItemListContainer.css';


const data = [
    {
        "id":1,
        "nombre":"Taladro",
        "precio":71400,
        "descripcion":"TALADRO 13mm INALAMBRICO 18V 1BAT TP 813/18 C1 PRO",
        "categoria":"Herramientas electricas",
        "oferta":true,
        "image":"https://aco.cl/imagenes/productos/054121.jpg"
    },
    {
        "id":2,
        "nombre":"Banquillo",
        "precio":27000,
        "descripcion":"BANQUILLOS MECANICOS 3 TONELADAS (PAR) 288-430mm T",
        "categoria":"Taller automotriz",
        "oferta":false,
        "image":"https://aco.cl/imagenes/productos/049340.jpg"
    },
    {
        "id":3,
        "nombre":"Soldadora",
        "precio":70000,
        "descripcion":"SOLDADORA INV ARCO MANUAL 140 amp IE 6140/1/220",
        "categoria":"Soldadoras",
        "oferta":false,
        "image":"https://aco.cl/imagenes/productos/052647.jpg"
    },
    {
        "id":4,
        "nombre":"Esmeril",
        "precio":28000,
        "descripcion":"ESMERIL 4 1/2'; 700W + 4 DISC VEL/VAR AA 415/2/220",
        "categoria":"Herramientas electricas",
        "oferta":false,
        "image":"https://aco.cl/imagenes/productos/052348.jpg"
    },
    {
        "id":5,
        "nombre":"Gata",
        "precio":130000,
        "descripcion":"GATA CAIMAN 3 Toneladas T83001",
        "categoria":"Taller automotriz",
        "oferta":true,
        "image":"https://aco.cl/imagenes/productos/034856.jpg"
    }
    ]


const ItemListContainer = () => {
    return (

        <div class="flex-container">
            {data.map((data, id) => {
                return (
                    <div class="cards" key={id}>
                        <Card style={{ width: '20rem' }}>
                            <Card.Img variant="top" src={data.image} />
                            <Card.Body>
                                <Card.Title>{data.nombre}</Card.Title>
                                <Card.Text>
                                    {data.descripcion}
                                </Card.Text>
                                <Card.Text class="precio">
                                    {"$ " + data.precio}
                                </Card.Text>
                                <Button variant="primary">Ver Detalle</Button>
                            </Card.Body>
                        </Card>
                    </div>
                );
            })}
        </div>


    );



}

export default ItemListContainer;