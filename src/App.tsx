/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Stethoscope, 
  Syringe, 
  Scissors, 
  Clock, 
  ShieldCheck, 
  Star, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight,
  Heart,
  Award,
  Zap
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Reservar', href: '#reservar' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-apple-blue rounded-xl flex items-center justify-center text-white shadow-lg shadow-apple-blue/20">
            <Heart size={24} fill="currentColor" />
          </div>
          <span className="text-xl font-bold tracking-tight">VetPremium</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-apple-text/60 hover:text-apple-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="text-apple-blue font-semibold text-sm hidden lg:block">
            Llamar: +57 316 536 2934
          </div>
          <a 
            href="#reservar" 
            className="bg-apple-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-apple-blue/30"
          >
            Agendar Cita
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-slate-100 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-slate-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#reservar" 
                className="bg-brand-blue text-white w-full py-4 rounded-2xl text-center font-bold"
                onClick={() => setIsMenuOpen(false)}
              >
                Agendar Cita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Stethoscope size={32} />,
      title: "Consulta General",
      desc: "Revisiones preventivas y diagnóstico integral para mantener a tu mascota sana.",
      color: "bg-blue-50 text-apple-blue"
    },
    {
      icon: <Syringe size={32} />,
      title: "Vacunación",
      desc: "Esquemas completos de vacunación y desparasitación con las mejores marcas.",
      color: "bg-green-50 text-apple-green"
    },
    {
      icon: <Zap size={32} />,
      title: "Cirugía",
      desc: "Quirófano equipado con tecnología láser y monitoreo constante.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Clock size={32} />,
      title: "Urgencias 24/7",
      desc: "Estamos listos para atender cualquier emergencia en cualquier momento.",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: <Scissors size={32} />,
      title: "Grooming Premium",
      desc: "Estética canina y felina con productos hipoalergénicos y spa.",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Laboratorio",
      desc: "Resultados rápidos y precisos con nuestro laboratorio clínico interno.",
      color: "bg-teal-50 text-teal-600"
    }
  ];

  return (
    <section id="servicios">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-sm font-bold text-apple-blue uppercase tracking-widest mb-4">Nuestros Servicios</h2>
        <p className="text-4xl font-bold tracking-tight text-apple-text">Cuidado integral para cada etapa de su vida.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bento-card p-10"
          >
            <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8`}>
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-apple-text/60 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Benefits = () => {
  return (
    <section id="beneficios">
      <div className="grid lg:grid-cols-2 gap-6 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img src="https://picsum.photos/seed/vet1/400/500" alt="Vet" className="rounded-bento shadow-bento" referrerPolicy="no-referrer" />
              <div className="bg-apple-blue p-8 rounded-bento text-white shadow-bento">
                <p className="text-4xl font-bold mb-1">15+</p>
                <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Años de Experiencia</p>
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="bento-card p-8">
                <p className="text-4xl font-bold mb-1 text-apple-blue">24/7</p>
                <p className="text-sm font-medium text-apple-text/50 uppercase tracking-wider">Disponibilidad</p>
              </div>
              <img src="https://picsum.photos/seed/vet2/400/500" alt="Vet" className="rounded-bento shadow-bento" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 p-6">
          <h2 className="text-sm font-bold text-apple-blue uppercase tracking-widest mb-4">¿Por qué elegirnos?</h2>
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight">La diferencia está en el <span className="text-apple-blue italic">amor</span> y la tecnología.</h3>
          
          <div className="space-y-8">
            {[
              { title: "Atención Humana", desc: "No son solo pacientes, son parte de nuestra familia. Tratamos a cada mascota con ternura." },
              { title: "Tecnología Moderna", desc: "Equipos de última generación para diagnósticos precisos y cirugías menos invasivas." },
              { title: "Citas Rápidas", desc: "Agenda en segundos por WhatsApp. Valoramos tu tiempo y la salud de tu mascota." }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bento-card flex items-center justify-center text-apple-blue font-bold">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-apple-text/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Laura Martínez",
      pet: "Luna (Golden Retriever)",
      text: "La mejor veterinaria de Bogotá. Atendieron a Luna de urgencia a las 3 AM y el trato fue impecable. ¡Gracias!",
      img: "https://picsum.photos/seed/p1/100/100"
    },
    {
      name: "Carlos Ruiz",
      pet: "Simba (Gato Persa)",
      text: "El servicio de grooming es otro nivel. Simba sale feliz y oliendo delicioso. Muy profesionales.",
      img: "https://picsum.photos/seed/p2/100/100"
    },
    {
      name: "Andrea Gómez",
      pet: "Max (Bulldog Francés)",
      text: "Tecnología de punta. Le hicieron una cirugía láser a Max y la recuperación fue increíblemente rápida.",
      img: "https://picsum.photos/seed/p3/100/100"
    }
  ];

  return (
    <section id="testimonios">
      <div className="text-center mb-12">
        <h2 className="text-sm font-bold text-apple-blue uppercase tracking-widest mb-4">Testimonios</h2>
        <p className="text-4xl font-bold tracking-tight">Lo que dicen los padres de mascotas.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((rev, i) => (
          <div key={i} className="bento-card p-8">
            <div className="flex text-yellow-400 mb-6">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
            </div>
            <p className="text-apple-text italic mb-8 leading-relaxed">"{rev.text}"</p>
            <div className="flex items-center gap-4">
              <img src={rev.img} alt={rev.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <p className="font-bold">{rev.name}</p>
                <p className="text-xs text-apple-text/50 font-medium uppercase tracking-wider">{rev.pet}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section>
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-sm font-bold text-apple-blue uppercase tracking-widest mb-4">Galería</h2>
          <p className="text-4xl font-bold tracking-tight">Instalaciones diseñadas para su bienestar.</p>
        </div>
        <p className="text-apple-text/50 font-medium">Espacios limpios, modernos y seguros.</p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex-shrink-0 w-[300px] md:w-[450px] aspect-[4/3] rounded-bento overflow-hidden shadow-bento">
            <img 
              src={`https://picsum.photos/seed/gallery${i}/900/675`} 
              alt="Instalaciones" 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-apple-blue rounded-xl flex items-center justify-center text-white">
                <Heart size={24} fill="currentColor" />
              </div>
              <span className="text-2xl font-bold tracking-tight">VetPremium</span>
            </div>
            <p className="text-apple-text/60 leading-relaxed mb-8">
              Líderes en medicina veterinaria preventiva y de urgencias en Bogotá. Tu mascota en las mejores manos.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Navegación</h4>
            <ul className="space-y-4 text-apple-text/60">
              <li><a href="#servicios" className="hover:text-apple-blue transition-colors">Servicios</a></li>
              <li><a href="#beneficios" className="hover:text-apple-blue transition-colors">Beneficios</a></li>
              <li><a href="#testimonios" className="hover:text-apple-blue transition-colors">Testimonios</a></li>
              <li><a href="#reservar" className="hover:text-apple-blue transition-colors">Reservar Cita</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Servicios</h4>
            <ul className="space-y-4 text-apple-text/60">
              <li>Consulta General</li>
              <li>Urgencias 24/7</li>
              <li>Cirugía Láser</li>
              <li>Grooming & Spa</li>
              <li>Laboratorio Clínico</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-apple-text/60">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-apple-blue mt-1" />
                <span>Av. Calle 127 #15-32, Bogotá, Colombia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-apple-blue" />
                <span>+57 316 536 2934</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={20} className="text-apple-blue" />
                <span>Abierto 24 Horas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-apple-text/40">
          <p>© 2024 VetPremium Colombia. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-apple-blue transition-colors">Privacidad</a>
            <a href="#" className="hover:text-apple-blue transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppFloat = () => {
  return (
    <motion.a
      href="https://wa.me/573165362934"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40"
    >
      <MessageCircle size={32} fill="currentColor" />
    </motion.a>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-apple-blue/10 selection:text-apple-blue">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {/* Hero Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bento-card p-12 flex flex-col justify-center bg-linear-to-br from-white to-blue-50"
          >
            <p className="text-apple-blue font-bold uppercase tracking-widest text-xs mb-4">Exclusividad y Ternura</p>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Cuidado superior para tu mejor amigo en Bogotá.
            </h1>
            <p className="text-lg text-apple-text/60 mb-10 max-w-lg leading-relaxed">
              Tecnología médica de vanguardia con un trato humano excepcional. Somos la clínica #1 en atención premium.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              {['✨ Alta Tecnología', '⏱️ Citas Rápidas', '👨‍⚕️ Especialistas', '🧼 Grooming Spa'].map((badge) => (
                <div key={badge} className="bg-apple-bg px-4 py-3 rounded-xl text-xs font-bold text-center text-apple-text/70">
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:row-span-2 bento-card p-10 border-apple-blue/10"
          >
            <ReservationFormContent />
          </motion.div>

          {/* Service Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bento-card p-10 flex flex-col justify-between relative"
          >
            <div className="absolute top-6 right-6 bg-red-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">S.O.S</div>
            <div className="w-12 h-12 bg-apple-bg rounded-xl flex items-center justify-center text-2xl mb-6">🚑</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Urgencias 24/7</h3>
              <p className="text-sm text-apple-text/60 leading-relaxed">Laboratorio propio y quirófanos listos para cualquier emergencia en Bogotá.</p>
            </div>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bento-card p-10 flex flex-col justify-between glass"
          >
            <div className="w-12 h-12 bg-apple-bg rounded-xl flex items-center justify-center text-2xl mb-6">🛁</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Grooming & Spa</h3>
              <p className="text-sm text-apple-text/60 leading-relaxed">Limpieza profunda y estilismo con productos orgánicos hipoalergénicos.</p>
            </div>
          </motion.div>
        </div>

        {/* Other Sections as Bento Blocks */}
        <div className="space-y-24">
          <Services />
          <Benefits />
          <Testimonials />
          <Gallery />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

// Extract ReservationForm logic to a content component to avoid duplication
const ReservationFormContent = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    servicio: 'Consulta General',
    fecha: '',
    mensaje: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido';
    const phoneRegex = /^3\d{9}$/;
    if (!formData.telefono) {
      newErrors.telefono = 'El teléfono es requerido';
    } else if (!phoneRegex.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'Debe empezar por 3 y tener 10 dígitos';
    }
    if (!formData.fecha) newErrors.fecha = 'La fecha es requerida';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      const message = `Hola VetPremium, quiero agendar una cita para ${formData.servicio}, mi nombre es ${formData.nombre} para el día ${formData.fecha}.`;
      const whatsappUrl = `https://wa.me/573165362934?text=${encodeURIComponent(message)}`;
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        setIsSubmitting(false);
      }, 800);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-2xl font-bold mb-8">Agenda tu Cita Premium</h2>
      <form onSubmit={handleSubmit} className="space-y-5 flex-1">
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-apple-text/50 uppercase tracking-wider">Nombre del Dueño</label>
          <input 
            type="text" 
            className={`w-full px-4 py-3 bg-apple-bg border ${errors.nombre ? 'border-red-500' : 'border-slate-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-apple-blue/20 focus:border-apple-blue transition-all text-sm`}
            placeholder="Ej: Carlos Pérez"
            value={formData.nombre}
            onChange={(e) => setFormData({...formData, nombre: e.target.value})}
          />
          {errors.nombre && <p className="text-red-500 text-[10px] font-bold">{errors.nombre}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-apple-text/50 uppercase tracking-wider">Teléfono (Móvil Colombia)</label>
          <input 
            type="tel" 
            className={`w-full px-4 py-3 bg-apple-bg border ${errors.telefono ? 'border-red-500' : 'border-slate-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-apple-blue/20 focus:border-apple-blue transition-all text-sm`}
            placeholder="300 123 4567"
            value={formData.telefono}
            onChange={(e) => setFormData({...formData, telefono: e.target.value})}
          />
          {errors.telefono && <p className="text-red-500 text-[10px] font-bold">{errors.telefono}</p>}
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-apple-text/50 uppercase tracking-wider">Servicio Requerido</label>
          <select 
            className="w-full px-4 py-3 bg-apple-bg border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-apple-blue/20 focus:border-apple-blue transition-all text-sm appearance-none"
            value={formData.servicio}
            onChange={(e) => setFormData({...formData, servicio: e.target.value})}
          >
            <option>Consulta General</option>
            <option>Vacunación</option>
            <option>Cirugía Especializada</option>
            <option>Urgencias 24/7</option>
            <option>Grooming & Spa</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-apple-text/50 uppercase tracking-wider">Fecha Preferencial</label>
          <input 
            type="date" 
            className={`w-full px-4 py-3 bg-apple-bg border ${errors.fecha ? 'border-red-500' : 'border-slate-200'} rounded-xl focus:outline-none focus:ring-2 focus:ring-apple-blue/20 focus:border-apple-blue transition-all text-sm`}
            value={formData.fecha}
            onChange={(e) => setFormData({...formData, fecha: e.target.value})}
          />
          {errors.fecha && <p className="text-red-500 text-[10px] font-bold">{errors.fecha}</p>}
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-apple-blue text-white py-4 rounded-xl font-bold text-base hover:bg-blue-600 transition-all shadow-lg shadow-apple-blue/20 disabled:opacity-50 mt-4"
        >
          {isSubmitting ? 'Procesando...' : 'Solicitar Reserva'}
        </button>
      </form>
      <p className="text-[10px] text-apple-text/40 text-center mt-6">
        Confirmamos tu cita en menos de 15 minutos vía WhatsApp.
      </p>
    </div>
  );
};
