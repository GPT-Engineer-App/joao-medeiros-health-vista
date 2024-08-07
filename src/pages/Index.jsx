import { useState } from 'react';
import { Pen, Globe, Stethoscope, Laptop, BookOpen, Flag, MapPin } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'strengths', label: 'Strengths' },
    { id: 'weaknesses', label: 'Weaknesses' },
    { id: 'future', label: 'Future' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">João Medeiros</h1>
        <p className="text-xl text-gray-400">Contributing Editor at WIRED | Author | Health & Tech Specialist</p>
        <div className="flex justify-center space-x-2 mt-4">
          <Pen size={24} />
          <Globe size={24} />
          <Stethoscope size={24} />
          <Laptop size={24} />
          <BookOpen size={24} />
          <Flag className="text-red-500" size={24} />
          <Flag className="text-green-500" size={24} />
        </div>
      </header>

      <nav className="flex justify-center space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full ${
              activeTab === tab.id ? 'bg-white text-black' : 'text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {activeTab === 'about' && (
          <section>
            <h2 className="text-3xl font-bold mb-4">Covering Health & Technology</h2>
            <p className="text-lg mb-4">
              Based on our AI agent's analysis, João Medeiros is a 40-year-old male Contributing Editor at WIRED and author, 
              specializing in health and technology topics with a global perspective.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="flex items-center"><MapPin className="mr-2" /> United Kingdom & United Arab Emirates</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                <p>Health Technology, Global Healthcare, Medical Innovations</p>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'strengths' && (
          <section>
            <h2 className="text-3xl font-bold mb-4">Key Strengths</h2>
            <ul className="space-y-4">
              <li className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Global Perspective</h3>
                <p>Demonstrates a broad worldview through international connections and diverse content</p>
              </li>
              <li className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Health Expertise</h3>
                <p>Showcases deep knowledge in healthcare and medical technology</p>
              </li>
              <li className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Network Building</h3>
                <p>Cultivates relationships with influential figures in tech and health sectors</p>
              </li>
            </ul>
          </section>
        )}

        {activeTab === 'weaknesses' && (
          <section>
            <h2 className="text-3xl font-bold mb-4">Areas for Improvement</h2>
            <ul className="space-y-4">
              <li className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Originality Deficit</h3>
                <p>Relies heavily on retweeting others' content rather than producing original insights</p>
              </li>
              <li className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Lack of Engagement</h3>
                <p>Minimal interaction with followers, missing opportunities for meaningful dialogue</p>
              </li>
              <li className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Limited Personal Voice</h3>
                <p>Struggles to convey a distinct personality or perspective in his online presence</p>
              </li>
            </ul>
          </section>
        )}

        {activeTab === 'future' && (
          <section>
            <h2 className="text-3xl font-bold mb-4">Future Aspirations</h2>
            <div className="bg-gray-900 p-4 rounded-lg mb-4">
              <h3 className="text-xl font-semibold mb-2">Biggest Goal</h3>
              <p>Revolutionizing global healthcare through technology, potentially through a groundbreaking platform or policy initiative that combines editorial expertise with a passion for health tech.</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Career Path</h3>
              <p>Destined to become a Global Health Tech Ambassador, creating a revolutionary platform connecting innovators, policymakers, and healthcare providers worldwide.</p>
            </div>
          </section>
        )}
      </main>

      <footer className="mt-12 py-6 text-center text-gray-400">
        <p>&copy; 2023 João Medeiros. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
