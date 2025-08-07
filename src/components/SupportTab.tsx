import React from 'react';
import { MessageCircle, Mail, Clock, CheckCircle } from 'lucide-react';

const SupportTab: React.FC = () => {
  const handleWhatsAppClick = () => {
    // Substitua pelo número real do WhatsApp
    window.open('https://wa.me/5511999999999?text=Olá, preciso de suporte com o curso Segredinho do Morango Gourmet', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:suporte@morangogourmet.com?subject=Suporte - Segredinho do Morango Gourmet', '_blank');
  };

  return (
    <div className="pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Centro de
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600">
              Suporte
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Estamos aqui para ajudar você em sua jornada gourmet! Entre em contato conosco sempre que precisar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div 
            onClick={handleWhatsAppClick}
            className="bg-white rounded-2xl shadow-lg p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-green-200"
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">WhatsApp</h3>
            <p className="text-gray-600 mb-6">
              Fale conosco diretamente pelo WhatsApp para suporte rápido e personalizado
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Falar com Suporte
            </button>
          </div>

          <div 
            onClick={handleEmailClick}
            className="bg-white rounded-2xl shadow-lg p-8 text-center cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-pink-200"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">E-mail</h3>
            <p className="text-gray-600 mb-6">
              Envie sua dúvida por e-mail e receba uma resposta detalhada em até 24h
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-red-500 hover:shadow-lg text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Enviar E-mail
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">📞 Horários de Atendimento</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Segunda a Sexta</h4>
              <p className="text-gray-600">9h às 18h</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Sábados</h4>
              <p className="text-gray-600">9h às 14h</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Domingos</h4>
              <p className="text-gray-600">Fechado</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">✅ Como podemos te ajudar</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Dúvidas sobre as receitas</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Problemas técnicos na plataforma</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Orientações sobre ingredientes</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Dicas de vendas e precificação</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Sugestões de melhorias</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Qualquer outra dúvida</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SupportTab;