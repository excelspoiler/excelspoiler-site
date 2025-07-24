import Image from "next/image";
import Link from "next/link";

export default function PerLeAziende() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg-1 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-excel-dark mb-6">
                Formazione Excel per <span className="text-excel-green">Aziende</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Potenzia le competenze del tuo team con corsi Excel personalizzati. 
                Riduci gli errori, aumenta la produttività e migliora l'efficienza operativa.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                <Link
                  href="/contatti"
                  className="bg-excel-green hover:bg-excel-green-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 block text-center sm:inline-block"
                >
                  Richiedi Preventivo
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-8 rounded-xl border-2 border-gray-300">
                <Image
                  src="/logo.png"
                  alt="Formazione Aziendale Excel"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="gradient-bg-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-excel-dark mb-4">
              Perché le Aziende Scelgono Excel Spoiler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trasforma il modo in cui il tuo team lavora con i dati
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300 text-center">
              <div className="w-16 h-16 bg-excel-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Aumento Produttività</h3>
              <p className="text-gray-600">
                I dipendenti formati riducono del 50% il tempo dedicato alle attività ripetitive
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300 text-center">
              <div className="w-16 h-16 bg-excel-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zM12 10c-3.309 0-6 2.691-6 6v2h12v-2c0-3.309-2.691-6-6-6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">ROI Garantito</h3>
              <p className="text-gray-600">
                Return on Investment medio del 300% entro 6 mesi dalla formazione
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300 text-center">
              <div className="w-16 h-16 bg-excel-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Riduzione Errori</h3>
              <p className="text-gray-600">
                Diminuzione del 80% degli errori nei fogli di calcolo e nei report
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="gradient-bg-3 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-excel-dark mb-4">
              I Nostri Servizi Aziendali
            </h2>
            <p className="text-xl text-gray-600">
              Soluzioni personalizzate per ogni esigenza aziendale
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl border-2 border-gray-300 p-8">
              <h3 className="text-2xl font-heading font-bold text-excel-dark mb-4">
                Formazione On-Site
              </h3>
              <p className="text-gray-600 mb-6">
                Corsi personalizzati direttamente nella tua azienda, adattati alle tue specifiche esigenze operative.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-excel-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-600">Formazione presso la vostra sede</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-excel-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-600">Contenuti adattati ai vostri processi</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-excel-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-600">Certificazioni ufficiali</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-excel-green mb-4">Da €500/giorno</div>
            </div>
            
            <div className="bg-white rounded-xl border-2 border-gray-300 p-8">
              <h3 className="text-2xl font-heading font-bold text-excel-dark mb-4">
                Consulenza & Automazione
              </h3>
              <p className="text-gray-600 mb-6">
                Ottimizzazione dei processi esistenti e sviluppo di soluzioni Excel personalizzate per la vostra azienda.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-excel-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-600">Analisi processi esistenti</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-excel-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-600">Sviluppo dashboard personalizzate</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-excel-green mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-gray-600">Automazione con VBA</span>
                </li>
              </ul>
              <div className="text-2xl font-bold text-excel-green mb-4">Da €80/ora</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="gradient-bg-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-excel-dark mb-4">
              Il Nostro Processo
            </h2>
            <p className="text-xl text-gray-600">
              Come lavoriamo con la vostra azienda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-excel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Analisi Necessità</h3>
              <p className="text-gray-600 text-sm">
                Valutiamo le competenze attuali del vostro team e identifichiamo le aree di miglioramento
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-excel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Progettazione</h3>
              <p className="text-gray-600 text-sm">
                Creiamo un programma formativo personalizzato basato sui vostri obiettivi specifici
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-excel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Erogazione</h3>
              <p className="text-gray-600 text-sm">
                Implementiamo la formazione con sessioni pratiche e supporto continuativo
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-excel-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Follow-up</h3>
              <p className="text-gray-600 text-sm">
                Monitoriamo i risultati e forniamo supporto post-formazione per garantire il successo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="gradient-bg-3 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-excel-dark mb-4">
              Storie di Successo
            </h2>
            <p className="text-xl text-gray-600">
              Risultati concreti ottenuti dalle aziende che hanno scelto Excel Spoiler
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border-2 border-gray-300">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-excel-dark mb-2">
                  TechCorp S.p.A. - Settore IT
                </h3>
                <p className="text-gray-600">
                  Azienda con 150 dipendenti nel settore tecnologico
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-excel-green">-60%</div>
                  <div className="text-sm text-gray-600">Tempo reportistica</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-excel-green">€50K</div>
                  <div className="text-sm text-gray-600">Risparmio annuale</div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm">
                "Grazie alla formazione Excel Spoiler, abbiamo automatizzato completamente 
                i nostri report mensili. Il team ora può concentrarsi su analisi strategiche 
                anziché perdere tempo in attività manuali."
              </p>
              
              <div className="mt-4 font-semibold text-excel-dark text-sm">
                - Marco Amministratore Delegato
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl border-2 border-gray-300">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-excel-dark mb-2">
                  Financial Solutions - Consulenza
                </h3>
                <p className="text-gray-600">
                  Studio di consulenza finanziaria con 50 consulenti
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-excel-green">+40%</div>
                  <div className="text-sm text-gray-600">Produttività team</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-excel-green">-90%</div>
                  <div className="text-sm text-gray-600">Errori calcolo</div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm">
                "La formazione Excel Spoiler ha rivoluzionato il nostro modo di lavorare. 
                I nostri consulenti ora creano modelli finanziari complessi in metà del tempo 
                e con una precisione impeccabile."
              </p>
              
              <div className="mt-4 font-semibold text-excel-dark text-sm">
                - Laura Direttore Operativo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-excel-green py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Trasforma la Tua Azienda Oggi
          </h2>
          <p className="text-xl text-white mb-8">
            Contattaci per una consulenza gratuita e scopri come Excel Spoiler 
            può migliorare l'efficienza del tuo team
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex justify-center">
            <Link
              href="/contatti"
              className="bg-white text-excel-green hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 block sm:inline-block"
            >
              Richiedi Consulenza Gratuita
            </Link>
            <a
              href="tel:+393201234567"
              className="border-2 border-white text-white hover:bg-white hover:text-excel-green px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 block sm:inline-block"
            >
              Chiamaci: +39 320 123 4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}