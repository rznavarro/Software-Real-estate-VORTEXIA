import React from 'react';
import { Users, TrendingUp, Phone, Mail, Award, Star } from 'lucide-react';

const Team = () => {
  const keyPeople = [
    {
      id: 1,
      name: 'Ana Martínez',
      position: 'Directora de Ventas',
      avatar: 'AM',
      salesThisMonth: '$450,000',
      dealsThisMonth: 8,
      satisfaction: '98%',
      phone: '+1 (555) 123-4567',
      email: 'ana.martinez@vortexia.com',
      status: 'Superando objetivos',
      rating: 5
    },
    {
      id: 2,
      name: 'Carlos Ruiz',
      position: 'Gerente de Marketing',
      avatar: 'CR',
      leadsGenerated: '156',
      conversionRate: '24%',
      campaignROI: '340%',
      phone: '+1 (555) 234-5678',
      email: 'carlos.ruiz@vortexia.com',
      status: 'Excelente rendimiento',
      rating: 5
    },
    {
      id: 3,
      name: 'María González',
      position: 'Coordinadora de Clientes',
      avatar: 'MG',
      clientsManaged: '47',
      satisfactionScore: '96%',
      responseTime: '< 2 horas',
      phone: '+1 (555) 345-6789',
      email: 'maria.gonzalez@vortexia.com',
      status: 'Consistente y confiable',
      rating: 4
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Mi Equipo</h1>
        <p className="text-gray-600 text-lg">Las personas que hacen posible tu éxito</p>
      </div>

      {/* Team Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="w-8 h-8 text-red-600" />
            <h3 className="font-bold text-gray-900 text-lg">Total Equipo</h3>
          </div>
          <p className="text-4xl font-bold text-gray-900">11</p>
          <p className="text-gray-600 font-medium">personas trabajando</p>
        </div>
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingUp className="w-8 h-8 text-green-600" />
            <h3 className="font-bold text-gray-900 text-lg">Rendimiento</h3>
          </div>
          <p className="text-4xl font-bold text-green-600">94%</p>
          <p className="text-gray-600 font-medium">promedio del equipo</p>
        </div>
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <Award className="w-8 h-8 text-yellow-600" />
            <h3 className="font-bold text-gray-900 text-lg">Satisfacción</h3>
          </div>
          <p className="text-4xl font-bold text-yellow-600">96%</p>
          <p className="text-gray-600 font-medium">clientes satisfechos</p>
        </div>
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="w-8 h-8 text-blue-600" />
            <h3 className="font-bold text-gray-900 text-lg">Ventas Equipo</h3>
          </div>
          <p className="text-4xl font-bold text-blue-600">$539K</p>
          <p className="text-gray-600 font-medium">este mes</p>
        </div>
      </div>

      {/* Key People */}
      <div className="space-y-8">
        {keyPeople.map((person) => (
          <div key={person.id} className="bg-white rounded-3xl border-2 border-gray-100 p-8 hover:shadow-2xl hover:border-red-200 transition-all duration-300">
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">{person.avatar}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{person.name}</h3>
                  <p className="text-gray-600 text-lg">{person.position}</p>
                  <div className="flex items-center space-x-6 mt-3 text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>{person.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>{person.email}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 mb-2">
                  {renderStars(person.rating)}
                </div>
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-bold">
                  {person.status}
                </span>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {person.salesThisMonth && (
                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-gray-900">{person.salesThisMonth}</p>
                  <p className="text-sm text-gray-600 font-medium">Ventas este mes</p>
                </div>
              )}
              {person.leadsGenerated && (
                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-gray-900">{person.leadsGenerated}</p>
                  <p className="text-sm text-gray-600 font-medium">Leads generados</p>
                </div>
              )}
              {person.clientsManaged && (
                <div className="bg-gray-50 rounded-2xl p-4 text-center">
                  <p className="text-2xl font-bold text-gray-900">{person.clientsManaged}</p>
                  <p className="text-sm text-gray-600 font-medium">Clientes gestionados</p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex space-x-4">
              <button className="flex-1 bg-red-600 text-white py-3 px-6 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 font-semibold">
                <Phone className="w-5 h-5" />
                <span>Llamar</span>
              </button>
              <button className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 font-semibold">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;