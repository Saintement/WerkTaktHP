<template>
  <footer class="footer">
    <div class="footer-top container">
      <div class="footer-brand">
        <div class="footer-logo">
          <span class="logo-mark">W</span>
          <span class="logo-text">WerkTakt</span>
        </div>
        <p class="footer-tagline">Takt für dein Handwerk.<br>Zeiterfassung, Aufträge, Auswertung.</p>
        <p class="footer-legal-mini">Datenschutzkonform. Hosting in Deutschland.</p>
      </div>

      <div class="footer-cols">
        <div class="footer-col">
          <div class="footer-col-title">Produkt</div>
          <NuxtLink href="/#features">Features</NuxtLink>
          <NuxtLink href="/#preise">Preise</NuxtLink>
          <NuxtLink href="/#branchen">Branchen</NuxtLink>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Für wen</div>
          <NuxtLink href="/#betriebe">Betriebe</NuxtLink>
          <NuxtLink href="/#freelancer">Freelancer</NuxtLink>
          <NuxtLink href="/#privat">Privat & Heimwerker</NuxtLink>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Unternehmen</div>
          <NuxtLink href="/kontakt">Kontakt</NuxtLink>
          <NuxtLink href="/impressum">Impressum</NuxtLink>
          <NuxtLink href="/datenschutz">Datenschutz</NuxtLink>
          <NuxtLink href="/agb">AGB</NuxtLink>
        </div>
      </div>
    </div>

    <div class="footer-bottom container">
      <span class="footer-copy">© {{ new Date().getFullYear() }} WerkTakt. Alle Rechte vorbehalten.</span>
      <span class="footer-made">Entwickelt in Bayern 🇩🇪</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--dark);
  color: rgba(255,255,255,0.75);
  padding: 72px 0 0;
}

.footer-top {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 64px;
  padding-bottom: 56px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}

.logo-mark {
  width: 34px;
  height: 34px;
  background: var(--primary);
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 950;
}

.logo-text {
  font-size: 18px;
  font-weight: 950;
  color: white;
  letter-spacing: -0.04em;
}

.footer-tagline {
  font-size: 15px;
  line-height: 1.6;
  color: rgba(255,255,255,0.6);
  margin-bottom: 12px;
}

.footer-legal-mini {
  font-size: 12px;
  color: rgba(255,255,255,0.35);
}

.footer-cols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-col-title {
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.35);
  margin-bottom: 4px;
}

.footer-col a {
  font-size: 14px;
  color: rgba(255,255,255,0.65);
  transition: color 0.15s;
}

.footer-col a:hover {
  color: white;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

.footer-copy {
  font-size: 13px;
  color: rgba(255,255,255,0.35);
}

.footer-made {
  font-size: 13px;
  color: rgba(255,255,255,0.35);
}

@media (max-width: 900px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 600px) {
  .footer-cols {
    grid-template-columns: 1fr 1fr;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>
