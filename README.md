# 🎵 Blue Harmony - Site Formație Muzicală

Website profesional, modern și responsive pentru formația ta muzicală!

## 📁 Structura Proiectului

```
band-website/
├── index.html          # Pagina principală
├── despre.html         # Despre formație
├── membrii.html        # Echipa / Membrii
├── galerie.html        # Galerie foto
├── video.html          # Videoclipuri YouTube
├── evenimente.html     # Istoric & Evenimente
├── contact.html        # Formular contact
├── css/
│   └── styles.css      # Stiluri CSS (paletă albastră fresh)
├── js/
│   └── script.js       # Funcționalități JavaScript
└── images/             # Folder pentru imagini (de adăugat)
```

## 🎨 Caracteristici

✅ **Design Modern** - Paletă de culori albastre, fresh și oxigenante
✅ **Responsive** - Arată perfect pe mobil, tabletă și desktop
✅ **7 Pagini Complete** - Structură profesională și scalabilă
✅ **CSS Separat** - Organizat și ușor de modificat
✅ **JavaScript Modular** - Funcționalități interactive
✅ **Formular Contact** - Cu validare completă
✅ **Animații Subtile** - Experiență plăcută pentru utilizatori
✅ **SEO Ready** - Meta tags și structură optimizată

## 🚀 Cum Să Folosești

### 1. Deschide site-ul
- Deschide `index.html` în browser pentru a vedea site-ul
- Toate paginile sunt interconectate prin meniu

### 2. Personalizează Conținutul

#### Numele Formației
Caută și înlocuiește "Blue Harmony" cu numele tău în toate fișierele HTML.

#### Informații de Contact
În fiecare pagină HTML, actualizează:
- **Telefon**: +40 123 456 789
- **Email**: contact@blueharmony.ro
- **Locație**: Cluj-Napoca, România

#### Membrii Echipei
În `membrii.html`, modifică:
- Numele membrilor
- Rolurile/instrumentele
- Descrierile

#### Social Media
Adaugă link-urile reale la:
- Facebook
- Instagram
- YouTube
- TikTok

### 3. Adaugă Imagini

#### Pentru Galerie (`galerie.html`)
1. Adaugă imagini în folderul `images/`
2. Înlocuiește div-urile cu class="gallery-placeholder" cu:
```html
<img src="images/nume-imagine.jpg" alt="Descriere">
```

#### Pentru Membrii
Similar, înlocuiește placeholder-ele cu imagini reale ale membrilor.

### 4. Adaugă Videoclipuri YouTube

În `video.html`, înlocuiește `dQw4w9WgXcQ` cu ID-urile reale:
```html
<iframe src="https://www.youtube.com/embed/ID_VIDEO_TĂU"></iframe>
```

**Cum găsești ID-ul video:**
- URL YouTube: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID-ul este: `dQw4w9WgXcQ`

### 5. Personalizează Culorile (Opțional)

În `css/styles.css`, modifică variabilele de culori:
```css
:root {
    --primary-blue: #3498DB;      /* Albastru principal */
    --primary-dark: #2874A6;       /* Albastru închis */
    --primary-light: #5DADE2;      /* Albastru deschis */
    --accent-cyan: #76D7EA;        /* Cyan accent */
    --accent-coral: #FF6B6B;       /* Coral pentru CTA */
}
```

## 📱 Testare

### Desktop
- Deschide în Chrome/Firefox/Safari
- Testează navigarea între pagini
- Verifică formularul de contact

### Mobile
1. Deschide Developer Tools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Testează pe diferite rezoluții

## 🌐 Publicare Online

### Opțiune 1: GitHub Pages (Gratuit)
1. Creează cont pe GitHub
2. Creează repository nou
3. Upload toate fișierele
4. Activează GitHub Pages în Settings

### Opțiune 2: Netlify/Vercel (Gratuit)
1. Creează cont pe Netlify sau Vercel
2. Drag & drop folderul site-ului
3. Site-ul va fi live în câteva secunde

### Opțiune 3: Hosting Tradițional
- Cumpără domeniu și hosting
- Upload fișierele prin FTP
- Configurează domeniul

## 🔧 Funcționalități JavaScript

- **Meniu mobil** - Funcțional pe ecrane mici
- **Smooth scroll** - Navigare fluidă
- **Validare formular** - Verifică datele înainte de trimitere
- **Animații scroll** - Elemente apar când scroll-ezi
- **Lightbox galerie** - Click pe imagine pentru vizualizare mare
- **Notificări** - Feedback vizual la trimiterea formularului

## 💡 Tips & Tricks

1. **Optimizează imaginile** - Folosește compresie pentru viteza de încărcare
2. **Adaugă favicon** - Icon mic pentru tab-ul browserului
3. **Google Analytics** - Urmărește vizitatorii (opțional)
4. **WhatsApp Button** - Adaugă link direct la WhatsApp
5. **Backup regulat** - Salvează o copie a site-ului

## 📞 Integrări Utile

### WhatsApp Business
```html
<a href="https://wa.me/40123456789?text=Bună, vreau o ofertă pentru nuntă">
    Scrie pe WhatsApp
</a>
```

### Google Maps
Adaugă în contact.html:
```html
<iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="400"></iframe>
```

### Facebook Pixel / Google Ads
Adaugă cod de tracking în `<head>` pentru remarketing.

## 🎯 Checklist Final

- [ ] Înlocuit "Blue Harmony" cu numele formației
- [ ] Actualizat informații contact (telefon, email)
- [ ] Modificat numele membrilor și roluri
- [ ] Adăugat imagini în galerie
- [ ] Adăugat videoclipuri YouTube
- [ ] Actualizat link-uri social media
- [ ] Testat pe mobil și desktop
- [ ] Verificat formularul de contact
- [ ] Optimizat imagini
- [ ] Publicat online

## 📄 Licență

Site-ul este creat special pentru tine și poți face ce vrei cu el!

---

**Creat cu 💙 și Claude**

Pentru suport sau întrebări despre personalizare, nu ezita să întrebi!
