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

              <h3 className="text-2xl font-bold text-cyan-400">
                {servicio}
              </h3>

              <p className="text-gray-300 mt-2">
                Excelente elección. Completa el formulario que aparecerá aquí
                en el siguiente paso.
              </p>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}