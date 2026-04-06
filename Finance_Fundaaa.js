<!DOCTYPE html>
<html lang="hi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Finance Fundaa – Fund Kya Hai? LinkedIn Carousel</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,600;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<style>
:root {
  --navy: #0a1628;
  --saffron: #FF6B00;
  --saffron-light: #FF9A40;
  --gold: #FFD700;
  --cream: #FFF8EE;
  --slate: #8596A6;
  --glass: rgba(255,255,255,0.06);
  --slide-w: 1080px;
  --slide-h: 1080px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: #0f0f0f;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  font-family: 'DM Sans', sans-serif;
  overflow-x: hidden;
}

/* ─── VIEWER SHELL ─────────────────────────────────────────── */
#viewer {
  width: 100%;
  max-width: var(--slide-w);
  position: relative;
}

.slide-track {
  width: 100%;
  overflow: hidden;
  position: relative;
  aspect-ratio: 1 / 1;
}

.slides-wrapper {
  display: flex;
  transition: transform 0.55s cubic-bezier(0.65, 0, 0.35, 1);
  height: 100%;
}

/* ─── CONTROLS ─────────────────────────────────────────────── */
.controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 28px;
  background: #141414;
  border-top: 1px solid #222;
}

.btn-nav {
  width: 52px; height: 52px;
  border-radius: 50%;
  border: 1.5px solid #333;
  background: #1c1c1c;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  display: grid; place-items: center;
  transition: all 0.2s;
}
.btn-nav:hover { border-color: var(--saffron); color: var(--saffron); }
.btn-nav:disabled { opacity: 0.3; cursor: not-allowed; }

.dots {
  display: flex; gap: 8px; align-items: center;
}
.dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #333;
  cursor: pointer;
  transition: all 0.3s;
}
.dot.active { background: var(--saffron); width: 22px; border-radius: 3px; }

.slide-counter {
  font-family: 'Syne', sans-serif;
  font-size: 13px;
  color: #555;
  letter-spacing: 2px;
  font-weight: 700;
}

/* ─── AI SUMMARY BAR ──────────────────────────────────────── */
#ai-bar {
  width: 100%;
  max-width: var(--slide-w);
  background: #0d0d0d;
  border: 1px solid #222;
  border-top: none;
  padding: 0 28px 28px;
}

.ai-toggle-btn {
  display: flex; align-items: center; gap: 10px;
  background: none; border: none; cursor: pointer;
  color: var(--saffron); font-size: 13px; letter-spacing: 1.5px;
  font-family: 'Syne', sans-serif; font-weight: 700;
  text-transform: uppercase; padding: 14px 0;
  border-top: 1px solid #222; width: 100%;
}
.ai-toggle-btn i { font-size: 16px; }
.ai-toggle-btn .chevron { margin-left: auto; transition: transform 0.3s; }
.ai-toggle-btn.open .chevron { transform: rotate(180deg); }

.ai-content {
  display: none;
  background: linear-gradient(135deg, #0f1f35 0%, #111 100%);
  border: 1px solid #1e3a5f;
  border-radius: 16px;
  padding: 24px 28px;
  position: relative;
  overflow: hidden;
}
.ai-content::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--saffron), var(--gold), var(--saffron-light));
}
.ai-content.visible { display: block; animation: fadeSlide 0.35s ease; }

.ai-header {
  display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
}
.ai-badge {
  background: linear-gradient(135deg, var(--saffron), var(--gold));
  color: #000; font-size: 10px; font-weight: 800;
  padding: 3px 10px; border-radius: 50px;
  font-family: 'Syne', sans-serif; letter-spacing: 1px;
  text-transform: uppercase;
}
.ai-title { color: #fff; font-size: 15px; font-weight: 600; }
#ai-text {
  color: #a0b4c5;
  font-size: 14px;
  line-height: 1.8;
  min-height: 60px;
}
.ai-loading {
  display: inline-flex; gap: 5px; align-items: center;
}
.ai-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--saffron);
  animation: pulse 1.2s ease-in-out infinite;
}
.ai-dot:nth-child(2) { animation-delay: 0.2s; }
.ai-dot:nth-child(3) { animation-delay: 0.4s; }

@keyframes pulse {
  0%,100% { opacity: 0.3; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
}
@keyframes fadeSlide {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ─── BASE SLIDE ───────────────────────────────────────────── */
.slide {
  min-width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px;
  background: var(--navy);
}

/* ─── NOISE TEXTURE OVERLAY ────────────────────────────────── */
.slide::after {
  content: '';
  position: absolute; inset: 0; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  opacity: 0.6;
  z-index: 0;
}

.slide > * { position: relative; z-index: 1; }

/* ─── GEOMETRIC ACCENTS ────────────────────────────────────── */
.geo-circle {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

/* ─── SLIDE HEADER STRIP ───────────────────────────────────── */
.s-brand {
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 60px;
}
.s-brand-logo {
  width: 40px; height: 40px;
  background: linear-gradient(135deg, var(--saffron), var(--gold));
  border-radius: 10px;
  display: grid; place-items: center;
  font-size: 18px; font-weight: 800;
  color: #000; font-family: 'Syne', sans-serif;
}
.s-brand-name {
  font-family: 'Syne', sans-serif;
  font-size: 14px; font-weight: 700;
  color: #4a6080; letter-spacing: 2px; text-transform: uppercase;
}

/* ─── PROGRESS BAR ─────────────────────────────────────────── */
.s-progress {
  position: absolute;
  bottom: 0; left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--saffron), var(--gold));
  transition: width 0.3s;
}

/* ─── FOOTER ───────────────────────────────────────────────── */
.s-footer {
  position: absolute;
  bottom: 28px; right: 80px;
  font-size: 12px; color: #2a3f55;
  font-family: 'Syne', sans-serif; letter-spacing: 2px;
}

/* ═══════════════════════════════════════════════
   SLIDE 1 – COVER
═══════════════════════════════════════════════ */
#s1 {
  background: var(--navy);
  align-items: flex-start;
  justify-content: flex-end;
  padding-bottom: 100px;
}

.s1-bg-text {
  position: absolute;
  font-family: 'Syne', sans-serif;
  font-size: clamp(120px, 18vw, 220px);
  font-weight: 800;
  color: rgba(255,107,0,0.05);
  top: -20px; left: -10px;
  line-height: 1;
  pointer-events: none;
  letter-spacing: -5px;
  user-select: none;
}

.s1-tag {
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(255,107,0,0.12);
  border: 1px solid rgba(255,107,0,0.3);
  color: var(--saffron);
  padding: 8px 18px; border-radius: 50px;
  font-size: 12px; letter-spacing: 2px;
  font-family: 'Syne', sans-serif; font-weight: 700;
  text-transform: uppercase; margin-bottom: 32px;
}
.s1-tag i { font-size: 10px; }

.s1-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(64px, 8vw, 96px);
  font-weight: 800;
  color: #fff;
  line-height: 1.0;
  letter-spacing: -3px;
  margin-bottom: 28px;
}
.s1-title span { color: var(--saffron); }

.s1-sub {
  font-size: 20px;
  color: #7a9ab5;
  max-width: 520px;
  line-height: 1.6;
  margin-bottom: 52px;
  font-weight: 300;
}

.s1-author {
  display: flex; align-items: center; gap: 16px;
}
.s1-avatar {
  width: 52px; height: 52px; border-radius: 50%;
  background: linear-gradient(135deg, var(--saffron) 0%, var(--gold) 100%);
  display: grid; place-items: center;
  font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: #000;
  border: 3px solid rgba(255,107,0,0.3);
}
.s1-author-info small { display: block; color: #3a5570; font-size: 12px; letter-spacing: 1px; }
.s1-author-info strong { color: #fff; font-size: 16px; font-weight: 600; }

.s1-visual {
  position: absolute;
  right: 0; top: 0; bottom: 0;
  width: 45%;
  overflow: hidden;
}
.s1-visual img {
  width: 100%; height: 100%;
  object-fit: cover;
  opacity: 0.2;
  mix-blend-mode: luminosity;
}
.s1-visual::before {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(90deg, var(--navy) 20%, transparent 80%);
  z-index: 1;
}

/* ═══════════════════════════════════════════════
   SLIDE 2 – HOOK
═══════════════════════════════════════════════ */
#s2 { justify-content: center; }

.hook-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  width: 100%;
}

.hook-visual-box {
  background: linear-gradient(135deg, #0e2040 0%, #091528 100%);
  border: 1px solid #1a3050;
  border-radius: 24px;
  padding: 48px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
.hook-visual-box::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, transparent, var(--saffron), transparent);
}
.hook-emoji { font-size: 80px; display: block; margin-bottom: 20px; line-height: 1; }
.hook-amount {
  font-family: 'Syne', sans-serif;
  font-size: 56px; font-weight: 800;
  color: var(--gold);
  display: block; line-height: 1;
}
.hook-label { color: #4a6a85; font-size: 14px; margin-top: 8px; letter-spacing: 1px; }

.hook-content .s-slide-tag {
  display: inline-block;
  background: rgba(255,107,0,0.1); border: 1px solid rgba(255,107,0,0.25);
  color: var(--saffron); padding: 5px 14px; border-radius: 50px;
  font-size: 11px; letter-spacing: 2px; font-family: 'Syne', sans-serif;
  font-weight: 700; text-transform: uppercase; margin-bottom: 20px;
}

.s-heading {
  font-family: 'Syne', sans-serif;
  font-size: clamp(32px, 4.5vw, 48px);
  font-weight: 800; color: #fff;
  line-height: 1.1;
  letter-spacing: -1.5px;
  margin-bottom: 24px;
}
.s-heading span { color: var(--saffron); }

.hook-steps {
  display: flex; flex-direction: column; gap: 16px; margin-top: 24px;
}
.hook-step {
  display: flex; align-items: center; gap: 16px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px; padding: 14px 18px;
}
.hook-step-num {
  width: 32px; height: 32px; border-radius: 8px;
  background: linear-gradient(135deg, var(--saffron), var(--gold));
  display: grid; place-items: center;
  font-family: 'Syne', sans-serif; font-weight: 800; font-size: 14px; color: #000;
  flex-shrink: 0;
}
.hook-step p { color: #8ca5bc; font-size: 15px; }
.hook-step p strong { color: #fff; }

/* ═══════════════════════════════════════════════
   SLIDE 3 – BENEFITS TILES
═══════════════════════════════════════════════ */
#s3 { justify-content: flex-start; padding-top: 80px; }

.s3-tiles {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  width: 100%;
  margin-top: 40px;
}

.benefit-tile {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 40px 32px;
  transition: border-color 0.3s;
  position: relative;
  overflow: hidden;
}
.benefit-tile::after {
  content: '';
  position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--saffron), var(--gold));
  opacity: 0;
  transition: opacity 0.3s;
}
.benefit-tile:hover { border-color: rgba(255,107,0,0.3); }
.benefit-tile:hover::after { opacity: 1; }

.bt-icon {
  width: 56px; height: 56px;
  background: linear-gradient(135deg, rgba(255,107,0,0.2), rgba(255,215,0,0.1));
  border: 1px solid rgba(255,107,0,0.25);
  border-radius: 16px;
  display: grid; place-items: center;
  font-size: 24px; color: var(--saffron);
  margin-bottom: 28px;
}
.bt-title {
  font-family: 'Syne', sans-serif;
  font-size: 22px; font-weight: 800; color: #fff;
  margin-bottom: 12px; letter-spacing: -0.5px;
}
.bt-desc { color: #5a7a95; font-size: 14px; line-height: 1.7; }

/* ═══════════════════════════════════════════════
   SLIDE 4 – PERSONAL FUNDS (STAT STYLE)
═══════════════════════════════════════════════ */
#s4 {
  background: linear-gradient(145deg, #0a1628 0%, #0c1e38 100%);
}

.s4-layout {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
  width: 100%;
  margin-top: 40px;
}

.fund-cards { display: flex; flex-direction: column; gap: 20px; }

.fund-card {
  background: rgba(255,255,255,0.04);
  border-radius: 18px;
  padding: 28px 32px;
  border-left: 3px solid var(--saffron);
  border-top: 1px solid rgba(255,255,255,0.07);
  border-right: 1px solid rgba(255,255,255,0.07);
  border-bottom: 1px solid rgba(255,255,255,0.07);
}
.fund-card h4 {
  font-family: 'Syne', sans-serif;
  font-size: 20px; font-weight: 700; color: var(--saffron-light);
  margin-bottom: 8px;
}
.fund-card p { color: #5a7a95; font-size: 14px; line-height: 1.6; }

.s4-stat-box {
  background: linear-gradient(135deg, #0e2040, #091528);
  border: 1px solid #1a3050;
  border-radius: 24px;
  padding: 52px 40px;
  text-align: center;
}
.stat-num {
  font-family: 'Syne', sans-serif;
  font-size: 100px; font-weight: 800;
  color: var(--saffron);
  line-height: 1;
  display: block;
  letter-spacing: -4px;
}
.stat-label {
  color: #4a6a85; font-size: 14px;
  margin-top: 12px; line-height: 1.5;
  letter-spacing: 0.5px;
}
.stat-label strong { color: #fff; display: block; font-size: 20px; margin-bottom: 8px; }

/* ═══════════════════════════════════════════════
   SLIDE 5 – BUSINESS FUNDS
═══════════════════════════════════════════════ */
#s5 {}

.biz-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  width: 100%;
  margin-top: 40px;
}

.biz-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 22px;
  padding: 42px 36px;
  position: relative;
  overflow: hidden;
}
.biz-card .biz-num {
  position: absolute; top: 32px; right: 32px;
  font-family: 'Syne', sans-serif;
  font-size: 72px; font-weight: 800;
  color: rgba(255,107,0,0.06);
  line-height: 1;
}
.biz-icon {
  font-size: 36px; color: var(--saffron);
  margin-bottom: 20px; display: block;
}
.biz-title {
  font-family: 'Syne', sans-serif;
  font-size: 24px; font-weight: 800; color: #fff;
  margin-bottom: 12px; letter-spacing: -0.5px;
}
.biz-desc { color: #5a7a95; font-size: 15px; line-height: 1.7; }
.biz-tag {
  display: inline-block; margin-top: 20px;
  background: rgba(255,107,0,0.1);
  border: 1px solid rgba(255,107,0,0.2);
  color: var(--saffron); font-size: 11px;
  padding: 4px 12px; border-radius: 50px;
  font-family: 'Syne', sans-serif; font-weight: 700; letter-spacing: 1px;
}

/* ═══════════════════════════════════════════════
   SLIDE 6 – CHART
═══════════════════════════════════════════════ */
#s6 { justify-content: flex-start; padding-top: 80px; }

.chart-area { width: 100%; margin-top: 40px; }

.chart-row {
  display: flex; align-items: center; gap: 0;
  margin-bottom: 28px; opacity: 0;
  animation: slideInBar 0.6s ease forwards;
}
.chart-row:nth-child(2) { animation-delay: 0.2s; }
.chart-row:nth-child(3) { animation-delay: 0.4s; }

@keyframes slideInBar {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

.cr-label {
  flex: 0 0 220px;
  font-size: 15px; color: #7a9ab5;
  text-align: right; padding-right: 24px;
  font-weight: 600;
}
.cr-track {
  flex: 1; height: 52px;
  background: rgba(255,255,255,0.04);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}
.cr-fill {
  height: 100%;
  border-radius: 12px;
  display: flex; align-items: center;
  justify-content: flex-end;
  padding-right: 20px;
  font-family: 'Syne', sans-serif; font-weight: 800;
  font-size: 16px; color: #fff;
  animation: barGrow 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  width: 0%;
  letter-spacing: 0.5px;
}
.cr-fill.savings { animation-name: barGrowSav; background: rgba(100,116,139,0.5); }
.cr-fill.fd { animation-name: barGrowFD; background: rgba(71,85,105,0.7); }
.cr-fill.mf { animation-name: barGrowMF; background: linear-gradient(90deg, var(--saffron), var(--gold)); box-shadow: 0 0 30px rgba(255,107,0,0.4); }

@keyframes barGrowSav { from{width:0} to{width:28%} }
@keyframes barGrowFD  { from{width:0} to{width:52%} }
@keyframes barGrowMF  { from{width:0} to{width:100%} }

.chart-note {
  margin-top: 16px; font-size: 12px;
  color: #2a3f55; font-style: italic;
  text-align: right;
}

.highlight-row {
  background: rgba(255,107,0,0.06);
  border: 1px solid rgba(255,107,0,0.15);
  border-radius: 12px;
  padding: 14px 20px;
  margin-top: 36px;
  display: flex; align-items: center; gap: 16px;
}
.highlight-row i { color: var(--saffron); font-size: 20px; }
.highlight-row p { color: #8ab; font-size: 15px; }
.highlight-row p strong { color: #fff; }

/* ═══════════════════════════════════════════════
   SLIDE 7 – INVESTMENT FUNDS
═══════════════════════════════════════════════ */
#s7 { justify-content: flex-start; padding-top: 80px; }

.inv-list { width: 100%; margin-top: 40px; display: flex; flex-direction: column; gap: 20px; }

.inv-item {
  display: flex; align-items: center; gap: 28px;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 18px;
  padding: 28px 32px;
  transition: border-color 0.3s;
  position: relative;
  overflow: hidden;
}
.inv-item::before {
  content: '';
  position: absolute; left: 0; top: 0; bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--saffron), var(--gold));
  border-radius: 0 2px 2px 0;
}
.inv-icon-wrap {
  width: 56px; height: 56px; flex-shrink: 0;
  background: rgba(255,107,0,0.1);
  border-radius: 14px;
  display: grid; place-items: center;
  font-size: 24px; color: var(--saffron);
}
.inv-body h4 {
  font-family: 'Syne', sans-serif;
  font-size: 20px; font-weight: 700; color: #fff; margin-bottom: 6px;
}
.inv-body p { color: #5a7a95; font-size: 14px; line-height: 1.5; }
.inv-badge {
  margin-left: auto; flex-shrink: 0;
  background: rgba(255,107,0,0.1); border: 1px solid rgba(255,107,0,0.25);
  color: var(--saffron); font-size: 11px;
  padding: 6px 14px; border-radius: 50px;
  font-family: 'Syne', sans-serif; font-weight: 700;
  letter-spacing: 1px; text-align: center;
  white-space: nowrap;
}

/* ═══════════════════════════════════════════════
   SLIDE 8 – GOVERNMENT FUNDS
═══════════════════════════════════════════════ */
#s8 {
  background: linear-gradient(145deg, #040d1c 0%, #080f20 100%);
  justify-content: center;
}

.gov-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;
  width: 100%;
  margin-top: 40px;
}

.gov-visual {
  position: relative;
}
.gov-visual img {
  width: 100%; border-radius: 20px;
  aspect-ratio: 1/1; object-fit: cover;
  opacity: 0.5; filter: grayscale(30%);
  border: 1px solid rgba(255,107,0,0.2);
}
.gov-overlay {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(0deg, rgba(4,13,28,0.9) 30%, transparent);
  padding: 28px 24px; border-radius: 0 0 20px 20px;
}
.gov-overlay strong {
  font-family: 'Syne', sans-serif; font-size: 18px; color: var(--gold);
}

.gov-points { display: flex; flex-direction: column; gap: 24px; }

.gov-point {
  display: flex; gap: 20px; align-items: flex-start;
}
.gp-icon {
  width: 44px; height: 44px; flex-shrink: 0;
  background: rgba(255,215,0,0.08);
  border: 1px solid rgba(255,215,0,0.2);
  border-radius: 12px;
  display: grid; place-items: center;
  font-size: 18px; color: var(--gold);
}
.gp-body strong {
  font-family: 'Syne', sans-serif;
  font-size: 18px; color: #fff; display: block; margin-bottom: 4px;
}
.gp-body p { color: #4a6a85; font-size: 14px; line-height: 1.5; }

/* ═══════════════════════════════════════════════
   SLIDE 9 – CHARITY FUNDS
═══════════════════════════════════════════════ */
#s9 { justify-content: flex-start; padding-top: 80px; }

.charity-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 50px;
  align-items: center;
  width: 100%;
  margin-top: 40px;
}

.charity-cards { display: flex; flex-direction: column; gap: 18px; }

.charity-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px;
  padding: 24px 28px;
  display: flex; gap: 20px; align-items: center;
}
.cc-icon {
  width: 48px; height: 48px; flex-shrink: 0;
  border-radius: 12px;
  display: grid; place-items: center;
  font-size: 20px;
}
.cc-icon.orange { background: rgba(255,107,0,0.12); color: var(--saffron); }
.cc-icon.green  { background: rgba(52,211,153,0.10); color: #34d399; }
.cc-icon.blue   { background: rgba(96,165,250,0.10); color: #60a5fa; }
.cc-body strong {
  font-family: 'Syne', sans-serif;
  font-size: 16px; font-weight: 700; color: #fff; display: block; margin-bottom: 4px;
}
.cc-body p { color: #4a6a85; font-size: 13px; line-height: 1.5; }

.charity-visual-box {
  background: linear-gradient(145deg, #0e2040, #091528);
  border: 1px solid #1a3050;
  border-radius: 24px;
  padding: 48px 36px;
  text-align: center;
}
.charity-visual-box .big-icon { font-size: 72px; display: block; margin-bottom: 24px; }
.charity-quote {
  font-size: 18px; color: #7a9ab5; line-height: 1.7;
  font-style: italic;
}
.charity-quote strong { color: var(--saffron); font-style: normal; }

/* ═══════════════════════════════════════════════
   SLIDE 10 – PIE CHART
═══════════════════════════════════════════════ */
#s10 { justify-content: flex-start; padding-top: 80px; }

.pie-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  width: 100%;
  margin-top: 40px;
}

.donut-wrap { display: flex; justify-content: center; align-items: center; }

.donut-svg { width: 320px; height: 320px; }

.legend-items { display: flex; flex-direction: column; gap: 28px; }

.leg-item { display: flex; align-items: center; gap: 20px; }
.leg-dot {
  width: 16px; height: 16px; border-radius: 50%; flex-shrink: 0;
}
.leg-body strong {
  font-family: 'Syne', sans-serif;
  font-size: 22px; font-weight: 800; color: #fff; display: block;
}
.leg-body p { color: #4a6a85; font-size: 13px; margin-top: 2px; }
.leg-pct {
  margin-left: auto;
  font-family: 'Syne', sans-serif;
  font-size: 28px; font-weight: 800;
  color: var(--saffron-light);
}

.pie-note {
  margin-top: 24px;
  background: rgba(255,107,0,0.06);
  border: 1px solid rgba(255,107,0,0.15);
  border-radius: 12px;
  padding: 16px 20px;
  color: #6a8a9a; font-size: 13px; line-height: 1.6;
}
.pie-note strong { color: var(--saffron); }

/* ═══════════════════════════════════════════════
   SLIDE 11 – RETIREMENT
═══════════════════════════════════════════════ */
#s11 {
  background: linear-gradient(135deg, #040d1c 0%, #0a1628 100%);
  justify-content: flex-start; padding-top: 80px;
}

.ret-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;
  width: 100%;
  margin-top: 40px;
}

.ret-stat-box {
  text-align: center;
  background: linear-gradient(135deg, #0e2040, #091528);
  border: 1px solid #1a3050;
  border-radius: 24px;
  padding: 52px 36px;
  position: relative;
  overflow: hidden;
}
.ret-stat-box::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, transparent, var(--saffron), transparent);
}
.ret-pct {
  font-family: 'Syne', sans-serif;
  font-size: 120px; font-weight: 800;
  color: var(--saffron);
  line-height: 1; letter-spacing: -5px; display: block;
}
.ret-pct-label {
  color: #4a6a85; font-size: 14px; margin-top: 12px;
  letter-spacing: 0.5px; line-height: 1.5;
}
.ret-pct-label strong { color: #fff; font-size: 18px; display: block; margin-bottom: 6px; }

.ret-cards { display: flex; flex-direction: column; gap: 18px; }

.ret-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-left: 3px solid;
  border-radius: 14px;
  padding: 22px 26px;
}
.ret-card:nth-child(1) { border-left-color: var(--saffron); }
.ret-card:nth-child(2) { border-left-color: var(--gold); }
.ret-card:nth-child(3) { border-left-color: #60a5fa; }
.ret-card strong {
  font-family: 'Syne', sans-serif;
  font-size: 18px; font-weight: 700; color: #fff; display: block; margin-bottom: 6px;
}
.ret-card p { color: #4a6a85; font-size: 13px; line-height: 1.5; }

/* ═══════════════════════════════════════════════
   SLIDE 12 – CTA
═══════════════════════════════════════════════ */
#s12 {
  background: linear-gradient(145deg, #0a1628 0%, #040d1c 100%);
  align-items: center;
  text-align: center;
  justify-content: center;
}

.cta-table-wrap {
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.07);
  margin: 40px 0 48px;
}

.cta-table {
  width: 100%;
  border-collapse: collapse;
}
.cta-table th {
  background: rgba(255,107,0,0.12);
  padding: 20px 28px;
  text-align: left;
  font-family: 'Syne', sans-serif;
  font-size: 14px; font-weight: 700;
  color: var(--saffron); letter-spacing: 1.5px;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}
.cta-table td {
  padding: 20px 28px;
  text-align: left;
  font-size: 15px; color: #7a9ab5;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  background: rgba(255,255,255,0.02);
}
.cta-table tr:last-child td { border-bottom: none; }
.cta-table td:first-child { color: #fff; font-weight: 600; }
.priority-must { color: #ef4444 !important; font-weight: 700; font-family: 'Syne', sans-serif; }
.priority-high { color: #22c55e !important; font-weight: 700; font-family: 'Syne', sans-serif; }
.priority-veryhigh { color: #60a5fa !important; font-weight: 700; font-family: 'Syne', sans-serif; }

.cta-bottom {
  display: flex; flex-direction: column; align-items: center; gap: 12px;
}
.cta-headline {
  font-family: 'Syne', sans-serif;
  font-size: 40px; font-weight: 800; color: #fff;
  letter-spacing: -1.5px; line-height: 1.1;
}
.cta-headline span { color: var(--saffron); }
.cta-sub { color: #4a6a85; font-size: 16px; }
.cta-handle {
  margin-top: 8px;
  display: inline-flex; align-items: center; gap: 10px;
  background: linear-gradient(135deg, var(--saffron), var(--gold));
  color: #000; font-family: 'Syne', sans-serif;
  font-weight: 800; font-size: 16px;
  padding: 14px 36px; border-radius: 50px;
  letter-spacing: 0.5px;
}
</style>
</head>
<body>

<div id="viewer">
  <div class="slide-track">
    <div class="slides-wrapper" id="slidesWrapper">

      <!-- ═══ SLIDE 1: COVER ═══ -->
      <div class="slide" id="s1">
        <div class="geo-circle" style="width:600px;height:600px;top:-200px;right:-150px;background:radial-gradient(circle,rgba(255,107,0,0.07) 0%,transparent 70%);"></div>
        <div class="geo-circle" style="width:400px;height:400px;bottom:-150px;left:-100px;background:radial-gradient(circle,rgba(255,215,0,0.04) 0%,transparent 70%);"></div>
        <div class="s1-bg-text">FUND</div>
        <div class="s1-visual">
          <img src="https://images.unsplash.com/photo-1611974717483-5867ff79ccad?q=80&w=800&auto=format" alt="" onerror="this.style.display='none'">
        </div>
        <div class="s-brand">
          <div class="s1-brand-logo" style="width:40px;height:40px;background:linear-gradient(135deg,#FF6B00,#FFD700);border-radius:10px;display:grid;place-items:center;font-size:18px;font-weight:800;color:#000;font-family:'Syne',sans-serif;">FF</div>
          <div class="s-brand-name">Finance Fundaa</div>
        </div>
        <div class="s1-tag"><i class="fa-solid fa-graduation-cap"></i> Financial Literacy 101</div>
        <div class="s1-title">Fund<br><span>Kya Hai?</span></div>
        <div class="s1-sub">Paisa invest karne ka sabse smart, safe aur aasaan tarika — bilkul simple language mein.</div>
        <div class="s1-author">
          <div class="s1-avatar">V</div>
          <div class="s1-author-info">
            <small>BY</small>
            <strong>Vishal Kumar</strong>
          </div>
          <div style="margin-left:auto;font-family:'Syne',sans-serif;font-size:13px;color:#2a3f55;letter-spacing:2px;">SWIPE →</div>
        </div>
        <div class="s-progress" style="width:8.33%"></div>
        <div class="s-footer">01 / 12</div>
      </div>

      <!-- ═══ SLIDE 2: HOOK ═══ -->
      <div class="slide" id="s2">
        <div class="geo-circle" style="width:500px;height:500px;top:-100px;right:-100px;background:radial-gradient(circle,rgba(255,107,0,0.05) 0%,transparent 70%);"></div>
        <div class="s-brand"><div class="s1-brand-logo" style="width:36px;height:36px;background:linear-gradient(135deg,#FF6B00,#FFD700);border-radius:10px;display:grid;place-items:center;font-size:16px;font-weight:800;color:#000;font-family:'Syne',sans-serif;">FF</div><div class="s-brand-name">Finance Fundaa</div></div>
        <div class="hook-grid">
          <div class="hook-visual-box">
            <span class="hook-emoji">🏖️</span>
            <span class="hook-amount">₹5,000</span>
            <p class="hook-label">× 10 dost = ₹50,000 / month</p>
            <div style="margin-top:28px;padding:16px;background:rgba(255,107,0,0.08);border-radius:12px;border:1px solid rgba(255,107,0,0.15);">
              <p style="color:#8ab;font-size:13px;line-height:1.6;"><strong style="color:var(--saffron-light);">Goa Trip Goal:</strong><br>Sabka paisa ek jagah, ek maqsad — <strong style="color:#fff;">Yahi hai Fund!</strong></p>
            </div>
          </div>
          <div class="hook-content">
            <div class="s-slide-tag">Real Example</div>
            <div class="s-heading">Fund Ka<br><span>Concept</span><br>Seedha Clear</div>
            <div class="hook-steps">
              <div class="hook-step">
                <div class="hook-step-num">1</div>
                <p><strong>Collect</strong> — Sabka paisa ek jagah jama karo</p>
              </div>
              <div class="hook-step">
                <div class="hook-step-num">2</div>
                <p><strong>Purpose</strong> — Ek specific goal ke liye</p>
              </div>
              <div class="hook-step">
                <div class="hook-step-num">3</div>
                <p><strong>Manage</strong> — Smart tarike se use karo</p>
              </div>
            </div>
          </div>
        </div>
        <div class="s-progress" style="width:16.66%"></div>
        <div class="s-footer">02 / 12</div>
      </div>

      <!-- ═══ SLIDE 3: BENEFITS ═══ -->
      <div class="slide" id="s3">
        <div class="geo-circle" style="width:700px;height:700px;top:-300px;right:-200px;background:radial-gradient(circle,rgba(255,215,0,0.04) 0%,transparent 60%);"></div>
        <div class="s-brand"><div class="s1-brand-logo" style="width:36px;height:36px;background:linear-gradient(135deg,#FF6B00,#FFD700);border-radius:10px;display:grid;place-items:center;font-size:16px;font-weight:800;color:#000;font-family:'Syne',sans-serif;">FF</div><div class="s-brand-name">Finance Fundaa</div></div>
        <div class="s-heading" style="margin-bottom:0;">Fund Mein Invest<br>Karne Ke <span>3 Bade Fayde</span></div>
        <div class="s3-tiles">
          <div class="benefit-tile">
            <div class="bt-icon"><i class="fa-solid fa-user-tie"></i></div>
            <div class="bt-title">Expert Management</div>
            <p class="bt-desc">Professional fund managers aapka paisa handle karte hain — jinka market knowledge aap se kai guna zyada hota hai.</p>
          </div>
          <div class="benefit-tile">
            <div class="bt-icon"><i class="fa-solid fa-layer-group"></i></div>
            <div class="bt-title">Risk Hai Kam</div>
            <p class="bt-desc">Diversification ki wajah se ek jagah nuksaan hua toh doosri jagah cover ho jata hai. Smart protection!</p>
          </div>
          <div class="benefit-tile">
            <div class="bt-icon"><i class="fa-solid fa-wallet"></i></div>
            <div class="bt-title">₹500 Se Start</div>
            <p class="bt-desc">Shared expenses ki wajah se kharcha bohot kam. Mutual funds mein sirf 500 rupaye se SIP shuru kar sakte ho.</p>
          </div>
        </div>
        <div class="s-progress" style="width:25%"></div>
        <div class="s-footer">03 / 12</div>
      </div>

      <!-- ═══ SLIDE 4: PERSONAL FUNDS ═══ -->
      <div class="slide" id="s4">
        <div class="geo-circle" style="width:500px;height:500px;bottom:-200px;right:-100px;background:radial-gradient(circle,rgba(255,107,0,0.06) 0%,transparent 70%);"></div>
        <div class="s-brand"><div class="s1-brand-logo" style="width:36px;height:36px;background:linear-gradient(135deg,#FF6B00,#FFD700);border-radius:10px;display:grid;place-items:center;font-size:16px;font-weight:800;color:#000;font-family:'Syne',sans-serif;">FF</div><div class="s-brand-name">Finance Fundaa</div></div>
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;">
          <div style="background:rgba(255,107,0,0.1);border:1px solid rgba(255,107,0,0.25);color:var(--saffron);padding:5px 14px;border-radius:50px;font-size:11px;letter-spacing:2px;font-family:'Syne',sans-serif;font-weight:700;">TYPE 01</div>
          <div class="s-heading" style="margin:0;font-size:42px;">Personal <span>Funds</span></div>
        </div>
        <div class="s4-layout">
          <div class="fund-cards">
            <div class="fund-card">
              <h4>🛡️ Emergency Fund</h4>
              <p>Mushkil waqt ke liye — 6 mahine ka kharcha hamesha save karke rakho. Job loss, illness, kuch bhi aa sakta hai.</p>
            </div>
            <div class="fund-card" style="border-left-color:#FFD700;">
              <h4>📚 Education Fund</h4>
              <p>Apni ya bachon ki padhai ke liye. Skill upgrade aur future ke liye sabse bada investment yahi hai.</p>
            </div>
            <div class="fund-card" style="border-left-color:#60a5fa;">
              <h4>🎯 Goal Fund</h4>
              <p>Car, ghar, vacation — har bade sapne ke liye alag fund banao. Planning = Success.</p>
            </div>
          </div>
          <div class="s4-stat-box">
            <span class="stat-num">6x</span>
            <p class="stat-label"><strong>Minimum Safety Net</strong>6 mahine ka monthly kharcha — Emergency Fund ki golden rule</p>
          </div>
        </div>
        <div class="s-progress" style="width:33.33%"></div>
        <div class="s-footer">04 / 12</div>
      </div>

      <!-- ═══ SLIDE 5: BUSINESS FUNDS ═══ -->
      <div class="slide" id="s5">
        <div class="geo-circle" style="width:600px;height:600px;top:-200px;left:-200px;background:radial-gradient(circle,rgba(255,215,0,0.04) 0%,transparent 70%);"></div>
        <div class="s-brand"><div class="s1-brand-logo" style="width:36px;height:36px;background:linear-gradient(135deg,#FF6B00,#FFD700);border-radius:10px;display:grid;place-items:center;font-size:16px;font-weight:800;color:#000;font-family:'Syne',sans-serif;">FF</div><div class="s-brand-name">Finance Fundaa</div></div>
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:40px;">
          <div style="background:rgba(255,215,0,0.1);border:1px solid rgba(255,215,0,0.25);color:var(--gold);padding:5px 14px;border-radius:50px;font-size:11px;letter-spacing:2px;font-family:'Syne',sans-serif;font-weight:700;">TYPE 02</div>
          <div class="s-heading" style="margin:0;font-size:42px;">Business <span>Funds</span></div>
        </div>
        <div class="biz-grid">
          <div class="biz-card">
            <div class="biz-num">01</div>
            <i class="fa-solid fa-gears biz-icon"></i>
            <div class="biz-title">Working Capital Fund</div>
            <p class="biz-desc">Rozana ke operations — salary, rent, bills, inventory — sab ke liye. Iske bina bada se bada business bhi ruk sakta hai.</p>
            <span class="biz-tag">Daily Operations</span>
          </div>
          <div class="biz-card">
            <div class="biz-num">02</div>
            <i class="fa-solid fa-chart-pie biz-icon"></i>
            <div class="biz-title">Reserve Fund</div>
            <p class="biz-desc">Profit ka ek hissa future ke liye bachao. Business expand karna ho, naya product launch karna ho — yahi kaam aata hai.</p>
            <span class="biz-tag">Future Growth</span>
          </div>
          <div class="biz-card">
            <div class="biz-num">03</div>
            <i class="fa-solid fa-shield-halved biz-icon"></i>
            <div class="biz-title">Contingency Fund</div>
            <p class="biz-desc">Unexpected losses, market downturns, natural disasters — business survival ke liye backup plan zaroori hai.</p>
            <span class="biz-tag">Risk Protection</span>
          </div>
          <div class="biz-card">
            <div class="biz-num">04</div>
            <i class="fa-solid fa-handshake biz-icon"></i>
            <div class="biz-title">Sinking Fund</div>
            <p class="biz-desc">Bade future kharche ke liye — machinery replace karna, loan repay karna. Pehle se plan karo, stress kam karo.</p>
            <span class="biz-tag">Long-term Planning</span>
          </div>
        </div>
        <div class="s-progress" style="width:41.66%"></div>
        <div class="s-footer">05 / 12</div>
      </div>

      <!-- ═══ SLIDE 6: RETURNS CHART ═══ -->
      <div class="slide" id="s6">
        <div class="geo-circle" style="width:500px;height:500px;top:-150px;right:-100px;background:radial-gradient(circle,rgba(255,107,0,0.06) 0%,transparent 70%);"></div>
        <div class="s-brand"><div class="s1-brand-logo" style="width:36px;height:36px;background:linear-gradient(135deg,#FF6B00,#FFD700);border-radius:10px;display:grid;place-items:center;font-size:16px;font-weight:800;color:#000;font-family:'Syne',sans-serif;">FF</div><div class="s-brand-name">Finance Fundaa</div></div>
        <div class="s-heading" style="font-size:42px;">Investment Funds Ka <span>Real Power</span></div>
        <div class="chart-area">
          <div style="margin-bottom:8px;font-size:13px;color:#2a3f55;letter-spacing:1px;font-family:'Syne',sans-serif;font-weight:700;text-transform:uppercase;">Annual Returns Comparison</div>
          <div class="chart-row">
            <div class="cr-label">Savings Account</div>
            <div class="cr-track"><div class="cr-fill savings">~3%</div></div>
          </div>
          <div class="chart-row">
            <div class="cr-label">Fixed Deposit (FD)</div>
            <div class="cr-track"><div class="cr-fill fd">~6.5%</div></div>
          </div>
          <div class="chart-row">
            <div class="cr-label">Mutual Funds</div>
            <div class="cr-track"><div class="cr-fill mf">12–15%</div></div>
          </div>
          <p class="chart-note">*Long-term historical average. Past performance ≠ future returns.</p>
          <div class="highlight-row">
            <i class="fa-solid fa-bolt-lightning"></i>
            <p>₹10,000 / month SIP at 12% for <strong>20 years</strong> = <strong style="color:var(--gold);">₹99 Lakh+</strong> — almost ₹1 Crore!</p>
          </div>
        </div>
        <div class="s-progress" style="width:50%"></div>
        <div class="s-footer">06 / 12</div>
      </div>

      <!-- ═══ SLIDE 7: INVESTMENT FUND TYPES ═══ -->
      <div class="slide" id="s7">
        <div class="geo-circle" style="width:400px;height:400px;bottom:-100px;left:-100px;background:radial-gradient(circle,rgba(255,107,0,0.05) 0%,transparent 70%);"></div>
        <div class="s-brand"><div class="s1-brand-logo" style="width:36px;height:36px;background:linear-gradient(135deg,#FF6B00,#FFD700);border-radius:10px;display:grid;place-items:center;font-size:16px;font-weight:800;color:#000;font-family:'Syne',sans-serif;">FF</div><div class="s-brand-name">Finance Fundaa</div></div>
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:36px;">
          <div style="background:rgba(255,107,0,0.1);border:1px solid rgba(255,107,0,0.25);color:var(--saffron);padding:5px 14px;border-radius:50px;font-size:11px;letter-spacing:2px;font-family:'Syne',sans-serif;font-weight:700;">TYPE 03</div>
          <div class="s-heading" style="margin:0;font-size:40px;">Investment <span>Fund Types</span></div>
        </div>
        <div class="inv-list">
          <div class="inv-item">
            <div class="inv-icon-wrap"><i class="fa-solid fa-chart-line"></i></div>
            <div class="inv-body">
              <h4>Mutual Funds</h4>
              <p>Professional fund managers aapka paisa stock market mein lagate hain — diversified aur managed.</p>
            </div>
            <div class="inv-badge">Medium–High Risk</div>
          </div>
          <div class="inv-item">
            <div class="inv-icon-wrap"><i class="fa-solid fa-list-check"></i></div>
            <div class="inv-body">
              <h4>Index Funds (Nifty 50)</h4>
              <p>Top 50 companies ko track karo, fees bohot kam hoti hai — beginner ke liye best choice!</p>
            </div>
            <div class="inv-badge">Low Cost</div>
          </div>
          <div class="inv-item">
            <div class="inv-icon-wrap"><i class="fa-solid fa-droplet"></i></div>
            <div class="inv-body">
              <h4>Liquid Funds</h4>
              <p>FD se behtar flexibility, safe investment — emergency fund yahan rakhna smart hai.</p>
            </div>
            <div class="inv-badge">Low Risk</div>
          </div>
        </div>
        <div class="s-progress" style="width:58.33%"></div>
        <div class="s-footer">07 / 12</div>
      </div>

      <!-- ═══ SLIDE 8: GOVERNMENT FUNDS ═══ -->
      <div class="slide" id="s8">
        <div class="geo-circle" style="width:600px;height:600px;top:-200px;right:-150px;background:radial-gradient(circle,rgba(255,215,0,0.05) 0%,transparent 70%);"></div>
        <div class="s-brand"><div class="s1-brand-logo" style="width:36px;height:36px;background:linear-gradient(135deg,#FF6B00,#FFD700);border-radius:10px;display:grid;place-items:center;font-size:16px;font-weight:800;color:#000;font-family:'Syne',sans-serif;">FF</div><div class="s-brand-name">Finance Fundaa</div></div>
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;">
          <div style="background:rgba(255,215,0,0.1);border:1px solid rgba(255,215,0,0.25);color:var(--gold);padding:5px 14px;border-radius:50px;font-size:11px;letter-spacing:2px;font-family:'Syne',sans-serif;font-weight:700;">TYPE 04</div>
          <div class="s-heading" style="margin:0;font-size:40px;">Government <span style="color:var(--gold);">Funds</span></div>
        </div>
        <div class="gov-layout">
          <div class="gov-visual">
            <img src="https://images.unsplash.com/photo-1564507592333-c60657eaa0ae?q=80&w=600&auto=format" alt="Parliament" onerror="this.parentElement.style.background='linear-gradient(135deg,#0e2040,#091528)';this.style.display='none'">
            <div class="gov-overlay"><strong>🇮🇳 Consolidated Fund of India</strong></div>
          </div>
          <div class="gov-points">
            <p style="color:#4a6a85;font-size:15px;line-height:1.6;margin-bottom:8px;">Bharat Sarkar hamare <strong style="color:#fff;">tax ke paise</strong> se desh chalati hai — yahan se infrastructure, welfare, aur development hota hai.</p>
            <div class="gov-point">
              <div class="gp-icon"><i class="fa-solid fa-road"></i></div>
              <div class="gp-body"><strong>Infrastructure Fund</strong><p>Roads, Metro, Bridges, Ports — desh build hota hai isi se.</p></div>
            </div>
            <div class="gov-point">
              <div class="gp-icon"><i class="fa-solid fa-heart-pulse"></i></div>
              <div class="gp-body"><strong>Welfare & Health</strong><p>PM Jan Arogya, subsidies, social schemes — sab government fund se.</p></div>
            </div>
            <div class="gov-point">
              <div class="gp-icon"><i class="fa-solid fa-landmark"></i></div>
              <div class="gp-body"><strong>Contingency Fund</strong><p>Emergency ke liye — flood, war, pandemic — sab ke liye backup.</p></div>
            </div>
          </div>
        </div>
        <div class="s-progress" style="width:66.66%"></div>
        <div class="s-footer">08 / 12</div>
      </div>

      <!-- ═══ SLIDE 9: CHARITY FUNDS ═══ -->
      <div class="slide" id="s9">
        <div class="geo-circle" style="width:500px;height:500px;top:-150px;left:-100px;background:radial-gradient(circle,rgba(52,211,153,0.04) 0%,transparent 70%);"></div>
        <div class="s-brand"><div class="s1-brand-logo" style="width:36px;height:36px;background:linear-gradient(135deg,#FF6B00,#FFD700);border-radius:10px;display:grid;place-items:center;font-size:16px;font-weight:800;color:#000;font-family:'Syne',sans-serif;">FF</div><div class="s-brand-name">Finance Fundaa</div></div>
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:36px;">
          <div style="background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.25);color:#34d399;padding:5px 14px;border-radius:50px;font-size:11px;letter-spacing:2px;font-family:'Syne',sans-serif;font-weight:700;">TYPE 05</div>
          <div class="s-heading" style="margin:0;font-size:40px;">Institutional &amp; <span style="color:#34d399;">Charity Funds</span></div>
        </div>
        <div class="charity-grid">
          <div class="charity-cards">
            <div class="charity-card">
              <div class="cc-icon orange"><i class="fa-solid fa-graduation-cap"></i></div>
              <div class="cc-body"><strong>Scholarship Fund</strong><p>Garib aur meritorious bachon ki education ke liye — talent ko paisa rok na sake.</p></div>
            </div>
            <div class="charity-card">
              <div class="cc-icon green"><i class="fa-solid fa-hand-holding-heart"></i></div>
              <div class="cc-body"><strong>Charity / Relief Fund</strong><p>Disaster relief, health, environment — society ke liye. PM Relief Fund is ka example hai.</p></div>
            </div>
            <div class="charity-card">
              <div class="cc-icon blue"><i class="fa-solid fa-infinity"></i></div>
              <div class="cc-body"><strong>Endowment Fund</strong><p>University ya NGO ko "perpetual income" milti hai — principal safe, sirf returns use hotey hain.</p></div>
            </div>
          </div>
          <div class="charity-visual-box">
            <span class="big-icon">🤝</span>
            <p class="charity-quote">"In funds ka maqsad <strong>profit nahi</strong>, balki <strong>purpose</strong> hota hai — society mein badlav lana."</p>
          </div>
        </div>
        <div class="s-progress" style="width:75%"></div>
        <div class="s-footer">09 / 12</div>
      </div>

      <!-- ═══ SLIDE 10: PIE CHART ═══ -->
      <div class="slide" id="s10">
        <div class="geo-circle" style="width:600px;height:600px;bottom:-200px;right:-150px;background:radial-gradient(circle,rgba(255,107,0,0.05) 0%,transparent 70%);"></div>
        <div class="s-brand"><div class="s1-brand-logo" style="width:36px;height:36px;background:linear-gradient(135deg,#FF6B00,#FFD700);border-radius:10px;display:grid;place-items:center;font-size:16px;font-weight:800;color:#000;font-family:'Syne',sans-serif;">FF</div><div class="s-brand-name">Finance Fundaa</div></div>
        <div class="s-heading" style="font-size:44px;">Risk aur Reward Ka <span>Smart Balance</span></div>
        <div class="pie-layout">
          <div class="donut-wrap">
            <svg class="donut-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#FF6B00"/>
                  <stop offset="100%" style="stop-color:#FFD700"/>
                </linearGradient>
              </defs>
              <!-- Donut segments -->
              <circle cx="100" cy="100" r="70" fill="none" stroke="#1a2a40" stroke-width="36"/>
              <!-- Equity 50% -->
              <circle cx="100" cy="100" r="70" fill="none" stroke="url(#g1)" stroke-width="36"
                stroke-dasharray="219.9 439.8" stroke-dashoffset="109.9" stroke-linecap="butt"/>
              <!-- Debt 30% -->
              <circle cx="100" cy="100" r="70" fill="none" stroke="#1e3a5f" stroke-width="36"
                stroke-dasharray="131.9 439.8" stroke-dashoffset="-110" stroke-linecap="butt"/>
              <!-- Cash 20% -->
              <circle cx="100" cy="100" r="70" fill="none" stroke="#2a4060" stroke-width="36"
                stroke-dasharray="87.96 439.8" stroke-dashoffset="-242" stroke-linecap="butt"/>
              <text x="100" y="94" text-anchor="middle" font-family="'Syne',sans-serif" font-size="22" font-weight="800" fill="#fff">IDEAL</text>
              <text x="100" y="116" text-anchor="middle" font-family="'Syne',sans-serif" font-size="11" fill="#4a6a85" letter-spacing="2">PORTFOLIO</text>
            </svg>
          </div>
          <div>
            <div class="legend-items">
              <div class="leg-item">
                <div class="leg-dot" style="background:linear-gradient(135deg,#FF6B00,#FFD700);width:20px;height:20px;border-radius:6px;"></div>
                <div class="leg-body"><strong>Equity (Stocks)</strong><p>High growth potential — long term ke liye best</p></div>
                <div class="leg-pct">50%</div>
              </div>
              <div class="leg-item">
                <div class="leg-dot" style="background:#1e3a5f;width:20px;height:20px;border-radius:6px;border:1px solid #2a5080;"></div>
                <div class="leg-body"><strong>Debt (Bonds)</strong><p>Stability aur regular income ke liye</p></div>
                <div class="leg-pct" style="color:#60a5fa;">30%</div>
              </div>
              <div class="leg-item">
                <div class="leg-dot" style="background:#2a4060;width:20px;height:20px;border-radius:6px;border:1px solid #3a5070;"></div>
                <div class="leg-body"><strong>Cash / Gold</strong><p>Liquidity aur ultimate safety net</p></div>
                <div class="leg-pct" style="color:#94a3b8;">20%</div>
              </div>
            </div>
            <div class="pie-note">
              Professional funds isi balance ke saath aapka return <strong>safe rakhte hain</strong> aur badhate bhi hain. Yeh ratio <strong>age aur risk appetite</strong> ke saath change hota hai.
            </div>
          </div>
        </div>
        <div class="s-progress" style="width:83.33%"></div>
        <div class="s-footer">10 / 12</div>
      </div>

      <!-- ═══ SLIDE 11: RETIREMENT ═══ -->
      <div class="slide" id="s11">
        <div class="geo-circle" style="width:500px;height:500px;top:-100px;right:-100px;background:radial-gradient(circle,rgba(96,165,250,0.05) 0%,transparent 70%);"></div>
        <div class="s-brand"><div class="s1-brand-logo" style="width:36px;height:36px;background:linear-gradient(135deg,#FF6B00,#FFD700);border-radius:10px;display:grid;place-items:center;font-size:16px;font-weight:800;color:#000;font-family:'Syne',sans-serif;">FF</div><div class="s-brand-name">Finance Fundaa</div></div>
        <div style="display:flex;align-items:center;gap:16px;margin-bottom:8px;">
          <div style="background:rgba(96,165,250,0.1);border:1px solid rgba(96,165,250,0.25);color:#60a5fa;padding:5px 14px;border-radius:50px;font-size:11px;letter-spacing:2px;font-family:'Syne',sans-serif;font-weight:700;">TYPE 06</div>
          <div class="s-heading" style="margin:0;font-size:40px;">Retirement <span style="color:#60a5fa;">Funds</span></div>
        </div>
        <div class="ret-layout">
          <div class="ret-stat-box">
            <span class="ret-pct">70%</span>
            <p class="ret-pct-label"><strong>Logon ke paas koi retirement plan nahi!</strong>Kya aap taiyar hain jab income band hogi?</p>
          </div>
          <div class="ret-cards">
            <div class="ret-card">
              <strong>🏛️ NPS (National Pension Scheme)</strong>
              <p>Government-backed pension scheme. Retirement pe guaranteed monthly income. Tax benefit bhi milta hai.</p>
            </div>
            <div class="ret-card">
              <strong>💰 EPF / PPF</strong>
              <p>EPF — employer contribute karta hai. PPF — completely safe, tax-free, 15 saal ka compound magic.</p>
            </div>
            <div class="ret-card">
              <strong>🎁 Gratuity Fund</strong>
              <p>5+ saal ek company mein — exit pe company ek lump sum deti hai. Long-term loyalty ka inaam!</p>
            </div>
          </div>
        </div>
        <div class="s-progress" style="width:91.66%"></div>
        <div class="s-footer">11 / 12</div>
      </div>

      <!-- ═══ SLIDE 12: CTA ═══ -->
      <div class="slide" id="s12">
        <div class="geo-circle" style="width:700px;height:700px;top:-200px;right:-200px;background:radial-gradient(circle,rgba(255,107,0,0.06) 0%,transparent 70%);"></div>
        <div class="geo-circle" style="width:500px;height:500px;bottom:-200px;left:-150px;background:radial-gradient(circle,rgba(255,215,0,0.05) 0%,transparent 70%);"></div>
        <div class="s-brand"><div class="s1-brand-logo" style="width:36px;height:36px;background:linear-gradient(135deg,#FF6B00,#FFD700);border-radius:10px;display:grid;place-items:center;font-size:16px;font-weight:800;color:#000;font-family:'Syne',sans-serif;">FF</div><div class="s-brand-name">Finance Fundaa</div></div>
        <div class="s-heading" style="font-size:40px;">Apna <span>Fund Roadmap</span> — Aaj Se Start!</div>
        <div class="cta-table-wrap">
          <table class="cta-table">
            <thead>
              <tr>
                <th>Goal</th>
                <th>Fund Type</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mushkil Waqt (Emergency)</td>
                <td>Emergency / Liquid Fund</td>
                <td class="priority-must">🔴 Must Have</td>
              </tr>
              <tr>
                <td>Wealth Growth (Future)</td>
                <td>Mutual Fund / Index Fund</td>
                <td class="priority-high">🟢 High</td>
              </tr>
              <tr>
                <td>Old Age Security</td>
                <td>NPS / EPF / PPF</td>
                <td class="priority-veryhigh">🔵 Very High</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cta-bottom">
          <div class="cta-headline">Aapka Safar<br><span>Aaj Se Shuru Hota Hai! 🚀</span></div>
          <p class="cta-sub">Aise hi simple finance tips ke liye follow karein</p>
          <div class="cta-handle"><i class="fa-brands fa-linkedin"></i> Vishal Kumar | linkedin.com/in/Vishlkumar</div>
        </div>
        <div class="s-progress" style="width:100%"></div>
        <div class="s-footer">12 / 12</div>
      </div>

    </div><!-- slides-wrapper -->
  </div><!-- slide-track -->

  <!-- Controls -->
  <div class="controls">
    <button class="btn-nav" id="btnPrev" onclick="navigate(-1)" disabled>
      <i class="fa-solid fa-chevron-left"></i>
    </button>
    <div class="dots" id="dotsContainer"></div>
    <span class="slide-counter" id="slideCounter">01 / 12</span>
    <button class="btn-nav" id="btnNext" onclick="navigate(1)">
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  </div>

  <!-- AI Bar -->
  <div id="ai-bar">
    <button class="ai-toggle-btn" id="aiToggle" onclick="toggleAI()">
      <i class="fa-solid fa-wand-magic-sparkles"></i>
      AI Insight: Is Slide Ko Aur Deeply Samjhein
      <i class="fa-solid fa-chevron-down chevron"></i>
    </button>
    <div class="ai-content" id="aiContent">
      <div class="ai-header">
        <span class="ai-badge">Claude AI</span>
        <span class="ai-title">Slide Insight</span>
      </div>
      <div id="ai-text">
        <div class="ai-loading"><div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div></div>
      </div>
    </div>
  </div>

</div>

<script>
let current = 0;
const total = 12;
const wrapper = document.getElementById('slidesWrapper');

// Build dots
const dotsContainer = document.getElementById('dotsContainer');
for (let i = 0; i < total; i++) {
  const d = document.createElement('div');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.onclick = () => goTo(i);
  dotsContainer.appendChild(d);
}

function goTo(n) {
  current = n;
  wrapper.style.transform = `translateX(-${current * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
  document.getElementById('slideCounter').textContent = String(current + 1).padStart(2, '0') + ' / ' + String(total).padStart(2, '0');
  document.getElementById('btnPrev').disabled = current === 0;
  document.getElementById('btnNext').disabled = current === total - 1;
  // Reset AI panel
  const aiContent = document.getElementById('aiContent');
  aiContent.classList.remove('visible');
  document.getElementById('aiToggle').classList.remove('open');
}

function navigate(dir) {
  const next = current + dir;
  if (next >= 0 && next < total) goTo(next);
}

// Keyboard nav
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') navigate(1);
  if (e.key === 'ArrowLeft') navigate(-1);
});

// Touch/swipe
let touchStart = 0;
wrapper.addEventListener('touchstart', e => touchStart = e.changedTouches[0].clientX);
wrapper.addEventListener('touchend', e => {
  const diff = touchStart - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1);
});

// ─── AI INSIGHTS ─────────────────────────────────────────────
const slideContexts = [
  "This is the cover slide titled 'Fund Kya Hai?' by Vishal Kumar from Finance Fundaa — a financial literacy series about investment funds in Hindi.",
  "Slide 2 explains the concept of a Fund using the Goa trip example — 10 friends pool ₹5000/month each for a shared travel goal. This is pooling capital for a common purpose.",
  "Slide 3 covers 3 key benefits of investing in funds: Expert Management by professional fund managers, Risk Management through diversification, and affordable entry at just ₹500.",
  "Slide 4 covers Personal Funds — Emergency Fund (6 months expenses), Education Fund for skills/children's studies, and Goal Funds for specific targets like a car or house.",
  "Slide 5 covers Business Funds — Working Capital for daily operations, Reserve Fund for growth, Contingency Fund for unexpected events, and Sinking Fund for large planned expenses.",
  "Slide 6 shows a bar chart comparing annual returns: Savings Account ~3%, Fixed Deposit ~6.5%, Mutual Funds 12-15%. It also shows that ₹10,000/month SIP at 12% for 20 years grows to ₹99 Lakh+.",
  "Slide 7 covers 3 types of Investment Funds: Mutual Funds (professionally managed, medium-high risk), Index Funds tracking Nifty 50 (low cost, good for beginners), and Liquid Funds (safe, better than FD for emergency corpus).",
  "Slide 8 covers Government Funds — the Consolidated Fund of India funded by taxes, used for infrastructure (roads, metro), welfare schemes (PM Jan Arogya), and Contingency Fund for national emergencies.",
  "Slide 9 covers Institutional and Charity Funds — Scholarship Funds for underprivileged students, Charity/Relief Funds for disasters and health, and Endowment Funds that preserve principal and use only returns.",
  "Slide 10 shows a donut chart of an ideal portfolio allocation — 50% Equity for high growth, 30% Debt for stability, 20% Cash/Gold for liquidity. Professionals rebalance this based on age and risk appetite.",
  "Slide 11 covers Retirement Funds — warning that 70% Indians lack a retirement plan. Solutions: NPS for pension income with tax benefits, EPF/PPF for employer matching and tax-free compounding, and Gratuity for long-term employees.",
  "Slide 12 is the summary and CTA — a table showing: Emergency Fund (Must Have), Mutual/Index Funds (High priority), NPS/EPF (Very High priority). Ends with a call to follow Vishal Kumar on LinkedIn."
];

let aiOpen = false;
let aiCache = {};

function toggleAI() {
  const btn = document.getElementById('aiToggle');
  const content = document.getElementById('aiContent');
  aiOpen = !aiOpen;
  btn.classList.toggle('open', aiOpen);
  if (aiOpen) {
    content.classList.add('visible');
    loadAIInsight();
  } else {
    content.classList.remove('visible');
  }
}

async function loadAIInsight() {
  const aiText = document.getElementById('ai-text');
  if (aiCache[current]) {
    aiText.innerHTML = aiCache[current];
    return;
  }
  aiText.innerHTML = `<div class="ai-loading"><div class="ai-dot"></div><div class="ai-dot"></div><div class="ai-dot"></div></div>`;

  const prompt = `You are a financial education assistant helping Indian investors understand personal finance concepts.

Context about the current slide (slide ${current + 1} of 12):
${slideContexts[current]}

Write a helpful 3-4 sentence insight in a mix of Hindi and English (Hinglish) that:
1. Adds ONE interesting fact or stat not already in the slide
2. Gives ONE practical actionable tip related to this slide's topic
3. Keeps it conversational and encouraging

Keep it under 80 words. No bullet points. Just flowing Hinglish prose.`;

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [{ role: "user", content: prompt }]
      })
    });
    const data = await res.json();
    const text = data.content?.find(b => b.type === 'text')?.text || "Insight load nahi hua. Dobara try karein.";
    aiCache[current] = text;
    aiText.innerHTML = text;
  } catch (e) {
    aiText.innerHTML = "AI insight abhi available nahi hai. Internet connection check karein.";
  }
}
</script>
</body>
</html>