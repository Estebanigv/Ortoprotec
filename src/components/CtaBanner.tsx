import { motion } from 'motion/react';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export default function CtaBanner({
  title = 'Agenda una evaluación clínica y recibe orientación personalizada',
  subtitle = 'Nuestro equipo clínico está listo para evaluarte y proponer la mejor solución para tu caso.',
  primaryLabel = 'Agendar Evaluación',
  secondaryLabel = 'Solicitar Cotización',
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1B2A] via-[#003F7D] to-[#0079C1]" />

      {/* Decorative blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-orto-cyan/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-[#0056B3]/40 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-8 backdrop-blur-sm">
            <CalendarCheck size={13} />
            Centro Clínico de Ortopedia — Providencia, Santiago
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
            {title}
          </h2>
          <p className="text-lg text-white/70 font-light mb-10 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/agenda"
              className="inline-flex items-center justify-center gap-2 bg-orto-cyan hover:bg-[#0096CC] text-white px-9 py-4 rounded-full font-semibold transition-all shadow-lg shadow-orto-cyan/30 text-base"
            >
              {primaryLabel} <ArrowRight size={18} />
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white px-9 py-4 rounded-full font-semibold transition-all backdrop-blur-sm text-base"
            >
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
