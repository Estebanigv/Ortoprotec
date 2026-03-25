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
                  Collar cervical de diseño avanzado para inmovilizar la columna cervical. Estructura ligera, anatómica y completamente ajustable con sistema telescópico multitalla. Compuesto por dos piezas (anterior y posterior) con ventilación lateral, acolchado hipoalergénico lavable, abertura traqueal frontal y material radiotransparente. Indicado para traumatismo cervical leve a moderado, esguince cervical (latigazo), inmovilización postoperatoria, hernia cervical o compresión radicular y control de movimientos en lesiones óseas o ligamentosas.
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
                  Proporciona inmovilización externa en flexión, extensión, rotación y flexión lateral de todos los niveles cervicales (C1-T1). Región occipital/craneal encapsulada para máximo control. Componentes de polietileno de diseño anatómico con montantes anteriores y posteriores de aluminio preformados. Ajustes de altura A/P, gran abertura de tráquea, almohadillas lavables y transpirables. Disponible en tamaño pediátrico o adulto. Indicada para inmovilización espinal C1-T1, manejo cervical y limitación de flexión, extensión y rotación.
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
                desc: 'Ortesis cervicotorácica lumbosacra disponible a medida. Apertura bivalva anterior sobre posterior o posterior sobre anterior. Opciones de material: LDPE, MPE, HDPE, copolímero y polipropileno con forro hipoalergénico. Accesorios disponibles: kit de cierre, almohadilla pectoral, vejiga lumbar neumática, correas de hombro, almohadilla esternal y accesorio cervical Minerva. Indicada para inmovilización espinal C1-T1 y limitación de flexión, extensión y rotación.',
                imgs: ['/fotos/ortesis-columna/ctlso-1.webp', '/fotos/ortesis-columna/ctlso-2.webp'],
              },
              {
                title: 'Corsé Bivalvo',
                desc: 'Ortesis rígida en dos mitades (anterior y posterior) para inmovilizar y estabilizar la columna toracolumbar. Termoformada en polietileno o termoplástico de alta densidad con cierres de correas o velcros, acolchado interior y ventilación estratégica. Indicada para fracturas vertebrales dorsales o lumbares, postoperatorios de cirugía espinal, compresiones por osteoporosis, escoliosis progresiva y estabilización en lesiones neurológicas o traumáticas.',
                imgs: ['/fotos/ortesis-columna/bivalvo-1.webp', '/fotos/ortesis-columna/bivalvo-2.webp'],
              },
              {
                title: 'Corsé Milwaukee',
                desc: 'Ortesis toraco-lumbo-sacra de alto control para escoliosis, hipercifosis y deformidades estructurales en crecimiento. Base pélvica rígida de polietileno, barras metálicas verticales con anillo cervical, apoyos torácicos y lumbares ajustables. Fabricación personalizada. Indicada para escoliosis idiopática en adolescentes, hipercifosis dorsal y deformidades estructurales torácicas y lumbares. Uso de 18 a 23 horas diarias con prescripción y seguimiento médico.',
                imgs: ['/fotos/ortesis-columna/milwaukee.webp'],
              },
              {
                title: 'TLSO Híbrido',
                desc: 'Combina las ventajas de corsés rígidos y semirrígidos, ofreciendo control postural eficiente sin sacrificar completamente la movilidad. Indicado para fracturas vertebrales estables, dolor lumbar o torácico crónico, deformidades leves a moderadas y rehabilitación postquirúrgica.',
                imgs: ['/fotos/ortesis-columna/tlso-hibrido.webp'],
              },
              {
                title: 'Corsé Jewett',
                desc: 'Ortesis rígida toracolumbar diseñada para limitar la flexión de la columna, especialmente en la zona dorsolumbar, manteniendo la columna en extensión. Funciona mediante tres puntos de apoyo (esternal, suprapúbico y lumbar) con estructura ligera de aluminio, almohadillas ajustables y diseño abierto. Indicada para fracturas por compresión, colapsos vertebrales por osteoporosis, lesiones postraumáticas, postoperatorios y cifosis dolorosa.',
                imgs: ['/fotos/ortesis-columna/jewett-1.webp', '/fotos/ortesis-columna/jewett-2.webp'],
              },
              {
                title: 'TLSO Rígido/Semirrígido',
                desc: 'Ortesis rígida o semirrígida para inmovilizar y estabilizar la columna en segmentos torácico, lumbar y sacro. Diseño en tres secciones con material rígido termoplástico o polietileno, sistema de cierres ajustables y forro acolchado desmontable. Indicada para fracturas vertebrales toracolumbares, cirugías de columna, escoliosis, espondilolistesis, compresiones por osteoporosis y lesiones neurológicas.',
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
                desc: 'Estabiliza tobillo y pie limitando movimientos no deseados, indicada cuando se requiere mayor control y soporte. Para debilidad muscular severa, caída del pie (foot drop), inestabilidad marcada, ACV, lesión medular, parálisis cerebral, espasticidad y deformidades en equino. Aporta estabilidad y seguridad durante la marcha, alineación correcta, prevención de caídas y optimización de la funcionalidad.',
              },
              {
                title: 'AFO Flexible',
                img: '/fotos/ortesis-inferior/afo-flexible.webp',
                desc: 'Asiste el movimiento del tobillo y pie permitiendo mayor rango de movilidad. Controla el pie durante el balanceo y mejora el patrón de marcha. Indicada para debilidad leve a moderada de dorsiflexores, foot drop con capacidad residual, ACV en fase de recuperación, neuropatías periféricas y esclerosis múltiple. Facilita el avance del pie, reduce tropiezos y ofrece un patrón de marcha más natural con mayor comodidad.',
              },
              {
                title: 'AFO Articulada',
                img: '/fotos/ortesis-inferior/afo-articulada.webp',
                desc: 'Controla y guía el movimiento del tobillo mediante sistema de articulación, mejorando el patrón de marcha con estabilidad sin restringir completamente. Indicada para debilidad muscular moderada, foot drop con control activo parcial, ACV en recuperación, lesión medular, esclerosis múltiple y espasticidad leve a moderada. Facilita la dorsiflexión, mejora la marcha de forma natural y proporciona estabilidad en fase de apoyo con mayor movilidad que la rígida.',
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
                desc: 'Protege, estabiliza y facilita la recuperación de lesiones del pie, tobillo y pierna. Equipada con cámaras de aire inflables para ajuste personalizado. Indicada para fracturas de tibia, peroné, tobillo o pie, esguinces graves, postoperatorio de cirugías ortopédicas y patologías que requieren inmovilización prolongada. Diseño ergonómico con sistema de cierre seguro, ligera y resistente.',
              },
              {
                title: 'Bota Corta con Aire',
                img: '/fotos/ortesis-inferior/bota-corta.webp',
                desc: 'Protege y estabiliza pie y tobillo con un diseño compacto que abarca desde el pie hasta el tobillo. Cámaras de aire ajustables, acolchado ergonómico, cierres seguros, ligera y resistente. Indicada para fracturas leves o moderadas de pie y tobillo, esguinces graves, postoperatorio y control de edema.',
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
