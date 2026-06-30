<script setup lang="ts">
useHead({ title: 'WerkTakt — Takt für dein Handwerk' })

// ── Scroll reveal ────────────────────────────────────────────
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12 },
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})

// ── Segment switcher ────────────────────────────────────────
type Segment = 'betriebe' | 'freelancer' | 'privat'
const activeSegment = ref<Segment>('betriebe')

const segments = [
  { id: 'betriebe',   label: 'Betriebe',            icon: '🏭' },
  { id: 'freelancer', label: 'Freelancer',           icon: '💼' },
  { id: 'privat',     label: 'Privat & Heimwerker',  icon: '🏠' },
] as const

const segmentContent: Record<Segment, { headline: string; sub: string; points: string[]; cta: string; ctaHref: string }> = {
  betriebe: {
    headline: 'Für Schreinereien, Holzbau, Sanierung und Produktion.',
    sub: 'Mehrere Mitarbeiter, mehrere Produkte, mehrere Aufträge — WerkTakt bringt Überblick ohne Verwaltungsaufwand.',
    points: [
      'Kiosk am Tablet — Mitarbeiter stempeln ein, kein Login nötig',
      'Aufträge mit Sollmengen, Fortschrittsanzeige und Zuordnung',
      'Stechuhr mit §4 ArbZG Pausen-Abzug und Auto-Schließen',
      'Auswertung Pro: Effizienz, Kosten, CSV-Export',
      'Module je nach Bedarf zubuchbar — kein Overhead',
    ],
    cta: 'Betrieb anmelden',
    ctaHref: '/#preise',
  },
  freelancer: {
    headline: 'Solo unterwegs — Zeiten und Projekte präzise im Griff.',
    sub: 'Du arbeitest allein oder mit wenigen Leuten. WerkTakt gibt dir Stundennachweis und Projektübersicht, ohne dich mit Funktionen zu erschlagen.',
    points: [
      'Zeiten pro Auftrag oder Projekt erfassen',
      'Stundennachweise als Grundlage für Rechnungen',
      'Auswertung: wie viel Zeit kostet welches Produkt wirklich?',
      'Günstig — nur zahlen was man nutzt',
      'Kiosk auch als Mobile-Modus für unterwegs',
    ],
    cta: 'Kostenlos starten',
    ctaHref: '/#preise',
  },
  privat: {
    headline: 'Heimwerken mit Überblick — Gartenschuppen bis Eigenheim.',
    sub: 'Du baust deinen Gartenschuppen, renovierst das Bad oder planst ein Tiny House. WerkTakt zeigt dir wie viel Zeit du wirklich investierst.',
    points: [
      'Projekte anlegen, Zeiten erfassen, Überblick behalten',
      'Kein Stückzahl-Stress: buche einfach Stunden auf Projekte',
      'Material und Arbeitsschritte festhalten',
      'Gratis für private Nutzung (bis 3 Projekte)',
      'Kein Overhead, keine Lernkurve',
    ],
    cta: 'Gratis ausprobieren',
    ctaHref: '/#preise',
  },
}

// ── Features list ────────────────────────────────────────────
const features = [
  {
    icon: '⏱',
    title: 'Kiosk-Zeiterfassung',
    desc: 'Mitarbeiter starten und beenden Läufe am Tablet — ohne Login, ohne Passwort. Stückzahlen und Pausen werden direkt erfasst.',
    tag: 'Kernmodul',
  },
  {
    icon: '📋',
    title: 'Auftragsmanagement',
    desc: 'Aufträge mit Sollmengen anlegen und Fortschritt in Echtzeit verfolgen. Laufabschlüsse werden Auftragspositionen gutgeschrieben.',
    tag: 'Zusatzmodul',
  },
  {
    icon: '🗂',
    title: 'Projektmodul',
    desc: 'Für Hausbau, Sanierung und Umbau: Arbeit auf Projekte buchen statt Stücke zählen. Kein Einheitenproblem — nur Zeit und Tätigkeit.',
    tag: 'Zusatzmodul',
  },
  {
    icon: '🕐',
    title: 'Stechuhr',
    desc: 'Anwesenheitszeiten separat erfassen — unabhängig von Produktionsläufen. Pausen-Abzug nach §4 ArbZG, Auto-Schließen bei Vergessen.',
    tag: 'Zusatzmodul',
  },
  {
    icon: '📊',
    title: 'Auswertung Pro',
    desc: 'Effizienz pro Mitarbeiter und Produkt, Zeitraum-Reports und CSV-Export — Grundlage für echte Kalkulation und Nachkalkulation.',
    tag: 'Kernmodul',
  },
  {
    icon: '🖥',
    title: 'Fertigungsbildschirm',
    desc: 'Read-only Ansicht für Werkstatttafeln: laufende Aufträge, Mitarbeiter, Wetter und News — in Echtzeit, immer aktuell.',
    tag: 'Zusatzmodul',
  },
]

// ── Pricing ─────────────────────────────────────────────────
const plans = [
  {
    id: 'privat',
    name: 'Privat',
    sub: 'Für Heimwerker',
    price: 'Kostenlos',
    period: '',
    highlight: false,
    features: [
      '1 Person',
      'Bis 3 Projekte',
      'Zeiterfassung & Kiosk',
      'Auswertung (Basis)',
      'Kein Auftragsmanagement',
    ],
    cta: 'Gratis starten',
    ctaStyle: 'outline',
  },
  {
    id: 'freelancer',
    name: 'Freelancer',
    sub: 'Solo & kleine Teams',
    price: '€ 19',
    period: '/ Monat',
    highlight: false,
    features: [
      'Bis 3 Personen',
      'Unbegrenzte Projekte',
      'Zeiterfassung & Kiosk',
      'Auswertung Pro',
      '1 Zusatzmodul inklusive',
    ],
    cta: 'Kostenlos testen',
    ctaStyle: 'outline',
  },
  {
    id: 'betrieb',
    name: 'Betrieb',
    sub: 'Für Handwerksbetriebe',
    price: 'Ab € 49',
    period: '/ Monat',
    highlight: true,
    features: [
      'Bis 15 Mitarbeiter (erweiterbar)',
      'Alle Kernfunktionen',
      'Alle Module verfügbar',
      'Admin-Dashboard & CSV-Export',
      'Firmen­profil-Seite inklusive',
    ],
    cta: 'Betrieb anmelden',
    ctaStyle: 'primary',
  },
]

// ── Branchen ────────────────────────────────────────────────
const branchen = [
  { icon: '🪵', name: 'Schreinerei & Holzbau' },
  { icon: '🏗', name: 'Trockenbau & Sanierung' },
  { icon: '🏠', name: 'Tiny & Modulhäuser' },
  { icon: '🔩', name: 'Metall & Schlosserei' },
  { icon: '🪣', name: 'Maler & Lackierer' },
  { icon: '⚡', name: 'Elektro & Haustechnik' },
  { icon: '📐', name: 'Planungsbüros' },
  { icon: '🏭', name: 'Kleinfertigung & Produktion' },
]
</script>

<template>
  <div>
    <!-- ── HERO ─────────────────────────────────────────────── -->
    <section class="hero">
      <div class="hero-bloom" aria-hidden="true" />

      <div class="container hero-inner">
        <div class="hero-eyebrow">
          <span class="hero-badge">Neu: Projektmodul &amp; Stechuhr Auto-Erkennung</span>
        </div>

        <h1 class="hero-title">
          Takt für dein<br>
          <em class="hero-em">Handwerk.</em>
        </h1>

        <p class="hero-sub">
          Kiosk-Zeiterfassung, Auftragssteuerung und Auswertung —<br>
          für Betriebe, die mehr wollen als Excel.
        </p>

        <div class="hero-actions">
          <NuxtLink href="#preise" class="btn btn--primary btn--lg">
            Kostenlos starten
          </NuxtLink>
          <NuxtLink href="#features" class="btn btn--ghost-dark btn--lg">
            Features ansehen
          </NuxtLink>
        </div>

        <div class="hero-stats">
          <div class="hero-stat">
            <div class="hero-stat-val">247</div>
            <div class="hero-stat-lbl">Stück · Tag</div>
          </div>
          <div class="hero-stat-sep" />
          <div class="hero-stat">
            <div class="hero-stat-val">84%</div>
            <div class="hero-stat-lbl">Ø Effizienz</div>
          </div>
          <div class="hero-stat-sep" />
          <div class="hero-stat">
            <div class="hero-stat-val hero-stat-val--live">● live</div>
            <div class="hero-stat-lbl">Stechuhr läuft</div>
          </div>
        </div>

        <div class="hero-trust">
          <span class="trust-dot" />
          Hosting in Deutschland &nbsp;·&nbsp; DSGVO-konform &nbsp;·&nbsp; Keine Kreditkarte nötig
        </div>
      </div>
    </section>

    <!-- ── BRANCHEN STRIP ──────────────────────────────────── -->
    <section class="branchen-strip section--sm" id="branchen">
      <div class="container">
        <p class="strip-label reveal">Einsatzgebiete</p>
        <div class="branchen-grid">
          <div
            v-for="(b, i) in branchen"
            :key="b.name"
            :class="['branche-pill reveal', `reveal--delay-${Math.min(i + 1, 5)}`]"
          >
            <span class="branche-icon">{{ b.icon }}</span>
            {{ b.name }}
          </div>
        </div>
      </div>
    </section>

    <!-- ── PROBLEM → LÖSUNG ────────────────────────────────── -->
    <section class="section section--dark">
      <div class="container">
        <div class="problem-grid">
          <div class="problem-col reveal">
            <div class="problem-label problem-label--before">Bisher</div>
            <h2 class="problem-title">Zettelwirtschaft,<br>Excel und Zuruf.</h2>
            <ul class="problem-list problem-list--bad">
              <li>Stundenzettel am Freitag abschreiben</li>
              <li>Auftragsfortschritt per WhatsApp erfragen</li>
              <li>Fehlzeiten und Pausen nicht nachvollziehbar</li>
              <li>Kalkulation aus dem Bauchgefühl</li>
              <li>Niemand weiß wie lange was wirklich dauert</li>
            </ul>
          </div>
          <div class="problem-arrow reveal reveal--delay-1" aria-hidden="true">→</div>
          <div class="problem-col reveal reveal--delay-2">
            <div class="problem-label problem-label--after">Mit WerkTakt</div>
            <h2 class="problem-title problem-title--accent">Alles erfasst.<br>Immer aktuell.</h2>
            <ul class="problem-list problem-list--good">
              <li>Kiosk am Tablet — Mitarbeiter stempeln selbst ein</li>
              <li>Auftragsfortschritt in Echtzeit im Admin</li>
              <li>Stechuhr mit Pausen-Erkennung nach §4 ArbZG</li>
              <li>Effizienz, Kosten und Ø min/Stück auf Knopfdruck</li>
              <li>Grundlage für saubere Nachkalkulation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FEATURES ────────────────────────────────────────── -->
    <section class="section" id="features">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker reveal">Was WerkTakt kann</div>
          <h2 class="section-title reveal reveal--delay-1">Alles was ein Handwerksbetrieb braucht — nicht mehr.</h2>
          <p class="section-desc reveal reveal--delay-2">
            Kernmodul + Zusatzmodule. Du schaltest frei was du brauchst.
            Was du nicht brauchst, ist nicht da.
          </p>
        </div>

        <div class="features-grid">
          <div
            v-for="(f, i) in features"
            :key="f.title"
            :class="['feature-card reveal', `reveal--delay-${(i % 3) + 1}`]"
          >
            <div class="feature-icon">{{ f.icon }}</div>
            <div class="feature-tag">{{ f.tag }}</div>
            <h3 class="feature-title">{{ f.title }}</h3>
            <p class="feature-desc">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SEGMENTS ────────────────────────────────────────── -->
    <section class="section section--indigo" id="segmente">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker reveal">Für wen ist WerkTakt?</div>
          <h2 class="section-title reveal reveal--delay-1">Drei Einsatzgebiete. Eine Plattform.</h2>
        </div>

        <div class="segment-tabs reveal">
          <button
            v-for="seg in segments"
            :key="seg.id"
            :class="['segment-tab', { 'segment-tab--active': activeSegment === seg.id }]"
            @click="activeSegment = seg.id as Segment"
          >
            <span class="segment-tab-icon">{{ seg.icon }}</span>
            {{ seg.label }}
          </button>
        </div>

        <div class="segment-content reveal reveal--delay-1">
          <div class="segment-text">
            <h3 class="segment-headline">{{ segmentContent[activeSegment].headline }}</h3>
            <p class="segment-sub">{{ segmentContent[activeSegment].sub }}</p>
            <ul class="segment-points">
              <li v-for="point in segmentContent[activeSegment].points" :key="point">
                <span class="check">✓</span> {{ point }}
              </li>
            </ul>
            <NuxtLink :href="segmentContent[activeSegment].ctaHref" class="btn btn--primary">
              {{ segmentContent[activeSegment].cta }}
            </NuxtLink>
          </div>
          <div class="segment-visual">
            <div class="segment-badge-stack">
              <div v-if="activeSegment === 'betriebe'" class="badge-items">
                <div class="badge-item"><span>👥</span> Bis 50+ Mitarbeiter</div>
                <div class="badge-item"><span>📋</span> Auftragsmanagement</div>
                <div class="badge-item"><span>🔧</span> Module flexibel wählbar</div>
                <div class="badge-item"><span>📊</span> Admin-Dashboard</div>
              </div>
              <div v-else-if="activeSegment === 'freelancer'" class="badge-items">
                <div class="badge-item"><span>👤</span> Solo oder kleines Team</div>
                <div class="badge-item"><span>📄</span> Stundennachweise</div>
                <div class="badge-item"><span>📈</span> Auswertung Pro</div>
                <div class="badge-item"><span>💰</span> Ab € 19 / Monat</div>
              </div>
              <div v-else class="badge-items">
                <div class="badge-item"><span>🏠</span> Private Projekte</div>
                <div class="badge-item"><span>🗂</span> Zeiterfassung ohne Stress</div>
                <div class="badge-item"><span>🎯</span> Bis 3 Projekte gratis</div>
                <div class="badge-item"><span>✅</span> Kein Overhead</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── PRICING ─────────────────────────────────────────── -->
    <section class="section" id="preise">
      <div class="container">
        <div class="section-head">
          <div class="section-kicker reveal">Preise</div>
          <h2 class="section-title reveal reveal--delay-1">Einfach und transparent.</h2>
          <p class="section-desc reveal reveal--delay-2">
            Monatlich kündbar. Keine Einrichtungsgebühr. Keine versteckten Kosten.
          </p>
        </div>

        <div class="pricing-grid">
          <div
            v-for="(plan, i) in plans"
            :key="plan.id"
            :class="['pricing-card reveal', `reveal--delay-${i + 1}`, { 'pricing-card--highlight': plan.highlight }]"
          >
            <div v-if="plan.highlight" class="pricing-badge">Empfohlen</div>
            <div class="pricing-name">{{ plan.name }}</div>
            <div class="pricing-sub">{{ plan.sub }}</div>
            <div class="pricing-price">
              {{ plan.price }}
              <span v-if="plan.period" class="pricing-period">{{ plan.period }}</span>
            </div>
            <ul class="pricing-features">
              <li v-for="feat in plan.features" :key="feat">
                <span class="pricing-check">✓</span> {{ feat }}
              </li>
            </ul>
            <NuxtLink
              href="https://app.werktakt.de"
              :class="['btn', plan.ctaStyle === 'primary' ? 'btn--primary' : 'btn--outline', 'pricing-cta']"
              target="_blank"
            >
              {{ plan.cta }}
            </NuxtLink>
          </div>
        </div>

        <p class="pricing-note reveal">
          Alle Preise zzgl. MwSt. Module einzeln zubuchbar. Preise auf Anfrage für größere Teams.
        </p>
      </div>
    </section>

    <!-- ── FINAL CTA ───────────────────────────────────────── -->
    <section class="section section--dark cta-section">
      <div class="container cta-inner">
        <h2 class="section-title section-title--white reveal">
          Bereit für mehr Überblick?
        </h2>
        <p class="section-desc section-desc--white reveal reveal--delay-1">
          In 5 Minuten eingerichtet. Keine Kreditkarte, kein Risiko.
        </p>
        <div class="cta-actions reveal reveal--delay-2">
          <NuxtLink href="https://app.werktakt.de" class="btn btn--primary btn--lg" target="_blank">
            Kostenlos starten
          </NuxtLink>
          <NuxtLink href="/kontakt" class="btn btn--ghost-dark btn--lg">
            Demo anfragen
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ── Hero ────────────────────────────────────────────────── */
/* ── Hero ─────────────────────────────────────────────────── */
.hero {
  position: relative;
  background: #000;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 68px;
}

.hero-bloom {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(ellipse 80% 55% at 50% 38%, rgba(99,102,241,0.22) 0%, transparent 65%);
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 100px;
}

.hero-eyebrow { margin-bottom: 36px; }

.hero-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255,255,255,0.5);
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 7px 18px;
  border-radius: 100px;
}

.hero-title {
  font-size: clamp(56px, 10vw, 128px);
  font-weight: 950;
  line-height: 0.97;
  letter-spacing: -0.05em;
  color: white;
  margin: 0 0 32px;
}

.hero-em {
  font-style: normal;
  color: #6366f1;
}

.hero-sub {
  font-size: clamp(16px, 1.4vw, 20px);
  color: rgba(255,255,255,0.48);
  line-height: 1.65;
  max-width: 520px;
  margin: 0 0 44px;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 72px;
}

/* Stats strip */
.hero-stats {
  display: flex;
  align-items: center;
  gap: 48px;
  padding: 28px 52px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  margin-bottom: 48px;
}

.hero-stat { text-align: center; }

.hero-stat-val {
  font-size: 38px;
  font-weight: 950;
  color: white;
  letter-spacing: -0.04em;
  line-height: 1;
}

.hero-stat-val--live {
  font-size: 20px;
  font-weight: 700;
  color: #22c55e;
  animation: pulse 2s ease-in-out infinite;
}

.hero-stat-lbl {
  font-size: 11px;
  color: rgba(255,255,255,0.32);
  margin-top: 6px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.hero-stat-sep {
  width: 1px;
  height: 44px;
  background: rgba(255,255,255,0.1);
  flex-shrink: 0;
}

.hero-trust {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: rgba(255,255,255,0.28);
}

.trust-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--green);
  flex-shrink: 0;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* ── Branchen Strip ───────────────────────────────────────── */
.branchen-strip {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.strip-label {
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  margin-bottom: 24px;
}

.branchen-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.branche-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 100px;
  border: 1.5px solid var(--border);
  font-size: 14px;
  font-weight: 600;
  color: var(--text-mid);
  background: white;
  transition: all 0.18s;
}

.branche-pill:hover {
  border-color: var(--primary-light);
  background: var(--primary-pale);
  color: var(--primary-dark);
}

.branche-icon { font-size: 16px; }

/* ── Problem / Lösung ─────────────────────────────────────── */
.problem-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 48px;
  align-items: center;
}

.problem-arrow {
  font-size: 48px;
  color: rgba(255,255,255,0.2);
  text-align: center;
}

.problem-label {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 4px 12px;
  border-radius: 100px;
  margin-bottom: 20px;
}

.problem-label--before {
  background: rgba(239,68,68,0.15);
  color: #fca5a5;
  border: 1px solid rgba(239,68,68,0.2);
}

.problem-label--after {
  background: rgba(34,197,94,0.15);
  color: #86efac;
  border: 1px solid rgba(34,197,94,0.2);
}

.problem-title {
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 950;
  letter-spacing: -0.03em;
  color: white;
  margin-bottom: 24px;
  line-height: 1.15;
}

.problem-title--accent {
  color: #a5b4fc;
}

.problem-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.problem-list li {
  font-size: 15px;
  padding-left: 24px;
  position: relative;
  line-height: 1.5;
}

.problem-list--bad li {
  color: rgba(255,255,255,0.55);
}

.problem-list--bad li::before {
  content: '✗';
  position: absolute;
  left: 0;
  color: #f87171;
  font-weight: 700;
}

.problem-list--good li {
  color: rgba(255,255,255,0.8);
}

.problem-list--good li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4ade80;
  font-weight: 700;
}

/* ── Features Grid ────────────────────────────────────────── */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feature-card {
  padding: 28px;
  border-radius: var(--radius);
  border: 1.5px solid var(--border);
  background: white;
  box-shadow: var(--shadow-sm);
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}

.feature-card:hover {
  border-color: var(--primary-light);
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 28px;
  margin-bottom: 12px;
}

.feature-tag {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--primary);
  margin-bottom: 8px;
}

.feature-title {
  font-size: 18px;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 10px;
  letter-spacing: -0.02em;
}

.feature-desc {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
}

/* ── Segments ─────────────────────────────────────────────── */
.segment-tabs {
  display: flex;
  gap: 8px;
  background: white;
  padding: 6px;
  border-radius: var(--radius);
  border: 1.5px solid var(--border);
  width: fit-content;
  margin: 0 auto 40px;
}

.segment-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: calc(var(--radius) - 4px);
  font-size: 14px;
  font-weight: 700;
  color: var(--text-muted);
  background: transparent;
  transition: all 0.18s;
}

.segment-tab:hover {
  color: var(--text);
  background: var(--bg-light);
}

.segment-tab--active {
  background: var(--primary);
  color: white;
  box-shadow: 0 2px 8px rgba(99,102,241,0.3);
}

.segment-tab-icon { font-size: 16px; }

.segment-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  background: white;
  border-radius: var(--radius-lg);
  padding: 48px;
  border: 1.5px solid var(--border);
  box-shadow: var(--shadow);
}

.segment-headline {
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 950;
  letter-spacing: -0.03em;
  color: var(--text);
  margin-bottom: 12px;
  line-height: 1.2;
}

.segment-sub {
  font-size: 16px;
  color: var(--text-muted);
  line-height: 1.65;
  margin-bottom: 28px;
}

.segment-points {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
}

.segment-points li {
  font-size: 15px;
  color: var(--text-mid);
  display: flex;
  gap: 10px;
  align-items: flex-start;
  line-height: 1.5;
}

.check {
  color: var(--primary);
  font-weight: 800;
  flex-shrink: 0;
  margin-top: 1px;
}

.badge-items {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.badge-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: var(--primary-pale);
  border: 1.5px solid var(--primary-light);
  border-radius: var(--radius-sm);
  font-size: 15px;
  font-weight: 600;
  color: var(--primary-darker);
}

.badge-item span { font-size: 20px; }

/* ── Pricing ──────────────────────────────────────────────── */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  align-items: start;
  margin-bottom: 32px;
}

.pricing-card {
  position: relative;
  background: white;
  border-radius: var(--radius-lg);
  padding: 36px;
  border: 1.5px solid var(--border);
  box-shadow: var(--shadow-sm);
}

.pricing-card--highlight {
  border-color: var(--primary);
  box-shadow: 0 0 0 1px var(--primary), var(--shadow-lg);
}

.pricing-badge {
  position: absolute;
  top: -13px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary);
  color: white;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 14px;
  border-radius: 100px;
  white-space: nowrap;
}

.pricing-name {
  font-size: 20px;
  font-weight: 950;
  color: var(--text);
  letter-spacing: -0.03em;
  margin-bottom: 4px;
}

.pricing-sub {
  font-size: 13px;
  color: var(--text-muted);
  margin-bottom: 20px;
}

.pricing-price {
  font-size: 36px;
  font-weight: 950;
  color: var(--text);
  letter-spacing: -0.04em;
  margin-bottom: 4px;
  line-height: 1;
}

.pricing-period {
  font-size: 16px;
  font-weight: 400;
  color: var(--text-muted);
}

.pricing-features {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 24px 0 28px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}

.pricing-features li {
  font-size: 14px;
  color: var(--text-mid);
  display: flex;
  gap: 10px;
}

.pricing-check {
  color: var(--primary);
  font-weight: 800;
  flex-shrink: 0;
}

.pricing-cta {
  width: 100%;
  justify-content: center;
}

.pricing-note {
  text-align: center;
  font-size: 13px;
  color: var(--text-muted);
}

/* ── CTA Section ──────────────────────────────────────────── */
.cta-section {
  text-align: center;
}

.cta-inner {
  max-width: 640px;
}

.cta-inner .section-title {
  margin-bottom: 16px;
}

.cta-inner .section-desc {
  margin: 0 auto 36px;
}

.cta-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

/* ── Responsive ───────────────────────────────────────────── */
@media (max-width: 1024px) {
  .hero-inner { grid-template-columns: 1fr; gap: 48px; }
  .hero-mockup { max-width: 540px; margin: 0 auto; }
  .hero-title { font-size: 52px; }
  .problem-grid { grid-template-columns: 1fr; gap: 32px; }
  .problem-arrow { display: none; }
  .features-grid { grid-template-columns: repeat(2, 1fr); }
  .pricing-grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto 32px; }
}

@media (max-width: 768px) {
  .hero { min-height: auto; padding: 120px 0 72px; }
  .features-grid { grid-template-columns: 1fr; }
  .segment-tabs { flex-direction: column; width: 100%; }
  .segment-content { grid-template-columns: 1fr; padding: 28px; gap: 32px; }
  .mockup-sidebar { display: none; }
}
</style>
