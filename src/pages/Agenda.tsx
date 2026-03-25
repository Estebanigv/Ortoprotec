import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, CalendarCheck, Clock, User, Phone, Mail, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

// ── Configuración ──────────────────────────────────────────
const MOTIVOS = [
  { value: 'evaluacion-protesis', label: 'Evaluación para Prótesis' },
  { value: 'evaluacion-ortesis', label: 'Evaluación para Ortesis' },
  { value: 'plantillas', label: 'Análisis de Plantillas (Foot Scan)' },
  { value: 'calzado', label: 'Consulta Calzado Ortopédico' },
  { value: 'control', label: 'Control / Seguimiento' },
  { value: 'cotizacion', label: 'Solicitar Cotización' },
  { value: 'otro', label: 'Otro' },
];

const HORARIOS = ['08:30', '09:15', '10:00', '10:45', '11:30', '12:15', '14:00', '14:45', '15:30', '16:15', '17:00'];

// Días sin disponibilidad (sábados y domingos + algunos bloqueados)
const isDisabled = (date: Date) => {
  const day = date.getDay();
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return date < today || day === 0 || day === 6;
};

// ── Helpers ────────────────────────────────────────────────
const MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const DIAS_CORTOS = ['Lu','Ma','Mi','Ju','Vi','Sá','Do'];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Monday = 0
}
function formatDate(date: Date) {
  return date.toLocaleDateString('es-CL', { weekday: 'long', day: 'numeric', month: 'long' });
}

// ── Componente principal ───────────────────────────────────
export default function Agenda() {
  const today = new Date();
  const [step, setStep] = useState(1);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedHora, setSelectedHora] = useState<string | null>(null);
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', motivo: '', mensaje: '' });
  const [submitted, setSubmitted] = useState(false);

  // ── Calendario ──
  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(v => v - 1); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(v => v + 1); }
    else setViewMonth(m => m + 1);
  };

  const selectDay = (day: number) => {
    const date = new Date(viewYear, viewMonth, day);
    if (isDisabled(date)) return;
    setSelectedDate(date);
    setSelectedHora(null);
  };

  // ── Formulario ──
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // ── Steps ──
  const steps = [
    { n: 1, label: 'Fecha y hora' },
    { n: 2, label: 'Tus datos' },
    { n: 3, label: 'Confirmación' },
  ];

  return (
    <div className="flex flex-col bg-white min-h-screen">

      {/* ── HEADER ── */}
      <section className="bg-orto-slate text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
              <CalendarCheck size={13} /> Agenda Online
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
              Agenda tu <span className="text-orto-cyan">Evaluación Clínica</span>
            </h1>
            <p className="text-gray-300 font-light text-lg max-w-2xl mx-auto leading-relaxed">
              Selecciona fecha y hora, completa tus datos y confirma tu cita. Nos contactaremos para validar la reserva.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STEPPER ── */}
      <div className="bg-orto-light border-b border-gray-200 py-5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-0">
            {steps.map((s, idx) => (
              <div key={s.n} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step > s.n ? 'bg-orto-cyan text-white' :
                    step === s.n ? 'bg-orto-slate text-white ring-4 ring-orto-cyan/20' :
                    'bg-white border-2 border-gray-300 text-gray-400'
                  }`}>
                    {step > s.n ? <CheckCircle2 size={18} /> : s.n}
                  </div>
                  <span className={`text-xs font-medium mt-1.5 hidden sm:block ${step >= s.n ? 'text-orto-slate' : 'text-gray-400'}`}>
                    {s.label}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className={`w-16 sm:w-24 h-0.5 mx-2 mb-5 transition-all ${step > s.n ? 'bg-orto-cyan' : 'bg-gray-200'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTENIDO ── */}
      <div className="flex-grow py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">

            {/* ─ STEP 1: Fecha y hora ─ */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                  {/* Calendario */}
                  <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                      <button onClick={prevMonth} className="w-9 h-9 rounded-full hover:bg-orto-light flex items-center justify-center text-gray-500 transition-colors">
                        <ChevronLeft size={18} />
                      </button>
                      <h3 className="font-semibold text-orto-slate text-base">
                        {MESES[viewMonth]} {viewYear}
                      </h3>
                      <button onClick={nextMonth} className="w-9 h-9 rounded-full hover:bg-orto-light flex items-center justify-center text-gray-500 transition-colors">
                        <ChevronRight size={18} />
                      </button>
                    </div>

                    {/* Días de la semana */}
                    <div className="grid grid-cols-7 mb-2">
                      {DIAS_CORTOS.map(d => (
                        <div key={d} className="text-center text-[11px] font-semibold text-gray-400 uppercase py-1">{d}</div>
                      ))}
                    </div>

                    {/* Días del mes */}
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} />)}
                      {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const date = new Date(viewYear, viewMonth, day);
                        const disabled = isDisabled(date);
                        const isSelected = selectedDate?.toDateString() === date.toDateString();
                        const isToday = date.toDateString() === today.toDateString();
                        return (
                          <button
                            key={day}
                            onClick={() => selectDay(day)}
                            disabled={disabled}
                            className={`aspect-square rounded-xl text-sm font-medium transition-all flex items-center justify-center
                              ${isSelected ? 'bg-orto-cyan text-white shadow-md shadow-orto-cyan/30' :
                                isToday && !disabled ? 'bg-orto-light text-orto-cyan border border-orto-cyan/30' :
                                disabled ? 'text-gray-300 cursor-not-allowed' :
                                'hover:bg-orto-light text-orto-slate hover:text-orto-cyan'
                              }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>

                    {selectedDate && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-xs text-gray-400 font-light capitalize">{formatDate(selectedDate)}</p>
                      </div>
                    )}
                  </div>

                  {/* Horarios */}
                  <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-5">
                      <Clock size={16} className="text-orto-cyan" />
                      <h3 className="font-semibold text-orto-slate">Horarios disponibles</h3>
                    </div>

                    {!selectedDate ? (
                      <div className="flex flex-col items-center justify-center h-48 text-center">
                        <CalendarCheck size={36} className="text-gray-200 mb-3" />
                        <p className="text-gray-400 text-sm font-light">Selecciona una fecha para ver los horarios disponibles</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {HORARIOS.map((hora) => {
                          // Simula algunos horarios ocupados
                          const ocupado = ['09:45', '14:45', '16:15'].includes(hora);
                          const isSelected = selectedHora === hora;
                          return (
                            <button
                              key={hora}
                              disabled={ocupado}
                              onClick={() => setSelectedHora(hora)}
                              className={`py-2.5 rounded-xl text-sm font-medium transition-all border
                                ${isSelected ? 'bg-orto-cyan text-white border-orto-cyan shadow-sm' :
                                  ocupado ? 'bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed line-through' :
                                  'bg-white text-orto-slate border-gray-200 hover:border-orto-cyan hover:text-orto-cyan'
                                }`}
                            >
                              {hora}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {selectedDate && selectedHora && (
                      <div className="mt-6 p-4 bg-orto-light rounded-2xl border border-orto-cyan/20">
                        <div className="flex items-center gap-2 text-sm text-orto-slate font-medium">
                          <CheckCircle2 size={16} className="text-orto-cyan" />
                          <span className="capitalize">{formatDate(selectedDate)} — {selectedHora} hrs.</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => setStep(2)}
                    disabled={!selectedDate || !selectedHora}
                    className="inline-flex items-center gap-2 bg-orto-cyan hover:bg-[#0096CC] text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continuar <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* ─ STEP 2: Datos del paciente ─ */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>

                {/* Resumen de la cita */}
                <div className="bg-orto-light rounded-2xl p-5 flex flex-wrap items-center gap-6 mb-8 border border-orto-cyan/20">
                  <div className="flex items-center gap-2 text-sm text-orto-slate font-medium">
                    <CalendarCheck size={16} className="text-orto-cyan" />
                    <span className="capitalize">{selectedDate ? formatDate(selectedDate) : ''}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-orto-slate font-medium">
                    <Clock size={16} className="text-orto-cyan" />
                    <span>{selectedHora} hrs.</span>
                  </div>
                  <button onClick={() => setStep(1)} className="text-xs text-gray-400 hover:text-orto-cyan underline ml-auto transition-colors">
                    Cambiar fecha
                  </button>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <User size={16} className="text-orto-cyan" />
                    <h3 className="font-semibold text-orto-slate">Datos del paciente</h3>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-orto-slate mb-2">Nombre completo *</label>
                    <input
                      required
                      type="text"
                      value={form.nombre}
                      onChange={e => setForm({ ...form, nombre: e.target.value })}
                      placeholder="Ej: Juan Pérez"
                      className="w-full px-5 py-3.5 bg-orto-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-orto-cyan focus:border-transparent outline-none transition-all text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-orto-slate mb-2">
                        <span className="flex items-center gap-1.5"><Mail size={13} /> Correo electrónico *</span>
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="ejemplo@correo.com"
                        className="w-full px-5 py-3.5 bg-orto-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-orto-cyan focus:border-transparent outline-none transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-orto-slate mb-2">
                        <span className="flex items-center gap-1.5"><Phone size={13} /> Teléfono *</span>
                      </label>
                      <input
                        required
                        type="tel"
                        value={form.telefono}
                        onChange={e => setForm({ ...form, telefono: e.target.value })}
                        placeholder="+56 9 1234 5678"
                        className="w-full px-5 py-3.5 bg-orto-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-orto-cyan focus:border-transparent outline-none transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-orto-slate mb-2">Motivo de consulta *</label>
                    <select
                      required
                      value={form.motivo}
                      onChange={e => setForm({ ...form, motivo: e.target.value })}
                      className="w-full px-5 py-3.5 bg-orto-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-orto-cyan focus:border-transparent outline-none transition-all text-sm"
                    >
                      <option value="">Selecciona el motivo de tu visita</option>
                      {MOTIVOS.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-orto-slate mb-2">Información adicional <span className="text-gray-400 font-normal">(opcional)</span></label>
                    <textarea
                      rows={3}
                      value={form.mensaje}
                      onChange={e => setForm({ ...form, mensaje: e.target.value })}
                      placeholder="Cuéntanos brevemente tu caso o si tienes alguna pregunta..."
                      className="w-full px-5 py-3.5 bg-orto-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-orto-cyan focus:border-transparent outline-none transition-all text-sm resize-none"
                    />
                  </div>

                  <div className="flex justify-between pt-2">
                    <button type="button" onClick={() => setStep(1)} className="inline-flex items-center gap-2 text-gray-400 hover:text-orto-slate text-sm font-medium transition-colors">
                      <ChevronLeft size={16} /> Volver
                    </button>
                    <button type="submit" className="inline-flex items-center gap-2 bg-orto-cyan hover:bg-[#0096CC] text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-sm">
                      Revisar reserva <ArrowRight size={18} />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* ─ STEP 3: Confirmación ─ */}
            {step === 3 && !submitted && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-12 max-w-2xl mx-auto">
                  <div className="flex items-center gap-2 mb-8">
                    <Sparkles size={16} className="text-orto-blue" />
                    <h3 className="font-semibold text-orto-slate">Confirma tu reserva</h3>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[
                      { label: 'Fecha', value: selectedDate ? formatDate(selectedDate) : '', icon: <CalendarCheck size={16} /> },
                      { label: 'Hora', value: `${selectedHora} hrs.`, icon: <Clock size={16} /> },
                      { label: 'Nombre', value: form.nombre, icon: <User size={16} /> },
                      { label: 'Correo', value: form.email, icon: <Mail size={16} /> },
                      { label: 'Teléfono', value: form.telefono, icon: <Phone size={16} /> },
                      { label: 'Motivo', value: MOTIVOS.find(m => m.value === form.motivo)?.label || form.motivo, icon: <Sparkles size={16} /> },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-0">
                        <span className="text-orto-cyan shrink-0 mt-0.5">{item.icon}</span>
                        <div className="flex justify-between w-full text-sm">
                          <span className="text-gray-400 font-light">{item.label}</span>
                          <span className="text-orto-slate font-medium capitalize text-right">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-gray-400 font-light leading-relaxed mb-8 bg-orto-light rounded-xl p-4 border border-gray-100">
                    Al confirmar, recibirás un correo de validación. Nuestro equipo confirmará la disponibilidad y se contactará contigo para verificar la cita.
                  </p>

                  <div className="flex justify-between">
                    <button onClick={() => setStep(2)} className="inline-flex items-center gap-2 text-gray-400 hover:text-orto-slate text-sm font-medium transition-colors">
                      <ChevronLeft size={16} /> Editar datos
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="inline-flex items-center gap-2 bg-orto-cyan hover:bg-[#0096CC] text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-sm"
                    >
                      Confirmar cita <CheckCircle2 size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ─ ÉXITO ─ */}
            {submitted && (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-lg mx-auto text-center py-8">
                <div className="w-20 h-20 bg-orto-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-orto-cyan" />
                </div>
                <h2 className="text-3xl font-semibold text-orto-slate mb-3 tracking-tight">¡Reserva enviada!</h2>
                <p className="text-gray-500 font-light leading-relaxed mb-2">
                  Gracias, <strong className="text-orto-slate font-semibold">{form.nombre}</strong>. Hemos recibido tu solicitud de cita para:
                </p>
                <div className="bg-orto-light rounded-2xl px-6 py-4 my-6 inline-block border border-orto-cyan/20">
                  <p className="text-orto-slate font-semibold capitalize">{selectedDate ? formatDate(selectedDate) : ''} — {selectedHora} hrs.</p>
                </div>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                  Recibirás un correo en <strong className="text-orto-slate">{form.email}</strong> con la confirmación. Nuestro equipo se contactará contigo para validar la reserva.
                </p>
                <button
                  onClick={() => { setStep(1); setSubmitted(false); setSelectedDate(null); setSelectedHora(null); setForm({ nombre: '', email: '', telefono: '', motivo: '', mensaje: '' }); }}
                  className="inline-flex items-center gap-2 bg-orto-slate hover:bg-orto-blue text-white px-8 py-3.5 rounded-full font-semibold transition-all"
                >
                  Agendar otra cita
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
