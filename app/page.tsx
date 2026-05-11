'use client'

import { Menu, X, ArrowRight, CheckCircle2, Zap, Users, BarChart3, Shield, Clock, Phone, Mail, MapPin, Star, TrendingUp } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('starter')

  const features = [
    {
      icon: TrendingUp,
      title: 'Gesión Inteligente de Inventario',
      description: 'Administra miles de vehículos con fotos, especificaciones y precios actualizados en tiempo real.',
    },
    {
      icon: Users,
      title: 'Conecta con Compradores',
      description: 'Alcanza a miles de clientes potenciales buscando automóviles en tu región cada día.',
    },
    {
      icon: Zap,
      title: 'Publicación Ultra Rápida',
      description: 'Publica un vehículo en menos de 2 minutos con nuestro formulario intuitivo y optimizado.',
    },
    {
      icon: BarChart3,
      title: 'Analytics Avanzado',
      description: 'Visualiza visitantes, consultas y estadísticas detalladas de cada anuncio en tu dashboard.',
    },
    {
      icon: Shield,
      title: 'Transacciones Seguras',
      description: 'Verifica compradores, protege tus datos y gestiona documentos de forma segura en la plataforma.',
    },
    {
      icon: Clock,
      title: 'Disponible 24/7',
      description: 'Tu tienda abierta todos los días. Los compradores pueden ver tus autos en cualquier momento.',
    },
  ]

  const testimonials = [
    {
      name: 'Carlos Hernández',
      role: 'Propietario de Concesionario',
      company: 'Hernández Autos CDMX',
      image: '🏢',
      text: 'Incrementé mis ventas en un 65% en apenas tres meses. AutoVentas nos conectó con compradores que antes no alcanzábamos.',
      rating: 5,
    },
    {
      name: 'María López',
      role: 'Vendedor Independiente',
      company: 'Guadalajara, Jalisco',
      image: '👩‍💼',
      text: 'Vendí mi inventario mucho más rápido. La plataforma es súper fácil de usar y los compradores son serios.',
      rating: 5,
    },
    {
      name: 'Roberto Sánchez',
      role: 'Gerente de Ventas',
      company: 'Grupo Automotriz Premier',
      image: '👨‍💼',
      text: 'El dashboard es increíble. Veo exactamente dónde están mis oportunidades. Recomendamos AutoVentas a todos.',
      rating: 5,
    },
  ]

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Iniciador',
      price: '499',
      period: 'mes',
      description: 'Perfecto para comenzar',
      features: [
        'Hasta 10 anuncios simultáneos',
        'Dashboard básico',
        'Soporte por email',
        'Fotos ilimitadas',
        'Análisis de vistas',
      ],
      cta: 'Comenzar Ahora',
      highlighted: false,
    },
    {
      id: 'professional',
      name: 'Profesional',
      price: '999',
      period: 'mes',
      description: 'Más vendedor promedio',
      features: [
        'Hasta 50 anuncios simultáneos',
        'Dashboard avanzado',
        'Soporte 24/7 por teléfono',
        'Fotos & video HD',
        'Analytics detallado',
        'Etiquetado inteligente',
        'Integración con redes sociales',
      ],
      cta: 'Prueba Gratis 7 Días',
      highlighted: true,
    },
    {
      id: 'enterprise',
      name: 'Empresarial',
      price: 'Personalizado',
      period: 'mes',
      description: 'Solución para grandes flotas',
      features: [
        'Anuncios ilimitados',
        'Dashboard personalizado',
        'Gestor de cuenta dedicado',
        'API y webhooks',
        'Consultoría de precios',
        'Capacitación del equipo',
        'SLA garantizado',
      ],
      cta: 'Contacta Ventas',
      highlighted: false,
    },
  ]

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
      <Star key={i} size={16} className="fill-accent-500 text-accent-500" />
    ))
  }

  return (
    <div className="min-h-screen bg-automotive-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-automotive-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-black text-accent-600">⚡</div>
              <span className="text-xl font-black text-automotive-900">AutoVentas</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-automotive-700 hover:text-accent-600 transition font-medium">Características</a>
              <a href="#testimonials" className="text-automotive-700 hover:text-accent-600 transition font-medium">Testimonios</a>
              <a href="#pricing" className="text-automotive-700 hover:text-accent-600 transition font-medium">Precios</a>
              <a href="#contact" className="text-automotive-700 hover:text-accent-600 transition font-medium">Contacto</a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="px-6 py-2 bg-gradient-accent text-white rounded-lg font-semibold hover:shadow-lg transition">
                Acceder
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-automotive-900" />
              ) : (
                <Menu size={24} className="text-automotive-900" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-automotive-200">
              <a href="#features" className="block py-2 text-automotive-700 hover:text-accent-600 font-medium">Características</a>
              <a href="#testimonials" className="block py-2 text-automotive-700 hover:text-accent-600 font-medium">Testimonios</a>
              <a href="#pricing" className="block py-2 text-automotive-700 hover:text-accent-600 font-medium">Precios</a>
              <a href="#contact" className="block py-2 text-automotive-700 hover:text-accent-600 font-medium">Contacto</a>
              <button className="w-full mt-4 px-4 py-2 bg-gradient-accent text-white rounded-lg font-semibold">
                Acceder
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-hero text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
                Vende Autos
                <span className="block text-accent-400">5x Más Rápido</span>
              </h1>
              <p className="text-xl text-automotive-100 mb-8 leading-relaxed">
                La plataforma inteligente que conecta vendedores con compradores serios. Gestiona tu inventario, publica anuncios y cierra ventas desde un solo lugar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-bold text-lg transition transform hover:scale-105 flex items-center justify-center gap-2">
                  Comenzar Gratis <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold text-lg transition border border-white/30">
                  Ver Demo
                </button>
              </div>
              <p className="text-automotive-200 text-sm mt-6">
                ✓ Sin tarjeta requerida • ✓ Acceso inmediato • ✓ Soporte en español
              </p>
            </div>

            {/* Hero Illustration */}
            <div className="hidden md:block">
              <div className="relative h-96 animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-accent-600 rounded-2xl opacity-20 blur-2xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full flex flex-col items-center justify-center">
                  <div className="text-6xl mb-4">🚗</div>
                  <p className="text-white/80 text-center text-sm font-medium">Panel de Control AutoVentas</p>
                  <div className="mt-6 space-y-2 w-full">
                    <div className="h-2 bg-white/20 rounded-full w-3/4 mx-auto"></div>
                    <div className="h-2 bg-white/20 rounded-full w-1/2 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-b border-automotive-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-automotive-600 font-semibold text-sm uppercase tracking-wide">Confiado por</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-black text-automotive-900">2,400+</p>
              <p className="text-automotive-600 text-sm">Vendedores Activos</p>
            </div>
            <div>
              <p className="text-3xl font-black text-automotive-900">45,000+</p>
              <p className="text-automotive-600 text-sm">Autos Vendidos</p>
            </div>
            <div>
              <p className="text-3xl font-black text-automotive-900">$380M</p>
              <p className="text-automotive-600 text-sm">Valor Transado</p>
            </div>
            <div>
              <p className="text-3xl font-black text-automotive-900">15</p>
              <p className="text-automotive-600 text-sm">Días Promedio Venta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 bg-automotive-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-automotive-900 mb-4">Todo lo que Necesitas para Vender</h2>
            <p className="text-xl text-automotive-600 max-w-2xl mx-auto">Herramientas poderosas diseñadas específicamente para vendedores de autos modernos.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 shadow-card hover:shadow-2xl transition transform hover:-translate-y-2 border border-automotive-200/50"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-6">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-automotive-900 mb-3">{feature.title}</h3>
                  <p className="text-automotive-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-automotive-900 mb-4">3 Pasos Simples</h2>
            <p className="text-xl text-automotive-600">Comienza a vender en menos de 5 minutos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Registrate', desc: 'Crea tu cuenta en AutoVentas en menos de 2 minutos.' },
              { step: 2, title: 'Publica Autos', desc: 'Sube fotos, especificaciones y precio de tus vehículos.' },
              { step: 3, title: 'Vende Más', desc: 'Conecta con compradores reales y cierra transacciones.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-accent text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-automotive-900 mb-2">{item.title}</h3>
                <p className="text-automotive-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 md:py-28 bg-automotive-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-automotive-900 mb-4">Lo que Dicen Nuestros Usuarios</h2>
            <p className="text-xl text-automotive-600">Miles de vendedores ya venden más con AutoVentas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-card border border-automotive-200/50">
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-automotive-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <p className="font-bold text-automotive-900">{testimonial.name}</p>
                    <p className="text-sm text-automotive-600">{testimonial.role}</p>
                    <p className="text-xs text-automotive-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-automotive-900 mb-4">Planes Simples y Transparentes</h2>
            <p className="text-xl text-automotive-600 mb-8">Sin contratos, sin sorpresas. Cancela cuando quieras.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 transition transform hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-gradient-accent text-white shadow-2xl relative md:scale-105'
                    : 'bg-automotive-50 border-2 border-automotive-200 text-automotive-900'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-white text-accent-600 rounded-full text-sm font-bold">
                    MÁS POPULAR
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-automotive-900'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${
                  plan.highlighted ? 'text-white/80' : 'text-automotive-600'
                }`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className={`text-5xl font-black ${
                    plan.highlighted ? 'text-white' : 'text-automotive-900'
                  }`}>
                    {plan.price === 'Personalizado' ? plan.price : `$${plan.price}`}
                  </span>
                  {plan.price !== 'Personalizado' && (
                    <span className={`text-sm ${
                      plan.highlighted ? 'text-white/80' : 'text-automotive-600'
                    }`}>
                      /{plan.period}
                    </span>
                  )}
                </div>
                <button className={`w-full py-3 rounded-lg font-bold mb-8 transition ${
                  plan.highlighted
                    ? 'bg-white text-accent-600 hover:bg-automotive-50'
                    : 'bg-accent-500 text-white hover:bg-accent-600'
                }`}>
                  {plan.cta}
                </button>
                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className={plan.highlighted ? 'text-white' : 'text-accent-600'} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-hero text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">¿Listo para Vender Más?</h2>
          <p className="text-xl text-automotive-100 mb-8">Únete a 2,400+ vendedores que ya están ganando más con AutoVentas.</p>
          <button className="px-10 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-bold text-lg transition transform hover:scale-105">
            Registrate Gratis Ahora
          </button>
          <p className="text-automotive-300 text-sm mt-6">No se requiere tarjeta de crédito</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-automotive-900 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-2xl">⚡</div>
                <span className="text-xl font-black">AutoVentas</span>
              </div>
              <p className="text-automotive-300 text-sm">La plataforma más moderna para vender autos en línea.</p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-bold text-lg mb-4">Producto</h4>
              <ul className="space-y-2 text-automotive-300 text-sm">
                <li><a href="#features" className="hover:text-accent-400 transition">Características</a></li>
                <li><a href="#pricing" className="hover:text-accent-400 transition">Precios</a></li>
                <li><a href="#" className="hover:text-accent-400 transition">Seguridad</a></li>
                <li><a href="#" className="hover:text-accent-400 transition">Roadmap</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-lg mb-4">Empresa</h4>
              <ul className="space-y-2 text-automotive-300 text-sm">
                <li><a href="#" className="hover:text-accent-400 transition">Acerca de</a></li>
                <li><a href="#" className="hover:text-accent-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-accent-400 transition">Términos</a></li>
                <li><a href="#" className="hover:text-accent-400 transition">Privacidad</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contacto</h4>
              <div className="space-y-3 text-automotive-300 text-sm">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <a href="tel:+525512345678" className="hover:text-accent-400 transition">+52 55 1234 5678</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:hola@autoventas.mx" className="hover:text-accent-400 transition">hola@autoventas.mx</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Ciudad de México</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-automotive-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-automotive-400 text-sm">&copy; 2024 AutoVentas. Todos los derechos reservados.</p>
              <div className="flex gap-6 text-automotive-400 text-sm">
                <a href="#" className="hover:text-accent-400 transition">Twitter</a>
                <a href="#" className="hover:text-accent-400 transition">Facebook</a>
                <a href="#" className="hover:text-accent-400 transition">Instagram</a>
                <a href="#" className="hover:text-accent-400 transition">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
