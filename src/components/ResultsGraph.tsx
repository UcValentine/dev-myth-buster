
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Trophy, Clock } from 'lucide-react';

interface ResultsGraphProps {
  results: any;
}

export const ResultsGraph = ({ results }: ResultsGraphProps) => {
  if (!results) {
    return (
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Trophy className="w-5 h-5 text-orange-400" />
          <h3 className="text-lg font-semibold text-white">Results</h3>
        </div>
        <div className="text-center py-12">
          <Clock className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <p className="text-slate-400">Run a benchmark to see results</p>
        </div>
      </div>
    );
  }

  const chartData = [
    {
      name: 'Code A',
      time: parseFloat(results.timeA),
      fill: results.winner === 'A' ? '#10b981' : '#64748b'
    },
    {
      name: 'Code B', 
      time: parseFloat(results.timeB),
      fill: results.winner === 'B' ? '#10b981' : '#64748b'
    }
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-5 h-5 text-orange-400" />
        <h3 className="text-lg font-semibold text-white">Results</h3>
      </div>
      
      {/* Performance Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className={`p-4 rounded-lg border ${
          results.winner === 'A' ? 'bg-emerald-400/10 border-emerald-400/30' : 'bg-slate-700/30 border-slate-600'
        }`}>
          <div className="text-sm text-slate-400 mb-1">Code A</div>
          <div className="text-xl font-bold text-white">{results.timeA}ms</div>
          {results.winner === 'A' && (
            <div className="text-xs text-emerald-400 font-medium mt-1">Winner! 🏆</div>
          )}
        </div>
        
        <div className={`p-4 rounded-lg border ${
          results.winner === 'B' ? 'bg-emerald-400/10 border-emerald-400/30' : 'bg-slate-700/30 border-slate-600'
        }`}>
          <div className="text-sm text-slate-400 mb-1">Code B</div>
          <div className="text-xl font-bold text-white">{results.timeB}ms</div>
          {results.winner === 'B' && (
            <div className="text-xs text-emerald-400 font-medium mt-1">Winner! 🏆</div>
          )}
        </div>
      </div>
      
      {/* Chart */}
      <div className="h-48 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" tick={{ fill: '#9ca3af' }} />
            <YAxis tick={{ fill: '#9ca3af' }} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1e293b', 
                border: '1px solid #475569',
                borderRadius: '8px',
                color: '#fff'
              }}
              formatter={(value) => [`${value}ms`, 'Execution Time']}
            />
            <Bar dataKey="time" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Performance Difference */}
      <div className="text-center p-4 bg-slate-900/50 rounded-lg">
        <div className="text-sm text-slate-400 mb-1">Performance Difference</div>
        <div className="text-lg font-bold text-orange-400">
          {results.percentageDiff}% faster
        </div>
        <div className="text-xs text-slate-500 mt-1">
          Based on {results.iterations.toLocaleString()} iterations
        </div>
      </div>
    </div>
  );
};
