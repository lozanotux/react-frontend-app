import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios/Axios";
import './Clientes.css';

function Clientes() {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get("/api/clientes");
                setClientes(response.data);
            } catch (error) {
                console.error("Error al obtener los clientes desde Laravel API", error);
            }
        }
        fetchData();
    }, []);

    return (
        <div class="clientes">
            <h2>Listado de Clientes</h2>
            {
                clientes.map((item, i) => {
                    return (
                        <div class="item">
                            <p>{item.id} | {item.nombre_cliente} - {item.email_cliente}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Clientes;