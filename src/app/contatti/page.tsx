'use client'

import { useState } from 'react'

export default function Contatti() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'generale'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implementare invio form
    console.log('Form submitted:', formData)
    alert('Grazie per il tuo messaggio! Ti risponderemo al più presto.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg-1 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-excel-dark mb-6">
            <span className="text-excel-green">Contattaci</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Hai domande sui nostri corsi? Vuoi informazioni per la tua azienda o scuola? 
            Siamo qui per aiutarti. Scrivici o chiamaci!
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="gradient-bg-2 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-excel-dark mb-8">
                Informazioni di Contatto
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-excel-green-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-excel-dark mb-1">Email</h3>
                    <p className="text-gray-600">info@excelspoiler.it</p>
                    <p className="text-gray-600 text-sm mt-1">Rispondiamo entro 24 ore</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-excel-green-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-excel-dark mb-1">Telefono</h3>
                    <p className="text-gray-600">+39 320 123 4567</p>
                    <p className="text-gray-600 text-sm mt-1">Lun-Ven 9:00-18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-excel-green-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-excel-dark mb-1">Sede</h3>
                    <p className="text-gray-600">Milano, Italia</p>
                    <p className="text-gray-600 text-sm mt-1">Formazione online e on-site</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-excel-green-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-excel-dark mb-1">Orari di Supporto</h3>
                    <p className="text-gray-600">Lunedì - Venerdì: 9:00 - 18:00</p>
                    <p className="text-gray-600">Sabato: 9:00 - 13:00</p>
                    <p className="text-gray-600 text-sm mt-1">Supporto email 24/7</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-excel-dark mb-4">Contatti Specializzati</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Aziende e Formazione Corporate</span>
                    <a href="mailto:aziende@excelspoiler.it" className="text-excel-green hover:text-excel-green-light font-medium">
                      aziende@excelspoiler.it
                    </a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Scuole e Università</span>
                    <a href="mailto:scuole@excelspoiler.it" className="text-excel-green hover:text-excel-green-light font-medium">
                      scuole@excelspoiler.it
                    </a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Supporto Tecnico</span>
                    <a href="mailto:supporto@excelspoiler.it" className="text-excel-green hover:text-excel-green-light font-medium">
                      supporto@excelspoiler.it
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-heading font-bold text-excel-dark mb-6">
                  Invia un Messaggio
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome e Cognome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-excel-green focus:border-transparent"
                        placeholder="Il tuo nome completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-excel-green focus:border-transparent"
                        placeholder="la-tua-email@esempio.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo di Richiesta
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-excel-green focus:border-transparent"
                    >
                      <option value="generale">Informazioni Generali</option>
                      <option value="corsi">Domande sui Corsi</option>
                      <option value="aziende">Formazione Aziendale</option>
                      <option value="scuole">Programmi per Scuole</option>
                      <option value="supporto">Supporto Tecnico</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Oggetto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-excel-green focus:border-transparent"
                      placeholder="Riassumi brevemente la tua richiesta"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Messaggio *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-excel-green focus:border-transparent"
                      placeholder="Descrivi la tua richiesta in dettaglio..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-excel-green hover:bg-excel-green-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                  >
                    Invia Messaggio
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="gradient-bg-3 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-excel-dark mb-4">
              Domande Frequenti
            </h2>
            <p className="text-xl text-gray-600">
              Le risposte alle domande più comuni sui nostri servizi
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-excel-dark mb-3">
                Quanto tempo ho per completare un corso?
              </h3>
              <p className="text-gray-600">
                Hai accesso illimitato ai contenuti per 12 mesi dall'acquisto. 
                Puoi studiare al tuo ritmo e rivedere le lezioni tutte le volte che vuoi.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-excel-dark mb-3">
                I corsi includono certificazione?
              </h3>
              <p className="text-gray-600">
                Sì, al completamento di ogni corso ricevi un certificato digitale 
                che attesta le competenze acquisite, riconosciuto nel mondo del lavoro.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-excel-dark mb-3">
                Offrite supporto durante il corso?
              </h3>
              <p className="text-gray-600">
                Assolutamente! Hai accesso a supporto via email e alla community 
                degli studenti dove puoi fare domande e ricevere aiuto.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-excel-dark mb-3">
                Posso richiedere un rimborso?
              </h3>
              <p className="text-gray-600">
                Offriamo una garanzia soddisfatti o rimborsati di 30 giorni. 
                Se non sei completamente soddisfatto, ti rimborsiamo integralmente.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-excel-dark mb-3">
                I corsi sono compatibili con tutte le versioni di Excel?
              </h3>
              <p className="text-gray-600">
                I nostri corsi coprono Excel 2016, 2019, 2021 e Microsoft 365. 
                Evidenziamo le differenze tra versioni quando rilevanti.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}