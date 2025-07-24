import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg-1 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-excel-dark mb-6">
                Sblocca il Potere di 
                <span className="text-excel-green"> Excel</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Scopri i segreti nascosti di Excel con i nostri corsi avanzati. 
                Dalle formule base alle automazioni VBA, trasforma le tue competenze in un vantaggio competitivo.
              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                <Link
                  href="/corsi"
                  className="bg-excel-green hover:bg-excel-green-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 block text-center sm:inline-block"
                >
                  Esplora i Corsi
                </Link>
                <Link
                  href="/metodo-replay"
                  className="border-2 border-excel-green text-excel-green hover:bg-excel-green hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 block text-center sm:inline-block"
                >
                  Metodo Replay
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Excel Spoiler"
                width={500}
                height={300}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="gradient-bg-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-excel-dark mb-4">
              Perché Scegliere Excel Spoiler?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I nostri corsi sono progettati per professionisti che vogliono eccellere nel loro lavoro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl border-2 border-gray-300">
              <div className="w-16 h-16 bg-excel-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Metodo Pratico</h3>
              <p className="text-gray-600">
                Impara attraverso esempi reali e progetti pratici che puoi applicare subito nel tuo lavoro
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border-2 border-gray-300">
              <div className="w-16 h-16 bg-excel-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Supporto Personalizzato</h3>
              <p className="text-gray-600">
                Ricevi supporto diretto e feedback personalizzato per accelerare il tuo apprendimento
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border-2 border-gray-300">
              <div className="w-16 h-16 bg-excel-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Contenuti Aggiornati</h3>
              <p className="text-gray-600">
                I nostri corsi sono costantemente aggiornati con le ultime funzionalità e best practice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="gradient-bg-3 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-excel-dark mb-4">
              I Nostri Corsi Principali
            </h2>
            <p className="text-xl text-gray-600">
              Dalla base all'expertise, trova il corso perfetto per te
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border-2 border-gray-300 overflow-hidden hover:border-excel-green transition-colors duration-300">
              <div className="p-6">
                <div className="w-12 h-12 bg-excel-green rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">E1</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Excel Base</h3>
                <p className="text-gray-600 mb-4">
                  Le fondamenta di Excel: formule, funzioni e formatazione per iniziare alla grande
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-excel-green">€49</span>
                  <Link
                    href="/corsi/excel-base"
                    className="bg-excel-green hover:bg-excel-green-light text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
                  >
                    Scopri di più
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border-2 border-gray-300 overflow-hidden hover:border-excel-green transition-colors duration-300">
              <div className="p-6">
                <div className="w-12 h-12 bg-excel-green rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">E2</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">Excel Avanzato</h3>
                <p className="text-gray-600 mb-4">
                  Tabelle pivot, formule complesse e analisi dati per utenti esperti
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-excel-green">€99</span>
                  <Link
                    href="/corsi/excel-avanzato"
                    className="bg-excel-green hover:bg-excel-green-light text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
                  >
                    Scopri di più
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border-2 border-gray-300 overflow-hidden hover:border-excel-green transition-colors duration-300">
              <div className="p-6">
                <div className="w-12 h-12 bg-excel-green rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">VBA</span>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">VBA & Automazione</h3>
                <p className="text-gray-600 mb-4">
                  Automatizza Excel con VBA e crea soluzioni personalizzate potenti
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-excel-green">€149</span>
                  <Link
                    href="/corsi/vba"
                    className="bg-excel-green hover:bg-excel-green-light text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
                  >
                    Scopri di più
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-excel-green py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Pronto a Diventare un Excel Master?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Unisciti a migliaia di professionisti che hanno trasformato la loro carriera con Excel Spoiler
          </p>
          <Link
            href="/register"
            className="bg-white text-excel-green hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-block"
          >
            Inizia Ora - Registrati Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
