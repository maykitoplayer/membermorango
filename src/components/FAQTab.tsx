import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQTab: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "Posso usar qualquer tipo de morango?",
      answer: "Recomendamos usar morangos frescos, firmes e de tamanho médio a grande para melhores resultados. Morangos muito maduros podem ficar moles durante o processo de recheio. Prefira morangos da estação para garantir o melhor sabor e textura."
    },
    {
      id: 2,
      question: "Onde encontro os ingredientes para os recheios?",
      answer: "A maioria dos ingredientes pode ser encontrada em supermercados convencionais. Para ingredientes mais específicos como pistache ou chocolate de qualidade, recomendamos lojas especializadas em confeitaria ou compras online. No curso, fornecemos uma lista detalhada de fornecedores recomendados."
    },
    {
      id: 3,
      question: "Quanto tempo leva para preparar cada receita?",
      answer: "O tempo varia de acordo com a receita, mas em média leva entre 30 a 60 minutos para preparar uma porção de 20-25 morangos. Com prática, você conseguirá reduzir significativamente esse tempo. Algumas receitas com chocolate podem precisar de tempo adicional para resfriamento."
    },
    {
      id: 4,
      question: "Preciso de equipamentos especiais?",
      answer: "Não! A maioria das receitas pode ser feita com utensílios básicos de cozinha que você provavelmente já tem: facas pequenas, colheres, tigelas e formas para gelo. Para algumas receitas específicas, pode ser útil ter um saco de confeitar, mas não é obrigatório."
    },
    {
      id: 5,
      question: "Posso congelar os morangos gourmet?",
      answer: "Não recomendamos congelar os morangos já prontos, pois isso pode alterar a textura e o sabor. O ideal é prepará-los no máximo 2 dias antes do consumo e mantê-los refrigerados. Para recheios cremosos, o prazo é ainda menor - consuma em até 24 horas."
    },
    {
      id: 6,
      question: "Como calcular o preço de venda dos morangos?",
      answer: "No módulo 10, ensinamos uma fórmula específica que considera o custo dos ingredientes, tempo de preparo, margem de lucro desejada e valor percebido pelo cliente. Em média, cada morango gourmet pode ser vendido entre R$8 a R$15, dependendo da receita e do seu mercado local."
    },
    {
      id: 7,
      question: "Existe garantia de que conseguirei vender?",
      answer: "Não podemos garantir vendas, pois isso depende de vários fatores como dedicação, qualidade do produto, estratégia de marketing e mercado local. Porém, fornecemos todas as ferramentas, receitas testadas e estratégias de vendas para maximizar suas chances de sucesso no mercado de morangos gourmet."
    }
  ];

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Perguntas
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600">
              Frequentes
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Encontre respostas para as dúvidas mais comuns sobre o curso e as receitas de morango gourmet
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-pink-50 transition-colors duration-300 focus:outline-none focus:bg-pink-50"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                </div>
                <div className="flex-shrink-0">
                  {openQuestion === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-pink-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openQuestion === faq.id && (
                <div className="px-6 pb-5 animate-fadeIn">
                  <div className="pl-14">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">❓ Não encontrou sua resposta?</h3>
          <p className="text-gray-600 mb-6">
            Nossa equipe de suporte está pronta para ajudar você com qualquer dúvida específica sobre o curso
          </p>
          <button 
            onClick={() => window.open('https://wa.me/5511999999999?text=Tenho uma dúvida sobre o curso Segredinho do Morango Gourmet', '_blank')}
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:shadow-lg text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Falar com Suporte
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQTab;