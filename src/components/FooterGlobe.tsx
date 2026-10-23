import { useEffect, useRef } from "react";

// Charging hubs across the markets we serve. Each one flashes now and then, like a session starting.
const CITIES: [number, number][] = [
  [40.42, -3.7], [41.39, 2.17], [38.72, -9.14], [48.86, 2.35], [51.51, -0.13], [52.37, 4.9],
  [50.85, 4.35], [52.52, 13.4], [48.14, 11.58], [47.37, 8.54], [45.46, 9.19], [54.69, 25.28],
  [59.33, 18.07], [59.91, 10.75], [52.23, 21.01], [48.21, 16.37], [19.43, -99.13], [25.69, -100.32],
  [20.67, -103.35], [4.71, -74.07], [8.98, -79.52], [-12.05, -77.04], [-33.45, -70.67], [-23.55, -46.63],
  [-34.6, -58.38], [40.71, -74.0], [25.76, -80.19], [34.05, -118.24], [43.65, -79.38], [6.52, 3.38],
  [-1.29, 36.82], [25.2, 55.27], [1.35, 103.82], [35.68, 139.69], [-33.87, 151.21],
];

const PEAK = 0.1;
const PULSE_MS = 1400;

const FooterGlobe = ({ className = "" }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let globe: { destroy: () => void } | null = null;
    let cancelled = false;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const start = async () => {
      const { default: createGlobe } = await import("cobe");
      if (cancelled || !canvasRef.current) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const size = canvas.offsetWidth || 720;
      const now = () => performance.now();
      // Each city gets its own random next flash time, so the flashes never sync up.
      const nextBeep = CITIES.map(() => now() + Math.random() * 8000);
      const beepAt = CITIES.map(() => -Infinity);
      let phi = 4.6;

      globe = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: size * dpr,
        height: size * dpr,
        phi,
        theta: 0.28,
        dark: 0,
        diffuse: 1.1,
        mapSamples: 16000,
        mapBrightness: 4,
        mapBaseBrightness: 0,
        baseColor: [0.96, 0.96, 0.96],
        markerColor: [0.06, 0.74, 0.12],
        glowColor: [0.96, 0.96, 0.96],
        markers: CITIES.map((location) => ({ location, size: reduceMotion ? 0.03 : 0 })),
        onRender: (state) => {
          if (reduceMotion) return;
          const t = now();
          phi += 0.0022;
          state.phi = phi;
          state.markers = CITIES.map((location, i) => {
            if (t >= nextBeep[i]) {
              beepAt[i] = t;
              nextBeep[i] = t + 2500 + Math.random() * 9000;
            }
            const p = (t - beepAt[i]) / PULSE_MS;
            // Quick rise, slow fade; a faint dot stays between flashes.
            const pulse = p >= 0 && p < 1 ? Math.sin(Math.PI * Math.min(p * 2.5, 1)) * (1 - p) + (1 - p) * 0.4 : 0;
            return { location, size: 0.012 + PEAK * pulse };
          });
          state.width = size * dpr;
          state.height = size * dpr;
        },
      });
    };

    // Only start the globe once the footer comes into view.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          observer.disconnect();
          start();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(canvas);

    return () => {
      cancelled = true;
      observer.disconnect();
      globe?.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} className={`block aspect-square ${className}`} aria-hidden="true" />;
};

export default FooterGlobe;
