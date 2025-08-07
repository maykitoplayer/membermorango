import React from 'react';
import ModuleCard from './ModuleCard';
import ModuleViewer from './ModuleViewer';

const ContentTab: React.FC = () => {
  const [selectedModule, setSelectedModule] = React.useState<number | null>(null);

  const modules = [
    {
      id: 1,
      title: "Módulo 1 – Boas Vindas",
      description: "Apresentação do curso, como navegar na área de membros, o que esperar do 'Segredinho do Morango Gourmet' e dicas para aproveitar ao máximo o curso.",
      duration: "10 min",
      isNew: false,
      pdfUrl: "https://drive.google.com/file/d/1biemkiVSX0eVJtHysEpV103zm5-E7EjZ/view?usp=sharing"
    },
    {
      id: 2,
      title: "Módulo 2 – Morango do Amor Tradicional Gourmet",
      description: "Ingredientes, passo a passo da receita tradicional, dicas para acabamento profissional e variações de apresentação.",
      duration: "25 min",
      isNew: false,
      pdfUrl: "https://drive.google.com/file/d/1YS7Liv5FbX2w-zQ43lcWlyplFxabYLk9/view?usp=sharing"
    },
    {
      id: 3,
      title: "Módulo 3 – Morango com Chocolate Meio Amargo",
      description: "Lista de ingredientes, técnicas para temperar chocolate meio amargo, equilíbrio do sabor agridoce e sugestões de decoração.",
      duration: "30 min",
      isNew: false,
      pdfUrl: "https://drive.google.com/file/d/1MXTNBXXGhd05b9ZNejbpyRRkGXHhnhJE/view?usp=sharing"
    },
    {
      id: 4,
      title: "Módulo 4 – Morango com Recheio Cremoso de Coco",
      description: "Ingredientes para recheio de coco, modo de preparo do creme, como rechear sem quebrar e ideias para finalização estética.",
      duration: "28 min",
      isNew: false,
      pdfUrl: "https://drive.google.com/file/d/18bGeUQfSyO63WRkFm35pbv3i3PfiZ2ch/view?usp=sharing"
    },
    {
      id: 5,
      title: "Módulo 5 – Morango com Recheio de Ninho com Nutella",
      description: "Receita do recheio de Leite Ninho com Nutella, proporções ideais, técnicas de confeitaria e decoração com granulado.",
      duration: "22 min",
      isNew: true,
      pdfUrl: "https://drive.google.com/file/d/1mwE3mHK6X0j6vAjEjJ2ElDpKcnB0g2t0/view?usp=sharing"
    },
    {
      id: 6,
      title: "Módulo 6 – Morango com Recheio de Pistache",
      description: "Onde encontrar pistache de qualidade, preparo do recheio cremoso, dicas para corte e recheio, apresentação sofisticada.",
      duration: "35 min",
      isNew: false,
      pdfUrl: "https://drive.google.com/file/d/1MH1O9atdjLuDQdVZe1HJ5mrbg0pKUGmi/view?usp=sharing"
    },
    {
      id: 7,
      title: "Módulo 7 – Morango com Recheio de Leite Ninho e Maracujá",
      description: "Receita do recheio com toque de maracujá, como balancear a acidez, técnicas de montagem e decoração com sementes.",
      duration: "27 min",
      isNew: false,
      pdfUrl: "https://drive.google.com/file/d/1jD5MSYH-p4eWMXX93BNhSNQ6Dp52bfVS/view?usp=sharing"
    },
    {
      id: 8,
      title: "Módulo 8 – Morango com Recheio de Doce de Leite e Nozes",
      description: "Ingredientes para recheio de doce de leite, como incorporar nozes, passo a passo para rechear e finalização com nozes trituradas.",
      duration: "24 min",
      isNew: false,
      pdfUrl: "https://drive.google.com/file/d/1AdwkjWldoQBYzC4UyPbTs21s5Fakaogm/view?usp=sharing"
    },
    {
      id: 9,
      title: "Módulo 9 – Morango com Recheio de Trufa de Chocolate Branco",
      description: "Receita da trufa de chocolate branco, incorporação do sabor de frutas vermelhas, técnicas delicadas e decoração com frutas frescas.",
      duration: "32 min",
      isNew: true,
      pdfUrl: "https://drive.google.com/file/d/1hKT_3gfbYWkCNv_4xblG9zETe6pzKf45/view?usp=sharing"
    },
    {
      id: 10,
      title: "Módulo 10 – Plano Prático de Vendas – Fature até R$500/dia",
      description: "Estratégias para vender morangos gourmet, como precificar produtos, dicas de embalagem, apresentação e plano de ação para faturar.",
      duration: "45 min",
      isNew: true,
      pdfUrl: "https://drive.google.com/file/d/1INlDap3LzmQc9Et3qLqR154XsmDQZNSO/view?usp=sharing"
    }
  ];

  const handleModuleClick = (moduleId: number) => {
    setSelectedModule(moduleId);
  };

  const handleCloseModule = () => {
    setSelectedModule(null);
  };

  const selectedModuleData = modules.find(module => module.id === selectedModule);

  return (
    <>
      <div className="pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Bem-vinda ao Curso
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600">
              Segredinho do Morango Gourmet
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transforme morangos simples em delícias gourmet irresistíveis e descubra como faturar até R$500/dia com suas criações
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              title={module.title}
              description={module.description}
              duration={module.duration}
              isNew={module.isNew}
              onClick={() => handleModuleClick(module.id)}
            />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Sua jornada gourmet começa aqui!</h3>
          <p className="text-gray-600 mb-6">
            Complete todos os módulos e comece a faturar com suas deliciosas criações de morango gourmet
          </p>
          <div className="flex justify-center space-x-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">10</div>
              <div className="text-gray-600">Módulos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">5h+</div>
              <div className="text-gray-600">De conteúdo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">8</div>
              <div className="text-gray-600">Receitas exclusivas</div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {selectedModule && selectedModuleData && (
        <ModuleViewer
          moduleId={selectedModule}
          title={selectedModuleData.title}
          pdfUrl={selectedModuleData.pdfUrl}
          onClose={handleCloseModule}
        />
      )}
    </>
  );
};

export default ContentTab;