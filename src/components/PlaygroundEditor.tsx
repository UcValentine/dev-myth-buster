
import { useState } from 'react';
import { Code, CheckCircle } from 'lucide-react';

interface PlaygroundEditorProps {
  title: string;
  code: string;
  onChange: (code: string) => void;
  winner?: boolean;
}

export const PlaygroundEditor = ({ title, code, onChange, winner }: PlaygroundEditorProps) => {
  return (
    <div className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 ${
      winner ? 'border-emerald-400 shadow-lg shadow-emerald-400/20' : 'border-slate-700'
    }`}>
      <div className={`flex items-center justify-between p-4 border-b transition-colors ${
        winner ? 'border-emerald-400/30 bg-emerald-400/10' : 'border-slate-700'
      }`}>
        <div className="flex items-center gap-3">
          <Code className="w-5 h-5 text-slate-400" />
          <h3 className="font-semibold text-white">{title}</h3>
        </div>
        {winner && (
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Winner!</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <textarea
          value={code}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-64 bg-slate-900/50 border border-slate-600 rounded-lg p-4 text-slate-100 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50"
          placeholder="Enter your JavaScript code here..."
          spellCheck={false}
        />
      </div>
    </div>
  );
};
