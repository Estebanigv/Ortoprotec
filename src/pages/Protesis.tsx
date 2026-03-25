import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import CtaBanner from '../components/CtaBanner';

const piesStandard = [
  { name: 'Pie SACH', img: '/fotos/pies-protesicos/sach.webp', desc: 'Talón acolchado, sin articulación. Bajo costo y mantenimiento. Ideal para pacientes de bajo nivel de actividad o adultos mayores. Alta estabilidad.' },
  { name: 'Pie Articulado', img: '/fotos/pies-protesicos/articulado.webp', desc: 'Mayor adaptación al terreno, disminuyendo riesgo de caídas. Marcha más natural, mejor alineación y transferencia de peso. Confort prolongado.' },
  { name: 'Pie Dinámico', img: '/fotos/pies-protesicos/dinamico.webp', desc: 'Fibra de carbono y materiales compuestos. Almacenan y liberan energía con cada paso, reduciendo gasto energético. Ideales para usuarios activos y deportistas.' },
  { name: 'Pie Carbono Perfil Bajo', img: '/fotos/pies-protesicos/carbono-bajo.webp', desc: 'Pie K3, muy confiable, cómodo y dinámico. Altos niveles de seguridad. Progresión de marcha natural, comodidad y menos fatiga al caminar.' },
  { name: 'Pie Trias', img: '/fotos/pies-protesicos/trias.webp', desc: 'Desarrollado para usuarios con actividad moderada. Peso reducido y excelentes propiedades de suspensión. Funcionalidad armoniosa, fiable y segura.' },
  { name: 'Pie Axtion', img: '/fotos/pies-protesicos/axtion.webp', desc: '1E56 Axtion: compacto y ligero para usuarios activos. Baja altura estructural. Combinación de carbono y poliuretano absorbe impacto. Buen retorno de energía.' },
];

export default function Protesis() {
  return (
    <div className="flex flex-col bg-white">

      {/* ── HEADER ── */}
      <section className="bg-orto-slate text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/productos" className="inline-flex items-center gap-2 text-gray-300 hover:text-orto-cyan mb-8 text-sm transition-colors">
            <ChevronLeft size={16} /> Volver a Productos y Servicios
          </Link>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
            <span className="text-orto-cyan">Prótesis</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-gray-300 max-w-3xl font-light leading-relaxed">
            Prótesis para miembro superior e inferior, personalizadas según nivel de actividad y objetivos funcionales del paciente.
          </motion.p>
        </div>
      </section>

      {/* ── MIEMBRO SUPERIOR ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Sparkles className="text-orto-blue" size={15} />
            <h2 className="text-3xl md:text-4xl font-semibold text-orto-slate tracking-tight">Miembro Superior</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Transradial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-orto-light rounded-3xl p-8"
            >
              <h3 className="text-2xl font-semibold text-orto-slate mb-3">Prótesis Transradial <span className="text-sm font-normal text-gray-500">(bajo el codo)</span></h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                Diseñada para personas con amputación a nivel del antebrazo. Su objetivo es restaurar la funcionalidad de la extremidad superior, permitiendo realizar tareas como agarrar, sujetar o manipular objetos. Recuperación parcial o total de la función de prensión con mejora estética, psicológica y funcional.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm font-light">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orto-cyan shrink-0" />
                  Encaje (socket) fabricado a medida, rígido o flexible, con sistema de suspensión arnés
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orto-cyan shrink-0" />
                  Adaptadores y estructura para alineación y movilidad
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orto-cyan shrink-0" />
                  Unidad terminal: mano estética pasiva o mecánica funcional
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-orto-cyan shrink-0" />
                  Opcionales: guantes estéticos de silicona, terminales intercambiables (ganchos, manos)
                </li>
              </ul>
            </motion.div>

            {/* Transhumeral */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-orto-light rounded-3xl overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src="/fotos/protesis-superior/transhumeral.webp"
                  alt="Prótesis Transhumeral"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-orto-slate mb-3">Prótesis Transhumeral <span className="text-sm font-normal text-gray-500">(sobre el codo)</span></h3>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  Indicada para personas con amputación del brazo por encima del codo. Es una de las más complejas en la extremidad superior, ya que busca reemplazar tanto la función del codo como de la mano. Permite movimientos funcionales y mejora la independencia en actividades diarias.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm font-light">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orto-cyan shrink-0" />
                    Encaje personalizado con suspensión por pin, vacío o arnés
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orto-cyan shrink-0" />
                    Codo protésico: manual, de bloqueo o controlado por cables
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orto-cyan shrink-0" />
                    Unidad terminal estética o funcional mecánica
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orto-cyan shrink-0" />
                    Opcionales: guante cosmético de silicona, terminales intercambiables
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MIEMBRO INFERIOR — TRANSTIBIAL ── */}
      <section className="py-24 bg-orto-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-orto-blue" size={15} />
            <span className="text-xs font-semibold text-orto-blue uppercase tracking-widest">Miembro Inferior</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-orto-slate mb-4 tracking-tight">
            Prótesis Transtibial <span className="text-gray-400 font-normal text-2xl">(bajo rodilla)</span>
          </h2>
          <p className="text-gray-600 font-light leading-relaxed mb-12 max-w-3xl">
            Dispositivo para reemplazar la parte inferior de la pierna en pacientes con amputación bajo la rodilla. Mejora la autonomía y movilidad, reduce el gasto energético en la marcha y permite una rehabilitación más efectiva y rápida.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                level: 'Actividad Baja',
                color: 'border-gray-200',
                desc: 'Destinadas a pacientes cuya rutina diaria no implica esfuerzos significativos. Priorizan estabilidad, confort y seguridad, con facilidad de uso y soporte.',
              },
              {
                level: 'Actividad Media',
                color: 'border-orto-cyan',
                desc: 'Para usuarios que requieren movilidad más dinámica, caminan distancias moderadas y se desplazan en distintos tipos de superficies. Encajes con válvula o liners, pies protésicos de respuesta media.',
              },
              {
                level: 'Actividad Alta',
                color: 'border-orto-blue',
                desc: 'Para usuarios con estilo de vida activo y exigente. Soportan mayores niveles de impacto, velocidad y fuerza. Liners de alto desempeño, sistemas de suspensión avanzada y pies de alta energía.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-white rounded-3xl p-8 border-t-4 ${item.color} shadow-sm`}
              >
                <h3 className="text-xl font-semibold text-orto-slate mb-3">{item.level}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MIEMBRO INFERIOR — TRANSFEMORAL ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-orto-slate mb-4 tracking-tight">
            Prótesis Transfemoral <span className="text-gray-400 font-normal text-2xl">(sobre rodilla)</span>
          </h2>
          <p className="text-gray-600 font-light leading-relaxed mb-12 max-w-3xl">
            Para personas con amputación por encima de la rodilla. Busca restablecer la movilidad y funcionalidad de la extremidad inferior.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                level: 'Actividad Baja',
                color: 'bg-orto-light',
                desc: 'Para actividades cotidianas básicas. Rodillas de seguridad, monocéntricas o policéntricas básicas, pies estándar. Diseño estable para desplazamientos seguros.',
              },
              {
                level: 'Actividad Media',
                color: 'bg-orto-light',
                desc: 'Mayor movilidad para una vida cotidiana más dinámica. Encajes anatómicos personalizados, rodillas mecánicas avanzadas, hidráulicas o neumáticas.',
              },
              {
                level: 'Actividad Alta',
                color: 'bg-orto-light',
                desc: 'Estilo de vida altamente activo. Materiales de avanzada tecnología y fibras de carbono. Rodillas hidráulicas, microprocesadas o policéntricas de alta absorción.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`${item.color} rounded-3xl p-8`}
              >
                <h3 className="text-xl font-semibold text-orto-slate mb-3">{item.level}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PIES PROTÉSICOS ── */}
      <section className="py-24 bg-orto-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="text-orto-blue" size={15} />
              <span className="text-xs font-semibold text-orto-blue uppercase tracking-widest">Componentes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-orto-slate tracking-tight">Pies Protésicos</h2>
            <p className="text-gray-500 font-light mt-3">Seleccionamos el componente según tu nivel de actividad y objetivos funcionales.</p>
          </div>

          {/* FEATURED — Pie Carbono Perfil Alto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 bg-orto-slate rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          >
            {/* Imagen */}
            <div className="relative min-h-[320px] overflow-hidden">
              <div className="absolute top-5 left-5 z-10">
                <span className="bg-orto-cyan text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Alta Actividad
                </span>
              </div>
              <img
                src="/fotos/pies-protesicos/carbono-alto.webp"
                alt="Pie Carbono Perfil Alto"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            {/* Contenido */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <span className="text-orto-cyan text-xs font-semibold uppercase tracking-widest mb-3">Destaque</span>
              <h3 className="text-3xl font-semibold text-white mb-4 leading-tight">Pie Carbono<br />Perfil Alto</h3>
              <p className="text-gray-300 font-light leading-relaxed mb-6">
                Pie K3, muy confiable, cómodo y dinámico. Progresión de marcha natural con excelente retorno de energía. Apto desde niveles de actividad bajos hasta altos, adaptándose a las necesidades de cada paciente.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  'Progresión de marcha natural y confortable',
                  'Desde niveles de actividad bajos hasta altos',
                  'Muy confiable, cómodo y dinámico',
                  'Buen retorno de energía en antepié',
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm font-light">
                    <div className="w-4 h-4 rounded-full bg-orto-cyan/20 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-orto-cyan" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 bg-orto-cyan hover:bg-[#0096CC] text-white px-7 py-3 rounded-full font-semibold transition-all self-start text-sm"
              >
                Consultar disponibilidad <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* GRID — Resto de pies */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {piesStandard.map((pie, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                variants={{
                  rest: { scale: 1, y: 0, boxShadow: '0 1px 4px rgba(0,0,0,0.06)', zIndex: 1 },
                  hover: { scale: 1.15, y: -12, boxShadow: '0 24px 48px rgba(0,174,239,0.2)', zIndex: 30 },
                }}
                whileHover="hover"
                animate="rest"
                className="relative bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer"
                style={{ transformOrigin: 'bottom center' }}
              >
                {/* Imagen */}
                <div className="h-36 bg-gray-50 flex items-center justify-center p-3">
                  <img
                    src={pie.img}
                    alt={pie.name}
                    className="h-full w-auto object-contain"
                  />
                </div>

                {/* Nombre */}
                <div className="px-3 pt-2 pb-1">
                  <h3 className="text-xs font-semibold text-orto-slate text-center leading-tight">{pie.name}</h3>
                </div>

                {/* CTA oculto — aparece al hover del padre por propagación de variantes */}
                <motion.div
                  variants={{
                    rest: { opacity: 0, height: 0 },
                    hover: { opacity: 1, height: 'auto' },
                  }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-3 pb-3 flex flex-col gap-2 pt-1">
                    <p className="text-[10px] text-gray-400 font-light text-center leading-snug">{pie.desc}</p>
                    <Link
                      to="/contacto"
                      onClick={(e) => e.stopPropagation()}
                      className="block text-center bg-orto-cyan hover:bg-[#0096CC] text-white text-[10px] font-bold py-1.5 rounded-full transition-all"
                    >
                      Consultar →
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="¿Necesitas una evaluación protésica?"
        subtitle="Agenda una evaluación clínica y recibe orientación personalizada sobre la mejor solución para tu caso."
      />
    </div>
  );
}
