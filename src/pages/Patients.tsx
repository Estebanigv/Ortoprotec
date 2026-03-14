import { motion } from 'motion/react';
import { FileText, ChevronDown, Sparkles, BookOpen, Calendar, ClipboardList, Wrench, HeartHandshake, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CtaBanner from '../components/CtaBanner';

const guias = [
  'Cómo es el proceso de evaluación en ORTOPROTEC',
  'Cuidados del muñón',
  'Cómo usar correctamente tu prótesis',
  'Vida activa con prótesis',
  'Rehabilitación post-amputación',
  'Prótesis para niños',
  'Guía de plantillas ortopédicas',
  'Ortesis de columna: lo que debes saber',
  'Reintegro laboral con discapacidad',
  'Cuidado de piel y muñón',
  'Actividad física con prótesis',
  'Ayudas técnicas disponibles en Chile',
  'Guía para cuidadores',
];

const faqsGenerales = [
  {
    q: '¿Es necesario agendar una evaluación previa?',
    a: 'Sí, es fundamental agendar una hora para asegurar que nuestro equipo clínico tenga el tiempo necesario para realizar una evaluación exhaustiva y personalizada de tu caso.',
  },
  {
    q: '¿Las prótesis y ortesis son personalizadas?',
    a: 'Sí. Todos nuestros dispositivos son fabricados a medida para cada paciente, considerando sus características físicas, necesidades funcionales y objetivos de rehabilitación.',
  },
  {
    q: '¿Cuánto dura el proceso de adaptación?',
    a: 'El proceso varía según el tipo de dispositivo y el paciente, pero generalmente toma entre 3 a 6 semanas desde la evaluación inicial hasta la entrega final, incluyendo pruebas de encaje y alineación definitiva.',
  },
  {
    q: '¿Realizan seguimiento después de la entrega?',
    a: 'Sí. Nuestro acompañamiento no termina con la entrega del dispositivo. Realizamos controles periódicos, educación y ajustes según la evolución del paciente.',
  },
  {
    q: '¿Atienden pacientes derivados por mutuales?',
    a: 'Sí. Trabajamos con derivaciones de mutuales y entregamos toda la documentación necesaria para gestionar los procesos de cobertura correspondientes.',
  },
  {
    q: '¿Dónde están ubicados?',
    a: 'Nos encontramos en Eliodoro Yáñez 1075, Depto. 12, Providencia, Santiago de Chile.',
  },
  {
    q: '¿Atienden solo en Santiago?',
    a: 'Nuestra atención clínica presencial se realiza en Santiago. Para casos de regiones, contáctanos para evaluar opciones de atención y seguimiento a distancia.',
  },
  {
    q: '¿Qué debo llevar a la evaluación?',
    a: 'Te recomendamos traer tu orden médica (si tienes), exámenes recientes relevantes (radiografías, informes médicos), tu carnet de identidad y, si usas algún dispositivo actualmente, tráelo para que podamos evaluarlo.',
  },
  {
    q: '¿Qué hago si tengo dolor o molestias con mi dispositivo?',
    a: 'Contáctanos de inmediato. No debes tolerar dolor. Agenda un control y nuestro equipo evaluará y corregirá el ajuste del dispositivo sin costo adicional dentro del período de garantía.',
  },
  {
    q: '¿Una prótesis dura para siempre?',
    a: 'No. La vida útil depende del tipo de dispositivo, nivel de actividad y cuidados del paciente. En promedio, los encajes se renuevan cada 2-3 años y los componentes según desgaste y evolución clínica.',
  },
  {
    q: '¿Puedo trabajar con una prótesis?',
    a: 'Sí. La mayoría de los pacientes puede reintegrarse al trabajo con una prótesis bien adaptada. El tipo de actividad laboral influye en la selección de componentes y entrenamiento.',
  },
  {
    q: '¿La prótesis requiere entrenamiento?',
    a: 'Sí. El entrenamiento funcional es parte fundamental del proceso. Entregamos orientación y coordinamos con kinesiólogos o terapeutas ocupacionales para maximizar el desempeño con el dispositivo.',
  },
];

const faqsOrtesis = [
  {
    q: '¿Las ortesis se usan todo el día?',
    a: 'Depende de la indicación clínica. Algunas ortesis son de uso continuo y otras se usan solo durante ciertas actividades. El protocolo de uso se define en la evaluación clínica.',
  },
  {
    q: '¿Las ortesis necesitan mantención?',
    a: 'Sí. Las ortesis requieren revisión periódica para verificar el estado de los materiales, ajuste y funcionalidad. Recomendamos controles cada 6-12 meses según el tipo de dispositivo.',
  },
];

const processSteps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Agenda tu hora',
    desc: 'Llama, escríbenos o usa nuestro sistema online para reservar tu evaluación inicial.',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: 'Evaluación Clínica',
    desc: 'Nuestro equipo evalúa tu caso, toma medidas y define la solución más adecuada para ti.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Fabricación a Medida',
    desc: 'Fabricamos tu dispositivo con materiales de primera calidad, ajustado a tu anatomía.',
  },
  {
    number: '04',
    icon: HeartHandshake,
    title: 'Seguimiento Continuo',
    desc: 'Realizamos controles periódicos y ajustes para asegurar el mejor desempeño a largo plazo.',
  },
];

export default function Patients() {
  const [openFaqG, setOpenFaqG] = useState<number | null>(null);
  const [openFaqO, setOpenFaqO] = useState<number | null>(null);

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
            Información para <span className="text-orto-cyan">Pacientes</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Todo lo que necesitas saber antes, durante y después de tu tratamiento con nosotros.
          </motion.p>
        </div>
      </section>

      {/* ── PROCESO DE ATENCIÓN ── */}
      <section className="py-16 bg-orto-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="text-orto-blue" size={15} />
              <span className="text-xs font-semibold text-orto-blue uppercase tracking-widest">Proceso</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-orto-slate mb-4 tracking-tight">
              Proceso de atención
            </h2>
            <p className="text-gray-600 font-light text-base leading-relaxed">
              Desde tu primera consulta hasta el seguimiento a largo plazo, te acompañamos en cada etapa.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Dashed connector line — desktop only */}
            <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-px border-t-2 border-dashed border-orto-cyan/30 z-0 pointer-events-none" />

            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  {/* Number badge */}
                  <span className="text-xs font-bold text-orto-cyan tracking-widest mb-3 bg-orto-cyan/10 px-2.5 py-1 rounded-full">
                    {step.number}
                  </span>

                  {/* Icon circle */}
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-orto-cyan mb-4">
                    <Icon size={26} />
                  </div>

                  <h3 className="font-semibold text-orto-slate text-sm mb-2 leading-snug">{step.title}</h3>
                  <p className="text-gray-500 text-xs font-light leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GUÍAS EDUCATIVAS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="text-orto-blue" size={15} />
              <span className="text-xs font-semibold text-orto-blue uppercase tracking-widest">Guías Educativas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-orto-slate mb-4 tracking-tight">
              Recursos para pacientes y familiares
            </h2>
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              Información clara y confiable para que estés preparado en cada etapa de tu proceso.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guias.map((guia, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="bg-orto-light rounded-2xl p-6 flex items-start gap-4 hover:shadow-sm transition-shadow cursor-pointer group"
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-orto-cyan shrink-0 shadow-sm group-hover:bg-orto-cyan group-hover:text-white transition-colors">
                  <BookOpen size={18} />
                </div>
                <div>
                  <span className="text-xs text-orto-blue font-semibold uppercase tracking-wider">Guía {idx + 1}</span>
                  <p className="text-orto-slate font-medium text-sm mt-1 leading-snug">{guia}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400 font-light mt-10">
            Las guías educativas estarán disponibles próximamente para descarga. Consúltanos directamente para más información.
          </p>
        </div>
      </section>

      {/* ── FAQ GENERALES ── */}
      <section className="py-24 bg-orto-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="text-orto-blue" size={15} />
              <span className="text-xs font-semibold text-orto-blue uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-orto-slate mb-4 tracking-tight">Preguntas Frecuentes</h2>
            <p className="text-gray-600 text-lg font-light">Resolvemos las dudas más comunes de nuestros pacientes.</p>
          </div>

          <div className="space-y-3">
            {faqsGenerales.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqG(openFaqG === idx ? null : idx)}
                  className="w-full text-left px-7 py-5 flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-orto-slate pr-8">{faq.q}</span>
                  <ChevronDown
                    className={`shrink-0 text-orto-cyan transition-transform duration-300 ${openFaqG === idx ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>
                <div className={`px-7 overflow-hidden transition-all duration-300 ease-in-out ${openFaqG === idx ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-600 font-light leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ORTESIS ── */}
      <section className="py-16 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <FileText className="text-orto-blue" size={20} />
            <h2 className="text-2xl font-semibold text-orto-slate tracking-tight">Preguntas sobre Ortesis</h2>
          </div>

          <div className="space-y-3">
            {faqsOrtesis.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-orto-light border border-gray-100 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqO(openFaqO === idx ? null : idx)}
                  className="w-full text-left px-7 py-5 flex justify-between items-center focus:outline-none hover:bg-gray-100/50 transition-colors"
                >
                  <span className="font-semibold text-orto-slate pr-8">{faq.q}</span>
                  <ChevronDown
                    className={`shrink-0 text-orto-cyan transition-transform duration-300 ${openFaqO === idx ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>
                <div className={`px-7 overflow-hidden transition-all duration-300 ease-in-out ${openFaqO === idx ? 'max-h-64 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-gray-600 font-light leading-relaxed border-t border-gray-200 pt-4">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA INLINE — ¿Listo para tu primera evaluación? ── */}
      <section className="py-20 bg-orto-slate">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Stat chips */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {['2001 — Fundados', '+500 pacientes', 'Santiago, Chile'].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/70 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest"
                >
                  {chip}
                </span>
              ))}
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-5 tracking-tight leading-tight">
              ¿Listo para tu primera evaluación?
            </h2>
            <p className="text-lg text-white/70 font-light mb-10 leading-relaxed max-w-2xl mx-auto">
              Nuestro equipo clínico está preparado para escucharte, evaluarte y proponer la solución ortopédica ideal para tu caso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/agenda"
                className="inline-flex items-center justify-center gap-2 bg-orto-cyan hover:bg-[#0096CC] text-white px-9 py-4 rounded-full font-semibold transition-all shadow-lg shadow-orto-cyan/30 text-base"
              >
                Agendar Evaluación <ArrowRight size={18} />
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white text-white px-9 py-4 rounded-full font-semibold transition-all text-base"
              >
                Contáctanos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CtaBanner
        title="Recursos adicionales próximamente"
        subtitle="Estamos preparando guías descargables, videos educativos y más. Suscríbete para ser el primero en acceder."
      />
    </div>
  );
}
