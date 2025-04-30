import React from 'react';
import Chat from './components/Chat';
import { FaRobot, FaDatabase, FaClock, FaGlobe } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">InsightAI</h1>
          <p className="mt-2 text-gray-600">Your 24/7 Intelligent Assistant</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <FeatureCard
            icon={<FaClock className="w-6 h-6" />}
            title="24/7 Availability"
            description="Always ready to assist your customers and employees"
          />
          <FeatureCard
            icon={<FaDatabase className="w-6 h-6" />}
            title="Document Access"
            description="Quick access to company documents and information"
          />
          <FeatureCard
            icon={<FaGlobe className="w-6 h-6" />}
            title="Website Integration"
            description="Seamlessly integrates with your website"
          />
          <FeatureCard
            icon={<FaRobot className="w-6 h-6" />}
            title="Smart Responses"
            description="Accurate and context-aware answers"
          />
        </div>

        {/* Chat Interface */}
        <Chat />
      </main>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-500">{description}</p>
    </div>
  );
}

export default App;
