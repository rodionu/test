import React from 'react';

const IndexSectionCustomComponents5 = () => {
    return (
        <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
      <div className="md:w-1/2 min-h-[300px] relative">
        <img src="https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=2000" alt="Meseriaș la lucru" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          Ești profesionist?
        </h2>
        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
          Alătură-te comunității noastre și găsește clienți noi în zona ta. Crește-ți afacerea cu cereri constante și un profil verificat.
        </p>
        <ul className="space-y-4 mb-10">
          <li className="flex items-center gap-3 text-slate-700"><svg className="w-5 h-5 text-indigo-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Acces la cereri locale zilnice
          </li>
          <li className="flex items-center gap-3 text-slate-700"><svg className="w-5 h-5 text-indigo-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Profil public pentru a atrage clienți
          </li>
          <li className="flex items-center gap-3 text-slate-700"><svg className="w-5 h-5 text-indigo-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Gestionare simplă a ofertelor
          </li>
        </ul>
        <div>
          <button className="px-8 py-3.5 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-colors shadow-sm">
            Înscrie-te ca furnizor
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


    );
};

export default IndexSectionCustomComponents5;