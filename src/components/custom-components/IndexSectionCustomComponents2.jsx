import React from 'react';

const IndexSectionCustomComponents2 = () => {
    return (
        <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-48 overflow-hidden">
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-100/40 blur-[100px]" />
    <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-blue-50/60 blur-[80px]" />
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  </div>
  <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
    <div className="inline-flex p-1 bg-white/80 backdrop-blur border border-slate-200/60 rounded-full mb-10 shadow-sm">
      <button className="px-6 py-2 text-sm font-semibold rounded-full bg-slate-900 text-white shadow-sm transition-all" id="btn-cerere">Cerere</button>
      <button className="px-6 py-2 text-sm font-medium rounded-full text-slate-500 hover:text-slate-900 transition-all" id="btn-furnizor">Furnizor</button>
    </div>
    <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 max-w-4xl leading-[1.1]">
      Găsește specialiști <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">locali</span>
    </h1>
    <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
      Descrie ce ai nevoie și primești oferte de la specialiști verificați din zona ta. Simplu, rapid și sigur.
    </p>
    <div className="mt-12 w-full max-w-2xl bg-white p-2 sm:p-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col sm:flex-row items-center gap-2 focus-within:ring-2 focus-within:ring-slate-200 transition-all">
      <div className="flex-1 flex items-center pl-4 sm:pl-6 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" placeholder="Ce serviciu cauți?" className="w-full bg-transparent border-none focus:outline-none focus:ring-0 text-slate-900 placeholder:text-slate-400 px-4 py-3 sm:py-2 text-base" />
      </div>
      <button className="w-full sm:w-auto px-8 py-3.5 sm:py-3 bg-slate-900 text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-colors shrink-0">
        Cerere nouă
      </button>
    </div>
    <div className="mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
      <span className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Peste 5,000 specialiști</span>
      <span className="hidden sm:flex items-center gap-2"><svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> Verificare identitate</span>
    </div>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents2;