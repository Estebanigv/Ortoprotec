import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles, ChevronRight, Pause, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import CtaBanner from '../components/CtaBanner';

const productCards = [
  {
    title: 'Prótesis',
    desc: 'Miembro superior e inferior, personalizadas según nivel de actividad y objetivos funcionales.',
    path: '/productos/protesis',
    img: '/fotos/pies-protesicos/carbono-alto.webp',
  },
  {
    title: 'Ortesis',
    desc: 'Dispositivos a medida para estabilizar, corregir o guiar el movimiento del cuerpo.',
    path: '/productos/ortesis',
    img: '/fotos/ortesis-inferior/afo-articulada.webp',
  },
  {
    title: 'Plantillas',
    desc: 'Análisis digital de la pisada y plantillas personalizadas para cada necesidad.',
    path: '/productos/plantillas',
    img: '/fotos/plantillas/foot-scan.webp',
  },
  {
    title: 'Calzados',
    desc: 'Complemento clínico para plantillas y ortesis, incluyendo calzado diabético especializado.',
    path: '/productos/calzados',
    img: '/fotos/calzado/cana-alta.webp',
  },
];

const benefits = [
  { title: 'Mayor confort y seguridad', desc: 'Dispositivos fabricados a medida para garantizar el mejor ajuste y desempeño.' },
  { title: 'Reintegro funcional y laboral', desc: 'Acompañamos a cada persona hacia recuperar su independencia y vida activa.' },
  { title: 'Acompañamiento continuo', desc: 'Desde la evaluación inicial hasta el seguimiento post-entrega con controles regulares.' },
  { title: 'Atención personalizada', desc: 'Enfoque clínico-biopsicosocial centrado en las necesidades individuales del paciente.' },
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col bg-white">

      {/* ── HERO ── */}
      <section className="relative pt-16 pb-0 lg:pt-24 overflow-hidden bg-orto-light">

        {/* Background decorativo — grid de puntos */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #00AEEF22 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Glow suave arriba izquierda */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-orto-cyan/10 blur-[100px] pointer-events-none" />
        {/* Glow suave abajo derecha */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-orto-blue/10 blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center">

            {/* Columna texto */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 pb-16 lg:pb-24"
            >
              <div className="inline-flex items-center gap-2 bg-orto-cyan/10 border border-orto-cyan/20 px-4 py-2 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-orto-cyan animate-pulse" />
                <span className="text-[11px] font-bold text-orto-cyan uppercase tracking-[0.18em]">Centro Clínico de Ortopedia</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-semibold text-orto-slate leading-[1.1] mb-5 tracking-tight">
                Fabricamos, adaptamos y <span className="text-orto-cyan">acompañamos</span> cada caso.
              </h1>
              <p className="text-base text-gray-500 mb-8 leading-relaxed font-light max-w-md">
                Prótesis, ortesis y soluciones ortopédicas a medida con enfoque clínico-biopsicosocial. Más de dos décadas acompañando a personas hacia una vida funcional.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 bg-orto-cyan hover:bg-[#0096CC] text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-sm text-sm"
                >
                  Agendar Evaluación <ArrowRight size={15} />
                </Link>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 border border-orto-slate/40 text-orto-slate hover:bg-orto-slate hover:text-white px-6 py-2.5 rounded-full font-semibold transition-all text-sm"
                >
                  Solicitar Cotización
                </Link>
              </div>
            </motion.div>

            {/* Columna video */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 pb-16 lg:pb-24"
            >
              <div className="relative rounded-3xl overflow-hidden bg-[#0B1B2A] shadow-2xl aspect-video">

                {/* Línea de acento cyan arriba */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-orto-cyan to-transparent z-10" />

                {/* Video */}
                <video
                  ref={videoRef}
                  src="/video/xtremity.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Botón play/pause */}
                <button
                  onClick={togglePlay}
                  className="absolute bottom-4 left-4 z-20 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transition-all hover:scale-110 shadow-lg"
                  aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
                >
                  {isPlaying ? <Pause size={14} fill="white" /> : <Play size={14} fill="white" />}
                </button>

                {/* Overlay gradiente inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0B1B2A]/80 to-transparent pointer-events-none z-10" />

                {/* Badge top-left */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-orto-cyan text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                    Xtremity · Direct Socket
                  </span>
                </div>

                {/* Label superior derecho */}
                <div className="absolute top-4 right-4 z-20 text-right bg-black/50 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/10">
                  <p className="text-orto-cyan text-[9px] uppercase tracking-widest font-bold">Tecnología</p>
                  <p className="text-white text-sm font-semibold">Direct Socket</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── QUÉ HACEMOS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-orto-blue" size={15} />
                <span className="text-xs font-semibold text-orto-blue uppercase tracking-widest">Qué Hacemos</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-orto-slate mb-6 leading-tight tracking-tight">
                Tu aliado en salud y bienestar funcional.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                Fabricamos y adaptamos prótesis, ortesis, soluciones de columna, plantillas y calzado ortopédico con enfoque clínico-biopsicosocial. Más de dos décadas acompañando a personas a recuperar su independencia.
              </p>
              <Link
                to="/nosotros"
                className="inline-flex items-center gap-2 text-orto-cyan font-semibold hover:gap-3 transition-all"
              >
                Conoce nuestra historia <ChevronRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-3xl overflow-hidden group"
            >
              <img
                src="/fotos/Quehacemos.webp"
                alt="Qué hacemos en Ortoprotec"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-105"
              />
              <img
                src="/fotos/Quehacemosdetalle.webp"
                alt="Qué hacemos en Ortoprotec — detalle"
                className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-700 ease-in-out group-hover:opacity-100 group-hover:scale-100"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ACCESOS RÁPIDOS PRODUCTOS ── */}
      <section className="py-24 bg-orto-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="text-orto-blue" size={15} />
              <span className="text-xs font-semibold text-orto-blue uppercase tracking-widest">Productos y Servicios</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-orto-slate tracking-tight leading-tight">
              Soluciones clínicas especializadas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link to={card.path}>
                  <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
                    <div className="h-52 overflow-hidden">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-orto-slate mb-2">{card.title}</h3>
                      <p className="text-gray-500 text-sm font-light leading-relaxed mb-4">{card.desc}</p>
                      <span className="inline-flex items-center gap-1 text-orto-cyan font-semibold text-sm group-hover:gap-2 transition-all">
                        Ver más <ChevronRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/productos"
              className="inline-flex items-center gap-2 bg-orto-slate hover:bg-orto-blue text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-sm"
            >
              Ver todos los productos y servicios <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BENEFICIOS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-orto-blue" size={15} />
                <span className="text-xs font-semibold text-orto-blue uppercase tracking-widest">Por Qué Elegirnos</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-orto-slate leading-tight tracking-tight">
                Comprometidos con tu recuperación funcional.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-8">
                {benefits.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 shrink-0">
                      <CheckCircle2 className="text-orto-cyan" size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-orto-slate mb-1">{item.title}</h3>
                      <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Agenda una evaluación clínica y recibe orientación personalizada"
        subtitle="Nuestro equipo clínico está listo para evaluarte y proponer la mejor solución para tu caso."
      />
    </div>
  );
}
