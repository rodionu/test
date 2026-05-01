import React from 'react';

const IndexSectionCustomComponents1 = () => {
    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 border-b border-slate-200/50">
  <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
    <div className="flex items-center gap-12">
      <a href="#" className="font-heading font-black text-2xl tracking-tighter text-slate-900 flex items-center gap-2">
        workdo<span className="text-indigo-600">.</span>
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="#" className="hover:text-slate-900 transition-colors">Servicii</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Cum funcționează</a>
        <a href="#" className="hover:text-slate-900 transition-colors">Pentru meseriași</a>
      </div>
    </div>
    <div className="flex items-center gap-6">
      <a href="#" className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Log In</a>
      <a href="#" className="text-sm font-medium bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">Cont nou</a>
    </div>
  </div>
</nav>


    );
};

export default IndexSectionCustomComponents1;