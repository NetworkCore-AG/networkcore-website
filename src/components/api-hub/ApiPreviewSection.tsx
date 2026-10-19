import { MapPin, Zap, Square, ChevronRight, Receipt, History, CreditCard, Car, Settings, HelpCircle, Navigation2 } from "lucide-react";
import PhoneFrame from "./PhoneFrame";

interface ApiPreviewSectionProps {
  title?: string;
  description?: string;
}

const ApiPreviewSection = ({
  title = "What Your Users See",
  description = "Three moments from the charging journey, embedded inside your app via the NetworkCore API.",
}: ApiPreviewSectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-4xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Screen 1 — Find a Station */}
          <div className="flex flex-col items-center">
            <PhoneFrame>
              <div className="flex h-full flex-col">
                {/* Map area — real Mapbox static image of IonDrive Zapopan station */}
                <div className="relative h-[180px] bg-neutral-100 overflow-hidden">
                  <img
                    src="https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-l+171717(-103.4106,20.6736)/-103.4106,20.6736,14,0/480x360@2x?access_token=pk.eyJ1IjoidmljdG9ybmV0d29ya2NvcmUiLCJhIjoiY21rOHNuY2h1MGd5ZTNkcjMwbWU1dGFqZSJ9.yZnp-iPdhXdLI1i5XJh1Dw"
                    alt="Map of IonDrive station at Av. Ignacio L. Vallarta, Zapopan"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  {/* Bottom overlay bar — covers Mapbox attribution strip and hosts navigate quick-launch */}
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-white/95 backdrop-blur px-2 py-1.5 ring-1 ring-black/5">
                    <div className="text-[9px] font-semibold text-neutral-900">Zapopan · Vallarta</div>
                    <div className="flex items-center gap-1">
                      <span className="text-[8px] font-medium uppercase tracking-wider text-neutral-500 mr-0.5">Navigate</span>
                      {/* Google Maps */}
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white ring-1 ring-neutral-200" title="Google Maps">
                        <span className="text-[9px] font-bold leading-none" style={{ color: "#4285F4" }}>G</span>
                      </div>
                      {/* Apple Maps — rounded-square white tile with red diagonal arrow */}
                      <div className="flex h-5 w-5 items-center justify-center rounded-[6px] bg-white ring-1 ring-neutral-200" title="Apple Maps">
                        <svg viewBox="0 0 24 24" className="h-3 w-3">
                          <circle cx="12" cy="12" r="9" fill="#F2F2F7" />
                          <path d="M16.5 7.5L10 10l-2.5 6.5L14 14l2.5-6.5z" fill="#FF3B30" />
                          <path d="M16.5 7.5L14 14l2.5-6.5z" fill="#fff" opacity="0.9" />
                        </svg>
                      </div>
                      {/* Waze */}
                      <div className="flex h-5 w-5 items-center justify-center rounded-full" style={{ backgroundColor: "#33CCFF" }} title="Waze">
                        <span className="text-[8px] font-bold leading-none text-white">W</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Station card */}
                <div className="flex-1 p-4">
                  <div className="mb-1 text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                    Selected Station
                  </div>
                  <div className="text-sm font-semibold text-neutral-900">IonDrive — Vallarta, Zapopan</div>
                  <div className="mt-0.5 text-[11px] text-neutral-500">CCS · 150 kW · 0.8 km away</div>

                  {/* Stall selector */}
                  <div className="mt-3">
                    <div className="text-[10px] uppercase tracking-wider text-neutral-500 mb-1.5">Select stall</div>
                    <div className="grid grid-cols-4 gap-1.5">
                      {[
                        { n: "01", state: "busy" },
                        { n: "02", state: "free" },
                        { n: "03", state: "selected" },
                        { n: "04", state: "free" },
                      ].map((s) => (
                        <div
                          key={s.n}
                          className={
                            "flex flex-col items-center justify-center rounded-md py-1.5 text-[10px] font-semibold " +
                            (s.state === "selected"
                              ? "bg-neutral-900 text-white"
                              : s.state === "busy"
                              ? "bg-neutral-100 text-neutral-400"
                              : "bg-neutral-100 text-neutral-700")
                          }
                        >
                          <span>{s.n}</span>
                          <span className="text-[8px] font-normal opacity-80">
                            {s.state === "busy" ? "in use" : s.state === "selected" ? "selected" : "free"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-3 flex items-baseline justify-between border-t border-neutral-200 pt-2.5">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-neutral-500">Price</div>
                      <div className="text-base font-semibold text-neutral-900">$11.40<span className="text-[11px] font-normal text-neutral-500"> MXN / kWh</span></div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider text-neutral-500">Stall 03</div>
                      <div className="text-sm font-medium text-emerald-600">Available</div>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-1.5">
                    <button className="rounded-xl border border-neutral-300 py-2.5 text-[11px] font-semibold text-neutral-900">
                      Reserve
                    </button>
                    <button className="rounded-xl bg-neutral-900 py-2.5 text-[11px] font-semibold text-white">
                      Start Session
                    </button>
                  </div>
                </div>
              </div>
            </PhoneFrame>
            <p className="mt-6 text-sm text-muted-foreground font-light text-center max-w-[240px]">
              Discovery, stall selection & reservation
            </p>
          </div>

          {/* Screen 2 — Active Session */}
          <div className="flex flex-col items-center">
            <PhoneFrame>
              <div className="flex h-full flex-col p-5">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                    Charging
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-[10px] font-medium text-emerald-600">Live</span>
                  </div>
                </div>

                <div className="text-[11px] text-neutral-500 mt-0.5">IonDrive — Vallarta, Zapopan · Stall 03</div>

                {/* Energy ring */}
                <div className="relative mx-auto mt-6 flex h-[160px] w-[160px] items-center justify-center">
                  <svg className="absolute inset-0" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="44" fill="none" stroke="#f1f1f1" strokeWidth="6" />
                    <circle
                      cx="50"
                      cy="50"
                      r="44"
                      fill="none"
                      stroke="#171717"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 44}
                      strokeDashoffset={2 * Math.PI * 44 * (1 - 0.62)}
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-neutral-900">24.6</div>
                    <div className="text-[10px] uppercase tracking-wider text-neutral-500">kWh delivered</div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-neutral-200 pt-4">
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-neutral-500">Power</div>
                    <div className="text-sm font-semibold text-neutral-900">120 kW</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-neutral-500">Time</div>
                    <div className="text-sm font-semibold text-neutral-900">12:34</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-neutral-500">Cost</div>
                    <div className="text-sm font-semibold text-neutral-900">$280</div>
                  </div>
                </div>

                {/* SoC bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-[10px] text-neutral-500">
                    <span>State of charge</span>
                    <span>62%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-neutral-100">
                    <div className="h-full rounded-full bg-neutral-900" style={{ width: "62%" }} />
                  </div>
                </div>

                <button className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-300 py-2.5 text-xs font-semibold text-neutral-900">
                  <Square className="h-3 w-3 fill-current" />
                  Stop Session
                </button>
              </div>
            </PhoneFrame>
            <p className="mt-6 text-sm text-muted-foreground font-light text-center max-w-[240px]">
              Real-time control & cost visibility
            </p>
          </div>

          {/* Screen 3 — Charging Menu */}
          <div className="flex flex-col items-center">
            <PhoneFrame>
              <div className="flex h-full flex-col">
                <div className="px-5 pt-4 pb-3">
                  <div className="text-[10px] font-medium uppercase tracking-wider text-neutral-500">
                    Account
                  </div>
                  <div className="text-xl font-semibold text-neutral-900 tracking-tight">Charging</div>
                </div>

                <div className="flex-1 px-3">
                  {[
                    { icon: Zap, label: "Active Session", meta: "Live" },
                    { icon: History, label: "Sessions" },
                    { icon: Receipt, label: "Invoices" },
                    { icon: CreditCard, label: "Payment Methods" },
                    { icon: Car, label: "Vehicles" },
                    { icon: Settings, label: "Settings" },
                    { icon: HelpCircle, label: "Help" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-lg px-3 py-3 hover:bg-neutral-50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-100">
                          <item.icon className="h-3.5 w-3.5 text-neutral-700" strokeWidth={1.75} />
                        </div>
                        <span className="text-xs font-medium text-neutral-900">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.meta && (
                          <span className="text-[9px] font-medium text-emerald-600">{item.meta}</span>
                        )}
                        <ChevronRight className="h-3.5 w-3.5 text-neutral-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PhoneFrame>
            <p className="mt-6 text-sm text-muted-foreground font-light text-center max-w-[240px]">
              Drops into your existing app navigation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiPreviewSection;
