import React from 'react';
import { Brain, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">ExecutiveAI</span>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-md">
                La plataforma de IA que transforma empresas caóticas en máquinas organizadas de generar ingresos.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-slate-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>hola@executiveai.com</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Producto</h4>
              <ul className="space-y-4">
                <li><a href="#features" className="text-slate-300 hover:text-blue-400 transition-colors">Características</a></li>
                <li><a href="#pricing" className="text-slate-300 hover:text-blue-400 transition-colors">Precios</a></li>
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Integraciones</a></li>
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Soporte</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Contacto</a></li>
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Estado del Sistema</a></li>
                <li><a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Recursos</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400">
              © 2024 ExecutiveAI. Todos los derechos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;