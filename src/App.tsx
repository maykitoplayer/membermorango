import React, { useState } from 'react';
import AuthPage from './components/AuthPage';
import Header from './components/Header';
import ContentTab from './components/ContentTab';
import SupportTab from './components/SupportTab';
import FAQTab from './components/FAQTab';
import ProfileTab from './components/ProfileTab';

function App() {
  const [activeTab, setActiveTab] = useState('conteudo');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const handleLogin = (userData: { name: string; email: string }) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setActiveTab('conteudo');
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'conteudo':
        return <ContentTab />;
      case 'suporte':
        return <SupportTab />;
      case 'faq':
        return <FAQTab />;
      case 'perfil':
        return <ProfileTab user={user} onLogout={handleLogout} />;
      default:
        return <ContentTab />;
    }
  };

  if (!isAuthenticated) {
    return <AuthPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-25 via-white to-red-25">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      {renderActiveTab()}
    </div>
  );
}

export default App;