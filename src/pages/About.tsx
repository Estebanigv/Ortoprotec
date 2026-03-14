import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Sparkles, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col bg-white">

      {/* ── HEADER ── */}
      <section className="bg-orto-slate text-white py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight"
          >
            Sobre <span className="text-orto-cyan">Nosotros</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Más de dos décadas acompañando a personas hacia una vida funcional e independiente con soluciones ortopédicas especializadas y de alta calidad.
          </motion.p>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-orto-blue" size={15} />
                <span className="text-xs font-semibold text-orto-blue uppercase tracking-widest">Nuestra Historia</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-orto-slate mb-8 tracking-tight leading-tight">
                Fundada en 2001 con vocación clínica y humana.
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-lg font-light">
                <p>
                  ORTOPROTEC fue fundada en 2001 por Don Juan Carlos González Moraga, con una misión clara: ofrecer soluciones ortopédicas y protésicas especializadas de alta calidad en Chile, con un enfoque profundamente humano y cercano.
                </p>
                <p>
                  Más de dos décadas de experiencia nos han permitido convertirnos en un centro de referencia nacional, atendiendo casos complejos con tecnología avanzada y un equipo clínico comprometido con cada paciente.
                </p>
                <p>
                  Fabricamos y adaptamos prótesis, ortesis, soluciones de columna, plantillas y calzado ortopédico, siempre priorizando la seguridad, el confort y la funcionalidad de quienes nos confían su recuperación.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <img
                src="/fotos/ortesis-columna/ctlso-1.webp"
                alt="Ortesis a medida"
                className="rounded-3xl w-full h-64 object-cover shadow-lg"
              />
              <img
                src="/fotos/plantillas/foot-scan.webp"
                alt="Análisis digital de pisada"
                className="rounded-3xl w-full h-64 object-cover mt-12 shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DÓNDE ESTAMOS ── */}
      <section className="py-16 bg-orto-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-3xl p-10 shadow-sm border border-gray-50">
            <div className="w-16 h-16 bg-orto-cyan/10 rounded-2xl flex items-center justify-center text-orto-cyan shrink-0">
              <MapPin size={32} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orto-slate mb-1">Dónde Estamos</h3>
              <p className="text-gray-600 font-light text-lg">
                Eliodoro Yáñez 1075, Depto. 12, Providencia, Santiago de Chile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESPECIALIDADES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="text-orto-blue" size={15} />
              <span className="text-xs font-semibold text-orto-blue uppercase tracking-widest">Especialidades</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-orto-slate tracking-tight leading-tight">
              Tecnología avanzada al servicio de tu recuperación
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Prótesis', desc: 'Fabricación y adaptación de prótesis de miembro superior e inferior con tecnología avanzada.', img: '/fotos/pies-protesicos/carbono-bajo.webp' },
              { title: 'Ortesis', desc: 'Dispositivos a medida para columna, miembro inferior y superior.', img: '/fotos/ortesis-inferior/afo-rigida.webp' },
              { title: 'Plantillas', desc: 'Análisis digital de la pisada y plantillas personalizadas con Foot Scan.', img: '/fotos/plantillas/estandar.webp' },
              { title: 'Calzado', desc: 'Calzado ortopédico de caña alta, baja y especializado para pie diabético.', img: '/fotos/calzado/diabetico.webp' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-orto-light rounded-3xl overflow-hidden"
              >
                <div className="h-44 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-orto-slate text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENFOQUE CLÍNICO ── */}
      <section className="py-24 bg-orto-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-orto-blue" size={15} />
                <span className="text-xs font-semibold text-orto-blue uppercase tracking-widest">Enfoque Clínico y Biopsicosocial</span>
              </div>
              <h2 className="text-4xl font-semibold text-orto-slate mb-6 tracking-tight leading-tight">
                Evaluación integral de la persona, no solo del diagnóstico.
              </h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
                Evaluamos integralmente las necesidades funcionales, laborales y sociales de cada paciente. Priorizamos la seguridad, el confort y la funcionalidad en cada solución que entregamos.
              </p>
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                Nuestro acompañamiento continuo va desde la evaluación inicial hasta el seguimiento: educación, controles y orientación permanente. Coordinamos con equipos tratantes y mutuales para garantizar la mejor atención integral.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-[420px] rounded-3xl overflow-hidden shadow-sm"
            >
              <img
                src="/fotos/plantillas/foot-scan.webp"
                alt="Evaluación clínica en Ortoprotec"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MISIÓN Y VISIÓN ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="text-orto-blue" size={15} />
              <span className="text-xs font-semibold text-orto-blue uppercase tracking-widest">Misión y Visión</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-orto-slate tracking-tight leading-tight">
              Nuestra razón de ser
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Target size={34} />,
                title: 'Misión',
                desc: 'Acompañar a cada persona hacia una vida funcional e independiente con dispositivos ortopédicos y protésicos personalizados de alta calidad.',
              },
              {
                icon: <Eye size={34} />,
                title: 'Visión',
                desc: 'Ser líderes en soluciones ortopédicas en Chile, reconocidos por nuestra innovación tecnológica, excelencia clínica y compromiso social.',
              },
              {
                icon: <ShieldCheck size={34} />,
                title: 'Valores',
                desc: 'Empatía, Excelencia, Innovación, Integridad y Compromiso. Detrás de cada dispositivo hay una persona, una historia y un sueño por cumplir.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-orto-light p-10 rounded-3xl hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-orto-cyan mb-8 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-semibold text-orto-slate mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
