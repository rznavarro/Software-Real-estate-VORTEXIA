import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "CEO, Mendoza Properties",
      content: "ExecutiveAI transformó completamente cómo operamos. Cerramos 40% más deals desde que lo implementamos.",
      avatar: "CM",
      stats: "+40% más deals"
    },
    {
      name: "Ana Rodríguez",
      role: "Fundadora, Elite Motors",
      content: "La segmentación automática identificó 15 clientes VIP que ni sabíamos que teníamos. ROI increíble.",
      avatar: "AR",
      stats: "ROI del 300%"
    },
    {
      name: "Miguel Torres",
      role: "Director, Torres Group",
      content: "Manejo 3 empresas y ExecutiveAI me da vista 360° de todo. Es como tener un asistente súper inteligente.",
      avatar: "MT",
      stats: "3 empresas organizadas"
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Lo que dicen nuestros{' '}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              clientes CEOs
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-700/50 to-slate-600/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-blue-400 mb-6" />
              
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="inline-block bg-gradient-to-r from-emerald-500/20 to-teal-500/20 px-4 py-2 rounded-full border border-emerald-500/30 mb-6">
                <span className="text-emerald-400 font-semibold text-sm">
                  {testimonial.stats}
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              <div className="flex items-center mt-4 pt-4 border-t border-slate-700/50">
                {[...Array(5)].map((_, starIndex) => (
                  <Star 
                    key={starIndex} 
                    className="w-4 h-4 text-yellow-400 fill-current" 
                  />
                ))}
                <span className="text-slate-400 text-sm ml-2">5.0</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;