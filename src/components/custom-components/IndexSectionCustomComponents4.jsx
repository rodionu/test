import React from 'react';

const IndexSectionCustomComponents4 = () => {
    return (
        <section className="py-24 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto bg-slate-900 rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row">
    <div className="lg:w-1/2 p-10 sm:p-16 lg:p-24 flex flex-col justify-center">
      <span className="text-indigo-400 font-semibold tracking-wider text-sm uppercase mb-4">Simplu și eficient</span>
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
        Cum funcționează platforma?
      </h2>
      <p className="text-slate-400 text-lg leading-relaxed mb-10">
        Procesul nostru este conceput pentru a te conecta rapid cu cei mai buni profesioniști, eliminând stresul căutărilor interminabile.
      </p>
      <div className="flex items-center gap-4">
        <button className="px-8 py-4 bg-white text-slate-900 text-sm font-semibold rounded-full hover:bg-slate-100 transition-colors">
          Adaugă o cerere
        </button>
      </div>
    </div>
    <div className="lg:w-1/2 bg-slate-800/50 p-10 sm:p-16 lg:p-24 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="space-y-12 relative z-10">
        <div className="flex gap-6">
          <div className="shrink-0 w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center text-slate-300 font-heading font-bold">
            1
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold text-white mb-2">Descrie proiectul</h3>
            <p className="text-slate-400">Spune-ne ce ai nevoie. Durează mai puțin de 2 minute să completezi detaliile.</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="shrink-0 w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center text-slate-300 font-heading font-bold">
            2
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold text-white mb-2">Primești oferte</h3>
            <p className="text-slate-400">Specialiștii interesați îți vor trimite estimări de preț și disponibilitate.</p>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="shrink-0 w-12 h-12 rounded-full border border-indigo-500 bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-heading font-bold">
            3
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold text-white mb-2">Alege și colaborează</h3>
            <p className="text-slate-400">Compară profilele, citește recenziile și alege oferta care ți se potrivește cel mai bine.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents4;