import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Star, Plus, Filter, Search, Target, TrendingUp, X, Save, User, Building, Source, DollarSign, Calendar, AlertCircle, Tag, FileText, Users, MapPin } from 'lucide-react';

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
  location: string;
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
  location: string;
}

const Contacts: React.FC = () => {
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
      email: 'maria@email.com',
      phone: '+1 (555) 123-4567',
      company: 'González Inversiones',
      position: 'CEO',
      segment: 'vip',
      budget: '$800,000 - $1,200,000',
      interests: ['Casas de lujo', 'Propiedades comerciales'],
      lastContact: '2 horas ago',
      status: 'vip',
      notes: 'Busca propiedad para inversión. Prefiere zona norte. Pago en efectivo.',
      avatar: 'https://via.placeholder.com/100x100/8B5CF6/FFFFFF?text=MG',
      priority: 'high',
      probability: '85%',
      nextAction: 'Enviar propuesta personalizada',
      source: 'Referencia',
      location: 'Beverly Hills, CA'
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      email: 'carlos@email.com',
      phone: '+1 (555) 987-6543',
      company: 'Mendoza Group',
      position: 'Director',
      segment: 'premium',
      budget: '$500,000 - $700,000',
      interests: ['Apartamentos premium', 'Oficinas'],
      lastContact: '1 día ago',
      status: 'active',
      notes: 'Cliente corporativo. Necesita oficinas para expansión. Flexible en ubicación.',
      avatar: 'https://via.placeholder.com/100x100/3B82F6/FFFFFF?text=CR',
      priority: 'medium',
      probability: '60%',
      nextAction: 'Agendar visita',
      source: 'Google Ads',
      location: 'Downtown LA, CA'
    },
    {
      id: 3,
      name: 'Ana Martínez',
      email: 'ana@email.com',
      phone: '+1 (555) 456-7890',
      company: 'Rodríguez & Asociados',
      position: 'Socia',
      segment: 'vip',
      budget: '$1,000,000+',
      interests: ['Penthouses', 'Propiedades exclusivas'],
      lastContact: '3 días ago',
      status: 'vip',
      notes: 'Cliente VIP. Busca penthouse exclusivo. Presupuesto alto. Decisión rápida.',
      avatar: 'https://via.placeholder.com/100x100/10B981/FFFFFF?text=AM',
      priority: 'high',
      probability: '95%',
      nextAction: 'Llamar inmediatamente',
      source: 'Referencia VIP',
      location: 'Malibu, CA'
    },
    {
      id: 4,
      name: 'Luis Pérez',
      email: 'luis@email.com',
      phone: '+1 (555) 789-0123',
      company: 'Silva Construcciones',
      position: 'Fundador',
      segment: 'premium',
      budget: '$400,000 - $600,000',
      interests: ['Casas familiares', 'Terrenos'],
      lastContact: '1 semana ago',
      status: 'active',
      notes: 'Constructor experimentado. Busca para familia. Conoce el mercado.',
      avatar: 'https://via.placeholder.com/100x100/F59E0B/FFFFFF?text=LP',
      priority: 'medium',
      probability: '70%',
      nextAction: 'Enviar comparativa',
      source: 'Redes Sociales',
      location: 'Pasadena, CA'
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
      avatar: 'https://via.placeholder.com/100x100/8B5CF6/FFFFFF?text=SL',
      priority: 'low',
      probability: '45%',
      nextAction: 'Seguimiento telefónico',
      source: 'Sitio Web',
      location: 'Pasadena, CA'
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
    lastContact: 'Hoy',
    location: 'Pasadena, CA'
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
        source: newClient.source,
        location: newClient.location
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
        lastContact: 'Hoy',
        location: 'Pasadena, CA'
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
      lastContact: 'Hoy',
      location: 'Pasadena, CA'
    });
  };

  // Función para manejar la vista de detalles
  const handleViewDetails = (contact: Contact) => {
    setSelectedContact(contact);
    setShowDetails(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Clientes</h1>
          <p className="text-gray-600">Gestiona tus contactos y clientes VIP</p>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Nuevo Cliente</span>
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar clientes..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors">
            Solo VIP
          </button>
        </div>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContacts.map((contact) => (
          <div key={contact.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 card-hover">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-12 h-12 rounded-full object-cover"
                  onError={(e) => {
                    // Fallback si la imagen falla
                    e.currentTarget.src = `https://via.placeholder.com/100x100/6B7280/FFFFFF?text=${contact.name.split(' ').map(n => n[0]).join('')}`;
                  }}
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                  <div className="flex items-center space-x-2">
                    {contact.status === 'vip' && (
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-xs text-yellow-600 font-medium">VIP</span>
                      </div>
                    )}
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      contact.status === 'vip' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                    }`}>
                      {contact.status === 'vip' ? 'Cliente VIP' : 'Activo'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                <span>{contact.email}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{contact.location}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-gray-500">Último contacto: {contact.lastContact}</span>
            </div>
            
            <div className="flex space-x-2">
              <button className="flex-1 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm flex items-center justify-center space-x-1">
                <MessageSquare className="w-4 h-4" />
                <span>Contactar</span>
              </button>
              <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                Ver
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Clientes</p>
              <p className="text-2xl font-bold text-gray-900">48</p>
            </div>
            <Users className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Clientes VIP</p>
              <p className="text-2xl font-bold text-yellow-600">12</p>
            </div>
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Activos</p>
              <p className="text-2xl font-bold text-green-600">36</p>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Nuevos este mes</p>
              <p className="text-2xl font-bold text-blue-600">8</p>
            </div>
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Plus className="w-5 h-5 text-blue-600" />
            </div>
          </div>
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
