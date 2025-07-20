
import { useState } from 'react';
import { FlaskRound, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Myth {
  id: string;
  title: string;
  description: string;
  codeA: string;
  codeB: string;
  category: string;
}

const builtInMyths: Myth[] = [
  {
    id: 'for-vs-map',
    title: 'for vs map()',
    description: 'Traditional for loop vs functional map method',
    category: 'Array Methods',
    codeA: `// Traditional for loop
const arr = Array.from({length: 1000}, (_, i) => i);
const result = [];
for(let i = 0; i < arr.length; i++) {
  result.push(arr[i] * 2);
}`,
    codeB: `// Functional map
const arr = Array.from({length: 1000}, (_, i) => i);
const result = arr.map(x => x * 2);`
  },
  {
    id: 'let-vs-const',
    title: 'let vs const',
    description: 'Performance difference between let and const',
    category: 'Variables',
    codeA: `// Using let
let sum = 0;
for(let i = 0; i < 1000; i++) {
  let temp = i * 2;
  sum += temp;
}`,
    codeB: `// Using const
let sum = 0;
for(let i = 0; i < 1000; i++) {
  const temp = i * 2;
  sum += temp;
}`
  },
  {
    id: 'foreach-vs-for',
    title: 'forEach vs for',
    description: 'Array forEach method vs traditional for loop',
    category: 'Array Methods',
    codeA: `// forEach method
const arr = Array.from({length: 1000}, (_, i) => i);
let sum = 0;
arr.forEach(x => sum += x);`,
    codeB: `// Traditional for loop
const arr = Array.from({length: 1000}, (_, i) => i);
let sum = 0;
for(let i = 0; i < arr.length; i++) {
  sum += arr[i];
}`
  },
  {
    id: 'object-dot-vs-bracket',
    title: 'obj.prop vs obj["prop"]',
    description: 'Dot notation vs bracket notation performance',
    category: 'Objects',
    codeA: `// Dot notation
const obj = { name: 'test', value: 42, count: 100 };
let result = '';
for(let i = 0; i < 1000; i++) {
  result += obj.name + obj.value + obj.count;
}`,
    codeB: `// Bracket notation
const obj = { name: 'test', value: 42, count: 100 };
let result = '';
for(let i = 0; i < 1000; i++) {
  result += obj['name'] + obj['value'] + obj['count'];
}`
  }
];

interface MythLibraryProps {
  onMythSelect: (myth: Myth) => void;
}

export const MythLibrary = ({ onMythSelect }: MythLibraryProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(builtInMyths.map(myth => myth.category))];
  const filteredMyths = selectedCategory === 'All' 
    ? builtInMyths 
    : builtInMyths.filter(myth => myth.category === selectedCategory);

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <FlaskRound className="w-5 h-5 text-purple-400" />
        <h3 className="text-lg font-semibold text-white">Myth Library</h3>
      </div>
      
      {/* Category Filter */}
      <div className="mb-4">
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-400/50"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      
      {/* Myths List */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {filteredMyths.map((myth) => (
          <div
            key={myth.id}
            className="p-4 bg-slate-900/30 border border-slate-600 rounded-lg hover:border-purple-400/50 cursor-pointer transition-all duration-200 group"
            onClick={() => onMythSelect(myth)}
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-white group-hover:text-purple-400 transition-colors">
                {myth.title}
              </h4>
              <ChevronDown className="w-4 h-4 text-slate-400 transform group-hover:rotate-180 transition-transform" />
            </div>
            <p className="text-sm text-slate-400 mb-2">{myth.description}</p>
            <div className="inline-block px-2 py-1 bg-purple-400/20 text-purple-300 text-xs rounded-full">
              {myth.category}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-slate-700">
        <Button 
          variant="outline" 
          className="w-full text-slate-300 border-slate-600 hover:bg-slate-700/50"
        >
          + Add Custom Myth
        </Button>
      </div>
    </div>
  );
};
