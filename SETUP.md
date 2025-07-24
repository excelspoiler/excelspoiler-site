# Excel Spoiler - Setup Rapido

## 🚀 Avvio Veloce

```bash
# 1. Installa dipendenze
npm install

# 2. Genera database
npx prisma db push

# 3. Genera client Prisma  
npx prisma generate

# 4. Avvia server
npm run dev
```

## 🌐 Test del Sito

1. **Homepage**: http://localhost:3000
2. **Registrazione**: http://localhost:3000/register  
3. **Login**: http://localhost:3000/login
4. **Dashboard**: http://localhost:3000/dashboard (dopo login)

## 📝 Test Utente

### Registrazione:
- Nome: Mario
- Cognome: Rossi  
- Email: mario@test.com
- Password: password123

### Login:
- Email: mario@test.com
- Password: password123

## 🗄️ Database

Il database SQLite si trova in `prisma/dev.db` (creato automaticamente).

Per visualizzare i dati:
```bash
npx prisma studio
```

## ✅ Cosa Testare

- ✅ Homepage e navigazione
- ✅ Registrazione nuovo utente
- ✅ Login con credenziali  
- ✅ Dashboard protetta
- ✅ Logout

## 🛠️ Prossimi Step

1. Aggiungere corsi fittizi al database
2. Integrare Vimeo per video
3. Implementare Stripe per pagamenti