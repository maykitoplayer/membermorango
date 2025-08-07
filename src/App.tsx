import React, { useState } from 'react';
import Header from './components/Header';
import ContentTab from './components/ContentTab';
import SupportTab from './components/SupportTab';
import FAQTab from './components/FAQTab';
import ProfileTab from './components/ProfileTab';

function App() {
  const [activeTab, setActiveTab] = useState('conteudo');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'conteudo':
        return <ContentTab />;
      case 'suporte':
        return <SupportTab />;
      case 'faq':
        return <FAQTab />;
      case 'perfil':
        return <ProfileTab />;
      default:
        return <ContentTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-25 via-white to-red-25">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      {renderActiveTab()}
    </div>
  );
}

export default App;