import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
export default function SivTechWebsite() {
 const [menuAbierto, setMenuAbierto] = useState(false);
  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative"
style={{ fontFamily: 'Yaro' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-500/10 blur-3xl"></div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-500/40">
              S
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-wide">SivTech</h1>
              <p className="text-xs text-gray-400">
                Seguridad e Innovación Tecnológica
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#inicio" className="hover:text-cyan-400 transition">
              Inicio
            </a>
            <a href="#servicios" className="hover:text-cyan-400 transition">
              Servicios
            </a>
            <a href="#productos" className="hover:text-cyan-400 transition">
              Productos
            </a>
            <a href="#contacto" className="hover:text-cyan-400 transition">
              Contacto
            </a>
          </nav>

          <button className="bg-blue-600 hover:bg-blue-500 transition px-5 py-2 rounded-full shadow-lg shadow-blue-500/30 text-sm">
            Cotizar
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="relative pt-40 pb-32 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left Content */}
        <div>
          <p className="text-cyan-400 mb-4 tracking-[0.3em] uppercase text-sm">
            Tecnología • Seguridad • Innovación
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            Protección y tecnología para tu mundo.
          </h2>
          

          <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl">
            En SivTech ofrecemos soluciones profesionales en cámaras de seguridad,
            redes, alarmas, soporte técnico y venta de equipos tecnológicos.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-2xl shadow-xl shadow-blue-600/30 font-semibold">
              Ver Servicios
            </button>

            <button className="border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition px-8 py-4 rounded-2xl backdrop-blur-md">
              Contactar
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-blue-700/20 rounded-full blur-3xl animate-pulse"></div>

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-8 shadow-2xl">
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-black/30 rounded-2xl p-6 border border-white/10">
                <h3 className="text-3xl font-bold text-cyan-400">24/7</h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Monitoreo y soporte técnico.
                </p>
              </div>

              <div className="bg-black/30 rounded-2xl p-6 border border-white/10">
                <h3 className="text-3xl font-bold text-cyan-400">100+</h3>
                <p className="text-gray-400 mt-2 text-sm">
                  Equipos y accesorios tecnológicos.
                </p>
              </div>

              <div className="bg-black/30 rounded-2xl p-6 border border-white/10 col-span-2">
                <h3 className="text-2xl font-bold mb-3">
                  Soluciones inteligentes para hogares y empresas.
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Cámaras de seguridad, alarmas, redes, computadoras,
                  celulares, accesorios y tecnología moderna adaptada a tus
                  necesidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Servicios
          </p>

          <h2 className="text-5xl font-bold mt-4">Lo que hacemos</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            'Cámaras de Seguridad',
            'Alarmas Inteligentes',
            'Redes y WiFi',
            'Soporte Técnico',
            'Venta de PCs',
            'Celulares y Accesorios',
            'Control de Acceso',
            'Electrodomésticos',
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:border-cyan-400/40 transition duration-300 backdrop-blur-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-5 text-cyan-400 text-2xl">
                ⚡
              </div>

              <h3 className="text-xl font-semibold mb-3">{service}</h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Soluciones tecnológicas profesionales con instalación y soporte.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tienda */}
      <section
        id="productos"
        className="px-6 py-24 bg-white/5 border-y border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
              Tienda Tecnológica
            </p>

            <h2 className="text-5xl font-bold mt-4">
              Productos Destacados
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Kit Cámaras IP', price: '$350' },
              { name: 'Laptop Gamer', price: '$980' },
              { name: 'Smartphone 5G', price: '$420' },
              { name: 'Router WiFi 6', price: '$120' },
            ].map((product, index) => (
              <div
                key={index}
                className="group bg-black/30 border border-white/10 rounded-[2rem] overflow-hidden hover:scale-[1.03] hover:border-cyan-400/40 transition duration-300"
              >
                <div className="h-56 bg-gradient-to-br from-blue-700/30 to-cyan-400/10"></div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {product.name}
                  </h3>

                  <p className="text-3xl font-black text-cyan-400 mb-5">
                    {product.price}
                  </p>

                  <button className="w-full bg-blue-600 hover:bg-blue-500 transition py-3 rounded-xl font-semibold shadow-lg shadow-blue-600/20">
                    Comprar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            Proyectos
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Instalaciones Profesionales
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="h-80 bg-gradient-to-br from-blue-700/40 to-cyan-400/10"></div>

              <div className="absolute bottom-0 p-8">
                <h3 className="text-2xl font-bold mb-2">
                  Proyecto {item}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contacto"
        className="px-6 py-28 max-w-5xl mx-auto text-center"
      >
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
          Contacto
        </p>

        <h2 className="text-5xl md:text-6xl font-black mt-6 leading-tight">
          Lleva tu seguridad y tecnología al siguiente nivel.
        </h2>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-6 text-center text-gray-500 text-sm">
        © 2026 SivTech — Seguridad e Innovación Tecnológica.
      </footer>
      {/* Botón flotante WhatsApp */}
<div className="fixed bottom-6 right-6 z-50">

  {menuAbierto && (
  <div className="absolute bottom-0 right-20 w-72 rounded-2xl
                  bg-white/10 backdrop-blur-xl
                  border border-white/20
                  shadow-2xl overflow-hidden">

      <a
  href="https://wa.me/59175174318"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 px-5 py-4 hover:bg-white/10 transition"
>
  <span className="text-2xl">🟢</span>
  <div>
    <p className="text-white font-semibold">Ing. Cristian Vargas</p>
    <p className="text-gray-300 text-sm">+591 75174318</p>
  </div>
</a>

<div className="border-t border-white/10"></div>

<a
  href="https://wa.me/59175166249"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 px-5 py-4 hover:bg-white/10 transition"
>
  <span className="text-2xl">🟢</span>
  <div>
    <p className="text-white font-semibold">Ing. Jose Jerez</p>
    <p className="text-gray-300 text-sm">+591 75166249</p>
  </div>
</a>

<div className="border-t border-white/10"></div>

<a
  href="https://wa.me/59176801628"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 px-5 py-4 hover:bg-white/10 transition"
>
  <span className="text-2xl">🟢</span>
  <div>
    <p className="text-white font-semibold">Ing. Julio C. Rojas</p>
    <p className="text-gray-300 text-sm">+591 76801628</p>
  </div>
</a>

    </div>
  )}

  <button
  onClick={() => setMenuAbierto(!menuAbierto)}
  className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600
             hover:scale-110 transition shadow-2xl
             flex items-center justify-center"
>
  <FaWhatsapp size={34} color="white" />
</button>

</div>
    </div>
  )
}
