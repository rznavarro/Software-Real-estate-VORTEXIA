import React from 'react';

const Integrations = () => {
  const integrations = [
    { name: 'Salesforce', category: 'CRM' },
    { name: 'HubSpot', category: 'Marketing' },
    { name: 'Google Sheets', category: 'Data' },
    { name: 'Airtable', category: 'Database' },
    { name: 'Apollo', category: 'Sales' },
    { name: 'Pipedrive', category: 'CRM' },
    { name: 'Monday.com', category: 'Project' },
    { name: 'Slack', category: 'Communication' },
    { name: 'Zoom', category: 'Meetings' },
    { name: 'Calendly', category: 'Scheduling' },
    { name: 'DocuSign', category: 'Documents' },
    { name: 'Stripe', category: 'Payments' }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Conecta con las herramientas que{' '}
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              ya usas
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            ExecutiveAI se integra perfectamente con más de 20 plataformas populares. 
            No cambies tu flujo de trabajo, mejóralo.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full border border-emerald-500/30">
            <span className="text-emerald-400 font-semibold">Configuración en menos de 5 minutos</span>
          </div>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-slate-700/50 to-slate-600/30 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-500 rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
                <span className="text-white font-bold text-lg">
                  {integration.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-white font-semibold mb-1">{integration.name}</h3>
              <p className="text-slate-400 text-sm">{integration.category}</p>
            </div>
          ))}
        </div>

        {/* Integration Process */}
        <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Proceso de integración simplificado
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Conecta</h4>
              <p className="text-slate-300">Autoriza el acceso a tus herramientas existentes con un solo clic</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Configura</h4>
              <p className="text-slate-300">La IA analiza tus datos y sugiere la mejor configuración automáticamente</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Organiza</h4>
              <p className="text-slate-300">Disfruta de tu empresa perfectamente organizada y optimizada</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
            Ver Todas las Integraciones
          </button>
        </div>
      </div>
    </section>
  );
};

export default Integrations;