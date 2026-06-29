<template>
  <section class="story-wrap">
    <!-- Animated sky background -->
    <div class="story-sky" aria-hidden="true" />

    <div class="container story-inner">
      <div class="story-head reveal">
        <div class="story-kicker">DIE ZEITENWENDE</div>
        <h2 class="story-title">Von Zettelwirtschaft<br>zum Liegestuhl.</h2>
        <p class="story-sub">WerkTakt erfasst Zeit, Takt und Aufträge — damit du den Feierabend wirklich genießen kannst.</p>
      </div>

      <div class="story-stage reveal">

        <!-- LEFT: Hourglass + River -->
        <aside class="story-left" aria-hidden="true">
          <!-- Hourglass -->
          <svg class="hg" viewBox="0 0 100 215" xmlns="http://www.w3.org/2000/svg">
            <!-- Frame bars -->
            <rect x="18" y="1"   width="64" height="6"   rx="3"   fill="#475569"/>
            <rect x="18" y="208" width="64" height="6"   rx="3"   fill="#475569"/>
            <rect x="19" y="1"   width="5"  height="213" rx="2.5" fill="#334155"/>
            <rect x="76" y="1"   width="5"  height="213" rx="2.5" fill="#334155"/>
            <!-- Glass outline: top chamber (wide top → narrow neck) -->
            <path d="M24,7 L76,7 L53,102 L47,102 Z"
                  fill="rgba(148,163,184,0.07)"
                  stroke="rgba(148,163,184,0.3)" stroke-width="1.2"/>
            <!-- Glass outline: bottom chamber (narrow neck → wide bottom) -->
            <path d="M24,208 L76,208 L53,113 L47,113 Z"
                  fill="rgba(148,163,184,0.07)"
                  stroke="rgba(148,163,184,0.3)" stroke-width="1.2"/>
            <!-- Sand top (drains from above) -->
            <clipPath id="wt-ct"><path d="M24,7 L76,7 L53,102 L47,102 Z"/></clipPath>
            <rect class="sand-t" x="24" y="7" width="52" height="95"
                  fill="#f59e0b" clip-path="url(#wt-ct)"/>
            <!-- Sand stream through neck -->
            <rect class="sand-s" x="49.5" y="100" width="2" height="14" rx="1" fill="#f59e0b"/>
            <!-- Sand bottom (fills from below) -->
            <clipPath id="wt-cb"><path d="M24,208 L76,208 L53,113 L47,113 Z"/></clipPath>
            <rect class="sand-b" x="24" y="113" width="52" height="95"
                  fill="#f59e0b" clip-path="url(#wt-cb)"/>
            <!-- Glow / shimmer on glass -->
            <line x1="30" y1="12" x2="46" y2="99" stroke="rgba(255,255,255,0.08)" stroke-width="3" stroke-linecap="round"/>
          </svg>

          <!-- Meandering river -->
          <svg class="river" viewBox="0 0 60 180" xmlns="http://www.w3.org/2000/svg">
            <path class="rp"
              d="M30,0 C6,28 54,56 30,90 C6,124 54,152 30,180"
              fill="none"
              stroke="rgba(99,102,241,0.45)"
              stroke-width="5.5"
              stroke-linecap="round"/>
          </svg>
        </aside>

        <!-- RIGHT: Three scene panels -->
        <div class="scenes">

          <!-- ── ACT 1: FRÜHER ─────────────────────────────── -->
          <div class="scene s1">
            <span class="badge badge--red">FRÜHER</span>
            <svg viewBox="0 0 270 200" xmlns="http://www.w3.org/2000/svg">
              <!-- Desk -->
              <rect x="15"  y="153" width="240" height="7" rx="3.5" fill="#334155"/>
              <rect x="38"  y="160" width="8"   height="36" rx="2"  fill="#334155"/>
              <rect x="224" y="160" width="8"   height="36" rx="2"  fill="#334155"/>
              <!-- Monitor -->
              <rect x="65" y="90" width="140" height="63" rx="4" fill="#1e293b" stroke="#475569" stroke-width="1.5"/>
              <rect x="74" y="98" width="122" height="47" fill="#0d1117"/>
              <!-- Excel grid -->
              <line x1="74"  y1="109" x2="196" y2="109" stroke="#22c55e" stroke-width=".7" opacity=".6"/>
              <line x1="74"  y1="119" x2="196" y2="119" stroke="#22c55e" stroke-width=".7" opacity=".6"/>
              <line x1="74"  y1="129" x2="196" y2="129" stroke="#22c55e" stroke-width=".7" opacity=".6"/>
              <line x1="74"  y1="139" x2="196" y2="139" stroke="#22c55e" stroke-width=".7" opacity=".6"/>
              <line x1="104" y1="98"  x2="104" y2="145" stroke="#22c55e" stroke-width=".7" opacity=".6"/>
              <line x1="136" y1="98"  x2="136" y2="145" stroke="#22c55e" stroke-width=".7" opacity=".6"/>
              <line x1="167" y1="98"  x2="167" y2="145" stroke="#22c55e" stroke-width=".7" opacity=".6"/>
              <!-- Monitor stand -->
              <rect x="131" y="153" width="8" height="7" fill="#334155"/>
              <!-- Person: head -->
              <circle cx="135" cy="62" r="14" fill="#fbbf24"/>
              <!-- Person: body -->
              <rect x="121" y="76" width="28" height="22" rx="5" fill="#ef4444"/>
              <!-- Person: arms on desk -->
              <path d="M121,85 C104,90 85,97 82,103 L82,114 L95,114 L95,106 C95,106 112,98 121,92 Z" fill="#ef4444"/>
              <path d="M149,85 C166,90 185,97 188,103 L188,114 L175,114 L175,106 C175,106 158,98 149,92 Z" fill="#ef4444"/>
              <!-- Stress sweat -->
              <ellipse cx="153" cy="54" rx="3" ry="5.5" fill="#93c5fd" opacity=".85"/>
              <!-- Flying paper 1 -->
              <g class="fp fp1">
                <rect x="6"  y="38" width="38" height="30" rx="2.5" fill="white" opacity=".93" transform="rotate(-18,25,53)"/>
                <line x1="13" y1="47" x2="37" y2="47" stroke="#94a3b8" stroke-width="1.3"/>
                <line x1="13" y1="54" x2="37" y2="54" stroke="#94a3b8" stroke-width="1.3"/>
                <line x1="13" y1="61" x2="29" y2="61" stroke="#94a3b8" stroke-width="1.3"/>
              </g>
              <!-- Flying paper 2 -->
              <g class="fp fp2">
                <rect x="212" y="22" width="38" height="30" rx="2.5" fill="white" opacity=".88" transform="rotate(22,231,37)"/>
                <line x1="218" y1="32" x2="242" y2="32" stroke="#94a3b8" stroke-width="1.3"/>
                <line x1="218" y1="39" x2="242" y2="39" stroke="#94a3b8" stroke-width="1.3"/>
              </g>
              <!-- Flying paper 3 -->
              <g class="fp fp3">
                <rect x="192" y="68" width="32" height="26" rx="2.5" fill="white" opacity=".82" transform="rotate(-26,208,81)"/>
                <line x1="197" y1="77" x2="217" y2="77" stroke="#94a3b8" stroke-width="1.3"/>
              </g>
              <!-- Caption -->
              <text x="135" y="192" text-anchor="middle" fill="#f87171"
                    font-size="12" font-weight="700" font-family="Inter,sans-serif">
                Zettel. Excel. Chaos. Immer wieder.
              </text>
            </svg>
          </div>

          <!-- ── ACT 2: MIT WERKTAKT ────────────────────────── -->
          <div class="scene s2">
            <span class="badge badge--indigo">MIT WERKTAKT</span>
            <svg viewBox="0 0 270 200" xmlns="http://www.w3.org/2000/svg">
              <!-- Tablet device -->
              <rect x="85" y="8"  width="100" height="170" rx="14" fill="#1e293b" stroke="#6366f1" stroke-width="2"/>
              <rect x="95" y="18" width="80"  height="150" rx="8"  fill="#0f172a"/>
              <circle cx="135" cy="172" r="4" fill="#2d3748"/>
              <!-- WerkTakt logo -->
              <rect x="113" y="26" width="20" height="20" rx="5" fill="#6366f1"/>
              <text x="123" y="40" text-anchor="middle" fill="white"
                    font-size="11" font-weight="900" font-family="Inter,sans-serif">W</text>
              <text x="137" y="40" text-anchor="start" fill="white"
                    font-size="8.5" font-weight="700" font-family="Inter,sans-serif">WerkTakt</text>
              <!-- E-Mail field -->
              <rect x="100" y="57" width="70" height="15" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1"/>
              <text x="135" y="67.5" text-anchor="middle" fill="#475569"
                    font-size="6.5" font-family="Inter,sans-serif">E-Mail</text>
              <!-- Password field -->
              <rect x="100" y="78" width="70" height="15" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1"/>
              <text x="135" y="88.5" text-anchor="middle" fill="#475569"
                    font-size="6.5" font-family="Inter,sans-serif">• • • • • •</text>
              <!-- Login button -->
              <rect x="100" y="100" width="70" height="18" rx="6" fill="#6366f1"/>
              <text x="135" y="112" text-anchor="middle" fill="white"
                    font-size="7.5" font-weight="700" font-family="Inter,sans-serif">Anmelden →</text>
              <!-- Checkmark (appears mid-act-2) -->
              <circle class="ck-bg" cx="135" cy="143" r="14" fill="#22c55e" opacity="0"/>
              <path   class="ck"   d="M128,143 L133,149 L143,136"
                      fill="none" stroke="white" stroke-width="2.5"
                      stroke-linecap="round" stroke-linejoin="round" opacity="0"/>
              <!-- Caption -->
              <text x="135" y="192" text-anchor="middle" fill="#818cf8"
                    font-size="12" font-weight="700" font-family="Inter,sans-serif">
                Einmal. Fertig. Immer.
              </text>
            </svg>
          </div>

          <!-- ── ACT 3: JETZT ───────────────────────────────── -->
          <div class="scene s3">
            <span class="badge badge--green">JETZT</span>
            <svg viewBox="0 0 270 200" xmlns="http://www.w3.org/2000/svg">
              <!-- Sky area -->
              <rect x="0" y="0" width="270" height="112" rx="6" fill="#0ea5e9" opacity=".2"/>
              <!-- Sun body -->
              <circle cx="220" cy="40" r="22" fill="#fbbf24"/>
              <!-- Sun rays (rotate slowly in CSS) -->
              <g class="sun-rays">
                <line x1="220" y1="12"  x2="220" y2="4"   stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="220" y1="68"  x2="220" y2="76"  stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="192" y1="40"  x2="184" y2="40"  stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="248" y1="40"  x2="256" y2="40"  stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="200" y1="20"  x2="195" y2="15"  stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="240" y1="60"  x2="245" y2="65"  stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="240" y1="20"  x2="245" y2="15"  stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round"/>
                <line x1="200" y1="60"  x2="195" y2="65"  stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round"/>
              </g>
              <!-- Pool water -->
              <rect x="5"  y="110" width="260" height="82" rx="10" fill="#0284c7" opacity=".5"/>
              <rect x="5"  y="110" width="260" height="14" rx="10" fill="rgba(255,255,255,.1)"/>
              <!-- Waves -->
              <path class="wv w1"
                    d="M5,122 C42,116 78,128 115,122 C152,116 188,128 225,122 C244,118 258,124 265,120"
                    fill="none" stroke="rgba(255,255,255,.4)" stroke-width="2.5"/>
              <path class="wv w2"
                    d="M5,134 C38,128 74,140 112,134 C149,128 186,140 224,134 C244,130 258,137 265,133"
                    fill="none" stroke="rgba(255,255,255,.28)" stroke-width="2"/>
              <!-- Inflatable ring -->
              <ellipse cx="132" cy="116" rx="58"  ry="16" fill="#f9a8d4" opacity=".95"/>
              <ellipse cx="132" cy="116" rx="40"  ry="10" fill="#0284c7" opacity=".65"/>
              <!-- Person: body (lying) -->
              <ellipse cx="126" cy="106" rx="38" ry="11" fill="#fbbf24"/>
              <!-- Person: head -->
              <circle cx="168" cy="101" r="13"  fill="#fbbf24"/>
              <!-- Sunglasses -->
              <rect x="161" y="97"  width="8"   height="5.5" rx="2" fill="#0f172a"/>
              <rect x="170" y="97"  width="8"   height="5.5" rx="2" fill="#0f172a"/>
              <line x1="169" y1="99.5" x2="170" y2="99.5" stroke="#0f172a" stroke-width="1"/>
              <!-- Smile -->
              <path d="M163,109 Q168,114 173,109" fill="none" stroke="#92400e" stroke-width="1.8" stroke-linecap="round"/>
              <!-- Arm dangling in water -->
              <path d="M90,112 Q83,124 88,134" fill="none" stroke="#fbbf24" stroke-width="6" stroke-linecap="round"/>
              <!-- Cocktail -->
              <path d="M72,130 L77,114 L87,114 L92,130 Z" fill="#f87171" opacity=".92"/>
              <line x1="82"  y1="114" x2="74"  y2="98"  stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="74" cy="98" r="3" fill="#fbbf24"/>
              <rect x="75" y="120" width="5" height="5" rx="1" fill="rgba(255,255,255,.55)" transform="rotate(15,77,122)"/>
              <!-- Caption -->
              <text x="135" y="192" text-anchor="middle" fill="#4ade80"
                    font-size="12" font-weight="700" font-family="Inter,sans-serif">
                Eingestempelt. Fertig. Pool.
              </text>
            </svg>
          </div>

        </div><!-- /scenes -->
      </div><!-- /story-stage -->
    </div><!-- /container -->
  </section>
</template>

<style scoped>
/* ── Layout ─────────────────────────────────────────────────── */
.story-wrap {
  position: relative;
  overflow: hidden;
  padding: 96px 0 80px;
}

.story-sky {
  position: absolute;
  inset: 0;
  z-index: 0;
  animation: sky 18s ease-in-out infinite;
}

/* 18 s cycle:  Act 1 0-33% | Act 2 33-53% | Act 3 53-100% */
@keyframes sky {
  /* Act 1 — rapid day/night sweeps */
  0%   { background: linear-gradient(180deg,#0f172a 0%,#1e293b 100%); }
  4%   { background: linear-gradient(180deg,#7c2d12 0%,#0f172a 100%); }
  9%   { background: linear-gradient(180deg,#1d4ed8 0%,#1e3a5f 100%); }
  14%  { background: linear-gradient(180deg,#7c2d12 0%,#0f172a 100%); }
  19%  { background: linear-gradient(180deg,#0f172a 0%,#1e293b 100%); }
  23%  { background: linear-gradient(180deg,#7c2d12 0%,#0f172a 100%); }
  28%  { background: linear-gradient(180deg,#1d4ed8 0%,#1e3a5f 100%); }
  33%  { background: linear-gradient(180deg,#0f172a 0%,#1e293b 100%); }
  /* Act 2 — calm dark indigo */
  40%  { background: linear-gradient(180deg,#1e1b4b 0%,#0f172a 100%); }
  53%  { background: linear-gradient(180deg,#1e1b4b 0%,#0f172a 100%); }
  /* Act 3 — slow beautiful blue day */
  64%  { background: linear-gradient(180deg,#0c4a6e 0%,#0f172a 100%); }
  80%  { background: linear-gradient(180deg,#0369a1 0%,#083344 100%); }
  94%  { background: linear-gradient(180deg,#0284c7 0%,#0369a1 100%); }
  100% { background: linear-gradient(180deg,#0f172a 0%,#1e293b 100%); }
}

.story-inner {
  position: relative;
  z-index: 1;
}

.story-head { margin-bottom: 56px; }

.story-kicker {
  font-size: 11px;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: rgba(255,255,255,.38);
  margin-bottom: 16px;
}

.story-title {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 950;
  color: white;
  letter-spacing: -.03em;
  line-height: 1.1;
  margin-bottom: 18px;
}

.story-sub {
  font-size: 16px;
  color: rgba(255,255,255,.58);
  max-width: 520px;
  line-height: 1.65;
}

.story-stage {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 48px;
  align-items: start;
}

/* ── Left column ─────────────────────────────────────────── */
.story-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}

.hg {
  width: 96px;
  filter: drop-shadow(0 0 14px rgba(245,158,11,.22));
}

.river { width: 56px; }

/* ── Hourglass sand animations ───────────────────────────── */
.sand-t {
  transform-box: fill-box;
  transform-origin: bottom;
  animation: drainTop 18s linear infinite;
}
@keyframes drainTop {
  0%  { transform: scaleY(1); }
  82% { transform: scaleY(0.02); }
  100%{ transform: scaleY(0.02); }
}

.sand-b {
  transform-box: fill-box;
  transform-origin: bottom;
  animation: fillBot 18s linear infinite;
}
@keyframes fillBot {
  0%  { transform: scaleY(0); }
  82% { transform: scaleY(.98); }
  100%{ transform: scaleY(.98); }
}

.sand-s {
  animation: stream .28s ease-in-out infinite;
}
@keyframes stream {
  0%,100% { opacity:1; transform:scaleX(1); }
  50%     { opacity:.4; transform:scaleX(.35); }
}

/* ── River path draw ─────────────────────────────────────── */
.rp {
  stroke-dasharray: 520;
  stroke-dashoffset: 520;
  animation: drawRiver 18s linear infinite;
}
@keyframes drawRiver {
  0%  { stroke-dashoffset: 520; }
  88% { stroke-dashoffset: 0; }
  100%{ stroke-dashoffset: 0; }
}

/* ── Scene switching ─────────────────────────────────────── */
.scenes {
  position: relative;
  aspect-ratio: 270 / 230;
}

.scene {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  pointer-events: none;
}

.scene svg { width: 100%; max-width: 420px; }

/* Scene 1: visible 0–33%, fades out 30–36% */
.s1 { animation: showS1 18s ease-in-out infinite; }
@keyframes showS1 {
  0%   { opacity:1; transform:translateY(0); }
  30%  { opacity:1; transform:translateY(0); }
  36%  { opacity:0; transform:translateY(-18px); }
  100% { opacity:0; }
}

/* Scene 2: fades in 35–41%, visible 41–49%, fades out 49–55% */
.s2 { animation: showS2 18s ease-in-out infinite; }
@keyframes showS2 {
  0%,34% { opacity:0; transform:translateY(14px); }
  41%    { opacity:1; transform:translateY(0); }
  49%    { opacity:1; transform:translateY(0); }
  55%    { opacity:0; transform:translateY(-18px); }
  100%   { opacity:0; }
}

/* Scene 3: fades in 54–60%, visible 60–96%, fades out 96–100% */
.s3 { animation: showS3 18s ease-in-out infinite; }
@keyframes showS3 {
  0%,53% { opacity:0; transform:translateY(14px); }
  60%    { opacity:1; transform:translateY(0); }
  96%    { opacity:1; transform:translateY(0); }
  100%   { opacity:0; transform:translateY(-10px); }
}

/* ── Badges ──────────────────────────────────────────────── */
.badge {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: 4px 14px;
  border-radius: 99px;
  flex-shrink: 0;
}
.badge--red    { background:rgba(239,68,68,.14);  color:#f87171; border:1px solid rgba(239,68,68,.28); }
.badge--indigo { background:rgba(99,102,241,.14); color:#818cf8; border:1px solid rgba(99,102,241,.28); }
.badge--green  { background:rgba(34,197,94,.14);  color:#4ade80; border:1px solid rgba(34,197,94,.28); }

/* ── Act 1: flying papers ────────────────────────────────── */
.fp1 { animation: p1 1.55s ease-in-out infinite; }
.fp2 { animation: p2 1.25s ease-in-out infinite; }
.fp3 { animation: p3 1.9s  ease-in-out infinite; }

@keyframes p1 {
  0%,100% { transform:translate(0,0) rotate(-18deg); }
  50%     { transform:translate(-10px,-15px) rotate(-26deg); }
}
@keyframes p2 {
  0%,100% { transform:translate(0,0) rotate(22deg); }
  50%     { transform:translate(12px,-11px) rotate(30deg); }
}
@keyframes p3 {
  0%,100% { transform:translate(0,0) rotate(-26deg); }
  50%     { transform:translate(-6px,10px) rotate(-18deg); }
}

/* ── Act 2: checkmark ────────────────────────────────────── */
.ck-bg {
  transform-box: fill-box;
  transform-origin: center;
  animation: ckBg 18s ease-in-out infinite;
}
@keyframes ckBg {
  0%,44%   { transform:scale(0); opacity:0; }
  49%      { transform:scale(1); opacity:1; }
  53%,100% { transform:scale(1); opacity:0; }
}

.ck {
  animation: ckLine 18s ease-in-out infinite;
}
@keyframes ckLine {
  0%,46%   { opacity:0; }
  50%      { opacity:1; }
  53%,100% { opacity:0; }
}

/* ── Act 3: sun rays ─────────────────────────────────────── */
.sun-rays {
  transform-origin: 220px 40px;
  animation: sunSpin 9s linear infinite;
}
@keyframes sunSpin {
  from { transform:rotate(0deg); }
  to   { transform:rotate(360deg); }
}

/* ── Act 3: pool waves ───────────────────────────────────── */
.w1 { animation: wave1 3s ease-in-out infinite; }
.w2 { animation: wave2 4.2s ease-in-out infinite; }

@keyframes wave1 {
  0%,100% { transform:translateX(0) scaleY(1); }
  50%     { transform:translateX(-7px) scaleY(1.35); }
}
@keyframes wave2 {
  0%,100% { transform:translateX(-5px) scaleY(1); }
  50%     { transform:translateX(5px) scaleY(.75); }
}

/* ── Responsive ──────────────────────────────────────────── */
@media (max-width: 700px) {
  .story-stage {
    grid-template-columns: 80px 1fr;
    gap: 24px;
  }
  .hg   { width: 70px; }
  .river{ width: 40px; }
}
@media (max-width: 500px) {
  .story-left { display: none; }
  .story-stage { grid-template-columns: 1fr; }
}
</style>
