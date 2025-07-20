import { FlaskRound, Github, Linkedin } from 'lucide-react';

export const Header = () => {
  return (
    <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FlaskRound className="w-8 h-8 text-emerald-400" />
            <span className="text-xl font-bold text-white">Dev Mythbusters</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#playground" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Playground
            </a>
            <a href="#myths" className="text-slate-300 hover:text-emerald-400 transition-colors">
              Myth Library
            </a>
            <a href="#about" className="text-slate-300 hover:text-emerald-400 transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/UcValentine"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/valentine-onah/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
