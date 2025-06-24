import React from 'react';
import { AlertCircle, Clock, TrendingDown } from 'lucide-react';

const Problems = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "¿Te sientes abrumado por tantas herramientas dispersas?",
      description: "CRM, inventarios, hojas de cálculo, emails... Todo está fragmentado y pierdes tiempo saltando entre aplicaciones."
    },
    {
      icon: TrendingDown,
      title: "¿Pierdes oportunidades por falta de organización?",
      description: "Clientes premium se escapan porque no tienes visibilidad completa de tu pipeline y inventario en tiempo real."
    },
    {
      icon: Clock,
      title: "¿Inviertes más tiempo organizando que vendiendo?",
      description: "Pasas horas consolidando datos manualmente cuando podrías estar cerrando deals de alto valor."
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Si eres un CEO exitoso, probablemente te identificas con esto...
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Los líderes de empresas premium enfrentan desafíos únicos que las herramientas genéricas no pueden resolver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-6 h-6 text-red-400" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                {problem.title}
              </h3>
              
              <p className="text-slate-300 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-8 border border-red-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              El resultado: <span className="text-red-400">Estrés, oportunidades perdidas y crecimiento limitado</span>
            </h3>
            <p className="text-slate-300 text-lg">
              Pero hay una mejor manera de operar tu empresa...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;