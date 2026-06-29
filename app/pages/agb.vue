<script setup lang="ts">
useHead({ title: 'AGB — WerkTakt' })
</script>

<template>
  <section class="page-hero section--dark section--sm">
    <div class="container">
      <div class="section-kicker section-kicker--dark">Rechtliches</div>
      <h1 class="section-title section-title--white">Allgemeine Geschäftsbedingungen</h1>
      <p class="section-desc section-desc--white">Stand: Juni 2026</p>
    </div>
  </section>

  <section class="section">
    <div class="container legal-container">
      <div class="legal-block">
        <h2>§ 1 Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen [Firmenname] (nachfolgend
          „Anbieter") und den Nutzern der WerkTakt-Plattform (nachfolgend „Kunde"). Abweichende Bedingungen
          des Kunden werden nicht anerkannt.
        </p>
      </div>

      <div class="legal-block">
        <h2>§ 2 Leistungsgegenstand</h2>
        <p>
          Der Anbieter stellt dem Kunden die WerkTakt-Software als Software-as-a-Service (SaaS) zur Verfügung.
          Der Funktionsumfang richtet sich nach dem gebuchten Tarif und den aktivierten Modulen. Eine
          Offline-Nutzung ist nicht Gegenstand des Vertrags.
        </p>
      </div>

      <div class="legal-block">
        <h2>§ 3 Vertragsschluss und Laufzeit</h2>
        <p>
          Der Vertrag kommt durch Registrierung und Buchung eines Tarifs zustande. Der Vertrag läuft monatlich
          und verlängert sich automatisch, sofern er nicht mit einer Frist von 14 Tagen zum Monatsende
          gekündigt wird. Der kostenlose Tarif (Privat) kann jederzeit ohne Kündigung eingestellt werden.
        </p>
      </div>

      <div class="legal-block">
        <h2>§ 4 Preise und Zahlung</h2>
        <p>
          Die aktuellen Preise sind auf <a href="/#preise">werktakt.de/#preise</a> einsehbar. Alle Preise verstehen
          sich zzgl. der gesetzlichen Mehrwertsteuer. Die Rechnungsstellung erfolgt monatlich im Voraus.
          Zahlungsverzug berechtigt den Anbieter, den Zugang vorübergehend zu sperren.
        </p>
      </div>

      <div class="legal-block">
        <h2>§ 5 Datenschutz und Datenspeicherung</h2>
        <p>
          Alle vom Kunden eingegebenen Daten (Mitarbeiter, Produkte, Buchungen) verbleiben im Eigentum des
          Kunden. Der Anbieter verarbeitet diese Daten ausschließlich zur Erbringung der vereinbarten
          Leistung. Details regelt die <a href="/datenschutz">Datenschutzerklärung</a>.
        </p>
      </div>

      <div class="legal-block">
        <h2>§ 6 Verfügbarkeit</h2>
        <p>
          Der Anbieter bemüht sich um eine Verfügbarkeit von 99 % im Jahresmittel, ausgenommen geplante
          Wartungsarbeiten. Ein Rechtsanspruch auf eine bestimmte Verfügbarkeit besteht nicht.
          Wartungsfenster werden nach Möglichkeit vorab angekündigt.
        </p>
      </div>

      <div class="legal-block">
        <h2>§ 7 Haftungsbeschränkung</h2>
        <p>
          Der Anbieter haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Verletzung von
          Leben, Körper oder Gesundheit. Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung
          wesentlicher Vertragspflichten (Kardinalpflichten), beschränkt auf den vorhersehbaren,
          vertragstypischen Schaden.
        </p>
      </div>

      <div class="legal-block">
        <h2>§ 8 Anwendbares Recht und Gerichtsstand</h2>
        <p>
          Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
          Gerichtsstand für Kaufleute ist der Sitz des Anbieters.
        </p>
      </div>

      <div class="legal-note">
        Diese AGB sind ein Entwurf und müssen vor Veröffentlichung von einem Rechtsanwalt geprüft und
        an die tatsächlichen Gegebenheiten angepasst werden.
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
