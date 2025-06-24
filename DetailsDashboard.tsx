import React, { useState } from 'react';
import { X, DollarSign, Users, Phone, Calendar, TrendingUp, BarChart3, Clock, Target, Eye, MessageSquare, Home, MapPin, Building, Award, Zap, ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface DetailsDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const DetailsDashboard: React.FC<DetailsDashboardProps> = ({ isOpen, onClose }) => {
  // Datos de ventas por hora del día
  const hourlySales = [
    { hour: '9:00 AM', sales: 0, calls: 0, visits: 0, meetings: 0 },
    { hour: '10:00 AM', sales: 5000, calls: 2, visits: 1, meetings: 0 },
    { hour: '11:00 AM', sales: 8000, calls: 3, visits: 2, meetings: 1 },
    { hour: '12:00 PM', sales: 12000, calls: 4, visits: 3, meetings: 1 },
    { hour: '1:00 PM', sales: 15000, calls: 5, visits: 4, meetings: 2 },
    { hour: '2:00 PM', sales: 25000, calls: 6, visits: 5, meetings: 3 },
    { hour: '3:00 PM', sales: 35000, calls: 7, visits: 6, meetings: 4 },
    { hour: '4:00 PM', sales: 42000, calls: 8, visits: 7, meetings: 4 },
    { hour: '5:00 PM', sales: 47500, calls: 8, visits: 8, meetings: 5 },
    { hour: '6:00 PM', sales: 47500, calls: 8, visits: 8, meetings: 5 },
    { hour: '7:00 PM', sales: 47500, calls: 8, visits: 8, meetings: 5 },
    { hour: '8:00 PM', sales: 47500, calls: 8, visits: 8, meetings: 5 }
  ];

  // Métricas detalladas del CEO
  const ceoMetrics = {
    totalSales: 47500,
    totalCalls: 8,
    totalVisits: 12,
    totalMeetings: 5,
    totalContacts: 23,
    conversionRate: 34.8,
    averageDealSize: 9500,
    topPerformer: 'María González',
    topDeal: 'Casa Moderna Zona Norte - $45,000',
    marketShare: 23.5,
    clientSatisfaction: 96.2,
    teamPerformance: 94.8,
    pipelineValue: 2100000,
    roi: 285.6
  };

  // Actividad reciente del CEO
  const ceoActivity = [
    { time: '5:30 PM', type: 'venta', description: 'Venta cerrada - Casa Moderna Zona Norte', amount: 45000, person: 'Carlos Mendoza', impact: 'high' },
    { time: '4:15 PM', type: 'llamada', description: 'Llamada estratégica con cliente VIP', amount: 0, person: 'Ana Rodríguez', impact: 'medium' },
    { time: '3:45 PM', type: 'visita', description: 'Visita a propiedad premium', amount: 0, person: 'Roberto Silva', impact: 'high' },
    { time: '2:30 PM', type: 'reunion', description: 'Reunión con inversionista institucional', amount: 0, person: 'Sofía López', impact: 'critical' },
    { time: '1:20 PM', type: 'venta', description: 'Venta cerrada - Apartamento Centro', amount: 28000, person: 'Juan Pérez', impact: 'high' },
    { time: '11:45 AM', type: 'llamada', description: 'Seguimiento cliente corporativo', amount: 0, person: 'Diego Martín', impact: 'medium' }
  ];

  // Análisis de mercado
  const marketAnalysis = [
    { metric: 'Precio Promedio', value: '$485,000', change: '+8.5%', trend: 'up' },
    { metric: 'Días en Mercado', value: '23', change: '-12%', trend: 'down' },
    { metric: 'Inventario', value: '156', change: '-5.2%', trend: 'down' },
    { metric: 'Demanda', value: '89%', change: '+15.3%', trend: 'up' }
  ];

  // Estrategias del CEO
  const ceoStrategies = [
    { title: 'Expansión de Mercado', description: 'Entrar en 3 nuevas zonas residenciales', impact: 'Alto', timeline: '3 meses', investment: '$150K' },
    { title: 'Digitalización', description: 'Implementar CRM avanzado y automatización', impact: 'Crítico', timeline: '2 meses', investment: '$75K' },
    { title: 'Equipo Elite', description: 'Contratar 2 vendedores senior', impact: 'Alto', timeline: '1 mes', investment: '$120K' }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'venta': return <DollarSign className="w-5 h-5 text-green-600" />;
      case 'llamada': return <Phone className="w-5 h-5 text-blue-600" />;
      case 'visita': return <Eye className="w-5 h-5 text-purple-600" />;
      case 'reunion': return <Users className="w-5 h-5 text-orange-600" />;
      default: return <MessageSquare className="w-5 h-5 text-gray-600" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'venta': return 'bg-green-50 border-green-200';
      case 'llamada': return 'bg-blue-50 border-blue-200';
      case 'visita': return 'bg-purple-50 border-purple-200';
      case 'reunion': return 'bg-orange-50 border-orange-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-7xl w-full max-h-[95vh] overflow-y-auto">
        {/* Header del CEO */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-gray-900 to-red-900 text-white rounded-t-3xl">
          <div>
            <h2 className="text-3xl font-bold">Dashboard Ejecutivo - CEO</h2>
            <p className="text-gray-300 mt-1">Análisis estratégico completo para toma de decisiones</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Contenido Principal */}
        <div className="p-6 space-y-8">
          {/* KPIs Principales del CEO */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-200">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="w-8 h-8 text-green-600" />
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Ingresos del Día</h3>
              <p className="text-4xl font-bold text-green-600">${ceoMetrics.totalSales.toLocaleString()}</p>
              <p className="text-green-700 font-semibold">+12.5% vs ayer</p>
              <p className="text-sm text-gray-600 mt-2">ROI: {ceoMetrics.roi}%</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <Target className="w-8 h-8 text-blue-600" />
                <ArrowUpRight className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Pipeline Activo</h3>
              <p className="text-4xl font-bold text-blue-600">${(ceoMetrics.pipelineValue / 1000000).toFixed(1)}M</p>
              <p className="text-blue-700 font-semibold">+8.3% vs mes anterior</p>
              <p className="text-sm text-gray-600 mt-2">Cuota de mercado: {ceoMetrics.marketShare}%</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-200">
              <div className="flex items-center justify-between mb-4">
                <Award className="w-8 h-8 text-purple-600" />
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Satisfacción Cliente</h3>
              <p className="text-4xl font-bold text-purple-600">{ceoMetrics.clientSatisfaction}%</p>
              <p className="text-purple-700 font-semibold">+2.1% vs mes anterior</p>
              <p className="text-sm text-gray-600 mt-2">Rendimiento equipo: {ceoMetrics.teamPerformance}%</p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-6 border-2 border-orange-200">
              <div className="flex items-center justify-between mb-4">
                <Building className="w-8 h-8 text-orange-600" />
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Conversión</h3>
              <p className="text-4xl font-bold text-orange-600">{ceoMetrics.conversionRate}%</p>
              <p className="text-orange-700 font-semibold">+5.2% vs mes anterior</p>
              <p className="text-sm text-gray-600 mt-2">Venta promedio: ${ceoMetrics.averageDealSize.toLocaleString()}</p>
            </div>
          </div>

          {/* Gráfico de Actividad por Hora */}
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Actividad Ejecutiva por Hora</h3>
                <p className="text-gray-600">Progresión de actividades estratégicas durante el día</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Ventas ($)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Llamadas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Visitas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Reuniones</span>
                </div>
              </div>
            </div>

            {/* Gráfico de Barras Interactivo */}
            <div className="space-y-4">
              {hourlySales.map((data, index) => (
                <div key={index} className="flex items-center space-x-4 group hover:bg-gray-50 p-2 rounded-xl transition-all duration-300">
                  <div className="w-20 text-sm font-semibold text-gray-600">
                    {data.hour}
                  </div>
                  
                  {/* Barra de Ventas */}
                  <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-green-600 rounded-full h-8 flex items-center justify-end pr-2 transition-all duration-500 group-hover:from-green-600 group-hover:to-green-700"
                      style={{ width: `${(data.sales / 50000) * 100}%` }}
                    >
                      {data.sales > 0 && (
                        <span className="text-white text-xs font-bold">
                          ${data.sales.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Indicadores de Actividad */}
                  <div className="flex space-x-2">
                    {data.calls > 0 && (
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-white text-xs font-bold">{data.calls}</span>
                      </div>
                    )}
                    {data.visits > 0 && (
                      <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-white text-xs font-bold">{data.visits}</span>
                      </div>
                    )}
                    {data.meetings > 0 && (
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-white text-xs font-bold">{data.meetings}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Análisis de Mercado y Estrategias */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Análisis de Mercado */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <MapPin className="w-6 h-6 text-red-600" />
                <span>Análisis de Mercado</span>
              </h3>
              <div className="space-y-4">
                {marketAnalysis.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <span className="font-semibold text-gray-700">{item.metric}</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-xl font-bold text-gray-900">{item.value}</span>
                      <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-sm font-semibold ${
                        item.trend === 'up' ? 'text-green-600 bg-green-100' : 'text-red-600 bg-red-100'
                      }`}>
                        {item.trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                        <span>{item.change}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Estrategias del CEO */}
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Target className="w-6 h-6 text-blue-600" />
                <span>Estrategias Ejecutivas</span>
              </h3>
              <div className="space-y-4">
                {ceoStrategies.map((strategy, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-gray-900 text-lg">{strategy.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        strategy.impact === 'Crítico' ? 'text-red-600 bg-red-100' :
                        strategy.impact === 'Alto' ? 'text-green-600 bg-green-100' : 'text-yellow-600 bg-yellow-100'
                      }`}>
                        {strategy.impact}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{strategy.description}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Timeline: {strategy.timeline}</span>
                      <span className="font-bold text-blue-600">Inversión: {strategy.investment}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Actividad Reciente del CEO */}
          <div className="bg-white rounded-3xl p-8 border-2 border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <Clock className="w-6 h-6 text-purple-600" />
              <span>Actividad Ejecutiva Reciente</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ceoActivity.map((activity, index) => (
                <div key={index} className={`p-4 rounded-xl border-2 ${getActivityColor(activity.type)} hover:shadow-lg transition-all duration-300`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      {getActivityIcon(activity.type)}
                      <span className="font-semibold text-gray-700">{activity.description}</span>
                    </div>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{activity.person}</span>
                    <div className="flex items-center space-x-2">
                      {activity.amount > 0 && (
                        <span className="font-bold text-green-600">+${activity.amount.toLocaleString()}</span>
                      )}
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${getImpactColor(activity.impact)}`}>
                        {activity.impact === 'critical' ? 'CRÍTICO' : activity.impact === 'high' ? 'ALTO' : 'MEDIO'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resumen Ejecutivo */}
          <div className="bg-gradient-to-r from-gray-900 to-red-900 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center space-x-2">
              <Award className="w-6 h-6 text-yellow-400" />
              <span>Resumen Ejecutivo del Día</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="font-bold text-lg mb-3 text-yellow-400">Logros Estratégicos</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• 2 ventas premium cerradas ($73K)</li>
                  <li>• 3 clientes VIP contactados</li>
                  <li>• Pipeline incrementado 8.3%</li>
                  <li>• ROI del día: 285.6%</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="font-bold text-lg mb-3 text-green-400">Oportunidades Identificadas</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• 2 inversores institucionales</li>
                  <li>• 1 joint venture potencial</li>
                  <li>• 3 zonas de expansión</li>
                  <li>• 5 leads corporativos</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="font-bold text-lg mb-3 text-blue-400">Acciones Prioritarias</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Reunión con inversor mañana</li>
                  <li>• Revisar estrategia de expansión</li>
                  <li>• Evaluar CRM avanzado</li>
                  <li>• Planificar Q4 2024</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsDashboard;
