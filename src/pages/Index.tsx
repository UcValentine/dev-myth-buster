
import { useState } from 'react';
import { PlaygroundEditor } from '@/components/PlaygroundEditor';
import { BenchmarkRunner } from '@/components/BenchmarkRunner';
import { ResultsGraph } from '@/components/ResultsGraph';
import { MythLibrary } from '@/components/MythLibrary';
import { Header } from '@/components/Header';
import { FlaskRound, Zap, Target } from 'lucide-react';

const Index = () => {
  const [codeA, setCodeA] = useState('// Code A - Test your assumption\nconst arr = Array.from({length: 1000}, (_, i) => i);\nconst result = arr.map(x => x * 2);');
  const [codeB, setCodeB] = useState('// Code B - Alternative approach\nconst arr = Array.from({length: 1000}, (_, i) => i);\nconst result = [];\nfor(let i = 0; i < arr.length; i++) {\n  result.push(arr[i] * 2);\n}');
  const [benchmarkResults, setBenchmarkResults] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-8 pb-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FlaskRound className="w-12 h-12 text-emerald-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Dev Mythbusters
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Test common JavaScript & React assumptions with real-time benchmarking. 
            Settle debates with data, not opinions.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
            <Target className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Precise Testing</h3>
            <p className="text-slate-400">Microsecond-level performance measurement</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
            <Zap className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Real-time Results</h3>
            <p className="text-slate-400">Instant feedback on code performance</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center">
            <FlaskRound className="w-8 h-8 text-orange-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Built-in Myths</h3>
            <p className="text-slate-400">Curated collection of common debates</p>
          </div>
        </div>

        {/* Main Playground */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          {/* Code Editors */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <PlaygroundEditor
              title="Code A"
              code={codeA}
              onChange={setCodeA}
              winner={benchmarkResults?.winner === 'A'}
            />
            <PlaygroundEditor
              title="Code B"
              code={codeB}
              onChange={setCodeB}
              winner={benchmarkResults?.winner === 'B'}
            />
          </div>

          {/* Myth Library */}
          <div className="lg:col-span-1">
            <MythLibrary onMythSelect={(myth) => {
              setCodeA(myth.codeA);
              setCodeB(myth.codeB);
              setBenchmarkResults(null);
            }} />
          </div>
        </div>

        {/* Benchmark Controls & Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BenchmarkRunner
            codeA={codeA}
            codeB={codeB}
            onResults={setBenchmarkResults}
            isRunning={isRunning}
            setIsRunning={setIsRunning}
          />
          <ResultsGraph results={benchmarkResults} />
        </div>
      </div>
    </div>
  );
};

export default Index;
