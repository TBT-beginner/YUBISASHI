import React from 'react';
import { GrammarPart, PartType } from '../types';

interface GrammarBlockProps {
  part: GrammarPart;
  isSubPart?: boolean;
  showTranslation?: boolean;
}

const GrammarBlock: React.FC<GrammarBlockProps> = ({ part, isSubPart = false, showTranslation = false }) => {
  const hasSubParts = part.subParts && part.subParts.length > 0;
  
  const baseClasses = "flex flex-col items-center justify-start p-2 rounded-lg relative transition-all duration-300 cursor-default border-b-4";
  const hoverClasses = hasSubParts ? "hover:shadow-md" : "hover:scale-105"; // Reduced motion for containers

  let typeClasses = "";
  let labelClasses = "text-xs font-bold uppercase mb-1 tracking-wider px-2 py-0.5 rounded-full";
  let textClasses = "text-center font-semibold leading-tight px-1";
  let translationClasses = "mt-2 text-xs font-medium text-center opacity-90 border-t border-white/20 pt-1 w-full";

  // Color Palette - Designed for readability and distinction
  switch (part.type) {
    case PartType.SUBJECT:
      typeClasses = "bg-rose-50 border-rose-500 text-rose-900 shadow-rose-100";
      labelClasses += " bg-rose-500 text-white";
      break;
    case PartType.VERB:
      typeClasses = "bg-blue-50 border-blue-500 text-blue-900 shadow-blue-100";
      labelClasses += " bg-blue-500 text-white";
      break;
    case PartType.OBJECT:
      typeClasses = "bg-emerald-50 border-emerald-500 text-emerald-900 shadow-emerald-100";
      labelClasses += " bg-emerald-500 text-white";
      break;
    case PartType.COMPLEMENT:
      typeClasses = "bg-amber-50 border-amber-500 text-amber-900 shadow-amber-100";
      labelClasses += " bg-amber-500 text-white";
      break;
    case PartType.MODIFIER:
      typeClasses = "bg-gray-50 border-gray-400 border-dashed text-gray-700 shadow-gray-100";
      labelClasses += " bg-gray-400 text-white";
      break;
    case PartType.CONNECT:
      typeClasses = "bg-slate-100 border-slate-400 border-dotted text-slate-600";
      labelClasses += " bg-slate-400 text-white";
      break;
  }

  if (isSubPart) {
    textClasses += " text-sm";
    typeClasses += " min-w-[40px] m-0.5 shadow-sm"; // Tighter margins for sub-parts
  } else {
    textClasses += " text-base lg:text-xl";
    typeClasses += " min-w-[80px] flex-grow shadow-md";
  }

  // If it's a container with subparts, ensure it wraps nicely
  if (hasSubParts) {
    typeClasses += " justify-center";
  }

  return (
    <div className={`group ${baseClasses} ${typeClasses} ${hoverClasses}`}>
      {/* Label (S, V, O, etc.) */}
      <div className={labelClasses}>
        {part.type}
        {!isSubPart && part.label && (
           <span className="font-normal opacity-90 ml-1 text-[10px] hidden sm:inline">
             {part.label.replace(/^[SVOCM]\s\(/, '').replace(')', '')}
           </span>
        )}
      </div>

      {/* Main Text - HIDDEN if sub-parts exist to create "1-tier" look */}
      {!hasSubParts && (
        <div className={textClasses}>
          {part.text}
        </div>
      )}

      {/* Recursive Rendering for Clauses - Rendered INSTEAD of text */}
      {hasSubParts && (
        <div className="flex flex-wrap gap-1 w-full justify-center items-end mt-1">
          {part.subParts!.map((sub, idx) => (
            <GrammarBlock key={idx} part={sub} isSubPart={true} showTranslation={showTranslation} />
          ))}
        </div>
      )}

      {/* Japanese Translation - Shown at bottom of block/container */}
      {showTranslation && part.japanese && (
        <div className={translationClasses}>
          {part.japanese}
        </div>
      )}

      {/* Detail Tag (Time, Place, etc.) */}
      {part.detail && !isSubPart && (
        <div className="absolute -top-3 right-[-5px] bg-yellow-100 text-yellow-800 text-[9px] font-bold px-2 py-0.5 rounded-full border border-yellow-300 shadow-sm whitespace-nowrap z-10">
          {part.detail}
        </div>
      )}
    </div>
  );
};

export default GrammarBlock;