import React from 'react';
import { BarChart3, Brain, Command } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Inventory Intelligence",
      description: "Visualiza y gestiona tu inventario con IA que predice oportunidades y optimiza automáticamente.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Sales Intelligence",
      description: "Consolida todas tus ventas y segmenta clientes automáticamente por valor y potencial.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Command,
      title: "Command Center",
      description: "Accede a todas tus herramientas desde un solo lugar con vista 360° de tu empresa.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tres pilares para{' '}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              transformar tu empresa
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-700/50 to-slate-600/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;