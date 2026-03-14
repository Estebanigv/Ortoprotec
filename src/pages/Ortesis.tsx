import { motion } from 'motion/react';
import { Sparkles, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import CtaBanner from '../components/CtaBanner';

export default function Ortesis() {
  return (
    <div className="flex flex-col bg-white">

      {/* ── HEADER ── */}
      <section className="bg-orto-slate text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/productos" className="inline-flex items-center gap-2 text-gray-300 hover:text-orto-cyan mb-8 text-sm transition-colors">
            <ChevronLeft size={16} /> Volver a Productos y Servicios
          </Link>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
            <span className="text-orto-cyan">Ortesis</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-gray-300 max-w-3xl font-light leading-relaxed">
            Dispositivos a medida para estabilizar, corregir o guiar el movimiento. Fabricadas con precisión para cada paciente.
          </motion.p>
        </div>
      </section>

      {/* ── COLUMNA CERVICAL ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Sparkles className="text-orto-blue" size={15} />
            <h2 className="text-3xl md:text-4xl font-semibold text-orto-slate tracking-tight">Columna Cervical</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-orto-light rounded-3xl overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img src="/fotos/ortesis-cuello/proglide-1.webp" alt="Collar Proglide" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-orto-slate mb-3">Collar Proglide</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Ortesis cervical con regulación de altura y apertura frontal. Indicada para inmovilización parcial del segmento cervical tras lesiones, cirugías o procesos degenerativos. Ligera, cómoda y de fácil colocación.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-orto-light rounded-3xl overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img src="/fotos/ortesis-cuello/proglide-2.webp" alt="CTO Cervical" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-orto-slate mb-3">CTO <span className="text-sm font-normal text-gray-500">(Cervicotorácica)</span></h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Ortesis cervicotorácica para mayor control e inmovilización del segmento cervical bajo. Indicada en fracturas, inestabilidades y post-cirugía de columna cervical.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COLUMNA TORÁCIA Y LUMBAR ── */}
      <section className="py-24 bg-orto-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Sparkles className="text-orto-blue" size={15} />
            <h2 className="text-3xl md:text-4xl font-semibold text-orto-slate tracking-tight">Columna Torácica y Lumbar</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'CTLSO',
                desc: 'Ortesis cervicotorácica lumbosacra. Múltiples opciones de fabricación, materiales y accesorios para el control completo de la columna.',
                imgs: ['/fotos/ortesis-columna/ctlso-1.webp', '/fotos/ortesis-columna/ctlso-2.webp'],
              },
              {
                title: 'Corsé Bivalvo',
                desc: 'Indicado para fracturas vertebrales y post-cirugía. Fabricado en dos mitades que facilitan la colocación y el retiro.',
                imgs: ['/fotos/ortesis-columna/bivalvo-1.webp', '/fotos/ortesis-columna/bivalvo-2.webp'],
              },
              {
                title: 'Corsé Milwaukee',
                desc: 'Indicado para escoliosis en pacientes en crecimiento. Requiere seguimiento clínico regular para ajuste según evolución.',
                imgs: ['/fotos/ortesis-columna/milwaukee.webp'],
              },
              {
                title: 'TLSO Híbrido',
                desc: 'Combinación de componentes rígidos y flexibles. Indicaciones generales en patologías de columna torácica y lumbar.',
                imgs: ['/fotos/ortesis-columna/tlso-hibrido.webp'],
              },
              {
                title: 'Corsé Jewett',
                desc: 'Ortesis de hiperextensión indicada para fracturas vertebrales por compresión. Beneficios en estabilidad y corrección postural.',
                imgs: ['/fotos/ortesis-columna/jewett-1.webp', '/fotos/ortesis-columna/jewett-2.webp'],
              },
              {
                title: 'TLSO Rígido/Semirrígido',
                desc: 'Amplia gama de indicaciones en patologías torácicas y lumbares. Disponible en versiones rígidas o semirígidas según necesidad clínica.',
                imgs: ['/fotos/ortesis-columna/tlso.webp'],
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-50"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={item.imgs[0]}
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

      {/* ── AFO ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Sparkles className="text-orto-blue" size={15} />
            <h2 className="text-3xl md:text-4xl font-semibold text-orto-slate tracking-tight">Ortesis Tobillo-Pie (AFO)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AFO Rígida',
                img: '/fotos/ortesis-inferior/afo-rigida.webp',
                desc: 'Control total del movimiento del tobillo. Indicada en drop foot, espasticidad severa o inestabilidades articulares importantes.',
              },
              {
                title: 'AFO Flexible',
                img: '/fotos/ortesis-inferior/afo-flexible.webp',
                desc: 'Diseño liviano que permite cierto rango de movimiento. Ideal para debilidad muscular leve o moderada, con calzado normal.',
              },
              {
                title: 'AFO Articulada',
                img: '/fotos/ortesis-inferior/afo-articulada.webp',
                desc: 'Permite control selectivo del movimiento del tobillo. Combina soporte estructural con libertad funcional en la marcha.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-orto-light rounded-3xl overflow-hidden"
              >
                <div className="h-60 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-orto-slate mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTAS INMOVILIZADORAS ── */}
      <section className="py-24 bg-orto-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <Sparkles className="text-orto-blue" size={15} />
            <h2 className="text-3xl md:text-4xl font-semibold text-orto-slate tracking-tight">Botas Inmovilizadoras</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Bota Larga con Aire',
                img: '/fotos/ortesis-inferior/bota-larga.webp',
                desc: 'Indicada para fracturas del tercio distal de tibia y peroné, lesiones del tendón de Aquiles y procesos post-quirúrgicos del tobillo y pie.',
              },
              {
                title: 'Bota Corta con Aire',
                img: '/fotos/ortesis-inferior/bota-corta.webp',
                desc: 'Indicada para esguinces de tobillo, fracturas de metatarsianos, fascitis plantar y tratamiento conservador de patologías del pie.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row"
              >
                <div className="md:w-64 h-56 md:h-auto overflow-hidden shrink-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-orto-slate mb-3">{item.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="¿Necesitas una ortesis a medida?"
        subtitle="Evaluamos tu caso clínico y diseñamos la ortesis más adecuada para tu recuperación funcional."
      />
    </div>
  );
}
