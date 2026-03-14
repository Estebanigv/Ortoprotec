import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Activity, Bone, Footprints, Shirt } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Prótesis',
    desc: 'Miembro superior e inferior, personalizadas según nivel de actividad y objetivos funcionales.',
    path: '/productos/protesis',
    img: '/fotos/fichas productos/Prótesis.webp',
    icon: Activity,
    accent: 'from-[#003F7D] to-[#0079C1]',
  },
  {
    title: 'Ortesis',
    desc: 'Dispositivos a medida para estabilizar, corregir o guiar el movimiento del cuerpo.',
    path: '/productos/ortesis',
    img: '/fotos/fichas productos/Ortesis.webp',
    icon: Bone,
    accent: 'from-[#0B1B2A] to-[#2E3A47]',
  },
  {
    title: 'Plantillas Ortopédicas',
    desc: 'Análisis digital de la pisada y fabricación personalizada para cada necesidad.',
    path: '/productos/plantillas',
    img: '/fotos/fichas productos/Plantillas Ortopédicas.webp',
    icon: Footprints,
    accent: 'from-[#006B9E] to-[#00AEEF]',
  },
  {
    title: 'Calzado Ortopédico',
    desc: 'Complemento clínico para plantillas y ortesis, con línea especializada para pie diabético.',
    path: '/productos/calzados',
    img: '/fotos/fichas productos/Calzado Ortopédico.webp',
    icon: Shirt,
    accent: 'from-[#2E3A47] to-[#003F7D]',
  },
];

const steps = [
  { step: '1', title: 'Evaluación clínica y funcional', desc: 'Muñón, movilidad, fuerza, equilibrio y objetivos del paciente.' },
  { step: '2', title: 'Planificación y propuesta técnica', desc: 'Tipo de dispositivo, componentes, sistema de suspensión.' },
  { step: '3', title: 'Fabricación y adaptación', desc: 'Ajustes progresivos orientados a confort y funcionalidad.' },
  { step: '4', title: 'Seguimiento y controles', desc: 'Evaluaciones posteriores, educación y ajustes según evolución.' },
];

export default function Products() {
  return (
    <div className="flex flex-col bg-white">

      {/* ── HEADER ── */}
      <section className="bg-orto-slate text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight"
          >
            Productos y <span className="text-orto-cyan">Servicios Clínicos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Aquí encontrarás todos los dispositivos y servicios clínicos disponibles en ORTOPROTEC.
          </motion.p>
        </div>
      </section>

      {/* ── ACCESOS RÁPIDOS ── */}
      <section className="py-6 bg-orto-light border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Link
                key={cat.path}
                to={cat.path}
                className="px-6 py-2.5 rounded-full border border-orto-slate text-orto-slate text-sm font-semibold hover:bg-orto-slate hover:text-white transition-all"
              >
                {cat.title}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="px-6 py-2.5 rounded-full bg-orto-cyan text-white text-sm font-semibold hover:bg-[#0096CC] transition-all"
            >
              Evaluación y Adaptación
            </Link>
          </div>
        </div>
      </section>

      {/* ── CATEGORÍAS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.path}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link to={cat.path} className="group relative block rounded-2xl overflow-hidden aspect-[16/10] hover:shadow-2xl transition-shadow duration-300">

                  {/* Imagen full-bleed */}
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />

                  {/* Gradiente inferior permanente para legibilidad del texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Badge icono — esquina superior izquierda */}
                  <div className={`absolute top-4 left-4 w-9 h-9 rounded-xl bg-gradient-to-br ${cat.accent} flex items-center justify-center shadow-lg`}>
                    <cat.icon size={15} className="text-white" />
                  </div>

                  {/* Texto en la parte inferior */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h2 className="text-lg font-semibold text-white mb-1 group-hover:text-orto-cyan transition-colors duration-300">{cat.title}</h2>
                        <p className="text-white/65 text-sm font-light leading-snug">{cat.desc}</p>
                      </div>
                      <span className="shrink-0 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center gap-1.5 bg-orto-cyan text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg whitespace-nowrap">
                        Ver más <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO CLÍNICO ── */}
      <section className="py-24 bg-orto-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="text-orto-blue" size={15} />
              <span className="text-xs font-semibold text-orto-blue uppercase tracking-widest">Evaluación y Adaptación</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-orto-slate mb-6 tracking-tight leading-tight">
              Nuestro proceso clínico
            </h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              Un enfoque estructurado y personalizado para garantizar el mejor resultado para cada paciente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
            <div className="hidden md:block absolute top-12 left-[10%] w-[80%] h-[1px] bg-gray-300 z-0"></div>
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-white text-orto-cyan rounded-full flex items-center justify-center text-3xl font-semibold mb-8 shadow-sm border border-gray-100">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-orto-slate mb-3">{item.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-white hover:bg-orto-light text-orto-cyan px-10 py-4 rounded-full font-bold transition-all shadow-lg text-lg"
            >
              Agenda una evaluación clínica <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
