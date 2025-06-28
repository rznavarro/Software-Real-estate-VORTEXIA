import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Home, Users, Phone } from 'lucide-react';

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
    { property: 'Casa Moderna Zona Norte', client: 'Carlos Mendoza', amount: '$450,000', date: 'Hoy' },
    { property: 'Apartamento Centro', client: 'Ana García', amount: '$280,000', date: 'Ayer' },
    { property: 'Villa con Piscina', client: 'Roberto Silva', amount: '$650,000', date: '2 días' },
    { property: 'Oficina Comercial', client: 'Empresa XYZ', amount: '$320,000', date: '3 días' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Tu Empresa Hoy</h1>
        <p className="text-gray-600 text-lg">Todo lo importante para tomar decisiones</p>
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

      {/* Ventas Recientes */}
      <div className="bg-white rounded-3xl p-8 border-2 border-gray-100">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Ventas Recientes</h2>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
            +$1.7M Este Mes
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Acciones Rápidas */}
      <div className="bg-gradient-to-r from-gray-900 to-red-900 rounded-3xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-8">Acciones Estratégicas de Hoy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left hover:bg-white/20 transition-colors">
            <Phone className="w-8 h-8 mb-4" />
            <h3 className="font-bold text-xl mb-2">Llamadas Prioritarias</h3>
            <p className="text-gray-300 mb-3">5 clientes VIP esperando respuesta</p>
            <span className="text-red-400 font-semibold">Acción requerida</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left hover:bg-white/20 transition-colors">
            <Home className="w-8 h-8 mb-4" />
            <h3 className="font-bold text-xl mb-2">Propiedades Sin Actividad</h3>
            <p className="text-gray-300 mb-3">3 propiedades necesitan atención</p>
            <span className="text-yellow-400 font-semibold">Revisar estrategia</span>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left hover:bg-white/20 transition-colors">
            <Users className="w-8 h-8 mb-4" />
            <h3 className="font-bold text-xl mb-2">Nuevas Oportunidades</h3>
            <p className="text-gray-300 mb-3">12 leads calificados esta semana</p>
            <span className="text-green-400 font-semibold">Contactar ahora</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;