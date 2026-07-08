import { useState } from "react";

import {
  FaVideo,
  FaNetworkWired,
  FaFingerprint,
  FaDesktop,
  FaTools,
  FaTimes,
} from "react-icons/fa";

export default function CotizarModal({ abierto, cerrar }) {
  const [servicio, setServicio] = useState("");
  const [nombre, setNombre] = useState("");
const [telefono, setTelefono] = useState("");
const [empresa, setEmpresa] = useState("");
const [descripcion, setDescripcion] = useState("");
const [contacto, setContacto] = useState("59175174318");

  if (!abierto) return null;

  const servicios = [
    {
      nombre: "Cámaras de Seguridad",
      icono: <FaVideo size={34} />,
      descripcion: "Instalación, configuración y monitoreo.",
    },
    {
      nombre: "Redes y WiFi",
      icono: <FaNetworkWired size={34} />,
      descripcion: "Cableado estructurado y redes empresariales.",
    },
    {
      nombre: "Control de Acceso",
      icono: <FaFingerprint size={34} />,
      descripcion: "Biométricos, cerraduras y asistencia.",
    },
    {
      nombre: "Computadoras",
      icono: <FaDesktop size={34} />,
      descripcion: "Venta, reparación y mantenimiento.",
    },
    {
      nombre: "Otro Proyecto",
      icono: <FaTools size={34} />,
      descripcion: "Cuéntanos qué necesitas.",
    },
  ];

  return (
    <div
  className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-end md:items-center justify-center p-0 md:p-4"
  onClick={cerrar}

    >
      <div
  className="
    w-full
    md:max-w-5xl
    bg-[#071221]/95
    border border-cyan-500/20
    shadow-2xl
    overflow-y-auto
    max-h-[92vh]
    rounded-t-3xl
    md:rounded-3xl
  "
  onClick={(e) => e.stopPropagation()}

      >
        {/* Encabezado */}
        <div className="flex items-start md:items-center justify-between border-b border-white/10 p-4 md:p-6">

          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
              SIVTECH
            </p>

            <h2 className="text-2xl md:text-4xl font-bold mt-2 leading-tight">
              Solicita una Cotización
            </h2>

            <p className="text-gray-400 mt-2 text-sm md:text-base">
              Cuéntanos qué necesitas y uno de nuestros especialistas te
              ayudará a encontrar la mejor solución.
            </p>
          </div>

          <button
            onClick={cerrar}
            className="text-gray-400 hover:text-white transition"
          >
            <FaTimes size={28} />
          </button>
        </div>

        {/* Servicios */}

        <div className="p-4 md:p-8">

          <h3 className="text-center text-lg md:text-2xl font-semibold mb-6 md:mb-8">
            Selecciona el servicio de tu interés
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

            {servicios.map((item) => (

              <button
                key={item.nombre}
                onClick={() => setServicio(item.nombre)}
                className={`rounded-2xl p-4 md:p-6 border transition-all duration-300 text-left hover:scale-105
                ${
                  servicio === item.nombre
                    ? "border-cyan-400 bg-cyan-500/20"
                    : "border-white/10 bg-white/5 hover:border-cyan-400"
                }`}
              >

                <div className="text-cyan-400 mb-4">
                  {item.icono}
                </div>

                <h4 className="text-lg md:text-xl font-bold">
                  {item.nombre}
                </h4>

                <p className="text-gray-400 mt-2 text-sm">
                  {item.descripcion}
                </p>

              </button>

            ))}

          </div>

        {servicio && (
  <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-black/20 p-6">

    <h3 className="text-2xl font-bold text-cyan-400 mb-6">
      {servicio}
    </h3>

    <div className="grid gap-4">

      <input
        type="text"
        placeholder="👤 Nombre completo *"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-cyan-400"
      />

      <input
        type="text"
        placeholder="📱 WhatsApp *"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
        className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-cyan-400"
      />

      <input
        type="text"
        placeholder="🏢 Empresa (Opcional)"
        value={empresa}
        onChange={(e) => setEmpresa(e.target.value)}
        className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-cyan-400"
      />

      <textarea
        rows="5"
        placeholder="📝 Describe lo que necesitas *"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        className="w-full rounded-xl bg-white/5 border border-white/10 p-4 outline-none focus:border-cyan-400"
      />

      <div className="pt-2">
        <h4 className="text-lg font-semibold text-cyan-400 mb-4">
          ¿Con quién deseas comunicarte?
        </h4>

        <div className="grid md:grid-cols-3 gap-4">

          <button
            type="button"
            onClick={() => setContacto("59175174318")}
            className={`rounded-xl border p-4 transition ${
              contacto === "59175174318"
                ? "border-cyan-400 bg-cyan-500/20"
                : "border-white/10 bg-white/5 hover:border-cyan-400"
            }`}
          >
            <div className="text-4xl mb-2">👨‍💼</div>
            <h5 className="font-bold">Ing. Cristian Vargas</h5>
            <p className="text-sm text-gray-400">
              Gerente Comercial
            </p>
          </button>

          <button
            type="button"
            onClick={() => setContacto("59175166249")}
            className={`rounded-xl border p-4 transition ${
              contacto === "59175166249"
                ? "border-cyan-400 bg-cyan-500/20"
                : "border-white/10 bg-white/5 hover:border-cyan-400"
            }`}
          >
            <div className="text-4xl mb-2">👨‍💻</div>
            <h5 className="font-bold">Ing. José Jerez</h5>
            <p className="text-sm text-gray-400">
              Redes y Telecomunicaciones
            </p>
          </button>

          <button
            type="button"
            onClick={() => setContacto("59176801628")}
            className={`rounded-xl border p-4 transition ${
              contacto === "59176801628"
                ? "border-cyan-400 bg-cyan-500/20"
                : "border-white/10 bg-white/5 hover:border-cyan-400"
            }`}
          >
            <div className="text-4xl mb-2">👨‍🔧</div>
            <h5 className="font-bold">Ing. Julio C. Rojas</h5>
            <p className="text-sm text-gray-400">
              Soporte Técnico
            </p>
          </button>

        </div>
      </div>

      <button
        type="button"
        onClick={() => {

          if (!nombre || !telefono || !descripcion) {
            alert("Complete los campos obligatorios.");
            return;
          }

          const mensaje = `Hola, SivTech.

Solicito una cotización.

Servicio:
${servicio}

Nombre:
${nombre}

WhatsApp:
${telefono}

${empresa ? `Empresa:
${empresa}

` : ""}Descripción:
${descripcion}`;

          window.open(
            `https://wa.me/${contacto}?text=${encodeURIComponent(mensaje)}`,
            "_blank"
          );

        }}
        className="mt-6 w-full bg-green-500 hover:bg-green-600 transition rounded-xl py-4 text-lg font-bold"
      >
        📲 Enviar por WhatsApp
      </button>

    </div>

  </div>
)}

        </div>
      </div>
    </div>
  );
}