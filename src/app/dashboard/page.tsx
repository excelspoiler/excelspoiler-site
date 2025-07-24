'use client'

import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'loading') return // Still loading
    if (!session) router.push('/login') // Not authenticated
  }, [session, status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Caricamento...</div>
      </div>
    )
  }

  if (!session) {
    return null // Will redirect
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-heading font-bold text-excel-dark">
              Dashboard
            </h1>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium"
            >
              Logout
            </button>
          </div>

          <div className="bg-gradient-to-r from-excel-green to-excel-green-light text-white p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              Benvenuto, {session.user?.name || session.user?.email}!
            </h2>
            <p className="text-green-100">
              Sei ora connesso al tuo account Excel Spoiler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-excel-dark mb-2">I Miei Corsi</h3>
              <p className="text-gray-600">0 corsi attivi</p>
              <button className="mt-4 bg-excel-green text-white px-4 py-2 rounded-lg hover:bg-excel-green-light">
                Esplora Corsi
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-excel-dark mb-2">Progresso</h3>
              <p className="text-gray-600">0% completato</p>
              <div className="mt-4 bg-gray-300 rounded-full h-2">
                <div className="bg-excel-green h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-excel-dark mb-2">Certificati</h3>
              <p className="text-gray-600">0 certificati ottenuti</p>
              <button className="mt-4 bg-gray-300 text-gray-600 px-4 py-2 rounded-lg cursor-not-allowed">
                Nessun certificato
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-excel-dark mb-4">Informazioni Account</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Email:</strong> {session.user?.email}</p>
              <p><strong>Nome:</strong> {session.user?.name}</p>
              <p><strong>Ruolo:</strong> {session.user?.role || 'Utente'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}