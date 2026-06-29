<script setup lang="ts">
const scrolled = ref(false)
const menuOpen = ref(false)

const links = [
  { href: '/#features', label: 'Features' },
  { href: '/#branchen', label: 'Branchen' },
  { href: '/#preise', label: 'Preise' },
  { href: '/kontakt', label: 'Kontakt' },
]

onMounted(() => {
  const handler = () => { scrolled.value = window.scrollY > 8 }
  window.addEventListener('scroll', handler, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handler))
})

const route = useRoute()
watch(() => route.path, () => { menuOpen.value = false })
</script>

<template>
  <header :class="['nav', { 'nav--scrolled': scrolled }]">
    <div class="nav-inner container">
      <NuxtLink href="/" class="nav-logo">
        <span class="logo-mark">W</span>
        <span class="logo-text">WerkTakt</span>
      </NuxtLink>

      <nav class="nav-links" aria-label="Hauptnavigation">
        <NuxtLink
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="nav-link"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="nav-actions">
        <NuxtLink href="https://app.werktakt.de" class="btn btn--outline btn--sm" target="_blank">
          Anmelden
        </NuxtLink>
        <NuxtLink href="/#preise" class="btn btn--primary btn--sm">
          Kostenlos starten
        </NuxtLink>
      </div>

      <button
        class="nav-hamburger"
        :aria-expanded="menuOpen"
        aria-label="Menü öffnen"
        @click="menuOpen = !menuOpen"
      >
        <span /><span /><span />
      </button>
    </div>

    <div :class="['nav-mobile', { 'nav-mobile--open': menuOpen }]">
      <NuxtLink
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="nav-mobile-link"
        @click="menuOpen = false"
      >
        {{ link.label }}
      </NuxtLink>
      <div class="nav-mobile-actions">
        <NuxtLink href="https://app.werktakt.de" class="btn btn--outline" target="_blank">Anmelden</NuxtLink>
        <NuxtLink href="/#preise" class="btn btn--primary" @click="menuOpen = false">Kostenlos starten</NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0);
  transition: background 0.25s ease, box-shadow 0.25s ease, backdrop-filter 0.25s ease;
}

.nav--scrolled {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 1px 0 rgba(0,0,0,0.07);
}

.nav-inner {
  display: flex;
  align-items: center;
  height: 68px;
  gap: 32px;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
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
  letter-spacing: -0.05em;
  flex-shrink: 0;
}

.logo-text {
  font-size: 18px;
  font-weight: 950;
  color: var(--text);
  letter-spacing: -0.04em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
}

.nav-link {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-mid);
  padding: 6px 12px;
  border-radius: var(--radius-xs);
  transition: color 0.15s, background 0.15s;
}

.nav-link:hover {
  color: var(--text);
  background: var(--bg-light);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.btn--sm {
  padding: 8px 18px;
  font-size: 14px;
}

/* Mobile hamburger */
.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 6px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
}

.nav-hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.2s;
}

.nav-mobile {
  display: none;
  flex-direction: column;
  background: white;
  border-top: 1px solid var(--border);
  padding: 16px;
  gap: 4px;
}

.nav-mobile--open {
  display: flex;
}

.nav-mobile-link {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-mid);
  padding: 12px 16px;
  border-radius: var(--radius-sm);
  transition: background 0.15s;
}

.nav-mobile-link:hover {
  background: var(--bg-light);
  color: var(--text);
}

.nav-mobile-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px 0 4px;
}

@media (max-width: 768px) {
  .nav-links, .nav-actions { display: none; }
  .nav-hamburger { display: flex; }
  .nav-mobile { display: none; }
  .nav-mobile.nav-mobile--open { display: flex; }
}
</style>
