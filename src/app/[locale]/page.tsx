@import "tailwindcss";

/* ===== نظام الألوان المركزي: عدّل القيم هنا فقط ===== */
@theme {
  --color-background: #0a0e14;
  --color-surface: #111722;
  --color-surface-2: #171f2e;
  --color-border: #222c3d;
  --color-foreground: #e8edf5;
  --color-muted: #8b98ad;
  --color-accent: #d4a84b;
  --color-accent-foreground: #0a0e14;
  --color-positive: #2fbf8f;
  --color-negative: #e5675f;

  --font-sans: var(--font-inter), var(--font-cairo), system-ui, sans-serif;
}

html {
  color-scheme: dark;
  scroll-behavior: smooth;
}

/* الخط العربي للصفحات العربية */
html[lang="ar"] {
  font-family: var(--font-cairo), var(--font-inter), system-ui, sans-serif;
}

body {
  -webkit-font-smoothing: antialiased;
}

/* ===== تأثيرات الصفحة الرئيسية ===== */
.hero-glow {
  background-image:
    radial-gradient(60% 50% at 80% 0%, rgba(212, 168, 75, 0.12), transparent 70%),
    radial-gradient(40% 40% at 0% 100%, rgba(47, 191, 143, 0.06), transparent 70%);
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

.fade-up {
  animation: fade-up 0.6s ease-out both;
}

@media (prefers-reduced-motion: reduce) {
  .fade-up {
    animation: none;
  }
  html {
    scroll-behavior: auto;
  }
}