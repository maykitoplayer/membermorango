import React from 'react';
import { X, Download, FileText } from 'lucide-react';

interface ModuleViewerProps {
  moduleId: number;
  title: string;
  pdfUrl: string;
  onClose: () => void;
}

const ModuleViewer: React.FC<ModuleViewerProps> = ({ moduleId, title, pdfUrl, onClose }) => {
  // Converter URL do Google Drive para formato embarcável
  const getEmbedUrl = (driveUrl: string) => {
    const fileId = driveUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    if (fileId) {
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return driveUrl;
  };

  const embedUrl = getEmbedUrl(pdfUrl);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">{title}</h2>
              <p className="text-sm text-gray-600">Material de apoio do módulo</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => window.open(pdfUrl, '_blank')}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span>Baixar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 p-6">
          <div className="w-full h-full bg-gray-100 rounded-xl overflow-hidden">
            <iframe
              src={embedUrl}
              className="w-full h-full border-0"
              title={`PDF - ${title}`}
              allow="autoplay"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              💡 <strong>Dica:</strong> Use este material como guia durante a preparação das receitas
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleViewer;