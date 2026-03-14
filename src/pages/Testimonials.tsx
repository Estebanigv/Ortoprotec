import { motion } from 'motion/react';
import { Quote, Star, Sparkles, Play, Pause } from 'lucide-react';
import { useRef, useState } from 'react';
import CtaBanner from '../components/CtaBanner';

const testimonials = [
  {
    name: "María José Valdés",
    role: "Paciente Prótesis Transfemoral",
    text: "Después de mi accidente pensé que no volvería a caminar igual. El equipo de Ortoprotec no solo me hizo una prótesis increíble, sino que me acompañaron psicológicamente. Hoy he vuelto a hacer trekking.",
  },
  {
    name: "Pedro Soto",
    role: "Paciente Prótesis Transtibial",
    text: "Llevo 10 años usando prótesis y he pasado por varios centros. La tecnología y el calce que lograron aquí superó todas mis expectativas. El encaje es tan cómodo que a veces olvido que lo llevo puesto.",
  },
  {
    name: "Familia González",
    role: "Padres de paciente pediátrico",
    text: "Hacerle una ortesis a un niño pequeño es difícil, pero la paciencia y el cariño con el que trataron a nuestro hijo fue maravilloso. Los diseños infantiles hicieron que él quisiera usar su aparato.",
  },
  {
    name: "Luis Carrasco",
    role: "Paciente Prótesis Mioeléctrica",
    text: "La transición a una prótesis de brazo biónica fue un desafío, pero el entrenamiento funcional que me dieron en la clínica fue clave. He recuperado mi independencia en el trabajo.",
  },
  {
    name: "Carmen Rojas",
    role: "Paciente Ortesis de Columna",
    text: "Después de años con dolor lumbar crónico, la ortesis que me fabricaron cambió mi calidad de vida. El ajuste es perfecto y puedo trabajar sin molestias por primera vez en mucho tiempo.",
  },
  {
    name: "Roberto Mejías",
    role: "Paciente Plantillas Ortopédicas",
    text: "Tengo pie plano severo y probé muchas plantillas genéricas sin resultado. Con el análisis digital de la pisada que hacen en Ortoprotec me fabricaron unas plantillas que eliminaron completamente mi dolor de rodilla.",
  },
  {
    name: "Ana Fuentes",
    role: "Paciente Prótesis Transtibial",
    text: "Volvía a mi primera consulta con mucho miedo, no sabía qué esperar. El equipo me explicó todo con paciencia y hoy, 6 meses después, puedo caminar, subir escalas y hasta bailar en mi boda.",
  },
];

export default function Testimonials() {
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

      {/* Header — gradient only, no background image */}
      <section className="bg-orto-slate text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1B2A] via-orto-slate to-[#003F7D] pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-orto-cyan/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-12 w-64 h-64 rounded-full bg-orto-blue/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight"
          >
            Historias que <span className="text-orto-cyan">Inspiran</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
          >
            El mayor respaldo a nuestro trabajo es ver a nuestros pacientes retomar sus vidas, cumplir sus metas y volver a sonreír.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid — 3 columns */}
      <section className="py-24 bg-orto-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                className="bg-white p-6 rounded-3xl shadow-sm border border-gray-50 relative group hover:shadow-md transition-shadow"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-orto-cyan/10 group-hover:text-orto-cyan/20 transition-colors" />

                <div className="flex items-center gap-4 mb-5 relative z-10">
                  {/* Avatar initials */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orto-cyan to-orto-blue flex items-center justify-center shrink-0 border-2 border-orto-light">
                    <span className="text-white font-semibold text-base select-none">
                      {testimonial.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-orto-slate leading-tight">{testimonial.name}</h3>
                    <p className="text-orto-cyan font-medium text-sm">{testimonial.role}</p>
                    <div className="flex gap-0.5 mt-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} size={11} fill="currentColor" />)}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed font-light italic text-base relative z-10">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section — 3 cards side by side */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="text-orto-blue" size={16} />
              <span className="text-sm font-medium text-orto-blue uppercase tracking-wider">Videos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-orto-slate mb-4 tracking-tight leading-tight">
              Casos de Éxito en Video
            </h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed max-w-2xl mx-auto">
              Acompañamos a nuestros pacientes en cada paso de su rehabilitación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1 — real video */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="relative aspect-video bg-[#0B1B2A] rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
            >
              <video
                ref={videoRef}
                src="/video/xtremity.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Play/pause button */}
              <button
                onClick={togglePlay}
                className="absolute bottom-3 left-3 z-20 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transition-all hover:scale-110 shadow-lg"
                aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
              >
                {isPlaying ? <Pause size={14} fill="white" /> : <Play size={14} fill="white" />}
              </button>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0B1B2A]/90 to-transparent pointer-events-none z-10" />
              <span className="absolute bottom-3 right-3 z-20 text-xs font-semibold text-white/80 tracking-wide">
                Xtremity — Pie de Carbono
              </span>
            </motion.div>

            {/* Card 2 — placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative aspect-video bg-[#1A2838] rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col items-center justify-center"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-3">
                <Play size={22} className="text-white/50 ml-1" />
              </div>
              <span className="text-white/50 text-sm font-medium tracking-wide">Próximamente</span>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0B1B2A]/80 to-transparent pointer-events-none" />
              <span className="absolute bottom-3 right-3 text-xs font-semibold text-white/40 tracking-wide">Video 2</span>
            </motion.div>

            {/* Card 3 — placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video bg-[#1A2838] rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col items-center justify-center"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-3">
                <Play size={22} className="text-white/50 ml-1" />
              </div>
              <span className="text-white/50 text-sm font-medium tracking-wide">Próximamente</span>
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0B1B2A]/80 to-transparent pointer-events-none" />
              <span className="absolute bottom-3 right-3 text-xs font-semibold text-white/40 tracking-wide">Video 3</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CtaBanner
        title="¿Quieres ser parte de nuestras historias de éxito?"
        subtitle="Agenda una evaluación clínica y da el primer paso hacia recuperar tu vida activa."
      />
    </div>
  );
}
