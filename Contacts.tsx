import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Star, Plus, Filter, Search, Target, TrendingUp, X, Save, User, Building, Source, DollarSign, Calendar, AlertCircle, Tag, FileText } from 'lucide-react';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  segment: string;
  budget: string;
  interests: string[];
  lastContact: string;
  status: string;
  notes: string;
  avatar: string;
  priority: string;
  probability: string;
  nextAction: string;
  source: string;
}

interface NewClient {
  name: string;
  position: string;
  company: string;
  source: string;
  email: string;
  phone: string;
  segment: string;
  budget: string;
  status: string;
  nextAction: string;
  interests: string;
  notes: string;
  priority: string;
  lastContact: string;
}

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSegment, setSelectedSegment] = useState('all');
  const [showNewClientForm, setShowNewClientForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  
  // Estado para la lista de contactos (ahora manejable)
  const [contacts, setContacts] = useState<Contact[]>([
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
  ]);
  
  // Estado para el formulario de nuevo cliente
  const [newClient, setNewClient] = useState<NewClient>({
    name: '',
    position: '',
    company: '',
    source: '',
    email: '',
    phone: '',
    segment: 'vip',
    budget: '',
    status: 'Evaluando opciones',
    nextAction: '',
    interests: '',
    notes: '',
    priority: 'medium',
    lastContact: 'Hoy'
  });

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

  // Funciones para manejar el formulario de nuevo cliente
  const handleInputChange = (field: keyof NewClient, value: string) => {
    setNewClient((prev: NewClient) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación adicional
    if (!newClient.name || !newClient.email || !newClient.phone) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    console.log('Datos del formulario:', newClient); // Debug
    
    try {
      // Crear el nuevo cliente
      const clientToAdd: Contact = {
        id: contacts.length > 0 ? Math.max(...contacts.map(c => c.id)) + 1 : 1,
        name: newClient.name.trim(),
        email: newClient.email.trim(),
        phone: newClient.phone.trim(),
        company: newClient.company.trim(),
        position: newClient.position.trim(),
        segment: newClient.segment,
        budget: newClient.budget.trim(),
        interests: newClient.interests ? newClient.interests.split(',').map((i: string) => i.trim()).filter((i: string) => i) : [],
        lastContact: newClient.lastContact,
        status: newClient.status,
        notes: newClient.notes.trim(),
        avatar: newClient.name.split(' ').map((n: string) => n[0]).join('').toUpperCase(),
        priority: newClient.priority,
        probability: '50%',
        nextAction: newClient.nextAction.trim(),
        source: newClient.source
      };

      console.log('Cliente a agregar:', clientToAdd); // Debug

      // Agregar el nuevo cliente a la lista
      setContacts(prevContacts => {
        const newContacts = [...prevContacts, clientToAdd];
        console.log('Nueva lista de contactos:', newContacts); // Debug
        return newContacts;
      });
      
      // Limpiar formulario y cerrar modal
      setNewClient({
        name: '',
        position: '',
        company: '',
        source: '',
        email: '',
        phone: '',
        segment: 'vip',
        budget: '',
        status: 'Evaluando opciones',
        nextAction: '',
        interests: '',
        notes: '',
        priority: 'medium',
        lastContact: 'Hoy'
      });
      setShowNewClientForm(false);
      
      // Mostrar mensaje de éxito
      alert('¡Cliente VIP agregado exitosamente!');
      
    } catch (error) {
      console.error('Error al agregar cliente:', error);
      alert('Error al agregar el cliente. Por favor intenta de nuevo.');
    }
  };

  const resetForm = () => {
    setNewClient({
      name: '',
      position: '',
      company: '',
      source: '',
      email: '',
      phone: '',
      segment: 'vip',
      budget: '',
      status: 'Evaluando opciones',
      nextAction: '',
      interests: '',
      notes: '',
      priority: 'medium',
      lastContact: 'Hoy'
    });
  };

  // Función para manejar la vista de detalles
  const handleViewDetails = (contact: Contact) => {
    setSelectedContact(contact);
    setShowDetails(true);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Clientes VIP</h1>
          <p className="text-gray-600 text-lg">Tus contactos más valiosos para cerrar ventas</p>
        </div>
        <button 
          onClick={() => setShowNewClientForm(true)}
          className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-colors flex items-center space-x-3 text-lg"
        >
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
              <button 
                onClick={() => handleViewDetails(contact)}
                className="flex-1 bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 font-semibold"
              >
                <FileText className="w-5 h-5" />
                <span>Ver detalles</span>
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

      {/* Modal para Nuevo Cliente VIP */}
      {showNewClientForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            {/* Header del Modal */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Nuevo Cliente VIP</h2>
                <p className="text-gray-600 mt-1">Formulario simplificado para pruebas</p>
              </div>
              <button 
                onClick={() => setShowNewClientForm(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Formulario Simplificado */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Información Personal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={newClient.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Ej: Juan Pérez"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    1. Cargo *
                  </label>
                  <input
                    type="text"
                    required
                    value={newClient.position}
                    onChange={(e) => handleInputChange('position', e.target.value)}
                    placeholder="Ej: CEO, Director, Gerente"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Información de Contacto */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={newClient.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="juan@email.com"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={newClient.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Empresa y Presupuesto */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Empresa
                  </label>
                  <input
                    type="text"
                    value={newClient.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Empresa del cliente"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    2. Presupuesto *
                  </label>
                  <input
                    type="text"
                    required
                    value={newClient.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    placeholder="Ej: $500,000 - $700,000"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Estado y Próxima Acción */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    3. Estado del Cliente *
                  </label>
                  <select
                    required
                    value={newClient.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Seleccionar estado</option>
                    <option value="Evaluando opciones">Evaluando opciones</option>
                    <option value="Muy interesada">Muy interesada</option>
                    <option value="Lista para comprar">Lista para comprar</option>
                    <option value="Comparando opciones">Comparando opciones</option>
                    <option value="Interesada">Interesada</option>
                    <option value="Necesita más información">Necesita más información</option>
                    <option value="En negociación">En negociación</option>
                    <option value="Cerrada">Cerrada</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    4. Próxima Acción *
                  </label>
                  <input
                    type="text"
                    required
                    value={newClient.nextAction}
                    onChange={(e) => handleInputChange('nextAction', e.target.value)}
                    placeholder="Ej: Llamar mañana, Enviar propuesta"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Tipo de Cliente y Último Contacto */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    5. Tipo de Cliente *
                  </label>
                  <select
                    required
                    value={newClient.segment}
                    onChange={(e) => handleInputChange('segment', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="vip">VIP</option>
                    <option value="premium">Premium</option>
                    <option value="standard">Standard</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    6. Último Contacto *
                  </label>
                  <select
                    required
                    value={newClient.lastContact}
                    onChange={(e) => handleInputChange('lastContact', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Seleccionar</option>
                    <option value="Hoy">Hoy</option>
                    <option value="Ayer">Ayer</option>
                    <option value="2 días">2 días</option>
                    <option value="3 días">3 días</option>
                    <option value="1 semana">1 semana</option>
                    <option value="2 semanas">2 semanas</option>
                    <option value="1 mes">1 mes</option>
                    <option value="Sin contacto">Sin contacto</option>
                  </select>
                </div>
              </div>

              {/* Prioridad y Fuente */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    7. Prioridad *
                  </label>
                  <select
                    required
                    value={newClient.priority}
                    onChange={(e) => handleInputChange('priority', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Seleccionar prioridad</option>
                    <option value="high">Alta</option>
                    <option value="medium">Media</option>
                    <option value="low">Baja</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">
                    Fuente *
                  </label>
                  <select
                    required
                    value={newClient.source}
                    onChange={(e) => handleInputChange('source', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Seleccionar fuente</option>
                    <option value="Referencia">Referencia</option>
                    <option value="Google Ads">Google Ads</option>
                    <option value="Redes Sociales">Redes Sociales</option>
                    <option value="Sitio Web">Sitio Web</option>
                    <option value="Referencia VIP">Referencia VIP</option>
                    <option value="Evento">Evento</option>
                    <option value="Cold Call">Cold Call</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Facebook">Facebook</option>
                  </select>
                </div>
              </div>

              {/* Intereses y Notas */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  Intereses (separados por comas)
                </label>
                <input
                  type="text"
                  value={newClient.interests}
                  onChange={(e) => handleInputChange('interests', e.target.value)}
                  placeholder="Ej: Casas de lujo, Penthouses, Propiedades comerciales"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">
                  Notas Adicionales
                </label>
                <textarea
                  value={newClient.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder="Información adicional sobre el cliente, preferencias, notas importantes..."
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Botones de Acción */}
              <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowNewClientForm(false)}
                  className="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-semibold"
                >
                  Guardar Cliente VIP
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Detalles del Cliente */}
      {showDetails && selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header del Modal */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{selectedContact.avatar}</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedContact.name}</h2>
                  <p className="text-gray-600">{selectedContact.position} en {selectedContact.company}</p>
                </div>
              </div>
              <button 
                onClick={() => setShowDetails(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Contenido Detallado */}
            <div className="p-6 space-y-8">
              {/* Información Personal */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <User className="w-6 h-6 text-red-600" />
                  <span>Información Personal</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Nombre Completo</p>
                    <p className="font-bold text-gray-900 text-lg">{selectedContact.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Cargo</p>
                    <p className="font-bold text-gray-900 text-lg">{selectedContact.position}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Empresa</p>
                    <p className="font-bold text-gray-900 text-lg">{selectedContact.company}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Fuente</p>
                    <p className="font-bold text-gray-900 text-lg">{selectedContact.source}</p>
                  </div>
                </div>
              </div>

              {/* Información de Contacto */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <span>Información de Contacto</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <p className="font-bold text-gray-900 text-lg">{selectedContact.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Teléfono</p>
                    <p className="font-bold text-gray-900 text-lg">{selectedContact.phone}</p>
                  </div>
                </div>
              </div>

              {/* Información Comercial */}
              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <DollarSign className="w-6 h-6 text-green-600" />
                  <span>Información Comercial</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Presupuesto</p>
                    <p className="font-bold text-gray-900 text-lg">{selectedContact.budget}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Estado</p>
                    <p className="font-bold text-green-600 text-lg">{selectedContact.status}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Probabilidad</p>
                    <p className={`font-bold text-lg px-3 py-1 rounded-full inline-block ${getProbabilityColor(selectedContact.probability)}`}>
                      {selectedContact.probability}
                    </p>
                  </div>
                </div>
              </div>

              {/* Segmentación y Prioridad */}
              <div className="bg-yellow-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Tag className="w-6 h-6 text-yellow-600" />
                  <span>Segmentación y Prioridad</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Tipo de Cliente</p>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold border ${getSegmentColor(selectedContact.segment)}`}>
                      {selectedContact.segment.toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Prioridad</p>
                    <p className={`font-bold text-lg ${getPriorityColor(selectedContact.priority)}`}>
                      {selectedContact.priority === 'high' ? 'ALTA' : selectedContact.priority === 'medium' ? 'MEDIA' : 'BAJA'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Último Contacto</p>
                    <p className="font-bold text-gray-900 text-lg">{selectedContact.lastContact}</p>
                  </div>
                </div>
              </div>

              {/* Próxima Acción */}
              <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center space-x-2">
                  <Target className="w-6 h-6 text-red-600" />
                  <span>Próxima Acción</span>
                </h3>
                <p className="text-red-700 font-semibold text-lg">{selectedContact.nextAction}</p>
              </div>

              {/* Intereses */}
              <div className="bg-purple-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Star className="w-6 h-6 text-purple-600" />
                  <span>Intereses</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedContact.interests.map((interest, index) => (
                    <span key={index} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Notas */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <FileText className="w-6 h-6 text-gray-600" />
                  <span>Notas</span>
                </h3>
                <p className="text-gray-700 italic text-lg leading-relaxed">"{selectedContact.notes}"</p>
              </div>

              {/* Acciones Rápidas */}
              <div className="bg-gradient-to-r from-gray-900 to-red-900 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Acciones Rápidas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-left hover:bg-white/20 transition-colors">
                    <Phone className="w-6 h-6 mb-2" />
                    <p className="font-semibold">Llamar Ahora</p>
                    <p className="text-sm text-gray-300">Contacto directo</p>
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-left hover:bg-white/20 transition-colors">
                    <MessageSquare className="w-6 h-6 mb-2" />
                    <p className="font-semibold">Enviar WhatsApp</p>
                    <p className="text-sm text-gray-300">Mensaje rápido</p>
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-left hover:bg-white/20 transition-colors">
                    <Mail className="w-6 h-6 mb-2" />
                    <p className="font-semibold">Enviar Email</p>
                    <p className="text-sm text-gray-300">Propuesta detallada</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;