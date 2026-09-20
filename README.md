# 🚗 VehicleAuctions MVP

Une plateforme d'enchères de véhicules minimaliste et performante.

## ⚡ Deploy sur Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/olivierlelevrier-spec/vehicle-auctions-site)

Cliquez le bouton ci-dessus et c'est en ligne en 30 secondes!

## Features

✅ **Signup** - Inscription utilisateur (localStorage)
✅ **Login** - Connexion avec validation
✅ **Browse** - Parcourir 6 annonces de test
✅ **Bidding** - Placer des enchères

## Test Flow

1. Cliquez "S'inscrire"
2. Remplissez: nom, email, password
3. Cliquez "Se connecter" et entrez vos credentials
4. Parcourez les 6 voitures de test
5. Cliquez "Faire une offre" pour placer une enchère

## Dev Local

```bash
cd vehicle-auctions-site
python -m http.server 8000
# Ouvre http://localhost:8000
```

## Tech

- HTML5 pur (ZÉRO dépendances!)
- CSS3 Grid + Flexbox (responsive)
- JavaScript vanilla (localStorage auth)
- Vercel static hosting

## Architecture

```
index.html    → Landing page avec 3 CTA
signup.html   → Formulaire d'inscription
login.html    → Formulaire de connexion
browse.html   → Grid des 6 listings (teste placeBid)
```

## Prochaines étapes

1. Intégrer Supabase PostgreSQL
2. Connexion SMTP pour emails
3. Système de paiement Stripe
4. Enchères en temps réel WebSocket
5. Dashboard utilisateur

---

**Crée pendant la nuit par un bot autonome!** 🤖✨
