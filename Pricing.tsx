import React, { useState } from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: 0,
      description: 'Perfecto para probar',
      icon: Star,
      features: [
        'Hasta 2 integraciones',
        'Dashboard básico',
        '10 items de inventario',
        'Reportes mensuales'
      ],
      cta: 'Empezar Gratis',
      popular: false
    },
    {
      name: 'Professional',
      price: isAnnual ? 39 : 47,
      originalPrice: isAnnual ? 47 : null,
      description: 'La elección de CEOs exitosos',
      icon: Zap,
      features: [
        'Integraciones ilimitadas',
        'IA organizadora completa',
        'Inventario ilimitado',
        'Reportes en tiempo real',
        'Segmentación automática',
        'Soporte prioritario'
      ],
      cta: 'Empezar Prueba de 14 Días',
      popular: true
    },
    {
      name: 'Enterprise',
      price: isAnnual ? 297 : 347,
      originalPrice: isAnnual ? 347 : null,
      description: 'Para empresas de alto crecimiento',
      icon: Crown,
      features: [
        'Todo lo anterior +',
        'IA predictiva avanzada',
        'Success Manager dedicado',
        'Reportes personalizados',
        'API personalizada',
        'Soporte 24/7'
      ],
      cta: 'Contactar Ventas',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Planes diseñados para{' '}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              tu crecimiento
            </span>
          </h2>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm rounded-xl p-1 border border-slate-700/50 mt-8">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                !isAnnual 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative ${
                isAnnual 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Anual
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs px-2 py-1 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-500/50 shadow-2xl shadow-blue-500/20 scale-105' 
                  : 'border-slate-700/50 hover:border-slate-600/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Más Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-300 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-2">
                    {plan.originalPrice && (
                      <span className="text-slate-400 line-through text-lg mr-2">
                        ${plan.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-bold text-white">
                      ${plan.price}
                    </span>
                    <span className="text-slate-300 ml-2">/mes</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-blue-500/25'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;