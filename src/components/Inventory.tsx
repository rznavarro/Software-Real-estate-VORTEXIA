import React, { useState } from 'react';
import { MapPin, DollarSign, Eye, Edit, TrendingUp, AlertCircle } from 'lucide-react';

const Inventory = () => {
  const [filter, setFilter] = useState('all');

  const properties = [
    {
      id: 1,
      title: 'Casa Moderna Zona Norte',
      price: '$450,000',
      location: 'Zona Norte, Ciudad',
      status: 'disponible',
      type: 'Casa',
      bedrooms: 4,
      bathrooms: 3,
      area: '280m²',
      description: 'Casa moderna con acabados de lujo, jardín amplio y garaje para 2 autos.',
      paymentMethods: ['Contado', 'Financiamiento', 'Permuta'],
      interestedClients: ['María González', 'Carlos Ruiz', 'Ana Martínez'],
      daysOnMarket: 15,
      views: 47,
      leads: 8,
      profitMargin: '$67,500',
      marketTrend: 'up',
      urgency: 'medium',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Apartamento Centro Premium',
      price: '$320,000',
      location: 'Centro, Ciudad',
      status: 'vendida',
      type: 'Apartamento',
      bedrooms: 3,
      bathrooms: 2,
      area: '120m²',
      description: 'Apartamento en el corazón de la ciudad con vista panorámica.',
      paymentMethods: ['Contado'],
      interestedClients: [],
      daysOnMarket: 8,
      views: 89,
      leads: 15,
      soldTo: 'Roberto Silva',
      soldDate: '2024-01-15',
      profitMargin: '$48,000',
      marketTrend: 'up',
      urgency: 'none',
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Villa con Piscina',
      price: '$750,000',
      location: 'Zona Residencial',
      status: 'alquilada',
      type: 'Villa',
      bedrooms: 5,
      bathrooms: 4,
      area: '450m²',
      description: 'Villa de lujo con piscina, jardín y área de entretenimiento.',
      paymentMethods: ['Mensual'],
      interestedClients: [],
      daysOnMarket: 0,
      views: 156,
      leads: 23,
      rentedTo: 'Familia Pérez',
      rentMonths: 12,
      monthlyRent: '$3,500',
      profitMargin: '$42,000/año',
      marketTrend: 'stable',
      urgency: 'none',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Penthouse Premium',
      price: '$890,000',
      location: 'Torre Elite',
      status: 'disponible',
      type: 'Penthouse',
      bedrooms: 4,
      bathrooms: 3,
      area: '350m²',
      description: 'Penthouse con terraza privada y vista 360° de la ciudad.',
      paymentMethods: ['Contado', 'Financiamiento Premium'],
      interestedClients: ['Diego Martín', 'Sofía López'],
      daysOnMarket: 32,
      views: 203,
      leads: 12,
      profitMargin: '$133,500',
      marketTrend: 'down',
      urgency: 'high',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const filteredProperties = properties.filter(property => {
    if (filter === 'all') return true;
    return property.status === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'disponible': return 'bg-green-100 text-green-800 border-green-200';
      case 'vendida': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'alquilada': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'disponible': return 'Disponible';
      case 'vendida': return 'Vendida';
      case 'alquilada': return 'Alquilada';
      default: return status;
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return '';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-600" />;
      case 'down': return <TrendingUp className="w-4 h-4 text-red-600 rotate-180" />;
      default: return <div className="w-4 h-4 bg-gray-400 rounded-full"></div>;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Mis Propiedades</h1>
          <p className="text-gray-600 text-lg">Gestiona todo tu inventario inmobiliario</p>
        </div>
        <button className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-colors text-lg">
          + Nueva Propiedad
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <h3 className="font-bold text-gray-900">Disponibles</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">{properties.filter(p => p.status === 'disponible').length}</p>
          <p className="text-gray-600">Listas para vender</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <h3 className="font-bold text-gray-900">Vendidas</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600">{properties.filter(p => p.status === 'vendida').length}</p>
          <p className="text-gray-600">Este mes</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <h3 className="font-bold text-gray-900">Alquiladas</h3>
          </div>
          <p className="text-3xl font-bold text-purple-600">{properties.filter(p => p.status === 'alquilada').length}</p>
          <p className="text-gray-600">Generando renta</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <div className="flex items-center space-x-3 mb-2">
            <DollarSign className="w-6 h-6 text-gray-700" />
            <h3 className="font-bold text-gray-900">Valor Total</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900">$2.41M</p>
          <p className="text-gray-600">Inventario completo</p>
        </div>
      </div>

      {/* Alertas de Propiedades */}
      <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <AlertCircle className="w-6 h-6 text-red-600" />
          <h3 className="text-lg font-bold text-red-800">Propiedades que Necesitan Atención</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/50 rounded-xl p-4">
            <p className="font-semibold text-red-800">Penthouse Premium</p>
            <p className="text-red-600 text-sm">32 días sin vender - Considerar ajuste de precio</p>
          </div>
          <div className="bg-white/50 rounded-xl p-4">
            <p className="font-semibold text-red-800">Casa Zona Norte</p>
            <p className="text-red-600 text-sm">8 leads interesados - Acelerar seguimiento</p>
          </div>
          <div className="bg-white/50 rounded-xl p-4">
            <p className="font-semibold text-red-800">Villa con Piscina</p>
            <p className="text-red-600 text-sm">Contrato vence en 3 meses - Renovar</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex space-x-4">
        {[
          { key: 'all', label: 'Todas' },
          { key: 'disponible', label: 'Disponibles' },
          { key: 'vendida', label: 'Vendidas' },
          { key: 'alquilada', label: 'Alquiladas' }
        ].map((filterOption) => (
          <button
            key={filterOption.key}
            onClick={() => setFilter(filterOption.key)}
            className={`px-8 py-3 rounded-2xl font-bold transition-colors text-lg ${
              filter === filterOption.key
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:bg-gray-50'
            }`}
          >
            {filterOption.label}
          </button>
        ))}
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProperties.map((property) => (
          <div key={property.id} className="bg-white rounded-3xl border-2 border-gray-100 overflow-hidden hover:shadow-2xl hover:border-red-200 transition-all duration-300">
            {/* Property Image */}
            <div className="relative h-56">
              <img 
                src={property.image} 
                alt={property.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className={`px-4 py-2 rounded-full text-sm font-bold border ${getStatusColor(property.status)}`}>
                  {getStatusText(property.status)}
                </span>
                {property.urgency !== 'none' && property.urgency && (
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getUrgencyColor(property.urgency)}`}>
                    {property.urgency === 'high' ? 'URGENTE' : 'ATENCIÓN'}
                  </span>
                )}
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                <div className="flex items-center space-x-2 text-sm font-semibold">
                  <Eye className="w-4 h-4 text-gray-600" />
                  <span>{property.views}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-blue-600">{property.leads} leads</span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2">
                <div className="flex items-center space-x-1">
                  {getTrendIcon(property.marketTrend)}
                  <span className="text-sm font-semibold text-gray-700">Mercado</span>
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.title}</h3>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    {property.location}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-gray-900">{property.price}</p>
                  {property.status === 'alquilada' && (
                    <p className="text-lg text-purple-600 font-semibold">{property.monthlyRent}/mes</p>
                  )}
                  <p className="text-sm text-green-600 font-semibold">+{property.profitMargin}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{property.description}</p>

              {/* Property Features */}
              <div className="flex items-center space-x-6 mb-6 text-gray-600">
                <span className="font-semibold">{property.bedrooms} hab</span>
                <span className="font-semibold">{property.bathrooms} baños</span>
                <span className="font-semibold">{property.area}</span>
                <span className="font-semibold">{property.type}</span>
              </div>

              {/* Payment Methods */}
              <div className="mb-6">
                <p className="font-bold text-gray-700 mb-3">Métodos de Pago:</p>
                <div className="flex flex-wrap gap-2">
                  {property.paymentMethods.map((method, index) => (
                    <span key={index} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium">
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status Specific Info */}
              {property.status === 'disponible' && property.interestedClients.length > 0 && (
                <div className="mb-6">
                  <p className="font-bold text-gray-700 mb-3">Clientes Interesados ({property.interestedClients.length}):</p>
                  <div className="space-y-2">
                    {property.interestedClients.map((client, index) => (
                      <div key={index} className="flex items-center justify-between bg-red-50 px-4 py-3 rounded-xl border border-red-200">
                        <span className="font-semibold text-gray-700">{client}</span>
                        <button className="bg-red-600 text-white px-4 py-1 rounded-full hover:bg-red-700 font-semibold text-sm">
                          Contactar
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {property.status === 'vendida' && (
                <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="font-bold text-blue-800">
                    Vendida a: {property.soldTo}
                  </p>
                  <p className="text-blue-600">Fecha: {property.soldDate}</p>
                  <p className="text-green-600 font-semibold">Ganancia: {property.profitMargin}</p>
                </div>
              )}

              {property.status === 'alquilada' && (
                <div className="mb-6 p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <p className="font-bold text-purple-800">
                    Alquilada a: {property.rentedTo}
                  </p>
                  <p className="text-purple-600">
                    Contrato: {property.rentMonths} meses
                  </p>
                  <p className="text-green-600 font-semibold">Ganancia anual: {property.profitMargin}</p>
                </div>
              )}

              {/* Market Performance */}
              <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-gray-500">Días en mercado</p>
                    <p className="font-bold text-gray-900">{property.daysOnMarket}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Visualizaciones</p>
                    <p className="font-bold text-blue-600">{property.views}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Leads generados</p>
                    <p className="font-bold text-green-600">{property.leads}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 font-semibold">
                  <Eye className="w-5 h-5" />
                  <span>Ver Detalles</span>
                </button>
                <button className="flex-1 bg-red-600 text-white py-3 px-4 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 font-semibold">
                  <Edit className="w-5 h-5" />
                  <span>Editar</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Analytics */}
      <div className="bg-gradient-to-r from-gray-900 to-red-900 rounded-3xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-6">Análisis de Rendimiento</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-2">Tiempo Promedio de Venta</h3>
            <p className="text-3xl font-bold mb-2">23 días</p>
            <p className="text-gray-300">15% mejor que el mercado</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-2">Margen Promedio</h3>
            <p className="text-3xl font-bold mb-2">18.5%</p>
            <p className="text-gray-300">$64,250 por propiedad</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-2">Tasa de Conversión</h3>
            <p className="text-3xl font-bold mb-2">34%</p>
            <p className="text-gray-300">De leads a ventas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;