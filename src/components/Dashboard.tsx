import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Home, Users, Phone, Target, Eye, MessageSquare } from 'lucide-react';

const Dashboard = () => {
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

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Tu Empresa Hoy</h1>
          <p className="text-gray-600 text-lg">Todo lo importante para tomar decisiones</p>
        </div>
      </div>

      {/* Main Stats */}
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
                  <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Llamar Ahora</span>
                  </button>
                  <button className="flex-1 bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
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
          <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl text-left hover:from-red-100 hover:to-red-200 transition-all duration-300 group">
            <Phone className="w-8 h-8 text-red-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 text-lg mb-2">Llamadas Prioritarias</h3>
            <p className="text-gray-600 mb-3">5 clientes VIP esperando respuesta</p>
            <span className="text-red-600 font-semibold">Acción requerida</span>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-2xl text-left hover:from-gray-100 hover:to-gray-200 transition-all duration-300 group">
            <Eye className="w-8 h-8 text-gray-700 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 text-lg mb-2">Propiedades Sin Actividad</h3>
            <p className="text-gray-600 mb-3">3 propiedades necesitan atención</p>
            <span className="text-gray-700 font-semibold">Revisar estrategia</span>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-2xl text-left hover:from-green-100 hover:to-green-200 transition-all duration-300 group">
            <Target className="w-8 h-8 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold text-gray-900 text-lg mb-2">Nuevas Oportunidades</h3>
            <p className="text-gray-600 mb-3">12 leads calificados esta semana</p>
            <span className="text-green-600 font-semibold">Contactar ahora</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;