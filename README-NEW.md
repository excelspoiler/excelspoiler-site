# Excel Spoiler - Piattaforma Corsi Excel

Sito web professionale per corsi Excel con sistema di autenticazione, gestione corsi e pagamenti integrati.

## 🚀 Stack Tecnologico

- **Framework**: Next.js 15 con TypeScript
- **Database**: SQLite + Prisma (100% gratuito)
- **Autenticazione**: NextAuth.js
- **Styling**: Tailwind CSS
- **Deploy**: Vercel
- **Pagamenti**: Stripe (quando necessario)
- **Video**: Vimeo Pro (quando necessario)

## 📋 Setup Locale

```bash
# Installa dipendenze
npm install

# Setup database
npx prisma db push
npx prisma generate

# Avvia server
npm run dev
```

## 🌐 Deploy su Vercel

1. Push su GitHub
2. Connetti repository su Vercel
3. Deploy automatico

## 🔐 Funzionalità

- ✅ Homepage professionale
- ✅ Sistema di registrazione/login
- ✅ Dashboard utente protetta
- ✅ Gestione sessioni
- ✅ Database SQLite integrato
- 🔄 Gestione corsi (in sviluppo)
- 🔄 Integrazione Vimeo (in sviluppo)
- 🔄 Sistema pagamenti (in sviluppo)

## 💰 Costi

- **Hosting**: €0 (Vercel gratuito)
- **Database**: €0 (SQLite locale)
- **SSL/CDN**: €0 (incluso Vercel)
- **Dominio**: Solo quando necessario
- **Vimeo**: €20/mese quando attivi video