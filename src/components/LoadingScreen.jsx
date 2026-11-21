import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND } from '../data/storeData';

const PRELOAD_IMAGES = [
  BRAND.logo,
  '/categories/wedding_saree.jpg',
  '/categories/gown.jpg',
  '/categories/aline.jpg',
  '/categories/anarkali.jpg',
  '/categories/lehanka.jpg',
];

export default function LoadingScreen({ isVisible, onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const minDuration = prefersReducedMotion ? 350 : 1450;
    const maxDuration = 2600;
    const startTime = performance.now();

    let loadedCount = 0;
    let imagesDone = false;
    let finished = false;
    let rafId = null;

    const finishOnce = () => {
      if (finished) return;
      finished = true;
      setProgress(100);
      window.setTimeout(() => {
        onFinish();
      }, prefersReducedMotion ? 100 : 280);
    };

    const markOneLoaded = () => {
      loadedCount += 1;
      if (loadedCount >= PRELOAD_IMAGES.length) {
        imagesDone = true;
      }
    };

    PRELOAD_IMAGES.forEach((src) => {
      const img = new Image();
      img.onload = markOneLoaded;
      img.onerror = markOneLoaded;
      img.src = src;
    });

    const tick = (now) => {
      const elapsed = now - startTime;
      const timeFraction = Math.min(1, elapsed / minDuration);
      const imageFraction = loadedCount / PRELOAD_IMAGES.length;

      // Blend time easing with real image preload progress so the bar moves smoothly
      const targetProgress = Math.min(
        100,
        Math.round((timeFraction * 0.65 + imageFraction * 0.35) * 100)
      );
      setProgress((prev) => (targetProgress > prev ? targetProgress : prev));

      if ((elapsed >= minDuration && imagesDone) || elapsed >= maxDuration) {
        finishOnce();
        return;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isVisible, onFinish]);

  useEffect(() => {
    if (!isVisible) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="Loading Alankrita Boutique"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#F7F1EA] text-[#1E1813] px-6 select-none"
        >
          {/* Architectural Plaster Arch Backdrop echoing the Hero */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -left-32 w-[540px] h-[540px] sm:w-[760px] sm:h-[760px] rounded-full bg-gradient-to-br from-[#FFFCF9] via-[#F4ECE3] to-[#EBE0D3] opacity-90"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-44 -right-32 w-[480px] h-[480px] sm:w-[680px] sm:h-[680px] rounded-full bg-gradient-to-tl from-[#EFE5D8] via-[#F5EDE4] to-transparent opacity-80"
          />

          {/* Subtle Outer Hairline Frame */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-4 sm:inset-7 border border-[#E5D9CA]/80"
          />

          {/* Center Editorial Lockup */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            {/* Monogram Emblem with Delicate Rotating Gold Ring */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
              <svg
                viewBox="0 0 120 120"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="57"
                  fill="none"
                  stroke="#DFD0BA"
                  strokeWidth="1"
                />
              </svg>
              <motion.svg
                viewBox="0 0 120 120"
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 5.5, ease: 'linear' }}
                className="absolute inset-0 w-full h-full"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="57"
                  fill="none"
                  stroke="#9C7A3C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="92 270"
                />
              </motion.svg>

              <div className="w-[88px] h-[88px] sm:w-[100px] sm:h-[100px] rounded-full overflow-hidden border border-[#D4BA8A] bg-[#14110E] shadow-md">
                <img
                  src={BRAND.logo}
                  alt="Alankrita Boutique Monogram"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Wordmark */}
            <h1 className="mt-7 font-serif font-normal text-[34px] sm:text-[44px] tracking-[0.1em] text-[#1E1813] leading-none">
              {BRAND.name}
            </h1>

            {/* Quiet Unboxed Boutique Metadata */}
            <div className="mt-3 flex items-center gap-2 text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-[#6E5E50]">
              <span>Women&apos;s &amp; Kids&apos; Boutique</span>
              <span aria-hidden="true">·</span>
              <span>Kochi</span>
            </div>

            {/* Ultra-Thin Editorial Progress Bar */}
            <div className="mt-9 w-48 sm:w-60 flex flex-col items-center">
              <div className="w-full h-[1.5px] bg-[#E2D5C5] overflow-hidden">
                <div
                  className="h-full bg-[#1E1813] origin-left transition-transform duration-150 ease-out"
                  style={{ transform: `scaleX(${progress / 100})` }}
                />
              </div>
              <div className="mt-3 w-full flex items-center justify-between text-[11px] tracking-[0.14em] uppercase text-[#7C6D5F]">
                <span>Preparing Collection</span>
                <span className="tabular-nums font-medium text-[#1E1813]">
                  {progress}%
                </span>
              </div>
            </div>
          </motion.div>

          {/* Subtle Bottom Skip Affordance */}
          <button
            type="button"
            onClick={onFinish}
            className="absolute bottom-8 sm:bottom-11 z-10 text-[11px] tracking-[0.16em] uppercase text-[#7C6D5F] hover:text-[#1E1813] transition-colors cursor-pointer py-2 px-4"
          >
            Enter Boutique
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
