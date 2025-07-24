import Image from "next/image";
import Link from "next/link";

export default function MetodoReplay() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg-1 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-excel-dark mb-6">
              Il Metodo <span className="text-excel-green">Replay</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Un approccio rivoluzionario all'apprendimento di Excel basato sulla ripetizione intelligente 
              e sulla pratica guidata. Impara, applica, perfeziona.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="gradient-bg-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-excel-dark mb-6">
                Come Funziona il Metodo Replay
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Il nostro metodo si basa su tre pilastri fondamentali che garantiscono 
                un apprendimento duraturo e efficace.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-excel-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Osserva</h3>
                    <p className="text-gray-600">
                      Guarda video dettagliati che mostrano ogni passaggio, 
                      dalla teoria alla pratica applicata.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-excel-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ripeti</h3>
                    <p className="text-gray-600">
                      Replica gli stessi esercizi seguendo le guide passo-passo 
                      per consolidare la conoscenza.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-excel-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Applica</h3>
                    <p className="text-gray-600">
                      Usa le competenze acquisite in progetti reali e 
                      ricevi feedback personalizzato.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-xl border-2 border-gray-300">
                <Image
                  src="/logo.png"
                  alt="Metodo Replay"
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
      <section className="gradient-bg-3 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-excel-dark mb-4">
              I Vantaggi del Metodo Replay
            </h2>
            <p className="text-xl text-gray-600">
              Perché migliaia di professionisti scelgono il nostro approccio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300">
              <div className="w-12 h-12 bg-excel-green-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Apprendimento Accelerato</h3>
              <p className="text-gray-600">
                Riduci del 70% il tempo necessario per padroneggiare Excel 
                grazie alla ripetizione strutturata.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300">
              <div className="w-12 h-12 bg-excel-green-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Memorizzazione Duratura</h3>
              <p className="text-gray-600">
                Le competenze acquisite rimangono nella memoria a lungo termine 
                grazie alla pratica ripetuta.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300">
              <div className="w-12 h-12 bg-excel-green-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12 6V4a2 2 0 00-2-2H4a2 2 0 00-2 2v7a2 2 0 002 2h6a2 2 0 002-2V6zM6 8a1 1 0 100-2 1 1 0 000 2zm8-4v10l-3-3-3 3V4h6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Applicazione Pratica</h3>
              <p className="text-gray-600">
                Ogni concetto è immediatamente applicabile nel tuo lavoro quotidiano 
                per risultati concreti.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300">
              <div className="w-12 h-12 bg-excel-green-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Feedback Personalizzato</h3>
              <p className="text-gray-600">
                Ricevi correzioni e suggerimenti mirati per migliorare 
                continuamente le tue performance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300">
              <div className="w-12 h-12 bg-excel-green-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Monitoraggio Progressi</h3>
              <p className="text-gray-600">
                Traccia i tuoi miglioramenti con metriche dettagliate 
                e benchmark di settore.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300">
              <div className="w-12 h-12 bg-excel-green-light rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Flessibilità Temporale</h3>
              <p className="text-gray-600">
                Studia quando vuoi, al tuo ritmo, con accesso illimitato 
                ai contenuti per 12 mesi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="gradient-bg-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-excel-dark mb-4">
              Cosa Dicono i Nostri Studenti
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Il Metodo Replay ha trasformato il mio approccio a Excel. 
                In 3 mesi sono passata da principiante a power user!"
              </p>
              <div className="font-semibold text-excel-dark">
                Maria Rossi
                <div className="text-sm text-gray-500">Controller Finanziario</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Fantastico! Ho automatizzato tutti i miei report mensili. 
                Risparmio 20 ore al mese grazie a quello che ho imparato."
              </p>
              <div className="font-semibold text-excel-dark">
                Luca Bianchi
                <div className="text-sm text-gray-500">Data Analyst</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border-2 border-gray-300">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Il supporto personalizzato è incredibile. Ogni dubbio viene risolto 
                velocemente con esempi pratici."
              </p>
              <div className="font-semibold text-excel-dark">
                Anna Verdi
                <div className="text-sm text-gray-500">Project Manager</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-excel-green py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Prova il Metodo Replay Oggi
          </h2>
          <p className="text-xl text-white mb-8">
            Inizia il tuo percorso verso la maestria di Excel con il nostro metodo rivoluzionario
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex justify-center">
            <Link
              href="/corsi"
              className="bg-white text-excel-green hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 block sm:inline-block"
            >
              Esplora i Corsi
            </Link>
            <Link
              href="/register"
              className="border-2 border-white text-white hover:bg-white hover:text-excel-green px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 block sm:inline-block"
            >
              Registrati Gratis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}