import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Star, Plus, Search, Target, TrendingUp } from 'lucide-react';

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSegment, setSelectedSegment] = useState('all');
  
  const contacts = [
    {
      id: 1,
      name: 'María González',
      email: 'maria.gonzalez@email.com',
      phone: '+1 (555) 123-4567',
      company: 'González Inversiones',
      position: 'CEO',
      segment: 'vip',
      budget: '$800,000 - $1,200,000',
      interests: ['Casas de lujo', 'Propiedades comerciales'],
      lastContact: '2 días',
      status: 'Muy interesada',
      notes: 'Busca propiedad para inversión. Prefiere zona norte. Pago en efectivo.',
      avatar: 'MG',
      priority: 'high',
      probability: '85%',
      nextAction: 'Enviar propuesta personalizada',
      source: 'Referencia'
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      email: 'carlos@mendozagroup.com',
      phone: '+1 (555) 234-5678',
      company: 'Mendoza Group',
      position: 'Director',
      segment: 'premium',
      budget: '$500,000 - $700,000',
      interests: ['Apartamentos premium', 'Oficinas'],
      lastContact: '1 semana',
      status: 'Evaluando opciones',
      notes: 'Cliente corporativo. Necesita oficinas para expansión. Flexible en ubicación.',
      avatar: 'CM',
      priority: 'medium',
      probability: '60%',
      nextAction: 'Agendar visita',
      source: 'Google Ads'
    },
    {
      id: 3,
      name: 'Ana Rodríguez',
      email: 'ana.rodriguez@email.com',
      phone: '+1 (555) 345-6789',
      company: 'Rodríguez & Asociados',
      position: 'Socia',
      segment: 'vip',
      budget: '$1,000,000+',
      interests: ['Penthouses', 'Propiedades exclusivas'],
      lastContact: 'Hoy',
      status: 'Lista para comprar',
      notes: 'Cliente VIP. Busca penthouse exclusivo. Presupuesto alto. Decisión rápida.',
      avatar: 'AR',
      priority: 'high',
      probability: '95%',
      nextAction: 'Llamar inmediatamente',
      source: 'Referencia VIP'
    },
    {
      id: 4,
      name: 'Roberto Silva',
      email: 'roberto.silva@email.com',
      phone: '+1 (555) 456-7890',
      company: 'Silva Construcciones',
      position: 'Fundador',
      segment: 'premium',
      budget: '$400,000 - $600,000',
      interests: ['Casas familiares', 'Terrenos'],
      lastContact: '3 días',
      status: 'Comparando opciones',
      notes: 'Constructor experimentado. Busca para familia. Conoce el mercado.',
      avatar: 'RS',
      priority: 'medium',
      probability: '70%',
      nextAction: 'Enviar comparativa',
      source: 'Redes Sociales'
    },
    {
      id: 5,
      name: 'Sofía López',
      email: 'sofia@lopezinvest.com',
      phone: '+1 (555) 567-8901',
      company: 'López Investment',
      position: 'Directora de Inversiones',
      segment: 'standard',
      budget: '$250,000 - $400,000',
      interests: ['Apartamentos', 'Propiedades de renta'],
      lastContact: '5 días',
      status: 'Interesada',
      notes: 'Inversionista joven. Busca propiedades para renta. Primera compra importante.',
      avatar: 'SL',
      priority: 'low',
      probability: '45%',
      nextAction: 'Seguimiento telefónico',
      source: 'Sitio Web'
    }
  ];

  const segments = [
    { key: 'all', label: 'Todos', count: contacts.length },
    { key: 'vip', label: 'VIP', count: contacts.filter(c => c.segment === 'vip').length },
    { key: 'premium', label: 'Premium', count: contacts.filter(c => c.segment === 'premium').length },
    { key: 'standard', label: 'Standard', count: contacts.filter(c => c.segment === 'standard').length }
  ];

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSegment = selectedSegment === 'all' || contact.segment === selectedSegment;
    return matchesSearch && matchesSegment;
  });

  const getSegmentColor = (segment: string) => {
    switch (segment) {
      case 'vip': return 'bg-red-100 text-red-800 border-red-200';
      case 'premium': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'standard': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const getProbabilityColor = (probability: string) => {
    const num = parseInt(probability);
    if (num >= 80) return 'text-green-600 bg-green-100';
    if (num >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Clientes VIP</h1>
          <p className="text-gray-600 text-lg">Tus contactos más valiosos para cerrar ventas</p>
        </div>
        <button className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-colors flex items-center space-x-3 text-lg">
          <Plus className="w-6 h-6" />
          <span>Nuevo Cliente VIP</span>
        </button>
      </div>

      {/* Métricas de Conversión */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <div className="flex items-center space-x-3 mb-2">
            <Target className="w-6 h-6 text-red-600" />
            <h3 className="font-bold text-gray-900">Conversión Total</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">68%</p>
          <p className="text-sm text-gray-600">de contactos a ventas</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <div className="flex items-center space-x-3 mb-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            <h3 className="font-bold text-gray-900">Valor Promedio</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">$485K</p>
          <p className="text-sm text-gray-600">por cliente VIP</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <div className="flex items-center space-x-3 mb-2">
            <Phone className="w-6 h-6 text-blue-600" />
            <h3 className="font-bold text-gray-900">Pendientes Hoy</h3>
          </div>
          <p className="text-3xl font-bold text-red-600">5</p>
          <p className="text-sm text-gray-600">llamadas urgentes</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <div className="flex items-center space-x-3 mb-2">
            <Star className="w-6 h-6 text-yellow-600" />
            <h3 className="font-bold text-gray-900">Oportunidades</h3>
          </div>
          <p className="text-3xl font-bold text-yellow-600">$2.1M</p>
          <p className="text-sm text-gray-600">en pipeline</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
          <input
            type="text"
            placeholder="Buscar por nombre o empresa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg"
          />
        </div>
        <div className="flex space-x-3">
          {segments.map((segment) => (
            <button
              key={segment.key}
              onClick={() => setSelectedSegment(segment.key)}
              className={`px-6 py-4 rounded-2xl font-bold transition-colors flex items-center space-x-3 text-lg ${
                selectedSegment === segment.key
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-600 border-2 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span>{segment.label}</span>
              <span className={`text-sm px-3 py-1 rounded-full ${
                selectedSegment === segment.key ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                {segment.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredContacts.map((contact) => (
          <div key={contact.id} className="bg-white rounded-3xl border-2 border-gray-100 p-8 hover:shadow-2xl hover:border-red-200 transition-all duration-300">
            {/* Contact Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{contact.avatar}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{contact.name}</h3>
                  <p className="text-gray-600">{contact.position} en {contact.company}</p>
                  <p className="text-sm text-gray-500">Fuente: {contact.source}</p>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className={`px-4 py-2 rounded-full text-sm font-bold border ${getSegmentColor(contact.segment)}`}>
                  {contact.segment.toUpperCase()}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${getProbabilityColor(contact.probability)}`}>
                  {contact.probability}
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5" />
                <span>{contact.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5" />
                <span>{contact.phone}</span>
              </div>
            </div>

            {/* Budget and Status */}
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Presupuesto</p>
                  <p className="font-bold text-gray-900 text-lg">{contact.budget}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Estado</p>
                  <p className="font-bold text-green-600 text-lg">{contact.status}</p>
                </div>
              </div>
            </div>

            {/* Next Action */}
            <div className="bg-red-50 rounded-2xl p-4 mb-6 border border-red-200">
              <p className="text-sm font-bold text-red-800 mb-1">Próxima Acción:</p>
              <p className="text-red-700 font-semibold">{contact.nextAction}</p>
            </div>

            {/* Interests */}
            <div className="mb-6">
              <p className="text-sm font-bold text-gray-700 mb-3">Intereses:</p>
              <div className="flex flex-wrap gap-2">
                {contact.interests.map((interest, index) => (
                  <span key={index} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="mb-6">
              <p className="text-gray-600 italic bg-gray-50 p-4 rounded-xl">"{contact.notes}"</p>
            </div>

            {/* Last Contact */}
            <div className="flex items-center justify-between mb-6 text-sm">
              <span className="text-gray-500">Último contacto: {contact.lastContact}</span>
              <span className={`font-bold ${getPriorityColor(contact.priority)}`}>
                Prioridad {contact.priority === 'high' ? 'ALTA' : contact.priority === 'medium' ? 'MEDIA' : 'BAJA'}
              </span>
            </div>

            {/* Actions */}
            <div className="flex space-x-3">
              <button className="flex-1 bg-red-600 text-white py-3 px-4 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 font-semibold">
                <Phone className="w-5 h-5" />
                <span>Llamar</span>
              </button>
              <button className="flex-1 bg-gray-900 text-white py-3 px-4 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 font-semibold">
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp</span>
              </button>
              <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-semibold">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-gray-900 to-red-900 rounded-3xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">Acciones Estratégicas con Clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left hover:bg-white/20 transition-colors">
            <Phone className="w-8 h-8 mb-4" />
            <h3 className="font-bold text-lg">Llamadas Urgentes</h3>
            <p className="text-gray-300">5 clientes VIP esperando</p>
            <span className="text-red-400 font-semibold">Acción inmediata</span>
          </button>
          <button className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left hover:bg-white/20 transition-colors">
            <MessageSquare className="w-8 h-8 mb-4" />
            <h3 className="font-bold text-lg">Propuestas Listas</h3>
            <p className="text-gray-300">8 propuestas para enviar</p>
            <span className="text-yellow-400 font-semibold">Revisar y enviar</span>
          </button>
          <button className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left hover:bg-white/20 transition-colors">
            <Star className="w-8 h-8 mb-4" />
            <h3 className="font-bold text-lg">Seguimiento VIP</h3>
            <p className="text-gray-300">3 clientes sin contacto</p>
            <span className="text-green-400 font-semibold">Contactar hoy</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;