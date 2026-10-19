import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const HOURS_PER_YEAR = 8760;
const CURRENCIES = {
  USD: "$",
  EUR: "€",
  GBP: "£",
  CAD: "C$",
  MXN: "MX$",
  BRL: "R$",
  ARS: "AR$",
  CLP: "CLP$",
  COP: "COL$",
  PEN: "S/",
} as const;
type Currency = keyof typeof CURRENCIES;

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

function useAnimatedNumber(target: number, duration = 400) {
  const [value, setValue] = useState(target);
  const fromRef = useRef(target);
  useEffect(() => {
    const from = fromRef.current;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = from + (target - from) * eased;
      setValue(next);
      fromRef.current = next;
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return value;
}

const fmt = (n: number) => Math.round(n).toLocaleString("en-GB");

const ChargingPartnersCalculator = () => {
  const [connectorsInput, setConnectorsInput] = useState("10");
  const [priceInput, setPriceInput] = useState("0.45");
  const [utilisation, setUtilisation] = useState(12);
  const [currency, setCurrency] = useState<Currency>("USD");
  const [powerInput, setPowerInput] = useState("120");
  const [powerOpen, setPowerOpen] = useState(true);

  const connectors = clamp(Number(connectorsInput) || 0, 0, 10000);
  const price = clamp(Number(priceInput) || 0, 0, 5);
  const power = clamp(Number(powerInput) || 0, 0, 1000);
  const symbol = CURRENCIES[currency];

  const energyPerConnector = power * HOURS_PER_YEAR * (utilisation / 100);
  const annualRevenue = energyPerConnector * connectors * price;
  const valuePerPoint = power * HOURS_PER_YEAR * 0.01 * connectors * price;

  const animRevenue = useAnimatedNumber(annualRevenue);
  const animPoint = useAnimatedNumber(valuePerPoint);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>EV Charger Utilisation Calculator | NetworkCore</title>
        <meta name="description" content="See what your idle charging hours are worth. Enter connectors, price per kWh, and current utilisation to find out what each point of utilisation earns you per year." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://networkcore.org/charging-partners/calculator" />
      </Helmet>

      <Navigation />

      <section className="relative bg-foreground pt-32 pb-16 md:pb-24 overflow-hidden">
        <img src="/images/hero-background.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-foreground/50" aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight mb-4">
              What are your idle hours worth?
            </h1>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Inputs */}
            <div className="rounded-2xl bg-background p-6 md:p-8 space-y-7">
              <div className="space-y-2">
                <Label htmlFor="connectors" className="text-base font-normal">How many connectors?</Label>
                <Input id="connectors" type="number" inputMode="numeric" min={1} max={10000} step={1}
                  value={connectorsInput} onChange={(e) => setConnectorsInput(e.target.value)} className="h-12 text-base" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price" className="text-base font-normal">Average price per kWh</Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{symbol}</span>
                    <Input id="price" type="number" inputMode="decimal" min={0.05} max={5} step={0.01}
                      value={priceInput} onChange={(e) => setPriceInput(e.target.value)}
                      className="h-12 text-base" style={{ paddingLeft: `${0.75 + symbol.length * 0.6}rem` }} />
                  </div>
                  <select aria-label="Currency" value={currency} onChange={(e) => setCurrency(e.target.value as Currency)}
                    className="h-12 rounded-md border border-input bg-background px-3 text-sm">
                    {Object.keys(CURRENCIES).map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="utilisation" className="text-base font-normal">Current utilisation</Label>
                  <span className="text-base font-medium tabular-nums">{utilisation}%</span>
                </div>
                <input id="utilisation" type="range" min={1} max={100} step={1} value={utilisation}
                  onChange={(e) => setUtilisation(Number(e.target.value))}
                  aria-valuetext={`${utilisation} percent`}
                  className="w-full h-8 cursor-pointer accent-[hsl(var(--foreground))]" />
              </div>

              <div className="border-t border-border pt-5 text-sm text-muted-foreground font-light space-y-2">
                <p>
                  Assumes{" "}
                  <button type="button" onClick={() => setPowerOpen((o) => !o)} aria-expanded={powerOpen} aria-controls="power-control"
                    className="inline-flex items-center gap-1 text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground">
                    {power} kW average delivered power
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${powerOpen ? "rotate-180" : ""}`} />
                  </button>{" "}
                  and 24 hours a day available.
                </p>
                {powerOpen && (
                  <div id="power-control" className="flex items-center gap-3 py-1">
                    <Label htmlFor="power" className="text-sm font-normal text-foreground">Average power</Label>
                    <Input id="power" type="number" inputMode="decimal" min={1} max={1000} step={1}
                      value={powerInput} onChange={(e) => setPowerInput(e.target.value)} className="h-9 w-24" />
                    <span>kW</span>
                  </div>
                )}
                <p>Utilisation means the share of hours a connector is actually delivering energy.</p>
              </div>
            </div>

            {/* Results */}
            <div aria-live="polite"
              className="sticky bottom-0 z-20 md:static rounded-2xl bg-background p-6 md:p-8 flex flex-col justify-center border border-border md:border-0 shadow-lg md:shadow-none">
              <p className="text-sm text-muted-foreground font-light">Annual charging revenue at {utilisation}% utilisation</p>
              <p className="text-2xl md:text-3xl font-light tabular-nums mb-5 md:mb-8">{symbol} {fmt(animRevenue)}</p>
              <p className="text-sm text-muted-foreground font-light">Every extra 1% utilisation adds</p>
              <p className="text-4xl md:text-6xl font-light tracking-tight tabular-nums">
                {symbol} {fmt(animPoint)} <span className="text-lg md:text-xl text-muted-foreground">a year</span>
              </p>
              <p className="text-2xl mt-4" aria-hidden="true">🚀</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/#contact"
              className="inline-flex items-center gap-2 bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-white/90 transition-colors">
              Become a Charging Partner <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChargingPartnersCalculator;
