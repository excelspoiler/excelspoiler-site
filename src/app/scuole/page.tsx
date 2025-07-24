import Image from "next/image";
import Link from "next/link";

export default function PerLeScuole() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg-1 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-excel-dark mb-6">
                Excel per le <span className="text-excel-green">Scuole</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Prepara i tuoi studenti al mondo del lavoro con competenze Excel avanzate. 
                Programmi educativi personalizzati per scuole superiori e università.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                <Link
                  href="/contatti"
                  className="bg-excel-green hover:bg-excel-green-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 block text-center sm:inline-block"
                >
                  Richiedi Programma
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-xl border-2 border-gray-300">
                <Image
                  src="/logo.png"
                  alt="Excel per Scuole"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Benefits */}
      <section className="gradient-bg-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-excel-dark mb-4">
              Perché Excel è Fondamentale nell'Educazione
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competenze digitali essenziali per il successo accademico e professionale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300 text-center">
              <div className="w-16 h-16 bg-excel-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Preparazione Universitaria</h3>
              <p className="text-gray-600">
                Gli studenti acquisiscono competenze essenziali per corsi di economia, statistica e ricerca
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300 text-center">
              <div className="w-16 h-16 bg-excel-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Vantaggio Competitivo</h3>
              <p className="text-gray-600">
                Il 95% dei datori di lavoro richiede competenze Excel per posizioni d'ufficio
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300 text-center">
              <div className="w-16 h-16 bg-excel-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Pensiero Analitico</h3>
              <p className="text-gray-600">
                Excel sviluppa il ragionamento logico e le capacità di problem solving
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="gradient-bg-3 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-excel-dark mb-4">
              I Nostri Programmi Educativi
            </h2>
            <p className="text-xl text-gray-600">
              Percorsi formativi adattati ai diversi livelli scolastici
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border-2 border-gray-300 overflow-hidden">
              <div className="p-8">
                <div className="w-12 h-12 bg-excel-green rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">BS</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-excel-dark mb-4">
                  Scuole Superiori
                </h3>
                <p className="text-gray-600 mb-6">
                  Programma base per studenti di 14-18 anni. Focus su competenze pratiche e preparazione al mondo del lavoro.
                </p>
                
                <h4 className="font-semibold text-excel-dark mb-3">Cosa Include:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-excel-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600 text-sm">Formule e funzioni base</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-excel-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600 text-sm">Creazione grafici</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-excel-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600 text-sm">Gestione dati</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-excel-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600 text-sm">Progetti pratici</span>
                  </li>
                </ul>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-excel-green">€25</div>
                    <div className="text-sm text-gray-500">per studente/mese</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border-2 border-gray-300 overflow-hidden border-2 border-excel-green">
              <div className="bg-excel-green text-white text-center py-2 font-semibold">
                Più Popolare
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-excel-green rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">UNI</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-excel-dark mb-4">
                  Università
                </h3>
                <p className="text-gray-600 mb-6">
                  Programma avanzato per studenti universitari. Competenze professionali per tesi e ricerca.
                </p>
                
                <h4 className="font-semibold text-excel-dark mb-3">Cosa Include:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-excel-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600 text-sm">Analisi statistica avanzata</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-excel-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600 text-sm">Tabelle pivot complesse</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-excel-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600 text-sm">Modelli finanziari</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-excel-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600 text-sm">Power Query e Power BI</span>
                  </li>
                </ul>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-excel-green">€35</div>
                    <div className="text-sm text-gray-500">per studente/mese</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border-2 border-gray-300 overflow-hidden">
              <div className="p-8">
                <div className="w-12 h-12 bg-excel-green rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">DOC</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-excel-dark mb-4">
                  Docenti
                </h3>
                <p className="text-gray-600 mb-6">
                  Formazione per insegnanti. Impara a insegnare Excel efficacemente con risorse didattiche complete.
                </p>
                
                <h4 className="font-semibold text-excel-dark mb-3">Cosa Include:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-excel-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600 text-sm">Metodologie didattiche</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-excel-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600 text-sm">Materiale didattico pronto</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-excel-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600 text-sm">Esercizi e valutazioni</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-excel-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-gray-600 text-sm">Supporto continuo</span>
                  </li>
                </ul>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-excel-green">€199</div>
                    <div className="text-sm text-gray-500">corso completo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features for Schools */}
      <section className="gradient-bg-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-excel-dark mb-4">
              Vantaggi per la Tua Scuola
            </h2>
            <p className="text-xl text-gray-600">
              Strumenti e supporto dedicati per l'eccellenza educativa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300">
              <div className="w-12 h-12 bg-excel-green-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Curricolo Personalizzato</h3>
              <p className="text-gray-600 text-sm">
                Adattiamo i contenuti ai vostri obiettivi educativi e ai programmi ministeriali
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300">
              <div className="w-12 h-12 bg-excel-green-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Formazione Docenti</h3>
              <p className="text-gray-600 text-sm">
                Prepariamo i vostri insegnanti con workshop dedicati e materiale didattico
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300">
              <div className="w-12 h-12 bg-excel-green-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Dashboard Progresso</h3>
              <p className="text-gray-600 text-sm">
                Monitorate i progressi degli studenti con report dettagliati e analytics
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300">
              <div className="w-12 h-12 bg-excel-green-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Certificazioni</h3>
              <p className="text-gray-600 text-sm">
                Gli studenti ricevono certificati riconosciuti che valorizzano il loro CV
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300">
              <div className="w-12 h-12 bg-excel-green-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Supporto Tecnico</h3>
              <p className="text-gray-600 text-sm">
                Assistenza dedicata per docenti e studenti durante tutto l'anno scolastico
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300">
              <div className="w-12 h-12 bg-excel-green-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-3">Risorse Illimitate</h3>
              <p className="text-gray-600 text-sm">
                Accesso a tutti i materiali, video-lezioni ed esercizi per docenti e studenti
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="gradient-bg-3 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-excel-dark mb-4">
              Testimonianze dalle Scuole
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-300">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-excel-dark mb-2">
                  Liceo Scientifico "Da Vinci"
                </h3>
                <p className="text-gray-600">
                  Milano - 450 studenti
                </p>
              </div>
              
              <p className="text-gray-600 mb-6">
                "I nostri studenti dell'ultimo anno hanno acquisito competenze Excel 
                che li rendono immediatamente operativi nel mondo del lavoro. 
                Il 90% degli studenti che ha seguito il corso ha trovato lavoro o stage 
                entro 3 mesi dal diploma."
              </p>
              
              <div className="font-semibold text-excel-dark">
                Prof.ssa Elena Marchetti
                <div className="text-sm text-gray-500">Dirigente Scolastico</div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl border-2 border-gray-300">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-excel-dark mb-2">
                  Università Bocconi
                </h3>
                <p className="text-gray-600">
                  Milano - Facoltà di Economia
                </p>
              </div>
              
              <p className="text-gray-600 mb-6">
                "Excel Spoiler ha rivoluzionato il modo in cui insegniamo analisi quantitativa. 
                Gli studenti arrivano alle lezioni con competenze solide e possono concentrarsi 
                su concetti più avanzati. La qualità delle tesi di laurea è notevolmente migliorata."
              </p>
              
              <div className="font-semibold text-excel-dark">
                Prof. Marco Giuliani
                <div className="text-sm text-gray-500">Docente di Finanza Quantitativa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-excel-green py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Porta Excel nella Tua Scuola
          </h2>
          <p className="text-xl text-white mb-8">
            Contattaci per una presentazione gratuita e scopri come possiamo 
            arricchire l'offerta formativa della tua scuola
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex justify-center">
            <Link
              href="/contatti"
              className="bg-white text-excel-green hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 block sm:inline-block"
            >
              Richiedi Presentazione
            </Link>
            <a
              href="mailto:scuole@excelspoiler.it"
              className="border-2 border-white text-white hover:bg-white hover:text-excel-green px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 block sm:inline-block"
            >
              Email: scuole@excelspoiler.it
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}