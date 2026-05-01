import React from 'react';

const IndexSectionCustomComponents3 = () => {
    return (
        <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
      <div className="max-w-2xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Categorii populare
        </h2>
        <p className="mt-4 text-slate-500 text-lg">
          Găsește exact profesionistul de care ai nevoie pentru proiectul tău.
        </p>
      </div>
      <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-2 group">
        Vezi toate categoriile 
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
      </a>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      <a href="#" className="group flex flex-col p-6 sm:p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300">
        <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">Construcții &amp; Amenajări</h3>
        <p className="text-sm text-slate-500">Renovări, zidărie, finisaje</p>
      </a>
      <a href="#" className="group flex flex-col p-6 sm:p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300">
        <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">Electricieni</h3>
        <p className="text-sm text-slate-500">Instalații, reparații, tablouri</p>
      </a>
      <a href="#" className="group flex flex-col p-6 sm:p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300">
        <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        </div>
        <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">Instalatori</h3>
        <p className="text-sm text-slate-500">Țevi, sanitare, termice</p>
      </a>
      <a href="#" className="group flex flex-col p-6 sm:p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300">
        <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </div>
        <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">Curățenie</h3>
        <p className="text-sm text-slate-500">Acasă, birouri, după constructor</p>
      </a>
    </div>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents3;