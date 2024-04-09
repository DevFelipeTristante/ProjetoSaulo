import React from "react";
import logo from "../../imgs/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons"; // Caminho relativo

function Login() {
  return (
    <div className="bg-gradient-to-r from-black to-green-500 w-screen h-screen">
      <div className="flex justify-around p-36">
        {/* logo */}
        <img
          src={logo}
          alt="Logo da XYZ Distribuidora"
          className="w-72 h-48 border-2 border-black"
        />
        {/* card cadastro */}
        <div className="w-80 h-96 bg-gradient-to-t from-blue-950 to-green-500 border-2 border-black">
          <div className="flex flex-col gap-y-4">
            <FontAwesomeIcon icon={faCircleUser} className="text-9xl" />
            {/* Campos login */}
            <div className="flex justify-center">
              <div className="flex flex-col gap-4 w-10/12">
                <div className="flex justify-center items-center">
                  <div className="bg-slate-400 p-4">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <input placeholder="Username" className="p-4" />
                </div>
                <div className="flex justify-center">
                  <div className="bg-slate-400 p-4">
                    <FontAwesomeIcon icon={faLock} />
                  </div>
                  <input placeholder="********************" className="p-4" />
                </div>
                <div className="flex justify-around">
                  <div className="flex items-center gap-x-0.5">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className="text-white text-sm">Remember me</label>
                  </div>
                  <label className="text-white text-sm">Forget passowrd?</label>
                </div>
              </div>
            </div>
            {/* botao login */}
            <div className="flex justify-center">
              <button className="text-white">
                <div className="flex justify-center bg-green-400 w-60 p-2">
                  LOGIN
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
