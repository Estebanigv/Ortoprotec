import { motion } from 'motion/react';
import { Sparkles, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import CtaBanner from '../components/CtaBanner';

const tipos = [
  {
    title: 'Adulto General',
    img: '/fotos/plantillas/estandar.webp',
    desc: 'Indicadas cuando se requiere mejorar la alineación del pie, redistribuir cargas y optimizar la función durante la marcha y la bipedestación. Útiles en casos de dolor plantar, fascitis plantar, alteraciones del arco (pie plano, pie cavo), metatarsalgia, desalineaciones del retropié o antepié, y dolor en tobillo, rodilla, cadera o zona lumbar asociado a mala pisada. Ayudan a redistribuir cargas, disminuir dolor, mejorar alineación, optimizar el patrón de marcha, reducir fatiga y prevenir lesiones por sobrecarga.',
  },
  {
    title: 'Con Relleno',
    img: '/fotos/plantillas/con-relleno.webp',
    desc: 'Indicadas para compensar irregularidades, pérdidas de volumen o deformidades del pie. Útiles en deformidades como dedos en garra, hallux valgus, prominencias óseas, pérdida de volumen plantar por cirugías o atrofia, zonas de hiperpresión, metatarsalgia, cicatrices dolorosas, amputaciones parciales del pie y pie diabético. Mejoran la distribución de cargas, disminuyen el dolor, compensan deformidades y reducen puntos de presión y riesgo de lesiones cutáneas.',
  },
  {
    title: 'Diabéticas',
    img: '/fotos/plantillas/diabeticos.webp',
    desc: 'Parte del manejo preventivo y terapéutico del pie diabético, diseñadas para proteger la piel y reducir el riesgo de lesiones. Indicadas en diabetes con o sin neuropatía periférica, disminución de sensibilidad plantar, zonas de hiperpresión, antecedentes de úlceras plantares, deformidades del pie y post cicatrización de úlceras. Redistribuyen cargas plantares, reducen puntos de presión, disminuyen el riesgo de úlceras y lesiones cutáneas, y contribuyen a la prevención de complicaciones del pie diabético.',
  },
  {
    title: 'Deportivas',
    img: '/fotos/plantillas/deportivas.webp',
    desc: 'Diseñadas para personas que realizan actividad física o deportiva. Indicadas en dolor plantar asociado al deporte, fascitis plantar, tendinopatías (Aquiles, rotuliana, tibial posterior), metatarsalgia, alteraciones del arco plantar, desalineaciones biomecánicas y sobrecargas musculares. Optimizan la distribución de cargas durante el ejercicio, mejoran la alineación biomecánica, reducen impacto, disminuyen el riesgo de lesiones, favorecen la eficiencia del gesto deportivo y reducen la fatiga muscular.',
  },
  {
    title: 'Infantiles',
    img: '/fotos/plantillas/ninos.webp',
    desc: 'Diseñadas para guiar el desarrollo del pie, mejorar la alineación y favorecer un patrón de marcha adecuado durante el crecimiento. Indicadas en pie plano infantil (sintomático o persistente fuera de la edad esperada), desalineaciones del retropié (valgo o varo), marcha inestable, dolor en pies, tobillos, rodillas o piernas, fatiga excesiva, diferencias de longitud de extremidades y alteraciones posturales. Ayudan a optimizar el patrón de marcha, disminuir molestias, prevenir alteraciones futuras y favorecer una actividad física segura.',
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
            Indicadas cuando se requiere mejorar la alineación del pie, redistribuir cargas y optimizar la función durante la marcha y la bipedestación. Fabricadas a medida con análisis digital de pisada.
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
                Estudio digital y no invasivo que analiza la pisada, distribución de cargas y patrón de apoyo plantar en estática y dinámica. Herramienta fundamental para evaluaciones precisas y el diseño de soluciones ortopédicas personalizadas.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Identifica zonas de sobrecarga y evalúa la alineación del pie',
                  'Analiza el patrón de marcha y detecta asimetrías o alteraciones biomecánicas',
                  'Apoya el diseño y ajuste preciso de plantillas personalizadas',
                  'Seguimiento comparativo y objetivo de la evolución del paciente en el tiempo',
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
