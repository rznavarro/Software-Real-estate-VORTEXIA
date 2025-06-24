import React, { useState } from 'react';
import { Users, TrendingUp, Phone, Mail, Award, Target, Calendar, DollarSign, Star, MessageSquare } from 'lucide-react';

const Team = () => {
  const [selectedView, setSelectedView] = useState('key');

  const keyPeople = [
    {
      id: 1,
      name: 'Ana Martínez',
      position: 'Directora de Ventas',
      avatar: 'AM',
      performance: {
        salesThisMonth: '$450,000',
        salesTarget: '$400,000',
        clientsSatisfaction: '98%',
        dealsThisMonth: 8,
        averageDealSize: '$56,250',
        conversionRate: '34%'
      },
      contact: {
        phone: '+1 (555) 123-4567',
        email: 'ana.martinez@vortexia.com'
      },
      strengths: ['Negociación', 'Clientes VIP', 'Cierre de ventas'],
      recentActivity: 'Cerró deal de $120,000 ayer',
      status: 'Superando objetivos',
      rating: 5,
      nextGoal: 'Alcanzar $500K este mes'
    },
    {
      id: 2,
      name: 'Carlos Ruiz',
      position: 'Gerente de Marketing',
      avatar: 'CR',
      performance: {
        leadsGenerated: '156',
        conversionRate: '24%',
        campaignROI: '340%',
        budgetUsed: '78%',
        qualityScore: '9.2/10',
        costPerLead: '$45'
      },
      contact: {
        phone: '+1 (555) 234-5678',
        email: 'carlos.ruiz@vortexia.com'
      },
      strengths: ['Marketing Digital', 'Generación de Leads', 'Análisis'],
      recentActivity: 'Campaña LinkedIn generó 23 leads VIP',
      status: 'Excelente rendimiento',
      rating: 5,
      nextGoal: 'Reducir costo por lead a $40'
    },
    {
      id: 3,
      name: 'María González',
      position: 'Coordinadora de Clientes',
      avatar: 'MG',
      performance: {
        clientsManaged: '47',
        satisfactionScore: '96%',
        responseTime: '< 2 horas',
        followUpRate: '100%',
        retentionRate: '94%',
        referralsGenerated: '12'
      },
      contact: {
        phone: '+1 (555) 345-6789',
        email: 'maria.gonzalez@vortexia.com'
      },
      strengths: ['Atención al Cliente', 'Seguimiento', 'Organización'],
      recentActivity: 'Recuperó cliente que iba a cancelar',
      status: 'Consistente y confiable',
      rating: 4,
      nextGoal: 'Aumentar referencias a 15/mes'
    },
    {
      id: 4,
      name: 'Roberto Silva',
      position: 'Especialista en Propiedades',
      avatar: 'RS',
      performance: {
        propertiesManaged: '34',
        viewingsScheduled: '89',
        averageTimeOnMarket: '18 días',
        clientFeedback: '9.4/10',
        photosQuality: '95%',
        listingAccuracy: '98%'
      },
      contact: {
        phone: '+1 (555) 456-7890',
        email: 'roberto.silva@vortexia.com'
      },
      strengths: ['Fotografía', 'Presentación', 'Conocimiento técnico'],
      recentActivity: 'Vendió propiedad en tiempo récord (5 días)',
      status: 'Especialista confiable',
      rating: 5,
      nextGoal: 'Reducir tiempo promedio a 15 días'
    },
    {
      id: 5,
      name: 'Sofía López',
      position: 'Analista Financiera',
      avatar: 'SL',
      performance: {
        reportsGenerated: '24',
        accuracyRate: '99.8%',
        forecastPrecision: '94%',
        costOptimization: '$23,000',
        processImprovement: '15%',
        timeToReport: '2 horas'
      },
      contact: {
        phone: '+1 (555) 567-8901',
        email: 'sofia.lopez@vortexia.com'
      },
      strengths: ['Análisis Financiero', 'Reportes', 'Optimización'],
      recentActivity: 'Identificó ahorro de $8,000 mensuales',
      status: 'Muy valiosa para decisiones',
      rating: 5,
      nextGoal: 'Automatizar 50% de reportes'
    }
  ];

  const generalEmployees = [
    { name: 'Diego Martín', position: 'Agente de Ventas', sales: '$89,000', deals: 3, satisfaction: '92%', rating: 4 },
    { name: 'Laura Pérez', position: 'Asistente Administrativa', tasks: '156', efficiency: '94%', support: '98%', rating: 4 },
    { name: 'Juan Torres', position: 'Fotógrafo', properties: '67', quality: '96%', delivery: '100%', rating: 5 },
    { name: 'Carmen Díaz', position: 'Recepcionista', calls: '234', satisfaction: '97%', organization: '95%', rating: 4 },
    { name: 'Miguel Herrera', position: 'Conductor', trips: '89', punctuality: '100%', safety: '100%', rating: 5 },
    { name: 'Elena Vargas', position: 'Limpieza', properties: '45', quality: '98%', reliability: '100%', rating: 5 }
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
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Mi Equipo</h1>
          <p className="text-gray-600 text-lg">Las personas que hacen posible tu éxito</p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedView('key')}
            className={`px-8 py-4 rounded-2xl font-bold transition-colors text-lg ${
              selectedView === 'key'
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:bg-gray-50'
            }`}
          >
            Personas Clave
          </button>
          <button
            onClick={() => setSelectedView('general')}
            className={`px-8 py-4 rounded-2xl font-bold transition-colors text-lg ${
              selectedView === 'general'
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:bg-gray-50'
            }`}
          >
            Equipo General
          </button>
        </div>
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
            <DollarSign className="w-8 h-8 text-blue-600" />
            <h3 className="font-bold text-gray-900 text-lg">Ventas Equipo</h3>
          </div>
          <p className="text-4xl font-bold text-blue-600">$539K</p>
          <p className="text-gray-600 font-medium">este mes</p>
        </div>
      </div>

      {/* Key People Detailed View */}
      {selectedView === 'key' && (
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
                        <span>{person.contact.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>{person.contact.email}</span>
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
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
                {Object.entries(person.performance).map(([key, value], index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl p-4 text-center">
                    <p className="text-2xl font-bold text-gray-900">{value}</p>
                    <p className="text-sm text-gray-600 font-medium capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </p>
                  </div>
                ))}
              </div>

              {/* Strengths */}
              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Fortalezas:</h4>
                <div className="flex flex-wrap gap-3">
                  {person.strengths.map((strength, index) => (
                    <span key={index} className="px-4 py-2 bg-red-100 text-red-700 rounded-full font-semibold">
                      {strength}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recent Activity & Next Goal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                  <h4 className="font-bold text-green-800 mb-2 text-lg">Actividad Reciente:</h4>
                  <p className="text-green-700 font-medium">{person.recentActivity}</p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-2 text-lg">Próximo Objetivo:</h4>
                  <p className="text-blue-700 font-medium">{person.nextGoal}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-red-600 text-white py-3 px-6 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 font-semibold">
                  <Phone className="w-5 h-5" />
                  <span>Llamar</span>
                </button>
                <button className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-xl hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 font-semibold">
                  <MessageSquare className="w-5 h-5" />
                  <span>Mensaje</span>
                </button>
                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 font-semibold">
                  <Calendar className="w-5 h-5" />
                  <span>Reunión</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* General Employees View */}
      {selectedView === 'general' && (
        <div className="bg-white rounded-3xl border-2 border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Equipo General - Vista Rápida</h2>
            <p className="text-gray-600 text-lg">Métricas generales de rendimiento</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-6 font-bold text-gray-900 text-lg">Empleado</th>
                  <th className="text-left p-6 font-bold text-gray-900 text-lg">Posición</th>
                  <th className="text-left p-6 font-bold text-gray-900 text-lg">Métrica Principal</th>
                  <th className="text-left p-6 font-bold text-gray-900 text-lg">Rendimiento</th>
                  <th className="text-left p-6 font-bold text-gray-900 text-lg">Calificación</th>
                  <th className="text-left p-6 font-bold text-gray-900 text-lg">Estado</th>
                </tr>
              </thead>
              <tbody>
                {generalEmployees.map((employee, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-500 rounded-2xl flex items-center justify-center">
                          <span className="text-white font-bold">
                            {employee.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="font-bold text-gray-900 text-lg">{employee.name}</span>
                      </div>
                    </td>
                    <td className="p-6 text-gray-600 font-medium">{employee.position}</td>
                    <td className="p-6">
                      {employee.sales && <span className="font-bold text-green-600 text-lg">{employee.sales}</span>}
                      {employee.tasks && <span className="font-bold text-blue-600 text-lg">{employee.tasks} tareas</span>}
                      {employee.properties && <span className="font-bold text-purple-600 text-lg">{employee.properties} propiedades</span>}
                      {employee.calls && <span className="font-bold text-orange-600 text-lg">{employee.calls} llamadas</span>}
                      {employee.trips && <span className="font-bold text-indigo-600 text-lg">{employee.trips} viajes</span>}
                    </td>
                    <td className="p-6">
                      <div className="flex space-x-2">
                        {Object.entries(employee).slice(2, -1).map(([key, value], idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                            {value}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center space-x-1">
                        {renderStars(employee.rating)}
                      </div>
                    </td>
                    <td className="p-6">
                      <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-bold">
                        Excelente
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Team Actions */}
      <div className="bg-gradient-to-r from-gray-900 to-red-900 rounded-3xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-8">Acciones Estratégicas de Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left hover:bg-white/20 transition-colors group">
            <Calendar className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-xl mb-2">Reunión Semanal</h3>
            <p className="text-gray-300 mb-3">Programar con equipo clave</p>
            <span className="text-yellow-400 font-semibold">Próxima: Viernes 10 AM</span>
          </button>
          <button className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left hover:bg-white/20 transition-colors group">
            <Target className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-xl mb-2">Revisar Objetivos</h3>
            <p className="text-gray-300 mb-3">Ajustar metas mensuales</p>
            <span className="text-blue-400 font-semibold">3 personas por revisar</span>
          </button>
          <button className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left hover:bg-white/20 transition-colors group">
            <Award className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-xl mb-2">Reconocimientos</h3>
            <p className="text-gray-300 mb-3">Celebrar logros del equipo</p>
            <span className="text-green-400 font-semibold">5 personas destacadas</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;