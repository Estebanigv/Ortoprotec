import { motion } from 'motion/react';
import { Sparkles, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import CtaBanner from '../components/CtaBanner';

const tipos = [
  {
    title: 'Caña Alta',
    img: '/fotos/calzado/cana-alta.webp',
    desc: 'Proporciona soporte adicional en el tobillo y la parte media del pie. Indicado para pacientes con ortesis de tobillo-pie (AFO), inestabilidades articulares o que requieren mayor contención y estabilidad.',
    beneficios: ['Mayor soporte del tobillo', 'Compatible con AFO', 'Ideal para terrenos irregulares'],
  },
  {
    title: 'Caña Baja',
    img: '/fotos/calzado/cana-baja.webp',
    desc: 'Diseño funcional para uso cotidiano. Adaptado para plantillas personalizadas y necesidades ortopédicas del pie sin requerimiento de soporte de tobillo elevado.',
    beneficios: ['Uso cotidiano cómodo', 'Compatible con plantillas', 'Amplia horma para mayor volumen'],
  },
  {
    title: 'Calzado Diabético',
    img: '/fotos/calzado/diabetico.webp',
    desc: 'Especialmente diseñado para proteger el pie del paciente diabético. A diferencia del calzado normal, posee materiales que no generan fricciones ni presiones, previniendo úlceras y lesiones.',
    beneficios: ['Sin costuras internas irritantes', 'Puntera extra profunda', 'Material suave y transpirable', 'Prevención de úlceras'],
    highlight: true,
  },
];

export default function Calzados() {
  return (
    <div className="flex flex-col bg-white">

      {/* ── HEADER ── */}
      <section className="bg-orto-slate text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/productos" className="inline-flex items-center gap-2 text-gray-300 hover:text-orto-cyan mb-8 text-sm transition-colors">
            <ChevronLeft size={16} /> Volver a Productos y Servicios
          </Link>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
            Calzado <span className="text-orto-cyan">Ortopédico</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-gray-300 max-w-3xl font-light leading-relaxed">
            Complemento clínico esencial para plantillas y ortesis. Fabricado con materiales especiales para cada necesidad del pie.
          </motion.p>
        </div>
      </section>

      {/* ── INTRODUCCIÓN ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orto-light rounded-3xl p-10 md:p-16 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex items-center justify-center gap-3 mb-4 md:mb-0 md:shrink-0">
              <Sparkles className="text-orto-blue" size={40} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-orto-slate mb-3 tracking-tight">El calzado correcto es parte del tratamiento</h2>
              <p className="text-gray-600 font-light leading-relaxed text-lg">
                El calzado ortopédico no es solo un complemento estético. Es una pieza clínica que debe ajustarse perfectamente al tratamiento del paciente, ya sea para acomodar una ortesis, proteger el pie diabético o complementar plantillas personalizadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIPOS ── */}
      <section className="py-12 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {tipos.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? '' : ''}`}
              >
                <div className={`h-80 rounded-3xl overflow-hidden shadow-sm ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                  {item.highlight && (
                    <span className="inline-block bg-orto-cyan/10 text-orto-cyan text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                      Especializado
                    </span>
                  )}
                  <h3 className="text-3xl font-semibold text-orto-slate mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">{item.desc}</p>
                  <ul className="space-y-2">
                    {item.beneficios.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-3 text-gray-600 font-light text-sm">
                        <div className="w-5 h-5 rounded-full bg-orto-cyan/15 flex items-center justify-center shrink-0">
                          <div className="w-2 h-2 rounded-full bg-orto-cyan" />
                        </div>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="¿Necesitas calzado ortopédico?"
        subtitle="Te orientamos para elegir el calzado más adecuado según tu tratamiento y necesidades clínicas."
        primaryLabel="Consultar"
      />
    </div>
  );
}
