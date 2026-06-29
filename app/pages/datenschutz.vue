<script setup lang="ts">
useHead({ title: 'Datenschutz — WerkTakt' })
</script>

<template>
  <section class="page-hero section--dark section--sm">
    <div class="container">
      <div class="section-kicker section-kicker--dark">Rechtliches</div>
      <h1 class="section-title section-title--white">Datenschutzerklärung</h1>
      <p class="section-desc section-desc--white">Stand: Juni 2026</p>
    </div>
  </section>

  <section class="section">
    <div class="container legal-container">
      <div class="legal-block">
        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlicher im Sinne der DSGVO ist:<br>
          <strong>[Firmenname]</strong>, [Adresse], Deutschland<br>
          E-Mail: <a href="mailto:hallo@werktakt.de">hallo@werktakt.de</a>
        </p>
      </div>

      <div class="legal-block">
        <h2>2. Hosting</h2>
        <p>
          Diese Website wird auf Servern in Deutschland gehostet. Eine Übertragung Ihrer Daten in Drittländer findet
          nicht statt. Beim Besuch der Website werden automatisch technische Zugriffsdaten (IP-Adresse, Zeitstempel,
          aufgerufene Seite, Browser) in Server-Logs gespeichert. Diese Daten werden ausschließlich zur
          Sicherstellung des Betriebs und zur Fehleranalyse genutzt (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
      </div>

      <div class="legal-block">
        <h2>3. Kontaktformular</h2>
        <p>
          Wenn Sie uns über das Kontaktformular eine Anfrage senden, werden Ihre Angaben (Name, E-Mail-Adresse,
          Firmenname, Nachricht) zur Bearbeitung der Anfrage und für eventuelle Anschlussfragen gespeichert
          (Art. 6 Abs. 1 lit. b DSGVO). Wir geben Ihre Daten nicht ohne Ihre Einwilligung weiter.
        </p>
      </div>

      <div class="legal-block">
        <h2>4. Cookies</h2>
        <p>
          Diese Marketing-Website verwendet keine Tracking-Cookies und keine Analyse-Tools von Drittanbietern.
          Technisch notwendige Cookies können bei der Nutzung von Formularen gesetzt werden.
        </p>
      </div>

      <div class="legal-block">
        <h2>5. WerkTakt-Anwendung (app.werktakt.de)</h2>
        <p>
          Für die WerkTakt-Anwendung gilt eine separate Datenschutzerklärung, die nach dem Login im
          Adminbereich einsehbar ist. Die Anwendung verarbeitet ausschließlich Daten, die Sie selbst eingeben.
          Alle Daten werden in Deutschland gehostet und nicht an Dritte weitergegeben.
        </p>
      </div>

      <div class="legal-block">
        <h2>6. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO),
          Einschränkung der Verarbeitung (Art. 18 DSGVO) sowie Datenübertragbarkeit (Art. 20 DSGVO).
          Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:hallo@werktakt.de">hallo@werktakt.de</a>
        </p>
      </div>

      <div class="legal-block">
        <h2>7. Beschwerderecht</h2>
        <p>
          Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die zuständige
          Aufsichtsbehörde in Bayern ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA).
        </p>
      </div>

      <div class="legal-note">
        Diese Datenschutzerklärung ist ein Entwurf und muss vor Veröffentlichung von einem Rechtsanwalt geprüft werden.
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero { padding-top: calc(68px + 64px); }

.legal-container { max-width: 720px; }

.legal-block {
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);
}
.legal-block:last-of-type { border-bottom: none; }

.legal-block h2 {
  font-size: 18px;
  font-weight: 950;
  color: var(--text);
  margin-bottom: 12px;
  letter-spacing: -0.02em;
}

.legal-block p {
  font-size: 15px;
  color: var(--text-mid);
  line-height: 1.7;
}

.legal-block a { color: var(--primary); }

.legal-note {
  padding: 16px 20px;
  background: rgba(245,158,11,0.08);
  border: 1.5px solid rgba(245,158,11,0.3);
  border-radius: var(--radius-sm);
  font-size: 13px;
  color: #b45309;
}
</style>
