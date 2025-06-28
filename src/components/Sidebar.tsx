import React from 'react';
import { BarChart3, Building, MessageSquare, Users } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Mi Empresa', icon: BarChart3 },
    { id: 'inventory', label: 'Propiedades', icon: Building },
    { id: 'contacts', label: 'Clientes VIP', icon: MessageSquare },
    { id: 'team', label: 'Mi Equipo', icon: Users }
  ];

  return (
    <div className="w-72 bg-gray-900 text-white p-8 min-h-screen">
      {/* Logo */}
      <div className="mb-12">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white rounded-full border-dashed"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">VORTEXIA</h1>
            <p className="text-red-400 text-sm font-medium">Domina tu empresa</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-3">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-left transition-all duration-200 font-semibold ${
              activeSection === item.id
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-lg">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Quick Stats */}
      <div className="mt-12 p-6 bg-gray-800 rounded-2xl border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-6">Resumen de Hoy</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Ventas</span>
            <span className="text-2xl font-bold text-green-400">$47,500</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Visitas</span>
            <span className="text-2xl font-bold text-blue-400">12</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Llamadas</span>
            <span className="text-2xl font-bold text-red-400">8</span>
          </div>
        </div>
      </div>

      {/* Alerta */}
      <div className="mt-6 p-4 bg-gradient-to-r from-red-600/20 to-red-500/20 border border-red-500/30 rounded-2xl">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-red-400 font-semibold text-sm">URGENTE</span>
        </div>
        <p className="text-white text-sm">
          5 clientes VIP necesitan seguimiento inmediato
        </p>
      </div>
    </div>
  );
};

export default Sidebar;