import React, { useState, useEffect } from 'react';
import { SentenceData } from '../types';
import GrammarBlock from './GrammarBlock';

interface SentenceCardProps {
  data: SentenceData;
  isAdmin?: boolean;
  globalShowTranslation?: boolean;
  onUpdate?: (data: SentenceData) => void;
  onDelete?: (id: string) => void;
}

const SentenceCard: React.FC<SentenceCardProps> = ({ 
  data, 
  isAdmin, 
  globalShowTranslation = false,
  onUpdate, 
  onDelete 
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localShowTranslation, setLocalShowTranslation] = useState(false);
  
  const [formData, setFormData] = useState<SentenceData>(data);
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [partsJson, setPartsJson] = useState(JSON.stringify(data.parts, null, 2));

  // Determine effective translation visibility
  const showTranslation = globalShowTranslation || localShowTranslation;

  // Reset form data when prop changes
  useEffect(() => {
    setFormData(data);
    setPartsJson(JSON.stringify(data.parts, null, 2));
  }, [data]);

  const handleSave = () => {
    try {
      const parsedParts = JSON.parse(partsJson);
      const updated = {
        ...formData,
        parts: parsedParts
      };
      onUpdate?.(updated);
      setIsEditing(false);
      setJsonError(null);
    } catch (e) {
      setJsonError("Invalid JSON structure in Parts field.");
    }
  };

  const handleCancel = () => {
    setFormData(data);
    setPartsJson(JSON.stringify(data.parts, null, 2));
    setIsEditing(false);
    setJsonError(null);
  };

  if (isEditing) {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-400 mb-8 p-6">
        <h3 className="text-lg font-bold mb-4 text-gray-800">Edit Sentence (ID: {formData.id})</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Code</label>
            <input 
              type="text" 
              value={formData.code}
              onChange={(e) => setFormData({...formData, code: e.target.value})}
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Text</label>
            <input 
              type="text" 
              value={formData.fullText}
              onChange={(e) => setFormData({...formData, fullText: e.target.value})}
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>
        
        <div className="mb-4">
           <label className="block text-sm font-semibold text-gray-700 mb-1">Translation (Optional)</label>
            <input 
              type="text" 
              value={formData.translation || ''}
              onChange={(e) => setFormData({...formData, translation: e.target.value})}
              className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Structure Data (JSON)
            <span className="text-xs font-normal text-gray-500 ml-2">Edit parts array (add "japanese" field for translations)</span>
          </label>
          <textarea 
            value={partsJson}
            onChange={(e) => setPartsJson(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 font-mono text-xs h-64 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {jsonError && <p className="text-red-600 text-sm mt-1">{jsonError}</p>}
        </div>

        <div className="flex justify-end gap-3">
          <button onClick={handleCancel} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded font-medium">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700 shadow">Save Changes</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mb-8 transition-all hover:shadow-xl relative group">
      {/* Header Bar */}
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
            <span className="bg-indigo-600 text-white text-sm font-bold px-3 py-1 rounded shadow-sm">
                {data.code}
            </span>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Individual Translation Toggle */}
          <button 
            onClick={() => setLocalShowTranslation(!localShowTranslation)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors border flex items-center gap-1
              ${showTranslation 
                ? 'bg-blue-100 text-blue-700 border-blue-200' 
                : 'bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200'}
            `}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.89 18.89 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.077 17.077 0 003.293-3.643 19.024 19.024 0 01-3.406-2.516 1 1 0 111.624-1.162C5.51 9.811 6.072 10.885 6.458 12.035a19.355 19.355 0 002.802-1.848 16.92 16.92 0 002.342-3.687H13a1 1 0 011-1 1 1 0 01-1-1H7z" clipRule="evenodd" />
            </svg>
            {showTranslation ? 'Hide JP' : 'Show JP'}
          </button>

          {/* Admin Controls */}
          {isAdmin && (
            <>
              <div className="h-4 w-px bg-gray-300 mx-1"></div>
              <button 
                onClick={() => setIsEditing(true)}
                className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded font-medium transition-colors"
              >
                Edit
              </button>
              <button 
                onClick={() => onDelete?.(data.id)}
                className="text-xs bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded font-medium transition-colors"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6">
        {/* Original Sentence */}
        <p className="text-gray-800 mb-4 text-xl font-serif leading-relaxed">
          {data.fullText}
        </p>

        {/* Visual Breakdown */}
        <div className="flex flex-wrap gap-2 lg:gap-3 items-start pb-4">
          {data.parts.map((part, index) => (
            <GrammarBlock key={index} part={part} showTranslation={showTranslation} />
          ))}
        </div>

        {/* Full Translation Footer (optional backup) */}
        {showTranslation && data.translation && (
           <div className="mt-4 pt-4 border-t border-gray-100 text-gray-600 text-sm font-medium">
             <span className="bg-gray-200 text-gray-700 text-[10px] px-2 py-0.5 rounded uppercase mr-2">Whole</span>
             {data.translation}
           </div>
        )}
      </div>
    </div>
  );
};

export default SentenceCard;
