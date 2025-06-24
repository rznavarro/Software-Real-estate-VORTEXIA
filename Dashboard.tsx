import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Home, Users, Phone, Target, Eye, MessageSquare, X, Plus, User, Building, Calendar, Mail } from 'lucide-react';

const Dashboard = () => {
  // Estados para modales y funcionalidades
  const [showCallModal, setShowCallModal] = useState(false);
  const [showOpportunityModal, setShowOpportunityModal] = useState(false);
  const [showOptimizeModal, setShowOptimizeModal] = useState(false);
  const [showPropertyModal, setShowPropertyModal] = useState(false);
  const [showLeadsModal, setShowLeadsModal] = useState(false);
  const [selectedClient, setSelectedClient] = useState<any>(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);

  // Datos de clientes VIP para llamadas
  const vipClients = [
    { name: 'María Rodríguez', phone: '+1 (555) 123-4567', property: 'Penthouse Premium', budget: '$800,000', priority: 'URGENTE' },
    { name: 'Carlos Mendoza', phone: '+1 (555) 234-5678', property: 'Casa Moderna Zona Norte', budget: '$450,000', priority: 'ALTA' },
    { name: 'Ana García', phone: '+1 (555) 345-6789', property: 'Apartamento Centro', budget: '$280,000', priority: 'ALTA' },
    { name: 'Roberto Silva', phone: '+1 (555) 456-7890', property: 'Villa con Piscina', budget: '$650,000', priority: 'MEDIA' },
    { name: 'Sofía López', phone: '+1 (555) 567-8901', property: 'Apartamento Lujo', budget: '$380,000', priority: 'ALTA' }
  ];

  // Datos de propiedades sin actividad
  const inactiveProperties = [
    { name: 'Penthouse Premium', days: 32, views: 203, price: '$890,000', action: 'Reducir precio' },
    { name: 'Casa Zona Norte', days: 15, views: 47, price: '$450,000', action: 'Mejorar fotos' },
    { name: 'Local Comercial', days: 45, views: 89, price: '$290,000', action: 'Cambiar estrategia' }
  ];

  // Datos de leads calificados
  const qualifiedLeads = [
    { name: 'Juan Pérez', source: 'Referencia', budget: '$420,000', interest: 'Casa Familiar', status: 'Nuevo' },
    { name: 'Diego Martín', source: 'Google Ads', budget: '$290,000', interest: 'Local Comercial', status: 'Calificado' },
    { name: 'Laura Torres', source: 'Redes Sociales', budget: '$550,000', interest: 'Apartamento Premium', status: 'Nuevo' },
    { name: 'Miguel Herrera', source: 'Sitio Web', budget: '$380,000', interest: 'Casa Familiar', status: 'Calificado' }
  ];

  const stats = [
    {
      title: 'Ingresos Este Mes',
      value: '$847,500',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Gastos Este Mes',
      value: '$156,200',
      change: '-3.2%',
      trend: 'down',
      icon: TrendingDown,
      color: 'red'
    },
    {
      title: 'Propiedades Vendidas',
      value: '23',
      change: '+8 este mes',
      trend: 'up',
      icon: Home,
      color: 'blue'
    },
    {
      title: 'Oportunidades Activas',
      value: '47',
      change: '12 muy calientes',
      trend: 'up',
      icon: Users,
      color: 'purple'
    }
  ];

  const recentSales = [
    { property: 'Casa Moderna Zona Norte', client: 'Carlos Mendoza', amount: '$450,000', date: 'Hoy', profit: '$67,500' },
    { property: 'Apartamento Centro', client: 'Ana García', amount: '$280,000', date: 'Ayer', profit: '$42,000' },
    { property: 'Villa con Piscina', client: 'Roberto Silva', amount: '$650,000', date: '2 días', profit: '$97,500' },
    { property: 'Oficina Comercial', client: 'Empresa XYZ', amount: '$320,000', date: '3 días', profit: '$48,000' }
  ];

  const hotOpportunities = [
    { client: 'María Rodríguez', property: 'Penthouse Premium', budget: '$800,000', status: 'Negociando', priority: 'URGENTE', lastContact: 'Hoy' },
    { client: 'Juan Pérez', property: 'Casa Familiar', budget: '$420,000', status: 'Interesado', priority: 'ALTA', lastContact: '1 día' },
    { client: 'Sofía López', property: 'Apartamento Lujo', budget: '$380,000', status: 'Visitó 3 veces', priority: 'ALTA', lastContact: '2 días' },
    { client: 'Diego Martín', property: 'Local Comercial', budget: '$290,000', status: 'Pidió financiación', priority: 'MEDIA', lastContact: '3 días' }
  ];

  const leadSources = [
    { source: 'Referencias', leads: 23, conversion: '34%', revenue: '$245,000' },
    { source: 'Redes Sociales', leads: 45, conversion: '18%', revenue: '$156,000' },
    { source: 'Google Ads', leads: 67, conversion: '12%', revenue: '$89,000' },
    { source: 'Sitio Web', leads: 34, conversion: '22%', revenue: '$134,000' }
  ];

  // Funciones para manejar acciones
  const handleCallClient = (client: any) => {
    setSelectedClient(client);
    setShowCallModal(true);
  };

  const handleCallOpportunity = (opportunity: any) => {
    setSelectedOpportunity(opportunity);
    setShowCallModal(true);
  };

  const handleOptimizeChannels = () => {
    setShowOptimizeModal(true);
  };

  const handlePropertyAction = () => {
    setShowPropertyModal(true);
  };

  const handleLeadsAction = () => {
    setShowLeadsModal(true);
  };

  const handleNewOpportunity = () => {
    setShowOpportunityModal(true);
  };

  const handleCall = (phone: string, name: string) => {
    // Simular llamada telefónica
    alert(`Llamando a ${name} al ${phone}...`);
    setShowCallModal(false);
  };

  const handleWhatsApp = (phone: string, name: string) => {
    // Abrir WhatsApp
    const message = `Hola ${name}, soy de VORTEXIA. ¿Tienes un momento para hablar sobre tu interés en propiedades?`;
    const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setShowCallModal(false);
  };

  const handleEmail = (name: string) => {
    // Abrir cliente de email
    const subject = 'Propuesta Personalizada - VORTEXIA';
    const body = `Estimado/a ${name},\n\nEspero que esté bien. Le escribo para presentarle nuestras mejores opciones de propiedades que se ajustan a sus necesidades.\n\n¿Podríamos agendar una llamada para discutir los detalles?\n\nSaludos cordiales,\nEquipo VORTEXIA`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
    setShowCallModal(false);
  };

  return (
    <div className="space-y-8">
      {/* Header con acciones rápidas */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tu Empresa Hoy</h1>
          <p className="text-gray-600 text-lg">Todo lo importante para tomar decisiones</p>
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={() => setShowCallModal(true)}
            className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors flex items-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Llamar Cliente VIP</span>
          </button>
          <button 
            onClick={handleNewOpportunity}
            className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2"
          >
            <Target className="w-5 h-5" />
            <span>Nueva Oportunidad</span>
          </button>
        </div>
      </div>

      {/* Main Stats - Más prominentes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                stat.color === 'green' ? 'bg-green-50 border-2 border-green-200' :
                stat.color === 'red' ? 'bg-red-50 border-2 border-red-200' :
                stat.color === 'blue' ? 'bg-blue-50 border-2 border-blue-200' : 'bg-purple-50 border-2 border-purple-200'
              }`}>
                <stat.icon className={`w-8 h-8 ${
                  stat.color === 'green' ? 'text-green-600' :
                  stat.color === 'red' ? 'text-red-600' :
                  stat.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                }`} />
              </div>
              <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-semibold ${
                stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {stat.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                <span>{stat.change}</span>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
            <p className="text-gray-600 font-medium">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Sección de Generación de Clientes */}
      <div className="bg-gradient-to-r from-gray-900 to-red-900 rounded-3xl p-8 text-white">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Generación de Clientes</h2>
            <p className="text-gray-300">De dónde vienen tus mejores oportunidades</p>
          </div>
          <button 
            onClick={handleOptimizeChannels}
            className="bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Optimizar Canales
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {leadSources.map((source, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-bold mb-4">{source.source}</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Leads:</span>
                  <span className="font-bold">{source.leads}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Conversión:</span>
                  <span className="font-bold text-green-400">{source.conversion}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Ingresos:</span>
                  <span className="font-bold text-yellow-400">{source.revenue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ventas Recientes & Oportunidades Calientes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Ventas Recientes */}
        <div className="bg-white rounded-3xl p-8 border-2 border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Ventas Recientes</h2>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              +$255K Ganancia
            </span>
          </div>
          <div className="space-y-4">
            {recentSales.map((sale, index) => (
              <div key={index} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg">{sale.property}</h3>
                  <p className="text-gray-600">{sale.client}</p>
                  <p className="text-sm text-gray-500">{sale.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900 text-xl">{sale.amount}</p>
                  <p className="text-green-600 font-semibold">+{sale.profit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Oportunidades Calientes */}
        <div className="bg-white rounded-3xl p-8 border-2 border-red-100">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Oportunidades Calientes</h2>
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
              $1.89M Potencial
            </span>
          </div>
          <div className="space-y-4">
            {hotOpportunities.map((opp, index) => (
              <div key={index} className="p-6 bg-red-50 rounded-2xl border border-red-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-bold text-gray-900 text-lg">{opp.client}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        opp.priority === 'URGENTE' ? 'bg-red-600 text-white' :
                        opp.priority === 'ALTA' ? 'bg-orange-500 text-white' : 'bg-yellow-500 text-white'
                      }`}>
                        {opp.priority}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-1">{opp.property}</p>
                    <p className="text-sm text-red-600 font-medium">{opp.status}</p>
                    <p className="text-xs text-gray-500">Último contacto: {opp.lastContact}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900 text-xl">{opp.budget}</p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleCallOpportunity(opp)}
                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Llamar Ahora</span>
                  </button>
                  <button 
                    onClick={() => handleWhatsApp('+1 (555) 123-4567', opp.client)}
                    className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Mensaje</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Acciones Estratégicas */}
      <div className="bg-white rounded-3xl p-8 border-2 border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Acciones Estratégicas de Hoy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button 
            onClick={() => setShowCallModal(true)}
            className="p-6 bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl text-left hover:from-red-100 hover:to-red-200 transition-all duration-300 group"
          >
            <Phone className="w-8 h-8 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 text-lg mb-2">Llamadas Prioritarias</h3>
            <p className="text-gray-600 mb-3">5 clientes VIP esperando respuesta</p>
            <span className="text-red-600 font-semibold">Acción requerida</span>
          </button>
          
          <button 
            onClick={handlePropertyAction}
            className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-2xl text-left hover:from-gray-100 hover:to-gray-200 transition-all duration-300 group"
          >
            <Eye className="w-8 h-8 text-gray-700 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 text-lg mb-2">Propiedades Sin Actividad</h3>
            <p className="text-gray-600 mb-3">3 propiedades necesitan atención</p>
            <span className="text-gray-700 font-semibold">Revisar estrategia</span>
          </button>
          
          <button 
            onClick={handleLeadsAction}
            className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl text-left hover:from-green-100 hover:to-green-200 transition-all duration-300 group"
          >
            <Target className="w-8 h-8 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 text-lg mb-2">Nuevas Oportunidades</h3>
            <p className="text-gray-600 mb-3">12 leads calificados esta semana</p>
            <span className="text-green-600 font-semibold">Contactar ahora</span>
          </button>
        </div>
      </div>

      {/* Modal de Llamadas */}
      {showCallModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Llamadas Prioritarias</h2>
                <p className="text-gray-600 mt-1">Selecciona un cliente para contactar</p>
              </div>
              <button 
                onClick={() => setShowCallModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {vipClients.map((client, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{client.name}</h3>
                      <p className="text-gray-600">{client.property}</p>
                      <p className="text-sm text-gray-500">Presupuesto: {client.budget}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      client.priority === 'URGENTE' ? 'bg-red-600 text-white' :
                      client.priority === 'ALTA' ? 'bg-orange-500 text-white' : 'bg-yellow-500 text-white'
                    }`}>
                      {client.priority}
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => handleCall(client.phone, client.name)}
                      className="flex-1 bg-red-600 text-white py-3 px-4 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 font-semibold"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Llamar</span>
                    </button>
                    <button 
                      onClick={() => handleWhatsApp(client.phone, client.name)}
                      className="flex-1 bg-gray-900 text-white py-3 px-4 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 font-semibold"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span>WhatsApp</span>
                    </button>
                    <button 
                      onClick={() => handleEmail(client.name)}
                      className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-semibold"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal de Optimización de Canales */}
      {showOptimizeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Optimización de Canales</h2>
                <p className="text-gray-600 mt-1">Estrategias para mejorar la generación de leads</p>
              </div>
              <button 
                onClick={() => setShowOptimizeModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                  <h3 className="font-bold text-green-800 text-lg mb-4">✅ Referencias (34% conversión)</h3>
                  <p className="text-green-700 mb-4">Tu mejor canal. Recomendaciones:</p>
                  <ul className="space-y-2 text-green-700">
                    <li>• Implementar programa de referidos</li>
                    <li>• Incentivos para clientes satisfechos</li>
                    <li>• Seguimiento personalizado</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                  <h3 className="font-bold text-yellow-800 text-lg mb-4">⚠️ Redes Sociales (18% conversión)</h3>
                  <p className="text-yellow-700 mb-4">Necesita mejora. Acciones:</p>
                  <ul className="space-y-2 text-yellow-700">
                    <li>• Contenido más atractivo</li>
                    <li>• Publicaciones diarias</li>
                    <li>• Interacción con seguidores</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                  <h3 className="font-bold text-red-800 text-lg mb-4">❌ Google Ads (12% conversión)</h3>
                  <p className="text-red-700 mb-4">Requiere optimización urgente:</p>
                  <ul className="space-y-2 text-red-700">
                    <li>• Revisar palabras clave</li>
                    <li>• Mejorar landing pages</li>
                    <li>• Ajustar presupuesto</li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-800 text-lg mb-4">📈 Sitio Web (22% conversión)</h3>
                  <p className="text-blue-700 mb-4">Potencial de mejora:</p>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Optimizar SEO</li>
                    <li>• Mejorar velocidad</li>
                    <li>• Añadir testimonios</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-4">Plan de Acción Inmediato</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button 
                    onClick={() => {
                      alert('Redirigiendo a Google Ads...');
                      setShowOptimizeModal(false);
                    }}
                    className="bg-red-600 text-white py-3 px-4 rounded-xl hover:bg-red-700 transition-colors font-semibold"
                  >
                    Optimizar Google Ads
                  </button>
                  <button 
                    onClick={() => {
                      alert('Abriendo editor del sitio web...');
                      setShowOptimizeModal(false);
                    }}
                    className="bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                  >
                    Mejorar Sitio Web
                  </button>
                  <button 
                    onClick={() => {
                      alert('Programa de referidos activado');
                      setShowOptimizeModal(false);
                    }}
                    className="bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-colors font-semibold"
                  >
                    Programa Referidos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Propiedades Sin Actividad */}
      {showPropertyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Propiedades Sin Actividad</h2>
                <p className="text-gray-600 mt-1">Propiedades que necesitan atención inmediata</p>
              </div>
              <button 
                onClick={() => setShowPropertyModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {inactiveProperties.map((property, index) => (
                <div key={index} className="bg-red-50 rounded-2xl p-6 border border-red-200">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-red-800 text-lg">{property.name}</h3>
                      <p className="text-red-600">{property.days} días sin actividad</p>
                      <p className="text-sm text-red-500">{property.views} vistas totales</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 text-xl">{property.price}</p>
                      <span className="text-red-600 font-semibold">{property.action}</span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => {
                        alert(`Reduciendo precio de ${property.name}...`);
                        setShowPropertyModal(false);
                      }}
                      className="flex-1 bg-red-600 text-white py-3 px-4 rounded-xl hover:bg-red-700 transition-colors font-semibold"
                    >
                      Reducir Precio
                    </button>
                    <button 
                      onClick={() => {
                        alert(`Programando nueva sesión de fotos para ${property.name}...`);
                        setShowPropertyModal(false);
                      }}
                      className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Mejorar Fotos
                    </button>
                    <button 
                      onClick={() => {
                        alert(`Cambiando estrategia de marketing para ${property.name}...`);
                        setShowPropertyModal(false);
                      }}
                      className="flex-1 bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-colors font-semibold"
                    >
                      Nueva Estrategia
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal de Leads Calificados */}
      {showLeadsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Leads Calificados</h2>
                <p className="text-gray-600 mt-1">Oportunidades listas para contactar</p>
              </div>
              <button 
                onClick={() => setShowLeadsModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {qualifiedLeads.map((lead, index) => (
                <div key={index} className="bg-green-50 rounded-2xl p-6 border border-green-200">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-bold text-green-800 text-lg">{lead.name}</h3>
                      <p className="text-green-600">Fuente: {lead.source}</p>
                      <p className="text-sm text-green-500">Interés: {lead.interest}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900 text-xl">{lead.budget}</p>
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {lead.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => {
                        alert(`Contactando a ${lead.name}...`);
                        setShowLeadsModal(false);
                      }}
                      className="flex-1 bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-colors font-semibold"
                    >
                      Contactar Ahora
                    </button>
                    <button 
                      onClick={() => {
                        alert(`Agendando llamada con ${lead.name}...`);
                        setShowLeadsModal(false);
                      }}
                      className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Agendar Llamada
                    </button>
                    <button 
                      onClick={() => {
                        alert(`Enviando propuesta a ${lead.name}...`);
                        setShowLeadsModal(false);
                      }}
                      className="flex-1 bg-purple-600 text-white py-3 px-4 rounded-xl hover:bg-purple-700 transition-colors font-semibold"
                    >
                      Enviar Propuesta
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal de Nueva Oportunidad */}
      {showOpportunityModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Nueva Oportunidad</h2>
                <p className="text-gray-600 mt-1">Registrar nueva oportunidad de venta</p>
              </div>
              <button 
                onClick={() => setShowOpportunityModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Nombre del Cliente *</label>
                  <input
                    type="text"
                    placeholder="Ej: Juan Pérez"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Teléfono *</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Presupuesto *</label>
                  <input
                    type="text"
                    placeholder="Ej: $500,000 - $700,000"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Tipo de Propiedad</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option value="">Seleccionar</option>
                    <option value="casa">Casa</option>
                    <option value="apartamento">Apartamento</option>
                    <option value="villa">Villa</option>
                    <option value="comercial">Comercial</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Fuente</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option value="">Seleccionar</option>
                    <option value="referencia">Referencia</option>
                    <option value="google">Google Ads</option>
                    <option value="redes">Redes Sociales</option>
                    <option value="sitio">Sitio Web</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Prioridad</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option value="">Seleccionar</option>
                    <option value="urgente">Urgente</option>
                    <option value="alta">Alta</option>
                    <option value="media">Media</option>
                    <option value="baja">Baja</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Notas</label>
                <textarea
                  placeholder="Información adicional sobre la oportunidad..."
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                />
              </div>

              <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                <button
                  onClick={() => setShowOpportunityModal(false)}
                  className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => {
                    alert('Oportunidad registrada exitosamente');
                    setShowOpportunityModal(false);
                  }}
                  className="px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-semibold"
                >
                  Guardar Oportunidad
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;