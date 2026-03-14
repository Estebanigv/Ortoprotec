import { motion } from 'motion/react';
import { Sparkles, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import CtaBanner from '../components/CtaBanner';

const tipos = [
  {
    title: 'Adulto General',
    img: '/fotos/plantillas/estandar.webp',
    desc: 'Indicadas para corrección de desalineaciones del pie en adultos. Mejoran el apoyo, distribuyen la carga y alivian dolores de pie, rodilla y cadera.',
  },
  {
    title: 'Con Relleno',
    img: '/fotos/plantillas/con-relleno.webp',
    desc: 'Plantillas con acolchado adicional para mayor amortiguación. Indicadas en procesos dolorosos, callosidades y protección del pie en uso prolongado.',
  },
  {
    title: 'Diabéticas',
    img: '/fotos/plantillas/diabeticos.webp',
    desc: 'Diseñadas para proteger el pie diabético de presiones y fricciones. Reducen el riesgo de úlceras y lesiones en pacientes con neuropatía periférica.',
  },
  {
    title: 'Deportivas',
    img: '/fotos/plantillas/deportivas.webp',
    desc: 'Optimizan el rendimiento atlético y previenen lesiones. Mejoran la absorción de impactos y la alineación biomecánica durante la actividad física.',
  },
  {
    title: 'Infantiles',
    img: '/fotos/plantillas/ninos.webp',
    desc: 'Específicas para el pie en desarrollo. Corrigen pie plano, metatarso adducto y otras alteraciones tempranas del pie en niños.',
  },
];

export default function Plantillas() {
  return (
    <div className="flex flex-col bg-white">

      {/* ── HEADER ── */}
      <section className="bg-orto-slate text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/productos" className="inline-flex items-center gap-2 text-gray-300 hover:text-orto-cyan mb-8 text-sm transition-colors">
            <ChevronLeft size={16} /> Volver a Productos y Servicios
          </Link>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
            Plantillas <span className="text-orto-cyan">Ortopédicas</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-gray-300 max-w-3xl font-light leading-relaxed">
            Indicadas ante desalineación, sobrecarga o desequilibrio en el apoyo del pie. Fabricadas a medida con análisis digital de pisada.
          </motion.p>
        </div>
      </section>

      {/* ── FOOT SCAN ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[420px] rounded-3xl overflow-hidden"
            >
              <img src="/fotos/plantillas/foot-scan.webp" alt="Foot Scan — Análisis digital de pisada" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-orto-blue" size={15} />
                <span className="text-xs font-semibold text-orto-blue uppercase tracking-widest">Tecnología</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-orto-slate mb-6 tracking-tight leading-tight">
                Foot Scan — Análisis digital de la pisada
              </h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
                Utilizamos tecnología de escaneo podométrico para analizar con precisión la distribución de presiones y la biomecánica del pie durante la marcha.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Mapa de presiones plantares en tiempo real',
                  'Análisis de la marcha y el apoyo',
                  'Base científica para el diseño de la plantilla',
                  'Seguimiento objetivo de la evolución del paciente',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600 font-light">
                    <div className="w-5 h-5 rounded-full bg-orto-cyan/15 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-orto-cyan" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TIPOS ── */}
      <section className="py-24 bg-orto-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="text-orto-blue" size={15} />
              <span className="text-xs font-semibold text-orto-blue uppercase tracking-widest">Tipos de Plantillas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-orto-slate tracking-tight">
              Soluciones para cada necesidad
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tipos.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-50 hover:shadow-md transition-shadow"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-orto-slate mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Agenda tu análisis de pisada"
        subtitle="Con nuestro Foot Scan diseñamos la plantilla perfecta para tu pie. Agenda una evaluación y comienza tu tratamiento."
      />
    </div>
  );
}
