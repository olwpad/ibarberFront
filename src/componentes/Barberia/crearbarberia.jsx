import { useForm } from "../../Hooks/useform";
import { API_URLS } from "../../modulos/urls";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { enviadorAuth } from "../../functions/usePostAuth";
import { RecomendacionBarber } from "./RecomendacionBarber";
export const Crearbarberia = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [usuario, setUsuario] = useState(userData.usuario);

  const { formState, funcion } = useForm({
    nombre_barberia: "",
    direccion_barberia: "",
    nombre_ciudad: "",
    descripcion_barberia: "",
    email: "",
    telefono: "",
  });
  const {
    nombre_barberia,
    direccion_barberia,
    nombre_ciudad,
    descripcion_barberia,
    email,
    telefono,
  } = formState;

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nombre_ciudad === "seleccionar" || nombre_ciudad === "") return;
    const result = await enviadorAuth(API_URLS.BARBERIA, {
      nombre_barberia,
      direccion_barberia,
      nombre_ciudad,
      usuario,
      descripcion_barberia,
      email,
      telefono,
    });
    if (result) {
      navigate("/mi-barberia");
    }
    setUserData((prevUserData) => ({
      ...prevUserData, // Clonar las propiedades existentes
      barberia: true, // Cambiar la propiedad "barberia" a false
    }));
  };

  return (
    <>
      <main id="form-barber-container">
        <div className="subContainer">
          <picture className="containerImage">
            <img
              src={`${API_URLS.obtenerImage}/uploads/fondbar.png`}
              alt=""
              className="animate__animated animate__fadeInLeft"
            />
          </picture>
          <section className="containerForm   animate__animated animate__fadeInRight">
            <form onSubmit={handleSubmit} id="form-barber">
              <div id="login-title">
                <h3 className="title-barber">Crear Barbería</h3>
              </div>
              <div className="login-username">
                <input
                  type="text"
                  name="nombre_barberia"
                  placeholder="Nombre de la barbería"
                  required
                  className="nombre_barberia"
                  value={nombre_barberia}
                  onChange={funcion}
                />
              </div>
              <div className="login-username">
                <input
                  type="text"
                  name="direccion_barberia"
                  placeholder="Dirección de la barbería"
                  required
                  id="direccion_barberia"
                  value={direccion_barberia}
                  onChange={funcion}
                />
              </div>
              <div className="login-username">
                <input
                  type="text"
                  name="descripcion_barberia"
                  placeholder="Descripción de la barbería"
                  required
                  id="descripcion_barberia"
                  value={descripcion_barberia}
                  onChange={funcion}
                />
              </div>
              <div className="login-username">
                <input
                  type="email"
                  name="email"
                  placeholder="Email de la barbería"
                  required
                  id="email"
                  value={email}
                  onChange={funcion}
                />
              </div>
              <div className="login-username">
                <input
                  type="text"
                  name="telefono"
                  placeholder="Teléfono de la barbería"
                  required
                  id="telefono"
                  value={telefono}
                  onChange={funcion}
                />
              </div>
              <div className="login-city">
                <div className="city-title-container">
                  <label className="titleCity">Nombre de la ciudad</label>
                </div>
                <select
                  name="nombre_ciudad"
                  value={nombre_ciudad}
                  onChange={funcion}
                  id="nombre_ciudad"
                >
                  <option value="seleccionar">Seleccionar</option>
                  <option value="Bogotá">Bogotá</option>
                  <option value="Medellín">Medellín</option>
                  <option value="Cali">Cali</option>
                </select>
              </div>
              <div id="btn-enviar-barbero">
                <button type="submit" id="boton-crear-barberia">
                  Enviar
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
      <RecomendacionBarber/>
    </>
  );
};
