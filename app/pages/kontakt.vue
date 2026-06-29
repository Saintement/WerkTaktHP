<script setup lang="ts">
useHead({ title: 'Kontakt — WerkTakt' })

const form = reactive({ name: '', email: '', firma: '', nachricht: '' })
const sent = ref(false)
const sending = ref(false)

async function submit() {
  sending.value = true
  await new Promise((r) => setTimeout(r, 800))
  sent.value = true
  sending.value = false
}
</script>

<template>
  <section class="page-hero section--dark section--sm">
    <div class="container">
      <div class="section-kicker section-kicker--dark reveal">Kontakt</div>
      <h1 class="section-title section-title--white reveal reveal--delay-1">Demo anfragen oder Frage stellen.</h1>
      <p class="section-desc section-desc--white reveal reveal--delay-2">
        Wir melden uns innerhalb von 24 Stunden. Kein Vertriebsdruck, keine Kaltakquise.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container contact-grid">
      <div class="contact-info reveal">
        <h2 class="contact-heading">Direkt erreichbar</h2>

        <div class="contact-item">
          <div class="contact-item-icon">✉</div>
          <div>
            <div class="contact-item-label">E-Mail</div>
            <a href="mailto:hallo@werktakt.de" class="contact-item-value">hallo@werktakt.de</a>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-item-icon">📍</div>
          <div>
            <div class="contact-item-label">Standort</div>
            <div class="contact-item-value">Bayern, Deutschland</div>
          </div>
        </div>

        <div class="contact-item">
          <div class="contact-item-icon">⏱</div>
          <div>
            <div class="contact-item-label">Antwortzeit</div>
            <div class="contact-item-value">Innerhalb von 24 Stunden</div>
          </div>
        </div>

        <div class="contact-note">
          <strong>Demo gewünscht?</strong><br>
          Schreib kurz was dein Betrieb macht und wie viele Mitarbeiter ihr seid — dann bereiten wir
          einen passenden Demo-Datensatz für euch vor.
        </div>
      </div>

      <div class="contact-form-wrap reveal reveal--delay-1">
        <div v-if="sent" class="form-success">
          <div class="form-success-icon">✓</div>
          <h3>Nachricht erhalten!</h3>
          <p>Wir melden uns so schnell wie möglich bei dir.</p>
        </div>

        <form v-else class="contact-form" @submit.prevent="submit">
          <div class="form-row">
            <div class="form-field">
              <label for="name">Name *</label>
              <input id="name" v-model="form.name" type="text" placeholder="Max Mustermann" required />
            </div>
            <div class="form-field">
              <label for="firma">Firma</label>
              <input id="firma" v-model="form.firma" type="text" placeholder="Schreinerei Mustermann" />
            </div>
          </div>

          <div class="form-field">
            <label for="email">E-Mail *</label>
            <input id="email" v-model="form.email" type="email" placeholder="max@mustermann.de" required />
          </div>

          <div class="form-field">
            <label for="nachricht">Nachricht *</label>
            <textarea id="nachricht" v-model="form.nachricht" rows="5" placeholder="Was beschäftigt dich? Demo gewünscht? Frage zum Produkt?" required />
          </div>

          <button type="submit" class="btn btn--primary btn--lg" :disabled="sending" style="width:100%">
            {{ sending ? 'Wird gesendet...' : 'Nachricht senden' }}
          </button>

          <p class="form-privacy">
            Deine Daten werden ausschließlich zur Bearbeitung deiner Anfrage verwendet.
            Mehr dazu in der <NuxtLink href="/datenschutz">Datenschutzerklärung</NuxtLink>.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  padding-top: calc(68px + 64px);
}

.contact-grid {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 64px;
  align-items: start;
}

.contact-heading {
  font-size: 22px;
  font-weight: 950;
  letter-spacing: -0.03em;
  color: var(--text);
  margin-bottom: 32px;
}

.contact-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 24px;
}

.contact-item-icon {
  font-size: 20px;
  width: 40px;
  height: 40px;
  background: var(--primary-pale);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-item-label {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 2px;
}

.contact-item-value {
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
}

a.contact-item-value:hover { color: var(--primary); }

.contact-note {
  margin-top: 40px;
  padding: 20px;
  background: var(--primary-pale);
  border: 1.5px solid var(--primary-light);
  border-radius: var(--radius-sm);
  font-size: 14px;
  color: var(--primary-darker);
  line-height: 1.65;
}

.contact-form-wrap {
  background: white;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 40px;
  box-shadow: var(--shadow);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-field label {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-mid);
}

.form-field input,
.form-field textarea {
  padding: 12px 14px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 15px;
  color: var(--text);
  background: white;
  transition: border-color 0.15s;
  resize: vertical;
}

.form-field input:focus,
.form-field textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(99,102,241,0.1);
}

.form-privacy {
  font-size: 12px;
  color: var(--text-muted);
  text-align: center;
}

.form-privacy a { color: var(--primary); }

.form-success {
  text-align: center;
  padding: 40px 20px;
}

.form-success-icon {
  width: 60px;
  height: 60px;
  background: rgba(34,197,94,0.12);
  color: #15803d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  margin: 0 auto 20px;
}

.form-success h3 { font-size: 22px; font-weight: 950; margin-bottom: 8px; }
.form-success p { color: var(--text-muted); }

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
