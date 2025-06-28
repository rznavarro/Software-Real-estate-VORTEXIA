import React from 'react';
import { MapPin, Eye, Edit } from 'lucide-react';

const Inventory = () => {
  const properties = [
    {
      id: 1,
      title: 'Casa Moderna Zona Norte',
      price: '$450,000',
      location: 'Zona Norte, Ciudad',
      status: 'disponible',
      bedrooms: 4,
      bathrooms: 3,
      area: '280m²',
      views: 47,
      leads: 8
    },
    {
      id: 2,
      title: 'Apartamento Centro Premium',
      price: '$320,000',
      location: 'Centro, Ciudad',
      status: 'vendida',
      bedrooms: 3,
      bathrooms: 2,
      area: '120m²',
      views: 89,
      leads: 15
    },
    {
      id: 3,
      title: 'Villa con Piscina',
      price: '$750,000',
      location: 'Zona Residencial',
      status: 'alquilada',
      bedrooms: 5,
      bathrooms: 4,
      area: '450m²',
      views: 156,
      leads: 23
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'disponible': return 'bg-green-100 text-green-800';
      case 'vendida': return 'bg-blue-100 text-blue-800';
      case 'alquilada': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Mis Propiedades</h1>
        <p className="text-gray-600 text-lg">Gestiona todo tu inventario inmobiliario</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <h3 className="font-bold text-gray-900 mb-2">Disponibles</h3>
          <p className="text-3xl font-bold text-green-600">1</p>
          <p className="text-gray-600">Listas para vender</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <h3 className="font-bold text-gray-900 mb-2">Vendidas</h3>
          <p className="text-3xl font-bold text-blue-600">1</p>
          <p className="text-gray-600">Este mes</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <h3 className="font-bold text-gray-900 mb-2">Alquiladas</h3>
          <p className="text-3xl font-bold text-purple-600">1</p>
          <p className="text-gray-600">Generando renta</p>
        </div>
        <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
          <h3 className="font-bold text-gray-900 mb-2">Valor Total</h3>
          <p className="text-3xl font-bold text-gray-900">$1.52M</p>
          <p className="text-gray-600">Inventario completo</p>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-3xl border-2 border-gray-100 p-8 hover:shadow-2xl hover:border-red-200 transition-all duration-300">
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
                <span className={`px-4 py-2 rounded-full text-sm font-bold ${getStatusColor(property.status)}`}>
                  {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                </span>
              </div>
            </div>

            {/* Property Features */}
            <div className="flex items-center space-x-6 mb-6 text-gray-600">
              <span className="font-semibold">{property.bedrooms} hab</span>
              <span className="font-semibold">{property.bathrooms} baños</span>
              <span className="font-semibold">{property.area}</span>
            </div>

            {/* Performance */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <div className="grid grid-cols-2 gap-4 text-center">
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
        ))}
      </div>
    </div>
  );
};

export default Inventory;