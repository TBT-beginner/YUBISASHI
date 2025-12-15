import React, { useState } from 'react';
import { LESSONS } from './constants';
import { SentenceData, PartType, LessonData } from './types';
import SentenceCard from './components/SentenceCard';
import Dashboard from './components/Dashboard';

// Credentials are obfuscated (Base64) to prevent plain-text reading in the source code.
// In a real production app with a backend, auth should be server-side.
const ADMIN_EMAIL_B64 = 'dG9iaXRhQGtpcnlvLmFjLmpw';
const ADMIN_PASS_B64 = 'MTIzNDU2Nzg5MCE=';

const App: React.FC = () => {
  // Navigation State
  const [activeLesson, setActiveLesson] = useState<LessonData | null>(null);
  
  // Data State (Loaded from active lesson)
  const [sentences, setSentences] = useState<SentenceData[]>([]);
  
  // Auth & UI State
  const [userEmail, setUserEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [globalShowTranslation, setGlobalShowTranslation] = useState(false);

  // Load a lesson
  const handleSelectLesson = (lesson: LessonData) => {
    setActiveLesson(lesson);
    setSentences(lesson.sentences);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back to Dashboard
  const handleBackToDashboard = () => {
    setActiveLesson(null);
    setSentences([]);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Compare obfuscated values
    const inputEmailB64 = btoa(loginEmail);
    const inputPassB64 = btoa(loginPass);

    if (inputEmailB64 === ADMIN_EMAIL_B64 && inputPassB64 === ADMIN_PASS_B64) {
      setIsAdmin(true);
      setUserEmail(loginEmail);
      setShowLogin(false);
      setLoginPass(''); // Clear password from state security measure
    } else {
      alert('Access Denied: Invalid credentials.');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setUserEmail('');
    setLoginEmail('');
    setLoginPass('');
  };

  const handleUpdateSentence = (updatedData: SentenceData) => {
    setSentences(prev => prev.map(s => s.id === updatedData.id ? updatedData : s));
  };

  const handleDeleteSentence = (id: string) => {
    if (window.confirm('Are you sure you want to delete this sentence?')) {
      setSentences(prev => prev.filter(s => s.id !== id));
    }
  };

  const handleAddSentence = () => {
    const newSentence: SentenceData = {
      id: Date.now().toString(),
      code: '1A',
      fullText: 'New sentence example.',
      parts: [
        { text: 'New sentence', type: PartType.SUBJECT, label: 'S' },
        { text: 'example', type: PartType.VERB, label: 'V' }
      ]
    };
    setSentences([newSentence, ...sentences]);
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header */}
      <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
             {/* Back Button (Only visible when inside a lesson) */}
             {activeLesson && (
               <button 
                 onClick={handleBackToDashboard}
                 className="p-1.5 rounded-full hover:bg-gray-700 transition-colors text-gray-300 hover:text-white"
                 title="Back to Dashboard"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                 </svg>
               </button>
             )}

            <div className="flex items-center gap-2 cursor-pointer" onClick={handleBackToDashboard}>
              <div className="bg-white text-black font-bold p-1 rounded w-8 h-8 flex items-center justify-center text-xl">S</div>
              <h1 className="text-xl font-bold tracking-tight">Grammar<span className="text-blue-400">Viz</span></h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {activeLesson && (
              <>
                {/* Global Translation Toggle */}
                <button 
                  onClick={() => setGlobalShowTranslation(!globalShowTranslation)}
                  className={`text-sm px-4 py-2 rounded-full font-bold transition-all shadow-sm flex items-center gap-2
                    ${globalShowTranslation 
                      ? 'bg-blue-500 text-white hover:bg-blue-600' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}
                  `}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.89 18.89 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.077 17.077 0 003.293-3.643 19.024 19.024 0 01-3.406-2.516 1 1 0 111.624-1.162C5.51 9.811 6.072 10.885 6.458 12.035a19.355 19.355 0 002.802-1.848 16.92 16.92 0 002.342-3.687H13a1 1 0 011-1 1 1 0 01-1-1H7z" clipRule="evenodd" />
                  </svg>
                  {globalShowTranslation ? 'JP: ON' : 'JP: OFF'}
                </button>
                <div className="h-6 w-px bg-gray-700"></div>
              </>
            )}

            {isAdmin ? (
              <div className="flex items-center gap-3">
                <span className="text-xs bg-green-600 px-2 py-1 rounded text-white font-bold hidden sm:inline">ADMIN</span>
                <button onClick={handleLogout} className="text-sm text-gray-300 hover:text-white underline">Logout</button>
              </div>
            ) : (
              <button 
                onClick={() => setShowLogin(true)}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                Admin
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm">
            <h2 className="text-xl font-bold mb-4">Admin Access</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address (ID)</label>
                <input 
                  type="email" 
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder=""
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  autoFocus
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input 
                  type="password" 
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  placeholder="••••••••"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button 
                  type="button" 
                  onClick={() => setShowLogin(false)} 
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-medium"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <main className="max-w-5xl mx-auto px-4 mt-8">
        
        {!activeLesson ? (
          /* Dashboard View */
          <Dashboard lessons={LESSONS} onSelectLesson={handleSelectLesson} />
        ) : (
          /* Lesson View */
          <div>
            {/* Lesson Header */}
            <div className="mb-8 border-b border-gray-200 pb-4">
              <h2 className="text-2xl font-bold text-gray-900">{activeLesson.title}</h2>
              {activeLesson.subtitle && <p className="text-gray-600 mt-1">{activeLesson.subtitle}</p>}
            </div>

            {/* Legend / Color Code */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="bg-gray-100 p-1 rounded">Legend</span>
                <span className="text-sm font-normal text-gray-500">Sentence Parts Color Code</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-sm">
                <div className="flex items-center gap-2"><span className="w-4 h-4 bg-rose-50 border border-rose-500 rounded"></span> S (Subject)</div>
                <div className="flex items-center gap-2"><span className="w-4 h-4 bg-blue-50 border border-blue-500 rounded"></span> V (Verb)</div>
                <div className="flex items-center gap-2"><span className="w-4 h-4 bg-emerald-50 border border-emerald-500 rounded"></span> O (Object)</div>
                <div className="flex items-center gap-2"><span className="w-4 h-4 bg-amber-50 border border-amber-500 rounded"></span> C (Complement)</div>
                <div className="flex items-center gap-2"><span className="w-4 h-4 bg-gray-50 border border-dashed border-gray-400 rounded"></span> M (Modifier)</div>
                <div className="flex items-center gap-2"><span className="w-4 h-4 bg-slate-100 border border-dotted border-slate-400 rounded"></span> Clause/Conn</div>
              </div>
            </div>

            {/* Admin Toolbar */}
            {isAdmin && (
              <div className="mb-8 flex justify-end">
                <button 
                  onClick={handleAddSentence}
                  className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 flex items-center gap-2 font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Add New Sentence
                </button>
              </div>
            )}

            {/* Sentences List */}
            <div className="space-y-8">
              {sentences.length === 0 ? (
                <div className="text-center py-12 text-gray-500 bg-white rounded-lg border border-dashed border-gray-300">
                  No sentences found in this lesson.
                </div>
              ) : (
                sentences.map((data) => (
                  <SentenceCard 
                    key={data.id} 
                    data={data} 
                    isAdmin={isAdmin}
                    globalShowTranslation={globalShowTranslation}
                    onUpdate={handleUpdateSentence}
                    onDelete={handleDeleteSentence}
                  />
                ))
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
