// CitaForm.jsx
import  { useState,useContext } from "react";
import { mostrarConfirmacion } from "../../../modulos/confirms";
import { API_URLS } from "../../../modulos/urls";
import { mostrarMensajeError } from "../../../modulos/alertas";
import { enviadorAuth } from "../../../functions/usePostAuth";
import { Form } from "./form";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const CitaForm = ({ barberoInfo }) => {
 const  navigate=useNavigate();
  const { id } = useParams();
  const [barbero, setBarbero] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  // Obtener la fecha actual en formato 'YYYY-MM-DD' para usar como fecha mínima
  const fechaActual = new Date().toISOString().split('T')[0];

  // Función para renderizar las opciones del select
  const renderBarberosOptions = () => {
    if (barberoInfo && barberoInfo.barberos && barberoInfo.barberos.length > 0) {
      return barberoInfo.barberos.map((barbero) => (
        <option key={barbero._id} value={barbero.usuario}>
          {barbero.usuario}
        </option>
      ));
    } else {
      return <option value="">No hay barberos disponibles</option>;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const confirmacion = await mostrarConfirmacion("¿Enviar datos?", "¿Estás seguro de agendar cita?");
    if (barbero === "seleccionar" ||barbero === "" ||!fecha ||!hora || !confirmacion.isConfirmed
    ) {
      return;
    }
    // Crear un objeto Date con la fecha y hora seleccionadas
    const fechaHoraSeleccionada = new Date(`${fecha}T${hora}`);

    // Obtener la fecha y hora actuales
    const fechaHoraActual = new Date();

    // Verificar si la fecha y hora seleccionadas son futuras
    if (fechaHoraSeleccionada <= fechaHoraActual) {
      mostrarMensajeError("Por favor escoja una hora válida.");
      return;
    }

    // Formatear la fecha y hora como una cadena en el formato deseado
    const fechaHoraFormateada = fechaHoraSeleccionada.toLocaleString();

    // Enviar los datos
   const resultado= await enviadorAuth(API_URLS.agendar_cita, { fecha: fechaHoraFormateada, barbero,barberiaId:id });
   if(resultado)
   navigate("/citas");
  };

  const handleBarberoChange = (event) => {
    setBarbero(event.target.value);
  };

  const handleFechaChange = (event) => {
    setFecha(event.target.value);
  };

  const handleHoraChange = (event) => {
    setHora(event.target.value);
  };

  return (
    <Form
    barberiaInfo={barberoInfo}
    handleSubmit={handleSubmit}
    barbero={barbero}
    handleBarberoChange={handleBarberoChange}
    fecha={fecha}
    handleFechaChange={handleFechaChange}
    hora={hora}
    handleHoraChange={handleHoraChange}
    fechaActual={fechaActual}
    renderBarberosOptions={renderBarberosOptions}
  />
  );
};

export default CitaForm;
