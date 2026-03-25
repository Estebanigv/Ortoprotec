import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from 'lucide-react';
import { useState, FormEvent, ChangeEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col bg-white">

      {/* Header — gradient only, no background image */}
      <section className="bg-orto-slate text-white py-24 relative overflow-hidden">
        {/* Subtle gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1B2A] via-orto-slate to-[#003F7D] pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-orto-cyan/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-12 w-64 h-64 rounded-full bg-orto-blue/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight"
          >
            Contacto y <span className="text-orto-cyan">Agenda</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Estamos aquí para ayudarte. Agenda tu evaluación o envíanos tus consultas.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-orto-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info — compact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="text-orto-blue" size={14} />
                <span className="text-xs font-semibold text-orto-blue uppercase tracking-wider">Contacto</span>
              </div>
              <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">
                Visítanos en nuestro centro clínico o contáctanos por teléfono o correo electrónico. Nuestro equipo está listo para atenderte.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
                  <div className="w-10 h-10 bg-orto-cyan/10 text-orto-cyan rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-orto-slate text-sm mb-0.5">Dirección</h3>
                    <p className="text-gray-600 font-light text-sm leading-snug">
                      Eliodoro Yáñez 1075, Depto. 12<br />Providencia, Santiago, Chile
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
                  <div className="w-10 h-10 bg-orto-cyan/10 text-orto-cyan rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-orto-slate text-sm mb-0.5">Teléfono</h3>
                    <p className="text-gray-600 font-light text-sm leading-snug">
                      22 235 1313<br />+56 9 7986 2293 (WhatsApp)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
                  <div className="w-10 h-10 bg-orto-cyan/10 text-orto-cyan rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-orto-slate text-sm mb-0.5">Correo Electrónico</h3>
                    <p className="text-gray-600 font-light text-sm leading-snug">
                      ortoprotec@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
                  <div className="w-10 h-10 bg-orto-cyan/10 text-orto-cyan rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-orto-slate text-sm mb-0.5">Horario de Atención</h3>
                    <p className="text-gray-600 font-light text-sm leading-snug">
                      Lunes a Viernes: 08:30 - 17:30 hrs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-50"
            >
              <h2 className="text-2xl font-semibold text-orto-slate mb-6 tracking-tight">Envíanos un mensaje</h2>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-2xl text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">¡Mensaje Enviado!</h3>
                  <p className="font-light">Gracias por contactarnos. Nos comunicaremos contigo a la brevedad.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-orto-slate mb-2">Nombre Completo *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-orto-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-orto-cyan focus:border-transparent outline-none transition-all"
                      placeholder="Ej. Juan Pérez"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-orto-slate mb-2">Correo Electrónico *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-orto-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-orto-cyan focus:border-transparent outline-none transition-all"
                        placeholder="ejemplo@correo.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-orto-slate mb-2">Teléfono *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-orto-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-orto-cyan focus:border-transparent outline-none transition-all"
                        placeholder="+56 9 1234 5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-orto-slate mb-2">Motivo de Consulta</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-orto-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-orto-cyan focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Seleccione una opción</option>
                      <option value="protesis">Evaluación para Prótesis</option>
                      <option value="ortesis">Evaluación para Ortesis</option>
                      <option value="plantillas">Plantillas Ortopédicas</option>
                      <option value="mantenimiento">Mantenimiento / Ajuste</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-orto-slate mb-2">Mensaje *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-orto-light border border-gray-200 rounded-xl focus:ring-2 focus:ring-orto-cyan focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orto-cyan text-white font-medium py-4 px-8 rounded-full hover:bg-[#0096CC] transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    Enviar Mensaje <Send size={20} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
