import React from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const Contacts = () => {
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
      status: 'Muy interesada',
      avatar: 'MG'
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
      status: 'Evaluando opciones',
      avatar: 'CM'
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
      status: 'Lista para comprar',
      avatar: 'AR'
    }
  ];

  const getSegmentColor = (segment: string) => {
    switch (segment) {
      case 'vip': return 'bg-red-100 text-red-800';
      case 'premium': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Clientes VIP</h1>
        <p className="text-gray-600 text-lg">Tus contactos más valiosos para cerrar ventas</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <h3 className="font-bold text-gray-900 mb-2">Conversión Total</h3>
          <p className="text-3xl font-bold text-gray-900">68%</p>
          <p className="text-sm text-gray-600">de contactos a ventas</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <h3 className="font-bold text-gray-900 mb-2">Valor Promedio</h3>
          <p className="text-3xl font-bold text-green-600">$485K</p>
          <p className="text-sm text-gray-600">por cliente VIP</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <h3 className="font-bold text-gray-900 mb-2">Pendientes Hoy</h3>
          <p className="text-3xl font-bold text-red-600">5</p>
          <p className="text-sm text-gray-600">llamadas urgentes</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <h3 className="font-bold text-gray-900 mb-2">Oportunidades</h3>
          <p className="text-3xl font-bold text-yellow-600">$2.1M</p>
          <p className="text-sm text-gray-600">en pipeline</p>
        </div>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {contacts.map((contact) => (
          <div key={contact.id} className="bg-white rounded-3xl border-2 border-gray-100 p-8 hover:shadow-2xl hover:border-red-200 transition-all duration-300">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{contact.avatar}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{contact.name}</h3>
                  <p className="text-gray-600">{contact.position} en {contact.company}</p>
                </div>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-bold ${getSegmentColor(contact.segment)}`}>
                {contact.segment.toUpperCase()}
              </span>
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
                  <p className="font-bold text-gray-900">{contact.budget}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Estado</p>
                  <p className="font-bold text-green-600">{contact.status}</p>
                </div>
              </div>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;