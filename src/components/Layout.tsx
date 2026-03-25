import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, MapPin, Phone, Mail, Instagram, Linkedin, Facebook, ChevronDown, Activity, Bone, Footprints, Shirt } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const productosDropdown = [
  { name: 'Prótesis', path: '/productos/protesis', desc: 'Miembro superior e inferior', icon: Activity },
  { name: 'Ortesis', path: '/productos/ortesis', desc: 'Columna, cervical, AFO, botas', icon: Bone },
  { name: 'Plantillas Ortopédicas', path: '/productos/plantillas', desc: 'Análisis digital de la pisada', icon: Footprints },
  { name: 'Calzado Ortopédico', path: '/productos/calzados', desc: 'Diabético y especializado', icon: Shirt },
];

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductosOpen, setIsProductosOpen] = useState(false);
  const [isMobileProductosOpen, setIsMobileProductosOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductosOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsProductosOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Productos y Servicios', path: '/productos' },
    { name: 'Pacientes', path: '/pacientes' },
    { name: 'Testimonios', path: '/testimonios' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Navbar */}
      <header className="fixed top-0 w-full z-50 transition-all duration-300 pt-3 px-4 sm:px-6">
        <div
          className={`max-w-7xl mx-auto transition-all duration-300 rounded-2xl ${
            isScrolled
              ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/[0.06] border border-gray-200/80 px-5 py-3'
              : 'bg-white/70 backdrop-blur-md border border-white/60 px-5 py-3.5'
          }`}
        >
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <img src="/isotipo.png" alt="Ortoprotec" className="h-8 w-auto" />
              <div className="leading-none">
                <span className="text-[17px] font-extrabold tracking-tight">
                  <span className="text-orto-cyan">Orto</span><span className="text-orto-slate">protec</span>
                </span>
                <p className="text-[9px] text-gray-400 font-medium uppercase tracking-[0.12em] leading-tight hidden sm:block">
                  Centro Clínico de Ortopedia
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.path === '/productos' ? (
                  <div key={link.path} className="relative" ref={dropdownRef} onMouseEnter={() => setIsProductosOpen(true)} onMouseLeave={() => setIsProductosOpen(false)}>
                    <button
                      className={`relative flex items-center gap-1 text-[13.5px] font-medium px-3.5 py-2 rounded-xl transition-all ${
                        isActive(link.path)
                          ? 'text-orto-cyan bg-orto-cyan/8'
                          : 'text-gray-500 hover:text-orto-slate hover:bg-gray-100/80'
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${isProductosOpen ? 'rotate-180' : ''}`}
                      />
                      {isActive(link.path) && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orto-cyan" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isProductosOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
                        >
                          {/* Cabecera del dropdown */}
                          <Link
                            to="/productos"
                            className="flex items-center justify-between px-4 py-3 bg-orto-light border-b border-gray-100 hover:bg-orto-cyan/10 transition-colors"
                          >
                            <span className="text-xs font-bold text-orto-slate uppercase tracking-widest">Todos los Productos</span>
                            <ChevronDown size={12} className="-rotate-90 text-orto-cyan" />
                          </Link>
                          {/* Items */}
                          {productosDropdown.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="flex items-center gap-3 px-4 py-3 hover:bg-orto-light transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-orto-cyan/10 flex items-center justify-center shrink-0 group-hover:bg-orto-cyan/20 transition-colors">
                                <item.icon size={15} className="text-orto-cyan" />
                              </div>
                              <div>
                                <p className="text-[13px] font-semibold text-orto-slate group-hover:text-orto-cyan transition-colors">{item.name}</p>
                                <p className="text-[11px] text-gray-400 font-light">{item.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative text-[13.5px] font-medium px-3.5 py-2 rounded-xl transition-all ${
                      isActive(link.path)
                        ? 'text-orto-cyan bg-orto-cyan/8'
                        : 'text-gray-500 hover:text-orto-slate hover:bg-gray-100/80'
                    }`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orto-cyan" />
                    )}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <Link
                to="/agenda"
                className="inline-flex items-center gap-1.5 bg-orto-cyan hover:bg-[#0096CC] text-white pl-4 pr-5 py-2.5 rounded-xl font-semibold transition-all text-[13.5px] shadow-sm shadow-orto-cyan/20"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                Agendar Evaluación
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-9 h-9 rounded-xl bg-gray-100 hover:bg-orto-cyan/10 flex items-center justify-center text-orto-slate hover:text-orto-cyan transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 lg:hidden shadow-xl overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.path === '/productos' ? (
                  <div key={link.path}>
                    <button
                      onClick={() => setIsMobileProductosOpen(!isMobileProductosOpen)}
                      className={`w-full flex items-center justify-between text-lg font-medium p-4 rounded-xl transition-colors ${
                        isActive(link.path) ? 'bg-orto-light text-orto-cyan' : 'text-orto-slate hover:bg-gray-50'
                      }`}
                    >
                      {link.name}
                      <ChevronDown size={18} className={`transition-transform ${isMobileProductosOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isMobileProductosOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden ml-4 mt-1 flex flex-col gap-1"
                        >
                          <Link to="/productos" className="text-sm font-semibold text-orto-cyan p-3 rounded-xl hover:bg-orto-light">
                            Ver todos los productos →
                          </Link>
                          {productosDropdown.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 text-orto-slate"
                            >
                              <div className="w-7 h-7 rounded-lg bg-orto-cyan/10 flex items-center justify-center shrink-0">
                                <item.icon size={14} className="text-orto-cyan" />
                              </div>
                              <span className="text-base font-medium">{item.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-lg font-medium p-4 rounded-xl transition-colors ${
                      isActive(link.path) ? 'bg-orto-light text-orto-cyan' : 'text-orto-slate hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <Link
                to="/agenda"
                className="bg-orto-cyan text-white p-4 rounded-xl font-bold text-center mt-4 text-lg shadow-lg"
              >
                Agendar Evaluación
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-[80px]">
        <Outlet />
      </main>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/56979862293?text=Hola,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Ortoprotec."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
        aria-label="Contactar por WhatsApp"
      >
        {/* Etiqueta */}
        <span className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 bg-white text-[#1EBE59] text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-green-100 whitespace-nowrap pointer-events-none">
          Escríbenos por WhatsApp
        </span>
        <div className="w-14 h-14 bg-[#25D366] hover:bg-[#1EBE59] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 shrink-0">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      </a>

      {/* Footer */}
      <footer className="relative bg-[#0B1520] text-white overflow-hidden">
        {/* Top cyan accent line */}
        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-orto-cyan to-transparent" />

        {/* Main footer grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">

            {/* Brand column */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <img src="/isotipo.png" alt="Ortoprotec" className="h-10 w-auto brightness-0 invert opacity-70" />
                <span className="text-2xl font-extrabold tracking-tight leading-none">
                  <span className="text-orto-cyan">Orto</span><span className="text-white/80">protec</span>
                </span>
              </div>

              <p className="text-[#8899AA] text-sm font-light leading-relaxed mb-7 max-w-sm">
                Centro Clínico de Ortopedia especializado en la fabricación y adaptación de prótesis, ortesis y soluciones personalizadas. Más de dos décadas acompañando a personas hacia una vida funcional.
              </p>

              {/* Contact items */}
              <ul className="space-y-3 mb-8">
                {[
                  { icon: <MapPin size={14} />, text: 'Eliodoro Yáñez 1075, Depto. 12, Providencia, Santiago' },
                  { icon: <Phone size={14} />, text: '22 235 1313 | +56 9 7986 2293' },
                  { icon: <Mail size={14} />, text: 'ortoprotec@gmail.com' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-orto-cyan mt-0.5 shrink-0">{item.icon}</span>
                    <span className="text-[#8899AA] text-sm font-light">{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Social */}
              <div className="flex gap-2">
                {[
                  { icon: <Instagram size={15} />, label: 'Instagram' },
                  { icon: <Linkedin size={15} />, label: 'LinkedIn' },
                  { icon: <Facebook size={15} />, label: 'Facebook' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-orto-cyan/20 border border-white/10 hover:border-orto-cyan/40 flex items-center justify-center text-[#8899AA] hover:text-orto-cyan transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden lg:block lg:col-span-1" />

            {/* Navegación */}
            <div className="lg:col-span-3">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-orto-cyan mb-5">Navegación</h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-[#8899AA] hover:text-white transition-colors text-sm font-light flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-orto-cyan transition-all duration-300 shrink-0" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Servicios */}
            <div className="lg:col-span-3">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-orto-cyan mb-5">Servicios</h4>
              <ul className="space-y-2.5">
                {[
                  { name: 'Prótesis', path: '/productos/protesis' },
                  { name: 'Ortesis', path: '/productos/ortesis' },
                  { name: 'Plantillas Ortopédicas', path: '/productos/plantillas' },
                  { name: 'Calzado Ortopédico', path: '/productos/calzados' },
                  { name: 'Evaluación Clínica', path: '/contacto' },
                ].map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-[#8899AA] hover:text-white transition-colors text-sm font-light flex items-center gap-1.5 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-orto-cyan transition-all duration-300 shrink-0" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.07] pt-7 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#556677] text-xs font-light">
              &copy; {new Date().getFullYear()} ORTOPROTEC — Centro Clínico de Ortopedia. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-5">
              <Link to="#" className="text-[#556677] hover:text-white transition-colors text-xs font-light">Política de Privacidad</Link>
              <span className="text-white/10">|</span>
              <Link to="#" className="text-[#556677] hover:text-white transition-colors text-xs font-light">Términos de Servicio</Link>
              <span className="text-white/10">|</span>
              <span className="text-[#556677] text-xs font-light">Fundada en 2001</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
