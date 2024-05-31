/* eslint-disable no-unused-vars */
import imagen from "./GatoLogin.jpg";
import React, { useState } from "react";
import appfirebase from "../credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(appfirebase);
function PaginaPrincipal({ peliculas }) {
  const [registrando, setRegistrado] = useState(false);
  const functAutenticacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    if (registrando) {
      try {
        await createUserWithEmailAndPassword(auth, correo, contraseña);
      } catch (error) {
        alert("La contraseña debe ser mayor a 8 caracteres")
      }
    } else {
      try {
        await signInWithEmailAndPassword(auth, correo, contraseña);
      } catch (error) {
        alert("El correo o la contraseña son incorrectos");
      }
    }
  };
  return (
    <div className="bg-black flex justify-center items-center h-screen flex-col">
      <form
        onSubmit={functAutenticacion}
        className="contenedor-principal flex flex-row h-50"
      >
        <div className="formulario w-50">
          <h1 className="text-5xl mt-5 mb-9 uppercase text-red-700">Login</h1>
          <p className="text-red-700 text-4xl text-left">Email</p>
          <input
            className="input-email border-black text-black text-4xl mb-4"
            type="email"

            required
            id="email"
          />
          <p className="text-red-700 text-4xl text-left">Password</p>
          <input
            className="input-password border text-black text-4xl mb-2"
            type="password"
            required
            id="password"
          />
          <div className="botones flex justify-between items my-6">
            <button className="bg-red-700 text-white px-4 py-2 rounded">
              {registrando ? "Registrate" : "Iniciar sesion"}
            </button>
          </div>
        </div>
        <div className="contenedor-imagen my-6 flex items-center">
          <img className="w-80 m-auto" src={imagen} alt="Gato del login" />
        </div>
      </form>

      <div className="botones flex justify-between my-6">
        <h1 className="text-blue-600 text-10 text-left">
          {registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setRegistrado(!registrando)}
          >
            {registrando ? "Iniciar sesion" : "Registrate"}
          </button>
        </h1>
      </div>
    </div>
  );
}

export default PaginaPrincipal;
