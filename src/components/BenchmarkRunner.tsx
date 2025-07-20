
import { useState } from 'react';
import { Play, Loader, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface BenchmarkRunnerProps {
  codeA: string;
  codeB: string;
  onResults: (results: any) => void;
  isRunning: boolean;
  setIsRunning: (running: boolean) => void;
}

export const BenchmarkRunner = ({ codeA, codeB, onResults, isRunning, setIsRunning }: BenchmarkRunnerProps) => {
  const [iterations, setIterations] = useState('10000');
  
  const runBenchmark = async () => {
    setIsRunning(true);
    
    try {
      // Simulate benchmark execution
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const iterCount = parseInt(iterations);
      let timeA = 0;
      let timeB = 0;
      
      // Benchmark Code A
      const startA = performance.now();
      for (let i = 0; i < iterCount; i++) {
        try {
          eval(codeA);
        } catch (e) {
          console.error('Error in Code A:', e);
        }
      }
      timeA = performance.now() - startA;
      
      // Benchmark Code B  
      const startB = performance.now();
      for (let i = 0; i < iterCount; i++) {
        try {
          eval(codeB);
        } catch (e) {
          console.error('Error in Code B:', e);
        }
      }
      timeB = performance.now() - startB;
      
      const results = {
        timeA: timeA.toFixed(3),
        timeB: timeB.toFixed(3),
        winner: timeA < timeB ? 'A' : 'B',
        percentageDiff: Math.abs(((timeA - timeB) / Math.max(timeA, timeB)) * 100).toFixed(1),
        iterations: iterCount
      };
      
      onResults(results);
    } catch (error) {
      console.error('Benchmark error:', error);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <Settings className="w-5 h-5 text-blue-400" />
        <h3 className="text-lg font-semibold text-white">Benchmark Controls</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Iterations
          </label>
          <Select value={iterations} onValueChange={setIterations}>
            <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
              <SelectValue placeholder="Select iterations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1000">1,000</SelectItem>
              <SelectItem value="10000">10,000</SelectItem>
              <SelectItem value="100000">100,000</SelectItem>
              <SelectItem value="1000000">1,000,000</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <Button
          onClick={runBenchmark}
          disabled={isRunning}
          className="w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-medium py-3 rounded-lg transition-all duration-200 disabled:opacity-50"
        >
          {isRunning ? (
            <>
              <Loader className="w-5 h-5 mr-2 animate-spin" />
              Running Benchmark...
            </>
          ) : (
            <>
              <Play className="w-5 h-5 mr-2" />
              Run Benchmark
            </>
          )}
        </Button>
        
        <div className="text-xs text-slate-400 text-center">
          Tests will run in your browser's JavaScript engine
        </div>
      </div>
    </div>
  );
};
