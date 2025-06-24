import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';

interface QuizProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (answers: QuizAnswers) => void;
}

interface QuizAnswers {
  position: string;
  experience: string;
  industry: string;
  subIndustry: string;
  goal: string;
  source: string;
}

const QualificationQuiz: React.FC<QuizProps> = ({ isOpen, onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({
    position: '',
    experience: '',
    industry: '',
    subIndustry: '',
    goal: '',
    source: ''
  });

  const questions = [
    {
      id: 'position',
      question: '¿Cuál es tu cargo actual?',
      options: [
        'CEO / Fundador',
        'Director General',
        'Gerente General',
        'Director de Ventas',
        'Otro cargo ejecutivo'
      ]
    },
    {
      id: 'experience',
      question: '¿Cuántos años de experiencia tienes en tu rubro?',
      options: [
        'Menos de 2 años',
        '2-5 años',
        '5-10 años',
        '10-20 años',
        'Más de 20 años'
      ]
    },
    {
      id: 'industry',
      question: '¿A qué industria perteneces?',
      options: [
        'Real Estate',
        'Automotive',
        'Ambas industrias',
        'Otra industria similar',
        'Prefiero no especificar'
      ]
    },
    {
      id: 'subIndustry',
      question: '¿Cuál es tu especialización?',
      options: [
        'Propiedades de lujo/premium',
        'Vehículos de alta gama',
        'Comercial/corporativo',
        'Residencial masivo',
        'Múltiples segmentos'
      ]
    },
    {
      id: 'goal',
      question: '¿Cuál es tu principal objetivo?',
      options: [
        'Organizar mejor mi empresa',
        'Aumentar las ventas',
        'Reducir tiempo administrativo',
        'Mejorar seguimiento de clientes',
        'Integrar mis herramientas'
      ]
    },
    {
      id: 'source',
      question: '¿Cómo nos conociste?',
      options: [
        'Google / Búsqueda',
        'Redes sociales',
        'Recomendación',
        'Publicidad online',
        'Otro'
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    const currentQuestion = questions[currentStep];
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Quiz completed
      onComplete({
        ...answers,
        [currentQuestion.id]: value
      });
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-2xl border border-slate-700 max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-slate-400 text-sm">Pregunta {currentStep + 1} de {questions.length}</span>
            <span className="text-slate-400 text-sm">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-6">
            {questions[currentStep].question}
          </h3>
          
          <div className="space-y-3">
            {questions[currentStep].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 hover:border-blue-500/50 rounded-xl transition-all duration-200 text-white hover:transform hover:scale-[1.02]"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Skip Option */}
        <div className="text-center">
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-sm transition-colors"
          >
            Saltar por ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default QualificationQuiz;