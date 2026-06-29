<script setup lang="ts">
useHead({ title: 'Impressum — WerkTakt' })
</script>

<template>
  <section class="page-hero section--dark section--sm">
    <div class="container">
      <div class="section-kicker section-kicker--dark">Rechtliches</div>
      <h1 class="section-title section-title--white">Impressum</h1>
    </div>
  </section>

  <section class="section">
    <div class="container legal-container">
      <div class="legal-block">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          <strong>[Firmenname eintragen]</strong><br>
          [Straße und Hausnummer]<br>
          [PLZ] [Ort]<br>
          Deutschland
        </p>
      </div>

      <div class="legal-block">
        <h2>Kontakt</h2>
        <p>
          E-Mail: <a href="mailto:hallo@werktakt.de">hallo@werktakt.de</a>
        </p>
      </div>

      <div class="legal-block">
        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          [Name des Verantwortlichen]<br>
          [Adresse wie oben]
        </p>
      </div>

      <div class="legal-block">
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
          eine rechtswidrige Tätigkeit hinweisen.
        </p>
      </div>

      <div class="legal-block">
        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
        </p>
      </div>

      <div class="legal-block">
        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </div>

      <div class="legal-note">
        Platzhalter in eckigen Klammern müssen vor Veröffentlichung durch echte Angaben ersetzt werden.
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero { padding-top: calc(68px + 64px); }

.legal-container {
  max-width: 720px;
}

.legal-block {
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);
}

.legal-block:last-of-type {
  border-bottom: none;
}

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
