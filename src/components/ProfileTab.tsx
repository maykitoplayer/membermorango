import React, { useState } from 'react';
import { User, Mail, Calendar, Award, BookOpen, TrendingUp, LogOut } from 'lucide-react';

interface ProfileTabProps {
  user: { name: string; email: string } | null;
  onLogout: () => void;
}

const ProfileTab: React.FC<ProfileTabProps> = ({ user, onLogout }) => {
  const [userStats] = useState({
    joinDate: new Date().toLocaleDateString('pt-BR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }),
    completedModules: 7,
    totalModules: 10,
    totalWatchTime: '3h 45min',
    level: 'Avançada'
  });

  const achievements = [
    { id: 1, title: 'Primeira Receita', description: 'Completou seu primeiro módulo', icon: '🥇', earned: true },
    { id: 2, title: 'Meio Caminho', description: 'Completou 50% do curso', icon: '🏆', earned: true },
    { id: 3, title: 'Especialista em Recheios', description: 'Assistiu todos os módulos de recheios', icon: '👩‍🍳', earned: true },
    { id: 4, title: 'Quase Lá!', description: 'Completou 90% do curso', icon: '⭐', earned: false },
    { id: 5, title: 'Mestre Gourmet', description: 'Completou 100% do curso', icon: '💎', earned: false },
    { id: 6, title: 'Empreendedora', description: 'Assistiu o módulo de vendas', icon: '💰', earned: false }
  ];

  const progress = (userStats.completedModules / userStats.totalModules) * 100;

  if (!user) return null;

  return (
    <div className="pt-20 pb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Meu
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600">
              Perfil
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Acompanhe seu progresso e conquistas no curso
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center space-x-6 mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800">{user.name}</h3>
              <p className="text-gray-600 flex items-center mt-1">
                <Mail className="w-4 h-4 mr-2" />
                {user.email}
              </p>
              <p className="text-gray-600 flex items-center mt-1">
                <Calendar className="w-4 h-4 mr-2" />
                Membro desde {userStats.joinDate}
              </p>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-300"
            >
              <LogOut className="w-4 h-4" />
              <span>Sair</span>
            </button>
          </div>

          {/* Progress Statistics */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{userStats.completedModules}/{userStats.totalModules}</div>
              <div className="text-sm text-gray-600">Módulos Completos</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{Math.round(progress)}%</div>
              <div className="text-sm text-gray-600">Progresso</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{userStats.totalWatchTime}</div>
              <div className="text-sm text-gray-600">Tempo Assistido</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800">{userStats.level}</div>
              <div className="text-sm text-gray-600">Nível Atual</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📊 Progresso do Curso</h3>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className="h-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-600">
            Você completou <span className="font-semibold text-pink-600">{userStats.completedModules} de {userStats.totalModules} módulos</span>
          </p>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">🏆 Suas Conquistas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  achievement.earned
                    ? 'border-pink-200 bg-gradient-to-r from-pink-50 to-red-50'
                    : 'border-gray-200 bg-gray-50 opacity-60'
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <h4 className={`font-semibold mb-1 ${achievement.earned ? 'text-gray-800' : 'text-gray-500'}`}>
                    {achievement.title}
                  </h4>
                  <p className={`text-sm ${achievement.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                    {achievement.description}
                  </p>
                  {achievement.earned && (
                    <div className="mt-2">
                      <span className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs px-2 py-1 rounded-full">
                        Conquistado!
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;